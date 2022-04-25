import styled from "styled-components";
import banner from "../../assets/mottu-banner.png";

export const Container = styled.section`
  width: 100%;
  height: calc(100%-70px);
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 500px;
  max-width: 750px;
  box-shadow: 1px 3px 6px #ccc;
  border-radius: 6px;
  display: flex;
  background-color: #fff;

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 520px) {
    max-width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 300px;
  }
`;

export const BoxImage = styled.div`
  width: 50%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  opacity: 0.7;
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BoxForm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
