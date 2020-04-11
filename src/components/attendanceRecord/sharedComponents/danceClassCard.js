import React from 'react';

const danceClassCard = (props) => {
    return (
        <React.Fragment>
            <div className="dance-class-info">
                <div>
                    <img src={props.imgUrl} alt="salsa dance" />
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.description.substr(0, 140)}...</p>
                </div>
            </div>

            <div className="dance-class-action">
                <button
                    className="btn btn-primary"
                    onClick={() => this.onLearnMoreBtnClick()}
                > LEARN MORE >></button>
            </div>
        </React.Fragment>
    );
}

export default danceClassCard;
