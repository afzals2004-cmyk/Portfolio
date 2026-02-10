require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(cors()); // Allow all origins for now, or specify frontend URL
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: { error: 'Too many requests from this IP, please try again later.' },
});

app.use('/api/contact', limiter);

// Email Transporter (Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Validation Rules
const validateContact = [
    body('name').trim().notEmpty().withMessage('Name is required').escape(),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required').escape(),
];

// Contact Route
app.post('/api/contact', validateContact, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
        // 1. Send Email to Admin (You)
        const adminMailOptions = {
            from: `"${name}" <${email}>`, // "Name" <sender@email.com>
            to: process.env.EMAIL_USER, // Your email
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
            to: email, // Sender's email
            subject: `Thank you for contacting me, ${name}!`,
            html: `
            <h3>Hello ${name},</h3>
            <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            <hr />
            <p><strong>Your Message:</strong></p>
            <p>${message}</p>
            <br />
            <p>Best regards,</p>
            <p><strong>Afzal</strong></p>
        `,
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        res.status(200).json({ message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
