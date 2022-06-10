// 다음 노드에게 부여할 id값 결정
const NodeIdCheck = (cyRef, setUpdateNodeId) => {
  const isDataExist = (nodeData) => {
    if (typeof nodeData === 'undefined' || nodeData === null || nodeData === '')
      return false;
    return true;
  };

  const lastNodeIndex = cyRef.current.elements('node').length - 1;
  const lastNode = cyRef.current.elements('node')[lastNodeIndex];
  if (isDataExist(lastNode)) setUpdateNodeId(Number(lastNode.data('id')) + 1);
  else setUpdateNodeId(0);
};
export default NodeIdCheck;
