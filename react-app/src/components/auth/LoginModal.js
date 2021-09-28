import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

export default function LoginFormModal() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    // useEffect(() => {

    // },[hasReviewed])


    return (
        <>
        {/* { */}
            {/* <> */}
                <button className="formRequestButtons" onClick={handleClick}><i className="fas fa-sign-in-alt fa-lg"></i>
                </button>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    <LoginForm closeModal={closeModal}/>
                </Modal>}
            {/* </> : <> </>} */}
        </>
    )
}