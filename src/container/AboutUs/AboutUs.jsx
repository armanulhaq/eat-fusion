import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
    <div
        className="app__aboutus app__bg flex__center section__padding"
        id="about"
    >
        <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img
                    src={images.spoon}
                    alt="about_spoon"
                    className="spoon__img"
                />
                <p className="p__opensans">
                    At Eat Fusion, we believe food is more than just fuel — it’s
                    an experience. Our chefs blend global flavors with local
                    ingredients to create dishes that are bold, innovative, and
                    unforgettable. Whether you're here for a quick bite or a
                    celebration, we serve every plate with passion and purpose.
                </p>
                <button type="button" className="custom__button">
                    Know More
                </button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img
                    src={images.spoon}
                    alt="about_spoon"
                    className="spoon__img"
                />
                <p className="p__opensans">
                    Founded with the vision of uniting culinary traditions from
                    around the world, Eat Fusion began as a small bistro with a
                    big dream. Over the years, we’ve grown into a destination
                    for food lovers seeking unique flavors, impeccable service,
                    and a warm, welcoming ambiance.
                </p>
                <button type="button" className="custom__button">
                    Know More
                </button>
            </div>
        </div>
    </div>
);

export default AboutUs;
