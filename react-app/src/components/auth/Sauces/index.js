import CreateSauceForm from "./SauceForm"

export default function SauceList({ sauces }) {
    return (
        <>
            <div className='sauces-container'>
                {sauces.map(sauce => {
                    return <img key={sauce.id} src={sauce.image_url} alt={sauce.name}></img>      
                })}
            </div>
            <div>
                <CreateSauceForm/>
            </div>
        </>
    )
}
