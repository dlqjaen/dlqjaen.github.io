---
layout: post
title: "DOM VS Virtual-DOM"
date: 2017-09-18 10:12:43 +0900
<!-- img: -->
categories: JavaScript
---
jQuery와 Vue.js의 차이점 중 하나였던 돔(DOM)과 가상돔(Vuertual DOM)이 뭔지 알아보도록 하겠습니다.

### DOM(Document Object Model)
DOM은 HTML 문서의 요소들에 접근하는 방법을 제공해주는 API입니다.

window 객체의 document 프로퍼티를 통해서 DOM을 사용할 수 있으며 HTML의 요소들을 생성, 선택, 수정, 삭제를 할 수 있습니다.

아래 이미지는 DOM Tree입니다.
웹페이지가 요청되면 DOM이 제일 먼저 document객체를 통해 html객체를 생성하고 head객체와 body객체를 생성하는 순서로 트리구조를 만들어가는 것을 보여줍니다.
![Dom Tree](http://pautasso.info/lectures/w13/sa3/3-js/img/dom-tree.svg)

#### DOM의 문제점 
이런 DOM에는 치명적인 문제점이 있습니다. 

DOM의 Document로 생성된 html요소들의 스타일이 변경되면 html객체부터 다시 생성하기 시작합니다. 그렇기 때문에 스타일 하나가 적용되기까지는 시간이 많이 걸립니다.(속도가 느리다)

SPA(Single Page Application)의 사이트인 경우에는 DOM 트리의 크기는 엄청나게 클 것이고 동적으로 변해야하는 UI들을 감당하게 벅찰 것입니다. 

이런 문제점을 해결하고자 나온 방법이 Virtual DOM을 사용하는 것입니다.

### Virtual DOM(Document Object Model)
Virtual DOM은 실제 DOM을 가볍게하여 따로 복사해놓는 추상화된 돔입니다.

Virtual DOM은 요소의 스타일이 변경되면 변경되기 전의 추상화된 돔과 변경 후의 추상화된 돔을 비교하여 바뀐 부분만을 찾아 실제돔에 적용을 시킵니다.

그렇기 때문에 속도가 월등히 빠릅니다.

#### Virtual DOM 사용하는 프레임워크
이런 Virtual DOM을 사용하는 프레임워크는 Vue.js, React가 있습니다.

### 참고
[돔과 가상돔의 차이점](http://webframeworks.kr/tutorials/translate/virtual-dom/){: target="_blank" }