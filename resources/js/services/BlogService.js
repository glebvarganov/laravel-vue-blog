import axios from 'axios'

const appClient = axios.create({
    baseURL: 'https://blog.test/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getBlogPosts() {
        appClient.get('/posts')
    },
    getBlogPost(id) {
        appClient.get('/posts/' + id)
    }
}
