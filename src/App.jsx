import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card/Card.jsx";

import {
  Container,
  Section,
  Section_flex
} from "./Styles.js";
import Options from "./Components/Options/Options.jsx";



function App() {
  const [response, setResponse] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // Estado para armazenar a opção selecionada

  useEffect(() => {
    try {
      axios.get('http://localhost:3000/posts')
      .then(function (resp) {
        setResponse(resp.data);
        console.log('TESTE', response);
        
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
    } catch (error) {
      console.log(error);
    }
  },[])

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // Lógica adicional para lidar com a opção selecionada
  };

  return (
    <Container>
   <Options
  options={[
    { image: '../public/lang/brazil.png', text: 'PT', value: 'option1' },
    { image: '../public/lang/usa.png', text: 'EN', value: 'option2' },
    { image: '../public/lang/spain.png', text: 'ES', value: 'option3' }
  ]}
  onSelect={handleSelectOption}
/>
      <Section>
        {response.map((card) => {
          return ( 
           <Section_flex key={card.id}>
           <Card
                                      //card por props
             imageSrc={card.image}
             title={card.title}
             text={card.content}
           />
         </Section_flex>
         )
      })}
       

      </Section>
    </Container>
  );
}

export default App;