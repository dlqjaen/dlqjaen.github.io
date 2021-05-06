---
path: '/posting/tree'
date: '2021-04-24'
title: '트리'
description: '여러 데이터가 계층 구조에서 연결을 가질때 사용하며 계층구조를 표현하거나 계층구조를 이용한 알고리즘의 효율을 높일 때 사용'
tags: ['JS', 'dataStructure']
---

# 트리 (Tree)

- 여러 데이터가 `계층 구조`에서 `연결`을 가질때 사용

## 용어

- `노드`: 트리 안의 값 하나
- `자식 노드`: 노드의 바로 한 단계 아래에 연결된 노드로 노드는 여러개의 자식노드를 가질 수 있음
- `부모 노드`: 노드의 바로 한 단계 위에 연결된 노드
- `뿌리 노드`: 트리의 최상단에 위치한 노드, 그렇기에 뿌리 노드는 부모 노드가 없음
- `잎 노드`: 자식 노드가 없는 노드
- `조상 노드`: 노드와 연결되어있는 모든 상위 노드
- `자손 노드`: 노드와 연결되어있는 모든 하위 노드
- `형제 노드`: 노드와 같은 부모 노드를 가지는 동일한 위치에 존재하는 노드

## 구현
```javascript
class Node {
  constructor(node, childNode = []) {
    this.node = node
    this.childNode = childNode
  }
}

const tree = new Node(1, [
  new Node(2),
  new Node(3, [
    new Node(4)
  ])
])

console.log(tree)
/*
   1
   /\
  2  3
      \
       4
*/
```

`Tree`는 `계층구조`를 표현하거나 계층구조를 이용한 `알고리즘의 효율`을 높일 때 사용
