import React from "react";
import styled from "styled-components";

// interface BestSellingNavRadioProps {
//   currentCategory: string;
//   setCurrentCategory: (category: string) => void;
// }

const BestSellingNavRadio = ({ currentCategory, setCurrentCategory }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="tabs">
          <input 
            type="radio" 
            id="radio-1" name="tabs" 
            defaultChecked 
            checked={currentCategory === "chair"}
            onChange={() => setCurrentCategory("chair")}  
          />
          <label 
            className="tab" htmlFor="radio-1">
            Chair
          </label>
          <input
            type="radio"
            id="radio-2"
            name="tabs"
            checked={currentCategory === "bed"}
            onChange={() => setCurrentCategory("bed")}
          />
          <label className="tab" htmlFor="radio-2">
            Beds
          </label>
          <input
            type="radio"
            id="radio-3"
            name="tabs"
            checked={currentCategory === "sofa"}
            onChange={() => setCurrentCategory("sofa")}
          />
          <label className="tab" htmlFor="radio-3">
            Sofa
          </label>
          <input
            type="radio"
            id="radio-4"
            name="tabs"
            checked={currentCategory === "lamp"}
            onChange={() => setCurrentCategory("lamp")}
          />
          <label className="tab" htmlFor="radio-4">
            Lamb
          </label>
          <input 
            type="radio" 
            id="radio-5" name="tabs" 
            defaultChecked 
            checked={currentCategory === "plantpot"}
            onChange={() => setCurrentCategory("plantpot")}  
          />
          <label 
            className="tab" htmlFor="radio-5">
            Plant
          </label>
          <input 
            type="radio" 
            id="radio-6" name="tabs" 
            defaultChecked 
            checked={currentCategory === "table"}
            onChange={() => setCurrentCategory("table")}  
          />
          <label 
            className="tab" htmlFor="radio-6">
            Table
          </label>
          <span className="glider" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
      0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
  }

  .tabs * {
    z-index: 2;
  }

  .container input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 50px;
    font-size: 0.8rem;
    color: black;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
  }

  .notification {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 10px;
    left: 30%;
    font-size: 10px;
    margin-left: 0.75rem;
    border-radius: 50%;
    margin: 0px;
    background-color: #e6eef9;
    transition: 0.15s ease-in;
  }

  .container input[type="radio"]:checked + label {
    color: #185ee0;
  }

  .container input[type="radio"]:checked + label > .notification {
    background-color: #185ee0;
    color: #fff;
    margin: 0px;
  }

  .container input[id="radio-1"]:checked ~ .glider {
    transform: translateX(0);
  }

  .container input[id="radio-2"]:checked ~ .glider {
    transform: translateX(100%);
  }

  .container input[id="radio-3"]:checked ~ .glider {
    transform: translateX(200%);
  }

  .container input[id="radio-4"]:checked ~ .glider {
    transform: translateX(300%);
  }

  .container input[id="radio-5"]:checked ~ .glider {
    transform: translateX(400%);
  }

  .container input[id="radio-6"]:checked ~ .glider {
    transform: translateX(500%);
  }

  .glider {
    position: absolute;
    display: flex;
    height: 30px;
    width: 50px;
    background-color: #e6eef9;
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }

  @media (max-width: 700px) {
    .tabs {
      transform: scale(0.6);
    }
  }
`;

export default BestSellingNavRadio;
