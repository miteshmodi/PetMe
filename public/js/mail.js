const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");





// This configures the authentication of the mailgun  //
const auth = {
    auth: {
        api_key: "",
        domain: ""
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (data, cb) => {
    // Configures our mail option 
    const mailOptions = {
        from: data.email,
        to: "petmeshelters@gmail.com",
        subject: data.subject,
        html: data.html,
        name: data.name,
        phonenumber: data.phonenumber,
        message: data.message
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            //   console.log("Found Error");
            cb(err, null);
        } else {
            //  res.render("contact", {
            //  msg: "Email has been sent"

            //  console.log("Message sent!!!");
            cb(null, data);

        }

    });

}


module.exports = sendMail;
