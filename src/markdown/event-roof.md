---
path: '/posting/event-roof'
date: '2020-01-03'
title: '이벤트 루프'
description: '자바스크립트의 event-roof에 대해서 알아보자!'
tags: ['JS']
---
## Event Roof

![img](https://miro.medium.com/max/2048/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

출처 [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

- 자바스크립트는 '단일 스레드'
- 자바스크립트는 어떻게 '동시성'을 지원하는 걸i까
- 비동기 요청은 자바스크립트의 구동환경(브라우저나 node.js)에서 이루어진다
- Run to Completion: 하나의 함수가 실행되면 이 함수가 끝날 때까지는 다른 어떤 작업도 끼어들지 못한다.
- Node.js에서는 비동기 IO를 지원하기 위해 libuv 라이브러리를 사용하며 libuv 라이브러리가 이벤트루프를 제공
- Node.js는 Event Driven방식, 즉 non-blocking으로 처리를 위해 Event Roof를 사용
- Event Roof는 Call Stack과 Callback Queue로 구성
- Event Roof는 주기적으로 Call Stack이 비어있는지 확인(Polling)
- 선입후출(LIFO, Last In First Out)의 룰을 따른다.

### Call Stack

- 실행될 코드들의 순서를 기억하기 위해 쌓아놓는 곳
- 마지막에 쌓인 코드부터 실행(후입선출)

### Callback Queue(Task Queue)

- 비동기 작업들이 대기하는 곳
- Call stack이 비어있어야 Callback Queue의 대기열 맨앞 코드 부터 Call Stack으로 옮겨져서 실행된다.
- 선입선출(FIFO, Frist In Frist OUT)의 룰을 따른다.

### WEB API

- 브라우저에서 제공하는 API로 DOM, Ajax, Timeout 등이 있다.
- Call Stack에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백함수를 실행해야할 타이밍에 Callback Queue에 넣는다.

### Event Loop

- Call Stack이 비워진 상태가되면 Callback Queue의 첫번째 콜백을 Call Stack으로 넣는다. (이런 반복적 행동을 틱이라 한다.)

### Microtask Queue

- Event Loof는 우선적으로 Microtask Queue를 확인하여 콜백이 있다면, 이를 먼저 Call Stack에 담는다.
- Promise의 then()의 콜백은 Task Queue가 아닌 Microtask Queue에 담긴다.

### requestAnimationFrame API

- requestAnimationFrame API가 실행되면 콜백이 Animation Frames로 담긴다.(setTimeout이 실행되면 타이머 완료 후 콜백이 Task Queue에 담기는 것 처럼)

### 우선순위

- Microtask Queue > requestAnimationFrame > Task Queue (크롬 기준)

### Event Queue

- Task Queue와 동일한 역할

### Job Queue

- Microtask Queue와 동일한 역할

### Render Queue

- 브라우저에서 사용자에게 래스터 이미지를 보여주기 위해 HTML, CSS, Javascript 코드를 변환하는 과정을 의미한다.(rendering path, critical rendering path 라고도 한다.)
- DOM Tree -> CSS Tree -> CSSOM -> Render Tree -> Layouting -> Layer Tree -> Paint -> GPU Syne -> Composition(스크린에 그려지는 Final Frame)


