import React from 'react';
import styled from 'styled-components';

const ShopNowButton = () => {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">shop now</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: 0.75rem; /* Smaller font */
    font-family: inherit;
  }

  button.learn-more {
    width: 8rem; /* Reduced width */
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 2rem; /* Reduced size */
    height: 2rem;
    background: #282936;
    border-radius: 1rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    left: 0.4rem;
    width: 0.8rem;
    height: 0.1rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.2rem;
    right: 0.05rem;
    width: 0.4rem;
    height: 0.4rem;
    border-top: 0.1rem solid #fff;
    border-right: 0.1rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.5rem 0;
    margin: 0 0 0 1.4rem; /* Adjust spacing next to icon */
    color: #282936;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(0.8rem, 0);
  }

  button:hover .button-text {
    color: #fff;
  }
`;


export default ShopNowButton;
