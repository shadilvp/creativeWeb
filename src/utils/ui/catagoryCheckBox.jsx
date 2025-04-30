import React from 'react';
import styled from 'styled-components';

const categoryItems = [
  { label: "Chair", value: "chair" },
  { label: "Bed", value: "bed" },
  { label: "Sofa", value: "sofa" },
  { label: "Lamp", value: "lamp" },
  { label: "Table", value: "table" },
  { label: "All", value: "" },
];

const CatagoryRadio = ({
  selectedCategory,
  onChange,
}) => {
  return (
    <StyledWrapper>
      <div className="radiogroup">
        {categoryItems.map(({ label, value }, index) => {
          const id = `cat-${index}`;
          return (
            <div className="wrapper" key={value}>
              <input
                value={value}
                id={id}
                name="category"
                type="radio"
                className="state"
                checked={selectedCategory === value}
                onChange={() => onChange(value)}
              />
              <label htmlFor={id} className="label">
                <div className="indicator" />
                <span className="text">{label}</span>
              </label>
            </div>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radiogroup {
    padding: 48px 64px;
    border-radius: 16px;
    background: #ecf0f3;
    box-shadow: 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
  }

  .wrapper {
    margin: 8px 0;
  }

  .state {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1e-5;
    pointer-events: none;
  }

  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
  }

  .text {
    margin-left: 16px;
    opacity: 0.6;
    transition: opacity 0.2s linear, transform 0.2s ease-out;
  }

  .indicator {
    position: relative;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
    overflow: hidden;
  }

  .indicator::before,
  .indicator::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
    border-radius: 50%;
  }

  .indicator::before {
    box-shadow: -4px -2px 4px 0px #d1d9e6, 4px 2px 8px 0px #fff;
  }

  .indicator::after {
    background-color: #ecf0f3;
    box-shadow: -4px -2px 4px 0px #fff, 4px 2px 8px 0px #d1d9e6;
    transform: scale3d(1, 1, 1);
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }

  .state:checked ~ .label .indicator::after {
    transform: scale3d(0.975, 0.975, 1) translate3d(0, 10%, 0);
    opacity: 0;
  }

  .state:focus ~ .label .text {
    transform: translate3d(8px, 0, 0);
    opacity: 1;
  }

  .label:hover .text {
    opacity: 1;
  }`;

export default CatagoryRadio;
