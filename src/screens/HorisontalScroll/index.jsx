import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import devices from "../../assets/icons/devices.svg";
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
                <p>Things that matter to me</p>
              </div>
              <div>
                <h4>Simplicity</h4>
                <img src={devices} alt="interface-icon" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
                </p>
              </div>
              <div>
                <h4>Simplicity</h4>
                <img src={devices} alt="interface-icon" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
                </p>
              </div>
              <div>
                <h4>Simplicity</h4>
                <img src={devices} alt="interface-icon" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
                </p>
              </div>
              <div>
                <h4>Simplicity</h4>
                <img src={devices} alt="interface-icon" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
                </p>
              </div>
              <div className="card">
                <h4>Simplicity</h4>
                <img src={devices} alt="interface-icon" />
                <p>
                  Clean organised code, fluff-free interfaces. I aim to strike a{" "}
                  <span>balance between simple and considered outcomes</span>.
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
