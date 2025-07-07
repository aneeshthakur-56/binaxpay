
import React, { useState , useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom"
import {useAuth } from "./../context/AuthContext"

import { getData,postData } from '../api/protectedApi';
const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [dashboardData, setDashboardData] = useState([]);
    useEffect(() => {
        postData('/user/latest_transactions', {}) .then((res) => {setTransactions(res.data.data)}) .catch((err) => console.error(err));
        postData('/user/wallet_sum', {}) .then((res) => { setDashboardData(res.data)  }) .catch((err) => console.error(err));
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

    return<>
            <div class="container-fluid py-4">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="dashboard">
                        {/* <div class="d-flex justify-content-between align-items-center mb-4">
                            <h2 data-aos="fade-right">Dashboard Overview</h2>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#apiKeysModal">
                                    <i class="fas fa-key me-1"></i> <span class="d-none d-md-inline">API Keys</span>
                                </button>
                                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#swapModal">
                                    <i class="fas fa-random me-1"></i> <span class="d-none d-md-inline">Quick Swap</span>
                                </button>
                            </div>
                        </div> */}
                        <div class="row mb-4 g-4">
                            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div class="card stat-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="text-muted mb-2">Total Balance</h6>
                                                <h3 class="mb-0">${dashboardData?.walletBalance}</h3>
                                            </div>
                                            <div class="bg-glass-light p-3 rounded-circle">
                                                <i class="fas fa-wallet text-accent"></i>
                                            </div>
                                        </div>
                                        {/* <p class="text-success mt-3 mb-0">
                                            <i class="fas fa-caret-up me-1"></i> 12.5% from last month
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div class="card stat-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="text-muted mb-2">Total Balance</h6>
                                                <h3 class="mb-0">$12,450.75</h3>
                                            </div>
                                            <div class="bg-glass-light p-3 rounded-circle">
                                                <i class="fas fa-wallet text-accent"></i>
                                            </div>
                                        </div>
                                        <p class="text-success mt-3 mb-0">
                                            <i class="fas fa-caret-up me-1"></i> 12.5% from last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div class="card stat-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="text-muted mb-2">Total Balance</h6>
                                                <h3 class="mb-0">$12,450.75</h3>
                                            </div>
                                            <div class="bg-glass-light p-3 rounded-circle">
                                                <i class="fas fa-wallet text-accent"></i>
                                            </div>
                                        </div>
                                        <p class="text-success mt-3 mb-0">
                                            <i class="fas fa-caret-up me-1"></i> 12.5% from last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                             <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div class="card stat-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="text-muted mb-2">Total Balance</h6>
                                                <h3 class="mb-0">$12,450.75</h3>
                                            </div>
                                            <div class="bg-glass-light p-3 rounded-circle">
                                                <i class="fas fa-wallet text-accent"></i>
                                            </div>
                                        </div>
                                        <p class="text-success mt-3 mb-0">
                                            <i class="fas fa-caret-up me-1"></i> 12.5% from last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" data-aos="fade-up">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h5 class="mb-0">Recent Transactions</h5>
                                        <a href="#" class="btn btn-sm btn-accent">View All</a>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-responsive table-scroll table-hover transaction-table" id="transactionsTable">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Amount</th>
                                                        <th>From</th>
                                                        <th>Hash</th>
                                                        <th>Currency</th>
                                                        <th>Value</th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                     {transactions.length === 0 ? (
                                                            <p>No Transaction found.</p>
                                                        ) : (
                                                            transactions.map((transaction, index) => ( 
                                                                <tr key={index}>
                                                                    <td>#TRX-7845</td>
                                                                    <td>{transaction.amount}</td>
                                                                    <td><Link to={"https://bscscan.com/address/"+transaction.from}>{(transaction.from).substr(0,10)}....</Link></td>
                                                                    <td><Link to={"https://bscscan.com/tx/"+transaction.transactionHash}>{(transaction.transactionHash).substr(0,10)}....</Link></td>
                                                                    <td><span class="badge bg-primary">{transaction.tokenName}</span></td> 
                                                                    <td>
                                                                        <button class="btn btn-sm btn-outline-primary">Details</button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        )}
                                                    
                                                     
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    </>
}

export default Dashboard;