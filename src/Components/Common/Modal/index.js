import React from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
const CustomModal = ({}) => {
  const modalProps = useSelector((state) => state.global.modalProps);
  return (
    <Modal isVisible={modalProps && modalProps.isVisible} backdropOpacity={0.8}>
      {modalProps && modalProps.component}
    </Modal>
  );
};

export default CustomModal;
