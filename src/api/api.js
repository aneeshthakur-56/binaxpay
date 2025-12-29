const BASE_URL = 'https://api.binaxpay.online/';//process.env.BASE_URL 
console.log(' BASE_URL ' , BASE_URL)

export async function registerUser (data ){
    console.log(' data is '  , data)
    const res = await fetch(`${BASE_URL}user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json(); 
}

export async function loginUser (data){  
    const res = await fetch(`${BASE_URL}user/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); 
    return res.json(); 
}  


export async function verifySignIn (data){ 
    const res = await fetch(`${BASE_URL}user/verifySignIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); 
    return res.json(); 
}  
export async function verifySignup (data){ 
    const res = await fetch(`${BASE_URL}user/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); 
    return res.json(); 
}  

export async function resendVierifyOtpMail (data){ 
    const res = await fetch(`${BASE_URL}user/resendOtp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json(); 
} 

export async function forgotPassword (data){
    const res = await fetch(`${BASE_URL}user/forgotPassword`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    return res.json(); 
}
export async function validateSponser (sponserId){
    const res = await fetch(`${BASE_URL}user/getUser?userId=`+sponserId,{
        method:"GET",
        headers:{ "Content-Type": "application/json" },
    })
    return res.json()
}

/** we have to delete these reset functions */
export async function CreateDeal (data ){
   const TOKEN = localStorage.getItem("auth_token");
    console.log({TOKEN});
    
    const res = await fetch(`${BASE_URL}user/createDeal`,{
        method:"POST",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    
        body: JSON.stringify(data),
    })
    return res.json()
}
export async function myDeals (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/myDeals`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    console.log({res});
    
    return res.json()
}
export async function getWalletAddress (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/getWalletAddress`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    return res.json()
}
export async function depositTxn (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/depositTxn`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    return res.json()
}