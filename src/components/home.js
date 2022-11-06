import React from 'react'
import '../styles/home.css'
import lottie from 'lottie-web/build/player/lottie_light';
import helloAnim from '../static/robot-says-hello.json';
import handleColor from './handleColor';

function Home() {
    React.useEffect(()=>{
      handleColor('Home');
        lottie.loadAnimation({container:document.querySelector('#homeAnim'), animationData: helloAnim , renderer:'svg', loop : true, autoplay : true,});
    },[]);
  return (
    <div className='home'>
        <div id ="homeAnim" ></div>
        <div className='homeContent'
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
            <h3 >Hi,I'm</h3>
            <h1 >Roginth</h1>
            <p>Building a websites , Developing better Graphic Design & User Interfaces.</p>
        </div>
        <p className='adress'data-aos="fade-up"
     data-aos-duration="3000">I am a MERN Full stack Developer and a Designer from Trichy.</p>
    </div>
  )
}

export default Home;