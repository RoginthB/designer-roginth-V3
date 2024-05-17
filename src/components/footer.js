import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/footer.css'
const list = [ { path:'/'  ,name: 'Home' },{path:'/Skills'  ,name:'Skills'},{path:'/Project'  ,name:'Project'},{path:'/Experience'  ,name:'Experience'} ,{path:'/About'  ,name:'About'}]

const socialMedia = [
    {name:'Whatsapp',link:'https://services.tochat.be/n/9108525028537',src:'https://img.icons8.com/color/48/000000/whatsapp--v1.png'},
    {name:'Facebook ', link:'https://www.facebook.com/rohinth.rewa',src:'https://img.icons8.com/color/48/null/facebook-new.png'},
    {name:'Instagram ',link:"https://www.instagram.com/roginth_b/?hl=en",src:'https://img.icons8.com/fluency/48/null/instagram-new.png'},
    {name:'Linked In ',link:"https://in.linkedin.com/in/roginth-b-35ba211a8",src:'https://img.icons8.com/color/48/000000/twitter-circled--v1.png'},
    {name:'Twitter',link:"https://twitter.com/Rohinth10014070",src:'https://img.icons8.com/color/48/000000/linkedin.png'}]
const project = [
    {name:'Web Development',link:'https://github.com/roginthb/'},
    {name:'Graphic Design',link:'https://www.behance.net/rohinthrewa'}
]
const resume = [
    {name:'Download my resume.',link:'https://drive.google.com/file/d/1erRNJc2R7QIxdSv-SDFRq6ibm8_c-P4c/view?usp=drivesdk'}
]   
const handleSlideBar=()=>{
    
    if(document.querySelector('#sidebar').className==='socialMedia'){
        document.querySelector('#sidebar').className='socialMediaAfter'
        document.querySelector('#forwardIcon').className='iconRotate'
    }else{
        document.querySelector('#sidebar').className='socialMedia'
        document.querySelector('#forwardIcon').className=' '
    }
   
}
function Footer() {
    return (
        <div className='footer'>
            <div className='footerContent'>
                <div className='main'>
                    <h4>Roginth B</h4>
                    <p>Designed and built with all the
                        love in the world by the <a href='https://github.com/Rohinth248/' >Roginth </a>
                        with the help of React JS, CSS,
                        JavaScript, Bootstrap, Noad JS.
                        Code licensed By Roginth @ 2022.
                    </p>
                    <h6>Currently V3.</h6>
                </div>
                <div className='links'>
                    <div className='lists'>
                        <h4>Links</h4>
                        <ul>
                        
                        {list.map(data =>(<Link  to={data.path}>{data.name}</Link>))}
                        </ul>
                    </div>
                    <div className='lists'>
                        <h4>Social Media</h4>
                        <ul>
                        {socialMedia.map(data =>(
                            <a  href={data.link}>{data.name}</a>
                        ))}
                        </ul>
                    </div>
                    <div className='lists'>
                        <h4>Projects</h4>
                        <ul>
                        {project.map(data =>
                            <a  href={data.link}>{data.name}</a>
                        )}
                        </ul>
                    </div>
                      <div className='lists'>
                        <h4>Resume </h4>
                        <ul>
                        {resume.map(data =>
                            <a href={data.link}>{data.name}</a>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='fixed'> <a href='https://rohinth248.github.io/designer-roginth-V2.0.1/'>Go Previous Version </a> </div>
            <div  className='socialMediaSlide'>
            <div id='sidebar' className='socialMedia'>
            {socialMedia.map(data=>(<a href={data.link} ><img src={data.src} alt={data.name}/></a>))}       
            </div>
            <div className='slideIcon' onClick={handleSlideBar}>
            <img id='forwardIcon'src="https://img.icons8.com/fluency/28/null/forward.png"alt='forward'/>
            </div>
            </div>
            
        </div>
    )
}

export default Footer;
