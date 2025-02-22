const send_otp = async (transport, mail, user_text) => {
    let mailoptions = {
      from: "manivardhan.10000@gmail.com",
      to: mail,
      subject: "Your OTP Code", 
      text: user_text,
    };
  
    try {
      let info = await transport.sendMail(mailoptions); 
      console.log("Email sent successfully:", info);
      return info; 
    } catch (err) {
      console.error("Error sending email:", err);
      return { error: "Failed to send OTP", details: err.message };
    }
  };
  


const create_otp=(num)=>{
    let otp=""
    for ( var i=0;i<num;i++){
        let n = Math.floor(Math.random()*10)
        otp+=n
    }

    return otp
}

module.exports = {send_otp,create_otp};
