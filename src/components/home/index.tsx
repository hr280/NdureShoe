import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from './footer'
const Home = () => {
  return (
    <div className="mainHome">
      <div>
        <header className="bg-image">
          <div className="container">
            <h1>Shoe Store</h1>
            <h2>Comfy | Modern | Fashionable</h2>
            <Link to='/prouduct' className="btn btn-transparent">
              Shop Now.
            </Link>
          </div>
        </header>
        <section>
          <div className="container">
            <div className="col-3 text--center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXDXNAxo5-n6AHIiNivoyNeZfWS7iTn2PwQ&usqp=CAU"
                alt=""
                className="details-img--ball"
              />
                </div>
                <div className="col-3 text--center">
              <img
                src="https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwb5402fa1/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Casual-Sneakers_51286-NVW.jpg?sw=356"
                alt=""
                className="details-img--ball"
              />
              </div>
              <div className="col-3 text--center">
              <img
                src="https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dw707710b7/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Boots_4442-WTG.jpg?sw=356"
                alt=""
                className="details-img--ball"
              />
              </div>
          </div>
        </section>
        <section className="section--primary">
          <div className="container">
            <div className="col-3 features">
              <i className="fa fa-bolt" />
              <p>"Say cool stuff here"</p>
            </div>
            <div className="col-3 features">
              <i className="fa fa-bank" />
              <p>
                This is why it's great. Here's the one thing you should know
                about this product.
              </p>
            </div>
            <div className="col-3 features">
              <i className="fa fa-heart" />
              <p>Still curious? Find out more by clicking on the link.</p>
            </div>
          </div>
        </section>
        <section className="section--primary--alt">
          <div className="container">
            <h3>
              Use these shoes for running, exercise, sports and normal wear!
            </h3>
          </div>
        </section>
        <section className="section--primary--light">
          <div className="container">
            <blockquote className="testimonial">
              <p>
              It Was a very good experience to buy this product too soft and very good quality price also okay!"
              </p>
              <cite>Satisfied Customer</cite>
            </blockquote>
          </div>
        </section>
        <section className="section--primary--alt bg-image bg-image-2">
          <div className="container text--center">
            <h3>Reasons to buy this product:</h3>
            <div className="col-5 text--left">
              <ul>
                <li className="listShoe">Its the best</li>
                <li className="listShoe">Its awesome</li>
                <li className="listShoe">It makes you happy</li>
                <li className="listShoe">It brings world peace</li>
                <li className="listShoe">Its comfortable!</li>
              </ul>
            </div>
            <div className="col-5 text--left">
              <ul>
                <li className="listShoe">You're the best</li>
                <li className="listShoe">You're awesome</li>
                <li className="listShoe">You make you happy</li>
                <li className="listShoe">You bring world peace</li>
                <li className="listShoe">You like comfortable!</li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
