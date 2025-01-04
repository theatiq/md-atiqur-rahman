import React from "react";
import htmlImg from "/src/assets/html.png";

const Skills = () => {
  return (
    <div>
      <div>
        <h1>Skill Set</h1>
        <p>
          Proficient in HTML, CSS, JavaScript, and React.js, I specialize in
          creating responsive and visually stunning web applications. With a
          strong foundation in UI/UX design and modern development tools, I
          bring ideas to life with precision and creativity.
        </p>
      </div>
      <div>
        <div className="card bg-base-100 shadow-xl grid grid-cols-6">
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={htmlImg} alt="HTML5" className="rounded-xl" />
          </figure>
          {/* <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
