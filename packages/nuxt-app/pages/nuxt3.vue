<template>
  <div>
      nuxt34
    <div>{{count}}</div>
    <button @click="count++">+</button>
    <hello></hello>
  </div>
</template>

<script setup lang="ts">
  import {merge} from 'lodash'
  import {ref} from 'vue'
  import {log} from '@ej/webapp'

  const count = ref(0)
  log(1, 2)
  console.log(merge({a: 1,}, {b: 2}))
</script>