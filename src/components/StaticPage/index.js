import {Component} from "react"

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {LuArrowUpRightFromCircle} from "react-icons/lu"
import {IoIosPeople} from "react-icons/io"
import {RxCross1} from "react-icons/rx"

import "./index.css"

class StaticPage extends Component{
    

    onClickButtonFunction = () => {
return(
    
    <div className = "inputMainCon">
        <h1>Register For The FREE Webinar</h1>
        <form>
        <div className = "input-con">
            <div className = "inputCon">
            <label htmlFor = "inputFirstName" className = "inputLabel">First Name </label>
            <input id = "inputFirstName" type = "text" className = "input34" placeholder = "First Name" />
            </div>
            <div className = "inputCon">
            <label htmlFor = "inputLastName" className = "inputLabel" >Last Name</label>
            <input id = "inputLastName" type = "text" className = "input34" placeholder = "Last Name" />
            </div>
        </div>
        <div className = "inputCon">
            <label htmlFor = "inputLastName" className = "inputLabel" >Business Email</label>
            <input id = "inputLastName" type = "text" className = "input343" placeholder = "Business Email" />
            </div>
       
        <div className = "inputCon">
            <label htmlFor = "inputLastName" className = "inputLabel" >Phone Number</label>
            <input id = "inputLastName" type = "text" className = "input343" placeholder = "Phone Number" />
            </div>
            <div className = "buttionCon">
                <button type = "button" className = "submitButton1" >SECURE YOUR SEAT</button>
            </div>
    </form>
    </div>
    
)
    }
    
