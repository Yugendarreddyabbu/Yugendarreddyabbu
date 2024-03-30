import React from 'react';

const RelatedSection = () => {
  return (
    <section className="products">
      <header>
        <div className="container">
          <h2 className="title">Customers also bought</h2>
          <div className="text">
            <p>Check out our latest offer</p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {/* Product items */}
          <div className="col-9 col-lg-3">
            <article style={{height:"230px"}}>
              <div className="info">
                <span>
                  <a href="#productid1" className="mfp-open" data-title="Quick view">
                    <i className="icon icon-eye"></i>
                  </a>
                </span>
              </div>
              <div className="btn btn-add">
                <i className="icon icon-cart"></i>
              </div>
              <div className="figure-grid">
              <span class="badge badge-warning">-20%</span>
                <div className="text">
                  <h2 className="title h4">
                    <a href="product.html">MOT</a>
                  </h2>
                    <div class="price">
                       <span class="final h5">£ 90,00</span>
                          <span class="discount">£ 190,00</span>
                     </div>
                     <div className="text">
                  <p>
                  If your motor is due its MOT soon, let us take care of everything.
                  </p>
                </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article style={{height:"230px"}}>
              <div className="info">
                <span>
                  <a href="#productid1" className="mfp-open" data-title="Quick view">
                    <i className="icon icon-eye"></i>
                  </a>
                </span>
              </div>
              <div className="btn btn-add">
                <i className="icon icon-cart"></i>
              </div>
              <div className="figure-grid">
              <span class="badge badge-success">flat 50%</span>
                <div className="text">
                  <h2 className="title h6">
                    <a href="product.html">Premium MOT</a>
                  </h2>
                  <div class="price">
                       <span class="final h5">£ 90,00</span>
                          <span class="discount">£ 190,00</span>
                     </div>
                     <div className="text">
                     <p>
                     Additional services for complete peace of mind.
                  </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article style={{height:"230px"}}>
              <div className="info">
                 <span>
                  <a href="#productid1" className="mfp-open" data-title="Quick view">
                    <i className="icon icon-eye"></i>
                  </a>
                </span>
              </div>
              <div className="btn btn-add">
                <i className="icon icon-cart"></i>
              </div>
              <div className="figure-grid">
                <div className="text">
                  <h2 className="title h6">
                    <a href="product.html">BrakePad Replacement</a>
                  </h2>
                  <div class="price">
                       <span class="final h5">£ 90,00</span>
                          <span class="discount">£ 190,00</span>
                     </div>
                     <div className="text">
                 <p>Recommended to replace every 40,000 miles or every 4 year</p>
                 </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article style={{height:"230px"}}>
              <div className="info">
                <span>
                  <a href="#productid1" className="mfp-open" data-title="Quick view">
                    <i className="icon icon-eye"></i>
                  </a>
                </span>
              </div>
              <div className="btn btn-add">
                <i className="icon icon-cart"></i>
              </div>
              <div className="figure-grid">
                <div className="text">
                  <h2 className="title h4">
                    <a href="product.html">Timing belt & water pump replacement</a>
                  </h2>
                  <div class="price">
                       <span class="final h5">£ 90,00</span>
                          <span class="discount">£ 190,00</span>
                     </div>
                  <div className="text">
                  Timing belt kit replacement
Water pump replacement (included if necessary)
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedSection;
