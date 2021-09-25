const LOAD_SAUCES= "posts/LOAD_SAUCES"
const UPDATE_SAUCE = 'users/UPDATE_SAUCE'
const DELETE_SAUCE = 'posts/DELETE_SAUCE'
const USER_SAUCES = 'posts/USER_SAUCES'
const UPDATE_USER = 'post/UPDATE_USER'

const loadSauces = (sauces) => ({
    type: LOAD_SAUCES,
    sauces
});

// const userSauces = (sauce) => ({
//     type: USER_SAUCES,
//     sauce
// })

// const updateUser = (sauce) => ({
//     type: UPDATE_USER,
//     sauce
// })


const updateSauce= (sauce) => ({
    type: UPDATE_SAUCE,
    sauce
})

const deleteSauce = (sauceId) => ({
    type: DELETE_SAUCE,
    sauceId
})

export const thunk_getSauces = () => async (dispatch) => {
    const res = await fetch('/api/sauces/');
    if (res.ok) {
        const sauces = await res.json();
        dispatch((loadSauces(sauces)))
    }
};

export const thunk_getSauce = (sauce) => async (dispatch) => {
    const res = await fetch(`/api/sauces/${sauce.id}`);
    if (res.ok) {
        const sauce = await res.json();
        dispatch((loadSauces(sauce)))
    }
};
// export const getUserSauces = (userId) => async (dispatch) => {
//     const res = await fetch(`/api/posts/user/${userId}`)

//     if(res.ok) {
//         const posts = await res.json();

//         dispatch((userPosts(posts)))
//     }
// }
export const thunk_createNewSauce = (data) => async (dispatch) => {
    const res = await fetch('/api/sauces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (res.ok) {

        const updatedSauce = await res.json();
        await dispatch(updateSauce(updatedSauce))

        // dispatch(updateUser(updatedSauce))
    }
}

export const thunk_goDeleteSauce = (sauceId) => async (dispatch) => {
    const res = await fetch(`/api/sauces/${sauceId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(deleteSauce(sauceId))
    }
}

export const thunk_editSauce = (payload) => async (dispatch) => {
    const res = await fetch(`/api/sauces/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const newSauce = await res.json();

    if (res.ok) {
        dispatch(updateSauce(newSauce));
        return
    }
    return newSauce;
};

// export const getActivePosts = () => async (dispatch) => {
//     const res = await fetch('/api/posts/home');
//     if (res.ok) {
//         const posts = await res.json();
//         dispatch((loadPosts(posts)))
//         return posts
//     }
// };

const initialState = {}

const sauceReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SAUCES: {
            return { ...state, ...action.sauces }
        }
        case DELETE_SAUCE: {
            let newState = { ...state }

            delete newState[action.sauceId]

            return { ...newState }
        }
        case UPDATE_SAUCE: {
            if (!action.sauce) { return { ...state } }

            return {
                ...state,
                [action.sauce.id]: action.sauce
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

export default sauceReducer
