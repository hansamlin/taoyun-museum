import React, { useContext } from "react";
import styled from "styled-components";
import Panels from "./Panels";
import sumeitse from "../sumeitse.jpg";
import zorn from "../zorn.jpg";
import video from "../loop_home.mp4";
import { ThemeContext } from "./theme-context";

const divBackGround = ({ background }) =>
  background.type === "img" && background.item;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-image: ${divBackGround};

  opacity: 1;
  transition: opacity 1s ease-in 0.35s;
  z-index: 10;

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 100%
    );
    content: "";
    display: block;
    height: 330px;
    margin-top: 10px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    top: 0;
    touch-action: none;
    transition: opacity 0.35s ease-out;
    width: calc(100% - 20px);
    z-index: 50;
  }
`;

const zIndexTheme = ({ theme }) =>
  theme.background.type === "video" ? "1" : "-1";

const DivVideo = styled.div`
  position: fixed;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  z-index: ${zIndexTheme};
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const panels = [
  {
    color: "#e5439a",
    background: {
      type: "img",
      item: `url("${zorn}")`
    }
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: video
    }
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    }
  }
];

const Space = styled.div`
  display: inline-block;
  width: calc((100% - ((100% / 3.6) * 3)) / 2);
`;

export default () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper background={theme.background}>
      <DivVideo theme={theme}>
        <Video autoPlay loop muted preload="auto">
          <source src={theme.background.item} type="video/mp4" />
        </Video>
      </DivVideo>
      {panels.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && <Space key={index} />}
            <Panels theme={theme} key={item.color}>
              {item}
            </Panels>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};
