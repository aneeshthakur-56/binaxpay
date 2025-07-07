import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData,postData } from '../api/protectedApi';

const SelfAddresses = () => {
    const [wallets, setWallets] = useState([]); 
    useEffect(() => {
        showWallets()
    }, []);
    const showWallets = async() => {
         getData('/user/self_address_list' ) .then((res) => {
                    setWallets(res.data.data)
            }) .catch((err) => console.error('ee',err)); 
    }
      const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert('Address copied to clipboard!');
    };
    const handleGoToDetails = () => {
        const id = 123;
        // navigate(`/self_transactions/${id}`);
    };
    return(
        <div className="container py-5 bg-dark text-white min-vh-100">
            <div className="text-center mb-4">
                <button className="btn btn-primary rounded-pill px-4 py-2">
                + Generate New Address
                </button>
            </div>
            <div className="row g-4">
                {wallets.map((wallet,index) => (
                <div key={wallet.id} className="col-md-6 col-lg-4">
                    <div className="card bg-secondary text-white rounded-4 shadow p-3">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Wallet {index + 1}</h5>
                        <div className="text-center mb-2">
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${wallet.walletAddress}`}
                            alt="QR"
                            className="img-fluid"
                        />
                        </div>
                        <p className="mb-1 fw-semibold">{wallet.walletAddress}</p>
                        <button  className="btn btn-sm btn-light"  onClick={() => handleCopy(wallet.walletAddress)} >   Copy  </button>
                        <Link  className="btn btn-sm btn-dark text-light"  to={`/self_transactions/${wallet.walletAddress}`} >   Check Deposit </Link>
                      

                        
                        <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* <span className="text-truncate d-block" style={{ maxWidth: "80%" }}>
                            
                        </span> */}
                        
                        </div>

                        <div className="text-center">
                            
                        <p className="mb-3">Created On: {new Date(wallet.createdAt).toLocaleString()}</p>
                        {/* <a href="#" className="text-info text-decoration-none">
                            Click here to view Deposit transactions
                        </a> */}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default SelfAddresses;