import logo from '../assets/logo.png';
import instagram from '../assets/instagram-logo.png';
import twitter from '../assets/twitter-logo.png';
import facebook from '../assets/facebook-logo.png';
import Nav from './Nav';
import { handleScrollToTop } from '../scrollEvents';

const contactUsElements = [
    'Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434',
    'example2020@gmail.com',
    '(904) 443-0343'
];

const MoreElements = [
    'About Us',
    'Product',
    'Careers',
    'Contact Us'
];

const socialIDs = [instagram, twitter, facebook];

export default function Footer () {
    return (
        <footer>
            <div class="footer-logo">   
                <img id="footer-logo" src={logo} alt="Logo" onClick={handleScrollToTop} />
            </div>
            <Nav navId='contact-nav-title' title='Contact Us' listElements={contactUsElements}/>
            <Nav navId='navigation-title' title='More' listElements={MoreElements}/>
            <Nav navId='social-link-title' title='Social Links' listElements={socialIDs.map(id => <img src={id}/>)}/>
        </footer>
    )
}

// <nav aria-labelledby="contact-nav-title">
//                 <h1>Contact Us</h1>
//                 <ul>
//                     <li>Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
//                     <li><a href="mailto:example2020@gmail.com">example2020@gmail.com</a></li>
//                     <li><a href="tel:(904) 443-0343">(904) 443-0343</a></li>
//                 </ul>
//             </nav>
//             <nav aria-labelledby="navigation-title">
//                 <h1 id="navigation-title">More</h1>
//                 <ul>
//                     <li><a href="#">About Us</a></li>
//                     <li><a href="#">Product</a></li>
//                     <li><a href="#">Career</a></li>
//                     <li><a href="#contact-us">Contact Us</a></li> 
//                 </ul>
//             </nav>
//             <nav aria-labelledby="social-links-title">
//                 <h1 id="social-links-title">Social Links</h1>
//                 <ul>
//                     <li>
//                         <a href="https://www.instagram.com/" aria-label="Instagram">
//                             <img src={instagram} alt="Instagram Icon" />
//                         </a>
//                     </li>
//                 <li>
//                     <a href="https://twitter.com/" aria-label="Twitter">
//                         <img src={twitter} alt="Twitter Icon" />
//                     </a>
//                 </li>
//                     <li>
//                         <a href="https://www.facebook.com/" aria-label="Facebook">
//                             <img src={facebook} alt="Facebook Icon" />
//                         </a>
//                     </li>
//                 </ul>
//             </nav>