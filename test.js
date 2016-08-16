//var tclient = require('./twitter');
var dclient = require('./docomo');
//var mongodb = require('./mongodb');
//var analyze = require('./analyze');
/*
var Tweet = mongodb.twitter();

var tweet = new Tweet({
	tweetid : '111110',
	text : 'hello'
});
tweet.save(function (err) {
	if (err) { throw err; }
	process.exit();
});
mongodb.remove(Tweet,{
	tweetid : '11111'
});
*/
/*
analyze.analyze("明日の14時にリプして",function (data) {
	var text = data.filter(function (item,index) {
		if(item.surface_form == 'ない') return true;
	})
	//if(text) return 0;
	console.log(text);
});
*/
/*
analyze.analyze("明日の14時40分にリプして",function (data) {
	var time = '';
	for(var i = 1;i < Object.keys(data).length;i++){
		if(data[i].surface_form == '時' && data[i-1].pos_detail_1 == '数'){
			time +=	data[i-1].surface_form + '時';
		}
		if(data[i].surface_form == '分' && data[i-1].pos_detail_1 == '数'){
			time += data[i-1].surface_form + '分';
		}
	}
});
*/

/*
var params = {
  context : "",
  nickname : "光",
  nickname_y : "ヒカリ",
  sex: "女",
  bloodtype: "B",
  birthdateY: "1997",
  birthdateM: "5",
  birthdateD: "30",
  age: "16",
  constellations: "双子座",
  place: "東京",
  mode: "dialog"
};
*/
/*
dclient.sendknowledgeqa('',function (body) {
	console.log(body);
})
*/

dclient.senddialogue('hello',null,null,function (body) {
	console.log(body);
});

//dclient.knowledgeqa('hello',param);
/*
api.createDialogue('チョコちょうだい', function(error, data){
  console.log(data.utt);
});
*/
/*
var request = require('request').defaults({strictSSL: false})

// docomo雑談対話API
var api = "https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY="
var token = '6c597973614f66436d46312e50775357567246344c44676d346d645262574c314a343865634c6155436f44'

// context保存用
var status = {}

function aaa(){
// ダイレクトメッセージハンドリング

  // 雑談対話API呼び出し
  status.utt = "hello"
  var param = { body: JSON.stringify(status) }
  request.post(api + token, param, function(err, res, data) {
    body = JSON.parse(data)

    // 雑談対話の文脈保存
    status.context = body.context
    status.mode = body.mode
	console.log(body);
  })
};

*/
/*
var lines=[];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
	api.createDialogue(line, params, function(error, data){
		if(error) throw error;
		console.log(data.utt);
	});
});
reader.on('close', function () {
  //do something
});
*/


/*
var lines=[];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  //do something
});
*/
