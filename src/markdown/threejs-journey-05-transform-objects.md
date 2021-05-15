---
path: '/posting/threejs-journey-05-transfrom-objects'
date: '2021-05-02'
title: 'threejs-journey 05-transform-objects'
description: 'three.js를 이용한 물체의 이동, 크기변화, 그룹화를 공부해보자!'
tags: ['three.js']

---

[Link](https://threejs-journey.xyz/lessons/5)

- 04강의에서 webpack을 이용하여 three.js를 연결하도록 했었다.(04강 Webpack설정은 따로 정리하지 않음.)
-  `position` (개체 이동), `scale` (개체 크기 조정), `rotation` (개체 회전), `quaternion` (객체를 회전하기 위해; 나중에 자세히 알아보기)을 이용하면 오브젝트를 이동, 크기조절, 회전 할 수 있다.
- *주의* 이런 조절은  `renderer.render()`이 선언되기 전에 되어야 합니다.



### Position

```javascript
const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 'blue' })
const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.x = 1
mesh2.position.y = 2
mesh2.position.z = 2
scene.add(mesh2)
mesh.position.set(0.7, -0.6, 1)
```

`mesh.position.set` 을 이용하면` position`의 `x, y, z` 값을 한 번에 설정 할 수 있다.

```javascript
mesh.position.length()
```

Vactor의 길이를 구할 수 있다고 하지만 정확히 이해하지 못함.

```javascript
mesh.position.distanceTo(camera.position)
```

`distanceTo` 를 이용하면 카메라와 오브젝트 사이의 `Vactor3에서의 거리`를 구할 수 있다.

*주의* 카메라를 생성한 후에 선언해야 제대로 동작한다.

```javascript
mesh.position.normalize()
```

Vactor의 값을 1로 줄이고 방향을 고정하도록 값을 정규화 시킨다고 하지만 제대로 이해 못 함.



### Scale

```javascript
mesh.scale.x = 2
mesh.scale.y = 0.25
mesh.scale.z = 0.5
```

`scale` 을 이용하면 축별 크기를 조절 할 수 있다.



### Rotate

```javascript
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25
```

`rotate` 를 이용하면 오브젝트에 회전을 줄 수 있다.

`주의` rotate는 먼저 적용되는 축에 따라 다음에 적용되는 축의 방향이 변한다.

`reorder` 를 사용하면 축이 변경될 우선순위를 재설정 할 수 있다. `(대문자로 입력해야 함!)`

축 전환으로인해 계산이 어려울 수 있는데 축 계산없이 쉽게 회전을 줄 수 있는 것이 `quaternion` 라고 한다.



### Group

```javascript
const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
group.position.x = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube3.position.x = 1.5
group.add(cube3)
```

`THREE.Group()` 을 이용하면 여러 오브젝트를 그룹으로 묶을 수 있다.

`scene.add(group) ` 으로 화면에 그룹을 추가해줘야 그룹에 추가한 오브젝트들이 보이게된다.

각 오브젝트를 생성하고 `group.add()` 를 이용하여 그룹에 지정해준다. 이때 같은위치에 오브젝트가 겹치게 된다면 나중에 선언된 오브젝트가 보이게 된다.



### 축 가이드

```javascript
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)
```

`THREE.AxesHelper` 를 이용하면 `x, y, z`축에 해당하는 축 가이드를 추가할 수 있다. 매개변수로 `행의 길이`를 정할 수 있다.



### 전체 코드

```javascript
import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff00000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 'blue' })
const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.x = 1
mesh2.position.y = 2
mesh2.position.z = 2
scene.add(mesh2)

const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 0
camera.lookAt(new THREE.Vector3(0, -1, 0))
scene.add(camera)

mesh.position.set(0.7, -0.6, 1)
console.log(mesh.position.normalize())
console.log(mesh.position.distanceTo(camera.position))

// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
group.position.x = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube3.position.x = 1.5
group.add(cube3)

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```



## 스터디 내용

- 이번 강의의 중심은 여러 mesh를 묶은 하나의 그룹을 만들 수 있다는 것 같았다.
- 또 다른 내용은 rotaion과 [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion) 을 이용한 회전이었는데, rotaion은 x, y, z축 중 어떤 축을 먼저 회전시키냐에 따라서 나머지 축도 영향을 받게되는데 Quaternion은 축변환이 없이 회전시킬 수 있으나 수학적 공식이 필요하고 어려워 나중에 다룬다고 한다.(정말?)
- position은 [Vector3](https://threejs.org/docs/#api/en/math/Vector3) 클래스 의 인스턴스라고 했는데  Vector3에 대해 좀 더 공부해볼 필요가 있을 것 같다.
- `AxesHelper`를 이용하면 중심을 표시 할 수 있다. (3강 스터디때 필요성을 언급)