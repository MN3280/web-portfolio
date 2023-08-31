import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const StyledFooter = styled.footer`
  height: 60px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 3px;

    p {
      letter-spacing: 1px !important;
    }
  }

  p {
    letter-spacing: 2px;
    a {
      color: var(--white);
    }
  }

  ul {
    display: none;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 7px;

    @media screen and (max-width: 1120px) {
      display: flex;
    }

    li {
      width: 100%;
      flex-grow: 1;
    }

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    a:hover svg {
      transition: color 0.3s ease;
      color: var(--white);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>© Copyright 2023. Made by Martini</p>
      <ul>
        <li>
          <a
            href="https://github.com/MN3280"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martini-shu-898575231/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:martinishu93@gmail.com"
            title="Mail"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}
