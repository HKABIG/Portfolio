// Import Assets
import profile from '../assets/profile.jpg';
import Resume from '../assets/Resume.pdf'
const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Ajay Gonepuri" />

            <div className='header__content'>
                <h1>Hi, I'm Ajay </h1>
                <p> Web3.0 Developer</p>
                <a href="mailto:someone@example.com"><button  className='button'>Get In Touch</button></a>
                <a href={require("../assets/Resume.pdf")} download="Resuem"><button className='button'>Resume</button></a>
            </div>
        </section>
    );
}

export default Header;