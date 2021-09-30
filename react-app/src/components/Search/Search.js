import "./Search.css"
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import * as JsSearch from 'js-search';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {

    const history = useHistory()
    const sauceSlice = useSelector(state => state.sauces)
    const sauces = Object.values(sauceSlice)

    const { searchbar } = window.location;
    const query = new URLSearchParams(searchbar).get('s');

    const search = new JsSearch.Search('id');
    search.addIndex('name')
    search.addDocuments(sauces)

    const [searchQuery, setSearchQuery] = useState(query || '');
    const [errors, setErrors] = useState([]);

    const filteredSauces = search.search(searchQuery)

    console.log( "FFFF", sauces, filteredSauces)
    console.log("Return", search.search("t"))

    const errorValidation = () => {
        let errors = []
        if (filteredSauces.length === 0) {
            console.log("INERRORHANDLER")
            errors.push('No sauce with that name')
        }
        return errors
    }

    const handleSubmit = e => {
        e.preventDefault()
        let validationErrors = errorValidation()
        if (validationErrors.length > 0) {
            return setErrors(validationErrors)
        }
        reset()
        return history.push(`/sauces/${filteredSauces[0]?.id}`)  
    };

    const reset = () => {
        setErrors([])
        setSearchQuery("")

    }
    

    return (
        <div>
            <div className="wrapper">
                <div className='search-icon'><FontAwesomeIcon icon={['fas','search']} /></div>
                <form action="/" method="get" onSubmit={handleSubmit}>
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Sauces</span>
                    </label>
                    <input className="search"
                        type="text"
                        id="header-search"
                        placeholder="Search Sauces"
                        name="s"
                        value={searchQuery}
                        onInput={e => setSearchQuery(e.target.value)} 
                    />
                    {/* <button type="submit">Search</button> */}
                </form>
                <div className='search-icon'><FontAwesomeIcon icon={['fas','times-circle']}/></div>
            </div>
        {searchQuery !== '' ? 
            <div className='results-container'>
                {filteredSauces.map((sauce) => (
                    <div className='search-link' key={sauce?.id}>
                        <Link to={`/sauces/${sauce?.id}`}>{sauce?.name}</Link>
                    </div>
                ))}
            </div>
        : <> </>}
        <div>
                {errors.map((error, ind) => (
                <div className='errors' key={ind}>{error}</div>
                ))}
            </div>
        </div>
    )
    
}

export default Search;