import { atom } from 'recoil';

// 노드의 추가, 삭제, 수정시 참조되는 상태
export const nodeInputState = atom({
  key: 'nodeInputState',
  default: '',
});

// 간선 추가, 삭제시 타겟이 되는 노드의 상태
export const targetNodeInputState = atom({
  key: 'targetNodeInputState',
  default: '',
});

// 노드 모드인지 판단
export const isModeNode = atom({
  key: 'isModeNode',
  default: true,
});

export const currentNodeId = atom({
  key: 'currentNodeId',
  default: 5,
});
