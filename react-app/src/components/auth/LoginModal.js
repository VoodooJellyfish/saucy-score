import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <button className="formRequestButtons" onClick={handleClick}> <FontAwesomeIcon icon={['fas', 'sign-in-alt']} size="lg"/>
                </button>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    <LoginForm closeModal={closeModal}/>
                </Modal>}
            {/* </> : <> </>} */}
        </>
    )
}