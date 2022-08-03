import React from "react";
import "./Possibility.css" ;
import greenBunny from "../../assets/greenBunny.PNG"


const Possibility = () => {
    return (
        <div id="about-dharini">
            <div className='about-dharini-text'>
                <div id="green-bunny-container">
                    <img src={greenBunny} id="green-bunny" />
                </div>
                <p>This fall, I began volunteering at my local hospital. It was incredibly shocking and an eye opener to be in a hospital environment. Hospitals were ravished by Covid-19 pandemic and our communities were severely impacted. While being in a challenging environment, I learned to face my obstacles head on. My experience in the hospital further set my future. Like Ilaria, from a young age I remember spending numerous hours just playing doctor with my sister cause I’d always be the doctor. I love wanting to learn more and exploring a field where everything is always growing. Biology is something that surrounds us on a daily basis and we hope your journey with us is as enriching and fun as it can be!</p>
            </div>
        </div>
    )
}
export default Possibility 
