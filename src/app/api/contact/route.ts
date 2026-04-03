import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, company, email, phone, staffSize, biggestTask } = body;

        // Create a Nodemailer transporter using Gmail SMTP
        // You will need to add these credentials to your .env.local file
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER, // The authenticated Gmail account
            to: process.env.GMAIL_USER,   // Send to yourself
            subject: `New Audit Request from ${fullName} (${company})`,
            html: `
        <h2>New Audit Request - Emperor Workflows</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Staff Size:</strong> ${staffSize}</p>
        <p><strong>Biggest Task:</strong> ${biggestTask}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
