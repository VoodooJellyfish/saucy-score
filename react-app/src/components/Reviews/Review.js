import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditReviewFormModal from './EditReviewModal';
import { DeleteReviewButton } from './DeleteReview';
import { thunk_getReview } from '../../store/review';

export default function Review({sauce, review}) {
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
                <div id="picNamePost">
                    <Link to={`/users/${review?.user_id}`}><button id="usernamePrev">{review?.user_id}</button></Link>
                    <span id="datePrev">{review?.updated_at}</span>
                <div>
                    <EditReviewFormModal review={review} sauce={sauce} ownsReview={ownsReview}/>
                    <DeleteReviewButton review={review} ownsReview={ownsReview}/>
                </div>
                </div>
                <span id="commentContent">{review.body}</span>
            </div>
        </>
    )
}