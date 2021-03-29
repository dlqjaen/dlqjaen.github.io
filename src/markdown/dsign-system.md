---
path: '/posting/design-system'
date: '2021-03-29'
title: 'Design System'
description: 'Flitto에서 디자인 시스템을 적용한 내용'
tags: ['html', 'css']

---

## Design System

Link: https://dev1.flit.to:5443/uxui

### 도입 배경

- 디자인팀, Front-end팀, APP팀 간 소통문제
- 디자인 QA시간 소요
- 개발시간 소요
- 디바이스별 통일되지 않은 `Look & Feel` 로 인한 사용성 저하

### 

###기대 성과

- 타 직군과의 커뮤니케이션 개선
- 디자인, 개발 시간 단축
- 디자인 의사결정의 가이드로 활용
- 일관된 `Look & Feel` 로 사용성 개선



### 방법

- Less의 문법 사용

### Color

- Less의 [Variables](http://lesscss.org/features/#variables-feature)을 이용

  ```less
  @gray90: #1a1a1a;
  ```

### Font

- HTML 기본 폰트사이즈를 `10px` 로 설정, 이후 폰트 사이즈는 `rem` 단위로 설정

  ```less
  html {
    font-size: 10px;
  }
  ```

  

- Less의 [Mixins](http://lesscss.org/features/#mixins-feature) 을 이용

  ```less
  .font_9040 {
    font-size: 4.8rem;
    line-height: normal;
    .font_normal();
  }
  
  .font_9060 {
    .font_9040();
    .font_bold();
  }
  ```


#### Button

- HOC형태로 작성 [$attrs](https://kr.vuejs.org/v2/api/index.html#vm-attrs) 이용

  ```vue
  <button
    class="text-button"
    v-bind="$attrs"
    @click="$emit('click', true)"
  >
    <slot>Button</slot>
  </button>
  ```


- 클래스 이름으로 형태 구분 `{format}-{mode}-{type} [size]`

