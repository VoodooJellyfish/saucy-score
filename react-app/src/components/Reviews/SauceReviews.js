import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Review from './Review';
import { thunk_getReviews } from '../../store/review';
import { thunk_getSauceReviews } from '../../store/review';
import "./Review.css"
// import EditReviewFormModal from './EditReviewModal';

export default function SauceReviews({sauce, hasReviewed, setHasReviewed}) {
    const dispatch = useDispatch()
    const reviewsSlice = useSelector(state => state.reviews)
    const reviews = Object.values(reviewsSlice)

    const sauceReviews = reviews?.filter((review) => review?.sauce_id === sauce?.id)

    useEffect(() => {

        return dispatch(thunk_getSauceReviews(sauce?.id))

    },[sauce, dispatch])

    return (
        <>
            <div className='reviews-container'>
                {sauceReviews.map(review => {
                    return(
                        <div id="review-card" key={review?.id}>
                            <Review review={review} sauce={sauce} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}/>
                        </div>
                        // <Link to={`reviews/${review?.id}`}>
                        //     <img key={review.id} src={review.image_url} alt={review.name}></img>
                        // </Link>
                    )      
                })}
            </div>
            {/* <div>
                <EditReviewFormModal/>
            </div> */}
        </>
    )
}