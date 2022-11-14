import React from 'react';
import ghlogo from '../assets/imgs/github-contact.svg'
import inlogo from '../assets/imgs/linkedin-contact.svg'
import uplogo from '../assets/imgs/upwork-contact.svg'
import maillogo from '../assets/imgs/mail-contact.svg'
import { gh_url, in_url, up_url, mail_url } from '../constants/social_url'
import SocialButton from './social_button'
import { getTranslated } from '../helper/translater';

const CONTACTS = {
  it: 'Contatti',
  en: 'Contacts'
}

const COPYRIGHT_TEXT = {
  it: 'Portfolio di Tommaso Amadori',
  en: 'Tommaso Amadori\'s Portfolio'
}

const copyright = () => {
  let currentYear = new Date().getFullYear()
  return `\xA9 ${getTranslated(COPYRIGHT_TEXT)}, ${currentYear}`
}

function Contacts() {
  return (
    <div style={{width: '100%', backgroundColor: '#343434'}}>
      <div className="content-container flex-column horizontal-center" style={{backgroundColor: 'transparent'}}>
        <div className="content-title" style={{color: 'white'}}>{getTranslated(CONTACTS)}</div>
        <div 
          className="flex-row social-buttons"
          style={{
            marginTop: '45px',
            marginBottom: '60px'
          }}
          >
            <SocialButton src={ghlogo} url={gh_url} />
            <SocialButton src={inlogo} url={in_url} />
            <SocialButton src={uplogo} url={up_url} />
            <SocialButton src={maillogo} url={mail_url} />
          </div>
      </div>
      <div id="copyright">{copyright()}</div> 
    </div>
  );
}

export default Contacts;