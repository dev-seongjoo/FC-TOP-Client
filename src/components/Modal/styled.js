import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ModalContent = styled.div`
  margin-top: 10px;
`;
