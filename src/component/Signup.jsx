import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/binaxpay.png';
import { FaRocket, FaHandHoldingUsd, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';  
import { FcHeadset} from 'react-icons/fc';  
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import './custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('button clicked')
    try {
       
        let response = await registerUser({email :email, password :password , name : name , phoneNumber:phone}) 
        if(response.success == true){
            toast.success(response.message); 
            navigate("/verifySignup", { state: {email: email ,password : password} });
        }else{
            toast.error(response.message);
        }
        

    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
        <div className="auth-left">
            <div className="auth-content" data-aos="fade-right">
                <div className="logo">
                        <Link to="/"><img src={bitsfar}/></Link>
                </div>
                <h1> <span className='accent'>Join </span> Us</h1>
                <p>Create your Bitsfars account to start using our crypto payment gateway services today.</p>
                <div className="auth-features">
                        <div className="feature-item"> 
                        <span className="feature-icon-ring">
                            <FaRocket size={24} color="#12896B" />
                        </span>
                        &nbsp;
                        <span>Quick Setup</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon-ring">
                            <FaHandHoldingUsd size={24} color="#12896B" />
                        </span>
                        &nbsp;
                        <span>Low Fees</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon-ring">
                            <FcHeadset size={24} color="#12896B" />
                        </span>
                        &nbsp;
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="auth-right">
            <div className="auth-form-container" data-aos="fade-left">
                <div className="d-flex justify-content-end">
                    <Link to="/" className="back-home-btn">
                        <FaArrowLeft /> Back to Home
                    </Link>
                </div>
                <h2>Create Account</h2>
                <p className="form-subtitle">Fill in your details to get started</p>
                
                <form className="auth-form" id="signupForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >Full Name</label>
                        <div className="input-with-icon">
                            <i className="fas fa-user"></i>
                            {/* <span class="input-group-text bg-info text-white">
                                    <FaUser size={24} color="#00E8F8"  />
                            </span> */}
                             
                             <input 
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="form-control custom-input"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-with-icon">
                            <i className="fas fa-envelope"></i>
                            {/* <input type="email" id="email" name="email" placeholder="your@email.com" required/> */}
                            <input 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="form-control custom-input"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Phone</label>
                        <div className="input-with-icon">
                            <i className="fas fa-phone"></i>
                            {/* <input type="email" id="email" name="email" placeholder="your@email.com" required/> */}
                            <input 
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="form-control custom-input"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                            <i className="fas fa-lock"></i>
                            <input 
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-control custom-input"
                                style={{ paddingRight: "45px" }}
                            />
                            <span 
                                className="toggle-password" 
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div> 
                    </div> 
                    
                    <div className="form-group terms">
                        <input type="checkbox" id="terms" name="terms" required />
                        <label>I agree to the <Link to="/">Terms of Service </Link>and <Link to="/">Privacy Policy</Link></label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">Create Account</button> 
                    
                    <div className="auth-footer">
                        Already have an account? <a href="Signin">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Signup;
