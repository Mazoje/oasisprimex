import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Verify Environment Variables inside handler
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server Configuration Error: Missing Supabase keys" },
        { status: 500 }
      );
    }

    if (!resendKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server Configuration Error: Missing Resend API Key" },
        { status: 500 }
      );
    }

    // Initialize clients safely inside the request handler scope
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const resend = new Resend(resendKey);

    // 2. Insert email into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (dbError) {
      console.error("Supabase Database Error:", dbError);
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "You are already on the waitlist!" },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: dbError.message }, { status: 400 });
    }

    // 3. Dispatch Email via Resend
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
      console.error("Resend API Delivery Error:", emailError);
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