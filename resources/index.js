import css from './css'
import daily from './daily'
import design from './design'
import frontend from './frontend'
import fullstack from './fullstack'
import general from './general'
import html from './html'
import javascript from './javascript'
import php from './php'
import podcasts from './podcasts'
import python from './python'
import ruby from './ruby'
import server from './server'
import utility from './utility'
import icons from './icons'
import accessibility from './accessibility'
import rust from './rust'
import contentCreators from './content-creators'

const sortByTitle = ({ title: titleA }, { title: titleB }) => {
  if(titleA < titleB) return -1
  if(titleA > titleB) return 1
  return 0
}

export default [
  css,
  daily,
  design,
  frontend,
  fullstack,
  general,
  html,
  javascript,
  php,
  podcasts,
  python,
  ruby,
  server,
  utility,
  icons,
  accessibility,
  rust,
  contentCreators,
].sort(sortByTitle)
