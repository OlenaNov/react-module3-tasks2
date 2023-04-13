import { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import { fetchDog } from "./api";
import DogCard from "./DogCard";
import BreedSelect from "./BreedSelect";
import DogSkelet from "./DogSkelet";
import Error from "./Error";
import Layout from "./Layout";
import { ErrorMessage } from "./constans";

export class App extends Component {

  state = {
    dog: null,
    error: null,
    isLoading: false,
  };
  
  selectBreed = async breedId => {
    try {
      this.setState({ isLoading: true, });
      const dog = await fetchDog(breedId);
      this.setState({ dog });

    } catch {

      this.setState({ error: ErrorMessage.fetchDog, });
    } finally {
      this.setState({ isLoading: false, })
    }
  };

  render() {
    const { dog, error, isLoading } = this.state;

    return (
      <Layout>
      <BreedSelect onSelect={this.selectBreed} />
      {isLoading && <DogSkelet />}
      {error && <Error>{error}</Error> }
      {dog && !isLoading && <DogCard dog={dog}/> }
        <GlobalStyle />
      </Layout>
    );
  }
};
