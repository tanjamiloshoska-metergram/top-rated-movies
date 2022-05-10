const MovieComponent = ({ id, fullTitle, year, image, rating }) => {
  return (
    <div>
      <h1>
        Title: {fullTitle} - {year}
      </h1>
      <p>Id: {id}</p>
      <p>Rating: {rating}</p>
      <img
        width="300px"
        height="300px"
        src={image}
        alt={fullTitle + "poster"}
      />
      <hr />
    </div>
  );
};

export default MovieComponent;
