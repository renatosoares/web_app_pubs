'use strict';

export default {
    props: {
        pubs: {
            type: Array
        },
        url: {
            type: String
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
        update(url, id) {
            console.log(url + '/' + id);
        }
    }
};
