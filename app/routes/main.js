module.exports = (app, fs) => {
  const posting_feed = [
    {
      title: 'Webpack 커스텀하기',
      contents: 'vue-cli를 통해 만들어져있던 기존의 Blog는 webpack을 원하는대로 커스텀하지 못 할 정도로 복잡한 코드들로 이루어져 있었다. 그래서  webpack의 구성과 각 라이브러리들의 용도를 파악하고 관리가 가능하도록 webpack을 처음부터 설치 - 설정 하는과정을 기록한다.',
      img: 'https://hyunseob.github.io/images/webpack.png',
      date: '2018/08/12'
    } 
  ];

  app.get('/', (req, res) => {
    res.render('index.html', {posting_feed});
  })
}