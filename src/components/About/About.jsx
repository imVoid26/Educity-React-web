import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <>
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_img} alt="" className='play-img' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Ours cutting-edge curriculum is designed to empower students with the knowledge, skills, and, and experiences needed to excel in the synamic feild of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalised mentorship, our programs prepare aspiring educators to make a meaningful imapct in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse rage of programs offers the perfect pathway to achive your goals and unlocl your full potential in shaping the future of education.</p>
            </div>
        </div>
    </>
  )
}

export default About