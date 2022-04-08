<template>
    <form v-on:submit.prevent="addItem">
      <table>
        <tr>
          <th>Day</th>
          <td><input v-model="newDay" type="date" /></td>
        </tr>
        <tr>
          <th>内容</th>
          <td><input v-model="newItem" placeholder="Input here..." /></td>
        </tr>
        <tr>
          <th>時間</th>
          <td><input v-model="newTime" type="number" style="margin-right: 0.5rem"/>分</td>
          <td><button style="margin-left: 2rem;"  v-bind:disabled="activateSubmit">Add</button></td>
        </tr>
      </table>      
    </form> 






</template>

<script>
export default {
    data () {
        return {
            newDay: '',
            newItem: '',
            newTime: ''
        }
    },
    created(){
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
          
        var toTwoDigits = function (num, digit) {
            num += ''
            if (num.length < digit) {
                num = '0' + num
            }
              return num
            }
            
        var yyyy = toTwoDigits(year, 4)
        var mm = toTwoDigits(month, 2)
        var dd = toTwoDigits(day, 2)
        var ymd = yyyy + "-" + mm + "-" + dd;

        this.newDay = ymd;
    },
    computed:{
        activateSubmit() {
            if (this.newDay == '' | this.newItem == '' | this.newTime < 1) {
                return true;
            } else {
                return false;
            }
        }

    },
    emits: ['add'],
    methods: {
    addItem () {
        if (this.newItem === '') return;
        this.$emit('add', this.newDay,this.newItem,this.newTime);
        this.newItem = '';
        this.newTime = '';
    }
    }
}
</script>