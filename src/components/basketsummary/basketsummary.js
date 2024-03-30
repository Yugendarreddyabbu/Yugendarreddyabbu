import React from 'react';
import './styles.css'; // Import CSS file where classes are defined
import { Link } from 'react-router-dom';

const BasketContainer = ({ selectedServicePrice }) => {
  return (
    <div style={{ width: '300px', position: "relative" }}>
    <div className="BasketContainer" id="BasketContainer">
      <div className="BasketCard" id="BasketCard">
        <header>
          <div>
            <h3>Your basket</h3>
          </div>
        </header>
        <div className="VehicleInfo">
          <div className="info">
            <strong>Bmw I7 ev</strong>
            <span>Electric</span>
          </div>
        </div>
        <article className="Basket">
          <ul className="items">
            <li className="BasketItem">
              <div className="basket-item-wrapper">
              </div>
            </li>
          </ul>
          <div className="basket-total">
            <div className="title">TOTAL (inc. VAT)</div>
            <div className="price">
            <div class="final h5">{selectedServicePrice}<span className="currency_fractions">.95</span></div>
            </div>
          </div>
        </article>
        <div className="BasketFooter">
          <span className="RemainingCredit">Remaining credits: <b>£0</b></span>
          <div className="inputHidden">
            <div className="ApplyCredit">
              <a className="apply-credits disabled" href="#">Apply Credits</a>
            </div>
            <div className="ApplyPromotion">
              <a href="#">Add Coupon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Link to="/checkout-schedule"><div className="btn btn-dark icon icon-chevron-right"  style={{marginLeft: "124px", width: "252px", top:"8px", position: "relative"}}>Proceed to Next</div></Link>
    </div>
  );
};

export default BasketContainer;
