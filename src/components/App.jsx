import { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import { fetchBreeds, fetchDog } from "./api";
import DogCard from "./DogCard";
import BreedSelect from "./BreedSelect/BreedSelect";

export class App extends Component {

  state = {
    breeds: [],
    dog: null,
    error: null,
  };

  async componentDidMount() {
    try {

      const breeds = await fetchBreeds();
      this.setState({ breeds });

    } catch (error) {
      this.setState({ error: 'Oops, we couldn`t load the dogs 🙄. Try again!' });
    }
  };
  
  selectBreed = async breedId => {
    try {

      const dog = await fetchDog(breedId);
      this.setState({ dog });

    } catch (error) {

      this.setState({ error: 'Oops, we couldn`t load the dog 🙄. Try again!' });
    }
  };

  render() {
    const { breeds, dog, error } = this.state;

    return (
      <>
      <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
      {error && <div>
        <p>{error}</p>
      </div> }
      {dog && <DogCard dog={dog}/> }
        <GlobalStyle />
      </>
    );
  }
};
