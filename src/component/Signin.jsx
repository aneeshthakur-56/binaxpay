import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/bitsfar.png';
import { FaLock, FaEnvelope, FaGlobe, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { RiGlobalLine } from "react-icons/ri";

import { FaBoltLightning } from "react-icons/fa6";

import { SiFsecure } from "react-icons/si";

import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import './custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Signin = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
     useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
        }, []);
    const handleSubmit =  async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
 
      try {
       
            let response = await loginUser({email :email, password :password}) 
            console.log( ' response ' ,response)
            if (response.success == false) {
              console.log( ' response ' ,response.message)
              toast.error(response.message);
            }else{
              toast.success(response.message); 
            //   login(response.data)
              // localStorage.setItem('auth_token', response.data);
              setTimeout(() => {
                navigate("/verify-signin",{state : {email : email}});
              }, 2000);
            }
            

        } catch (err) {
          setError(err.message);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }  
      };

  return (
    <> 
        <div class="auth-container">
          <ToastContainer position="top-right" autoClose={3000} />
        <div class="auth-left">
            <div class="auth-content" data-aos="fade-right">
                <div class="logo">
                    <Link to="/"><img src={bitsfar}/></Link>
                </div>
                <h1>Welcome Back</h1>
                <p>Sign in to access your Bitsfars account and manage your crypto payment gateway services.</p>
                <div class="auth-features">
                    <div class="feature-item">
                        {/* <i class="fas fa-shield-alt"></i> */}
                        <SiFsecure size={24} color="#00E8F8"/> &nbsp;
                        <span>Secure & Encrypted</span>
                    </div>
                    <div class="feature-item">
                        <FaBoltLightning  size={24} color="#00E8F8"/>&nbsp;
                        <span>Lightning Fast</span>
                    </div>
                    <div class="feature-item">
                        {/* <i class="fas fa-globe"></i> */}
                        <RiGlobalLine  size={24} color="#00E8F8"/>&nbsp;
                        <span>Global Access</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="auth-right">
            <div class="auth-form-container" data-aos="fade-left">
                <h2>Sign In</h2>
                <p class="form-subtitle">Enter your credentials to access your account</p>
                
                <form class="auth-form" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            {/* <input type="email" id="email" name="email" placeholder="your@email.com" required/> */}
                            <input 
                              type="email"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              // className="form-control custom-input"
                            />
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-with-icon">
                            {/* <i class="fas fa-lock"></i> */}
                            {/* <FaLock/> */}
                            {/* <input type="password" id="password" name="password" placeholder="••••••••" required/> */}
                             <input 
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter Password"
                              className="form-control custom-input"
                            />
                            <span class="toggle-password" onclick="togglePassword('password')">
                                <i class="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                    
                    <div class="form-options">
                        <div class="remember-me">
                            <input type="checkbox" id="remember" name="remember"/>
                            <label for="remember">Remember me</label>
                        </div>
                        {/* <a href="Forgetpass.html" class="forgot-password">Forgot password?</a> */}
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
   
                    
                    
                    <div class="auth-footer">
                        Don't have an account? <a href="SignUp.html">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    </div> 
    </>
  );
};

export default Signin;
