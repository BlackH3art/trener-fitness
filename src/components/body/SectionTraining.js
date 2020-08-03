import React, { Component } from 'react';

import pose1 from './styles/1.svg';
import pose2 from './styles/2.svg';
import pose3 from './styles/3.svg';

import SingleArticleIcon from './SingleArticleIcon';
import './styles/sectionTraining.css';

class SectionTraining extends Component {
  state = { 
    images: [
      {
        id: 1,
        img: pose1,
        title: "Trening siłowy",
        text: "Nunc nec commodo erat, varius maximus justo. Proin sed ligula eros. Jadjaskg klf"
      },
      {
        id: 2,
        img: pose2,
        title: "Trening wytrzymałościowy",
        text: "Duis tellus ex, elementum at augue non, pharetra tincidunt justo. Duis a risus lacinia, ornare libero eu, fringilla tortor."
      },
      {
        id: 3,
        img: pose3,
        title: "Jakieś fikołki",
        text: "Donec orci magna, imperdiet a volutpat eu, bibendum et orci. Curabitur vestibulum erat nec mauris tristique, nec lacinia erat placerat."
      },
    ]
   }
  render() { 

    const trainingList = this.state.images.map(({id, img, title, text}) => (
      <SingleArticleIcon key={id} img={img} title={title} text={text} />
    ))

    return ( 
      <>
        <div className="sectionContainer">
          <div className="sectionTrainingHeading">
            <h1> treningów</h1>
            <div className="trainingsContainer">
              <div className="boxTrainingBoxes">
                {trainingList}
              </div>    
            </div>
          </div>
        </div>
      </>
     );
  }
}
 
export default SectionTraining;