
import {Image, Title, Text} from '../../Styles';

function Card({imageSrc, title, text}) {
    return(
        <>
        <Image src={imageSrc} alt="imagem do card"/>
        <Title>{title}</Title>
        <Text>{text}</Text>
        </>
    )
}

export default Card;