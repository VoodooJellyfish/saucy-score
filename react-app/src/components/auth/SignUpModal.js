import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <button className="formRequestButtons" onClick={handleClick}><FontAwesomeIcon icon={['fas', 'user-plus']} size="lg"/>
                </button>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm closeModal={closeModal}/>
                </Modal>}
            {/* </> : <> </>} */}
        </>
    )
}