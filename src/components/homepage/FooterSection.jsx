import React from 'react'

export const FooterSection = () => {
  return (
    <div className='footer-section'>
        <div className="footer-row">
            <ul className='footer-list-menu'>
                <li>Home</li>
                <li>Services</li>
                <li>Our Works</li>
                <li>Clients</li>
                <li>Contact</li>
            </ul>
            
            <div className="creater-name">
                <h2>Christian</h2>
                {/* TODO: redes sociales */}
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
    </div>
  )
}
