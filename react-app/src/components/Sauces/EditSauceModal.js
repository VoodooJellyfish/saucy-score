import { Modal } from "../../context/Modal";
import EditSauceForm from "./EditSauceForm";
import React, { useState } from "react";

export default function EditSauceFormModal({sauce}) {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <button className="formRequestButtons" onClick={handleClick}> Edit Sauce
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)}>
                <EditSauceForm closeModal={closeModal} sauce={sauce} />
            </Modal>}
        </>
    )

}