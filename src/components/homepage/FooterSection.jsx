
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
            
            <div className="creator-name">
                <h2>Christian</h2>
                <div className="contact-icons">
                    <i className="fa fa-linkedin fa-2x"></i>
                    <i class="fa fa-whatsapp fa-2x"></i>
                    <i class="fa fa-github fa-2x"></i>
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
