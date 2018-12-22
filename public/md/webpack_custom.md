## Webpack 커스터마이징

vue-cli를 통해 만들어져있던 기존의 Blog는 webpack을 원하는대로 커스텀하지 못 할 정도로 복잡한 코드들로 이루어져 있었다. 그래서  webpack의 구성과 각 라이브러리들의 용도를 파악하고 관리가 가능하도록 webpack을 처음부터 설치 - 설정 하는과정을 기록한다.



> npm으로 webpack 설치

```bash
//webpack 코어
$npm install webpack --save-dev
//webpack 확장
$npm install webpack-command --save-dev
```

`--save-dev` 옵션을 이용하여 `package.json` 의 `devDependencies` 에 webpack설치를 기록한다.



> webpack.config.js 작성

```javascript
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname , './dist/bundle'),
    filename: '[name].js'
  }
}
```

1. `webpack`설치가 끝나면 `package.json`이 위치한 루트에서 `webpack.config.js` 파일을 생성한다.(compile 및 bundle할 파일과 compile 및 bundle 시 적용할 옵션을 설정하는 파일)
2. `mode` 는 개발용 빌드인지 배포용 빌드인지를 설정해 번들되어 나오는 결과 파일의 형태를 설정하게 해준다.(minify가 되어나온다던지..하는 설정)
3. `entry` 는 번들이될 파일을 설정하는 부분으로 `key: value` 형식의 객체를 할당받는데 `key` 부분이 번들이 되어 나올 파일의 이름이 된다.(output에서 따로 설정하지 않는다면) `value` 부분은 번들이 될 파일들의 경로를 배열형식으로 받는다.
4. `output` 은 번들이되어 나올 파일의 옵션을 설정하는 부분으로 `entry` 와 마찬가지로 `key: value` 형식의 객체를 할당받는다. `path` 는 번들되어 나올 파일이 위치할 경로를 설정한다. `filename` 은 번들되어 나올 파일의 이름을 설정한다.(filename을 설정하지 않으면 `entry` 의 `key` 값이 파일이름이 된다.)



> es6를 적용하기 위한 babel 설치 및 적용

```bash
//babel 코어
$npm install babel --save-dev
//webpack에서 bable을 적용하기 위한 loader 
$npm install babel-loader --save -dev
```

`npm install `로 `Babel` 코어와 `loader` 를 설치한다.

1. `webpack`은 모든 파일을 모듈로 관리를 하는데 `webpack`자체는` .js` 코드밖에 모르기 때문에 `.js`파일이 아닌 `css, html, 이미지` 등등의 파일들을 스크립트 형식으로 전환해줄 수 있는 장치가 필요하다. 이런 장치의 역할을 하는 것이` loader`이다.



```javascript
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
    ],
  },
  output: {
    path: bundlePath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
}
```

`babel` 설치가 되면 `web pack.config.js`에서 번들이되는 `.js`파일에 `babel`이 적용되도록 설정을 작성한다.

1. `test` 는 loader를 적용시킬 파일들을 걸러내는 역할을 하는데 정규식으로 파일들을 걸러낸다.
2. `exclude` 는 `loader`의 경로를 설정해주는 부분이다.
3. `loader` 는 사용할 `loader`를 설정하는 부분이다.

이렇게 모든 설정이 끝나면 마지막으로 package.json파일을 설정한다.



> Package.json 설정하기

```json
{
  "name": "dlqjaen.github.io",
  "version": "1.0.0",
  "description": "DuDu's blog",
  "author": "Lee BeomDu <a01055255417@gmail.com>",
  "private": true,
  "scripts": {
    "build": "webpack --config ./webpack.config.local.js --watch"
  },
  "dependencies": {},
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "webpack": "^4.16.3",
    "webpack-command": "^0.4.1"
  }
}

```

우선 `webpack`으로 번들링할 목적이 개발에서 사용할 파일들이라 `webpack.config.js` 파일을`webpack.config.local.js`로 이름을 좀더 직관적으로 수정하였다. 그런다음 `package.json` 파일에서 webpack을 실행하기위한 스크립트를 작성한다. 

 `build` 라는 명령어를 등록해놓고 실행될 순서를 작성해준다. `webpack --config ./webpack.config.local.js --watch`  

이 코드를 해석해보면 `webpack`을 실행하는데 `config파일`의 경로는 `./webpack.config.local.js` 이고 `지속적으로 관찰`하겠다고 선언했다. 



> webpack 실행

package.json 파일이 위치한 경로로 이동한 후 등록해뒀던 명령어로 실행을 한다.

```bash
$npm run build
```

꼭 package.json으로 실행하지 않더라도 webpack.config.local.js가 위치한 경로에서 `$webpack --watch`를 하더라도 같은 동작으로 webpack이 실행된다.



### webpack 더 알아보기

> CSS파일 번들링하기

