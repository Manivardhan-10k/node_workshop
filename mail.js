const mailer = require("nodemailer");

const transport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "manivardhan.10000@gmail.com",
    pass: "sgmt mnxg yqef hqjc",
  },
});

module.exports = transport;
