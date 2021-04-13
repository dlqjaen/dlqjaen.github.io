---
path: '/posting/programmers-124'
date: '2021-04-05'
title: '프로그래머스 - 124 나라의 숫자'
description: '자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.'
tags: ['JS', 'Algorithm']


---

> 자연수?

`양의 정수`의 총칭. 곧 1부터 시작하여 하나씩 더하여 얻는 수.

`사물의 대소` 정도를 나타내는 목적에 사용되는 경우는 `기수`,

`순서`를 나타내는 목적에 사용된 경우는 `서수`

```javascript
function solution(n) {
    let result = ''
    function divide(m) {
        const number = m/3
        const share = Math.floor(number)
        const remainder = m%3
        
        
        if (remainder === 0)  {
            if (number > 1) {
                divide(share - 1)
            }
            result += '4'
        } else {
            if (number > 1) {
                divide(share)   
            }
            result += remainder === 3 ? '4' : String(remainder)
        }
    }
    divide(n)
    return result
}
```

### 문제풀이 생각

       1. 주어진 수를 3진법으로 만들어서 구하자!
       2. 10진수를 3진수로 만드는 방법은 주어진 수를 3으로 나누어 나머지를 저장한다.
       3. 나온 몫을 다시 3으로 나눈다.
       4. 2~3의 방법을 반복하여 더 이상 나누어진 수가 1보다 크지 않을경우 반복을 중단한다.
       5. 2~3의 반복으로 가장 마지막에 계산된 나머지부터 문자열로 저장한다.
       6. 이 때, 3은 4로 치환한다.
       7. 만약 2번을 진행했을 때 나머지가 없다면 '4'를 저장하고 몫에서 1을 뺀 값으로 2~3을 반복한다.



### 다른 사람의 풀이 (- , - , -)

```javascript
function change124(n) {
  var answer = "";
    var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while(n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}
```



### 알게된 점

1. while 반복문을 이용하면 재귀구현이 된다.
2. 나머지를 index로 이용하면 3진수(0, 1, 2)형태로 이용할 수 있다.