import React, {useState} from 'react';
// import Child from './Child';
import {ChildFC} from './Child';

function App() {
  const [name, setName] = useState(0);
  const onClick = () => setName(Math.random());

  return (
    <div className="App">
      <ChildFC name={name} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default App;
