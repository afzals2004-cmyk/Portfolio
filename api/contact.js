import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // 1. Send Email to Admin (You)
        const adminMailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
            <h3>New Message Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
        };

        // 2. Send Auto-Reply to User
        const userMailOptions = {
            from: `"Afzal Portfolio" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for contacting me, ${name}!`,
            html: `
            <h3>Hello ${name},</h3>
            <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            <hr />
            <p><strong>Your Message:</strong></p>
            <p>${message}</p>
            <br />
            <p>Best regards,</p>
            <p><strong>Afzal Shaikh</strong></p>
        `,
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return res.status(200).json({ message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send message.' });
    }
}
