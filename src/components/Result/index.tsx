import { Container } from './styles';

export interface IResult {
    result: {
        [key: string]: number;
		1: number;
		15: number;
		30: number;
		90: number;
	};
}

export default function Result({ result }: IResult) {
    
    return (
		<Container>
			<h1>Você receberá</h1>
			{Object.keys(result).map((key) => (
				<span key={key}>
					<span>{key === "1" ? "Amanhã" : key + " dias"}</span>
					<h3>R$ {result[key]}</h3>
				</span>
            ))}
            
		</Container>
	);
}