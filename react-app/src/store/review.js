const LOAD_REVIEWS= "posts/LOAD_REVIEWS"
const UPDATE_REVIEW = 'users/UPDATE_REVIEW'
const DELETE_REVIEW = 'posts/DELETE_REVIEW'
const USER_REVIEWS = 'posts/USER_REVIEWS'
const UPDATE_USER = 'post/UPDATE_USER'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

// const userSauces = (sauce) => ({
//     type: USER_SAUCES,
//     sauce
// })

// const updateUser = (sauce) => ({
//     type: UPDATE_USER,
//     sauce
// })


const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const thunk_getReviews = () => async (dispatch) => {
    const res = await fetch('/api/reviews/');
    if (res.ok) {
        const reviews= await res.json();
        dispatch((loadReviews(reviews)))
    }
};
// export const getUserSauces = (userId) => async (dispatch) => {
//     const res = await fetch(`/api/posts/user/${userId}`)

//     if(res.ok) {
//         const posts = await res.json();

//         dispatch((userPosts(posts)))
//     }
// }
export const thunk_createNewReview = (data) => async (dispatch) => {
    const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (res.ok) {

        const updatedReview = await res.json();
        await dispatch(updateReview(updatedReview))

    }
}

export const thunk_goDeleteReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(deleteReview(reviewId))
    }
}

export const thunk_editReview = (payload) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const newReview = await res.json();

    if (res.ok) {
        dispatch(updateReview(newReview));
        return
    }
    return newReview;
};

// export const getActivePosts = () => async (dispatch) => {
//     const res = await fetch('/api/posts/home');
//     if (res.ok) {
//         const posts = await res.json();
//         dispatch((loadPosts(posts)))
//         return posts
//     }
// };

const initialState = {userReviews : {}}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            return { ...state, ...action.reviews }
        }
        case DELETE_REVIEW: {
            let newState = { ...state }

            delete newState[action.reviewId]

            return { ...newState }
        }
        case UPDATE_REVIEW: {
            if (!action.review) { return { ...state } }

            return {
                ...state,
                [action.review.id]: action.review
            }
        }
        // case USER_SAUCE :{

        //     let userState = {...state}
        //     userState.userPosts = {...action.post}
        //     return {...userState}
        // }
        // case UPDATE_USER: {
        //     let userUpdateState = {...state}
        //     userUpdateState.userPosts = {...userUpdateState.userPosts, [action.post.id]: action.post}
        //     return {...userUpdateState}
        // }
        default:
            return state
    }
}

export default reviewReducer