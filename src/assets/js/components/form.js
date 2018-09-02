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
            axios.post('https://httpbin.org/post', {
                name: this.name,
                city: this.city,
                state: this.state,
                country: this.country
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
