import React from "react";
import "../styles/Designs.css";
import { Col } from "reactstrap";
import kitchen1 from "../images/designImages/design1.jpg";
import kitchen2 from "../images/designImages/design2.jpg";
import kitchen3 from "../images/designImages/design15.jpg";
import kitchen4 from "../images/designImages/design14.jpg";
import kitchen5 from "../images/designImages/design13.jpg";
import kitchen6 from "../images/designImages/design18.jpg";

import kitchen7 from "../images/designImages/design7.jpg";
import kitchen8 from "../images/designImages/design8.jpg";
import kitchen9 from "../images/designImages/design17.jpg";
import kitchen10 from "../images/designImages/design10.jpg";
import kitchen11 from "../images/designImages/design11.jpg";
import kitchen12 from "../images/designImages/design3.jpg";
import KitchenIdea from "../components/UI/kitchenidea";


const kitchenData = [
  {
    id: 1,
    imgUrl: kitchen1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    imgUrl: kitchen2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    imgUrl: kitchen3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    imgUrl: kitchen4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    imgUrl: kitchen5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    imgUrl: kitchen6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    imgUrl: kitchen7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    
    imgUrl: kitchen8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    imgUrl: kitchen9,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    imgUrl: kitchen10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    imgUrl: kitchen11,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 12,
    imgUrl: kitchen12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
];

const Designs = () => {
  return (
    <Col className="main_design mb-5">
      <Col lg="12" className="mb-5 text-center">
        <h2 className="section_title text-center">Innovative Culinary Spaces</h2>
        <h2 className="section_subtitle text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="section_description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
          dui non eros dignissim congue eget a velit.<br/> Nam quis tellus vel tellus
          cursus ultricies. Sed ipsum dui, feugiat vitae finibus at, suscipit
          vitae mi. Curabitur viverra auctor odio vel gravida. <br/>Morbi sit amet
          posuere metus. Aenean finibus id dolor a euismod. Sed placerat felis
          nec elit ornare, quis malesuada lacus semper. <br/>Praesent leo ligula,
          tincidunt vestibulum elit eu, pellentesque euismod lorem.
        </p>
      </Col>
      <div className="design_img">
        {kitchenData.map((item) => (
          <div key={item.id} className="mb-4">
            <KitchenIdea imgUrl={item.imgUrl} />
          </div>
        ))}
        <button className="design_btn mt-4 text-center">
          <a href="login">Make an Appointment</a>
        </button>
      </div>
    </Col>
  );
};

export default Designs;