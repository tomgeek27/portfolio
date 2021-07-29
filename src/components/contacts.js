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

function Contacts() {
  return (
    <div style={{width: '100%', backgroundColor: '#343434'}}>
      <div className="container flex-column horizontal-center">
        <div className="contacts-title">{getTranslated(CONTACTS)}</div>
        <div 
          className="flex-row"
          style={{
            width: '235px',
            justifyContent: 'space-around',
            marginTop: '40px',
            marginBottom: '70px'
          }}>
            <SocialButton src={ghlogo} url={gh_url} />
            <SocialButton src={inlogo} url={in_url} />
            <SocialButton src={uplogo} url={up_url} />
            <SocialButton src={maillogo} url={mail_url} />
          </div>
      </div>
    </div>
  );
}

export default Contacts;