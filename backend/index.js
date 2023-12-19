const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = require('./app/Schema')
const nodemailer = require('nodemailer')
require('dotenv').config();
mongoose.connect("mongodb+srv://eswarnadendla2002:123@cluster1.b8xl0ij.mongodb.net/EswarNadendla");
app.use(cors());
app.use(express.json());
const db = mongoose.connection;

db.on('open', () => {
    console.log("Database Connected!");
});

db.on("error", () => {
    console.log("Database not Connected");
});

let transporter = nodemailer.createTransport({
    service: "gmail",
    //   host: "smtp-mail.outlook.com",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready for messages");
      console.log(success);
    }
  });

app.post('/create', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
      const user1 = await Schema.create({
          name,
          email,
          phone,
          company,
          message
      })

      console.log('User created:', user1);
      res.status(200).json('Successfully created!');

      const mailOptionsUser = generateMailOptions({
        to: email,
        subject: "Thank you for reaching to me!",
        html: `<p>Dear <strong>${name}</strong>,</p>
        <p>I appreciate your interest and the opportunity to assist you. Your query is important to me, and I will make every effort to provide you with the information you need.</p>
        <p>Thank you for considering me. <em>I reach you as soon as possible</em> and providing a satisfactory resolution to your query.
        </p>
        <p><strong>Best regards,</strong></p>
        <p>Nadendla Eswar</p>
        <p>Web Dev</p>
        `,
      });

      const mailOptionsAdmin = generateMailOptions({
        to:'eswarnadendla2002@gmail.com',
        subject:"Hey! You got a Message from your Website!",
        html:`<p>Hii Eswar,You got a New Message !</p>
        <p><strong>Name</strong>:-${name}</p>
        <p>:<strong>Email</strong>-${email}</p>
        <p><strong>Phone</strong>:-${phone}</p>
        <p><strong>Company</strong>:-${company}</p>
        <p><strong>Message</strong>:-${message}</p>
        `,
      });

      await Promise.all([
          transporter.sendMail(mailOptionsUser),
          transporter.sendMail(mailOptionsAdmin)
      ]);

  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json('Error creating user');
  }
});

function generateMailOptions({ from = process.env.AUTH_EMAIL, to, subject, html }) {
  return {
      from: {
          name: 'Eswar Nadendla',
          address: from,
      },
      to,
      subject,
      html,
  };
}

app.listen(8000, () => {
    console.log("Server connected to port 8000");
});
