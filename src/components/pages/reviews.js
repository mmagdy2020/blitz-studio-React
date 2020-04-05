import React from 'react';
import reviewData from './reviews.data'
export default class Reviews extends React.Component {
  render() {
    return (
      <div id="reviews" className="container">
        {/* featured reviews */}
        <div className="row">
          <div className="col-lg-12">
            {reviewData.featured.map((review, index) => {
              let result;
              result = (
                <div key={index} className="card mb-3">
                  <div className="card-body">
                    <p className="card-text">{review.body} </p>
                    <p className="card-text">
                      <span className="text-secondary">{review.author} </span>
                      <small className="card-text">{review.date}</small>
                    </p>
                  </div>
                </div>);
              return result;
            })}
          </div>
          {/* not-featured reviews */}
          <div className="col-lg-12 card-columns">
            {reviewData.notFeatured.map((review, index) => {
              let result;
              result = (
                <div key={index} className="card mb-3">
                  <div className="card-body">
                    <p className="card-text">{review.body} </p>
                    <p className="card-text">
                      <span className="text-secondary">{review.author} </span>
                      <small className="card-text">{review.date}</small>
                    </p>
                  </div>
                </div>);
              return result;
            })}
          </div>
        </div>
      </div>
    )
  }
}
