---
path: '/posting/threejs-journey-03-basic-scene'
date: '2021-04-28'
title: 'threejs-journey 03-basic-scene'
description: 'three.js를 이용한 화면 기본셋팅'
tags: ['three.js']

---

[Link](https://threejs-journey.xyz/lessons/3)

1. `three.js` 적용하려면 우선은 html에 `three.js` 라이브러리를 연결해 줘야한다.
2. `section` 다음에 스크립트를 로드하는 이유는 [Web성능 최적화](https://dlqjaen.github.io/posting/performance-improvement) 를 참고

```html
<!-- index.html -->
<body>
	<section id="webgl"></section>  
  <script src="./three.min.js"></script>
  <script src="./script.js"></script>
</body>
```



### 화면생성

```javascript
// script.js
const scene = new THREE.Scene()
```

`THREE` 객체를 이용해서 `scene` 을 생성한다. (화면)



### 오브젝트 생성

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff00000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```

`BoxGeometry`를 이용해서 네모상자 구조를 생성할 수 있다. 인자는 `(길이, 높이, 깊이)` 순서다.

`MeshBasicMaterial` 을 사용하면 단순한 음영으로 도형을 그릴 수 있다. 컬러는 `HEX, 색상이름, 16진수`으로도 지정가능

`Mesh` 를 이용하면 삼각형 폴리곤을 기반으로한 객체를 생성할 수 있는데 `geometry` 로 매체의 구조를 전달해주고 `material` 로 매체의 재질을 전달하면 오브젝트를 생성한다.

`scene.add(mesh)` 을 이용하면 앞서 생성한 화면에 방금만든 오브젝트를 추가할 수 있다.



### 카메라 생성

```javascript
const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
camera.position.x = 1
camera.position.y = 1
scene.add(camera)
```

`PerspectiveCamera` 를 이용하면 원근을 처리하는 카메라를 생성할 수 있다.

첫 번째 매개변수로는 화각을 넘겨줄 수 있다. 화각이 좁을수록(작을수록) 물체가 확대된 것처럼 보이고 넓을수록(클수록) 화면의 왜곡이 심해진다.

두 번째 매개변수는 가로세로의 비율을 넘겨준다.

추가로 `position`으로 카메라의 위치를 조절할 수 있다. 최초 랜더링 시 카메라와 물체(mesh)가 같은 위치에 존재하기에 카메라를 z축으로 값을 주어 물체가 보이도록 한다.

`scene.add(camera)` 를 이용하면 화면에 카메라를 추가할 수 있다.



### HTML에 랜더링

```javascript
const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```

`html`에 존재하는 엘리먼트를 지정하고 `new THREE.WebGLRenderer({ canvas })` 를 이용하여 Webgl을 객체를 생성한다.

`renderer.setSize(sizes.width, sizes.height)` 로 캔버스의 사이즈를 정해준다.

`renderer.render(scene, camera)` 을 이용해 앞서 생성했던 화면과 카메라를 캔버스(공간)에 랜더링한다.



### 전체 코드

```javascript
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff00000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```



## 스터디 내용

- 전체적인 느낌은 3dmax의 UI화면을 상상하면서 접근하니 어렵게 다가오지 않았다.
- 카메라, 화면, 물체의 개념을 잡고 코드를 작성해야 생각한 화면의 모습을 만들 수 있다.
- `webgl`엘리먼트에는 하나의 `scene`만 들어가는 것인가? 
  그런 것 같다. 대신 여러개의 `mesh`를 넣을 수 는 있는 것 같다.
- mesh에 색만 적용되어 있으니 형태를 인식하는게 껄끄럽다.
- 소실점이 적용되어 있어서 카메라를 x, y, z축으로 이동 할 때마다 오브젝트에 원근법이 적용되어 보이는 것 같다.
- 화면으 소실점을 표시해주는 UI가 있으면 좋을 것 같다.