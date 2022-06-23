import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF,FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { BiDollar } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'



function Footer() {
    return (
        <div className="footer">
           <div className="footer__container">
                <div className="footer__div">
                    <h3>About</h3>
                    <Link>How Airbnb works</Link>
                    <Link>Newsroom</Link>
                    <Link>Investors</Link>
                    <Link>Airbnb Plus</Link>
                    <Link>Airbnb Luxe</Link>
                    <Link>HotelTonight</Link>
                    <Link>Airbnb for Work</Link>
                    <Link>Made possiblr by Hosts</Link>
                    <Link>Careers</Link>
                    <Link>Founder's Letter</Link>
                </div>

                <div className="footer__div">
                    <h3>Community</h3>
                    <Link>Diversity & Belonging</Link>
                    <Link>Against Discrimination</Link>
                    <Link>Accessibility</Link>
                    <Link>Airbnb Associates</Link>
                    <Link>Frontline Stays</Link>
                    <Link>Guest Referrals</Link>
                    <Link>Gift cards</Link>
                    <Link>Airbnb.org</Link>
                </div>

                <div className="footer__div">
                    <h3>Host</h3>
                    <Link>Host your home</Link>
                    <Link>Host an Online Experience</Link>
                    <Link>Host an Experience</Link>
                    <Link>Responsible Hosting</Link>
                    <Link>Resource Center</Link>
                    <Link>Community Center</Link>
                </div>

                <div className="footer__div">
                    <h3>Support</h3>
                    <Link>Our COVID-19 Response</Link>
                    <Link>Help Center</Link>
                    <Link>Cancellation options</Link>
                    <Link>Neighborhood Support</Link>
                    <Link>Trust & Saftey</Link>
                </div>
           </div>

           <div className="footer__bottom">
                <div>
                    <p>&copy; Airbnb, Inc.</p>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                    <Link>Sitemap</Link>
                </div>

                <div>
                    <p>&copy; O.A.G_Studios 2021. All rights Reserved</p>
                </div>


                <div>
                    <Link>
                        <MdLanguage className="footer__icon" />
                        English(US)
                    </Link>

                    <Link>
                        <BiDollar className="footer__icon" />
                        USD
                    </Link>
                    <div className="footer__icon__container" >
                        <FaFacebookF className="footer__icon" />
                        <FaTwitter className="footer__icon"  />
                        <ImInstagram className="footer__icon" />
                    </div>
                </div>

           </div>

        </div>
    )
}

export default Footer
