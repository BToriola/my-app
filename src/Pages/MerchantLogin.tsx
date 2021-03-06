import React, { useState } from "react";
import "../styles/merchant.css";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

function MerchantLogin() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [displayOtp, setDisplayOtp] = useState(false);
    


  const handleCompanyName = (e: any) => {
    const { value } = e.target;
    setCompanyName(value);
  };
  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleSubmit = (e: any) => {
      e.preventDefault();
      setDisplayOtp(true)
  };
  const handleOtpChange = (e: any) => {
    const { value } = e.target;
    setOtp(value);
  };

  return (
    <div className="merchantsignup">
      <h1 className="merchantsignup__heading">
        <img src={logo} className="logo" alt="crivlar" /> <span>Crivlar</span>{" "}
      </h1>
      {displayOtp == false && <form className="merchantsignup__form">
        <div className="merchantsignup__form-group">
          <label className="merchantsignup__form-label">COMPANY NAME</label>
          <input
            value={companyName}
            onChange={handleCompanyName}
            className="merchantsignup__form-input"
            type="text"
          />
        </div>
        <div className="merchantsignup__form-group">
          <label className="merchantsignup__form-label">EMAIL ADDRESS</label>
          <input
            value={email}
            onChange={handleEmailChange}
            className="merchantsignup__form-input"
            type="email"
          />
        </div>
        <button className="merchantsignup__form-button" onClick={handleSubmit}>
          LOG IN
        </button>
      </form>}
      {displayOtp && <div className="usersignup">
        {/* <h1 className="usersignup__heading">
        <img src={logo} className="logo" alt="crivlar" /> <span>Crivlar</span>{" "}
      </h1> */}
        <form className="usersignup__form">
          {/* Main jumbotron for a primary marketing message or call to action  */}
          <div className="jumbotron">
            <div className="row centering">
              <div className="col-md-3">
                <img
                  src={user}
                  className="logo"
                  width="66.26"
                  height="86.26"
                  alt="crivlar"
                />
              </div>
              <div className="col-md-9">
                <p></p>
                <p className="header-text">
                  {" "}
                  Create an Account for Rivlon using <br />
                  your digital ID "okalac@yahoo.com"
                </p>
                <p className="subtitle-text">
                  {" "}
                  This is not you ?{" "}
                  <span className="blue-text">Use a different ID</span>
                </p>
              </div>
            </div>
          </div>
          <div className="usersignup__form-group">
            <label className="usersignup__form-label">
              Security Code (OTP)
            </label>
            <input
              value={companyName}
              onChange={handleCompanyName}
              className="usersignup__form-input"
              type="text"
            />
            <p className="subtitle-text">
              Enter the 8-digit OTP sent to your email <br /> address:
              “okalac@yahoo.com”.
            </p>

            <br />
            <p className="blue-text header-text">Resend 6-digit OTP</p>
          </div>

          <button className="usersignup__form-button" onClick={handleSubmit}>
            REGISTER
          </button>
        </form>
      </div>}
    </div>
  );
}

export default MerchantLogin;
