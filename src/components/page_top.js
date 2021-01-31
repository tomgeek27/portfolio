import React from 'react'
import me from '../assets/imgs/me.jpg'
import SocialButton from './social_button'
import ghlogo from '../assets/imgs/github.svg'
import inlogo from '../assets/imgs/linkedin.svg'
import uplogo from '../assets/imgs/upwork.svg'
import {gh_url, in_url, up_url} from '../constants/social_url'

function PageTop() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{flex:5}}/>
      <div style={{
        flex:3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
        margin: '50px 0'
      }}>
          <h1 className="main-title">
            Tommaso Amadori
          </h1>
          <span className="main-subsubtitle">
            /* write, compile, run, sleep */
          </span>
      </div>
      <div class="container"
      style={{
          flex:2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              flex:3,
              flexDirection: 'column',
            }}>

              <h2 class="secondary-title text-left">
                About me
              </h2>
              <div class="content text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>
            </div>
            <div style={{
              flex:4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div class="rounded-circle center-vertical" style={{height: '190px', width: '190px', borderColor: '#707070'}}>
                <img id="imgprofile" class="rounded-circle" src={me} width="180px" height="180px"/>
              </div>
            </div>
            <div style={{
              flex:3,
              flexDirection: 'column'
            }}>
              <h2 class="secondary-title text-right">
                Details
              </h2>
              <div class="row bottom13">
                <div class="col-4 text-left detail-key">
                  Age
                  </div>
                <div class="col-8 text-right detail-value">
                  23
                  </div>
              </div>
              <div class="row bottom13">
                <div class="col-4 text-left detail-key">
                  e-mail
                  </div>
                <div class="col-8 text-right detail-value">
                  tommi27@live.it
                  </div>
              </div>
              <div class="row bottom13">
                <div class="col-4 text-left detail-key">
                  Location
                  </div>
                <div class="col-8 text-right detail-value">
                  Peschiera Borromeo, Milan, Italy
                  </div>
              </div>
            </div>
          </div>
          <div style={{
              maxWidth: '300px',
              width: '200px',
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '35px',
              marginBottom: '15px'
            }}>
              <SocialButton src={ghlogo} url={gh_url}/>
              <SocialButton src={inlogo} url={in_url}/>
              <SocialButton src={uplogo} url={up_url}/>
            </div>
        </div>          
      </div>
  )
}

export default PageTop


