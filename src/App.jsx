import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
