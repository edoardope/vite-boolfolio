<script>

import { store } from '../store.js';
import axios from 'axios';

export default {
    name: "Portfolio",
    components: {

    },
    data() {
        return {
            store,
            posts: [],
            baseUrl: 'http://127.0.0.1:8000/api',
        }
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get(`${this.baseUrl}/project`)
                .then(res => {
                    this.posts = res.data.posts
                    console.log(this.posts)
                })
        },
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3" v-for="(elem, index) in    posts   " :key="index">
                <div class="card" style="width: 18rem;">
                    <img :src="`http://127.0.0.1:8000/storage/${elem.cover_image}`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            Project name: {{ elem.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../style/main.scss' as *;
</style>
