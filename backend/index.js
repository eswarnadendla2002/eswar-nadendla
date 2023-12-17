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
        const mailOptions = {
            from: {
                name: 'Eswar Nadendla',
                address: process.env.AUTH_EMAIL,
            },
            
            to: email,
            subject: "Thank you for reaching to me!",
            html: `<p>Dear <strong>${name}</strong>,</p>
            <p>We appreciate your interest and the opportunity to assist you. Your query is important to us, and we will make every effort to provide you with the information you need.</p>
            <p>Thank you for considering me. <em>We reach you as soon as possible</em> and providing a satisfactory resolution to your query.
            </p>
            <p><strong>Best regards,</strong></p>
            <p><strong>Nadendla Eswar</strong></p>
            <p><strong>Web Dev</strong></p>
            `,
          }
          transporter.sendMail(mailOptions);
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json('Error creating user');
    }
});

app.listen(8000, () => {
    console.log("Server connected to port 8000");
});
