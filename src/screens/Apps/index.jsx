import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import App from "./App";
import apps from "./data";

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
    <div id="apps">
      <OuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <ul className="cards">
              {apps.map((app, i) => (
                <App key={i} i={i} app={app} />
              ))}
            </ul>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </OuterContainer>
    </div>
  );
};

export default HorisontalScroll;
