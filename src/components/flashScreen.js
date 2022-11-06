import React from 'react'
import lottie from 'lottie-web';
import flashScreenAnim from '../static/67485-welcome-plants.json'
import '../styles/flashScreen.css'

function FlashScreen() {
     React.useEffect(()=>{
    lottie.loadAnimation({container:document.querySelector('#flashScreenAnim'), animationData: flashScreenAnim ,speed:2, renderer:'svg', loop : true, autoplay : true,});
})
  return (
    <div className='flashScreenLayout'>
    <div id='flashScreenAnim'></div>
    </div>
  )
}

export default FlashScreen