<template>
	<div class="calendar-wrap">
		<div class="row">
			<div class="month">{{ displayMonth }}</div>
			<div class="prev-next">
				<button v-on:click="prevMonth">前の月</button>
				<div>/</div>
				<div>
					<button v-on:click="nextMonth">次月</button>
				</div>
			</div>
		</div>
		<!--ここからカレンダー本体-->
		<div class="calendar">
			<!--曜日部分 土日は文字色変更-->
			<div class="row">
				<div class="calendar-youbi" v-for="n in 7" :key="n">{{ youbi(n - 1) }}</div>
			</div>
			<!--1週間ずつ表示-->
			<div class="row calendar-weekly" v-for="(week, index) in calendars" v-bind:key="index">
				<!--1日ずつ表示-->
				<div
					class="calendar-daily"
					v-bind:class="{ outside: currentMonth() !== day.month }" 
					v-for="(day, index) in week"
					v-bind:key="index"
				>
					{{ day.day }}
					<div
						class="calendar-event"
						v-for="dayItem in day.dayItems"
						:key="dayItem.id"
					>{{ dayItem.text }} {{ dayItem.time }}分</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";

export default {
	props: ['Items'],
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
			let startDate = this.getStartDate(); //カレンダー表記の最初の日取得
			const endDate = this.getEndDate(); //カレンダー表記の最後の日取得
			const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7); //カレンダーの表示週数

			let calendars = []; //カレンダー内容をいれる
			let calendarDate = this.getStartDate(); //カレンダー表記の最初の日取得 変数名変更

			for (let week = 0; week < weekNumber; week++) { //1~5週目
				let weekItems = [];
				for (let day = 0; day < 7; day++) { //日~月曜日
					let dayItems = this.getdayItems(calendarDate); //その日のitem(記録)を取得
					weekItems.push({ //1日分の情報を出力
						day: calendarDate.get("date"),
						month: calendarDate.format("YYYY-MM"),
						dayItems
					});
					calendarDate.add(1, "days");
				}
				calendars.push(weekItems); //1週間分の情報を出力
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
		currentMonth() { //今月以外の日付を背景グレーにするため
			return this.currentDate.format('YYYY-MM');
		},
		getdayItems(date) { //その日の運動記録の項目を抽出
			return this.Items.filter(Item => {
				let ItemDate = moment(Item.day).format('YYYY-MM-DD');
				let Date = date.format('YYYY-MM-DD');
				if (ItemDate == Date) return true;
			});
		},
	},
	computed: {
		calendars() {
			return this.getCalendar();
		},
		displayMonth() {
			return this.currentDate.format('YYYY[年]M[月]');
		},
	}
}
</script>

