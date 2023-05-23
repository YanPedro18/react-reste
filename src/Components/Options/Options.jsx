import React, { useState } from "react";
import styled from "styled-components";

const OptionsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    color: #130C25;

   

`;

const SelectButton = styled.div`
  display: flex;
  background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%);
  align-items: center;
  padding: 10px;
  width: 110px;

  cursor: pointer;
  color: #130C25;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  &::before {
    content: "";
    position: absolute;
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-image: url("./path.png"); /* Caminho relativo para a imagem */
    z-index: 999;
  }
`;

const OptionsList = styled.div`
  position: absolute;
  text-align: left;
  top: 100%;
  color: #130C25;
  width: 120px;
  border-end-start-radius: 1rem;
  border-end-end-radius: 1rem;
  background-color: #cfcfcf;
  padding: 5px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SelectedOptionText = styled.span`
  margin-left: 5px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  
  color: #130C25;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    color: #130C25;
  }
`;

const OptionImage = styled.img`

  margin-right: 10px;
`;

function Options({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <OptionsContainer>
    <SelectButton onClick={toggleOptions}>
      {selectedOption ? (
        <>
          <OptionImage src={selectedOption.image} alt="Option Image" />
          {selectedOption.text}
        </>
      ) : (
        <>
          <OptionImage src={options[0].image} alt="Option Image" />
          {options[0].text}
        </>
      )}
    </SelectButton>
    {isOpen && (
      <OptionsList isOpen={isOpen}>
        {options.slice(1).map((option) => (
          <Option
            key={option.value}
            onClick={() => handleSelectOption(option)}
          >
            <OptionImage src={option.image} alt="Option Image" />
            {option.text}
          </Option>
        ))}
      </OptionsList>
    )}
  </OptionsContainer>
  );
}

export default Options;
