import React from 'react'
import { TiSocialTwitter } from 'react-icons/ti';
import {TiSocialYoutube } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import {TiSocialLinkedin } from 'react-icons/ti';

function End() {
    return (
        <div class="container-lg py-5  ">
              <div class="row  my-4 flex">
            <TiSocialTwitter className='lar'/> 
         < TiSocialYoutube className='lar'/> 
          < TiSocialInstagram className='lar'/>
            < TiSocialFacebook className='lar'/>
            < TiSocialLinkedin className='lar'/>
            </div>
        </div>
    )
}

export default End
