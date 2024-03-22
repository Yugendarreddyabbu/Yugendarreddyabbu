import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeSlider = () => {
    const options = {
        loop:  true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          300: {
            items: 1
          },
          600: {
            items: 3
          }
        }
      };
  return (
    <section className="header-content">
      <h2 className="d-none">Slider element</h2>
      <div className="container-fluid">
      <OwlCarousel className="owl-slider owl-carousel owl-theme" {...options}>
          <div className="item d-flex align-items-center" style={{backgroundImage: "url(assets/images/homeslide_1.png)"}}>
            <div className="container">
              <div className="caption">
                <div className="animated" data-start="fadeInUp">
                  <div className="promo pt-3">
                    <div className="title title-sm p-0">Engine Service</div>
                  </div>
                </div>
                <div className="animated" data-start="fadeInUp">
                  minor dent or major collision:
                  <br />
                  Let us restore your car to its orginal
                </div>
                <div className="animated" data-start="fadeInUp">
                  <div className="pt-3">
                    <a href="#" target="_blank" className="btn btn-outline-warning">Book now</a>
                    <a href="#" target="_blank" className="btn btn-outline-light"> Get first discount</a>
                  </div>
                </div>
                <div className="animated" data-start="fadeInUp">
                  <div className="promo pt-5">
                    <div className="h6 p-0 m-0">Get special price</div>
                    <div className="price">
                      <span>£149,99</span>
                      <span>349,99</span>
                    </div>
                    <small className="d-none d-sm-block">** Product prices with discount are available until the end of stock </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item d-flex align-items-center" style={{backgroundImage: "url(assets/images/homeslide_2.JPG)"}}>
            <div className="container">
              <div className="caption">
                <div className="animated" data-start="fadeInUp">
                  <div className="big-text big-text-sm">
                    <span>Save now </span>
                    <span>50%</span>
                    <span>on General Service</span>
                    <div>
                      <a href="#" target="_blank" className="btn btn-info btn-block">Book now</a>
                    </div>
                  </div>
                </div>
                {/* <div className="animated d-none" data-start="fadeInUp">
                  <a href="#" target="_blank" className="btn btn-info">Buy this template</a>
                  <a href="#" target="_blank" className="btn btn-outline-light"> Get first discount</a>
                </div> */}
                <div className="animated" data-start="fadeInUp">
                  <div className="promo pt-5">
                    <div className="badge badge-secondary">New Offer</div>
                    <div className="h2 p-0 mt-1">Free Yearly checkup</div>
                    <div className="price">
                      <span>£72,99</span>
                      <span>83,99</span>
                    </div>
                    <small className="d-none d-sm-block">** Product prices with discount are available until the end of service </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item d-flex align-items-center" style={{backgroundImage: "url(assets/images/homeslide_3.jpg)"}}>
            <div className="container">
              <div className="caption">
                <div className="promo text-center">
                  <div className="animated" data-start="fadeInUp">
                    <div className="title title-sm p-0">MAINTENANCE & REPAIR</div>
                  </div>
                  <div className="animated" data-start="fadeInUp">
                    Instant pickcup from home/work
                    <br />
                    Delivery within a day
                  </div>
                  <div className="animated" data-start="fadeInUp">
                    <a href="#" target="_blank" className="btn btn-light">Get a quote</a>
                    <a href="#" target="_blank" className="btn btn-outline-light"> Hurry Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </OwlCarousel>
      </div>
    </section>
  );
};

export default HomeSlider;
