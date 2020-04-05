import React,{Component} from 'react';
import './Contact.scss';
class Contact extends Component{
    render(){
        return(
         <div className="contactPage">
             <p className="pageHeader">ارتباط
             <span>با من</span></p>
             <div className="contact-ways">
                <div className="contact-box">
                <span className="value"> m.khazaee955@gmail.com</span>
                <span className="title">: EMAIL  </span>
                </div>
                <div className="contact-box">
                <span className="value">989363850201+</span>
                <span className="title">: PHONE  </span>
                </div>
             </div>
         </div>
        )

    }
}
export default Contact