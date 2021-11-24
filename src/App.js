import { Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import MindMap from './page/MindMap';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mindmap' element={<MindMap />} />
    </Routes>
  );
};

export default App;
