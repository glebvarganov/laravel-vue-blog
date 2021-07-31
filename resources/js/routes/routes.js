import NotFound from '../views/NotFound'
import Test from '../views/Test'
import Homepage from '../views/Homepage'
import Blog from '../views/Blog'

export default {
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
    ]
}
