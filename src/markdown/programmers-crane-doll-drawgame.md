---
path: '/posting/programmers-crane-doll-drawgame'
date: '2021-04-03'
title: '프로그래머스 - 크레인 인형뽑기 게임'
description: '게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.'
tags: ['JS', 'Algorithm']


---

[링크](https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript)

```javascript
function solution(board, moves) {
    let count = 0
    let basket = []
    
    moves.forEach(move => {
        board.find(row => {
            if (row[move - 1] > 0) {
                basket.push(row[move - 1])
                row[move - 1] = 0
                return true
            } else {
                return false
            }
        })
        if ((basket.length > 1) && (basket[basket.length - 1] === basket[basket.length - 2 ])) {
            basket = basket.slice(0, -2)
            count += 2
        }  
    })
    
    return count
}
```

### 문제풀이 생각

       1. moves에서 우선 차례대로 값을 확인한다.
       2. board에서 한 줄씩 돌며 moves의 값에 해당하는 인덱스에서 우선 찾아지는 값을 바구니에 넣는다.
       3. 바구니의 마지막 2개의 값이 같다면 바구니의 마지막 2개의 값을 제거한 후 카운트를 두 개 늘린다.
          (+ 바구니의 개수가 1개보다 많고 ...)
       4. 1~4의 작업을 반복한다.
       5. 카운트를 반환한다.

### 알게된 점

- 히든 케이스 1,2번이 실패해서 이유를 알아보다 바구니의 갯수가 2개가 아닐 경우에도 카운트를 실행하는 경우가 발생할 수 있다는 것을 알았다. (moves가 인형이 없는 부분을 선택했을 경우) 예상하지 못한 변수에 대해서 어떻게 대비할 수 있을까?

- `slice`로 반환되는 `array` 를 재할당 하지 않고 splice 를 이용해 뒤쪽에서 2개를 제거하는 로직이었을 때는 미세한 차이이지만 속도가 좀 더 느려졌다.
  `Slice`

  ![slice-speed](/Users/ibeomdu/dlqjaen.github.io/src/images/markdown/programmers-crane-doll-drawgame/slice-speed.png)

  `Splice`
  ![splice-speed](/Users/ibeomdu/dlqjaen.github.io/src/images/markdown/programmers-crane-doll-drawgame/splice-speed.png)



