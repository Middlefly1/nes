<template>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-light bg-light shadow-sm">
            <a class="navbar-brand" href="#">
                <strong>UKRTB</strong> Student <sup>BETA</sup>
            </a>
        </nav>
        <List></List>
        <div class="fixed-bottom">
            <router-link to="/" class="btn btn-default bg-light mt-3">
                На главную
            </router-link>
        </div>
    </div>
</template>

<script>

import List from '~/components/List'

export default { 
    components: {
        List
    },
    data() {
        return {
            
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>

</style>

