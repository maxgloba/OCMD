const nodemailer = require('nodemailer');

async function contact(name, email, phone, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: 'mail@support.ocmd.co',
      pass: '69dd5b16b76646fddefef7eed1f55e5d-1f1bd6a9-210244f6',
    },
  });

  let info = await transporter.sendMail({
    from: `"OCMD" <admin@ocmd.co>`,
    to: 'support@ocmd.co',
    subject: 'OCMD Contact Us',
    html: `
      <h1>Client data fromt https://ocmd.co</h1>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });
  return info;
}

module.exports.contact = contact;