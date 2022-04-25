import styled from "styled-components";

export const Title = styled.h2`
  color: rgb(34, 34, 34);
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: space-evenl;
  width: 100%;
  max-width: 350px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 15px 10px;
  font-size: 1.2rem;
  outline: none;
  border-radius: 5px;
  color: rgb(14, 196, 30);
  transition: 0.3s ease-in-out;

  &::placeholder {
    color: rgb(150, 150, 150);
  }

  &:focus {
    box-shadow: 1px 1px 4px 2px rgb(14, 196, 30);
  }

  @media (max-width: 420px) {
    max-width: 250px;
  }
`;

export const Button = styled.button`
  width: 300px;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgba(14, 196, 30, 0.7);
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: rgba(14, 196, 30, 1);
  }
  @media (max-width: 420px) {
    max-width: 250px;
  }
`;
