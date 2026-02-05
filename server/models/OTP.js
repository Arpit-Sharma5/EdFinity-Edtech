const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    otp: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }
});

async function sendVerificationOTP(email, otp) {
    try {
        const mailResponse = await mailSender(email,
			"Verification Email",
			emailTemplate(otp))
        // Add a check before accessing response
        if (mailResponse) {
            console.log("Email sent successfully:", mailResponse.response);
        } else {
            console.log("Email sending failed but OTP created");
        }
    } catch (error) {
        console.log("Error sending verification email:", error.message);
        // Don't throw the error - let OTP still be created
    }
}

OTPSchema.pre("save", async function () {
    console.log("Mail in pre hook", this.email)
    await sendVerificationOTP(this.email, this.otp);
}) 

module.exports = mongoose.model("OTP", OTPSchema);