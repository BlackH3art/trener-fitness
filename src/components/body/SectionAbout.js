import React, { Component } from 'react';

import './styles/sectionAbout.css';
import aboutpic from './styles/aboutfoto.jpg';

class SectionAbout extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="headingContainer">
          <h1>O mnie</h1>
          <div className="aboutContainer">
            <div className="aboutContentBox">
              <img src={aboutpic} alt="about"/>
              <div className="aboutTextContainer">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem felis, luctus et dui viverra, tempus eleifend nibh. Aenean vehicula ipsum diam, vel vehicula ipsum efficitur eleifend. Aliquam erat volutpat. Nunc quis fringilla eros. Pellentesque maximus maximus porttitor. Curabitur mattis ut dolor vitae efficitur. </p>
                  <button className="moreAboutMe">Dowiedz się o mnie więcej</button>
                  <button className="howCooperate">Jak wygląda współpraca?</button>
              </div>
            </div>


          </div>
        </div>
      </>
     )
  }
}
 
export default SectionAbout;