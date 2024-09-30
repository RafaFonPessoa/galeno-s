import React, { useState } from 'react';
import './Searchbar.css';

interface SearchbarProps {
  medicineName: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ medicineName }) => {
  
    // Estado para armazenar o nome do medicamento digitado
  const [inputValue, setInputValue] = useState(medicineName);

  // Função para atualizar o estado com o valor do input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Função chamada ao clicar no botão de busca
  const handleSearch = () => {
    console.log('Buscando por:', inputValue);
  };

  return (
    <div id='seachbar-div'>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Digite o nome do medicamento"
      />
      <button id='search-button'type="button" onClick={handleSearch}>
        Search
        <img src={require('../../assets/magnifying-glass.png')} height='20px' />
      </button>
    </div>
  );
};

export default Searchbar;
