---
path: '/posting/this'
date: '2020-11-10'
title: 'This'
description: '자바스크립트의 this에 대해서 알아보자!'
tags: ['JS']
---

## This

- this는 기본적으로 Window이다.

- this는 실행문맥이다.

- ```javascript
  const obj = {
    a: () => { console.log(this) }
  }
  obj.a() // obj
  ```

  객체의 메서드를 호출할 때 this를 내부적으로 바꿔준다.

- ```javascript
  const b = abj.a
  b() // Window
  ```

  호출 할 때, 호출하는 함수가 객체의 함수인지, 그냥 함수인지가 중요

- this를 바꾸는 3가지 메서드:  `bind`, `call`, `apply`

- ```javascript
  function Test(subject, grade) {
    this.subject = subject
    this.grade = grade
  }
  Test.prototype.confirm = function() {
    console.log(this.subject, this.grade)
  }

  Test('영어', 80)
  console.log(window.subject, window.grade) // '영어' 80

  const test = new Test('국어', 100)
  test.confirm() // '국어' 100
  ```

  생성자 함수도 함수이기 때문에 `new` 로 생성하지 않고 함수호출로 실행하게 되면 내부의 this는 Window를 가리키게되고 Window에 데이터를 할당하게 된다.

### Arrow Function

- 에로우 펑션에는 `this`가 존재하지 않는다. 대신 화살표 함수를 둘러싸는 렉시컬 범위의 this가 사용된다.
- 에로우 펑션은 레시컬 범위의 `this`를 가지기 때문에 `strict 모드`라도 전역 객체를 this로 가질 수 있다.

