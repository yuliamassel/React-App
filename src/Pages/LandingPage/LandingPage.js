import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Index";
import "./landing.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Sign Up") {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="landing">
      <div className="content-landpage">
        <div className="header">
          <div className="grup-top mx-5 px-5">
            <h3>Zwallet</h3>
            <div className="mt-4 me-5 pe-5">
              <Button onClick={handleClick} className="btn-login me-4">
                Login
              </Button>
              <Button onClick={handleClick} className="btn-signup">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="txt-landpage">
            <div className="txt1">
              <h1>
                Awesome App <br /> For Saving Time.
              </h1>
              <p>
                We bring you a mobile app for banking problems that <br />{" "}
                oftenly wasting much of your times.
              </p>
              <Button className="btn-try">Try It Free</Button>
            </div>
            <img src="/images/png-phone.png" alt="phone" />
          </div>
        </div>
        <div className="support">
          <div className="first-box">
            <img src="/images/microsoft.svg" alt="Microsoft" />
          </div>
          <div className="second-box">
            <img src="/images/dropbox.svg" alt="" />
          </div>
          <div className="third-box">
            <img src="/images/H.M.svg" alt="" />
          </div>
          <div className="fourth-box">
            <img src="/images/airbnb.svg" alt="" />
          </div>
        </div>
        <section>
          <div className="Aboutus">
            <h1>
              About<span> the Application.</span>
            </h1>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="cards">
            <div className="contact">
              <img src="img/phone.svg" alt="" />
              <h5>24/7 Support</h5>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="data">
              <img src="img/lock.svg" alt="" />
              <h5>Data Privacy</h5>
              <p>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
            <div className="download">
              <img src="img/download.svg" alt="" />
              <h5>Easy Download</h5>
              <p>
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </div>
          </div>
        </section>
        <main>
          <div className="features">
            <img src="/images/full-phone.png" alt="Phone" />
          </div>
          <div className="strenght">
            <h1>
              All The<span> Great </span>Zwallet Features.
            </h1>
            <div className="cost">
              <h4>
                1. <span>Small Fee</span>
              </h4>
              <p>
                We only charge 5% of every success transaction done in Zwallet
                app.
              </p>
            </div>
            <div className="security">
              <h4>
                2. <span>Data Secured</span>
              </h4>
              <p>
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </div>
            <div className="friendly">
              <h4>
                3. <span>User Friendly</span>
              </h4>
              <p>
                Zwallet come up with modern and sleek design and not
                complicated.
              </p>
            </div>
          </div>
        </main>
        <article>
          <div className="coment">
            <h1>
              What Users are <span> Saying.</span>
            </h1>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="review">
            <img src="images/Alex.png" alt="Alex Hansiburg" />
            <h3>Alex Hansinburg</h3>
            <h4>Designer</h4>
            <p>
              “This is the most outstanding app that I’ve ever try in my live,
              this app is such an amazing masterpiece and it’s suitable for you
              who is bussy with their bussiness and must transfer money to
              another person aut there. Just try this app and see the power!”
            </p>
            <img className="arrow-right" src="images/arrow-right.svg" alt="" />
            <img className="arrow-left" src="images/arrow-left.svg" alt="" />
          </div>
        </article>
        <footer>
          <div className="final-info">
            <h2>Zwallet</h2>
            <p>
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
            <hr />
            <p className="copyright">2020 Zwallet. All right reserved.</p>
            <span>+62 5637 8882 9901</span>
            <p className="contact">contact@zwallet.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
