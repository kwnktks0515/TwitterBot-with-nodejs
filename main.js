/*
未実装
・対話
・コマンド
・Cron
*/
/*
client id = 'SAUyxgsgWvfhKhXEx8U7wXeWfaneWNNdSYuw9xESehjO'
client secret = 'k&TuGO?JVr!CVo!1puOX'
API key = '6c597973614f66436d46312e50775357567246344c44676d346d645262574c314a343865634c6155436f44'
*/
//var Step = require('step');
var async = require('async');//同期処理
require('date-utils');//時間
//var mycron = require('cron').CronJob;//cron
var tclient = require('./twitter');
var dclient = require('./docomo');
//var mongodb = require('./mongodb');
//var analyze = require('./analyze');
//入力処理準備
//process.stdin.resume();
//process.stdin.setEncoding('utf8');
var accountid = '4339780333'
	,tweetid;
/*
var api = new dclient('6c597973614f66436d46312e50775357567246344c44676d346d645262574c314a343865634c6155436f44');

api.createDialogue('Hello',function(error,data){
	console.log(data.utt);
});

var params = {
  "nickname": "光",
  "nickname_y": "ヒカリ",
  "sex": "女",
  "bloodtype": "B",
  "birthdateY": "1997",
  "birthdateM": "5",
  "birthdateD": "30",
  "age": "16",
  "constellations": "双子座",
  "place": "東京",
  "t":"10"
};

api.createDialogue('こんにちは', params, function(error, data){
	console.log(data.utt);
});
*/
/*
var job = new mycron({
  cronTime: '* * * * * *', //とりま毎秒実行
  onTick: function() {
    console.log("onTick!!");
  },
  start: false, //newした後即時実行するかどうか
  timeZone: 'Japan/Tokyo'
});
job.start();
*/
//本体
/*
async.series([
	function (callback) {//ユーザーIDを取得
		tclient.getid(accountid,function (error,screen_name) {
			accountid = screen_name;
			console.log(accountid);
			tclient.tweet((tclient.gettime() + 'から起動しています'),null,null);
			callback();
		});
	},
	function (callback) {//ストリーム
		tclient.client.stream('user',function (stream) {
			stream.on('follow',function (data) {
				if(data.source.screen_name != accountid) tclient.tofollow(data.source.screen_name);
			});
			stream.on('user_update',function () {
				//console.log(tweet('プロフィール更新しました'));
			});
			stream.on('data',function (data) {
				var text = data.text
				if(text && data.user.screen_name == accountid) {
					dclient.senddialogue(text.replace(new RegExp('@' + accountid + ' '), ''),null,data.user.screen_name,function (id,body) {
						tclient.tweet(('@' + id + ' ' + body.utt),data.id_str,null);
					});
				}
			});
			stream.on('error',function(error){
				throw error;
			});
		});
	},
]);

process.on('SIGINT', function() {//終了前プロセス
	tclient.tweet((tclient.gettime() + 'おやすみなさい'),null,function () {
		console.log('see you');
		process.exit();
	});
});

process.on('uncaughtException', function(err) {
    console.log(err);
});
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
process.stdin.on('data', function(chunk) {
	//input += chunk;
});
*/
