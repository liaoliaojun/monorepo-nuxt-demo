// import {log} from '@ej/webapp'
import {ref} from 'vue'

const count = ref(0)
const add = (a, b) => {
  console.log('add2')
  // log(a, b)
  count.value++
  console.log(count)
}
console.log('add1')
add(1, 2)