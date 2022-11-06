import React from 'react'
import lottie from 'lottie-web';
import '../styles/projects.css';
import handleColor from './handleColor'
import projectAnim from '../static/104063-dashboard-project-management-kanban-view.json'
const projects =[{name:'Mi food (dribbble inspiration website)',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/miFood.png',link:'https://rohinth248.github.io/mi-food/'},
{name:'Instagram Home Page (Popular Website Clone)',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/images/inatagram-clone.png',link:'https://rohinth248.github.io/instagram-home-clone/'},
{name:'Adobe stock ( Clone website )',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/adobe-stock-clone-img.png',link:'https://rohinth248.github.io/adobe-stock-clone/'},
{name:'Creating Our college website ( using React Js)',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/kongu-mech.jpg',link:'https://rohinth248.github.io/sample/'},
{name:'Project Gallery (image gallery website)',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/images/dashboard.png',link:'https://rohinth248.github.io/projectgallery/'},
{name:'Designerrohinth V1.0.1 (portfolio website)',src:'https://rohinth248.github.io/designer-roginth-V2.0.1/images/designerroginth.png',link:'https://rohinth248.github.io/designerrohinth.tk/'}]
function Projects() {
  React.useEffect(() => {
    handleColor('Project')
    
    lottie.loadAnimation({ container: document.querySelector('#projectAnim'), animationData: projectAnim, renderer: 'svg', loop: true, autoplay: true, });
  }, [])
  return (
    < div className='projectLayout'>
      <h3 data-aos="zoom-in">Take a look at my Projects.</h3>
      <div className='project'>
        <div id="projectAnim" ></div>
        <div className='projectContent'  data-aos="fade-up-left">

          <p >These are some of the fictional projects that I
            worked on. I have created some projects that help me
            understand more of the technology that I use.
          </p>

          <div className='projectContainer'>
            {projects.map(data => (<div className='projectCard' ><div className='cardHead'><img src={data.src} alt='images' /></div><div className='cardBody'><p>{data.name}</p><a target='blank' href={data.link} >View</a></div></div>))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects