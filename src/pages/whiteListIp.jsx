import React, { useState , useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom"  
import { getData,postData } from '../api/protectedApi';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WhirteListIp = () => {
    const [transactions, setTransactions] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpTimer, setOtpTimer] = useState(0);
     const [otp, setOtp] = useState('');
     const [ip, setIP] = useState('');
     const [loading, setLoading] = useState(false);

    const handleForm = async() => {
      
         if ( !otp ) {
            alert('Please set otp');
            return;
        } 
         try {
            setLoading(true);
            const response =  await postData('/user/whitelist_ip',{otp : otp,ip : ip});

            if (response.data.success) {
                alert(response.data.message); 
                 setShowModal(false)
                showIpList()
            } else {
                alert(response.data.message || ' Failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while processing the request.');
        } finally {
            setLoading(false);
        }
    }
    const handleGetOtp = async () => {
   
        try {
            setOtpLoading(true);
            const response =await getData('/user/withrawOtp',{});

            if (response.data.success) {
                alert('OTP Sent Successfully');
                setOtpTimer(120);
            } else {
                alert(response.data.message || 'Failed to send OTP');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending OTP');
        } finally {
            setOtpLoading(false);
        }
    };
    const showIpList = async() => {
        getData('/user/whitelist_ip_list' ) .then((res) => {
            setTransactions(res.data.data)
        }) .catch((err) => console.error('ee',err)); 
    }
     useEffect(() => {
       showIpList()
        }, []);
    return<>
    <div class="row">

        <div class="col-12" data-aos="fade-up">
            {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
           
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white rounded">
                {/* <ToastContainer position="top-right" autoClose={3000}  /> */}
              <div className="modal-header border-0">
                <h5 className="modal-title fw-semibold">Whitelist IP</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
               
                 <div className="mb-3 d-flex"> 
                    <input
                    type="ip"
                    className="form-control bg-secondary text-white border-0"
                    placeholder="IP Address"
                    value={ip}
                    onChange={(e)=>{setIP(e.target.value)}}
                    /> 
                     </div>
                 <div className="mb-3 d-flex">
                    <input
                    type="text"
                    className="form-control bg-secondary text-white border-0 me-2"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                    className="btn btn-info text-dark fw-semibold"
                    onClick={handleGetOtp}
                    disabled={otpLoading || otpTimer > 0}
                    >
                    {otpLoading
                        ? 'Sending...'
                        : otpTimer > 0
                        ? `${Math.floor(otpTimer / 60)}:${String(otpTimer % 60).padStart(2, '0')}`
                        : 'Code'}
                    </button>
                </div>
                 <button
                    type="button"
                    className="btn btn-info text-dark fw-semibold w-100"
                    onClick={handleForm}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Whitelist IP'}
                </button>
              </div>
                 <ToastContainer position="bottom-right" autoClose={3000}  />
            </div>
          </div>
        </div>
      )}

            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 data-aos="fade-right" class="aos-init aos-animate">IP WhiteList</h2>
                <div class="d-flex">
                    <button class="btn btn-sm btn-outline-primary me-2" onClick={() => setShowModal(true)}>
                        <i class="fas fa-plus me-1"></i> <span class="d-none d-md-inline"> New IP</span>
                    </button> 
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Api Key List</h5> 
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive table-scroll table-hover transaction-table" id="transactionsTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>IP</th> 
                                    <th>Date</th> 
                                </tr>
                            </thead>
                            <tbody>
                                    {transactions.length === 0 ? (
                                        <tr><td>No Transaction found.</td></tr>
                                    ) : (
                                        transactions.map((transaction, index) => ( 
                                            <tr key={index}>
                                                <td>{index  + 1}</td>
                                                <td>{transaction.ipAddress }</td> 
                                                <td>{moment(transaction.createdAt).format('DD-MM-YYYY hh:mm A')}</td>  
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
    </>
}

export default WhirteListIp;