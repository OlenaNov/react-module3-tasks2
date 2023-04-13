import Select from 'react-select';

const BreedSelect = ({ breeds, onSelect }) => {
    const options = breeds.map(breed => ({
        value: breed.id,
        label: breed.name
      }));

      return <Select options={options} onChange={option => onSelect(option.value)} />
};

export default BreedSelect;