// import CreateSauceForm from "./SauceForm"
import CreateSauceFormModal from "./CreateSauceModal"
import { Link } from "react-router-dom"

export default function SauceList({ sauces, user }) {
    return (
        <>
            <div className='sauces-container'>
                {sauces.map(sauce => {
                    return(
                        <Link to={`sauces/${sauce?.id}`}>
                            <img key={sauce.id} src={sauce.image_url} alt={sauce.name}></img>
                        </Link>
                    )      
                })}
            </div>
            <div>
                <CreateSauceFormModal/>
            </div>
        </>
    )
}
