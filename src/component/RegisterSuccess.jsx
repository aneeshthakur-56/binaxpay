
import bitsfar from '../assets/Image/binaxpay.png';

import { Link } from 'react-router-dom';
import './custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegisterSuccess = () => {
    return<>
    <div className="auth-container">
         <div className="auth-left">
            <div className="auth-content" data-aos="fade-right">
                <div className="logo"> <Link to="/"><img src={bitsfar}/></Link> </div>
                <h4 className="alert-heading">✅ Account Verified Successfully!</h4>
                    <p className="mt-3">
                    <strong>Congratulations!</strong><br />
                    Your Payment Gateway account has been successfully verified.
                    You're now ready to accept secure payments and grow your business with confidence. 🚀
                    </p>
                    <hr />
                    <p className="mb-0">
                    💡 <strong>Tip:</strong> Start integrating your payment API or explore your dashboard to manage transactions.
                    </p>
            </div>
        </div>
    </div>
    </>
}

export default RegisterSuccess;