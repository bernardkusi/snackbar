import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials">
        <div className="page">
          <h3 className="heading">Testimonials</h3>
          <div className="testimonialflex">
            <div className="testimonial">
              <div className="info">
                <span className="image">
                  <img src="./person1.jpg" alt="testimage" />
                </span>
                  <p className="name">Bernard Kusi</p>
              </div>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus maxime placeat, explicabo hic voluptas? Praesentium
                reprehenderit fugit vitae.
              </p>
            </div>
            <div className="testimonial">
              <div className="info">
                <span className="image">
                  <img src="./person2.jpg" alt="testimage" />
                </span>
                  <p className="name">Bernard Kusi</p>
              </div>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus maxime placeat, explicabo hic voluptas? Praesentium
                reprehenderit fugit vitae.
              </p>
            </div>
            <div className="testimonial">
              <div className="info">
                <span className="image">
                  <img src="./person3.jpg" alt="testimage" />
                </span>
                  <p className="name">Bernard Kusi</p>
              </div>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus maxime placeat, explicabo hic voluptas? Praesentium
                reprehenderit fugit vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
