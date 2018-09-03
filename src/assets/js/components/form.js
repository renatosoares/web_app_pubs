'use strict';

export default {
    mounted() {
      console.log("Component mounted. form");
    },
    data() {
        return {
            name: null,
            city: null,
            state: null,
            country: null
        }
    },
    methods: {
        create(e) {
            axios({
                method: 'post',
                url: '/publishers',
                baseURL: 'http://127.0.0.1:8000/',
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

              e.preventDefault();
        }
    }
};
