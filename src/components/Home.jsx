import pizza from '../assets/banner-pizza.png';
import vector from '../assets/Vector 1.png';
import logo from '../assets/logo.png';
import { handleExploreMore, handleScrollToContact } from '../scrollEvents';

export default function Home() {    
    return (
        <section className="main-container">
            <div id='left-main'>
                <img id='logo' src={logo} alt="Logo" />
                <h1 id='headline'>Discover the  
                <span> Best</span> Food and Drinks</h1>
                <p id='sub-heading'>Naturally made Healthcare Products for the better care & support of your body.</p>
                <button id='explore-btn' onClick={handleExploreMore}>Explore Now!</button>
            </div>
            <div id='right-main'>
                <img id='pizza'src={pizza} alt="" />
                <img id='vector' src={vector} alt="" />
                <button id='contact' onClick={handleScrollToContact}>Get In Touch</button>
            </div>
        </section>
    )
}