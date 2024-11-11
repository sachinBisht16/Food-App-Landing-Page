import aboutImage from '../assets/page-2-image.png';
import { handleReadMore } from '../scrollEvents';

export default function About () {
    return (
        <section id="about-section">
            <div className='about-container'>
                <img id='about-image' src={aboutImage} alt="" />
                <summary id='about-content'>
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                    <button onClick={handleReadMore}>Read More</button>
                </summary>
            </div>
        </section>
    )
}