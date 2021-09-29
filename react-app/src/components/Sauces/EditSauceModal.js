import { Modal } from "../../context/Modal";
import EditSauceForm from "./EditSauceForm";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EditSauceFormModal({sauce, isSauceOwner}) {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (

        <>
        {isSauceOwner ?
            <div>
                <button id='del' onClick={handleClick}> <FontAwesomeIcon icon={['fas', 'edit']}/>
                </button>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    <EditSauceForm closeModal={closeModal} sauce={sauce} />
                </Modal>}
            </div> : <> </>}
        </>
    )

}