import Form from "./components/Form";
import Results from "./components/Results";
import { MortageProvider } from "./context/MortgageContext";

function App() {
  return <div className="container">
    <div className="wrapper">
      <MortageProvider>
    <Form />
    <Results />
    </MortageProvider>
    </div>
  </div>;
}

export default App;
