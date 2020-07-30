import React, { Component } from 'react';

import mountain from './styles/mountain.png'
import stats from './styles/stats.png'
import board from './styles/board.png'

import IconBox from './IconBox.js'

import './styles/sectionComponent.css';

class SectionComponent extends Component {
  state = { 
    iconsObjects: [
      {
        id: 1,
        img: board,
        title: "Przyrost masy mięśniowej",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt fermentum lacus, vitae posuere nulla pretium quis. Curabitur in commodo neque, vitae laoreet mi. Etiam ornare pulvi.. "
      }, 
      {
        id: 2,
        img: mountain,
        title: "Realizację zamierzonych celów",
        text: "Donec pulvinar, ligula eget lacinia auctor, nibh augue tempor turpis, nec blandit nisi neque vel leo. Morbi vel ultrices urna. Fusce id rutrum purus, sed finibus est. "
      }, 
      {
        id: 3,
        img: stats,
        title: "Poprawę kondycji fizycznej",
        text: "Proin vitae velit at orci eleifend venenatis ut sit amet magna. Praesent ac est condimentum, lacinia erat non, aliquet lorem. Sed cursus arcu quis quam hendrerit, eget vestibulum erat congue."
      }, 
    ],

   }


 

  
  
  render() { 
    const iconsList = this.state.iconsObjects.map(({id, img, title, text}) => (
      <IconBox key={id} img={img} title={title} text={text}/>
    ))

    return ( 
      <>
        <div className="sectionContainer">
          <div className="sectionHeading">
            <h1>razem</h1>
            <div className="iconsContainer">
              <div className="boxForIconBoxes">
                {iconsList}
              </div>    
            </div>
          </div>
        </div>
      </> 
    );
  }
}
 
export default SectionComponent;