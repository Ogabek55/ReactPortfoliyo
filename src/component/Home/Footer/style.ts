import styled from "@emotion/styled";

export const ClickUp = styled.div`
  gap: 20px;
  flex-wrap: nowrap;
  @media (max-width: 730px) {
      text-align: center;
    }
  button {
    width: 160px;
    height: 60px;
    background-color: #1b1b1b;
    color: #ffffff;
    opacity: 30%;
    margin: 30px;
    border: 1px solid #ffffff;

    @media (max-width: 730px) {
      width: 90px;
      height: 50px;
      font-size: 12px;
    }
  }
`;
