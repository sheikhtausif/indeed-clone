import styled from "styled-components";

const Foot = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ul {
    display: flex;

    padding: 0;
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;

    font-size: 0.875rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 1.43;
  }
  li {
    list-style: none;
    border-bottom: 1px solid transparent;
  }
  li:hover {
    text-decoration: underline black;
    cursor: pointer;
    background-color: #ffffff;
  }

  ul:nth-child(1) {
    margin-bottom: 1.5625rem;
  }
  @media (max-width: 620px) {
    ul {
      display: flex;
      flex-direction:column;
      list-style: none;
      width: 90vw !important;
      font-size: 1rem;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 1.43;
    }
    span{
      display:none;
    }
    li {
      color:grey;
      background-color: #ffffff;
      
    }
  }
`;

export function Footer() {
  return (
    <>
      <Foot>
        <div>
          <ul>
            <li>Career Advice <span>-</span> </li>
            <li>Browse Jobs <span>-</span> </li>
            <li>Browse Companies <span>-</span> </li>
            <li>Salaries <span>-</span> </li>
            <li>Indeed Events <span>-</span> </li>
            <li>Work at Indeed <span>-</span> </li>
            <li>Countries <span>-</span> </li>
            <li>About <span>-</span> </li>
            <li>Help Center</li>
          </ul>

          <ul>
            <li>© 2021 Indeed <span>-</span> </li>
            <li>Accessibility at Indeed <span>-</span> </li>
            <li>Privacy Center <span>-</span> </li>
            <li>Cookies <span>-</span> </li>
            <li>Privacy <span>-</span> </li>
            <li>Terms</li>
          </ul>
        </div>
      </Foot>
    </>
  );
}
