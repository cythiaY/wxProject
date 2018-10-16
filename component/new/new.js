Component({
    properties: {
        innerText: {
            type: String,
            value: 'default'
        }
    },
    methods: {
        childEvent: function (e) {
            let data = {
                name: "cythia"
            };
            this.triggerEvent('attreventname', data);
        }
    },
    data: {
        from: "component"
    },
    behaviors: [require('../../utils/behavior.js')],
    ready() {
        console.log(this.data.from)
    }
})