import CytoscapeComponent from 'react-cytoscapejs';

import Cytoscape from '../components/Cytoscape';
import Navigation from '../components/Navigation';

const MindMap = () => {
  return (
    <>
      <Navigation />
      <h1>자유롭게 생각을 표현하세요!</h1>
      <Cytoscape />
    </>
  );
};

export default MindMap;
