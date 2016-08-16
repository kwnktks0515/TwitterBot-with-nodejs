var request = require('request');
var key = '6c597973614f66436d46312e50775357567246344c44676d346d645262574c314a343865634c6155436f44';

//発話理解
var SENTENCEUNDERSTANDING = 'https://api.apigw.smt.docomo.ne.jp/sentenceUnderstanding/v1/task?APIKEY='
//雑談理解
var DIALOGUE = 'https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=';
//知識Q&A
var KNOWLEDGEQA = 'https://api.apigw.smt.docomo.ne.jp/knowledgeQA/v1/ask?APIKEY=';
//var WEBCURATION_URL = 'https://api.apigw.smt.docomo.ne.jp/webCuration/v3/genre?APIKEY=';
//var SCENARIODIALOGUE_URL = 'https://api.apigw.smt.docomo.ne.jp/scenarioDialogue/v1/dialogue?APIKEY='


exports.senddialogue = function (utt,params,id,callback) {
	if(!params) var params = { utt : utt }
	else params.utt = utt;
	request.post((DIALOGUE + key),{ body: JSON.stringify(params) },function (err,res,data) {
		if(err) throw err;
		if(id) callback(id,JSON.parse(data));
		else callback(JSON.parse(data));
	});
}

exports.sendknowledgeqa = function (utt,callback){
	var getURL = KNOWLEDGEQA + key + '&q=' + encodeURIComponent(utt);
	request(getURL, function(error, response, body){
		if(error) throw error;
		callback(JSON.parse(body));
	});
}

/*
exports.dialogue = function (){

}

/*
var params = {
"utt": "こんにちは",
"context": "",
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
"mode": "dialog"
}};
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
