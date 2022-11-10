import React from 'react'

export const TeamSection = () => {
  return (
    <div className='team-section'>
        <div className="team-title-column">
            <h6>Meet the team</h6>
            <h2>
                We are chilled
                and laidback
                team
            </h2>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.
            </p>
        </div>
        <div className="team-images-column">
            <div className="team-image-column">
                <img src={require('../../assets/person3.png')} />
            </div>
            <div className="team-image-column">
                <img src={require('../../assets/person1.png')} />
                <img src={require('../../assets/person2.png')} />
            </div>
        </div>
        
    </div>
  )
}
