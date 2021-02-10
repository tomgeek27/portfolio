import React from 'react';
import ghlogo from '../assets/imgs/github-contact.svg'
import inlogo from '../assets/imgs/linkedin-contact.svg'
import uplogo from '../assets/imgs/upwork-contact.svg'
import { gh_url, in_url, up_url } from '../constants/social_url'
import SocialButton from './social_button'

function Contacts() {
  return (
    <div style={{width: '100%', backgroundColor: '#343434'}}>
      <div class="container flex-column horizontal-center">
        <div class="contacts-title">Contacts</div>
        <div 
          className="flex-row"
          style={{
            width: '200px',
            justifyContent: 'space-around',
            marginTop: '40px',
            marginBottom: '70px'
          }}>
            <SocialButton src={ghlogo} url={gh_url} />
            <SocialButton src={inlogo} url={in_url} />
            <SocialButton src={uplogo} url={up_url} />
          </div>
      </div>
    </div>
  );
}

export default Contacts;