자바스크립트 파일뿐 아니라 CSS파일도 번들링 해보려고 한다. CSS를 번들링 하기 위해서는 `css-loader`와 `style-loader`가 필요하다. 만약 `sass나 less의 css전처리기`를 사용한다면 `sass-loader, less-loader`가 추가적으로 필요하다.

```bash
$npm install css-loader --save-dev
$npm install style-loader --save-dev
//경우에 따라
$npm install sass-loader --save-dev
$npm install less-loader --save-dev
```

`webpack`은 앞서 설명했던 것과 같이 `js`밖에 모르기 때문에 CSS를 번들하기 위해서는 css코드를 js코드로 변화시켜줄 `loader`가 필요한데 `css-loader`가 이 역할을 해준다. 이렇게 js화된 css코드를 DOM에 붙여야 실제 css코드로서 작동을 할 수 있는데 DOM에 붙일 수 있도록 코드를 수정해주는 역할을 `style-loader`가 하게된다.

경우에 따라 설치한 `전처리기 loader`는 css를 js코드로 변환하기 전에 각 전처리기로 되어있던 코드를 `css코드로 변환`하기 위해서 필요하다.

이렇게 필요한 loader들을 설치하고 이제 webpack에서 설정을 해야한다.

```javascript
const path = require('path');
const bundlePath = path.resolve(__dirname , './dist/bundle');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
      './js/posting.js',
      './css/init.css',
      './css/util.css',
      './css/header.css'
    ],
  },
  output: {
    path: bundlePath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
      	test: /\.css$/,
      	use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

`webpack.config.local.js`파일의 `rules`에 css를 걸러내는 정규식을 작성하고 use를 이용해 loader를 사용한다. 여기서 주의 해야할 점이 있는데, use로 작성한 배열의 순서에 따라 webpack의 동작이 달라진다. 요지는 배열 순서의 역순으로 loader가 실행된다. 배열로 따지면 인덱스가 0인 loader가 가장 마지막에 실행된다는 이야기이다.

css-loader가 먼저 실행되어야 하기 때문에 배열의 마지막에 css-loader를 선언한다.

만약 css 전처리기 loader를 적용해야 한다면 `['style-loader', 'css-loader', 'sass-loader 혹은 less-loader']` 의 형태로 작성되어야 한다.

이제 webpack을 실행해서 번들링된 `app.js`를 html에 로드하게 되면 css까지 같이 적용된 화면을 볼 수 있다.



>CSS파일만 따로 뽑아내기

보통 프로젝트 개발을 하게되면 URL하나에 HTML, CSS, JS 한 묶으로 만들어지게 된다. 이렇게 작업된 다수의 파일들을 배포하기 위해 webpack으로 번들링하게 되고 이때 하나의 이름으로 JS파일 HTML파일 CSS파일을 따로 관리할 필요성이 생긴다. 이번에는 각 형식의 파일들을 따로 뽑아내보도록 한다.

 `extract-text-webpack-plugin` 란 라이브러리를 사용하여 진행을 했다. 이 라이브러리는 CSS뿐만아니라 이미지, HTML등 다양한 형식의 파일들을 각각의 형식파일 하나로 빼낼 수 있다.

```bash
$npm install extract-text-webpack-plugin --save-dev
```

우선  `extract-text-webpack-plugin` 라이브러리를 설치해준다. 이후 `webpack.config.local.js` 에서 설정을 한다.

```javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundlePath = path.resolve(__dirname , './dist/bundle');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
      './js/posting.js',
      './css/init.css',
      './css/util.css',
      './css/header.css'
    ],
  },
  output: {
    path: bundlePath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
}
```

상단에서 설치한 라이브러리를 `ExtractTextPlugin` 변수에 담고 `module` 다음에 `plugins` 를 만들고 `ExtractTextPlugin` 인스턴스 객체를 생성한다. 이 때 전달 인자로 따로 빼낼 CSS의 이름을 정해준다.

그 후 `module`에서 css를 걸러내는 부분에서 생성한 `ExtractTextPlugin` 인스턴스의 `extract`함수의 인자로 객체를 넘겨준다. 이 때 `fallback` 의 키값으로 넘겨준 loader가 가장 마지막에 실행된다. 그리고 use는 위에서 설명했던 순서대로 실행이 된다.

이렇게 설정을 하고 webpack을 실행하면 webpack이 실행되지 않는다.

![에러 이미지](https://user-images.githubusercontent.com/8310677/36646814-e5ecfbe2-1a7c-11e8-9a01-89c196249b2e.png)

 현재 설치되어있는 `ExtractTextPlugin`라이브러리의 버전이  `^4.0.0-beta.0` 일 경우 나타나는 에러이다.

```bash
$npm i -D extract-text-webpack-plugin@next
```

위 코드를 실행하면 해결이 가능하다.

