'use strict';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import FormComponent from './components/FormComponent.vue';
import SearchByName from './components/SearchByName.vue';
import ListPublishers from './components/ListPublishers.vue';


const app = new Vue({
    el: '#app',
    components: {
        FormComponent,
        SearchByName,
        ListPublishers
    },
    data: {
        publishers: null,
        apiUrl: '/publishers', // FIXME vou adicionara o valor de quem vai ser editado
        apiBaseUrl: 'http://127.0.0.1:8000',
        dataEdit: null,
    },
    methods: {
        searchByName(e) {
            e.preventDefault();

            axios({
                method: 'get',
                url: this.apiUrl,
                baseURL: this.apiBaseUrl,
                timeout: 1000,
                params: {
                    name: e.target[0].value, // FIXME refactor
                },
                headers: {
                    'Cache-Control': 'no-cache',
                }
            })
                .then((response) => {
                    if (typeof response.data === 'object') {
                        this.publishers = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        edit(id) {
            axios({
                method: 'get',
                url: this.apiUrl + '/' + id,
                baseURL: this.apiBaseUrl,
                timeout: 1000,
                headers: {
                    'Cache-Control': 'no-cache',
                }
            })
                .then((response) => {
                    this.dataEdit = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
