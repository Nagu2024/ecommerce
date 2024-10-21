import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {

    const [searchdata, setSearchdata] = useState();
    const usenavigate = useNavigate();


    const searchpoduct = () => {

        usenavigate('search?keyword=' + searchdata);
    }



    return (
        <div>
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                    onChange={(e) => setSearchdata(e.target.value)}
                    onBlur={searchpoduct}
                />
                <div className="input-group-append">
                    <button onClick={searchpoduct} id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search