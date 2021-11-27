import React, {useRef, useEffect} from 'react'
import me from '../assets/imgs/me.jpg'
import SocialButton from './social_button'
import ghlogo from '../assets/imgs/github.svg'
import inlogo from '../assets/imgs/linkedin.svg'
import uplogo from '../assets/imgs/upwork.svg'
import maillogo from '../assets/imgs/mail.svg'
import scrolldown from '../assets/imgs/scroll-down.svg'
import { gh_url, in_url, up_url, mail_url, location, age, email, aboutme} from '../constants'
import { Breakpoint } from 'react-socks';        
import Div100vh from 'react-div-100vh'
import { getTranslated } from '../helper/translater'
import AOS from 'aos'
import "aos/dist/aos.css";

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

function PageTop() {
  const me_ref = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    me_ref.current.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div>
      <Breakpoint m up>
        <div 
          className="flex-column"
          style={{minHeight: '100vh'}}>
          <div style={{
            flex: 4
          }}/>
          <div className="flex-column vertical-center horizontal-center" style={{flex: 3}}>
            <div className="container flex-column vertical-center" style={{margin: '50px 0'}}>
              <h1 className="main-title">
                Tommaso Amadori
              </h1>
              <span className="main-subtitle">
                /* write, compile, run, sleep */
              </span>
            </div>
          </div>
          <Me_m/>
          <div style={{
            flex: 1,
            minHeight: '60px'
          }}/>
        </div>
      </Breakpoint>
      <Breakpoint s down>
        <Div100vh>
          <div className="flex-column vertical-center horizontal-center screen-mobile">
            <div className="flex-column vertical-center horizontal-center header">
              <h1 className="main-title">
                Tommaso Amadori
                <div 
                style={{
                  width: '100%', 
                  border: '0.2px solid #707070',
                  marginTop: '10px',
                }}
              />
              </h1>

              <div
                className="main-subtitle" 
                style={{
                  marginTop: '26px'
                }}
              >
                /* write, compile, run, sleep */
              </div>
            </div>
            <div className="scroll-down" onClick={onButtonClick}>
              <img src={scrolldown} className="scroll-down-icon"/>
            </div>
          </div>
        </Div100vh>
        <div ref={me_ref}></div>
        <Me_s />
      </Breakpoint>
    </div>

  )
}

export default PageTop

function Me_m() {
  useEffect(() => {
    AOS.init({})
  })
  return (
    <div className="flex-column vertical-center" style={{flex: 4, backgroundColor: 'white'}}>
      <div className="container flex-column vertical-center horizontal-center"
        style={{
          marginTop: '20px',
          marginBottom: '30px'
        }}>
        <div className="flex-row vertical-center" style={{width: '100%'}}>
          <div style={{
            display:'flex',
            flex: 2,
            flexDirection: 'column',
            //overflow: 'hidden'
          }}>
            <h2 
              data-aos="fade-right" 
              data-aos-duration="500"
              className="secondary-title text-left">
                {getTranslated(ABOUT_ME)}
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-duration="700"            
              className="content text-left">
                {getTranslated(aboutme)}
            </div>
          </div>
          <div style={{
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <img id="imgprofile" className="rounded-circle" src={"https://github.com/tomgeek27.png"} width="180px" height="180px" />
          </div>
          <div style={{
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <h2 
              data-aos="fade-down" 
              data-aos-duration="700"
              className="secondary-title text-right">
                {getTranslated(DETAILS)}
            </h2>
            <div 
              data-aos="fade-left" 
              data-aos-duration="900"
              className="flex-column">
              <div className="flex-row m-bottom13" style={{justifyContent: 'space-between'}}>
                <div className="detail-key">
                  {getTranslated(AGE)}
                </div>
                <div className="detail-value">
                  {age()}
                </div>
              </div>
              <div className="flex-row m-bottom13" style={{justifyContent: 'space-between'}}>
                <div className="detail-key">
                  e-mail
                </div>
                <div className="detail-value">
                  {email}
                </div>
              </div>
              <div className="flex-row m-bottom13" style={{justifyContent: 'space-between'}}>
                <div className="detail-key">
                  {getTranslated(LOCATION)}
                </div>
                <div className="detail-value">
                  {getTranslated(location)}
                </div>
              </div>
            </div> 
          </div>
        </div>

        <div 
          className="flex-row horizontal-center"
          style={{
            width: '200px',
            justifyContent: 'space-around',
            marginTop: '35px',
            marginBottom: '0px'
          }}>
          <SocialButton src={ghlogo} url={gh_url} />
          <SocialButton src={inlogo} url={in_url} />
          <SocialButton src={uplogo} url={up_url} />
          <SocialButton src={maillogo} url={mail_url} />
        </div>
      </div>

    </div>

  )
}

function Me_s() {
  useEffect(() => {
    AOS.init({})
  })
  return (
    <div style={{backgroundColor: 'white', marginBottom: '45px'}} className="container">
      <div className="margin-s flex-column">
        <div className="m-top23" style={{marginRight: '10%', justifyContent: 'flex-start'}}>
          <div 
            data-aos="fade-right" 
            data-aos-duration="500"
            className="secondary-title" style={{marginBottom: '5px'}}>
              {getTranslated(ABOUT_ME)}</div>
          <div
            data-aos="fade-right" 
            data-aos-duration="700"
            className="content">
              {getTranslated(aboutme)}</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '46px', marginBottom: '57px'}}>
          <img id="imgprofile" className="rounded-circle" src={me} width="140px" height="140px"/>
        </div>
        <div style={{marginLeft: '10%', justifyContent: 'flex-end'}}>
          <div 
            data-aos="fade-right" 
            data-aos-duration="700"
            className="secondary-title" style={{marginBottom: '5px', textAlign: 'right'}}>
              {getTranslated(DETAILS)}</div>
          <div 
            data-aos="fade-right" 
            data-aos-duration="700"
            className="flex-column">
            <div className="flex-row m-bottom13">
              <div style={{flex:1}}/>
              <div className="detail-key">
                {getTranslated(AGE)}
              </div>
              <div className="detail-value">
                {age()}
              </div>
            </div>
            <div className="flex-row m-bottom13">
              <div style={{flex:1}}/>
              <div className="detail-key">
                e-mail
              </div>
              <div className="detail-value">
                {email}
              </div>
            </div>
            <div className="flex-row m-bottom13">
              <div style={{flex:1}}/>
              <div className="detail-key">
                {getTranslated(LOCATION)}
              </div>
              <div className="detail-value">
                {getTranslated(location)}
              </div>
            </div>
          </div> 
        </div>
        <div 
          className="flex-row horizontal-center p-bottom45"
          style={{
            alignSelf: 'center',
            justifyContent: 'space-around',
            width: '275px',
            marginTop: '35px',
          }}>
            <SocialButton src={ghlogo} url={gh_url} />
            <SocialButton src={inlogo} url={in_url} />
            <SocialButton src={uplogo} url={up_url} />
            <SocialButton src={maillogo} url={mail_url} />
          </div>
      </div>
    </div>
  )
}