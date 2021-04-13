### 1장

React.createElement(elementName, data, child)

elementName: HTML태그명, 직접 만든 컴포넌트 클래스

data: 속성, 상위 컴포넌트로 부터 받는 값

child: 자식 엘리먼트, 내부 텍스트



### 2장

createElement로 다중 커스텀 엘리먼트 붙이기

```javascript
var h1 = React.createElement('h1', null, 'test')
React.createElement('dev', null, h1, h1)
```

새로운 컴포넌트 클래스는 구현할 때 `render()` 매서드를 반드시 포함해야 한다.

속성값을 넘기면 `this.props` 로 데이터를 받아서 사용할 수 있다.

```javascript
class HelloWorld extends React.Component {
  render() {
  	return React.createElement('dev', null, h1, h2,
      React.createElement('h3', this.props, this.props.title)
    )
  }
}
ReactDOM.render(
  React.createElement(HelloWorld, {title: 'test'}),
  document.getElementById('content')
)
```



### 3장

`React.createElement('h1', null, '')` 대신 `React.Dom.h1(null, '')` 을 이용할 수 있다.

바벨만 설치해서 jsx파일을 js파일로 변환할 수 있다.

```bash
$ ./node_modules/.bin/babel js/script.jsx -o js/script.js
```

HTML과 JSX의 다른 점

- JSX에서 단일 태그에는 `/` 를 반드시  포홤되어야한다.

- 위험한 HTML 구문에 ㄷ해 자동으로 이스케이프 처리한다.

- 특수문자 표시방법

  - ```jsx
    <span>{[<span key="specialChars">&copy;&mdash;&ldquo;<span>]}</span>
    ```

  - 소스 코드에 특수문자를 직접 복사해서 넣는다. (UTF-8 문자셋)

  - `String.fromCharCde(charCodeNumber)` 를 이용ㅎ서 유니코드 문자로 번호에서 문자로 변경

class -> className

for -> htmlFor