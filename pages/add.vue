<template>
    <div class="container my-3">
        <h2 class="mb-2">Добавить расписание</h2>
        <div class="row">
            <div class="col-12">
                <input class="form-control form-control-alternative" placeholder="Группа" type="text">
            </div>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <div class="col-12"></div>
        </div>
        <button class="btn btn-success btn-lg" @click="setAdd">Добавить</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        setAdd() {
           
        }
    }
}
</script>

<style scoped>
    input {
        font-size: 22px;
    }
</style>

