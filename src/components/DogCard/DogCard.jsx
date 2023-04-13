
const DogCard = ({ dog: { url } }) => {
    return (
        <div>
        <img src={url} alt="dog" width="480" />
        <div>
          {/* <h2>Name: {dog.breeds[0].name}</h2>
          <p>Temperament: {dog.breeds[0].temperament}</p>
          <p>Bred for: {dog.breeds[0].bred_for}</p> */}
        </div>
      </div>
    )
};

export default DogCard;