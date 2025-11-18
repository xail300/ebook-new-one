'use client'
import { createContext, useState, useContext } from 'react';
import CustomModal from '@/_components/Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const modalShow = () => setShowModal(true);
    const modalClose = () => setShowModal(false);

    return (
        <ModalContext.Provider value={{ showModal, modalShow, modalClose }}>
            {children}
            <CustomModal />
        </ModalContext.Provider>
    )
}