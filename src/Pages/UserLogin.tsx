import React, { useState, useEffect } from "react";
import "../styles/user.css";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

function UserSignIn() {
  const [companyName, setCompanyName] = useState("");
  const [otp, setOtp] = useState("");
  const [displayOtp, setDisplayOtp] = useState(false);

  useEffect(() => {}, []);

  const handleCompanyName = (e: any) => {
    const { value } = e.target;
    setCompanyName(value);
  };
  const handleOtpChange = (e: any) => {
    const { value } = e.target;
    setOtp(value);
  };
  const handleSubmit = (e: any) => {
      e.preventDefault();
      setDisplayOtp(true)
  };
  return (
    <div className="usersignup">
      <h1 className="usersignup__heading">
        <img src={logo} className="logo" alt="crivlar" /> <span>Crivlar</span>{" "}
      </h1>
      {displayOtp == false && <p>Access your data wallet</p>}
      {displayOtp == false && (
        <form className="usersignup__form">
          <div className="usersignup__form-group">
            <label className="usersignup__form-label">Email address<span>digital ID</span></label>
            <input
              value={companyName}
              onChange={handleCompanyName}
              className="usersignup__form-input"
              type="text"
              placeholder="okalac@yahoo.com"
            />
          </div>

          <button className="usersignup__form-button" onClick={handleSubmit}>
            Login
          </button>
          <br/>
          <p className="subtitle-text centering">Don't have an existing account? <span className='blue-text'>Register</span></p>
        </form>
      )}

      {displayOtp && (
        <form className="usersignup__form">
          {/* Main jumbotron for a primary marketing message or call to action  */}
          {/* <div className="jumbotron">
            <div className="row centering">
            </div>
          </div> */}
          <div className="usersignup__form-group">
            <label className="usersignup__form-label">
              Security Code (OTP)
            </label>
            <input
              value={otp}
              onChange={handleOtpChange}
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
            Verify
          </button>
        </form>
      )}
    </div>
  );
}

export default UserSignIn;
