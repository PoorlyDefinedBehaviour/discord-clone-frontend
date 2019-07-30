import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;

  & > p {
    color: #b9bbbe !important;
    font-weight: bolder !important;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border: 1px solid transparent;

  &:hover {
    border-color: #111;
  }
`;
