'use strict';

export default {
    data() {
        return {
            searchName: null
        }
    },
    mounted() {
        console.log('Component mounted. 2');
    },
    methods: {
        searchByName(e) {
            e.preventDefault();

            axios({
                method: 'get',
                url: '/publishers',
                baseURL: 'http://127.0.0.1:8000/',
                timeout: 1000,
                params: {
                    name: this.searchName,
                },
                headers: {
                    'Cache-Control': 'no-cache',
                }
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            console.log('call ok', this.searchName);
        }
    }
};
