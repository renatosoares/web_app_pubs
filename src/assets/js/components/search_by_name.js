'use strict';

export default {
    props: {
        submitCall: {
            type: Function
        },
        searchName: {
            type: String
        }        
    },
    mounted() {
        console.log('Component mounted. search by name' );
    },
    methods: {
    }
};
