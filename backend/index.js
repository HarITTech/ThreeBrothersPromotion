const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Email transporter setup
// testing
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "threebrotherspromotion@gmail.com",
    pass: "ucbwipezikufycnp", // Gmail App Password
  },
});

// 👉 Route 1: Footer Query
app.post("/send-query", async (req, res) => {
  const { name, email, query } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "threebrotherspromotion@gmail.com",
    subject: "📨 New Query from Footer",
    text: `
You received a new query from the footer:

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${query}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Footer query sent.");
    res.send("Query sent successfully");
  } catch (error) {
    console.error("❌ Error sending footer query:", error);
    res.status(500).send("Footer query failed to send");
  }
});

// 👉 Route 2: Contact Page
app.post("/send-contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "threebrotherspromotion@gmail.com",
      pass: "ucbwipezikufycnp", // Gmail App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "threebrotherspromotion@gmail.com",
    subject: "📬 New Contact Query Received",
    text: `You received a new contact message:

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Query sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Email failed to send");
  }
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
