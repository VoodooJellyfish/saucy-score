import React, { useState } from "react";
// import styled from "styled-components";
import { Modal } from "../../context/Modal";
import EditReviewForm from "./EditReviewForm";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default function EditReviewFormModal({sauce, review, ownsReview}) {
    const [showEditReviewModal, setShowEditReviewModal] = useState(false)

    const handleClick = () => {
        setShowEditReviewModal(true)
    }

    const closeEditReviewModal = () => {
        setShowEditReviewModal(false)
    }
    useEffect (() => {

    }, [ownsReview])


    return (
        <>
        {ownsReview ?
            <>
                <button className="formRequestButtons modal-btn" onClick={handleClick}>
                    <FontAwesomeIcon icon={['fas', 'edit']}/>
                </button>
                {showEditReviewModal && <Modal onClose={() => setShowEditReviewModal(false)}>
                    <EditReviewForm closeEditReviewModal={closeEditReviewModal} sauce={sauce} review={review} />
                </Modal>}
            </> : <> </>}
        </>
    )
}