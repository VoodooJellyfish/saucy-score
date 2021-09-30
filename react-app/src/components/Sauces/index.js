// import CreateSauceForm from "./SauceForm"
import CreateSauceFormModal from "./CreateSauceModal"
import { Link } from "react-router-dom"
import "./Saucelist.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function SauceList({ sauces }) {

    const sessionUser = useSelector(state => state.session?.user)
    const authenticated = sessionUser !== null

    useEffect (() => {

    }, [authenticated])

    return (
        <div className="page-container">
            {authenticated ? 
            <div id="submit-btn">
                <CreateSauceFormModal/>
            </div>
            : <></> }
            <div className='sauces-container'>
                {sauces.map(sauce => {
                    return(
                        <div key={sauce?.id} className="sauce-card">
                            <div className="image-container">
                                <Link className="img-link" to={`sauces/${sauce?.id}`}>
                                    <img className="sauce-img" src={sauce?.image_url} alt={sauce?.name}></img>
                                </Link>
                            </div>
                            <div className="words-container">
                                <Link id='name-parent' to={`sauces/${sauce?.id}`}>
                                    <p id='sauce-name'>{sauce?.name}</p>
                                </Link>
                                <div className="description-container yellow">
                                    <p id="sauce-description">{sauce?.description}</p>
                                </div>
                                <p id="username" className="yellow">Submitted By: {sauce?.username} on {sauce?.created_at}</p>
                            </div>
                        </div>
                    )      
                })}
            </div>
        </div>
    )
}
