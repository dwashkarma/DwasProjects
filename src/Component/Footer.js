import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../style/footer.css';
export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
        <a href='https://www.facebook.com/dwashkarma'>
        <FacebookIcon/>
        </a>
        <a href='https://www.instagram.com/dwashkarma/'>
        <InstagramIcon/>
        </a>
        <a href='https://www.linkedin.com/in/diwash-k-5b4b1b164/'>

        <LinkedInIcon/>
        </a>
        <a href='https://mail.google.com/mail/dwas@gmail.com'>

        <EmailIcon/>
        </a>
        <a href='https://github.com/dwaskarma'>

        <GitHubIcon/>

        </a>
        </div>
        <div className='copyright'>
          <p><CopyrightIcon/>Copyright Dwas_karma</p>
        </div>
        {/* <div>
            <p>&copy; 2023 dwaskarma.com</p>
        </div> */}
     
    </div>
  )
}
