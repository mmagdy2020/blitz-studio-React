import React from 'react';
import './sharedComponent.scss';

const SearchWithBtn = (props) => {
    return (
        <div className="search">
            <div className="search-item">
                <input
                    className="form-control"
                    type="text"
                    name="query"
                    value={props.query}
                    placeholder="Search User"
                    onChange={(event) => props.onSearchInputChange(event)}
                />
            </div>
            <div >
                <button className="btn btn-primary"
                    onClick={() => props.onSearchBtnClick()}
                >Search</button>
            </div>
        </div>
    )

}

export default SearchWithBtn;
