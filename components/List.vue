<template>
    <div class="row" style="min-height: 100vh">
        <div class="col-3 d-none d-md-block  px-4 py-3">
            <h3 class="mb-4">Календарь</h3>
            <datepicker
            :inline="true" 
            :format="formatter"
            v-model="sendselected"
            ></datepicker>
        </div>
        <div class="col-12 col-md-9 px-5 py-3">
            <h3 class="mb-4">Расписание занятий</h3>
            <div class="row no-gutters mob-fixed-bottom">
                <div class="col-12 col-sm-6 col-md-6">
                    <select 
                        v-model="getTeach" 
                        class="mb-2 form-control form-control-lg form-control-alternative">
                        <option disabled value="">Выберите преподавателя</option>
                        <option>Преподаватель 1</option>
                        <option>Преподаватель 2</option> 
                        <option>Преподаватель 3</option>
                        <option>Преподаватель 4</option>
                        <option>Преподаватель 5</option>
                    </select>
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                    <select 
                        v-model="getGroup" 
                        class="form-control form-control-lg form-control-alternative">
                        <option disabled value="">Выберите группу</option>
                        <option>Группа 1</option>
                        <option>Группа 2</option>
                        <option>Группа 3</option>
                        <option>Группа 4</option>
                        <option>Группа 5</option>
                    </select>
                </div>
            </div>
            <p class="mt-3" style="font-size: 22px">
                {{ selected.view }}
            </p>
            <div 
                class="row no-gutters mb-3" 
                v-for="item of listFireOne.glist" 
                :key="item.id">
                <div class="col-auto">
                    <span 
                        class="badge badge-pill" 
                        :class="'badge-' + item.typeLesson"
                    >{{ item.id }}</span> 
                </div>
                <div class="col pl-3">
                    <span style="font-size: 18px">{{ item.title }}</span>
                    <a href="#"
                    style="font-size: 16px" 
                    class="d-block"
                    >{{ item.teacher }}</a> 
                </div>
            </div>
            <!-- <code 
                v-if="listFireOne.length !== 0"
                class="my-3 d-block alert alert-secondary">{{ listFireOne }}</code> -->
            <div v-if="listFireOne.length == 0" class="d-block spinner-border text-primary mt-3" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker'
import Moment from 'moment'
import axios from 'axios'
import routesapp from '@/static/api'
import { setTimeout } from 'timers';

Moment.locale('ru')

export default { 
    components: {
        Datepicker
    },
    data() {
        return {
            today: Moment(new Date()).format("DD.MM.YYYY"),
            selected: {
                view: "",
                send: ""
            },
            sendselected: '',
            format: "d MMMM yyyy",
            getGroup: '',
            getTeach: '',
            listFireOne: []
        }
    },
    mounted() {

    },
    methods: {
        formatter(date) {
            this.selected.view = Moment(date).format("LL")
            this.selected.send = Moment(date).format("DD-MM-YYYY")
            this.getSelected(this.selected);
        },
        getData() {
            axios
                .get(routesapp.list.get)
                .then(res => (this.listFireOne = res.data));
        },
        getSelected(selected) {
            let routeapi = routesapp.list.get + '/date';
            axios
                .get(routeapi, {params: {selected}})
                .then(res => (console.log(JSON.parse(res.data))))
        }
    },
    computed: {
  
    },
    created() {
        setTimeout(() => {
            this.getData()
        }, 1000);
    }
}
</script>

<style scoped>
    select {
        font-size: 18px;
    }
    .form-control {
        box-shadow: none !important;
        background: #f5f5f5;
        border-color: #f5f5f5;
        background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
 background-blend-mode: screen;
    }
    .list-items {
        font-size: 18px;
    }
    .list-group-item {
        border: none;
        padding: 10px 0;
    }
    .badge {
        padding: 0 !important;
        width: 25px;
        height: 25px;
        line-height: 28px;
        border-radius: 50% !important;
        font-size: 16px;
    }
    @media screen and (max-width: 400px) {
        .mob-fixed-bottom {
            position: fixed;
            bottom: 25px;
            left: 0;
        }
    }
</style>
