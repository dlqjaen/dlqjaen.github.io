---
path: '/posting/programmers-dot-product'
date: '2021-05-10'
title: '프로그래머스 - 내적'
description: '길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/70128)

```javascript
function solution(a, b) {
    let result = 0
    for (let i=0, l=a.length; i<l; i++) {
        result += a[i] * b[i]
    }
    return result
}
```



### 문제풀이 생각

1. 차례대로 a와 b의 같은위치의 값을 곱하고 총량에 더한다.



### 다른 사람의 풀이 (**고우혁 , 김동욱 , YeonHui Kim , 프론엔드 , 박지윤**)

```javascript
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
```



### 알게된 점

1. reduce를 조금 더 적극적으로 사용해보자.



