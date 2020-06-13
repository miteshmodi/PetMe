const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");





// This configures the authentication of the mailgun  //
const auth = {
    auth: {
        api_key: "84f5d1f68c9bd5a1012754cfafbd08fe-8b34de1b-2fbe8956",
        domain: "sandbox1a7a1d64eca74a999eea27202d2e96d6.mailgun.org"
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
            //  console.log("Message sent!!!");
            cb(null, data);

        }

    });

}


module.exports = sendMail;