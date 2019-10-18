new Vue({
    el: '#vue-app',
    data: {
        name: 'Tarang',
        job: 'yt',
        website: 'https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5',
        websiteTag: '<a href="https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5">channel</a>',
        age: 21,
        x: 0,
        y: 0
    },
    methods: {
        click: function () {
            alert('you clicked me');
        },
        updateXY: function (e) {
            this.x = e.offsetX,
                this.y = e.offsetY
        },
        add: function (inc) {
            this.age += inc
        },
        subtract: function (dec) {
            this.age -= dec
        },
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});

new Vue({
    el: '#apps',
    data: {
        sname: '',
        umar: ''
    },
    methods: {
        logName: function () {
            this.sname
        },
        logAge: function () {
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        ages: 20,
        a: 0,
        b: 0
    },
    methods: {},
    computed: {
        addToA: function () {
            console.log('ata');
            return this.a + this.ages
        },
        addToB: function () {
            console.log('atb');
            return this.b + this.ages
        }
    }
});

new Vue({
    el: '#vuecss',
    data: {
        available: false,
        nearby: false
    },
    methods: {},
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});