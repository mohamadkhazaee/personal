import React,{Component} from 'react'
import './About.scss'
import Me from './assets/img/me.jpg'
class About extends Component{
    render(){
        return(
            <div className="aboutPage">
                <p className="pageHeader">
                    درباره
                    <span>من</span>
                </p>
                <div className="bio">
                    <div className="bio-text text-justify">
                        <p>
                            سلام.محمد خزائی هستم.متولد 1374/7/10.
                            متولد شهر صحنه در استان کرمانشاه و بزرگ شده تهران.
                            دوره لیسانس رو در دانشگاه شهید مدنی تبریز سپری کردم و در حال حاضر مشغول به خدمت سربازی.
                            علاقه مندر به یادگیری مهارت های برنامه نویسه خصوصا زمینه Front-End.یاد گیرنده همیشگی :)
                        </p>
                    </div>
                    <div className="bio-img">
                        <img src={Me} />
                    </div>
                </div>
                <p className="myskills">
                    مهارت های 
                    <span>من</span>
                </p>
                <div className="skills">
                        <div className="skill-item">
                            <p className="title">HTML5</p>
                            <div className="progress" width="100%">
                                    <div className="progress-done">
                                    100%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">CSS3</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 100%"}}>
                                            100%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">BOOTSTAP4</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 100%"}}>
                                            100%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">SASS</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 80%"}}>
                                            80%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">JAVASCRIPT ES6</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 80%"}}>
                                            80%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">JQUERY</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 100%"}}>
                                            100%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">REACT.JS</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 60%"}}>
                                            60%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">P.W.A</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 20%"}}>
                                            20%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">WORDPRESS</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 40%"}}>
                                            40%
                                    </div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="title">ADOBE XD</p>
                            <div className="progress">
                                    <div className="progress-done" style={{width :" 80%"}}>
                                            80%
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        )

    }
}
export default About