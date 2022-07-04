import React from 'react';
import CounterWithReducer from './CounterWithReducer'

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
