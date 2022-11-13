
export const FooterSection = () => {
  return (
    <div id='contact-section' className='footer-section'>
        <div className="footer-row">
            <ul className='footer-list-menu'>
                <li><a href="#home-section">Home</a></li>
                <li><a href="#services-section">Services</a></li>
                <li><a href="#works-section">Our Works</a></li>
                <li><a href="#clients-section">Clients</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            
            <div className="creator-name">
                <h2>Christian</h2>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com/in/christian-dionisio-trive%C3%B1o-64b323180/" target="_blank">
                        <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                    <a href="" target="_blank">
                        <i class="fa fa-whatsapp fa-2x"></i>
                    </a>
                    <a href="https://github.com/christiandionisio" target="_blank">
                        <i class="fa fa-github fa-2x"></i>
                    </a>
                </div>
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
        <p className="copyright">
            created by <span>christiandionisio</span> 
            - devChallenges.io
        </p>
    </div>
  )
}
