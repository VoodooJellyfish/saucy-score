import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
// import EditReviewFormModal from './EditReviewModal';

export default function SauceReviews({sauce}) {
    const reviewsSlice = useSelector(state => state.reviews)
    const reviews = Object.values(reviewsSlice)

    const sauceReviews = reviews?.filter((review) => review?.sauce_id === sauce?.id)

    return (
        <>
            <div className='reviews-container'>
                {sauceReviews.map(review => {
                    return(
                        <div>
                            <Review review={review} sauce={sauce}/>
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