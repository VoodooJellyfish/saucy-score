import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { thunk_getUserReviews } from "../../store/review"
// import { thunk_getUserSauces } from "../../store/sauce"
import EditSauceFormModal from "../Sauces/EditSauceModal"
import { DeleteSauceButton } from "../Sauces/DeleteSauceButton"
import CreateSauceFormModal from "../Sauces/CreateSauceModal"
import { useState } from "react"
import "../Sauces/Saucelist.css"

export default function UserProfile () {
    const sessionUser = useSelector(state => state.session?.user)
    const userId = sessionUser?.id

    const sauceSlice = useSelector(state => state.sauces)
    const reviewsSlice = useSelector(state => state.reviews)

    const sauces = Object.values(sauceSlice)
    const reviews = Object.values(reviewsSlice)

    // const dispatch = useDispatch()

    const userReviews = reviews?.filter( review => review?.user_id === userId)
    const userSauces = sauces?.filter( sauce => sauce?.user_id === userId)

    console.log( "USERINFO", userReviews, userSauces)

    const [update, setUpdate] = useState(false)

    useEffect(() => {
    },[update])

    let isSauceOwner = true


    return (
        <div>
            {/* <div className="header2">
                Welcome back, <span id="intro-name">{sessionUser?.username}</span>
            </div> */}
            <div id='parent'>
                <div className="header">
                    Submitted Sauces
                    {/* <div id="profile-create"><CreateSauceFormModal/></div> */}
                </div>
                <div className='header'>
                    Reviewed Sauces 
                </div>
            </div>
            <div className='user-page-container'>
                {/* <h2>Your Sauces</h2> */}
            {userSauces.length > 0 ?
                <div className="user-container">
                    {/* <h2>Your Sauces</h2> */}
                    {userSauces?.map((sauce) => {
                        return(
                            <div key={sauce?.id} className="user-card">
                                <div className='btn-container'>
                                    <EditSauceFormModal sauce={sauce} isSauceOwner={isSauceOwner}/>
                                    <DeleteSauceButton sauce={sauce} isSauceOwner={isSauceOwner} update={update} setUpdate={setUpdate}/>
                                </div>
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
                
            :   <div id="non-parent">
                    <div className=" non-header"> 
                        You dont have any sauces yet! Submit one to get Started
                    </div>
                    <div id='submit-sauce-user'><CreateSauceFormModal/> </div>
                </div>
            }
            {userReviews.length > 0 ?
                <div className="user-review-container">
                    {userReviews?.map((review) => {
                        return (
                            <div key={review?.id} className="user-review-card">
                                {/* <div className='btn-container'>
                                    <EditSauceFormModal sauce={sauce} isSauceOwner={isSauceOwner}/>
                                    <DeleteSauceButton sauce={sauce}/>
                                </div> */}
                                <div key={review?.id} id='review-container' className="image-container">
                                    <Link className="img-link" to={`/sauces/${review?.sauce_id}`}>
                                        <img className="sauce-img" src={review?.sauce_image} alt={review?.sauce_name}></img>
                                    </Link>
                                </div>
                                <div className="words-container">
                                    <Link id='name-parent' to={`/sauces/${review?.sauce_id}`}>
                                        <p id='sauce-name'>{review?.sauce_name}</p>
                                    </Link>
                                </div>
                            </div>

                        
                    )})}
                </div> 
                : 
                <div id='non-parent'>
                    <div className='non-header'> You have not made any reviews yet. Click <Link id='redirect-link' to='/sauces'>here</Link> to go to sauces page. </div>
                </div>
            }
        </div>
    </div> 
    )


}