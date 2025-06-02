import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef_image" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Chef's word" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote_image" />
                    <p className="p__opensans">
                        At Eat Fusion, we don't just prepare meals — we tell
                        stories through flavor.
                    </p>
                </div>
                <p className="p__opensans">
                    {" "}
                    Every ingredient is chosen with care, every dish crafted
                    with intention. Cooking is my language of love and
                    creativity, and this restaurant is a reflection of that
                    belief.
                </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign_image" />
            </div>
        </div>
    </div>
);

export default Chef;
