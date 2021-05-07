---
path: '/posting/programmers-number-game'
date: '2021-04-16'
title: '프로그래머스 - 숫자 게임'
description: 'A 팀원들이 부여받은 수가 출전 순서대로 나열되어있는 배열 A와 i번째 원소가 B팀의 i번 팀원이 부여받은 수를 의미하는 배열 B가 주어질 때, B 팀원들이 얻을 수 있는 최대 승점을 return 하도록 solution 함수를 완성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/12987)

```javascript
function solution(A, B) {
  let sortA = A.sort((a, b) => a - b)
  let sortB = B.sort((a, b) => a - b)
  let index = 0

  console.log(sortA, sortB)
  for(let i=0, l=B.length; i<l; i++) {
      if (sortA[index] < sortB[i]) { index += 1 }
  }
  return index
}
```



### 문제풀이 생각

1. 주어진 A, B팀을 정렬을 한다.
2. A와 B각 비교해서 A보다 큰 수가 나오면 index를 하나 늘린다.
3. index를 반환한다.



### 다른 사람의 풀이 (Seulki Lee)

```javascript
function solution(A,B){
    var point = 0;
    A = A.sort(function(a,b){return a-b});
    B = B.sort(function(a,b){return a-b});
var temp=0;
    for(var i=0; i<A.length; i++){
        for(var j=temp;j<B.length;j++){
           // console.log("a-"+i+"/b"+j);
        if(A[i]<B[j]){
            point++;
                //B.splice(j,1);
            temp=j+1;
                break;
            }

    }

    }

    return point;
}
```



### 알게된 점

1. 생각보다 내가 짠 코드가 간단한거였구나!
2. 문제에서 예시로 보여준 해결말고도 다른 방법으로 해도 되는구나!



