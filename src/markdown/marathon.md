---
path: '/posting/marathon'
date: '2021-03-09'
title: 'Programers - Algorithm marathon'
description: ''
tags: ['Algorithm']
---

링크: https://programmers.co.kr/learn/courses/30/lessons/42576

### 프로그래머스 > 코딩테스트 연습 > 해시 > 완주하지 못한 선수

1. 완주 리스트에서 한 명씩 이름을 가져온다.
2. 가져온 이름으로 전체 리스트에서 같은 이름을 찾는다.
3. 이름을 찾으면 전체 리스트에서 해당 이름을 제거한다.
4. 완주 리스트를 한 번 다 돌고나서 전체 리스트에 남아있는 하나의 이름을 반환한다.

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

다른 사람의 풀이

```javascript
function solution(participant, completion) {
    participant.sort()
    completion.sort()

    return participant.find((v, i) => participant[i] !== completion[i])
}
```

느낀 점

- 배열을 먼저 정렬 후 찾는 것이 더 속도가 빠르다.
- 다른 사람이 만든 코드가 더 좋다.