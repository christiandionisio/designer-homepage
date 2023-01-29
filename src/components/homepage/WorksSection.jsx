import React from 'react'

export const WorksSection = () => {
  return (
    <div id='works-section' className='works-section'>
        <h1 className='works-section-title'>
            Good design means good business
        </h1>

        <div className='list-cards-work'>

            <div className='card-work'>
                <div className='card-header-image'>
                    <img src={require('../../assets/smarthome.jpg')} 
                    />
                </div>  
                <h6 className='card-service-type'>
                    Fullstack application
                </h6>
                <h2 className='card-service-title'>
                    Smart home dashboard
                </h2>
            </div>

            <div className='card-work'>
                <div className='card-header-image'>
                    <img src={require('../../assets/onboard.png')} 
                        alt='test'
                    />
                </div>  
                <h6 className='card-service-type'>
                    Fullstack application
                </h6>
                <h2 className='card-service-title'>
                    Smart home dashboard
                </h2>
            </div>

            <div className='card-work'>
                <div className='card-header-image'>
                    <img src={require('../../assets/booking.png')}
                        alt='test' 
                    />
                </div>  
                <h6 className='card-service-type'>
                    Mobile application
                </h6>
                <h2 className='card-service-title'>
                    Booking system
                </h2>
            </div>

            <div className='card-work'>
                <div className='card-header-image'>
                    <img src={require('../../assets/juice-product.png')} 
                        alt='test'
                    />
                </div>  
                <h6 className='card-service-type'>
                    Frontend application
                </h6>
                <h2 className='card-service-title'>
                    Juice product homepage
                </h2>
            </div>
        </div>

        <div className='link-see-more'>
            <a href="#">
                see more &nbsp; 
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </a>
        </div>
    </div>
  )
}
