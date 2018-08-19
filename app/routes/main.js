module.exports = (app, fs) => {
  const posting_feed = [
    {
      title: 'Webpack 커스텀하기',
      contents: 'vue-cli를 통해 만들어져있던 기존의 Blog는 webpack을 원하는대로 커스텀하지 못 할 정도로 복잡한 코드들로 이루어져 있었다. 그래서  webpack의 구성과 각 라이브러리들의 용도를 파악하고 관리가 가능하도록 webpack을 처음부터 설치 - 설정 하는과정을 기록한다.',
      img: 'https://hyunseob.github.io/images/webpack.png',
      date: '2018/08/12',
      key: 'webpack_custom'
    },
    {
      title: 'Profile Testcase',
      contents: 'Vue를 Profile_page에 적용하면서 발생했던 이슈 혹은 배포 후 발생한 이슈를 대응 또는 추후 수정 보완에 있어 편의성을 위하여 테스트 케이스 작성을 하게되었다.',
      img: 'https://antfroger.github.io/slides-javascript-unit-testing/images/qunit.png',
      date: '2018/08/19',
      key: 'profile_page_test'
    } 
  ];

  app.get('/', (req, res) => {
    res.render('index.html', {posting_feed});
  })
}