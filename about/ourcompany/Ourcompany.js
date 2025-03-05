
import React from 'react';
import './ourcompany.css';
import {FaHeart, FaRegHandPaper, FaUsers, FaCamera } from 'react-icons/fa'; // Importing icons
import ServiceIcons from './ServiceIcons';
import { FaSackDollar } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Ourcompany = () => {
  return (
    <>    <div className="imagediv">
      {/* Header Section with Image */}
      <div className="image">
        <div className="imagetext">
          <h1>Welcome to Explore the World Tours</h1>
          <p>Your gateway to unforgettable travel experiences!</p>
        </div>
      </div>
      <br/>
{/* ----------------------------------------------------------------------------------------------------------- */}

    {/* body content and rightside image */}
      <div className="trip-container">
      <div className="trip-content">
        <span className="tag">TRAVEL</span>
        <h2>We take care of your trip</h2>
        <p>
        <b>Our Mission: </b>We aim to create unforgettable travel experiences by offering personalized and immersive trips for all types of travelers
        </p>
        <p>
        <b>Our Expertise: </b>With years of industry experience, our team knows the best destinations, accommodations, and activities to make your journey seamless and enjoyable.
        </p>
        <p>
        <b>Expert Guides & Support: </b>Our knowledgeable and friendly guides are here to provide you with insightful experiences, ensuring your journey is both enjoyable and informative.
        </p>

        <div className="leftparticonhead" style={{display:"flex", alignItems:"center"}}>
          <div className="leftparticondiv">
            <span className="leftparaicon"><FaGlobeAmericas /></span>
            <p>Custom Destinations</p>
          </div>
          <div className="leftparticondiv">
            <span className="leftparaicon"><FaCamera /></span>
            <p>Unforgettable Moments</p>
          </div>
          <div className="leftparticondiv">
            <span className="leftparaicon"><FaSackDollar /></span>
            <p>Competitive Pricing</p>
          </div>
        </div>
      </div>
      
      

      
      <div className="rightsideimage">
        <img src="https://wallpapershome.com/images/pages/pic_v/10326.jpg" alt="" />
      </div>

    </div>
{/* ----------------------------------------------------------------------------------------------------------------------- */}
      <ServiceIcons />
      <br/>
{/* ------------------------------------------------------------------------------------------------------------------------ */}

{/* our story content */}
<div className="">
      <section className="ourstorydiv">
        <div className="ourstory">
          <h2><FaHeart className="icon" /> Our Story</h2>
          <p>
            Founded in 2010, Explore the World Tours started as a small local company with a passion for travel and discovery. Our founder, D.M.Sat , started organizing group trips for friends and family, sharing her love for exploring new destinations. Over the years, word spread, and what began as a small passion project has grown into a leading tour operator that offers guided tours to some of the most popular and off-the-beaten-path destinations around the world.
          </p>
          <p>
            Today, we have a dedicated team of expert guides and travel enthusiasts who are committed to making your journey extraordinary. Whether you're looking to hike through the Andes, explore the streets of Rome, or unwind on a tropical beach, we're here to make your dream vacation a reality.
          </p>
        </div>
      </section>
{/* -------------------------------------------------------------------------------------------------------------------------- */}
     
{/* why choose us content */}
    <section className="chooseushead">
        <div className="chooseusdiv">
          <h2><FaUsers className="icon" /> Why Choose Us?</h2>
          <p>
            We are passionate about delivering exceptional travel experiences that are safe, fun, and memorable. Here’s why thousands of travelers choose Explore the World Tours:
          </p>
          <ul>
            <li><FaRegHandPaper className="list-icon" /> <strong>Experienced Guides:</strong> Our knowledgeable guides are passionate about the places they show you. They are experts in local history, culture, and geography, providing you with insights that enhance your travel experience.</li>
            <li><FaRegHandPaper className="list-icon" /> <strong>Unique Itineraries:</strong> We offer carefully crafted itineraries that include both famous landmarks and off-the-beaten-path destinations, giving you a deeper, more authentic travel experience.</li>
            <li><FaRegHandPaper className="list-icon" /> <strong>Personalized Service:</strong> Whether you are traveling solo, with a partner, or in a group, we tailor each trip to fit your preferences and interests, ensuring that your journey is unique and unforgettable.</li>
            <li><FaRegHandPaper className="list-icon" /> <strong>Top-Notch Comfort and Safety:</strong> We prioritize your safety and comfort, from carefully selecting the best accommodations to ensuring secure and reliable transportation throughout your journey.</li>
            <li><FaRegHandPaper className="list-icon" /> <strong>Responsible Travel:</strong> We care about the environment and local communities. We strive to make every trip sustainable by working with local businesses and promoting eco-friendly practices wherever we can.</li>
          </ul>
        </div>
      </section>
{/* -------------------------------------------------------------------------------------------------------------------------------- */}
      
{/* last div with explore package */}
      <footer className="lastdiv">
        <p>Ready to explore the world? <a href="/tours">Browse Our Tours</a> and begin your adventure today!</p>
      </footer>
    </div>
    
    <div style={{ padding: "50px", textAlign: "center" }}>
        {/* Call to Action */}
        <div style={{ marginTop: "0px", padding: "20px", backgroundColor: "#FEBE10", color: "white", borderRadius: "10px", }}>
        <h2>Plan Your Next Adventure Today!</h2>
        <p>Book your dream vacation with us and make lifelong memories.</p>
        
         <Button variant='warning'
         as={Link} to ='/packages'
         style={{
          fontWeight: "bold",
          borderRadius: "25px",
        }}
         >Explore Packages</Button>
         
         
         </div>
         </div>
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
        
        </div>
      </>
       );
};

export default Ourcompany ;






  
  


















   



