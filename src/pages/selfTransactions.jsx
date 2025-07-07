import React, { useState , useEffect } from 'react';
import { useNavigate,Link,useParams  } from "react-router-dom"  
import { getData,postData } from '../api/protectedApi';
import moment from 'moment';


const SelfTransactions = () => {
    const { address } = useParams();
    const [transactions, setTransactions] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalCount, setTotalCount] = useState(0);
        const limit = 10;
        const totalPages = Math.ceil(totalCount / limit);
    
        let callData = async (page) => { 
            postData('/user/check_self_deposit', {wallet_address :address, contract_address : '0x55d398326f99059fF775485246999027B3197955' }) .then((res) => {
                fillApiData(res)
            }) .catch((err) => console.error('ee',err)); 
        }
        let fillApiData = async(data) => {
            console.log('fll data '  , data.data)
            setTransactions(data.data.list)
            // setTotalCount(data.data.count)
        }
        const handlePageChange = (page) => {
           setCurrentPage(page);
        };
    
         useEffect(() => {
              callData(currentPage)
            }, [currentPage]);
    return<>
   <div class="row">
           <div class="col-12" data-aos="fade-up">
               <div class="card">
                   <div class="card-header d-flex justify-content-between align-items-center">
                       <h5 class="mb-0">Self Transactions {address}</h5> 
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
                                       <th>Value</th> 
                                       <th>Date</th> 
                                   </tr>
                               </thead>
                               <tbody>
                                       {transactions.length === 0 ? (
                                           <tr><td>No Transaction found.</td></tr>
                                       ) : (
                                           transactions.map((transaction, index) => ( 
                                               <tr key={index}>
                                                   <td>{index + ((currentPage - 1) * limit) + 1}</td>
                                                   <td>${transaction.amount.toFixed(3)}</td>
                                                   <td><Link to={"https://bscscan.com/address/"+transaction.from}>{(transaction.from).substr(0,10)}....</Link></td>
                                                    <td><Link to={"https://bscscan.com/tx/"+transaction.transactionHash}>{(transaction.transactionHash).substr(0,10)}....</Link></td>
                                                    <td>{transaction.value}</td> 
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

export default SelfTransactions;