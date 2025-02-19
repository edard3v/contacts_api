import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Cambiado de 465 a 587
  secure: false, // IMPORTANTE: false para usar STARTTLS
  auth: {
    user: Deno.env.get("NODEMAILER_GMAIL"),
    pass: Deno.env.get("NODEMAILER_GMAIL_APP_PASSWORD"),
  },
  tls: {
    rejectUnauthorized: false, // Opcional si hay problemas con certificados
  },
});
