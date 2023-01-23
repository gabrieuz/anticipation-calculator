import { Container } from './styles';

export interface IResult {
	result: {
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
            <span>Amanhã: <h3>R$ {result[1]}</h3></span>
            <span>Em 15 dias: <h3>R$ {result[15]}</h3></span>
            <span>Em 30 dias: <h3>R$ {result[30]}</h3></span>
            <span>Em 90 dias: <h3>R$ {result[90]}</h3></span>

        </Container>
    );
}