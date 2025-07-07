import { useNavigate } from "react-router-dom"
import {useAuth } from "./../context/AuthContext"
const Dashboard = () => {
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
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h2 data-aos="fade-right">Dashboard Overview</h2>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#apiKeysModal">
                                    <i class="fas fa-key me-1"></i> <span class="d-none d-md-inline">API Keys</span>
                                </button>
                                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#swapModal">
                                    <i class="fas fa-random me-1"></i> <span class="d-none d-md-inline">Quick Swap</span>
                                </button>
                            </div>
                        </div>
                        <div class="row mb-4 g-4">
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
                                            <table class="table table-hover transaction-table" id="transactionsTable">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Date</th>
                                                        <th>Type</th>
                                                        <th>Amount</th>
                                                        <th>Currency</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#TRX-7845</td>
                                                        <td>2023-10-15 14:30</td>
                                                        <td>Deposit</td>
                                                        <td>0.0254</td>
                                                        <td><span class="badge bg-primary">BTC</span></td>
                                                        <td><span class="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <button class="btn btn-sm btn-outline-primary">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#TRX-7844</td>
                                                        <td>2023-10-15 12:45</td>
                                                        <td>Payout</td>
                                                        <td>1250.00</td>
                                                        <td><span class="badge bg-info">USD</span></td>
                                                        <td><span class="badge bg-warning">Pending</span></td>
                                                        <td>
                                                            <button class="btn btn-sm btn-outline-primary">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#TRX-7843</td>
                                                        <td>2023-10-14 18:20</td>
                                                        <td>Exchange</td>
                                                        <td>1.254</td>
                                                        <td><span class="badge bg-secondary">ETH</span></td>
                                                        <td><span class="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <button class="btn btn-sm btn-outline-primary">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#TRX-7842</td>
                                                        <td>2023-10-14 10:15</td>
                                                        <td>Deposit</td>
                                                        <td>500.00</td>
                                                        <td><span class="badge bg-success">USDT</span></td>
                                                        <td><span class="badge bg-success">Completed</span></td>
                                                        <td>
                                                            <button class="btn btn-sm btn-outline-primary">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#TRX-7841</td>
                                                        <td>2023-10-13 22:05</td>
                                                        <td>Margin</td>
                                                        <td>0.125</td>
                                                        <td><span class="badge bg-primary">BTC</span></td>
                                                        <td><span class="badge bg-danger">Failed</span></td>
                                                        <td>
                                                            <button class="btn btn-sm btn-outline-primary">Details</button>
                                                        </td>
                                                    </tr>
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