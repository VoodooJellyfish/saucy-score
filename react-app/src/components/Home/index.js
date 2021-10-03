import React from "react";
import Splash from "./Splash";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import "./Home.css"


function Home({ sessionUser, authenticated }) {

    // const dispatch = useDispatch()
    // let [activePosts, setActivePosts] = useState()

    // useEffect(() => {

    //     const fetchData = async () => {
    //         let dispatchPosts = await dispatch(getActivePosts())

    //         setActivePosts(dispatchPosts)
    //     }
    //     fetchData()
    // }, [dispatch])


    return (
        authenticated ?
            <>
                <div className='home-container'>
                    <h1 id="welcome-text">Welcome back, <span id="username">{sessionUser?.username}</span>.</h1>
                    {/* <div className='posts-container'>{activePosts?.posts && activePosts?.posts.map(post => {
                        if (post.comments) {
                            return (
                                <PostDetails post={post} />
                            )
                        }
                        return []
                    })}
                    </div> */}
                </div>

            </>
            :
            <Splash/>
    )
}

export default Home