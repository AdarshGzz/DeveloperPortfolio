import React from 'react'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import './Work.css'
const Work = () => {
  return (
    <div className="work">
      {/* left side */}
      <div className="awesome">
        <span>Work for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Iusto, perspiciatis rerum aliquid illoadipisicing elit.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Iusto, perspiciatis rerum aliquid illoadipisicing elit.
        </span>
        <button className="button s-button">Hire me!</button>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="blur pink-blur w-Pblur"></div>
        <div className="blur blue-blur w-Bblur"></div>
      </div>
    </div>
  );
}

export default Work
