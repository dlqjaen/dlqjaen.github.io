---
path: '/posting/sorting-algorithm'
date: '2020-11-15'
title: '정렬 알고리즘(선택)'
description: ''
tags: ['Algorithm']
---

## 정렬 알고리즘

### 선택 정렬

1. 주어진 리스트에서 최소값을 찾는다.
2. 찾은 최소값을 리스트의 맨 앞 값과 교환한다.
3. 맨 앞 값을 제외한 나머지 값에서 다시 최소값을 찾는다.
4. 다시 찾은 최소값을 리스트의 두 번째값과 교환한다.
5. 1~4의 과정을 리스트의 마지막 값까지 반복한다.

```typescript
selectSorting(arr: number[] = []) {
  let temp: number[] = [...arr]

  for (let i=0, l=arr.length; i<l; i++) {
    let minIndex = i
    for (let j=i+1; j<l; j++) {
      if (temp[minIndex] < temp[j]) { minIndex = j }
      if (j === l-1) { temp[i] = arr[] }
    }
  }
}
```



- Worst Case: O(n^2) 정렬이 하나도 되어있지 않은 경우
- Best Case: O(n^2) 모두 정렬되어 있는 경우

#### 장점

- 이해하기 쉽다
- 구현하기 쉽다
- 메모리 절약(in place 알고리즘)

#### 단점

- 최선의 경우에서도 최악의 경우와 같은 시간이 걸리므로 속도가 느리다

### 삽입 정렬

### 버블 정렬

### 합병 정렬

### 퀵 정렬