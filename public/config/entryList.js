const indexPosting = () => {
  const script = ['./js/index.js']
  return [...script]
}
const mdList = () => {
  const md = [
    './md/webpack_custom.md',
    './md/profile_page_testcase.md'
  ]
  return [...md]
}

module.exports = {
  md_list: mdList(),
  route_index_posting: indexPosting()
}