import React from "react";
import "./intro.css";
import introimg from "../../assets/tfol.png";
import background from "../../assets/back1.png"; 
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section
            className="intro"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="intoacm">
                <span className="hello">Hello,</span>
                <span className="Introtext">
                    Welcome to <br /><span className="sosacm">SOS ACM</span>
                </span>
                <p className="Introtext2">Created by the ACM Club to empower ENSTAB students.</p>
                <div>
                <Link to="/enstaArchive" className="btn-link"><button className="btn">EnstArchive</button></Link>
                <Link to="/codinghub" className="btn-link"><button className="btn">ACM Coding Hub</button></Link>
                </div>
            </div>
            <img src={introimg} alt="imageintro" className="introimg" />
        </section>
    );
};

export default Intro;
/**/