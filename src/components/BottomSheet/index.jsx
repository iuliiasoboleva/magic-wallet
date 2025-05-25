import React from 'react';

import { Content, Handle, Overlay, Sheet } from './styles';

const BottomSheet = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <Sheet isOpen={isOpen}>
        <Handle />
        <Content>{children}</Content>
      </Sheet>
    </>
  );
};

export default BottomSheet;
