---
path: '/posting/programmers-sum'
date: '2021-04-01'
title: '프로그래머스 - 두 개 뽑아서 더하기'
description: '정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript)

```javascript
function solution(numbers) {
    let sumList = []
    numbers.forEach((item, index) => {
        numbers.slice(index+1).forEach(item2 => sumList.push(item + item2))
    })

    return [...new Set(sumList)].sort((a,b) => a - b)
}
```

### 알게된 점

- `array.slice` 는 얕은 복사를 한다.
- 처음에 sorting을 하더라도 같은 수가 있다면 결과는 sorting이 되지 않은 상태의 array가 만들어질 수 있다.
-  `new Set()`을 이용하여 array의 중복제거가 가능하다.

