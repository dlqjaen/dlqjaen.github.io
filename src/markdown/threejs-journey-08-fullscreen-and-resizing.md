---
path: '/posting/threejs-journey-08-fullscreen-and-resizing'
date: '2021-05-15'
title: 'threejs-journey 08-fullscreen and resizing'
description: 'three.js를 이용한 전체 화면 및 크기조정을 해보자'
tags: ['three.js']

---

### Introduce

- 사용 가능한 공간을 전체차지
- 사용자가 크기 조정 제공
- 사용자에게 전체화면 조정방법 제공



### Viewport

```javascript
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
```

캔버스 대신 뷰포트를 맞게하려면 `windoow.innerWidth`와 `window.innerHeight`을 이용한다.

브라우저 기본 스타일때문에 body에 패딩이 존재하고 그로인해 스크롤이 발생한다.

CSS를 이용해서 꽉찬 화면을 만들어 준다.

```css
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* 스크롤생성 방지 */
}
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none; /* 드래그 앤 드롭 아웃라인발생 방지 */
}
```



### Resizng

 ```javascript
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  
  renderer.setSize(sizes.width, sizes.height)
})
 ```

`renderer.setSize(sizes.width, sizes.height)` 투영 행렬도를 업데이트 해줘야 한다는데 나중에 알려준다고 한다.



### Handle Pixel Ratio

사용할 수 있는 화면 픽셀 비율을 구한다. `window.devicePixelRatio` 

랜더러의 픽셀 비율 업데이트 `renderer.setPixelRatio()`

픽셀비율이 높은 디바이스에서는 성능문제가 발생한다. 사람의 눈은 픽셀 비율 2와 3의 차이를 거의 느끼지 못하기 때문에 2로 최적화 해야한다.

```javascript
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)
})
```



### Fullscreen

```javascript
windoow.addEventLisener('dbclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})
```

Safari에서는 제대로 동작하지않기 때문에 Safari에서 제공하는 함수를 사용해야 한다.

```javascript
windoow.addEventLisener('dblclick', () => {
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    } else {
      canvas.webkitRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
})
```

