import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../../context/Modal";
import CreateReviewForm from "./ReviewForm";

// const PostButtonStyle = styled.div`
// .styled-button{
//     font-size: 14px;
//     margin: 3%;
//     border-radius: 50%;
//     font-weight: bold;
//     color: rgb(191, 191, 191);
//     padding:  10%;
//     outline: none;
//     border: none;
//     background-color: #7bc2b196;
// }
// .styled-button:hover{
//     background-color: #689e9296 ;
//     transform: scale(1.01);
// }


// `

export default function CreateReviewFormModal({sauce}) {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }


    return (
        <>
            <button className="formRequestButtons" onClick={handleClick}>Create Review
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)}>
                <CreateReviewForm closeModal={closeModal} sauce={sauce} />
            </Modal>}
        </>
    )
}