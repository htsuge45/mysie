<template>
	<div class="body-content">
		<!-- ホームのview -->

		<div class="top-wrap">
			<div class="what-about">
				<div class="message">
					<p>What's about...?</p>
					<p>トレーニングを記録するサイトです</p>
				</div>
			</div>

			<div class="go-form slide-in">
				<div class="content-wrap">
					<div class="content">
						<p>トレーニングを</p>
						<p>記録しましょう</p>
						<button v-on:click="() => $router.push('/formlist')">>> 入力フォーム</button>
					</div>
				</div>
				<div class="image"></div>
			</div>

			<div class="go-calendar slide-in">
				<div class="image"></div>
				<div class="content-wrap">
					<div class="content">
						<p>カレンダーで</p>
						<p>結果を見れます</p>
						<button v-on:click="() => $router.push('/summary')">>> カレンダー</button>
					</div>
				</div>
			</div>

			<div class="go-search slide-in">
				<div class="image"></div>
				<div class="content">
					<p>YouTubeで</p>
					<p>Exercise動画を見つけよう</p>
					<button v-on:click="() => $router.push('/youtube')">>> 検索</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: 'HomeAbout',
}
</script>

<style>
div.top-wrap {
	display: block;
	padding-top: 2rem;
	padding-bottom: 10px;
	font-size: 1vw;
}

div.top-wrap .what-about {
	position: relative;
	margin-bottom: 5%;
	width: 80%;
	padding-top: 35%;
	border-radius: 5px;
	overflow: hidden;
	margin-left: auto;
	margin-right: auto;
}

div.top-wrap .what-about:after {
	content: "";
	position: absolute;
	top: 0;
	display: block;
	width: 100%;
	height: 100%;
	background: url("../assets/image/about.jpg");
	background-position: center;
	background-size: cover;
	animation: zoomOut 5s 1;
}

@keyframes zoomOut {
	0% {
		transform: scale(1.25);
	}

	100% {
		transform: scale(1);
	}
}

div.top-wrap .what-about .message {
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 50%;
	text-align: center;
	transform: translateX(-50%) translateY(-60%);
	white-space: nowrap;
}

div.top-wrap .what-about .message p {
	font-size: 2vw;
}

div.top-wrap .what-about .message p:first-of-type {
	font-size: 4vw;
}

div.top-wrap .slide-in {
	animation: SlideIn 2s 1;
}

div.top-wrap .go-form {
	position: relative;
	width: 70%;
	padding-top: 32%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5%;
}

div.top-wrap .go-form .content-wrap {
	position: absolute;
	left: 15%;
	width: 30%;
	padding-top: 30%;
	z-index: 1;
	border-radius: 5px;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgb(255, 255, 255);
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

div.top-wrap .go-form .content-wrap .content {
	position: absolute;
	top: 50%;
	width: 100%;
	transform: translateY(-70%);
	white-space: nowrap;
}

div.top-wrap .go-form .content-wrap .content p {
	text-align: left;
	font-size: 1.25vw;
	margin: 0;
	padding-left: 15%;
}

div.top-wrap .go-form .content-wrap .content p:last-of-type {
	margin-bottom: 15%;
}

div.top-wrap .go-form .content-wrap .content button {
	position: absolute;
	text-align: center;
	right: 10%;
}

div.top-wrap .go-form .image {
	position: absolute;
	right: 15%;
	width: 45%;
	padding-top: 45%;
	border-radius: 5px;
	background: url("../assets/image/record.jpg");
	background-position: center;
	background-size: cover;
	top: 50%;
	transform: translateY(-50%);
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

div.top-wrap .go-calendar {
	position: relative;
	width: 70%;
	padding-top: 38.5%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5%;
}

div.top-wrap .go-calendar .content-wrap {
	position: absolute;
	right: 15%;
	width: 30%;
	padding-top: 30%;
	z-index: 1;
	border-radius: 5px;
	top: 45%;
	background-color: rgb(255, 255, 255);
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

div.top-wrap .go-calendar .content-wrap .content {
	position: absolute;
	top: 50%;
	width: 100%;
	transform: translateY(-70%);
	white-space: nowrap;
}

div.top-wrap .go-calendar .content-wrap .content p {
	text-align: left;
	font-size: 1.25vw;
	margin: 0;
	padding-left: 15%;
}

div.top-wrap .go-calendar .content-wrap .content p:last-of-type {
	margin-bottom: 15%;
}

div.top-wrap .go-calendar .content-wrap .content button {
	position: absolute;
	text-align: center;
	right: 10%;
}

div.top-wrap .go-calendar .image {
	position: absolute;
	left: 15%;
	width: 45%;
	top: 0;
	padding-top: 45%;
	border-radius: 5px;
	background: url("../assets/image/calendar.jpg");
	background-position: center;
	background-size: cover;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

div.top-wrap .go-search {
	position: relative;
	width: 49%;
	padding-top: 12%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5%;
}

div.top-wrap .go-search .content {
	position: absolute;
	width: 100%;
	top: 50%;
	border-radius: 5px;
	transform: translateY(-50%);
	z-index: 1;
	white-space: nowrap;
}

div.top-wrap .go-search .content p {
	text-align: center;
	font-size: 1.25vw;
	margin: 0;
}

div.top-wrap .go-search .content p:last-of-type {
	margin-bottom: 2.5%;
}

div.top-wrap .go-search .content button {
	position: absolute;
	text-align: center;
	left: 50%;
	transform: translateX(-50%);
}

div.top-wrap .go-search .image {
	position: absolute;
	padding-top: 25%;
	width: 100%;
	border-radius: 5px;
	background: url("../assets/image/search.jpg");
	background-position: center;
	background-size: cover;
	top: 50%;
	transform: translateY(-50%);
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

@keyframes SlideIn {
	0% {
		opacity: 0;
		transform: translateY(100px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>