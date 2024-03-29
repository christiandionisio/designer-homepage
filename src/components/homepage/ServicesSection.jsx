import React from 'react'

export const ServicesSection = () => {
  return (
    <div id='services-section' className='services-section'>
        <h1 className='service-section-title'>
            We offer high demand services
        </h1>
        
        <div className="service-cards">
            <div className='card'>
                <div className='card-header-icon bg-blue'>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </div>
                <h2 className='card-header-title'>UI/UX Design</h2>
                <p className='card-body-paragragh'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sit provident saepe vero beatae, 
                    pariatur labore, deserunt magni corrupti 
                    nulla necessitatibus iste odit tempora. 
                    Beatae animi laudantium non nostrum maiores est.
                </p>
                <button className='card-btn-footer'>
                    Get started
                </button>
            </div>

            <div className='card'>
                <div className='card-header-icon'>
                    <span className="material-symbols-outlined">
                        code
                    </span>
                </div>
                <h2 className='card-header-title'>Front End</h2>
                <p className='card-body-paragragh'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sit provident saepe vero beatae, 
                    pariatur labore, deserunt magni corrupti 
                    nulla necessitatibus iste odit tempora. 
                    Beatae animi laudantium non nostrum maiores est.
                </p>
                <button className='card-btn-footer'>
                    Get started
                </button>
            </div>

            <div className='card'>
                <div className='card-header-icon bg-red'>
                    <span className="material-symbols-outlined">
                        storage
                    </span>
                </div>
                <h2 className='card-header-title'>Back End</h2>
                <p className='card-body-paragragh'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sit provident saepe vero beatae, 
                    pariatur labore, deserunt magni corrupti 
                    nulla necessitatibus iste odit tempora. 
                    Beatae animi laudantium non nostrum maiores est.
                </p>
                <button className='card-btn-footer'>
                    Get started
                </button>
            </div>
        </div>
        
    </div>
  )
}
