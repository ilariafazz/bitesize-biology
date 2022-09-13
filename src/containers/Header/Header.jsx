import React from "react";
import "./Header.css";
import noTextLogo from "../../assets/noTextLogo.PNG"
import backgroundlessBunny from "../../assets/backgroundlessBunny.PNG"

// In order to make the links work, About Ilaria will have to get an ID... etc.

const Header = () => {
    return (
        <div id="about-ilaria" className="header-container">
            <div className="header">
                <img src={noTextLogo} id="bunny" />
                <div className="explanation-box">
                    <h1 className="header-text">Defining the specifics of biology in a digestible way, <br />Your first biology exposure starts today!</h1>
                    <h3 className="regular-text">Our mission is to expose kids to the biology all around them in an entertaining way. Through answering any questions we receive and providing engaging activities, we foster young curiosity with facts and understanding!</h3>
                </div>
            </div>
            <div className="about-ilaria">
                <div>
                    <p>Last summer I spent 24 days isolated in the wild, canoeing down the picturesque Missinaibi River in northern Ontario. I faced whatever nature threw at me daily, learning anything and everything I could about my surroundings.
                    This trip only further solidified my passion for biology and understanding the world around me. Ever since I was young I remember always being curious, always having questions and always genuinely wondering how things around me worked. 
                    <br />
                    <br />Whether it was by spending countless days exploring the woods outside my Nonna’s farm, summers at sleepaway camp, immersed in the great outdoors, or even in the lecture room of my grade eleven biology class, I love understanding how systems work together all throughout life. 
                    Naturally, meeting Dharini and starting BiteSize Biology allows me to share my passion for curiosity in the realm of biology to elementary students.</p>
                </div>
                <div>
                    <img id="about-ilaria-bunny" src={backgroundlessBunny} />
                </div>
            </div>
        </div>
    )
}
export default Header

