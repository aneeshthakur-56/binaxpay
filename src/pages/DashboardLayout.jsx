import React, { useState,useEffect } from 'react';

import {useAuth } from "./../context/AuthContext"
import { Outlet, Link,useNavigate } from 'react-router-dom';
import bitsfar from '../assets/Image/bitsfar.png';
import './DashboardLayout.css'; // optional for custom styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
        function handleMobileView() {
            if (window.innerWidth < 992) {
                document.querySelectorAll('.nav-text').forEach(text => {
                    text.style.opacity = '1';
                });
            } else {
                document.querySelectorAll('.nav-text').forEach(text => {
                    text.style.opacity = '1';
                });
            }
        }

        // Run on load and resize
        window.addEventListener('load', handleMobileView);
        window.addEventListener('resize', handleMobileView);
    }, []);
    const { logout } = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('isAuthenticated')
        logout()
        // toast.success('Logged out successfully!')
        setTimeout(() => {
        navigate("/signin")
        }, 2000)
    }
  return (

    
    <div class="wrapper d-sm-flex">
        <div class="sidebar p-3" data-aos="fade-right">
             <div class="text-center mb-4">
                <img src={bitsfar} alt="Bitsfar Logo" class="img-fluid logo"/>
            </div>
             <ul class="nav flex-column" id="sidebarNav">
                <li class="nav-item">
                    <Link class="nav-link active" href="#dashboard" data-bs-toggle="tab">
                        <i class="fas fa-tachometer-alt"></i> <span class="nav-text">Dashboard</span>
                    </Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle"  id="transactionDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="fas fa-exchange-alt"></i> <span class="nav-text">Transactions</span>
                    </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#deposit" data-bs-toggle="tab">Deposit</Link></li>
                        <li><Link class="dropdown-item" to="#margin" data-bs-toggle="tab">Margin</Link></li>
                        <li><Link class="dropdown-item" to="#payout" data-bs-toggle="tab">Payout</Link></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="supportDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="fas fa-headset"></i> <span class="nav-text">Support</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" href="#create-ticket" data-bs-toggle="tab">Create Ticket</Link></li>
                        <li><Link class="dropdown-item" href="#inbox" data-bs-toggle="tab">Inbox</Link></li>
                        <li><Link class="dropdown-item" href="#outbox" data-bs-toggle="tab">Outbox</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="main-content flex-grow-1">
            <nav class="navbar navbar-expand-lg mobile-navbar">
                <div class="container-fluid">
                    <button class="btn btn-sm d-lg-none sidebar-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarCollapse">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="d-flex align-items-center ms-auto">
                        <div class="dropdown me-3">
                            <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown">
                                <div class="position-relative me-2">
                                    <img src="DashAssets/img/favicon.png" style={{height:'50px',width:'auto'}} alt="User" class="rounded-circle user-avatar"/>
                                    <span class="position-absolute bottom-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                </div>
                                <span class="user-name">John Doe</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Profile</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><button class="dropdown-item" onClick={() => handleLogout()}><i class="fas fa-sign-out-alt me-2"></i>Logout</button></li>
                            </ul>
                        </div>
                        {/* <div class="theme-toggle me-3" id="themeToggle">
                            <i class="fas fa-moon"></i>
                        </div> */}
                         <button class="dropdown-item" onClick={() => handleLogout()}><i class="fas fa-sign-out-alt me-2"></i>Logout</button>
                    </div>
                </div>
                
            </nav>
             <main className="p-4 flex-grow-1 bg-light overflow-auto">
                <Outlet />
            </main>
        </div>
          
    </div>
  );
};

export default DashboardLayout;
