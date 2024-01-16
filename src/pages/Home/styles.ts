import styled from "styled-components";

export const Container = styled.div`
  display: block;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 20px 40px;
    background: #1a1a1e;
    border-bottom: 1px solid #6a6a6d;

    img {
        height: 36px;
    }
    div {
        display: flex;
        align-items: center;

        button {
            margin-left: 20px;
        }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: #1F1E24;
`;
