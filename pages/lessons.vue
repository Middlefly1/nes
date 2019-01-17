<template>
    <!-- <div class="row">
        <div class="col-3">
            <h3>Учебные материалы</h3>
        </div>
        <div class="col-9">
            <h3>List items</h3>
        </div>
    </div> -->
    <div class="container my-4">
        <div class="row">
            <div class="col-md-4" v-for="post of posts" :key="post.id">
                <div class="card my-3">
                    <img :src="post.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.text }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {
        getPosts() {
            axios
                .get('http://localhost:8888/api/posts')
                .then(res => (this.posts = res.data))
        }
    },
    created() {
        //console.log( this.getPosts() );
    }
}
</script>

<style>

</style>

