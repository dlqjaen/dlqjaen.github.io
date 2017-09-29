import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import postingDefaltImg from '../assets/front-end-posting.png'
import documentImg from '../assets/doctype.jpg'
Vue.use(Vuex, axios)

export const store = new Vuex.Store({
  strict: true,
  state: {
    posting_data: [
      {
        img: 'http://www.hurricanesoftwares.com/wp-content/uploads/2009/05/css-sprites-lead.png',
        date: '2017-09-20',
        title: 'Image Sprite',
        description: '웹의 성능을 향상시키는 방법은 여러가지가 있지만 웹 사이트에서 빠질 수 없는 이미지를 불러오는 방식에서도 웹 성능을 향상시킬 수 있습니다.',
        tag: '#CSS',
        content: `<p>웹의 성능을 향상시키는 방법은 여러가지가 있지만 웹 사이트에서 빠질 수 없는 이미지를 불러오는 방식에서도 웹 성능을 향상시킬 수 있습니다.</p>
        
        <p>그 방법이 Image Sprite기법입니다.</p>
        
        <h3>Image Sprite 기법</h3>
        
        <p>Image Sprtite 기법은 웹에서 자주쓰이는 이미지들을 하나의 큰 이미지(배경이 투명한 이미지)에 필요한 이미지들을 모아 딱 한 번만 이미지를 불러온 후 background-image, background-position 속성을 이용해서 필요한 곳에 필요한 이미지의 부분만 보여주는 방식을 말 합니다.</p>
        
        <p>매번 이미지들을 불러왔을 경우 이미지들을 계속 다운받아 화면에 출력해야 하기에 이미지를 다운로드 하는 시간 + 화면에 출력하는 시간이 걸리지만 Image Sprite 기법을 사용했을 경우에는 웹사이트 초기 로딩시 한 번만 다운받아 이미지를 사용하기에 웹 로딩이 생기지 않습니다.</p>
        
        <p>또 한정된 자원을 사용해야하는 모바일 환경에서 Image Sprite기법은 웹 페이지 로딩시간을 단축시켜줍니다.</p>
        
        <h3>Image Sprite를 도와주는 도구</h3>
        
        <p>Image Sprite기법을 사용하기 위해선 일일이 그래픽 프로그램에서 여러 개의 그림을 하나의 이미지로 합쳐야 하고 실제 웹에서 CSS 적용을 위한 그림의 좌표값을 얻기란 번거로울 수가 있습니다.</p>
        
        <p>그래서, 이런 작업을 자동화해주는 도구들이 개발돼서 한둘씩 생겨나고 있는데, 대표적으로 Website Performance | CSS Sprite Generator가 있습니다.</p>
        
        <p>이곳에서는 이미지들을 하나로 묶은 압축 파일(zip)을 올려놓으면 약간의 설정만으로 Sprite 이미지와 함께 CSS 적용 rule까지 한꺼번에 얻을 수 있어서 편합니다.</p>
        
        <h3>참고</h3>
        
        <p><a href="https://windtale.net/blog/css-image-sprite-automation-with-grunt-spritesmith/" target="_blank">CSS 이미지 스프라이트 자동화 (With Grunt-spritesmith)</a></p>`
      },
      {
        img: 'https://www.enis.or.kr/new/images/main/mainVisu.png',
        date: '2017-09-19',
        title: '동기 통신 VS 비동기 통신',
        description: '자바스크립트는 싱글 스레드로 동작하기 때문에 기본적으로 동기방식의 진행을 하게됩니다. 하지만 바닐라 자바스크립트자체도 무거워지면서 비동기 방식의 통신을 따로 구현해야 할 상황이 되었습니다.',
        tag: '#JavaScript',
        content: `<p>자바스크립트는 싱글 스레드로 동작하기 때문에 기본적으로 동기방식의 진행을 하게됩니다. 하지만 바닐라 자바스크립트자체도 무거워지면서 비동기 방식의 통신을 따로 구현해야 할 상황이 되었습니다.</p>
        
        <h3>동기통신(Sync)</h3>
        
        <p>동기통신은 일정신호를 전달한 후 전달된 신호의 답신이 오면 다음 신호를 전달하는 식의 통신으로 작업이 들어온 순서에 맞게 하나씩 진행됩니다.</p>
        
        <p>또 동기 통신은 순서에 맞게 빨리빨리 진행되는 장점이 있지만, 여러 가지의 일을 동시에 처리할 수 없다는 단점이 있습니다. 이런 불편한 점으로인해 비동기통신방식이 만들어졌다고 할 수 있습니다.</p>
        
        <h3>비동기통신(Async)</h3>
        
        <p>비동기통신은 통신이 시작되면 한번에 모든 신호를 다 보내고 그 결과값을 받아 함수(콜백함수)를 실행시킵니다.</p>
        
        <p>그렇기 때문에 비동기통신 방식은 여러일을 동시에 처리할 수 있지만, 동기통신 방식보다 속도가 느릴 수 있습니다.</p>
        
        <p>상황에 따라서는 콜백함수들이 하나씩 늘어나면서 코드를 알아보기 힘들어지거나 코드 유지, 보수가 힘들어지기도 합니다.
        이런 점을 해결하기위해서 콜백함수를 패키지로 묶는 작업을 하게되고 Promise가 탄생하게 됩니다.</p>
        
        <h3>참고</h3>
        
        <p><img src="https://github.com/demun/FrontEndStudy/raw/master/document/Javascript/images/seongeun_01.jpg" alt="동기통신과 비동기통신을 설명한 그림" title="" /></p>`
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmB9XFXm506TcxBHpMZ8GKZvE9IhlIevY6iRPAWNrE1y6D-a4',
        date: '2017-09-18',
        title: 'DOM VS Virtual-DOM',
        description: 'jQuery와 Vue.js의 차이점 중 하나였던 돔(DOM)과 가상돔(Vuertual DOM)이 뭔지 알아보도록 하겠습니다.',
        tag: '#JavaScript',
        content: `<p>jQuery와 Vue.js의 차이점 중 하나였던 돔(DOM)과 가상돔(Vuertual DOM)이 뭔지 알아보도록 하겠습니다.</p>
        
        <h3>DOM(Document Object Model)</h3>
        
        <p>DOM은 HTML 문서의 요소들에 접근하는 방법을 제공해주는 API입니다.</p>
        
        <p>window 객체의 document 프로퍼티를 통해서 DOM을 사용할 수 있으며 HTML의 요소들을 생성, 선택, 수정, 삭제를 할 수 있습니다.</p>
        
        <p>아래 이미지는 DOM Tree입니다.
        웹페이지가 요청되면 DOM이 제일 먼저 document객체를 통해 html객체를 생성하고 head객체와 body객체를 생성하는 순서로 트리구조를 만들어가는 것을 보여줍니다.</p>

        <p><img src="http://pautasso.info/lectures/w13/sa3/3-js/img/dom-tree.svg" alt="Dom Tree" title="" /></p>
        
        <h4>DOM의 문제점</h4>
        
        <p>이런 DOM에는 치명적인 문제점이 있습니다.</p>
        
        <p>DOM의 Document로 생성된 html요소들의 스타일이 변경되면 html객체부터 다시 생성하기 시작합니다. 그렇기 때문에 스타일 하나가 적용되기까지는 시간이 많이 걸립니다.(속도가 느리다)</p>
        
        <p>SPA(Single Page Application)의 사이트인 경우에는 DOM 트리의 크기는 엄청나게 클 것이고 동적으로 변해야하는 UI들을 감당하게 벅찰 것입니다.</p>
        
        <p>이런 문제점을 해결하고자 나온 방법이 Virtual DOM을 사용하는 것입니다.</p>
        
        <h3>Virtual DOM(Document Object Model)</h3>
        
        <p>Virtual DOM은 실제 DOM을 가볍게하여 따로 복사해놓는 추상화된 돔입니다.</p>
        
        <p>Virtual DOM은 요소의 스타일이 변경되면 변경되기 전의 추상화된 돔과 변경 후의 추상화된 돔을 비교하여 바뀐 부분만을 찾아 실제돔에 적용을 시킵니다.</p>
        
        <p>그렇기 때문에 속도가 월등히 빠릅니다.</p>
        
        <h4>Virtual DOM 사용하는 프레임워크</h4>
        
        <p>이런 Virtual DOM을 사용하는 프레임워크는 Vue.js, React가 있습니다.</p>
        
        <h3>참고</h3>
        
        <p><a href="http://webframeworks.kr/tutorials/translate/virtual-dom/" target="_blank">돔과 가상돔의 차이점</a></p>`
      },
      {
        img: 'data:image/jpeg;base64,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',
        date: '2017-09-17',
        title: 'jQuery VS Vue.js',
        description: 'Front-End 기술면접을 보다보면 면접질문으로 jQuery와 Vue.js의 차이점을 물어보는 경우가 있습니다. 이 질문의 의도는 라이브러리와 프레임워크의 차이점을 알고 있는지에대해 물어보는 것이라 생각합니다.',
        tag: '#JavaScript',
        content: `<p>Front-End 기술면접을 보다보면 면접질문으로 jQuery와 Vue.js의 차이점을 물어보는 경우가 있습니다. 이 질문의 의도는 라이브러리와 프레임워크의 차이점을 알고 있는지에대해 물어보는 것이라 생각합니다.</p>
        
        <h3>JavaScript 라이브러리</h3>
        
        <p>우선, JavaScript의 라이브러리란 네이티브 스크립트에는 없는 함수(기능)들을 함수로 만들어서 묶어놓은 JavaScript 파일이라고 할 수 있습니다. 이런 라이브러리들은</p>

        <ul>
        <li><strong>DOM 조작</strong></li>
        <li><strong>DOM 이벤트</strong></li>
        <li><strong>AJAX / 데이터 검색</strong></li>
        <li><strong>효과 &amp; 애니메이션</strong></li>
        <li><strong>HTML 템플릿</strong></li>
        <li><strong>페이지 레이아웃</strong></li>
        <li><strong>UI 위젯</strong></li>
        <li><strong>그래픽 &amp; 차트</strong></li>
        <li><strong>데이터 모델링</strong></li>
        <li><strong>라우팅 &amp; 탐색</strong></li>
        <li><strong>접근성</strong></li>
        <li><strong>다중 브라우저 지원</strong></li>
        <li><strong>모바일 지원</strong></li>
        </ul>
        
        <p>등의 다양한 부분에 관하여 새로운 함수(기능)을 개발자들이 쓰기 편하도록 만들어져 있습니다.</p>
        
        <p>라이브러리에 따라 아주 작은부분의 역할만 하는 라이브러리는 미니라이브러리, 마이크로 라이브러리라고도 합니다.</p>
        
        <p>우리가 알아보고자하는 jQuery는 DOM API, 윈도우 메소드 기능들을 더 쉽게 사용할 수 있도록 도와주는 라이브러리입니다.</p>
        
        <p>그렇다면 비교해볼 Vue.js는 뭘까요?</p>
        
        <h3>JavaScript 프레임워크</h3>
        
        <p>Vue.js는 JavaScript 프레임워크 입니다. 프레임워크는 라이브러리와 달리 애플리케이션의 틀과 구조를 결정하고 그 위에 개발된 개발자의 코드를 제어합니다.</p>
        
        <p>프레임워크는 구체적이며 확장 가능한 기반 코드를 가지고 있으며, 설계자가 의도하는 여러 디자인 패턴의 집합으로 구성되어 있습니다.</p>
        
        <p>즉, 프레임워크는 설계의 기반이 되는 부분을 기술한 확장 가능한 기반 코드와
        사용자가 이 코드를 자기 입맛대로 확장하는 데 필요한 라이브러리 이 두 가지 요소가 통합되어 제공되는 형태라고 할 수 있습니다.</p>
        
        <p><strong>결국 Vue.js를 사용하여 개발을 하면서 jQuery도 적용시켜 개발할 수 있는 것 입니다.</strong></p>
        
        <h3>jQuery와 Vue.js의 다른 차이점</h3>
        
        <p>지금까지 jQuery와 Vue.js의 가장 큰 차이점인 라이브러리와 프레임워크에 대해 알아봤습니다.</p>
        
        <p>그렇다면 본격적으로 jQuery와 Vue.js의 다른 차이점은 뭐가 있을까요?</p>
        
        <table>
          <tr>
            <th><strong>분류</strong></th>
            <th><strong>jQuery</strong></th>
            <th><strong>Vue.js</strong></th>
          </tr>
          <tr>
            <td>개발자</td>
            <td>존 레식</td>
            <td>에반뉴</td>
          </tr>
          <tr>
            <td>배포날짜</td>
            <td>2006.06.30</td>
            <td>2014.02</td>
          </tr>
          <tr>
            <td>종류</td>
            <td>JavaScript 라이브러리</td>
            <td>JavaScript 프레임워크</td>
          </tr>
          <tr>
            <td>접근방식</td>
            <td>실제 DOM에 접근</td>
            <td>가상(Virtual) DOM에 접근</td>
          </tr>
          <tr>
            <td>용량</td>
            <td>270kb</td>
            <td>76kb</td>
          </tr>
          <tr>
            <td>속도(네이티브 스크립트)</td>
            <td>10배 느림</td>
            <td>1.2배 느림</td>
          </tr>
        </table>
        
        <p><a href="http://webframeworks.kr/tutorials/translate/virtual-dom/" target="_blank">돔과 가상돔의 차이점</a></p>
        
        <h3>참고</h3>
        
        <ul>
        <li><a href="http://mygumi.tistory.com/193" target="_blank">Vue.js 와 jQuery 공존하기</a></li>
        <li><a href="http://jokergt.tistory.com/89" target="_blank">Gun's Knowledge Base</a></li>
        </ul>`
      },
      {
        img: 'data:image/jpeg;base64,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',
        date: '2017-09-15',
        title: '시맨틱 마크업 이란?',
        description: '특정 웹사이트를 검색했을 때 검색결과에 웹사이트가 나타나지 않는 경우를 경험해보셨나요? 이런 사이트의 마크업을 보면 대체로 `<div>`로만 마크업이 되어있습니다.',
        tag: '#웹 표준',
        content: `<p>특정 웹사이트를 검색했을 때 검색결과에 웹사이트가 나타나지 않는 경우를 경험해보셨나요?</p>
        
        <p>이런 사이트의 마크업을 보면 대체로 <strong>&lt;div&gt;</strong>로만 마크업이 되어있습니다.</p>
        
        <p>이렇게 <strong>&lt;div&gt;</strong>로만 작성된 사이트는 검색 봇이 <strong>웹사이트의 타이틀과 내용 제대로 크롤링을 하지 못해서 검색에 노출되지 않습니다.</strong></p>
        
        <p>사이트를 방문하는 사용자들의 <strong>접근성을 생각한다면 시멘틱한 마크업으로 웹 사이트를 제작해야 할 필요</strong>가 있습니다.</p>
        
        <h3>시맨틱 마크업</h3>
        
        <p>Semantic Markup은 <strong>W3C에서 지정한 권고안에 맞도록 HTML을 구성하는 것</strong>입니다.</p>
        
        <h3>시맨틱 마크업의 중요성</h3>
        
        <p>시멘틱 마크업은 <strong>적절한 HTML요소를 올바르게 사용</strong>하는 것에서 시작합니다.</p>
        <p><code>
        &lt;div id="header"&gt;Header&lt;/div&gt;
        </code></p>
        <p>위의 마크업은 'id', '내용'으로 이 'div'는 헤드부분이라고 사람은 인식되어지지만 검색 봇은 이를 인지하지 못합니다.</p>
        
        <p><code>
        &lt;header&gt;Header&lt;/header&gt;
        </code></p>
        <p>하지만 위의 마크업처럼 <strong>W3C 권고안에 맞는 요소태그</strong>로 마크업을 하게 된다면 검색 봇은 위의 내용을 웹사이트의 <strong>header부분이라고 안식</strong>하고 검색에 노출 시킬 수 있습니다.</p>
        
        <p>시멘틱 마크업은 검색에 노출시키는 것(SEO) 외에도 <strong>웹 접근성 관점</strong>에서도 스크린리더기를 이용하는 장애인에게 <strong>현재 탭이 위하고 있는 부분이 어떤 부분인지 정확하게 인식</strong>시켜 줍니다.</p>
        
        <p>또 <strong>개발</strong>함에 있어서도 DOM Select부분에서 해당 <strong>요소를 쉽게 선택</strong>할 수 있고 코드의 <strong>가독성도 높아집니다.</strong></p>
        
        <h3>시멘틱 마크업 태그의 종류</h3>
        
        <h4>페이지의 구조를 잡는 태그들</h4>
        
        <ul>
        <li><strong>&lt;header&gt;</strong> 문서나 Section의 상단 정보 영역을 지정합니다.</li>
        <li><strong>&lt;nav&gt;</strong> 문서의 네비게이션을 지정합니다.</li>
        <li><strong>&lt;main&gt;</strong>  문서의 주 컨텐츠영역을 지정합니다. 한 번만 사용가능 하다.</li>
        <li><strong>&lt;section&gt;</strong> 문단구분을 지정합니다.</li>
        <li><strong>&lt;article&gt;</strong> 독립된 컨텐츠영역을 지정합니다.</li>
        <li><strong>&lt;aside&gt;</strong> 페이지의 왼쪽 혹은 오른쪽에 위치한 컨텐츠영역을 지정합니다.</li>
        <li><strong>&lt;footer&gt;</strong> 문서나 Section의 하단 정보 영역을 지정합니다. 한 번만 사용가능 하다.</li>
        </ul>
        
        <h5>Tip</h5>
        
        <p>페이지의 구조를 잡는 태그들은 각각 <strong>&lt;h1&gt; ~ &lt;h5&gt;</strong>요소가 반드시 하나씩은 있어야 한다.</p>
        
        <h4>구조안에서 세부영역을 잡는 태그들</h4>
        
        <ul>
        <li><strong>&lt;address&gt;</strong> <strong>&lt;footer&gt;</strong>영역에서 사용 할 수 있으며 주소, 연락처와 관련된 정보를 기입한다. 한 웹에선 한 번만 사용가능하다.</li>
        <li><strong>&lt;bdi&gt;</strong> 텍스트의 방향이 반대일 경우 사용합니다.</li>
        <li><strong>&lt;details&gt;</strong> 추가정보를 기술하는 영역을 지정합니다.</li>
        <li><strong>&lt;dialog&gt;</strong>  대화상자나 창을 지정하며 open속성을 사용하여 숨기거나 보이도록 할 수 있습니다.</li>
        <li><strong>&lt;figcaption&gt;</strong>  <strong>&lt;figure&gt;</strong> 요소의 제목을 지정합니다.</li>
        <li><strong>&lt;figure&gt;</strong>  문서흐름상 이해를 위해 필요한 그림,동영상등을 포함할때 사용합니다.</li>
        <li><strong>&lt;mark&gt;</strong>  마크되거나 하이라이트된 텍스트.</li>
        <li><strong>&lt;menuitem&gt;</strong>  팝업메뉴의 아이템을 지정합니다.</li>
        <li><strong>&lt;meter&gt;</strong> 설정된 범위안에 특정값을 막대그래프식으로 표현합니다.</li>
        <li><strong>&lt;progress&gt;</strong>  <strong>&lt;meter&gt;</strong>태그와 비슷하게 동작하며 현재 진행되고 있는 수치를 보여줍니다.</li>
        <li><strong>&lt;rp&gt;</strong>  <strong>&lt;rt&gt;</strong>태그가 지원되지않는 브라우저를 위해 사용합니다.</li>
        <li><strong>&lt;rt&gt;</strong>  <strong>&lt;ruby&gt;</strong>태그와 같이 사용합니다.</li>
        <li><strong>&lt;ruby&gt;</strong>  일본어나 중국어에서 글자위에 글자를 쓸때 사용합니다.</li>
        <li><strong>&lt;summary&gt;</strong> <strong>&lt;details&gt;</strong> 요소안에서 제목이나 요약등의 내용을 포함합니다.</li>
        <li><strong>&lt;time&gt;</strong>  날짜/시간 표현</li>
        <li><strong>&lt;wbr&gt;</strong> 줄바꿈위치를 지정합니다.</li>
        </ul>
        
        <h3>참고</h3>
        
        <ul>
        <li><a href="http://misofamily.com/2" target="_blank">MisoFamily</a></li>
        </ul>`
      },
      {
        img: 'http://www.idcalg.com/IMG/jpg/web-standards.jpg',
        date: '2017-09-14',
        title: '웹 표준 이란?',
        description: '하나의 `웹문서가 IE, 크롬, 사파리, 오페라...등등 다양한 브라우저(브라우저엔진)에서 완전히 같은 모습으로 보이는 것은 불가능합니다.` 그렇다면 최대한 비슷하게 만들기 위해선 어떻게 해야할까요?',
        tag: '#웹 표준',
        content: `<p>하나의 <strong>웹문서가 IE, 크롬, 사파리, 오페라...등등 다양한 브라우저(브라우저엔진)에서 완전히 같은 모습으로 보이는 것은 불가능합니다.</strong></p>
        
        <p>그렇다면 최대한 비슷하게 만들기 위해선 어떻게 해야할까요?</p>
        
        <h3>웹 표준</h3>
        
        <p>이 문제를 해결하기 위해 <strong>W3C(World Wide Web Consortium)</strong>는 <strong>표준안</strong>을 지정했습니다.</p>
        
        <p><strong>표준안</strong>에는 <strong>HTML, CSS, JavaScript 등에 대한 규칙</strong>들을 담고 있습니다.</p>
        
        <p>이 표준안을 지켜 웹사이트를 제작하면 <strong>어떤 운영체제나 웹브라우저 상에서도 비교적 동일한 디자인과 기능을 구현</strong>할 수 있습니다.</p>
        
        <h3>웹 표준 장점</h3>
        
        <p>웹표준을 지키면 부단 어느 브라우저에서나 비슷하게 보이는 것 뿐만아니라 다양한 장점이 있습니다.</p>
        
        <ul>
        <li><p><strong>수정 및 운영관리 용이</strong> :
        콘텐츠의 올바른 구조화와 CSS로 시각표현을 통일하여 제어하게 되어 <strong>페이지 제작의 부담 감소 및 관리가 용이하다.</strong></p></li>
        <li><p><strong>접근성 향상</strong> :
        웹 표준을 이용해 작성한 문서는 다양한 브라우징 환경에 대응이 가능하며 <strong>휴대폰, PDA에서도 정상적인 작동 및
        장애인 지원용 프로그램에도 도움</strong>이 되므로 사용자나 접속 장치의 접근성이 용이하다.</p></li>
        <li><p><strong>검색엔진 최적화(SEO)</strong> :
        구조화된 웹페이지는 검색 로봇 수집을 통해 <strong>검색엔진에 효율적으로 노출</strong> 될 수 있도록 검색엔진의 검색결과를 최적화된다.</p></li>
        <li><p><strong>File Size 축소, 서버 저장 공간 절약</strong> :
        효율적인 소스 작성은 <strong>파일 사이즈와 서버공간을 절약</strong>할 수 있으며 동시에 <strong>화면표시에 소요되는 시간을 단축된다.</strong></p></li>
        <li><p><strong>효율적인 마크업</strong> :
        CSS와 HTML문서를 분리하여 제작할 경우 불필요한 마크업이 최소화되어 <strong>페이지 로딩속도 향상된다.</strong></p></li>
        <li><p><strong>호환성 가능</strong> :
        기존 IE브라우저에서만 작동이 가능했던 요소들이 웹 표준을 준수함으로써 <strong>다양한 브라우저대응이 가능하다.</strong>
        (크롬, 파이어폭스, 사파리, 오페라 등)에서도 작동된다.</p></li>
        </ul>
        
        <h3>웹 표준의 필요성</h3>
        
        <p><a href="http://www.thisisgame.com/webzine/nboard/213/?n=56672" target="_blank">웹 표준이 중요한 이유 - 웹툰</a></p>
        
        <h3>웹 표준을 검증하는 서비스</h3>
        
        <p><a href="http://validator.kldp.org/" target="_blank">W3C Mark Up 검증 서비스</a></p>
        
        <p><a href="http://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS Validation 서비스</a></p>
        
        <h3>참고</h3>
        
        <p><a href="http://www.smartebiz.kr/new/subpage02_02.html" target="_blank">웹발전 연구소</a></p>
        
        <p><a href="http://webdir.tistory.com/34" target="_blank">WEBDIR</a></p>`
      },
      {
        img: 'http://changjaeso.com/wp-content/uploads/2015/07/Accessibility_iStock_000018867002XSmall.jpg',
        date: '2017-09-13',
        title: '웹 접근성 이란?',
        description: '우리가 살아가고있는 21세기에는 남녀불평등, 인종차별, 장애인차별등의 인권문제를 해결하기위한 노력을 하고 있습니다. 웹 접근성은 이런 흐름의 하나로 장애뿐만 아닌 모든 사람의 인권을 보장하고자하는 노력입니다.',
        tag: '#웹 접근성',
        content: `<p>우리가 살아가고있는 21세기에는 남녀불평등, 인종차별, 장애인차별등의 인권문제를 해결하기위한 노력을 하고 있습니다. 웹 접근성은 이런 흐름의 하나로 장애뿐만 아닌 모든 사람의 인권을 보장하고자하는 노력입니다.</p>
        
        <h3>웹 접근성을 지키지 못 한 사례</h3>
        
        <p><strong>웹 접근성을 지키지 못해 차별을 당한 사례</strong>는 우리 주변에서 흔히 사용하는 웹사이트에서 찾아 볼 수 있습니다.</p>
        
        <p><a href="http://www.ablenews.co.kr/News/NewsContent.aspx?CategoryCode=0014&amp;NewsCode=001420170907162736910979" target="_blank">에이블뉴스 : 시각장애인들, 온라인몰 3곳 대상 집단소송</a></p>
        
        <p><a href="http://www.ablenews.co.kr/News/Include/NewsContentInc.aspx?CategoryCode=0011&amp;NewsCode=001120170907173907885715" target="_blank">에이블뉴스 : 코레일, 장애인을 진정 소비자로 인식은 하나</a></p>
        
        <p><a href="http://www.newstomato.com/ReadNews.aspx?no=749072" target="_blank">토마토뉴스 : 인터넷 쇼핑 천국? 장애인에겐 '그림의 떡'</a></p>
        
        <h3>웹 접근성의 4대 원칙</h3>
        
        <p>그렇다면 어떻게 해야 웹 접근성을 지킬 수 있을까요?</p>
        
        <p>웹 접근성은 4가지 원칙을 가지고 지켜야 합니다.</p>
        
        <ol>
        <li><strong>인식의 용이성 (Perceivable)</strong> : 모든 콘텐츠는 사용자가 인식할 수 있어야 한다.</li>
        <li><strong>운용의 용이성(Operable)</strong> : 사용자 인터페이스 구성요소는 조작 가능하고 내비게이션 할 수 있어야 한다.</li>
        <li><strong>이해의 용이성(Understandable)</strong> : 콘텐츠는 이해할 수 있어야 한다.</li>
        <li><strong>견고성(Robust)</strong> : 웹 콘텐츠는 미래의 기술로도 접근할 수 있도록 견고하게 만들어야 한다.</li>
        </ol>
        
        <h3>저시력장애인을 위한 WAI-ARIA</h3>
        
        <p><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA" target="_blank">MDN - ARIA</a></p>
        
        <h3>WA마크</h3>
        
        <p>웹 접근성을 지키기위한 노력으로는 국가에서 <strong>웹 접근성을 지킨 웹사이트라는 증거로 WA마크를 부여</strong>하는 정책이 있습니다.</p>
        
        <p>WA마크는 「국가정보화기본법」 제32조의2 및 동법 시행규칙 제3조의3에 의거 과학기술정보통신부에서 지정한 <strong>웹 접근성준수 마크</strong> 입니다.</p>
        
        <p>인증의 <strong>유효기간은 1년이며 매년마다 갱신이 필요</strong>합니다.</p>
        
        <p>WA마크를 부여함으로 인해 기대하는 효과로는
        - 접근성 준수 향상을 통해 <strong>지식정보사회의 정보접근권 제고</strong>
        - <strong>고객 신뢰도 및 만족도 제고와 사회적 공헌</strong>
        - 국내 <strong>웹 개발 환경 개선 및 관련 기술 발전</strong> 촉진
        이 있습니다.
        <img src="http://webwatch.or.kr/imgs/2014_WA_mark2.jpg" alt="WA마크" title="" /></p>
        
        <h4>참고</h4>
        
        <p><a href="http://www.wah.or.kr/" target="_blank">웹 접근성 연구소</a></p>
        
        <p><a href="http://www.websoul.co.kr/" target="_blank">Web Soul Lab</a></p>`
      },
      {
        img: documentImg,
        date: '2017-09-12',
        title: 'DOCTYPE 이란?',
        description: 'DOCTYPE은 HTML문서의 버전을 미리 선언하여 지원하는 요소나 속성들을 어떤 웹브라우저라도 제대로 표현할 수 있도록하는 선언문입니다.',
        tag: '#HTML',
        content: `<p>DOCTYPE은 HTML문서의 버전을 미리 선언하여 지원하는 요소나 속성들을 어떤 웹브라우저라도 제대로 표현할 수 있도록하는 선언문입니다.</p>
        
        <h3>DOCTYPE(DTD)</h3>
        
        <p><strong>DOCTYPE</strong>은 HTML문서의 버전을 미리 선언하여 지원하는 요소나 속성들을 <strong>어떤 웹브라우저라도 제대로 표현</strong>할 수 있도록하는 선언문입니다.</p>
        
        <p><strong>HTML 4.01</strong>의 경우 <strong>SGML</strong>을 기반으로 되어있어서 HTML 4.01에서 <strong>!DOCTYPE</strong> 선언은 <strong>DTD</strong>참조를 해야합니다.</p>
        
        <p><code>
        &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
        "http://www.w3.org/TR/html4/strict.dtd"&gt;
        </code></p>
        
        <p>하지만 <strong>HTML5</strong>는 SGML을 기반이 아니기때문에 <strong>DTD의 참조를 필요로하지 않습니다.</strong></p>
        
        <p><code>
        &lt;!-- HTML5의 문서선언 --&gt;<br>
        &lt;!DOCTYPE html&gt;
        </code></p>

        <p>브라우저는 선언된 doctype에 따라 렌더링할 모드를 선택하게 되는데 이 과정을 <strong>doctype sniffing</strong> 또는 <strong>doctype switching</strong>이라고 합니다.</p>
        
        <h4>참고</h4>
        
        <p><a href="https://ko.wikipedia.org/wiki/SGML" target="_blank">SGML(Standard Generalized Markup Language)</a></p>
        
        <p><a href="https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%ED%98%95%EC%8B%9D_%EC%A0%95%EC%9D%98" target="_blank">DTD(Document Type Definition)</a></p>
        
        <h3>DOCTYPE을 선언하지 않았을 경우?</h3>
        
        <p>HTML문서에서 DOCTYPE을 선언하지 않았을 경우에는<strong>Quirks Mode(쿼크모드)</strong>로 랜더링 됩니다.</p>
        
        <p><strong>Quirks Mode</strong>: 옛 버전의 브라우저(HTML2 ~ HTML4)를 웹페이지의 CSS(Design)를 유지하기 위해 쓰는 웹 브라우저 기술.</p>
        
        <p>IE(Internet Explorer)의 <strong>호환성 보기 헤더(X-UA-Compatible header)</strong>가 설정되지 않을 경우에도 html문서는 <strong>Quicks Mode</strong>로 변경됩니다.</p>
        
        <p><code>
        &lt;head&gt;<br>
        &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;<br>
        &lt;/head&gt;
        </code></p>
        
        <h3>DOCTYPE(DTD)의 필요성</h3>
        
        <ul>
        <li>문서의 가독성 증가</li>
        <li>브라우저 별 호환성 증가(크로스 브라우징)</li>
        <li>문서 제작의 효율성 증가</li>
        </ul>
        
        <h3>HTML Mode</h3>
        
        <p><strong>Strict DTD</strong> :
        W3C가 스타일시트 사용을 장려하기 위해 단계적으로 사라질 ‘표현’(presentation)에 관한 태그와 속성을 배제한 문서 타입입니다. 웹 문서 제작자는 가능하다면 Strict 타입을 사용해야 하지만(should), 불가피하게 표현을 담당하는 속성이 필요할 경우에는 Transitional 타입을 사용할 수도 있습니다.
        </p>
        <p><code>
        &lt;!DOCTYPE html PUBLIC "-//W3C//DTD "+ XHTML 버전 +" Strict//EN" "http://www.w3.org/TR/xhtml1-strict.dtd"&gt;
        </code></p>
        
        <p><strong>Transitional DTD</strong> :
        HTML이전 버전들과의 호환성을 위한 문서 타입입니다. iframe과 새창띄우기(target="_blank")등을 사용할 수 있어 XHTML 사용시 이것을 추천합니다.</p>
        <p><code>
        &lt;!DOCTYPE html PUBLIC "-//W3C//DTD "+ XHTML 버전 +" Transitional//EN" "http://www.w3.org/TR/xhtml1-transitional.dtd"&gt;
        </code></p>
        
        <p><strong>Frameset DTD</strong> :
        Transitional DTD 기반 위에 프레임 지원을 위한 태그와 속성을 추가한 문서 타입입니다.</p>
        <p><code>
        &lt;!DOCTYPE html PUBLIC "-//W3C//DTD "+ XHTML 버전 +"Frameset//EN" "http://www.w3.org/TR/xhtml1-frameset.dtd"&gt;
        </code></p>
        
        <p><strong>XHTML 프롤로그(선언문)</strong> :
        모든 XML문서는 XML 해석 방법을 브라우저에게 말하는 선언문에서 시작된다. XML 선언문 또는 프롤로그는 DOCTYPE과 네임스페이스 선언, 그리고 문서의 타입 또는 마크업 랭귀지를 정의하는 것에 앞서서 정의됩니다.</p>
        <p><code>
        &lt;?xml version="1.0" encoding="UTF-8"?&gt;
        </code></p>
        
        <h4>참고</h4>
        
        <p><a href="https://github.com/uchang7194/FDS-Study/blob/master/DAY01/HTML_Structure.md" target="_blank">uchang7194의 깃헙</a></p>
        
        <p><a href="http://webdir.tistory.com/40" target="_blank">흉내쟁이 블로그</a></p>`
      }
    ],
    setDetailPostingData: {},
    backPosting: {}
  },
  getters: {
    getPostingData (state) {
      return state.posting_data
    },
    getDetailPosting (state) {
      return state.setDetailPostingData
    }
  },
  mutations: {
    setDetailPosting (state, e) {
      state.setDetailPostingData = {
        'title': state.posting_data[e].title
      }
      document.querySelector('.posting-content').innerHTML = state.posting_data[e].content
    }
  }
})
