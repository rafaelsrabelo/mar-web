import styled from "styled-components";

export const Container = styled.div`
      background: #292b2a;
      border-radius: 10px;
      border: 2px solid #292b2a;
      padding: 16px;
      width: 100%;
      height: 48px;
    
      display: flex;
      align-items: center;

      & + input {
        margin-top: 8px;
      }

      input {
        flex: 1;
        background: #292b2a ;
        border: 0;

    }

    svg {
        margin-right: 16px;
    }
`;
