---
path: '/posting/programmers-new-id'
date: '2021-04-13'
title: '프로그래머스 - 신규 아이디 추천'
description: '신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/72410)

```javascript
function solution(new_id) {
  const allow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_', '.']
  new_id = new_id.toLowerCase() // 1단계
  let filted_id = ''

  for (let id of new_id) { // 2단계
      const char = allow.find(char => id === char)
      if (char) {
          filted_id += char
      }
  }

  filted_id = filted_id.replace(/\.+/g, '.') // 3단계
  filted_id = filted_id.replace(/^\.|\.$/g, '') // 4단계
  filted_id = filted_id === '' ? 'a' : filted_id // 5단계
  filted_id = filted_id.substring(0, 15) // 6단계
  filted_id = filted_id.replace(/\.$/g, '') // 6단계
  if (filted_id.length < 3) {
      while (filted_id.length < 3) {
          filted_id = filted_id + filted_id[filted_id.length - 1]
      }
  } // 7단계

  return filted_id
}
```



### 문제풀이 생각

1. 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2. 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3. 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4. 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5. 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6. 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
   만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7. 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.



### 다른 사람의 풀이 (**Alex_choi , bbinbbin , IJMilk-WS**)

```javascript
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

```



### 알게된 점

1. replace를 연속해서 사용할 수 있었지!
2. **charAt()** 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.
3. **`repeat()`** 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.



