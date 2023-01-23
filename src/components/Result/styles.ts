import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	padding: 40px;

	h1 {
		font-size: 18px;
		font-weight: 700;
		color: #656565;
		text-transform: uppercase;
	}

	& > span, h3 {
        font-size: 14px;
		color: #656565;
	}
`;