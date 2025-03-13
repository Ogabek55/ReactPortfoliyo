import React, { useRef } from "react";
import Header from "./component/Home/Header";
import Main from "./component/Home/Main";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const caseStudiesRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const recentWorkRef = useRef<HTMLDivElement | null>(null);
  const getInTouchRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      home: homeRef,
      caseStudies: caseStudiesRef,
      testimonials: testimonialsRef,
      recentWork: recentWorkRef,
      getInTouch: getInTouchRef,
    };

    const targetRef = sectionRefs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box>
      <Header scrollToContent={scrollToContent} />
      <Main
        homeRef={homeRef}
        caseStudiesRef={caseStudiesRef}
        testimonialsRef={testimonialsRef}
        recentWorkRef={recentWorkRef}
        getInTouchRef={getInTouchRef}
      />
    </Box>
  );
}

export default App;
