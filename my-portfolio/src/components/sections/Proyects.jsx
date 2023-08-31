import React from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScrollReveal from "../../hooks/useScrollReveal";
import GridItem from "../elements/GridItem";
import Section from "../elements/Section";
import StyledSubtitle from "../elements/Subtitle";

const StyledGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 40px 20px 0;

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const proyects = [
  {
    title: "HackNews",
    imageUrl: require("../../assets/images/HackNews.png"),
    stack: ["React", "AWS", "Firebase"],
    GithubUrl: "https://github.com/MN3280/hacknews",
    id: "left",
  },
  {
    title: "HackNews_Mobile",
    imageUrl: require("../../assets/images/HackNews_Mobile.png"),
    stack: ["React", "Docker", "EXPO"],
    GithubUrl: "https://github.com/MN3280/hacknews_mobile",
    id: "right",
  },

  {
    title: "NewsPortal",
    imageUrl: require("../../assets/images/NewsPortal.png"),
    stack: ["Vue", "AWS", "Firebase"],
    GithubUrl: "https://github.com/MN3280/newsPortal",
    id: "right",
  },
];

export default function Proyects() {
  const { lang } = useLang();

  useScrollReveal(["#proyect-title"], {
    origin: "bottom",
    distance: "50px",
  });
  useScrollReveal(["#left"], {
    origin: "left",
    distance: "50px",
  });
  useScrollReveal(["#right"], {
    origin: "right",
    distance: "50px",
  });
  return (
    <Section id="proyects">
      <StyledSubtitle id="proyect-title">{lang.proyects}</StyledSubtitle>
      <StyledGrid>
        {proyects.map((proyect, index) => (
          <GridItem data={proyect} key={index} id={proyect.id} />
        ))}
      </StyledGrid>
    </Section>
  );
}
