import slack from "../media/slack-logo.png"
import git from "../media/git-logo.png"

function Link() {
    return (
        <div id="link__container">
            <a href="https://twitter.com/lactoseutd" target="blank" id="twitter"  className="link__button">Lactoseutd</a>
            <a href="https://training.zuri.team/" target="blank" id="btn__zuri" className="link__button">Zuri Team</a>
            <a href=" http://books.zuri.team" target="blank" id="books" className="link__button">Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=<ajebo>" target="blank" id="book__python" className="link__button">Python Books</a>
            <a href="https://background.zuri.team" target="blank" id="pitch" className="link__button">Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" target="blank" id="book__design" className="link__button">Design Books</a>
            <a href="/contact" className="link__button" id="contact"  >Contact Me</a>
            <section>
                <a href="https://hng9.slack.com/archives/C0427R6QY49/p1666944579778549" target="blank"><img src={slack} alt="SLack Logo" className="social-icon" /></a>
                <a href="https://github.com/aroremmanuel" target="blank"><img src={git} alt="Git Logo" className="social-icon" /></a>
            </section>
        </div>
    );
}

export default Link;