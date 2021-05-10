---
path: '/posting/programmers-poketmon'
date: '2021-05-10'
title: '프로그래머스 - 포켓몬'
description: '가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/1845)

```javascript
function solution(nums) {
    let kinds = []
    nums.forEach(v => {
        if (!kinds.some(f => f === v)) {
            kinds.push(v)
        }
    })
    
    return nums.length/2 > kinds.length ? kinds.length : nums.length/2
}
```



### 문제풀이 생각

1. 주어진 리스트를 차례대로 돈다.
2. 해당 값이 따로 준비해둔 리스트에 존재하지 않다면 준비해둔 리스트에 추가한다.
3. 주어진 리스트의 길이의 절반이 따로 준비한 리스트의 길이보다 크다면 따로 준비한 리스트의 길이를 반환하고 아닐경우 주어진 리스트의 길이의 절반을 반환한다.



### 다른 사람의 풀이 (윤지홍)

```javascript
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
```



### 알게된 점

1. Set은 고유한 값만 가져야해서 중복된 값을 제외한 객체를 만든다.



