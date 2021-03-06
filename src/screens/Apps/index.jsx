import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import App from "./App";

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

  const apps = [
    {
      title: "The Shortcut",
      description:
        "New improved website for the largest talent accelerator in the Nordics. ",
      features: [
        "Responsive layout",
        "Subnavigation",
        "Accordion",
        "API interaction",
        "Skeleton sreens",
        "Search",
        "Filter",
        "Pagination",
      ],
      tools: [
        "React",
        "SASS",
        "Wordpress as a headless CMS",
        "Eventbrite API",
        "Mapbox API",
      ],
      github: "https://alinailina.info/",
      website: "https://alinailina.info/",
      img: "",
    },
    {
      title: "Portfolio app",
      description:
        "My personal website is built with only a few components and minimum use of other libraries.",
      features: [
        "Responsive layout",
        "Hide navigation on scroll",
        "Sticky section",
        "Horizontal scroll section",
      ],
      tools: ["React", "SASS"],
      github: "https://alinailina.info/",
      website: "https://alinailina.info/",
      img: "",
    },
    {
      title: "Emoji store",
      description: "Practice app to show proficiency in relevant technologies.",
      features: [
        "API interaction",
        "Search",
        "Filter",
        "Detail view",
        "Shopping cart",
        "Toggle theme",
        "Scroll to top",
        "Responsive layout",
      ],
      tools: ["React", "React Context API", "Redux", "Open Emoji API"],
      github: "https://alinailina.info/",
      website: "https://alinailina.info/",
    },
    {
      title: "Fruitmart",
      description: "Practice app to show proficiency in relevant technologies.",
      features: [
        "Responsive layout",
        "Subnavigation",
        "Accordion",
        "API interaction",
        "Skeleton sreens",
        "Search",
        "Pagination",
      ],
      tools: [
        "React",
        "SASS",
        "Wordpress as a headless CMS",
        "Eventbrite API",
        "Mapbox API",
      ],
      github: "https://alinailina.info/",
      website: "https://alinailina.info/",
    },
  ];

  console.log(apps);

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
