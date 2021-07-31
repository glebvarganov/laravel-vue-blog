<template>
    <div>
        <h1>Blog</h1>
    </div>
</template>

<script>
import BlogService from '../services/BlogService'

export default {
    name: "Blog",
    data() {
        return {
            posts: [],
        }
    },
    created() {
        BlogService.getBlogPosts()
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style scoped>

</style>
