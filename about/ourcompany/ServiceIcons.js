import React from "react";
import { FaPlaneArrival, FaCar, FaUserTie, FaCamera, FaTicketAlt, FaHeadset} from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";


const ServiceIcons = () => {
  // Define inline styles for responsiveness
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "20px",
    justifyItems: "center",
    padding: "20px",
  };

  const itemStyle = {
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "40px", // Default icon size
    color: "#333",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#555",
    margin: "0",
  };

  // Responsive adjustments using JavaScript
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust icon and text size based on window width
  const adjustedIconStyle = windowWidth < 480 ? { ...iconStyle, fontSize: "30px" } : windowWidth < 768 ? { ...iconStyle, fontSize: "35px" } : iconStyle;
  const adjustedTextStyle = windowWidth < 480 ? { ...textStyle, fontSize: "10px" } : windowWidth < 768 ? { ...textStyle, fontSize: "12px" } : textStyle;

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <FaPlaneArrival style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Pickup Drop</p>
      </div>
      <div style={itemStyle}>
        <FaCar style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Transport</p>
      </div>
      <div style={itemStyle}>
        <FaUserTie style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Guide</p>
      </div>
      <div style={itemStyle}>
        <FaCamera style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Capturing The Journey</p>
      </div>
      <div style={itemStyle}>
        <FaTicketAlt style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Tickets For Rides</p>
      </div>
      <div style={itemStyle}>
        <FaHeadset style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>24x7 Support</p>
      </div>
      <div style={itemStyle}>
        <FaUserCog style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Customized Trip</p>
      </div>
      <div style={itemStyle}>
        <FaHotel  style={adjustedIconStyle} />
        <p style={adjustedTextStyle}>Hotel</p>
      </div>
    </div>
  );
};

export default ServiceIcons;


























