---
path: '/posting/programmers-base-station-installation'
date: '2021-04-16'
title: '프로그래머스 - 기지국 설치'
description: '아파트의 개수 N, 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열 stations, 전파의 도달 거리 W가 매개변수로 주어질 때, 모든 아파트에 전파를 전달하기 위해 증설해야 할 기지국 개수의 최솟값을 리턴하는 solution 함수를 완성해주세요'
tags: ['JS', 'Algorithm']


---

```javascript
function solution(n, stations, w) {
    let section = 1
    let count = 0
    const range = (w*2)+1
    
    for (let i=0, l=stations.length; i<l; i++) {
        let min = stations[i]-w
        let max = stations[i]+w
        
        if (section < min) {
            count += Math.ceil((min-section)/range)        
        }
        if ((n-max > 0) && (i === l-1)) {
            count += Math.ceil((n-max)/range)
        }
        section = max + 1
    }
    return count
}
```



### 문제풀이 생각

1. 기존 설치된 기지국을 기준으로 전파범위를 계산한다.
2. 첫 번째 아파트를 시작으로 기지국 전파가 닿는지 확인한다.
3. 닿지 않는다면 닿지 않는 아파트 갯수에서 전파번위를 나누고 소수점 올림 처리를 한 후 카운트를 저장한다.
4. 아파트 계산 기준을 현재 설치된 기지국을 최대전파 거리 +1롤 재설정한다.
5. 2~4를 반복한다.
6. 마지막 기지국일 경우 남아있는 아파트를 확인하여 전파범위가 닿는지 확인한다.
7. 닿지 않는다면 닿지 않는 아파트 갯수에서 전파범위를 나누고 소수점 올림 처리를 한 후 카운트를 저장한다.
8. 카운트를 반환한다.



### 다른 사람의 풀이 (**- , 탈퇴한 사용자**)

```javascript
function solution(n, stations, w) {
    var answer = 0;
    var startIndex = 0;
    for(var i = 0 ; i<stations.length ; i++){
        var toReachIndex = stations[i] - w - 1;
        answer += Math.ceil((toReachIndex - startIndex) / ((2 * w) + 1));
        startIndex = stations[i] + w;
    }
    answer += Math.ceil((n - startIndex) / ((2 * w) + 1));  
    return answer;
}
```



### 알게된 점

1. 마지막에 무조건 처리되는 로직은 루프 바깥에서 실행하면 되는구나!



