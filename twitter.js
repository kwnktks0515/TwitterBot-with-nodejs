var twitter = require('twitter');
require('date-utils');

exports.client = new twitter({
  	consumer_key: 'Gae24U6slBY9wXulZ8aN8TI2Z',
  	consumer_secret: 'xsmriKyTPGVAfF8pWHHuh3KyakTJ8sGj01Gfly8791FyPtnKAy',
  	access_token_key: '4339780333-Y1vsgd4Fd1ZQXQ4aIUSCYx6KrXrgrcJpCJuKt7g',
  	access_token_secret: 'qNqDBg7UMpnXf3QnTketR9KKmLruWxp2nVR0Jt3rB6dtE'
});

exports.getid = function (id,callback) {
	this.client.get('users/show',{id: id},function (error,text,response) {
		if(error) throw error;
		callback(error,text.screen_name);
	});
}

exports.tweet = function (text,id,callback) {
	this.client.post('statuses/update', {status: text ,in_reply_to_status_id : id },  function(error, tweet, response){
		if(error) throw error;
		if(callback) callback();
	});
}

exports.gettime = function () {
	return (new Date()).toFormat("HH24時MI分SS秒");
}

exports.tofollow = function (id) {
	tclient.client.post('friendships/create',{screen_name : id},function () {
		if(error) throw error;
		console.log('follow ' + id);
	});
}

exports.tounfollow = function (id) {
	tclient.client.post('friendships/destroy',{screen_name : id},function () {
		if(error) throw error;
		console.log('unfollow ' + id);
	});
}
