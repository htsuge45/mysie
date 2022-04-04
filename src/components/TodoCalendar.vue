<template>
    <h2>カレンダー{{ displayMonth }}</h2>
    <button v-on:click="prevMonth">前の月</button>
    <button v-on:click="nextMonth">次の月</button>
    <div class="calendar">
        <div class="calendar-youbi" v-for="n in 7" :key="n">
                {{ youbi(n-1) }}
        </div>
        <div class="calendar-weekly"  v-for="(week, index) in calendars" v-bind:key="index">
            
            <div class="calendar-daily" v-for="(day, index) in week" v-bind:key="index">
                {{ day.day }}
                <div>
                    <div v-for="dayEvent in day.dayEvents" :key="dayEvent.id" >
                        <div class="calendar-event" >
                        {{ dayEvent.text }} {{dayEvent.time}}分
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import moment from "moment";
export default {
    props:['todos'],
    data() {
        return {
        currentDate: moment(),
        };
    },
    methods: {
        getStartDate() {
            let date = moment(this.currentDate);
            date.startOf("month");
            const youbiNum = date.day();
            return date.subtract(youbiNum, "days");
        },
        getEndDate() {
            let date = moment(this.currentDate);
            date.endOf("month");
            const youbiNum = date.day();
            return date.add(6 - youbiNum, "days");
        },
        getCalendar() {
            let startDate = this.getStartDate();
            const endDate = this.getEndDate();
            const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

            let calendars = [];
            let calendarDate = this.getStartDate();

            for (let week = 0; week < weekNumber; week++) {
                let weekRow = [];
                for (let day = 0;  day < 7; day++) {
                let dayEvents = this.getDayEvents(calendarDate)
                weekRow.push({
                    day: calendarDate.get("date"),
                    month: calendarDate.format("YYYY-MM"),
                    dayEvents
                });
                calendarDate.add(1, "days");
                }
                calendars.push(weekRow);
            }
            return calendars;
        },
        nextMonth() {
            this.currentDate = moment(this.currentDate).add(1, "month");
        },
        prevMonth() {
            this.currentDate = moment(this.currentDate).subtract(1, "month");
        },
        youbi(dayIndex) {
            const week = ["日", "月", "火", "水", "木", "金", "土"];
            return week[dayIndex];
        },
        currentMonth(){
            return this.currentDate.format('YYYY-MM')
        },
        getDayEvents(date){
            
            return this.todos.filter(todo => {
                let startDate = moment(todo.day).format('YYYY-MM-DD')
                let Date = date.format('YYYY-MM-DD')
                if(startDate == Date) return true;
            });
        },
    },
    computed: {
        calendars() {
            return this.getCalendar();
        },
        displayMonth(){
            return this.currentDate.format('YYYY[年]M[月]')
        },
    },
    mounted(){
        //let date = moment().startOf("month");
        //const youbiNum = date.day();
        //const startDate = this.getStartDate();
        //const endDate = this.getEndDate();
        //const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);
        
    } 
}
</script>

<style>
.content{
  margin:2em auto;
  width:900px;
}
.button-area{
  margin:0.5em 0;
}
.button{
  padding:4px 8px;
  margin-right:8px;
}
.calendar{
  max-width:900px;
  border-top:1px solid #E0E0E0;
  font-size:0.8em;
}
.calendar-weekly{
  display:flex;
  border-left:1px solid #E0E0E0;
  /* background-color: black; */
}
.calendar-daily{
  flex:1;
  min-height:125px;
  border-right:1px solid #E0E0E0;
  border-bottom:1px solid #E0E0E0;
  margin-right:-1px;
}
.calendar-day{
  text-align: center;
}

.calendar-youbi{
  flex:1;
  border-right:1px solid #E0E0E0;
  margin-right:-1px;
  text-align:center;
}
</style>