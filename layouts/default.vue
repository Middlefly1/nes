<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script>

  import Moment from 'moment'

  export default {
    data() {
      return {
        date: Moment().subtract(10, 'days').calendar(),
      }
    }
  }
  
</script>

<style>
@import url('../assets/fonts/tt-commons.css');
* {
  font-family: 'TT Commons', sans-serif;
}
a:hover {
  text-decoration: none !important;
}
/* .form-control {
  box-shadow: none !important;
} */
.mvh-100 {
  min-height: 100vh;
}
.rounded {
  border-radius: 100% !important;
}
.vdp-datepicker__calendar {
    width: 100% !important;
    border: none !important;
    background: none !important;
    font-size: 18px;
}
footer {
  height: auto !important
}
</style>

