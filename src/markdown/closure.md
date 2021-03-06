---
path: '/posting/closure'
date: '2020-10-24'
title: 'Javascript 클로저(Closure)'
description: '클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. MDN 문서에서 클로저를 설명하는 첫 문장이다. 뭔가 이해하기 어려운데, 조금 더 쉽게 말하자면 `함수 스코프의 관계(스코프 체이닝)`라고 할 수 있다.'
tags: ['JS', 'Basic']
---
## 클로저?
``` mdn
클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
```
MDN 문서에서 클로저를 설명하는 첫 문장이다.<br>
뭔가 이해하기 어려운데, 조금 더 쉽게 말하자면 `함수 스코프의 관계(스코프 체이닝)`라고 할 수 있다.<br>
그럼 스코프 체이닝은 뭘까?
---
### 스코프 체이닝
우선 코드로 살펴보자.

```js
function outer() {
  var test = 'test'

  function inner() {
    console.log(test)
  }

  inner()
}

outer() // 'test'
```
위의 코드를 보면 outer함수를 호출하고 있고 outer함수 내부에서 inner함수를 호출하고 있다.<br>
여기서 inner함수에서는 `test`라는 변수를 찾지만 inner함수 스코프에는 `test`라는 변수가 없기 때문에 바로 밖 outer함수의 스코프에서 `test`를 찾게된다.

만약 inner함수 내부에 test가 선언되어 있다면 그 값을 보여주었겠지만 선언되어 있지 않았다. 그렇다고 에러를 보여주는 것이 아닌 밖의 함수에서 계속해서 변수를 찾고 있는 이런 관계를 스코프 체이닝이 되어있다고 할 수 있다.

```js
inner()
  ...
  [[Scopes]]: Scopes[2]
    0: Closure (outer)
    1: Global {0: global, 1: global, ...}
```
inner함수를 살펴보면 위와 같이 스코프를 확인 할 수 있다.<br>
outer함수의 `test`변수와 연결되어 `클로저(outer)`가 보이고 그 다음으로 `글로벌 객체`가 스코프로 들어와 있다.
---
### 클로저를 이용한 private 흉내
javascript에서는 private를 보장하는 변수를 지원하지 않는다.
하지만 앞서 알아본 클로저를 이용하여 private를 비슷하게 흉내낼 수 있다.

```js
function outer() {
  var _name = 'name: beomdu'

  return function inner() {
    return _name
  }()
}

console.log(outer()) // 'name: beomdu'
```
위의 코드를 보면 outer함수에 `_name`이란 변수를 선언해두고 inner함수를 반환하고 있고 inner함수에서는 outer함수의 `_name`을 반환하게 되어있다.<br>
이렇게 해두면 outer함수의 `_name` 변수는 외부에서는 어떤방법으로도 접근할 수 없게 된다.
---
### 반목문 클로저
```js
var i;
for (i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```
위 코드를 보면 for문이 돌면서 0.1초 후에 i를 콘솔로 보여주게 되어있다.
하지만 0.1초 후 찍히는 콘솔을 보면 2가 3번 찍혀 있는 것을 확인 할 수 있다.
<br>
이런 이유는 setTimeout이 실행되기 전에 이미 for문은 모두 돌아 i가 이미 3이 할당되어 있기 때문인데, 이걸 클로저를 이용해 0, 1, 2이 찍히게 할 수 있다.

```js
var i;
for (i=0; i<3; i++) {
  (function() {
    var j = i
    setTimeout(function() {
      console.log(j);
    }, 100);
  })()
}
```
이전 코드에서 function으로 setTimeout을 한 번 감싸고 i의 값을 받는 변수j를 선언하고 setTimeout에서는 j를 찍히게 수정했다.
이렇게 하면 setTimeout이 실행되는 시점에서 바깥 각각의 익명함수 스코프에서 j변수를 찾기 때문에 0, 1, 2가 차례대로 찍힌다.