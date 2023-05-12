import { useState } from 'react';
const useCookiePopup = () => {
  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = values => {
    onClose();
  };
  return {
    onClose,
    onFinish,
    open,
    showModal,
    isModalOpen,
    handleOk,
    handleCancel,
  };
};

export default useCookiePopup;
