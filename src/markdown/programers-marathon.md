---
path: '/posting/programmers-marathon'
date: '2021-03-09'
title: '프로그래머스 - 완주하지 못한 선수'
description: '마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/42576)

```javascript
function solution(participant, completion) {
    let list = [...participant]
    completion.forEach(p => {
        const index = list.indexOf(p)
        if (index !== -1) {
            list.splice(index, 1)
        }
    })
    return list[0]
}
```

### 문제풀이 생각

1. 완주 리스트에서 한 명씩 이름을 가져온다.
2. 가져온 이름으로 전체 리스트에서 같은 이름을 찾는다각
3. 이름을 찾으면 전체 리스트에서 해당 이름을 제거한다.
4. 완주 리스트를 한 번 다 돌고나서 전체 리스트에 남아있는 하나의 이름을 반환한다.

### 다른 사람의 풀이

```javascript
function solution(participant, completion) {
    participant.sort()
    completion.sort()

    return participant.find((v, i) => participant[i] !== completion[i])
}
```

### 알게된 점

- 배열을 먼저 정렬 후 찾는 것이 더 속도가 빠르다.
- 다른 사람이 만든 코드가 더 좋다.