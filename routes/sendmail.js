var nodemailer = require("nodemailer");

export const sendmail = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kvs.sankar23@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: "kvs,sankar23@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    html: req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({ status: 1, mssg: "Something went wrong" });
    } else {
      return res.json({
        status: 0,
        mssg: "Sent email, please check your inbox",
      });
    }
  });
};
