import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const NftModal = ({
  modalOpen,
  children,
  closeBody,
  modalClose,
  style,
  component,
}) => {
  const handleClose = () => {
    modalClose(false);
  };

  useEffect(() => {}, [modalOpen]);

  return (
    <div className="">
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-white" sx={style}>
          <div align="right">{closeBody}</div>
          <div className="p-3">{children}</div>
          {component}
        </Box>
      </Modal>
    </div>
  );
};

export default NftModal;
