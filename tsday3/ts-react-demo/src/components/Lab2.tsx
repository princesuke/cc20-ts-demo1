import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose = () => {}, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="backdrop" style={{ background: "pink", width: "300px" }}>
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Usage
{
  /* <Modal isOpen>ใส่เนื้อหาใดๆ</Modal> */
}
