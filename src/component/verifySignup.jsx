import React, { useState , useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/bitsfar.png';
import { FaRocket,   FaHandHoldingUsd, FaUser, FaShieldAlt } from 'react-icons/fa';  
import { FcHeadset} from 'react-icons/fc';  
import { verifySignup , resendVierifyOtpMail  } from "../api/api";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import './custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
    const location = useLocation();
    const { email ,password} = location.state || {};
    const { login } = useAuth();
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
     const [error, setError] = useState('');
    const handleOtpSubmit =async (e) => {
        e.preventDefault(); 
        const otp = inputs.current.map((input) => input.value).join('');
        // console.log('Entered OTP:', otp); 
        setLoading(true);
        setError('');
        try {
            let formData = {email : email,otp : otp}
            let response = await verifySignup(formData);
            console.log('resp is ' ,formData , response.message)
        
            if(response.success == true){
                toast.success(response.message); 
                setTimeout(() => {
                    navigate("/register-success",{ state: {data: {email :email}} });
                }, 2000);
                // navigate("/veify_signup", { state: {email: formData.email} });//redirect to create password page
            }else{
                console.log('case 2 ' , response.message)
                toast.error(response.message); 
            }
        
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        
        }finally {
            setLoading(false);
        }  
    };
    
    const handleResendOtp =  async () => {
        // Add resend OTP logic here
        let response = await resendVierifyOtpMail({email:email,type:"resendOtp"})

        console.log('Resend OTP');
        if(response.success == true){
        toast.success(response.message);
        }else{
        toast.error(response.message);
        }
    };

    const inputs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) return;
        if (value && index < 5) {
        inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs.current[index - 1]?.focus();
        }
    }; 


    
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);

  return (
    <div className="auth-container">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="auth-right">
            <div className="auth-form-container" data-aos="fade-left">
                <h2>Verify Account</h2>
                <p className="form-subtitle">OTP sent to your registered Email Address</p>
                <p className="form-subtitle">Please enter the OTP and click on Continue</p>
                
                <form className="auth-form" id="signupForm" onSubmit={handleOtpSubmit}>

                    <label className="form-label text-white">  OTP </label>
                        <div className="d-flex justify-content-between gap-2">
                            {Array(6)
                            .fill()
                            .map((_, i) => (
                                <input
                                key={i}
                                type="text"
                                maxLength={1}
                                ref={(el) => (inputs.current[i] = el)}
                                onChange={(e) => handleChange(e, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                className="form-control text-center"
                                />
                            ))}
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            > Continue </button>
 
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                className="btn btn-outline-light"
                            > Resend OTP  </button>
                        </div>
                    
                       
                </form>
            </div>
        </div>
        <div className="auth-left">
            <div className="auth-content" data-aos="fade-right">
                <div className="logo">
                        <a href="index.html"><img src={bitsfar}/></a>
                </div>
                <h1>Join Us</h1>
                <p>Create your Bitsfars account to start using our crypto payment gateway services today.</p>
                <div className="auth-features">
                    <div className="feature-item"> 
                        <FaRocket size={24} color="#00E8F8"  /> &nbsp;
                        <span>Quick Setup</span>
                    </div>
                    <div className="feature-item">
                        {/* <i className="fas fa-hand-holding-usd"></i> */}
                        <FaHandHoldingUsd size={24} color="#00E8F8"  /> &nbsp; 
                        <span>Low Fees</span>
                    </div>
                    <div className="feature-item">
                        {/* <i className="fas fa-headset"></i> */}
                        <FcHeadset size={24} color="#00E8F8"/>&nbsp; 
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Signup;
