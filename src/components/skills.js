import React from 'react'
import '../styles/skills.css';
import lottie from 'lottie-web/build/player/lottie_light';
import skillsAnim from '../static/99312-developer-skills.json';
import handleColor from './handleColor'
const icons = [
{name:'Python', src:"https://img.icons8.com/color/48/000000/python--v1.png"},

{name:'React Native', src:"https://img.icons8.com/color/48/000000/react-native.png"},

{name:'JavaScript', src:"https://img.icons8.com/color/48/000000/javascript--v1.png"},

{name:'CSS', src:"https://img.icons8.com/color/48/000000/css3.png"},

{name:'HTML ', src:"https://img.icons8.com/color/48/000000/html-5--v1.png"},

{name:'React JS ', src:"https://img.icons8.com/color/48/000000/react-native.png"},

{name:'Boostrap ', src:"https://img.icons8.com/color/48/000000/bootstrap.png"},

{name:'Experss JS ', src:"https://img.icons8.com/color/48/000000/express-js.png"},

{name:'Node JS ', src:"https://img.icons8.com/color/48/000000/nodejs.png"},

{name:'Mongo DB ', src:"https://img.icons8.com/color/48/000000/mongodb.png"},

{name:'C# ', src:"https://img.icons8.com/color/240/c-sharp-logo-2.png"},

{name:'Google cloud platform ', src:"https://img.icons8.com/color/48/000000/google-cloud-platform.png"},

{name:'PhotoShop ', src:"https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"},

{name:'Illustrator ', src:"https://img.icons8.com/color/48/000000/adobe-illustrator.png"},

{name:'Adobe xd ', src:"https://img.icons8.com/color/48/000000/adobe-xd--v1.png"},

{name:'Figma ', src:"https://img.icons8.com/color/48/000000/figma.png"}
]

function Skills() {
  React.useEffect(() => {
    handleColor('Skills');
    lottie.loadAnimation({ container: document.querySelector('#skillsAnim'), animationData: skillsAnim , renderer: 'svg', loop: true, autoplay: true, });
  }, [])
    return (
      < div className='skill'>
        <h3 data-aos="zoom-in">Take a look at my Skills.</h3>
        <div className='skills'>
          <div id="skillsAnim" ></div>
          <div className='skillsContent' data-aos="fade-up-left">

            <p >These are my skills and this contains all the technologies
              and programming language that I have learnt until now.
              I am constantly learing, therefore I may update this
              section more often.</p>

              <div className='skillsContainer'>
                {icons.map(data=>(<div className='skillsBox px-5'><div><img src={data.src} alt='images'/></div><p>{data.name}</p></div>))}
              </div>
          </div>
        </div>
      </div>

    )
  
}


export default Skills;
