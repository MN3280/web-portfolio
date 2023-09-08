import anime from "animejs";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import LogoMn from "../assets/images/pic.png";

const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: var(--oxford-blue);
  overflow: hidden;
  transition: all 0.5s ease;

  img {
    width: 290px;
    height: 100px;
    visibility: hidden;
  }

  &.hidden {
    position: absolute;
    opacity: 0;
  }
`;

export default function Loader() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      anime({
        targets: "#demo-img",
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 3000,
        direction: "alternate",
        begin: () => {
          const demoImg = ref.current.querySelector("#demo-img");
          if (demoImg) {
            demoImg.style.visibility = "visible";
          }
        },
        complete: () => {
          if (ref.current) {
            ref.current.classList.add("hidden");
            document.querySelector("body").style.overflow = "auto";
            setTimeout(() => ref.current.remove(), 500);
          }
        },
      });
    }
  }, []);

  return (
    <LogoContainer ref={ref}>
      <img src={LogoMn} alt="#" id="demo-img" width="200px" height="350px" />
    </LogoContainer>
  );
}
