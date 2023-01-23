import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	border-right: 1px solid #cdcdcd;
	padding: 40px;

	h1 {
		font-size: 24px;
		font-weight: 700;
		color: #656565;
	}
`;

export const FormStyle = styled.form`
	display: flex;
	flex-direction: column;

	input {
		background: #ffffff;
		border: 1px solid #dde6e9;
		border-radius: 4px;
		height: 40px;
		padding: 0 10px;

		&:focus {
			border: 1px solid #00a8ff;
			outline: none;
		}

		&::placeholder {
			color: #bebebe;
		}
	}

	label {
		font-size: 14px;
		margin: 10px 0;
		color: #656565;
	}

	& > span {
		font-size: 12px;
		color: #9f9f9f;
	}

	.error-message {
		color: #ff5555;
	}

	& > button {
		background: #00a8ff;
		border: 1px solid #00a8ff;
		border-radius: 4px;
		color: #ffffff;
		font-weight: 700;
		margin: 20px 0;
		outline: none;
	}

	& > button:hover {
		background: #0088cc;
		cursor: pointer;
	}
`;