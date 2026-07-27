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

    const cleanEmail = email.toLowerCase().trim();

    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email: cleanEmail }]);

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "You are already registered on the waitlist!" },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // 2. Send Welcome Email via Resend
    // Note: 'onboarding@resend.dev' works out-of-the-box for testing.
    // Replace 'delivered@resend.dev' with your own email when testing.
    await resend.emails.send({
      from: "OasisPrimeX <info@oasisprimex.net>",
      to: [cleanEmail],
      subject: "Welcome to the OasisPrimeX Waitlist",
      html: `
        <div style="font-family: sans-serif; background-color: #050911; color: #ffffff; padding: 40px; border-radius: 8px;">
          <p style="color: #22d3ee; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Early Access Protocol</p>
          <h1 style="color: #ffffff; margin-top: 10px;">You're on the list.</h1>
          <p style="color: #94a3b8; font-size: 16px; line-height: 1.6;">
            Thanks for registering for early access to OasisPrimeX. We are building the foundational infrastructure for secure financial transactions.
          </p>
          <p style="color: #94a3b8; font-size: 16px; line-height: 1.6;">
            We'll notify you as soon as early developer keys and sandbox environments become available.
          </p>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 30px 0;" />
          <p style="color: #64748b; font-size: 12px;">
            © OasisPrimeX. All rights reserved.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}