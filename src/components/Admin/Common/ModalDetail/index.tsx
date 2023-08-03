import { setIsVisibleModalDetail } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface IProps {
  modalTitle: string;
  children?: React.ReactNode;
}

function ModalDetail (props: IProps) {
  const { modalTitle, children } = props;

  const dispatch = useAppDispatch();
  const isVisibleModalDetail = useAppSelector((state) => state.modal.isVisibleModalDetail);

  // ///////////////////////////////

  const handleClose = () => dispatch(setIsVisibleModalDetail(false));

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial', zIndex: 1000 }}
    >
      <Modal
        show={isVisibleModalDetail}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalTitle}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalDetail;
