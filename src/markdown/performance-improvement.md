---
path: '/posting/performance-improvement'
date: '2020-10-27'
title: 'WEB 성능개선 방법'
description: 'Web의 성능을 개선하는 방법에는 어떤 것들이 있을까?'
tags: ['JS', 'Service']
---
### 사용자의 느낌을 개선
> 빨리 받은 데이터부터 보여주는 세부적인 컴포넌트 구성 사용자가 제일 먼저 접하게되는 UI를 우선 로드되도록 구성 ex) lazyload, thumbnail 이미지

> 스켈레톤 UI 적용

### 리소스 다운을 개선

> 리소스 요청 수를 줄인다. (이미지 스프라이트)

> CSS 연결에 미디어쿼리를 사용한다

> 외부 스타일시트를 가져올 때 `@import`의 사용을 피한다. 로드를 기다려야 한다.

> Javascript는 `</body>`직전에 선언한다. 자바스크립트가 다운되는 동안 블록킹이 일어난다.

> 혹 `<head>`에 위치해 있더라도 `defer`나 `async`속성을 명시한다.

> CSS, javascript 파일을 번들, minify하기

> 외부스타일시트 보다는 내부 스타일시트를 이용할 것

> 리소스 용량 줄이기

> 중복코드 제거

> 유틸 라이브러리 사용 줄이기

> HTML 태그중첩을 줄인다. 또 공백과 주석을 제거한다.

> 간결한 CSS 선택자를 사용한다.

### 리플로우 리페인트 개선

#### 리플로우/리페인트
DOM이 `추가/삭제`되거나 기하적인 영향(높이 넓이 위치)을 주는 CSS값이 변경될 경우 리플로우 발생 기하적인 영향을 주지않는 CSS값의 변경은 리페인트 발생

리플로우가 발생하는 속성들: `height`, `width`, `left`, `top`, `font-size`, `line-height` 등
<br>
리페인트가 발생하는 속성들: `background-color`, `color`, `visibility`, `text-decoration` 등

> 레이아웃 스래싱 피하기 (반복문 안에서 style.width를 설정하고 box.offsetWidth를 읽어오면 for문이 반복 실행될 때마다 레이아웃이 발생한다. 이것을 레이아웃 스래싱이라고 한다.)

> DOM을 조작할 경우 최소한의 범위로 변경

> display: none로 숨겨진 엘리먼트를 변경할 경우 리플로우/리페인트가 발생하지 않는다.

> 스크립트를 이용한 애니메이션처리를 할 경우 `requestAnimationFrame`를 이용하기

> 애니메이션을 적용하는 엘리먼트에 `position`을 `absolute`나 `fixed`를 적용하여 주변 엘리먼트에 영향을 주지 않게 만들기