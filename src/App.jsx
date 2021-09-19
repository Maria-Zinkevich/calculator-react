import { Calculator } from "./Components/Calculator/Calculator";
import { Provide, ResultProvide } from "./Contex";

export const App = () => (
  <Provide>
    <ResultProvide>
      <Calculator />
    </ResultProvide>
  </Provide>
);
