import React from 'react';
import StyledGlobal from '../../styles/StyledGlobal';
import { Provider } from '../../store';
import Layout from '../Layout';

const App = (): JSX.Element => (
  <>
    <StyledGlobal />

    <Provider>
      <Layout />
    </Provider>
  </>
);

export default App;
