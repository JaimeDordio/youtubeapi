import styled from "styled-components";

export const SearchInput = styled.input`
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  background-color: #fefefe;
  border: 1px solid #d4d3d3;
  border-radius: 4px;
  height: 35px;
  width: -webkit-fill-available;
  transition: 0.3s;

  &:focus {
    outline: none;
    border: 1px solid #888;
  }
`;
