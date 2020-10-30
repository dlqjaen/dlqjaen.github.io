---
path: '/posting/promise'
date: '2020-10-26'
title: 'Javascript 프로미스(Promise)'
description: '`Promise`를 알아보기 전에 우선 Promise가 나오게된 이유에 대해서 알아볼 필요가 있다. 자바스크립트에서는 비동기 요청이 자주 사용되곤 한다.'
tags: ['JS', 'Basic']
---
## Promise
`Promise`를 알아보기 전에 우선 Promise가 나오게된 이유에 대해서 알아볼 필요가 있다.

자바스크립트에서는 비동기 요청이 자주 사용되곤 한다.
<br>
비동기식 요청은 처리방식을 병렬로 진행하여 기존 처리와 동시에 진행되는 장점이 있다.
<br>
하지만 비동기가 처리된 후 받아온 데이터를 이용한 처리가 되어야 할 경우 콜백을 이용해 처리하게 되는데 이 형태가 중첩될 경우 콜백헬이 형성되게된다.

```javascript
var count = 1

function api (param, callback) {
  $.get(`/api/${count}`, function(res) {
    count++
    $.get(`/api/${count}`, function(res) {
      count++
      $.get(`/api/${count}`, function(res) {
        count++
        ...
      })
    })
  })
}
```
위의 예시가 극단적이긴 하지만 콜백지옥의 예이다.
<br>
이런 콜백지옥 현상을 조금 개선하고자 나온 것이 `Promise`라고 할 수 있다.
```mdn
Promise는 프로미스가 생성될 때 꼭 알 수 있지는 않은 값을 위한 대리자로,
비동기 연산이 종료된 이후의 결과값이나 실패 이유를 처리하기 위한 처리기를 연결할 수 있도록 합니다.
```
`MDN`에서 발췌해온 `Promise`에 대한 설명이다.
<br>
설명에서처럼 `Promise`는 비동기처리가 끝난 후 나온 값을 연속해서 처리하기를 도와준다고 할 수 있다.

```javascript
var count = 1

function promiseFunction () {
  return new Promise(function (resolve, reject) {
    resolve($.get(`/api/${count}`))
  })
}
```

위가 프로미스의 기본적인 형태이다.
<br>
Promise는 기본적으로 인스턴스를 생성해서 사용하게된다.
<br>
인스턴스 생성시 `resolve, reject`를 인자로 받는 함수를 파라미터로 받는데 `resolve`는 비동기처리가 성공했을 경우 호출하여 값 넘겨주는 역할을 하고 `reject`은 비동기처리가 실패했을 때 넘겨줄 값을 넣어주게된다.

이제 호출하는 부분을 보면 아래와 같이 수정될 수 있다.
```javascript
var count = 1

function promiseFunction () {
  return new Promise(function (resolve, reject) {
    $.get(`/api/${count}`, function(res) {
      resolve(res)
    })
  })
}

function api (param, callback) {
  promiseFunction().then(function() {
    count++
    return promiseFunction()
  }).then(function() {
    count++
    return promiseFunction()
  }).then(function() {
    count++
    return promiseFunction()
  })
  ...
}
```
확실히 위에서 본 뎁스가 계속 깊어지면서 가독성이 낮아지는 형태보다는 보기가 편해졌다.
<br>
앞에서 실행한 비동기 함수에서 `Promise`를 다시 리턴해주고 `then`을 통해서 다시 `resolve`된 값을 받아 연속적으로 다음 함수를 처리할 수 있도록 되는 모습을 볼 수 있다.
---
### Promise의 예외처리
Promise의 형태와 사용법을 알아봤는데 그렇다면 예외처리는 어떻게 할까?
<br>
보통의 자바스크립트에서 발생하는 예외를 처리하는 방법은 `try catch`를 이용 할 수 있는데 예시를 보면 아래와 같다.
```javascript
function errorTest() {
  throw new Error('에러')
}

try {
  errorTest()
} catch (e) {
  console.log(e) // Error: 에러 ...
}
```
그렇다면 Promise의 예외처리도 `try catch`를 쓰면될까?
```javascript
function promiseError() {
  return new Promise(function(resolve, reject) {
    reject(new Error('에러'))
  })
}

try {
  promiseError()
} catch (e) {
  console.log(e)
}

// Uncaught (in promise) Error: 에러
```
`try catch`를 사용해 예외처리를 했지만 콘솔로 찍히는 것은 예외처리가 되지 않았다는 에러이다.
<br>
사실 비동기 처리의 예외처리는 `try catch` 문으로는 잡을 수 없다.
<br>
그 이유는 비동기이기 때문인데, 풀어서 말하자면 `try catch`와 비동기 처리가 병렬로 진행되기 때문에 비동기 처리가 끝났을 때는 이미 `try catch`도 끝난 상태이기 때문이다.

그래서 Promise에서 예외처리는 `.catch` 메소드를 이용해서 하게된다.
```javascript
function promiseError() {
  return new Promise(function(resolve, reject) {
    reject(new Error('에러'))
  })
}

promiseError().catch(function(e) {
  console.log(e) // Error: 에러 ...
})
```
위의 예시와 같이 `Promise`를 호출하고 `.catch`를 이용해서 에러처리를 하게되면 `Uncaught`가 발생하지 않고 제대로 예외처리가 되게된다.