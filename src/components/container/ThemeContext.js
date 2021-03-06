import React, { useState } from "react";
import Container from "./Container";
import Arts from "../1.png";
import Index_01 from "../index_01.png";
import Footer_01 from "../footer_01.png";
import { ThemeContext } from "./context";
import Index from "./Index";
import Footer from "./Footer";

const initTheme = {
  color: "rgba(229, 22, 128, 0.88)",
  background: {
    type: "img",
    item: `url(${Arts})`,
    index: Index_01,
    footer: Footer_01
  },
  slider: 1
};

export default () => {
  const [currentTheme, setTheme] = useState(initTheme);

  const [show, setShow] = useState({
    search: { scale: 1, opacity: 1, cursor: "pointer" },
    close: { opacity: 0, zIndex: 0 }
  });

  const [blockContentShow, setBlockContentShow] = useState(false);

  const didMount = React.useRef(false);
  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        show,
        setShow,
        blockContentShow,
        setBlockContentShow,
        didMount
      }}
    >
      <Container />
      <Index />
      <Footer />
    </ThemeContext.Provider>
  );
};
