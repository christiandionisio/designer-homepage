import React from 'react'

export const HomeSection = () => {
  return (
    <div className='home-section'>
        <div className='home-title-subsection'>
            <h6 className='home-subtitle'>
                Unhappy with your website?
            </h6>
            <h1 className='home-title'>
                We create beautiful and fast web sercices
            </h1>
        </div>

        <div className='home-image-subsection'>
            <img src={require('../../assets/heroImage.jpg')} 
                alt="Imagen Home Section" 
            />
        </div>

        <div className='home-title-subsection'>
            <h1 className='home-title w-366'>
                Story, emotion and purpose
            </h1>
            <p className='home-paragraph'>
                We help transform your ideas into real
                world applicactions that will outperform
                your toughest competition and help you 
                achieve your strategic goals in short 
                period of time.
            </p>
        </div>

        <div className='home-contact-subsection'>
            <p className='contact-paragrapgh'>
                Want us to contact you?
            </p>
            <div className='contact-textfield'>
                <input type="text" placeholder='Email' />
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}
