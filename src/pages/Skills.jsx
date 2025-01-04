import React from "react";
import htmlImg from "/src/assets/html.png";
import cssImg from "/src/assets/css.png";
import jsImg from "/src/assets/js.png";
import mongodbImg from "/src/assets/mongodb.png";
import firebaseImg from "/src/assets/firebase.png";
import nodeImg from "/src/assets/node.png";
import expressImg from "/src/assets/express.png";
import gitImg from "/src/assets/git.png";
import githubImg from "/src/assets/github.png";
import reactImg from "/src/assets/react.png";
import pythonImg from "/src/assets/python.png";
import reactRouterImg from "/src/assets/router.png";

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
            <img src={cssImg} alt="CSS" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={jsImg} alt="JS" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={mongodbImg} alt="Mongodb" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={firebaseImg} alt="firebase" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={nodeImg} alt="node" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={expressImg} alt="express" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={gitImg} alt="git" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={githubImg} alt="github" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={reactImg} alt="react" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={reactRouterImg} alt="router" className="rounded-xl" />
          </figure>
          <figure className="px-5 pt-5">
            <img src={pythonImg} alt="python" className="rounded-xl" />
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
