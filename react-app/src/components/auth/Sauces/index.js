// import CreateSauceForm from "./SauceForm"
import CreateSauceFormModal from "./CreateSauceModal"

export default function SauceList({ sauces, user }) {
    return (
        <>
            <div className='sauces-container'>
                {sauces.map(sauce => {
                    return <img key={sauce.id} src={sauce.image_url} alt={sauce.name}></img>      
                })}
            </div>
            <div>
                <CreateSauceFormModal/>
            </div>
        </>
    )
}
