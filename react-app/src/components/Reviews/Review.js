import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditReviewFormModal from './EditReviewModal';
import { DeleteReviewButton } from './DeleteReview';
import { thunk_getReview } from '../../store/review';
import "./Review.css"

export default function Review({sauce, review, hasReviewed, setHasReviewed, previousReview}) {
    const dispatch=useDispatch()
    const user = useSelector(state => state.session.user)
    const userId = user?.id

    let reviews = sauce?.reviews
    // const previousReview = reviews?.find(review => review?.user_id === +userId)

    const ownsReview = review?.user_id === userId ? true : false

    useEffect(() => {
        dispatch(thunk_getReview(review?.id));
    }, [review, dispatch]);

    useEffect(() => {
        
    }, [ownsReview]);

    let score = review?.rating
    let scoreArr = []
    for(let i=0; i < +score; i++) {
        scoreArr.push('fas fa-star')
    }

    let spice = review?.spice_level
    let spiceArr = []
    for(let i=0; i < +spice; i++) {
        spiceArr.push('fas fa-pepper-hot')
    }

    return (
        <>
            <div key={review?.id} className="reviewContainer">
                <div id="user-container">
                    <Link id="submitted" to={`/users/${review?.user_id}`}>
                        {review?.username}
                    </Link> <span id="date"> {review?.created_at}</span>
                    <span id="modal-btn-container">
                        <EditReviewFormModal review={review} sauce={sauce} ownsReview={ownsReview}/>
                        <DeleteReviewButton review={review} ownsReview={ownsReview} setHasReviewed={setHasReviewed} previousReview={previousReview}/>
                    </span>
                    {/* <div id="datePrev"> on {review?.updated_at}</div> */}
                </div>
                <div className="icon-container">
                    <span id='star-container'>
                        {scoreArr.map((el, i) => {
                        return <span key={i}><i class={el}></i></span>
                        })}
                    </span>
                    {/* <span> </span> */}
                    <span id='spice-container'>
                        {spiceArr.map((el, i) => {
                        return <span key={i}><i class={el}></i></span>
                        })}
                    </span>
                </div>
                {/* <div>Spice Level: {review?.spice_level}</div> */}
                <div id="commentContent">{review?.body}</div>
                {/* <div id="modal-btn-container">
                        <EditReviewFormModal review={review} sauce={sauce} ownsReview={ownsReview}/>
                        <DeleteReviewButton review={review} ownsReview={ownsReview} setHasReviewed={setHasReviewed}/>
                </div> */}
            </div>
        </>
    )
}