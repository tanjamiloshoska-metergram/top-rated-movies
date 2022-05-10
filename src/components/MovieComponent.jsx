const MovieComponent = ({ id, fullTitle, year, image, rating }) => {
  return (
    <div>
      <h1>
        Title: {fullTitle} - {year}
      </h1>
      <p>Id: {id}</p>
      <p>Rating: {rating}</p>
      <img src={image} alt={fullTitle + "poster"} />
    </div>
  );
};

export default MovieComponent;
