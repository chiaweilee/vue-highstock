/*
 * vue-highstock
 * +v MIT 2018
 */
export default function (highstock, globalOption) {
    if (!highstock) {
        console.warn('Need highstock..')
        return
    }
    !!globalOption && highstock.setOptions(globalOption)
    return {
        name: 'highstock',
        render: function (createElement) {
            return createElement('div')
        },
        props: {options: {type: Object, required: true}},
        mounted () {
            this._initChart()
        },
        methods: {
            _initChart: function () {
                this._renderChart()
                this.$watch('options', function (to) {
                    this._renderChart()
                }, {deep: true})
            },
            _renderChart: function () {
                this.chart = new highstock.Chart(this.$el, this.options)
            }
        },
        beforeDestroy: function () {
            this.chart.destroy()
        }
    }
}
