import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditReviewFormModal from './EditReviewModal';
import { DeleteReviewButton } from './DeleteReview';

export default function Review({sauce, review}) {

    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const ownsReview = (review) => {
        if (review?.user_id === userId) {
            return true
        }
    }

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