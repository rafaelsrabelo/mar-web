import styled from "styled-components";
import { shade } from "polished";
import signInBackgroundImg from "../../../public/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    div.input-div {
      background: #292b2a;
      border-radius: 10px;
      border: 2px solid #292b2a;
      padding: 16px;
      width: 100%;
      height: 48px;

      display: flex;
      align-items: center;

      & + div {
        margin-top: 8px;
      }

      input {
        flex: 1;
        background: #292b2a;
        border: 0;
      }

      svg {
        margin-right: 16px;
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
    
}
> a {
  color: #bd02f0;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#bd02f0')};
  }
}
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg});
  background-size: cover;
`;
