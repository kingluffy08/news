import React from "react";
import backgroundImg from "../assets/images/image-web-3-desktop.jpg";
import backgroundImg2 from "../assets/images/image-web-3-mobile.jpg"
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";


export default function Section () {
    return(
        <div>
        <div className="container">
            <div className="card">
                <div className="backgroud-image">
                    <picture>
                        <source media="(min-width:600px)" srcSet={backgroundImg} alt="background image"></source>
                        <img src={backgroundImg2} alt="background image" ></img>
                    </picture>
                </div>
                <div className="info">
                    <div className="text">
                        <h1>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="text">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <h1>New</h1>
                <div className="description">
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="description border">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="description">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
        <div className="gallery">
            <div className="gallery-card">
                <div className="gallery-image">
                    <img src={img1} alt="reviving retro pc"></img>
                </div>
                <div className="gallery-info">
                    <h1>01</h1>
                    <h4>Reviving Retro PCs</h4>
                    <p>What happens when old PCs given are given modern upgrades?</p>
                </div>
            </div>
            <div className="gallery-card">
                <div className="gallery-image">
                    <img src={img2} alt="top 10 laptops"></img>
                </div>
                <div className="gallery-info">
                    <h1>02</h1>
                    <h4>Top 10 Laptops of 2022</h4>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="gallery-card">
                <div className="gallery-image">
                    <img src={img3} alt="The growth of gaming"></img>
                </div>
                <div className="gallery-info">
                    <h1>03</h1>
                    <h4>The Growth of Gaming</h4>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
        </div>
    );
}




