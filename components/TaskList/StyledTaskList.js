import styled from "styled-components";

export const StyledContainerList = styled.div`
  max-width: 2000px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledTitleItems = styled.h2`
  font-size: 38px;
  font-weight: 800;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 70px;
`;

// export const ToggleButton = styled.button`
//   padding: 15px 45px;
//   font-size: 18px;
//   color: #fff;
//   background: #3d3d3d;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin: 0 auto 20px;
//   display: ${({ $showForm }) => ($showForm ? "none" : "block")};
//   transition: all 0.2s;
//   margin-bottom: 30px;

//   &:hover {
//     background-color: #555555;
//     transition: all 0.4s;
//   }

//   &:focus {
//     outline: none;
//     border: 1px solid #3d3d3d;
//   }
// `;

export const StyledItems = styled.ul`
  font-size: 18px;
  font-weight: 600;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-template-rows: repeat(auto-fill, 400px);
  gap: 70px 35px;
  justify-content: center;
`;
