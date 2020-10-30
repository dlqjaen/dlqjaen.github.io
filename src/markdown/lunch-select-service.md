---
path: '/posting/flitto-lunch'
date: '2019-01-12'
title: 'Flitto Lunch Select Service'
description: '재미있게 점심식당을 고를 수 있으면 좋겠다는 생각에서 시작해 만들게된 서비스'
tags: ['Service']
---
## Flitto Lunch Select Service (FLSS)

하루에도 수 십번 고민한게 만드는 점심! 뭘 먹으면 좋을지 선택하기에는 너무 한정적인 가계와 메뉴 그렇다면 적어도 재미있게 점심식당을 고를 수 있으면 좋겠다는 생각에서 시작해 만들게된 서비스.

#### 계획

1. `타로카드`처럼 `랜덤`으로 생성되는 카드를 선택해서 가계를 고를 수 있도록 만든다.
2. `종류별 버튼`으로 원하는 종류의 가계만 리스트로 만들 수 있도록 한다.
3. `전체선택 버튼`으로 한 번에 모든 종류의 가계 리스트를 만들 수 있도록 한다.
4. `셔플 버튼`으로

![서비스 이미지](../../assets/images/lunch_select_service.png){:width="50%"}

- [서비스 이용하기](http://beomdu.dothome.co.kr/){:target="_blank"}
- [Github 링크](https://github.com/dlqjaen/lunch_select_project){:target="_blank"}

#### 프로젝트 구조
```
root
  |-- index.html
  |-- style.css
  |-- script.js
  `-- picture
```

#### Javascript
```javascript
window.isMobile = function() {
  var check = false;
  // 정규식으로 판별
  return check;
};
```
모바일의 경우

```javascript
// 종류별 가계 데이터
var data =  {
  "korea": ["교동 전 선생", "대원정", "보승회관", "명동칼국수", "쟌슨빌 부대찌개"],
  "chinese": ["리칭", "썬데이 반점"],
  "japanese": ["가츠몽", "유리카모메"],
  "snack_bar": ["김밥천국", "레드바삭"]
};
```