import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import shapes from "../../assets/icons/shapes.svg";
import honesty from "../../assets/icons/honesty.svg";
//import sparkles from "../../assets/icons/sparkles.svg";
import pen from "../../assets/icons/pen.svg";
import puzzle from "../../assets/icons/puzzle.svg";
import flag from "../../assets/icons/flag.svg";
import { handleDynamicHeight, applyScrollListener } from "./helpers.js";

const OuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const HorisontalScroll = () => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div id="culture">
      <OuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <div className="card-container">
              <div>
                <h3>Culture</h3>
                <p>First things first</p>
              </div>
              <div>
                <h4>Simplicity</h4>
                <img src={shapes} alt="basic-shapes" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
                </p>
              </div>
              <div>
                <h4>Honesty</h4>
                <img src={honesty} alt="interface-icon" />
                <p>
                  I believe in the power of honest communication, trust,
                  transparency and short feedback cycle.
                </p>
              </div>
              <div>
                <h4>Pixel-perfect precision</h4>
                <img src={pen} alt="interface-icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, illum hic ratione rem porro itaque.
                </p>
              </div>
              <div>
                <h4>Ownership / Accountability</h4>
                <img src={flag} alt="flag-icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, illum hic ratione rem porro itaque.
                </p>
              </div>

              <div className="card">
                <h4>Common sence</h4>
                <img src={puzzle} alt="puzzle-icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, illum hic ratione rem porro itaque.
                </p>
              </div>
            </div>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </OuterContainer>
    </div>
  );
};

export default HorisontalScroll;
