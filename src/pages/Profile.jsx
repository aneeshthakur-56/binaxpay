import React, { useState , useEffect } from 'react';
import { getData,postData } from '../api/protectedApi';
const Profile = () => { 
    let user = JSON.parse(localStorage.getItem('user')) 
    useEffect(() => { 
    //    postData('/user/wallet_sum', {}) .then((res) => { }) .catch((err) => console.error(err));
    }, []);
    return<>
            <div class="container my-5">
                <div class="card mx-auto shadow" style={{maxWidth:'500px'}}>

                <div class="card-header bg-dark text-white text-center">
                    <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>My Profile</h5>
                </div>

                <div class="card-body text-white">

                    <div class="row mb-2">
                    <div class="col-5 d-flex align-items-center">
                        <i class="bi bi-person-fill me-2"></i><strong>User Id:</strong>
                    </div>
                    <div class="col-7 text-end">{user.userId}</div>
                    </div>

                    <div class="row mb-2">
                    <div class="col-5 d-flex align-items-center">
                        <i class="bi bi-card-heading me-2"></i><strong>Name:</strong>
                    </div>
                    <div class="col-7 text-end">{user.name}</div>
                    </div>

                    <div class="row mb-2">
                    <div class="col-5 d-flex align-items-center">
                        <i class="bi bi-envelope-fill me-2"></i><strong>Email:</strong>
                    </div>
                    <div class="col-7 text-end">{user.email}</div>
                    </div>

                    <div class="row mb-3">
                    <div class="col-5 d-flex align-items-center">
                        <i class="bi bi-telephone-fill me-2"></i><strong>Phone:</strong>
                    </div>
                    <div class="col-7 text-end">{user.phonenumber}</div>
                    </div>

                    {/* <div class="text-center">
                    <button class="btn btn-primary btn-sm rounded-pill px-4">Self Address</button>
                    </div> */}

                </div>
                </div>
            </div>
        </>
}

export default Profile;