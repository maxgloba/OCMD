const nodemailer = require('nodemailer');

async function contact(name, email, phone, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: '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',
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