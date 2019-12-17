import React from 'react';
import '../css/home.css';
import pythonImg from '../img/pythomImg.png';
import nodeImg from '../img/nodeIcon2.png';
import react from '../img/reactIcon2.png';
import figma from '../img/figmaIcon2.png';
import js from '../img/jsImg2.png';
import git from '../img/gitIcon.png';
import wp from '../img/wordpress.png';
import angular from '../img/angular.png';
import php from '../img/php.png';

const Skills = () => {
  return (
    <div class='inner'>
      <header class='header skill'>
        <h2> Skills </h2>
        {/* <h3>
          4+ years
        </h3> */}
      </header>
      <div class='image-grid'>
        <div className='img'>
          <img className='img-size' src={react} alt='reactjs' />
        </div>
        <div className='img'>
          <img className='img-size' src={wp} alt=' wordpress ' />
        </div>
        <div className='img'>
          <img height='150px' width='150px' src={js} alt='Javascript' />
        </div>
        <div className='img'>
          <img className='img-size' src={pythonImg} alt='python' />
        </div>
        <div className='img'>
          <img className='img-size' src={git} alt='git and github' />
        </div>
        <div className='img'>
          <img className='img-size' src={figma} alt='figma' />
        </div>
        <div className='img'>
          <img className='img-size' src={nodeImg} alt=' nodejs ' />
        </div>
        <div className='img'>
          <img className='img-size' src={angular} alt=' angular ' />
        </div>
        <div className='img'>
          <img className='img-size' src={php} alt=' php ' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
