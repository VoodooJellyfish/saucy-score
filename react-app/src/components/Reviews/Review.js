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

    const ownsReview = (review) => {
        if (review?.user_id === userId) {
            return true
        }
    }
    useEffect(() => {
        dispatch(thunk_getReview(review?.id));
    }, [review, dispatch]);

    return (
        <>
            <div key={review?.id} className="reviewContainer">
                <div id="picNamePost">
                    <Link to={`/users/${review?.user_id}`}><button id="usernamePrev">{review?.user_id}</button></Link>
                    <span id="datePrev">{review?.updated_at}</span>
                {user && ownsReview(review) &&
                <div>
                    <EditReviewFormModal review={review} sauce={sauce} />
                    <DeleteReviewButton review={review}/>
                </div>
                }
                </div>
                <span id="commentContent">{review.body}</span>
            </div>
        </>
    )
}