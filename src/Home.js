import React,{Component} from 'react';
import './Home.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
class Home extends Component{
    render(){
        return(
            <div id="homePage">
                <div className="title">
                    <span className="name">محمد <span>خزائی</span></span>
                    <span className="job"><span>Front-End</span>  Developer</span>
                </div>
                <div className="social-icons">
                    <a href="#">
                    <FaFacebook />
                    </a>
                    <a href="#">
                    <FaInstagram />
                    </a>
                    <a href="#">
                    <FaLinkedinIn />
                    </a>
                    <a href="#">
                    <FaGit />
                    </a>
                    <a href="#">
                    <FaTwitter />
                    </a>
                </div>
                 </div>
        )
    }
}
export default Home
