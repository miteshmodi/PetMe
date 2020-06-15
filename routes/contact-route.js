const path = require('path');
const sendMail = require('../public/js/mail');

const express = require('express');

const homepageController = require('../controllers/contact');

const router = express.Router();

router.get('/contact', homepageController.getContactPage);

router.post("/send", (req, res) => {
    const output = `
    <p> You have a new request</p>
    <h3> Contact Details</h3>
    <ul>
    <li> Name: ${req.body.name} </li>
    <li> Email: ${req.body.email} </li>
    <li> Phonenumber: ${req.body.phonenumber} </li>
    </ul>
    <h3> Message </h3>
   <p> ${req.body.message} </p>
  
    `;
    const data = {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        message: req.body.message,
        html: output
    };


    // const {
    //     subject,
    //     email,
    //     text
    // } = req.body;
    console.log("Data:", req.body);


    sendMail(data, function (err, data) {
        // data not defined??

        if (err) {
            console.log("checking for more error", err);
            console.log("checking error");
            res.status(500).json({
                message: "Error appears to be Internal"
            })

        } else {
            console.log("Email sent successfull!!!");

            res.redirect("email/confirmation");
        }
    });


});

router.get("/email/confirmation", function (req, res) {
    res.render("userconfirm", {
        message: "Email sent successfull!!!"
    });
})






module.exports = router;