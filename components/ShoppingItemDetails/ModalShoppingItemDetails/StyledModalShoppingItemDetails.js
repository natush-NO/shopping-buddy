import styled from "styled-components";
import Image from "next/image";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  border-radius: 5px;
  position: relative;
  max-width: 70vw;
  max-height: 80vh;
  min-width: 150px;
  min-height: 100px;
  background: url("/images/background_image.webp");
  overflow: auto;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50px;
`;

export const StyledModalImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledPlaceholder = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
