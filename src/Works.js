import React,{Component} from 'react';
import './Work.scss';
import Project1 from './assets/img/bg.jpg'

class Works extends Component{
    render(){
        return(
           <div id="worksPage">
               <p className="pageHeader">
                   نمونه
                   <span>پروژه ها</span>
               </p>
               <div className="projetcs">
                   <div className="project-item">
                       <div className="project-overlay">
                            <a href="#">
                                مشاهده صفحات
                            </a>
                       </div>
                       <img src={Project1} alt=""/>
                   </div>
                   <div className="project-item">
                       <div className="project-overlay">
                            <a href="#">
                                مشاهده صفحات
                            </a>
                       </div>
                       <img src={Project1} alt=""/>
                   </div>
                   <div className="project-item">
                       <div className="project-overlay">
                            <a href="#">
                                مشاهده صفحات
                            </a>
                       </div>
                       <img src={Project1} alt=""/>
                   </div>
                   <div className="project-item">
                       <div className="project-overlay">
                            <a href="#">
                                مشاهده صفحات
                            </a>
                       </div>
                       <img src={Project1} alt=""/>
                   </div>
               </div>
           </div>
        )
    }
}
export default Works