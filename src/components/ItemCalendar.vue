<template>
<div class="calendar-wrap">
    <div class="row">
        <div class="month">{{ displayMonth }}</div>
        <div class="prev-next">
            <button v-on:click="prevMonth">前の月</button>
            <div>/</div>
            <div><button v-on:click="nextMonth">次月</button></div>
        </div>
    </div>
    <div class="calendar">
        <div class="row">
            <div class="calendar-youbi" v-for="n in 7" :key="n">
                {{ youbi(n-1) }}
            </div>
        </div>
        
        <div class="row calendar-weekly" v-for="(week, index) in calendars" v-bind:key="index">
            <div class="calendar-daily" v-bind:class="{outside: currentMonth() !== day.month}" v-for="(day, index) in week" v-bind:key="index">
                {{ day.day }}
                <div class="calendar-event" v-for="dayEvent in day.dayEvents" :key="dayEvent.id" >
                     {{ dayEvent.text }} {{dayEvent.time}}分
                </div>
            </div>
        </div>
    </div>

</div>




    
</template>

<script>
import moment from "moment";
export default {
    props:['Items'],
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
            
            return this.Items.filter(Item => {
                let startDate = moment(Item.day).format('YYYY-MM-DD')
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

