// Load Components
import posting from '../components/contents/posting'
import portfolio from '../components/contents/portfolio'
import about from '../components/contents/about'
import contact from '../components/contents/contact'
import detailedPosting from '../components/posting/detailed-posting'

// Route Setting
export const routes = [
  {path: '/', component: posting},
  { path: '/posting', component: posting },
  { path: '/portfolio', component: portfolio },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
  { path: '/posting/:id', component: detailedPosting }
]
