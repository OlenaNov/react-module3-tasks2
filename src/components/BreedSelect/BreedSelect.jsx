import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from "../api";
import Error from 'components/Error/Error.styled';
import { ErrorMessage } from 'components/constans';

class BreedSelect extends Component {
  state= {
    breeds: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, });
      const breeds = await fetchBreeds();
      this.setState({ breeds });

    } catch {
      this.setState({ error: ErrorMessage.fetchBreeds, });
    } finally {
      this.setState({ isLoading: false, })
    }
  };

  buildOptions = () => {
    const { breeds } = this.state;
    return breeds.map(breed => ({
      value: breed.id,
      label: breed.name
    }))
  };

  render() {
    const { error, isLoading } = this.state;
    const { onSelect } = this.props;

    const options = this.buildOptions();

    return (
    <>
    <Select 
      options={options} 
      isLoading={isLoading}
      onChange={option => onSelect(option.value)} 
    />
    {error && <Error>{error}</Error>}
    </>
    );
  };
};

export default BreedSelect;