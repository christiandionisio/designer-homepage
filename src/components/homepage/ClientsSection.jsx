import React from 'react'

export const ClientsSection = () => {
  return (
    <div id='clients-section' className='clients-section'>
        <h1>
            "Fast and outstanding results. Edie inderstands
            their customer's needs. They have a young and 
            talented team"
        </h1>

        <div className="customer-item">
            <img
                className='user-img' 
                src={require('../../assets/person4.png')} 
                alt="user-img" 
            />
            <div className="user-info">
                <h2>Carlos Tran</h2>
                <h3>The Decorate Gatsby</h3>
            </div>
        </div>
    </div>
  )
}
