'use strict';

export default {
    props: {
        url: {
            type: String
        },
        typeMethod: {
            type: String
        },
        dataUpdate: {
            type: Object
        }
    },
    mounted() {
        this.$watch('dataUpdate', dataUpdate => {
            this.updatedForm(dataUpdate);
        }, {immediate:true});
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
        updatedForm(data) {
            if (data !== null) {
                this.name = data.name;
                this.city = data.city;
                this.state = data.state;
                this.country = data.country;
            }
        },
        submited(u, m) {
            if (this.dataUpdate) {
                this.update(this.dataUpdate.id, u, 'put');
            } else {
                this.create(u, m);
            }
        },
        update(id, u, m) {
            this.sendData(u + '/' + id, m);
        },
        create(u, m) {
            this.sendData(u, m);
        },
        sendData(u, m) {
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
