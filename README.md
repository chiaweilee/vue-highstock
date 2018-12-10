# vue-highstock

[![Greenkeeper badge](https://badges.greenkeeper.io/chiaweilee/vue-highstock.svg)](https://greenkeeper.io/)

highstock (or highcharts) component for vue2

## Install
```cmd
npm install vue-highstock
```

## Usage in Vue component
```html
<high-stock :options="options" :key="options.title.text"></high-stock>
```

- options see Highcharts/highstock DOC https://api.highcharts.com/highstock/
- use :key to active Realtime-render


```vue
import highstock from 'highcharts/highstock'
import vueHightstock from 'vue-highstock'

export default {
  components: {
    highStock: vueHightstock(highstock, {
      // highstock global options here
    })
  }
}
```
