new Vue({
    el : '#starting',
    delimiters: ['${','}'],
    data: {
        columns:['#', 'Time', 'Content', 'Name'],
        messages: [],
        loading: false,
        currentMessage: {},
        msg: null,
        newMessage: { 'message_content': null, 'message_name': null },
        currentSort: 'message_name',
        currentSortDir: ['asc'],
    },
    mounted : function() {
        this.getMessages();
    },
    computed:{
        sortedMessages:function() {
          return this.messages.sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc') modifier = -1;
            if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
            return 0;
          });
        }
    },

    methods : {
        getMessages: function() {
            this.loading = true;
            this.$http.get('api/message/')
                .then((response) => {
                    this.messages = response.data;
                    this.loading  = false;
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                })
        },
        sort: function(s) {
            if (s == this.currentSort) {
                this.currentSortDir = (this.currentSortDir == 'asc') ? 'desc' : 'asc';
            }
            this.currentSort = s;

        },

        addMessage: function() {
            this.loading = true;
            this.$http.post('/api/message/', this.newMessage)
                .then((response) => {
                    this.loading = false;
                    this.getMessages();
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                })
        }
    }
});