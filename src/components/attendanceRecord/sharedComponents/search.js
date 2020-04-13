import React from 'react';
import './sharedComponent.scss';

const SearchWithBtn = (props) => {
    return (
        <div className="search">
            <div className="search-item">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search User" />
            </div>
            <div >
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    )

}

export default SearchWithBtn;
