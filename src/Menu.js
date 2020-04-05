import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Menu.scss'
import Me from './assets/img/me.jpg'
class Menu extends Component {

    componentWillReceiveProps(){
        if(this.props.menuScale === false){
            document.getElementById('menuContainer').classList.add('menu-show')
        }
        else{
            document.getElementById('menuContainer').classList.remove('menu-show')
        }
        
    }
    render(){
        
        return(
          <header id="menuContainer">
              
              <div className="header-btns">
                  <ul>
                      <li>
                      <NavLink to="/" exact onClick={this.props.NavlinkClicked} className="menu-item">خانه</NavLink >
                      </li>
                      <li>
                      <NavLink to="/about" onClick={this.props.NavlinkClicked} className="menu-item">درباره</NavLink>

                      </li>
                      <li>
                      <NavLink to="/works" onClick={this.props.NavlinkClicked} className="menu-item">نمونه</NavLink>

                      </li>
                      <li>
                          <NavLink to="/contact" onClick={this.props.NavlinkClicked} className="menu-item">ارتباط</NavLink>
                      </li>
                  </ul>
                  
              </div>
              <div className="header-img">
                  <img src={Me} />
              </div>
          </header>
        )
    }
}
export default Menu