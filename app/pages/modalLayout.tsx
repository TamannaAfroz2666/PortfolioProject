"use client";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BiSolidMessage } from "react-icons/bi";
import { CloseOutlined } from '@ant-design/icons';
import { IoChevronDown } from "react-icons/io5";

const ModalLayout = () => {
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

   
    return (
        <div>
            <div className="relative ">
                <Button className="mx-6 px-6 w-[60px]"
                    type="primary"
                    icon={<BiSolidMessage size={20} />}
                    style={{ padding: '18px 18px' }}
                    onClick={showModal} />
            </div>
            <Modal title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{ top: '100%', transform: 'translateX(-90%)', width: 100 }}
                footer={null}
                closeIcon={<IoChevronDown size={20} />}
            >
                <div className='h-[80px]'>


                </div>

            </Modal>
        </div>
    );
}

export default ModalLayout;