<template>
    <div class="row" style="min-height: 100vh">
        <div class="col-3 bg-light px-4 py-3">
            <h3 class="mb-4">Календарь</h3>
            <datepicker
            :inline="true" 
            :format="formatter"
            ></datepicker>
        </div>
        <div class="col-9 px-5 py-3">
            <h3 class="mb-4">Расписание занятий</h3>
            <div class="row">
                <div class="col-6 col-sm-6 col-md-6">
                    <select 
                        v-model="getTeach" 
                        class="form-control form-control-alternative">
                        <option disabled value="">Выберите преподавателя</option>
                        <option>Преподаватель 1</option>
                        <option>Преподаватель 2</option> 
                        <option>Преподаватель 3</option>
                        <option>Преподаватель 4</option>
                        <option>Преподаватель 5</option>
                    </select>
                    <p class="mt-2">
                        Преподаватель: {{ getTeach.length == 0 ? 'не выбрано' : getTeach }}
                    </p>
                </div>
                <div class="col-6 col-sm-6 col-md-6">
                    <v-layout>
                        <v-flex xs12 sm6 d-flex>
                        <v-select
                        :items="items"
                        label="Solo field"
                        solo
                        ></v-select>
                    </v-flex>
                    </v-layout>
                    <select 
                        v-model="getGroup" 
                        class="form-control form-control-alternative">
                        <option disabled value="">Выберите группу</option>
                        <option>Группа 1</option>
                        <option>Группа 2</option>
                        <option>Группа 3</option>
                        <option>Группа 4</option>
                        <option>Группа 5</option>
                    </select>
                    <p class="mt-2">
                        Группа: {{ getGroup.length == 0 ? 'не выбрано' : getGroup }}
                    </p>
                </div>
            </div>
        
            <p style="font-size: 22px">На {{ selected }}</p>
            <ul class="list-group list-items">
                <li class="list-group-item" 
                    v-for="(item, i) in listOne.g_list" :key="i">
                    <span class="badge badge-pill mr-2" :class="'badge-' + item.typeLesson">
                        {{ ++i }}
                    </span> 
                    {{ item.title }}
                                                                        
                </li>
            </ul>
            <router-link to="/" class="btn btn-outline-secondary mt-3">Назад</router-link>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker'
import Moment from 'moment'

export default { 
    components: {
        Datepicker
    },
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            selected: "",
            format: "d MMMM yyyy",
            getGroup: '',
            getTeach: '',
            listOne: {
                g_id: 1,
                g_title: 'ПКС-11',
                g_link: 'pks-11',
                g_list: [
                    {id: 1, title: 'Русский язык', typeLesson: 'primary', date: '07.01.2019'},
                    {id: 2, title: 'Физкультура', typeLesson: 'info', date: '07.01.2019'},
                    {id: 3, title: 'Математика', typeLesson: 'warning', date: '07.01.2019'},
                    {id: 4, title: 'Основы менеджмента', typeLesson: 'success', date: '07.01.2019'},
                ],
                g_date: '07.01.2019'
            }
        }
    },
    methods: {
        formatter(date) {
            this.selected = Moment(date).format("DD.MM.YYYY")
        },

    },
    computed: {
        
    }
}
</script>
