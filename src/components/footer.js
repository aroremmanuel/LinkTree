import zuri from "../media/zuri-logo.png"
import I4G from "../media/i4g-logo.png"

function Footer() {
    return (
        <div>
            <section id="footer-container">
                <img src={zuri} alt="zuri logo" className="footer-logo , footer--content" />
                <p id="hng-text" className="footer--content">HNG Internship 9 Frontend Task</p> 
                <img src={I4G} alt="Ingressive For Good logo" className="footer-logo , footer--content"  />
            </section>
        </div>
    );
}

export default Footer;