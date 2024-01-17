import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  .btn-details {
    border: 1px solid #10b981;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#10B981")};
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 20px 40px;
    background: #1a1a1e;
    border-bottom: 1px solid #6a6a6d;

    img {
      height: 28px;
    }
    div {
      display: flex;
      align-items: center;

      button {
        margin-left: 20px;
      }
    }
  }
  .cards {
    .card {
      .card-header {
        background: #414953;
        padding: 4px 8px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        width: 246px;
      }

      .card-body {
        padding: 4px 8px;
        background: #262a30;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      & + .card {
      }

      .btn-cancel {
        border: 1px solid #ef4444;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, "#EF4444")};
        }
      }

      .btn-details {
        border: 1px solid #10b981;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, "#10B981")};
        }
      }
      .disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;

  background-color: #1f1e24;

  button.modal-open {
    padding: 14px 18px;
    border-radius: 10px;
    border: 1px solid #999;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-top: 10px;
    &:hover {
      background: ${shade(0.2, "#999")};
    }
  }

  form {
    input {
      color: white;
    }
  }

  button.button-primary {
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

  button.button-secondary {
    background: #10B981;
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
      background: ${shade(0.2, "#10B981")};
    }
  }
`;
