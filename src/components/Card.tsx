const Card = ({ shoe }) => {
    return (
        <>
            <div className="card shoe-card p-2" role="region" 
                aria-label={`Details about ${shoe.name}`} title={`Details about ${shoe.name}`}
            >
                <img src={shoe.image} alt="shoe-image" className="card-img-top img-fluid"/>
                {shoe.bestSeller ? <span className="tag" aria-label="Best seller" role="status">Best Seller</span> : ''}
                <div className="card-body">
                    <a className="card-title pointer text-decoration-none text-black d-block mb-0" 
                        role="link" aria-label={shoe.name} title={shoe.name} tabIndex={0}
                    >{shoe.name}</a>
                    <span className="shoe-type">{shoe.type}</span>
                    <p className="fw-bold">Rs. {shoe.price}</p>
                    <p className="fw-bold">Description</p>
                    <p className="description">{shoe.description}</p>
                    <span className="float-end" aria-label={`Rated ${shoe.rating} out of 5`}>
                        <StarRating rating={shoe.rating}/> {shoe.ratingCount + " Ratings"}
                    </span>
                </div>
            </div>
        </>
    )
}

// StarRating component to display star ratings
const StarRating = ({ rating = 0, outOf = 5 }) => {
    const fullStar = '★';
    const emptyStar = '★';
  
    return (
        <>
            <span style={{ color: '#FFD700', fontSize: '20px' }}>{fullStar.repeat(rating)}</span>
            <span style={{ color: 'grey', fontSize: '20px' }}>{emptyStar.repeat(outOf - rating)}</span>
        </>
    );
};

export default Card;
