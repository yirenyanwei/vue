import {reactive, onMounted} from 'vue'
import axios from 'axios'
function getData1() {
    const obj = reactive({
        list: []
    })
    onMounted(()=>{
        axios.get('/test1.json').then(res=>{
            obj.list = res.data.list
        })
    })
    return obj
}

function getData2() {
    const obj = reactive({
        list: []
    })
    onMounted(()=>{
        axios.get('/test2.json').then(res=>{
            obj.list = res.data.list
        })
    })
    return obj
}
export {getData1, getData2}