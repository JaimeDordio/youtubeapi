import styled from "styled-components";

export const DropdownItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 10px;
  height: fit-content;
  cursor: pointer;

  .thumbnail__container {
    width: 40%;
    max-width: 220px;
    height: auto;
    padding: 5px;

    img {
      border-radius: 5px;
      width: 100%;
      height: 110px;
      object-fit: cover;
    }
  }

  .info__container {
    width: 60%;
    text-align: start;
    padding: 5px;

    h1 {
      font-size: 0.9rem;
      margin: 0;
      margin-bottom: 7px;
    }

    h2 {
      font-size: 0.8rem;
      margin: 0;
      color: #777;
      font-weight: 500;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