    render(){
        return(
            <div className = "totalContainer">
               
                <div>
                 <h1 className = "mainsomeHead">"Some people call this artificial intelligence, but the reality is this technology will enhance us. So, instead of artificial intelligence, I think we’ll augment our intelligence” - Ginni Rometty – Former CEO & President, IBM</h1>
                </div>
                <div className = "con12">
                    <div className = "imagecon1">
                        <img src = "https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=525&height=734&name=corporate-training-with-ai-banner-image.png" alt = "leadyImage"  className = "image1"/>
                    </div>
                    <div className = "container">
                        <p className = "para1">The Top Trending Topic of the Year</p>
                        <h1 className = "mainHead1">Unleashing the Potential of AI in Corporate Training</h1>
                        <hr/>
                        <div className = "iconCon">
                        <LuArrowUpRightFromCircle  className = "icon1"/>
                        <p className = "paraIcon">Learn how AI is helping corporates upskill and reskill workforce</p>
                    </div>
                    <div className = "iconCon">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Walk away with tips, tools, and resources to get started with AI-empowered training</p>
                    </div>
                    <div className = "darkCon">
                        <h1>JOIN DR RK Prasad, Shalini, Rajesh LIVE</h1>
                    </div>
                    <div className = "value-con">
                        <h3>Tuesday, January 09, 2024</h3>
                        <h3>11 AM Eastern | 8 AM Pacific</h3>
                        <h3>Duration: 90 Minutes</h3>
                        <h3>$997 VALUE FREE!</h3>
                        {/* <button type = "button" className = "button1"><IoIosPeople className = "peopleicon"/>SECURE YOUR SEAT</button> */}

                 <div>
                 <Popup
                  modal
                  trigger={
                    <button type = "button" className = "button1"><IoIosPeople className = "peopleicon"/>
                    SECURE YOUR SEAT
                    </button>
                    }
                 >
                {close => (
                    <>
                    <button
                    type="button"
                     className="trigger-button"
                     onClick={() => close()}
                     >
                      <RxCross1/>
                      </button>
                    <div>
                        {this.onClickButtonFunction()}
                    </div>
                   
                    </>
                 )}
              </Popup>
                 </div>
                       
                    </div>
                    </div>
                </div>
                <div className = "secondImageContainer">
                <img src = "https://resources.commlabindia.com/hubfs/webinars/logos-v2.png" alt = "image2" className = "image123" />
                </div>
                <div className = "evalutionContainer">
                    <h1>YOU WILL LEARN:</h1>
                <div className = "iconcon1222">
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Evolution of AI and Corporate Training</p>
                    </div>
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">How AI can close skills gaps with rapid upskilling and reskilling</p>
                    </div>

                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Steps to integrate AI tools in training programs</p>
                    </div>
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Challenges and opportunities with AI implementation</p>
                    </div>
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Roadmap to align training with business goals</p>
                    </div>
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Live action – creating assets with Vyond Go, Synthesia, Quizbot</p>
                    </div>
                    <div className = "iconCon1">
                        <LuArrowUpRightFromCircle className ="icon1"/>
                        <p className = "paraIcon">Best way Learning Architects can use AI</p>
                    </div>
                    </div>
                    
                    <h1>Unleashing the Potential of AI in Corporate Training</h1>
                    <h3>The Impact of AI on L&D – Insights and Applications</h3>
                    <h2>Tuesday, January 09, 2024</h2>
                    <h2>11 am Eastern | 8 am Pacific</h2>
                    <h2>Duration: 90 Minutes</h2>
                    <div className = "iconcon122">
                   
                    <div>
                 <Popup
                  modal
                  trigger={
                    <button type = "button" className = "button122"><div className = "iconCon"><IoIosPeople className = "peoicon"/><div><h1 className = "hea1">SECURE YOUR SEAT </h1>
                      <p  className = "par23"><spam className = "pa1">$997 VALUE </spam> -  FREE!</p>
                      </div>
                      </div>
                    </button>
                    }
                 >
                {close => (
                    <>
                    <button
                    type="button"
                     className="trigger-button"
                     onClick={() => close()}
                     >
                      <RxCross1/>
                      </button>
                    <div>
                        {this.onClickButtonFunction()}
                    </div>
                   
                    </>
                 )}
              </Popup>
                 </div>

                    </div>
                </div>
                <div className = "hostContainer">
                    <h1 className = "mainHostHead">MEET YOUR HOSTS</h1>
                    <div className = "hostCon12">
                    <div className = "host-con1">
                        <img src = "https://resources.commlabindia.com/hubfs/webinars/rk-prasad-ai-webinar.jpg" alt = "hostImage"  className = "imgHost1"  />
                        <h2>RK Prasad</h2>
                        <h3>CEO & Co-Founder</h3>
                        <p className = "hostPara">RK has nurtured CommLab India from concept to commercial success, and is responsible for formulating the business strategy. He is also responsible for nurturing customer relationships. 

An entrepreneur at heart, RK has 35 years of experience in Sales, Corporate training, University teaching, and eLearning. He regularly conducts seminars and webinars for customers across the world on various topics of technology-enhanced learning.

RK holds a PhD in Mobile Learning from Lancaster University, UK, and an MBA.

A good teacher and engaging trainer, RK helps people learn and bloom. His priorities are his employees, his customers, and his community.</p>
                    </div>
                    <div className = "host-con1" >
                        <img src = "https://resources.commlabindia.com/hubfs/cli-main-site/about-us/Shalini.jpg" alt = "hostImage" className = "imgHost1"  />
                        <h2>Shalini Merugu</h2>
                        <h3>Director - Learning Solutions</h3>
                        <p className = "hostPara">Shalini is a versatile learning design professional with 16+ years of experience in instructional design (ILT, VILT, and eLearning).

Her experience in designing eLearning solutions along with designing and delivering instructor-led training helps her leverage the strengths of each medium to consistently create impactful training solutions, ensuring that nothing is lost when converting from one format to another.

Apart from improving the quality of learning solutions, she also conducts customer education workshops at customer sites globally and presents webinars on learning design.</p>
                    </div>
                    <div className = "host-con1" >
                        <img src = "https://resources.commlabindia.com/hubfs/cli-main-site/about-us/rajesh-v4.jpg" alt = "hostImage" className = "imgHost1" />
                        <h2>Rajesh Venkata</h2>
                        <h3>Director – Innovation</h3>
                        <p className = "hostPara">Rajesh started his career as a Quality Executive in 2008, and gained expertise in eLearning, digital content delivery, and project management, over these 15+ years.

Rajesh has an excellent track record of team management and operational planning, along with good knowledge of eLearning authoring tools such as Storyline, Captivate, and Lectora.

Well-experienced in managing multiple projects for global clients, Rajesh has a keen eye for trends in the tech-enabled learning space. This made him the natural choice for the current role, where he researches the latest tools and tech, and guides the CommLab India team in leveraging them to address training needs faster, better, and er.</p>
                    </div>
                    </div>
                </div>
                <div className = "nextContainer">
                    <h1>Unleashing the Potential of AI in Corporate Training</h1>
                    <p>The Impact of AI on L&D – Insights and Applications</p>
                    <h2>Tuesday, January 09, 2024</h2>
                    <h2>11 am Eastern | 8 am Pacific</h2>
                    <h2>Duration: 90 Minutes</h2>
                  

                    <div>
                 <Popup
                  modal
                  trigger={
                    <button type = "button" className = "button122"><div className = "iconCon"><IoIosPeople className = "peoicon"/><div><h1 className = "hea1">SECURE YOUR SEAT </h1>
                    <p  className = "par23"><spam className = "pa1">$997 VALUE  </spam>  -  FREE!</p>
                      </div>
                      </div>
                    </button>
                  
                    }
                 >
                {close => (
                    <>
                    <button
                    type="button"
                     className="trigger-button"
                     onClick={() => close()}
                     >
                      <RxCross1/>
                      </button>
                    <div>
                        {this.onClickButtonFunction()}
                    </div>
                   
                    </>
                 )}
              </Popup>
                 </div>
                </div>
                 <div className = "last-con-3">
                    
                    <img src = "https://resources.commlabindia.com/hubfs/commlab_logo/cl-logo-final-white.png" alt = "logoImage"  className = "logoImg" />
                    <div className = "lastContainer">
                    <p>Copyright © 2023, CommLab India</p>
                    <p className = "lastPara1">Privacy Policy | Site Map</p>
                    </div>


                </div>
            </div>
        )
    }
}


export default StaticPage