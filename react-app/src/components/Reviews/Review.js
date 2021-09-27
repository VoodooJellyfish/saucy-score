import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditReviewFormModal from './EditReviewModal';
import { DeleteReviewButton } from './DeleteReview';
import { thunk_getReview } from '../../store/review';
import "./Review.css"

export default function Review({sauce, review, hasReviewed, setHasReviewed}) {
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

    return (
        <>
            <div key={review?.id} className="reviewContainer">
                <div id="user-container">
                    <Link to={`/users/${review?.user_id}`}>
                        {review?.username}
                    </Link>
                    <div id="datePrev">{review?.updated_at}</div>
                <div>
                    <EditReviewFormModal review={review} sauce={sauce} ownsReview={ownsReview}/>
                    <DeleteReviewButton review={review} ownsReview={ownsReview} setHasReviewed={setHasReviewed}/>
                </div>
                </div>
                <div id="commentContent">{review.body}</div>
            </div>
        </>
    )
}