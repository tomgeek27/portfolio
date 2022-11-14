import React, {useRef, useEffect, useState} from 'react'
import SocialButton from './social_button'
import ghlogo from '../assets/imgs/github.svg'
import inlogo from '../assets/imgs/linkedin.svg'
import uplogo from '../assets/imgs/upwork.svg'
import maillogo from '../assets/imgs/mail.svg'
import scrolldown from '../assets/imgs/scroll-down.svg'
import { gh_url, in_url, up_url, mail_url, location, age, email, aboutme} from '../constants'
import { getTranslated } from '../helper/translater'
import AOS from 'aos'
import "aos/dist/aos.css";
import Div100vh from 'react-div-100vh'

const ABOUT_ME = {
  it: 'Mi presento',
  en: 'About me'
}

const DETAILS = {
  it: 'Dettagli',
  en: 'Details'
}

const AGE = {
  it: 'Età',
  en: 'Age'
}

const LOCATION = {
  it: 'Luogo',
  en: 'Location'
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      if (windowDimensions == null || windowDimensions.height == 0) {
        setWindowDimensions(getWindowDimensions());
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function PageTop() {
  const me_ref = useRef(null);
  const onButtonClick = () => {
    me_ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  };

  useEffect(() => {
    AOS.init({})
  }, [])

  const {height} = useWindowDimensions()

  return (
    <div className="flex-column">
      <div 
        className="title-container"
        style={{height}}>
        <div style={{padding: '25px'}}/>
        <div>
          <div className="main-title">
            Tommaso Amadori
          </div>
          <div className="main-subtitle">
            /* write, compile, run, sleep */
          </div>
        </div>          
        <div className="scroll-down">
          <img src={scrolldown} className="scroll-down-icon" onClick={onButtonClick}/>
        </div>
      </div>

      <div className="flex-column vertical-center horizontal-center me-container" ref={me_ref} style={{overflowX: 'hidden'}}>
        <div className="me-info-container width-sized">
          <div 
            className="me-text-section-container">
            <div 
              data-aos="fade-right" 
              data-aos-duration="700"
              className="secondary-title"
              >
                {getTranslated(ABOUT_ME)}
            </div>
            <div 
              data-aos="fade-up" 
              data-aos-duration="900"            
              className="content text-left">
                {getTranslated(aboutme)}
            </div>
          </div>

          <img id="imgprofile" src={"https://github.com/tomgeek27.png"} />

          <div className="me-text-section-container">
            <div 
              data-aos="fade-left" 
              data-aos-duration="700"
              className="secondary-title text-right"
              >
                {getTranslated(DETAILS)}
            </div>
            <div 
              className="flex-column"
              data-aos="fade-up" 
              data-aos-duration="900" 
              >
              <div className="flex-row m-bottom13">
                <div className="detail-key">
                  {getTranslated(AGE)}
                </div>
                <div className="content detail-value">
                  {age()}
                </div>
              </div>
              <div className="flex-row m-bottom13">
                <div className="detail-key">
                  e-mail
                </div>
                <div className="content detail-value">
                  {email}
                </div>
              </div>
              <div className="flex-row m-bottom13">
                <div className="detail-key">
                  {getTranslated(LOCATION)}
                </div>
                <div className="content detail-value">
                  {getTranslated(location)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row social-buttons">
          <SocialButton src={ghlogo} url={gh_url} />
          <SocialButton src={inlogo} url={in_url} />
          <SocialButton src={uplogo} url={up_url} />
          <SocialButton src={maillogo} url={mail_url} />
        </div>
      </div>
    </div>
  )
}

export default PageTop