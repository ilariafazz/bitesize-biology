import React from "react";
import "./Blog.css" ;
const Blog = () => {
    return (
        <div>
               <div id="our-youtube"> 
            <div className='portfolio__header-content__blog'>
                <p>All of our videos are available on our YouTube channel.</p>
                <button type="button" onClick={() => window.open('https://www.youtube.com/channel/UC5dN3ufU1Sz7pZur4JjJvHg')}>Click here to watch!</button>
            </div>
        </div>
    </div>
    )


}
export default Blog 