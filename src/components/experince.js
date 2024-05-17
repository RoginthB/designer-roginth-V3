import React from 'react'
import '../styles/experince.css'
import lottie from 'lottie-web'
import handleColor from './handleColor'
import experience from '../static/115849-experienced-technical.json'
function Experince() {
  React.useEffect(() => {
    handleColor('Experience');
    lottie.loadAnimation({ container: document.querySelector('#experienceAnim'), animationData: experience, renderer: 'svg', loop: true, autoplay: true, });
  }, []);
  return (
    < div className='experienceLayout'>
      <h3 data-aos="zoom-in" >Take a look at my Experinence.</h3>
      <div className='experience'>
        <div id="experienceAnim" ></div>
        <div className='experienceContent'>
          <div className='experienceCard' data-aos="zoom-in-left">
            <div className='cardHeading'>
              <h4>System Engineer</h4>
              <p>July '2022 - Now</p>
            </div>
            <div className='cardImage'>
              <img src='https://th.bing.com/th/id/OIP.WyZkylBpVdqWpKUCCwYzGAHaD2?rs=1&pid=ImgDetMain' alt='tcs' />
            </div>
            <div className='cardBody'>
              <p>Brigade Bhuwalka Icon, Old Khata No 70.
                Sandaramangala village, ITPL Main Road, Mahadevapura Zone,
                Bangaluru-560066.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experince;
