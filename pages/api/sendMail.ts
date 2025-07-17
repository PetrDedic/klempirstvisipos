import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587", 10),
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, message, consent } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "L.sipos@seznam.cz",
      subject: "Nové vyplnění formuláře",
      html: `
        <h1>Nové vyplnění formuláře</h1>
        <p><strong>Jméno a příjmení:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Zpráva:</strong> ${message}</p>
        <p><strong>Souhlasím se zpracováním osobních údajů:</strong> ${
          consent ? "Ano" : "Ne"
        }</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Formulář byl odeslán" });
    } catch (error) {
      console.error("Nastala chyba:", error);
      res.status(500).json({ message: "Nastala chyba!", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
