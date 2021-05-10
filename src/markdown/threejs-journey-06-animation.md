---
path: '/posting/threejs-journey-06-animation'
date: '2021-05-06'
title: 'threejs-journey 06-Animation'
description: 'three.js를 이용한 애니메이션효과 적용'
tags: ['three.js']
---

[Link](https://threejs-journey.xyz/lessons/6)

- `window.requestAnimationFrame`을 이용하여 한 프레임 단위로 오브젝트를 움직이고 화면을 랜더링한다.
- 위 작업을 반복하게되면 프레임단위로 오브젝트가 움직이는 것 처럼 느껴지며 우리는 애니메이션이 적용되었다고 한다.
- 이 처럼 한 프레임 단위를 `tick` 이라고 한다.

```javascript
const tick = () => { window.requestAnimationFrame(tick) }
tick()
```

위 코드처럼 `tick` 을 실행하게되면 한 틱단위로 `tick` 함수가 무한히 반복 되는 것을 알 수 있다.

성능이 좋은 컴퓨터의 경우 틱이 실행되는 횟수가 많고 상대적으로 성능이 떨어지는 컴퓨터의 경우 실행횟수가 적어진다.



```javascript
const tick = () => {
	  mesh.rotation.y += 0.001
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
```

오브젝트에 회전 값을 변경하고 `renderer.render` 로 화면의 랜더링을 다시해주면 틱 단위로 오브젝트가 y축을 기준으로 돌아가는 듯한 효과를 줄 수 있다.



```javascript
let time = Date.now()
const tick = () => {
  	const currentTime = Date.now()
    const delayTime = currentTime - time
    time = currentTime
	  mesh.rotation.y += 0.01 * delayTime
}
tick()
```

`Date.now()` 을 이용하면 현재의 타임스탬프를 구할 수 있다. 함수 실행전과 중에 각각 타임스템프를 구해서 그 차이만큼의 값을 이용해서도 오브젝트를 움직일 수 있다.

시간으로 계산하기에 컴퓨터 성능에 영향을 받는 `requestAnimationFrame` 와는 달리 시간을 기준으로 하기때문에 거의 모든 컴퓨터에서 동일하게 동작한다.



```javascript
const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.y = elapsedTime
}

tick()
```

Three.js에서 내부적으로 시간 계산을 도와주는 객체가 있다.

`new THREE.Clock()` 을 통해 시계 객체를 생성하고 `getElapsedTime()` 을 통해 시계가 생성되고 나서 얼마나 지났는지에 대한 값을 받아올 수 있다.

이 값으로도 오브젝트를 회전할 수 있다.



```javascript
const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)
}

tick()
```

코사인과 사인 베지어를 이용해서 오브젝트의 회전애니메이션을 주게되면 좀 더 역동적인 애니메이션을 볼 수 있다.



```javascript
const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
  	camera.lookAt(mesh.position)
}

tick()
```

오브젝트는 그대로두고 카메라에 회전을 걸고 `lookAt()` 으로 오브젝트를 중심으로 카메라를 회전하게 할 수도 있다.



```javascript
import gsap from 'gsap'

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

const tick = () =>{
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
```

[GSAP](https://greensock.com/gsap/) 라이브러리를 이용하면 좀 더 쉽게 애니메이션을 설정 할 수 있다.



###전체코드



### 전체 코드

```javascript
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

// let time = Date.now()

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, {duration: 1, delay: 2, x: 0})

const tick = () => {
    /*
        //timestamp
        const currentTime = Date.now()
        const deltaTime = currentTime - time
        time = currentTime

        mesh.rotation.y += 0.001 * deltaTime
    */

 	 	const elapsedTime = clock.getElapsedTime()
    camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

```



## 스터디내용

