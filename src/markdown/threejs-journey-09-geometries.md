---
path: '/posting/threejs-journey-09-geometries'
date: '2021-05-15'
title: 'threejs-journey 09-geometries'
description: 'three.js를 이용한 기하학을 공부해보자!'
tags: ['three.js']

---

### What is a Geometries

`Three.js` 에서 도형은 꼭지점(3D 공간의 점 좌표)과 면으로 구성된다.

기하학을 사용하여 입자를 형성할 수 있다.



### The diffrent built-in geometries

`Three.js`에서 제공하는 많은 기본 도형

`ButterGeometry`클래스에 상속되는 도형으로 `translate(...)`, `rotateX(...)`, `normalize()` 등으로 구축되어 있다.

- [BoxGeometry](https://threejs.org/docs/#api/en/geometries/BoxGeometry) 상자를 만듭니다.
- [PlaneGeometry](https://threejs.org/docs/#api/en/geometries/PlaneGeometry) 직사각형 평면을 만듭니다.
- [CircleGeometry](https://threejs.org/docs/#api/en/geometries/CircleGeometry) 디스크 또는 디스크의 일부 (예 : 원형 차트)를 만듭니다.
- [ConeGeometry](https://threejs.org/docs/#api/en/geometries/ConeGeometry) 원뿔 또는 원뿔의 일부를 만듭니다. 원뿔의 바닥을 열거 나 닫을 수 있습니다.
- [CylinderGeometry 원통](https://threejs.org/docs/#api/en/geometries/CylinderGeometry) 을 만듭니다. 원통의 끝을 열거 나 닫을 수 있으며 각 끝의 반지름을 변경할 수 있습니다.
- [RingGeometry](https://threejs.org/docs/#api/en/geometries/RingGeometry) 평면 링 또는 평면 원의 일부를 만듭니다.
- [TorusGeometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry) 두께가있는 링 (예 : 도넛 형) 또는 링의 일부를 만듭니다.
- [TorusKnotGeometry](https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry) 일종의 매듭 기하학을 만듭니다.
- [DodecahedronGeometry](https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry) 12면 구를 만듭니다. 둥근 구에 대한 세부 정보를 추가 할 수 있습니다.
- [OctahedronGeometry](https://threejs.org/docs/#api/en/geometries/OctahedronGeometry) 8면 구를 만듭니다. 둥근 구에 대한 세부 정보를 추가 할 수 있습니다.
- [TetrahedronGeometry](https://threejs.org/docs/#api/en/geometries/TetrahedronGeometry) 4면 구를 만들려면 (세부 사항을 늘리지 않으면 구가되지 않습니다). 둥근 구에 대한 세부 정보를 추가 할 수 있습니다.
- [IcosahedronGeometry](https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry) 대략 같은 크기의 삼각형으로 구성된 구를 만듭니다.
- [SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry) 면이 사각형처럼 보이는 가장 인기있는 구 유형을 만듭니다 (쿼드는 두 개의 삼각형의 조합 일뿐입니다).
- [ShapeGeometry](https://threejs.org/docs/#api/en/geometries/ShapeGeometry) 경로를 기반으로 모양을 만듭니다.
- [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry) 경로를 따라 튜브를 만듭니다.
- [ExtrudeGeometry](https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry) 경로를 기반으로 돌출을 생성합니다. 베벨을 추가하고 제어 할 수 있습니다.
- [LatheGeometry](https://threejs.org/docs/#api/en/geometries/LatheGeometry) 꽃병 또는 꽃병의 일부를 생성합니다 (회전과 비슷 함).
- [TextGeometry](https://threejs.org/docs/#api/en/geometries/TextGeometry) 3D 텍스트를 만듭니다. 서체 json 형식으로 글꼴을 제공해야합니다.



### Box Example

`BoxGeometry` 는 6개의 매개변수를 가진다.

- `width`: `x`축의 크기
- `height`: `y`축의 크기
- `depth`: `z`축의 크기
- `widthSegments`: `x`축의 세분화 수
- `heightSegments`: `y`축의 세분화 수
- `deppthSegments`: `z`축의 세분화 수

보통 세분화 1이면 2개의 삼각형으로 구성 2이면 8개의 삼각형으로 구성

 ```javascript
new THREE.BoxGeometry(1, 1, 1, 1, 1, 1) // 2개의 삼각형으로 면을 구성
new THREE.BoxGeometry(1, 1, 1, 2, 2, 2) // 8개의 삼각형으로 면을 구성
 ```

```javascript
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
```

`wireframe` 을 `true`로 설정하면 면대신 선으로 구성된 와이어 프레임을 보여줍니다.

```javascript
const geometry = new THREE.SphereGeometry(1, 32, 32)
```

구를 표현한 `SphereGeometry` 를 보면 면구성이 재미있습니다.



### Creating your own buffer geometry

직접 자신만의 지오메트리를 만들 수 있다.

```javascript
const geometry = new THREE.bufferGeometry()
```

우선 빈 `SphereGeometry` 를 하나 만든다.

```javascript
const positionsArray = new Float32Array(9)

positionsArray[0] = 0
positionsArray[1] = 0
positionsArray[2] = 0

positionsArray[3] = 0
positionsArray[4] = 1
positionsArray[5] = 0

positionsArray[6] = 1
positionsArray[7] = 0
positionsArray[8] = 0
// ---------- or -----------
const positionsArray = new Float32Array([
  0, 0, 0,
  0, 1, 0,
  1, 0, 0
])
```

선언한 배열은 x, y, z에 따른 점의 좌표라고 할 수 있다.

이 배열을 `BufferAttribute` 로 변환해야한다.

첫 번째 매개 변수는 입력된 배열, 두 번째 매개변수는 하나의 정점을 만드는 양의 값에 해당한다.

```javascript
const positionsAttribute = new THREE.BufferAttrybute(positionsArray, 3)
```

`setAttrribute` 매서드를 이용해서 `BufferGeometry` 에 추가한다.

첫 번째 매개변수는 `속성이름`, 두 번째 매개변수는 `값`이다.

```javascript
geometry.setAttriibute('position', positionsAttribute)
```

무작위 삼각형 묶음을 만들 수 있다.

```javascript
const geometry = new THREE.BufferGeometry()

const count = 50
const positionsArray = new Float32Array(count * 3 * 3)
for(let i=0, l=count*3*3; i<l; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
```



### Index

BufferGeometry 는 index를 이용하여 정점을 연결할 수 있다. 성능개선을 할 수 있다.