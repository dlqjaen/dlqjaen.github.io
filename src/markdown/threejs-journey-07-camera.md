---
path: '/posting/threejs-journey-07-camera'
date: '2021-05-12'
title: 'threejs-journey 07-camera'
description: 'three.js를 이용한 다양한 카메라와 컨트롤들을 다뤄보자!'
tags: ['three.js']

---

[Link](https://threejs-journey.xyz/lessons/7)

### Camera

#### ArrayCamera

- 여러 장면을 여러 번 렌더링한 데 사용한다.
- 각 카메라는 캔버스의 특정 영역을 렌더링한다.
- 멀티 플레이어를 지원하는 콘솔게임

#### StereoCamera

- 두 개의 카메라를 통해 장면을 렌더링한다.
- 머리 속으로 페럴렉스효과(깊이가 있다고 생각하게끔)를 만들기 위해 눈을 대신할 두 개의 카메라를 통해 렌더링하게된다.
- 결과를 보려면 VR헤드셋이나 3D안경이 필요하다.

#### CubeCamera

- 6방향(앞, 뒤, 왼쪽, 오른쪽, 위, 아래)을 각각 만들어서 랜더링한다.
- 반사효과나 그림자효과의 환경을 만들 때 사용할 수 있다.

#### OrthographicCamera

- 오브젝트와 카메라의 거리에 관계없이 일정한 거리를 유지한다.
- 2D 장면이나 UI요소를 렌더링하는 데 유용
- `Age of Empire` 와 같은 RTS게임을 만드는 경우 유용

#### PerspectiveCamera

- 사람의 눈이 보는 방식을 모방하여 만들어진 카메라.
- 3D 장면을 렌더링하는 데 사용되는 가장 일반적인 카메라.



### PerspectiveCamera

```javascript
const camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
```

첫 번째 매개변수는 수직 시야로 작은 값을 사용할 경우 장거리 효과가 발생하고 큰 값을 사용하면 피쉬아이효과 발생한다. 보통 `45`, `75` 사용

두 번째 매개변수는 종횡비로 너비를 높이값으로 나눈 값이다.

세 번째, 네 번째 매개변수는 근거리, 원거리에 해당하고 근거리 값보다 카메라에 가깝거나 원거리 값보다 카메라에서 멀면 렌더에 표시되지 않습니다. `0.0001`, `9999999` 와 같은 값을 사용할 경우 겹침렌더링 이슈가 발생할 수 있습니다. 보통 `0.1` 과 `100` 을 사용한다.



### OrthographicCamera

`PerspectiveCamera` 와는 달리 카메라와 오브젝트 사이의 거리가 같아서 원근법을 무시한 오브젝트의 모습이 보인다.

그렇기 때문에 2D 장면 및 UI요소를 랜더링할 때 유용하다.

```javascript
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
```

매개변수는 순서대로 (`left`, `right`,` top`, `bottom`)

```javascript
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
```

캔버스 비율을 이용해서 `left`, `right` 에 적용하게되면 정육면체같은 오브젝트를 만들 수 있다.



### Custom Control

```javascript
let cursor = {
  x: 0,
  y: 0
}
window.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / sizes.width - 0.5
  cursor.y = -(e.clientY / sizes.height - 0.5)
})
```

마우스의 이동에 따라 x, y 좌표값을 이용할 수 있다.

조정되지 않은 값보다는 화면비율로 나눈 0~1 값을 이용하는 것이 좋다. 코드에서는 맨 왼쪽은 -0.5 정중앙은 0 맨 왼쪽은 0.5값을 가지도롥 -0.5를 해줬다.

y값은 마우스가 아래로 이동할수록 값이 커지기 때문에 카메라의 위치가 마우스와는 반대가 된다 그래서 음수를 곱해준다.

```javascript
const tick = () => {
  camera.position.x = corsor.x * 5
  camera.position.y = corsor.y * 5
  camera.lookat(mesh.position)
}
```

*5로 진폭을 높여주고 오브젝트를 바라보게 설정하면 마우스를 따라 카메라의 뷰가 달라지는 것을 볼 수 있다.

```javascript
const tick = () => {
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
  camera.position.y = cursor.y * 3
  camera.lookcat(mesh.position)
}
```

`Math.sin`과 `Math.cos`를 이용해서 원안에서 마우스위치에따라 움직이는 오브젝트를 구현할 수 있다.

해당 각도의 진폭을 pi라고 하는데 이것의 2배가 되어야 전체 회전이 된다고 함.(무슨 말이지?)



### Built-in Contorl

#### DeviceOrientationControls

- OS및 브라우저에서 허용하는 경우 장치 방향을 자동으로 검색하고 그에 따라 카메라를 회전한다.
- 적절한 장비가 있을 경우 VR환경을 만들 수 있다.

#### FlyControls

- 우주선에있는 것처럼 카메라를 이동할 수 있다.

#### FirstPpersonControls

- 높낮이는 조절할 수 없는 새의 시점에서처럼 보인다

#### PointerLockControls

- 포인터 잠금 API를 사용
- 마우스 포인터를 숨기고 `mousemove` 이벤트 콜백에서 값을 계속 전달한다.
- FPS게임과 같은 카메라를 만들 수 있다.

#### OrbitControls

- 좌클릭지점을 중심으로 회전하고 우클릭으로 측면을 변화하고 휠을 이용하여 확대 축소할 수 있다.

#### TrackballControls

- Orbitcontrols와 비슷하지만 수직감도에 제한이 없음

#### TransformControls

- 카메라와 관련없이 오브젝트에 추가하여 이동할 수 있다.

#### DragControls

- 오브젝트를 드리그 앤 드롭하여 이동 할 수 있다.



### OrbitControls

#### Instanciating

OrbitControls클래스는 THREE에 포함되어있지않은 클래스입니다. 라이브러리의 무게를 줄이는 효과

사용하려면 폴더 내부경로를 이용

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const controls = new OrbitControls(camera, canvas)
```

이렇게 적용하면 마우스 좌클릭과 우클릭 휠을 이용하여 오브젝트를 위아래로 뷰를 전환하고 확대, 축소 할 수 있다.

#### Target

카메라의 경우 기본적으로 장면의 중심을 바라보지만 target속성으로 바라보는 지점을 변경할 수 있다.

OrbitControls는 y값을 증가시킬 수 있다.

```javascript
controls.target.y = 2
```

#### Damping

가속과 마찰 공식을 추가하여 애니메이션을 부드럽게한다.

```javascript
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

let tick = () => {
  controls.update()
}
```

회전 속도, 축소 속도, 화대 축소제한, 각도 제한, 감쇠 강도 및 키 바인등을 조절 할 수 있다.



## 스터디 내용