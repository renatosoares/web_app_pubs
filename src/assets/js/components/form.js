'use strict';

export default {
    props: {
        url: {
            type: String
        },
        typeMethod: {
            type: String
        }
    },
    mounted() {
        console.log("Component mounted. form");
    },
    data() {
        return {
            name: null,
            city: null,
            state: null,
            country: null
        };
    },
    methods: {
        create(u, m) {
            axios({
                method: m,
                url: u,
                timeout: 1000,
                data: {
                    name: this.name,
                    city: this.city,
                    state: this.state,
                    country: this.country 
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
