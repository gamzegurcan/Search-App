import Home from './components/page/Home';
import Posts from './components/page/Posts';
import PostDetail from './components/page/PostDetail'
import About from './components/page/About';
import Contact from './components/page/Contact';
import PostSearch from './components/page/PostSearch';

const routes = [
  {title:"Ana Sayfa", path:"/", element:Home, isNav: true},
  {title:"Hakkımızda", path:"about", element:About, isNav: true},
  {title:"Posts", path:"posts", element:Posts, isNav: true},
  {title:"Contact", path:"contact", element:Contact, isNav: true},
  {title:"PostDetail", path:"posts/:postId", element:PostDetail, isNav: false},
  {title:"PostSearch", path:"/search", element:PostSearch, isNav: false},
 
]

export default routes;