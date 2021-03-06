import React, {useState} from 'react';
import '../styles/merchant.css';
import logo from '../assets/logo.svg';
  
function MerchantSignup() {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const handleCompanyName =(e:any)=>{
        const {value} = e.target
        setCompanyName(value);    
    }
    const handleEmailChange = (e:any)=>{
        const {value} = e.target;
        setEmail(value);
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault();
    }
    return (
        <div className="merchantsignup">
            <h1 className="merchantsignup__heading"><img src={logo} className="logo" alt="crivlar" /> <span>Crivlar</span> </h1>
            <form className="merchantsignup__form">
                <div className="merchantsignup__form-group">
                    <label className="merchantsignup__form-label">
                        COMPANY NAME
                    </label>
                    <input value={companyName} onChange={handleCompanyName} className="merchantsignup__form-input" type="text" />
                </div>
                <div className="merchantsignup__form-group">
                    <label className="merchantsignup__form-label">
                        EMAIL ADDRESS
                    </label>
                    <input value={email} onChange={handleEmailChange} className="merchantsignup__form-input" type="email" />
                </div>
                <button className="merchantsignup__form-button" onClick={handleSubmit}>CREATE ACCOUNT</button>
            </form>
        </div>
    )
}

export default MerchantSignup
