'use strict';

export default {
    props: {
        pubs: {
            type: Array
        },
        url: {
            type: String
        },
        funUp: {
            type: Function
        }
    },
    mounted() {
        console.log('Mounted module list_publisher');
    },
    methods: {
        destroy(url, id) {
            axios({
                method: 'delete',
                url: url + '/' + id,
                headers: {
                    'Cache-Control': 'no-cache',
                }
            });
        },
        update(id) {
            this.funUp(id);
        }
    }
};
