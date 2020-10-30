---
path: '/posting/apply-vuex'
date: '2019-01-26'
title: 'Apply Vuex'
description: 'Vuex를 도입하게된 배경과 적용하는 과정 그리고 생각해볼 점을 정리'
tags: ['Service']
---
## Vuex 적용하기

Vue를 적용하면서 "각 기능별로 컴포넌트를 만들어 재사용하겠다!"라는 큰 포부를 가지고 작업을 진행했지만 직면하게되는 몇가지 문제점들이 있었습니다.

1. 기능별 컴포넌트를 만들면서 컴포넌트별로 공유되어야하는 상태값들이 많다.
   (ex. 메모 컴포넌트와 입력 컴포넌트의 상태에 따라 등록버튼의 활성화...)
2. 위의 문제를 해결하기위해 사용했던 [Event Bus](http://vuejs.kr/jekyll/update/2017/02/13/vuejs-eventbus/)의 경우 이벤트의 이름을 매번 겹치지않게 해줘야한다.
   (HTML id값 처럼)
3. Event Bus로 상태를 관리하게 되면 유지 보수를 할 경우 파편적으로 나뉘어져 있는 코드를 파악하는 비용이 크다.

이러한 이유로 각 컴포넌트의 종속관계에 영향없이 쉽게 상태값을 공유하고 코드의 관리도 한 번에 할 수 있는 [Vuex](<https://vuex.vuejs.org/kr/>)를 적용하기로 했습니다.



#### Vuex의 플로우

Vuex를 사용하기 전에 Vuex가 어떤 플로우로 동작하는지 먼저 알아보겠습니다.

Vuex에서는 4개의 모듈로 구성되어있습니다.

1. State
2. Getter
3. Mutations
4. Actions



##### State

​	컴포넌트에서 공유할 데이터(상태값)가(이) 들어가는 모듈입니다.

##### Getter

 	State에 있는 데이터를 가져오는 함수를 모아놓는 모듈입니다.

##### Mutations

​	State에 있는 데이터를 변경하는 함수를 모아놓은 모듈입니다.

​	동기적으로 데이터를 변경할 경우 사용할 수 있습니다.

##### Actions

​	이벤트를 감지하고 Mutations에 있는 적절한 함수를 실행시키는 함수를 모아놓은 모듈입니다.

​	API호출 이후 비동기적으로 데이터를 변경해야하는 경우 사용됩니다.



이렇게 놓고보니 State에 있는 데이터를 바로 접근해서 가져오면 되지않나? 데이터 변경도 Mutations을 거치지 않고 State에 바로 접근해서 변경하면 되지 않나? 라는 생각이 먼저 들었습니다.

하지만 Vuex에서는 직접적으로 데이터에 접근하는 것을 지양하고 있습니다. 그 이유는 Getter, Mutations, Actions이란 절차를 거치면서 코드의 흐름을 파악하기 쉬워지고 devtools의 기록이 남아 시간의 흐름에 따라 디버깅하기 편하기 때문입니다.

결국 Vuex는 State에 데이터가 저장되고 Component에서는 Getter를 통해 State의 데이터를 가져오고 데이터를 변경하기 위해서는 Actions혹은 Mutations를 이용해  State의 데이터를 변경하게 됩니다.
(State -> Getter -> Component -> Actions(동기)/Mutations(비동기) -> State)

![vuex flow](https://vuex.vuejs.org/vuex.png)



#### 폴더 구성

```
<Project>
    |-- __mocks__
    |-- __test__
    |       `-- store.test.js
    |-- common
    |-- components
    |-- *store*
    |      |-- index.js (Vue에서 Vuex를 사용하겠다는 선언)
    |      |-- actions.type.js (Vuex의 Actions로 사용될 함수명 모음)
    |      |-- mutations.type.js (Vuex의 Mutations으로 사용될 함수명 모음)
    |      `-- <project>_module.js (Vuex의 Store역할)
    |
    `-- <project>.js (Vuex 적용)
```



#### index.js

Vuex를 모듈로서 사용하기 위해서는 우선적으로 Vue에서 Vuex를 사용한다는 선언이 필요합니다.

```javascript
import Vue from 'vue/dist/vue.common.js'
import Vuex from 'vuex'

Vue.use(Vuex);
```

이렇게 선언을 하고 vuex에서 저장소로 사용할 모듈을 지정 해줍니다.

```javascript
import example from './example_module.js'

export default new Vuex.Store({
  modules: {
    example
  }
});
```

이제 Vuex를 사용할 준비가 되었습니다.



#### actions.type.js

Vuex에서 사용될 actions 함수명을 모아놓고 export합니다.

```javascript
export const callDetailData = 'callDetailData'
```

이렇게 actions의 함수를 모아놓지 않고 Vuex에서 함수를 선언해서 바로 사용 할 수 있지만 이렇게 따로 분리하는 이유는 유지 보수를 위해서 입니다. Vuex란 하나의 저장소를 수많은 컴포넌트들이 접근하기 때문에 데이터를 get/set하기 위해서는 수많은 함수가 만들어질 수 밖에 없습니다. 이 때 사용되고 있는 함수를 편하게 인덱스하기 위해서 입니다.

사실 지금은 책자의 Index(목차) 같은 역할을 할 뿐이라 Vuex에서 함수가 많아졌을때 비대해지는건 그대로입니다. 추후 Vuex가 너무 비대해지면 로직을 따로 분리할 때 여기에 actions 함수들만 분리할 수도 있습니다.



#### mutations.type.js

Vuex에서 사용될 mutations 함수명을 모아놓고 export합니다.

```javascript
export const setDetailData = 'setDetailData'
export const setLoadingStatus = 'setLoadingStatus'
```

mutations 함수를 따로 분리하는 이유는 actions.type.js와 마찬가지로 유지 보수를 편하게 하기 위해서 입니다. 추후 mutations 함수들만 분리할 수도 있습니다.



#### Project_modules.js

Vuex에서 Store 역할을 합니다.(핵심)

```javascript
import {
  callDetailData
} from './actions.type'

import {
  setDetailData,
  setLoadingStatus
} from './mutations.type'

import ApiService from '@/js/pro_proofreading/common/api.service'
import {Common} from '@/js/common/Common'

const state = {
  detailData: null,
  loading: true,
  req_id: window.req_id
}

const getters = {
  getDetailData (state) {
    return state.detailData
  },
  getLoading (state) {
    return state.loading
  }
}

const mutations = {
  [setDetailData](state, payload) {
    state.detailData = payload.detailData
  },
  [setLoadingStatus](state, payload) {
    state.loading = payload.loadingStatus
  },
}

const actions = {
  async [callDetailData](context, payload) {
    await ApiService.getProProofreadDetailData(payload.req_id)
      .then(res => {
        context.commit(setDetailData, { detailData: res })
        context.commit(setLoadingStatus, { loadingStatus: false })
      })
      .catch((error) => {
        Common.methods.__error__(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
```



#### Project.js

Vuex의 Store를 Vue객체에 주입해주면 하위 컴포넌트들에서도 Store에 접근 할 수 있게 됩니다.

```javascript
import Vue from 'vue/dist/vue.common.js'
import store from './store'

new Vue({
  el: '#project'
  store,
})
```

이렇게 사용할 수 있는 이유는 index.js에서 `Vue.use(Vuex)`로 선언해줬기 때문에 가능합니다.



#### 테스트

```javascript
import {shallowMount, mount, createLocalVue} from '@vue/test-utils'
import _ from 'underscore'
import {axios} from '@/js/crowd_proofreading/__mocks__'
import {mockAPIData} from '@/js/pro_proofreading/__mocks__'
import ProProofreadingModule from '@/js/pro_proofreading/store/pro.proofreading.module'
import { callDetailData } from '@/js/pro_proofreading/store/actions.type'
import { setDetailData, setLoadingStatus } from '@/js/pro_proofreading/store/mutations.type'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store 확인', () => {
  let store = null
  const req_id = 1
  beforeEach(async () => {
    store = new Vuex.Store({
      state: _.extend({}, ProProofreadingModule.state),
      getters: ProProofreadingModule.getters,
      mutations: ProProofreadingModule.mutations,
      actions: ProProofreadingModule.actions
    })
    axios.get.mockImplementation((url) => {
      let data = {}
      if (url === '/api/1.3/pf/pro/1') {
        data = mockAPIData['/api/1.3/pf/pro/:req_id'].default
      }
      return Promise.resolve({data})
    })
  })
```



#### 규칙

- 2개 이상의 컴포넌트에서 같이 사용하는 데이터일 경우 Vuex로 관리한다.

#### 생각해볼 점

- Vuex로 관리되는 Actions, Mutations의 길이가 관리가 안될 정도로 길어진다면 함수 자체를 모듈로 따로 뺄 수도 있을 것 같다.
- 왜 Vuex에서는 mutation, action 이란 이름으로 사용할까?
  (아마도 state를 변경한다는 의미에서 mutation이라고 했을 것 같다. mutaion을 getter처럼 setter로 했다면 Action을 어떤 이름으로 불러야 했을까?)