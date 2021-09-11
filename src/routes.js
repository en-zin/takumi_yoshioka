import Home from './layout/Home';
import Profile from './layout/Profile';
import About from './layout/About';
import Skill from './layout/Skill';

const routes = [
    { path: '/', component: Home, exact : true },
    { path: '/Profile', component: Profile,},
    { path: '/About', component: About,},
    { path: '/Skill', component: Skill,},
];
  
export default routes;