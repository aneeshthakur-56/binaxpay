import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../api/protectedApi';
import styles from './css/selfAddresses.module.css';

const SelfAddresses = () => {
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    showWallets();
  }, []);

  const showWallets = async () => {
    getData('/user/self_address_list')
      .then((res) => {
        setWallets(res.data.data);
      })
      .catch((err) => console.error('ee', err));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Address copied to clipboard!');
  };

  const generateAddress = () => {
    const confirmAction = window.confirm("Are you sure you want to generate Address?");
    if (confirmAction) {
      getData('/user/generate_self_address')
        .then((res) => {
          showWallets();
        })
        .catch((err) => console.error('ee', err));
    }
  };

  return (
    <div className={`py-5 bg-dark text-white ${styles.pageContainer}`}>
      <div className="text-center mb-4">
        <button className="btn btn-primary rounded-pill px-4 py-2" onClick={() => generateAddress()}>
          + Generate New Address
        </button>
      </div>
      <div className="row g-4">
        {wallets.map((wallet, index) => (
          <div key={wallet._id} className="col-md-6 col-lg-4">
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
                <button className="btn btn-sm btn-light me-2" onClick={() => handleCopy(wallet.walletAddress)}> Copy </button>
                <Link className="btn btn-sm btn-dark text-light" to={`/self_transactions/${wallet.walletAddress}`}> Check Deposit </Link>

                <div className="text-center mt-3">
                  <p className="mb-3">Created On: {new Date(wallet.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfAddresses;