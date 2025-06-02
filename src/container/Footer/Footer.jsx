import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
    <div className="app__footer section__padding" id="login">
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">
                    14, Indiranagar 100 Feet Road, HAL 2nd Stage, Bangalore,
                    Karnataka 560038, India
                </p>
                <p className="p__opensans">+91 80-2345-6789</p>
                <p className="p__opensans">+91 80-9876-5432</p>
            </div>

            <div className="app__footer-links_logo">
                <div
                    className="app__footer-headtext"
                    style={{ marginBottom: "1rem" }}
                >
                    Eat Fusion
                </div>
                <p className="p__opensans">
                    &quot;The best way to find yourself is to lose yourself in
                    the service of others.&quot;
                </p>
                <img
                    src={images.spoon}
                    className="spoon__img"
                    style={{ marginTop: 15 }}
                />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday-Friday:</p>
                <p className="p__opensans">08:00 am - 12:00 am</p>
                <p className="p__opensans">Saturday-Sunday:</p>
                <p className="p__opensans">07:00 am - 11:00 pm</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__opensans">2025 Eat Fusion. All Rights reserved.</p>
        </div>
    </div>
);

export default Footer;
