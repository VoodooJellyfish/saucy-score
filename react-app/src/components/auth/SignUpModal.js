import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

export default function SignUpModal() {
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
                <button className="formRequestButtons" onClick={handleClick}><i className="fas fa-user-plus fa-lg"></i>
                </button>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm closeModal={closeModal}/>
                </Modal>}
            {/* </> : <> </>} */}
        </>
    )
}