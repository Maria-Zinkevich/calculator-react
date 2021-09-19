import { Calculator } from "./Components/Calculator/Calculator";
import { Provide, ResultProvide } from "./Context";

export const App = () => (
  <Provide>
    <ResultProvide>
      <Calculator />
    </ResultProvide>
  </Provide>
);
