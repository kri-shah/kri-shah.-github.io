import React from 'react';
import '../App.css' 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TypingAnimation from './TypingAnimation';
import samplePDF1 from "./Resume.pdf";

function About() {
  
  return (
    <body id = "Abt">
      <body id = "Abt1">
        <div class="fade-in-image">
          <img src={require('./Krish.png')} alt="Pic of me"/> 
        </div>
      </body>
      
      <body id = "Abt2">
        <br></br>
        <div class="fade-in-image">
          <h1>About Me</h1>
          <p1 id="pa">
            Hi, I'm Krish Shah! I'm a full stack developer and AI 
            undergraduate reasercher from the University of Connecticut. I am a rising sophomore studying 
            Computer Science and Engineering.
          </p1>
          <br></br>
          <h1>Skills and Expierences</h1>
          <p1 id="pa">
            I have expierence using several languages and technologies, and am most familiar with Python, Java, C++, 
            ReactJS, HTML, and CSS. I'm fluent in English, Gujurati, and proficent in Spanish. 
            Here are a few of my expierences:
          </p1>
          </div>
        <br></br>
        <div class="fade-in-image">
        <div id="CA"> 
        <Carousel>
        <div id="slide1">
              <div id="pic4">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Volunteer for Engineers Without Borders</h>
                <p id="t1s">
                Collaborated with a team of engineers and environmental experts to analyze data and develop strategies to enhance environmental sustainability in Hartford, CT.
                Conducted comprehensive research to gather relevant data, employing statistical methods and visualization tools to interpret and present findings effectively.

                </p>
              </div>
            </div>

            <div id="slide1">
              <div id="pic2">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Programmer for FROST Robotics</h>
                <p id="t1s">Program combat robots using Robot Operating System and C++.
                  <br></br> 
                  Use physics and C to program Melty Brain style robots (constantly spinning combat robots)
                </p>
              </div>
            </div>
            
            
            <div id="slide1">
              <div id="pic1">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Volunteer for America Reads</h>
                <p id="t1s">Tutored third grade students at Willington Elementary School (2023) and tutored fifth grader students (2022) at 
                  North Windham Elementary School on reading comprehension and algebra skills.</p>
              </div>
            </div>
            
            <div id="slide1">
              <div id="pic3">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Crew Member for Dunkin' </h>
                <p id="t1s">                    
                  Managed multiple tasks simultaneously, such as taking orders, processing payments, and handling customer inquiries, while maintaining a positive and friendly demeanor.
                  Efficiently prepare a plethora of beverages in an extremely high stress enviorment.
                  Collaborated with team members to ensure smooth operations during peak hours, contributing to improved customer satisfaction and increased sales.

                </p>
              </div>   
            </div>
          </Carousel>
          
          
          </div>
          <p>Click above for my full resume!</p>
        </div>
        
        
        
      
      </body>
      
    </body>
  );
}

export default About;