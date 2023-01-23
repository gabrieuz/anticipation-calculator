import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import { AppContainer } from "./styles";

function App() {
	const [newResult, setResult] = useState({
      1: 0,
      15: 0,
      30: 0,
      90: 0,
	});

	return (
		<AppContainer>
      <Form setResult={setResult} />
      <Result result={newResult} />
      
		</AppContainer>
	);
}

export default App;
