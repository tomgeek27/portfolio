import React from 'react'
import me from '../assets/imgs/me.jpg'
import SocialButton from './social_button'
import ghlogo from '../assets/imgs/github.svg'
import inlogo from '../assets/imgs/linkedin.svg'
import uplogo from '../assets/imgs/upwork.svg'
import { gh_url, in_url, up_url, location, age, email} from '../constants'
import { Breakpoint } from 'react-socks';        

function PageTop() {

  return (
    <div>
      <Breakpoint m up>
        <div 
          className="flex-column"
          style={{minHeight: '100vh'}}>
          <div style={{
            flex: 4
          }}/>
          <div 
            className="flex-column vertical-center horizontal-center"
            style={{
              flex: 3,
            }}>
            <div className="container flex-column vertical-center" style={{
              margin: '50px 0'
            }}>
              <h1 className="main-title">
                Tommaso Amadori
              </h1>
              <span className="main-subtitle">
                /* write, compile, run, sleep */
              </span>
            </div>
          </div>
          <div className="flex-column vertical-center" style={{
            flex: 4,
            backgroundColor: 'white'
          }}>
            <div 
              className="container flex-column vertical-center horizontal-center"
              style={{
                marginTop: '20px',
                marginBottom: '30px'
              }}>
              <Me_m />
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
              </div>
            </div>

          </div>
          <div style={{
            flex: 1,
            minHeight: '30px'
          }}>

          </div>
        </div>
      </Breakpoint>
      <Breakpoint s down>
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
        </div>
        <Me_s />
      </Breakpoint>
    </div>

  )
}

export default PageTop


function Me_s() {
  return (
    <div style={{backgroundColor: 'white', marginBottom: '45px'}} className="container">
      <div className="margin-s flex-column">
        <div className="margin23top" style={{marginRight: '10%', justifyContent: 'flex-start'}}>
          <div className="secondary-title-left-s" style={{marginBottom: '5px'}}>About me</div>
          <div className="content-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '46px', marginBottom: '57px'}}>
          <img id="imgprofile" className="rounded-circle" src={me} width="180px" height="180px"/>
        </div>
        <div style={{marginLeft: '10%', justifyContent: 'flex-end'}}>
          <div className="secondary-title-right-s" style={{marginBottom: '5px'}}>Details</div>
          <div className="flex-column">
            <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
              <div style={{flex:1}}/>
              <div className="detail-key" style={{flex:2}}>
                Age
              </div>
              <div className="detail-value" style={{flex:7}}>
                {age()}
              </div>
            </div>
            <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
              <div style={{flex:1}}/>
              <div className="detail-key" style={{flex:2}}>
                e-mail
              </div>
              <div className="detail-value" style={{flex:7}}>
                {email}
              </div>
            </div>
            <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
              <div style={{flex:1}}/>
              <div className="detail-key" style={{flex:2}}>
                Location
              </div>
              <div className="detail-value" style={{flex:7}}>
                {location}
              </div>
            </div>
          </div> 
        </div>
        <div 
          className="flex-row horizontal-center bottom45"
          style={{
            alignSelf: 'center',
            justifyContent: 'space-around',
            width: '70%',
            marginTop: '35px',
          }}>
            <SocialButton src={ghlogo} url={gh_url} />
            <SocialButton src={inlogo} url={in_url} />
            <SocialButton src={uplogo} url={up_url} />
          </div>
      </div>
    </div>
  )
}

function Me_m() {
  return (
    <div className="flex-row vertical-center horizontal-center" style={{width: '100%'}}>
    <div style={{
      display:'flex',
      flex: 2,
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <h2 className="secondary-title text-left">
        About me
      </h2>
      <div className="content text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </div>
    </div>
    <div style={{
      flex: 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="rounded-circle center-vertical" style={{ height: '190px', width: '190px', borderColor: '#707070' }}>
        <img id="imgprofile" className="rounded-circle" src={me} width="180px" height="180px" />
      </div>
    </div>
    <div style={{
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <h2 className="secondary-title text-right">
        Details
      </h2>
      <div className="flex-column">
        <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
          <div className="detail-key" style={{flex:2}}>
            Age
          </div>
          <div className="detail-value" style={{flex:7}}>
            {age()}
          </div>
        </div>
        <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
          <div className="detail-key" style={{flex:2}}>
            e-mail
          </div>
          <div className="detail-value" style={{flex:7}}>
            {email}
          </div>
        </div>
        <div className="flex-row bottom13" style={{justifyContent: 'space-between'}}>
          <div className="detail-key" style={{flex:2}}>
            Location
          </div>
          <div className="detail-value" style={{flex:7}}>
            {location}
          </div>
        </div>
      </div> 
    </div>
  </div>

  )
}

