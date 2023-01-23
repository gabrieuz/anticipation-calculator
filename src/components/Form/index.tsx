import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Container, FormContainer, FormStyle } from "./styles";

export interface IFormInput {
	amount: number;
	installments: number;
	mdr: number;
}

export default function Form({ setResult }: any) {

	const schema = yup.object({
		amount: yup.number().required("O valor é obrigatório.").typeError("Valor inválido.").min(1000, "Valor mínimo de R$ 1000,00."),
		installments: yup
			.number()
			.required("O número de parcelas é obrigatório.")
			.typeError("Número de parcelas inválido.").min(1, "O número mínimo de parcelas é 1.").max(12, "O número máximo de parcelas é 12."),
		mdr: yup.number().required("O MDR é obrigatório.").typeError("MDR inválido.").max(100, "O MDR máximo é 100."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormInput) => {
		api.post("/", data).then((response) => {
			console.log(response.data);
			setResult(response.data);
		});
	};

	return (
			<FormContainer>
				<h1>Simule sua Antecipação</h1>
				<FormStyle onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="amount">Informe o valor da sua renda*</label>
					<input {...register("amount")} id="amount" />
					{errors.amount && <span className="error-message">{errors.amount.message}</span>}

					<label htmlFor="installments">Em quantas parcelas*</label>
					<input {...register("installments")} id="installments" />
					{errors.installments && <span className="error-message">{errors.installments.message}</span>}
					<span>Máximo de 12 parcelas</span>

					<label htmlFor="mdr">Informe o percentual de MDR*</label>
					<input {...register("mdr")} id="mdr" />
					{errors.mdr && <span className="error-message">{errors.mdr.message}</span>}

					<button type="submit">Calcular</button>
				</FormStyle>
			</FormContainer>
	);
}
