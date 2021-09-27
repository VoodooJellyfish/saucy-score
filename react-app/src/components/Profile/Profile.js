import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { thunk_getUserReviews } from "../../store/review"
import { thunk_getUserSauces } from "../../store/sauce"

export default function UserProfile ({sauces, reviews}) {
    const sessionUser = useSelector(state => state.session?.user)
    const userId = sessionUser?.id

    const dispatch = useDispatch()

    const userReviews = reviews?.filter( review => review?.user_id === userId)
    const userSauces = sauces?.filter( sauce => sauce?.user_id === userId)

    console.log( "USERINFO", userReviews, userSauces)

    useEffect(() => {
        dispatch(thunk_getUserSauces(userId))
        dispatch(thunk_getUserReviews(userId))

    },[userId, dispatch])


    return (
        <div>
            <div className="user-sauces">
                {userSauces.map((sauce) => {
                    return(
                        <div key={sauce?.id} className="sauce-card">
                            <div className="image-container">
                                <Link className="img-link" to={`/sauces/${sauce?.id}`}>
                                    <img className="sauce-img" src={sauce?.image_url} alt={sauce?.name}></img>
                                </Link>
                            </div>
                            <div className="words-container">
                                <Link id='name-parent' to={`/sauces/${sauce?.id}`}>
                                    <p id='sauce-name'>{sauce?.name}</p>
                                </Link>
                                {/* <div className="description-container">
                                    <p id="sauce-description">{sauce?.description}</p>
                                </div>
                                <p id="username">Submitted By: {sauce?.username} on {sauce?.created_at}</p> */}
                            </div>
                        </div>
                    )})}
            </div>
            <div classname="user-reviews">
                {userReviews.map((review) => {
                    return (
                        <div> 
                            {review?.sauce_name}

                        </div>

                    
                )})}
            </div>
        </div>
    )


}