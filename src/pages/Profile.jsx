import React, { useEffect } from "react";
import styles from "./css/Profile.module.css";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user")) || {};
  useEffect(() => {}, []);

  return (
    <div className={`py-5 ${styles.profileContainer}`}>
      <div className={`card mx-auto shadow ${styles.profileCard}`}>
        <div className="card-header bg-accent text-white text-center">
          <h5 className="mb-0">
            <i className="bi bi-person-circle me-2"></i>My Profile
          </h5>
        </div>

        <div className="card-body text-white">
          <div className="row mb-2">
            <div className="col-5 d-flex align-items-center">
              <i className="bi bi-person-fill me-2"></i>
              <strong>User Id:</strong>
            </div>
            <div className="col-7 text-end">{user.userId}</div>
          </div>

          <div className="row mb-2">
            <div className="col-5 d-flex align-items-center">
              <i className="bi bi-card-heading me-2"></i>
              <strong>Name:</strong>
            </div>
            <div className="col-7 text-end">{user.name}</div>
          </div>

          <div className="row mb-2">
            <div className="col-5 d-flex align-items-center">
              <i className="bi bi-envelope-fill me-2"></i>
              <strong>Email:</strong>
            </div>
            <div className="col-7 text-end text-nowrap">{user.email}</div>
          </div>

          <div className="row mb-3">
            <div className="col-5 d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2"></i>
              <strong>Phone:</strong>
            </div>
            <div className="col-7 text-end">{user.phonenumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
