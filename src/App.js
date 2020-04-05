import React,{Component} from 'react';
import './App.scss';
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Works from './Works'
import Particles from 'react-particles-js';
import videoBg from './assets/img/videoplayback.mp4'
import {Route,Link,NavLink,Switch,BrowserRouter as Router} from 'react-router-dom'
class App extends Component{
  constructor(){
    super();
    this.state = {
      isMenuOn : false
    }
  }
  navlinkHandle = () =>{
    this.setState({
      isMenuOn : false
    })
    console.log('handle', this.state.isMenuOn)
    let btn = document.getElementById('btn')
   
    if(this.state.isMenuOn === true){
      btn.classList.remove('close')
      this.setState({
        isMenuOn : false
      })
    }
    else{
      btn.classList.add('close')
      this.setState({
        isMenuOn : true
      })
    }
  }
  menuClick = () =>{
    
    let btn = document.getElementById('btn')
   
    if(this.state.isMenuOn === true){
      btn.classList.remove('close')
      this.setState({
        isMenuOn : false
      })
    }
    else{
      btn.classList.add('close')
      this.setState({
        isMenuOn : true
      })
    }

  }

  render(){
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#ff0000"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };

    return(
     
       <Router>
         <React.Fragment>
            
              <div className="overlay">
                <video autoPlay loop muted >
                  <source src={videoBg}/>
                </video>
                <div className="inner-overlay"></div>
           </div>
            
           <Particles config={config} className="Particles"
                params={{
                  particles: {
                   
                  move: {
                      enable: true,
                      speed: 6,
                      direction: "none",
                      random: true,
                      straight: false,
                      out_mode: "out",
                      bounce: true,
                      attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                    ,
                    number: {
                      value: 100,
                      density: {
                        enable: true,
                        value_area: 600
                      }
                    },
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#fff",
                        blur: 0
                      }
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.8,
                      sync: true
                    }
                  },
                  interactivity: {
                    detect_on: "window",
                    events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                    },
                    modes : {
                      grab : {
                        distance : 200
                      }
                    }
                  },

                }} />

        <div className="menu-btn" id="btn" onClick={this.menuClick}>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
        </div>
        <Menu menuScale={this.state.isMenuOn} NavlinkClicked={this.navlinkHandle} />
       <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/Works" component={Works} />
         </Switch>
         </React.Fragment>
       </Router>
    )
  }
}
export default App;
