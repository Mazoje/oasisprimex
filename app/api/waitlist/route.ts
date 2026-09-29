import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "You are already on the waitlist!" },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: dbError.message }, { status: 400 });
    }

    // 2. Dispatch Welcome Email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "OasisPrimeX <onboarding@oasisprimex.net>",
      to: [email],
      subject: "Welcome to the OasisPrimeX Waitlist",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Welcome to OasisPrimeX!</h2>
          <p>Thank you for joining our waitlist. You are now queued for early access and priority updates.</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend delivery error:", emailError);
      return NextResponse.json(
        { error: `Email Error: ${emailError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: emailData?.id }, { status: 200 });
  } catch (err: any) {
    console.error("Waitlist API handler exception:", err);
    return NextResponse.json(
      { error: err?.message || "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}