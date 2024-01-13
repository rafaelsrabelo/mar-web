import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    button {
      background: #bd02f0;
      height: 48px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #ffffff;
      width: 100%;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, "#BD02F0")};
      }
    }
`;
