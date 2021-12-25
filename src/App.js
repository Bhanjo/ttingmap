import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Home from './page/Home';
import MindMap from './page/MindMap';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mindmap' element={<MindMap />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
