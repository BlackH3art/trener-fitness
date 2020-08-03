import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './styles/articleIcon.css'

class SingleArticleIcon extends Component {
  state = { 

   }
  render() { 

    const { img, title, text } = this.props
    // style={{backgroundImage: `url(${img})`}}
    return ( 
      <>
        <div className="articleIcon" >
          <div className="trainingImageContainer">
            <img src={img} alt=""/>
          </div>
          <div className="textContainer">
            <h2>{title}</h2>
            <p className="trainingDescribe">{text}</p>
            <span className="more"><h3>więcej </h3><p className="icon"><FontAwesomeIcon icon={faAngleDoubleRight} /></p></span>
          </div>

        </div>
        
      </>
   );
  }
}
 
export default SingleArticleIcon;