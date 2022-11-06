import React from 'react';
import lottie from 'lottie-web';
import handleColor from './handleColor';
import '../styles/about.css';
import aboutAnim from '../static/88558-about-us.json';
function About() {
  React.useEffect(()=>{
    handleColor('About');
    lottie.loadAnimation({container:document.querySelector('#aboutAnim'), animationData: aboutAnim , renderer:'svg', loop : true, autoplay : true,});
})
  return (
    <div className='aboutLayout'>
      <h3 data-aos="zoom-in" >Take a idea about me</h3>
      <div className='aboutMe'>
        <div id='aboutAnim'></div>
        <div className='aboutBody' data-aos="fade-up-left">
          <p>Hi, I am Roginth B . I am a self-taught. MERN Full Stack Developer, Graphic Designer and a UI
          Designer from Trichy.<br/><br/>
          I more knowledge about the Graphic design as well as Programming. Since I started to learn code, I
          have been learning more and them into building projects on my own improve my knowledge and
          understanding on the technologies I use.<br/><br/>
          I also like to explore and learn new technologies and become a much better developer as well as
          designer. Nowadays, I am learning Google cloud platform for Cloud and DevOps to build and Host
          websites faster. This helps me to expanding my skillset.<br/><br/>
          If you want to get touch with me, send me a <a href='https://services.tochat.be/n/9108525028537'>message</a> and I will get back with you soon.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About