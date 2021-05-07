---
path: '/posting/programmers-function-implementation'
date: '2021-04-08'
title: '프로그래머스 - 기능개발'
description: '먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/42586)

```javascript
function solution(progresses, speeds) {
    let deployDay = 0
    let result = []

    for (let i = 0, l = progresses.length; i < l; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i])
        if (day > deployDay) {
            result.push(1)
            deployDay = day
        } else {
            result[result.length - 1] += 1
        }
    }

    return result
}
```



### 문제풀이 생각

1. 소수점 올림처리((100-진행도) / 하루당 진행률)를 해서 각 작업의 작업완료 날짜를 구한다.
2. 저장되어있는 배포날보다 현재 작업완료 날이 더 크다면 결과 배열에 카운트1짜리 값을 추가한다.
3. 저장되어있는 배포날보다 현재 작업완료 날이 더 작다면 결과 배열 마지막 값에 1을 추가한다.
4. 결과값을 반환한다.



### 다른 사람의 풀이 (**iRequestUResponse , milliwonaire , 박하영**)

```javascript
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
```



### 알게된 점

1.