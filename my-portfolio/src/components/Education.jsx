import styled from "styled-components";
import useLang from "../hooks/useLang";
import StyledContainer from "./elements/StyledContainer";

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

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    }
  }

  a {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-weight: 700;
    background-color: var(--oxford-blue);
    box-shadow: 3px 3px 5px 1px #00000032;

    img {
      border-radius: 8px;
      font-size: clamp(0.9rem, 2vw, 1.2rem);
    }
  }
`;

export default function Education({ id }) {
  const { lang } = useLang();

  return (
    <Container id={id}>
      <h3>{lang.education.title}</h3>
      <ul>
        <li title="HarapanUtama">
          <a href="https://shubatam.sch.id/" target="_blank" rel="noreferrer">
            <img
              src={
                "https://scontent.fcgk38-1.fna.fbcdn.net/v/t1.6435-9/124460710_107173894541864_2502841246666174501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGq-p_i6GhvXBfs1lJSfI4Q1oYROWwDrGHWhhE5bAOsYedU-C-Ukqyfw9FAqw07FoudaZUpQYpH4KTqYdHwrdw_&_nc_ohc=CMEclQGnEFYAX8lrX0a&_nc_ht=scontent.fcgk38-1.fna&oh=00_AfBLSXCDU-6Q39Q15q0rEe7PZfe3ZxG05_CbOel5UrUULQ&oe=6517CB57"
              }
              style={{ height: "80px", width: "80px" }}
              alt="HarapanUtama"
              loading="lazy"
            />
            <p>{lang.education.HarapanUtama}</p>
          </a>
        </li>

        <li title="Hacktiv8">
          <a
            href="https://www.hacktiv8.com/?utm_source=google&utm_medium=cpc&utm_campaign=Brand-all&utm_content=hacktiv8&utm_term=responsive-ads&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVXGCxzRhBWQt0wIE2cNswBNGnAS9hJYhQPPyl5j9q39vtlr-Ibxu1waAlLREALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"https://img.beritasatu.com/investor/1637569776.jpg"}
              alt="Hacktiv8"
              loading="lazy"
              style={{ height: "80px", width: "80px" }}
            />
            <p>{lang.education.Hacktiv8}</p>
          </a>
        </li>
      </ul>
    </Container>
  );
}
