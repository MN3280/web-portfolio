import Firebase from "../assets/icons/Firebase";
import Git from "../assets/icons/Git";
import Javascript from "../assets/icons/Javascript";
import React from "../assets/icons/React";
import styled from "styled-components";
import useLang from "../hooks/useLang";
import StyledContainer from "./elements/StyledContainer";
import Vue from "../assets/icons/Vue";
import AWS from "../assets/icons/AWS";

const Container = styled(StyledContainer)`
  flex-direction: column;

  h3 {
    color: var(--white);
  }

  ul {
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }

  li {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    background-color: var(--oxford-blue);
    box-shadow: 3px 3px 5px 1px #00000032;
  }
`;

export default function Tools({ id }) {
  const { lang } = useLang();
  return (
    <Container id={id}>
      <h3>{lang.tools}</h3>
      <ul className="tools">
        <li title="Javascript">
          <Javascript />
        </li>
        <li title="React">
          <React />
        </li>
        <li title="Vue">
          <Vue />
        </li>
        <li title="Firebase">
          <Firebase />
        </li>
        <li title="AWS">
          <AWS />
        </li>
        <li title="Git">
          <Git />
        </li>
      </ul>
    </Container>
  );
}
