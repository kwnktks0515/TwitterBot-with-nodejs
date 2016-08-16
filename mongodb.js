/*
mongod --dbpath
 /Users/takashi/Documents/Mac/書類/プログラミング/Node.js/Twitterbot/MongoDB
 
 cd /Users/takashi/Documents/Mac/書類/プログラミング/Node.js/Twitterbot
 /node_modules/mongo-express && node app
 
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/study')

exports.makeschema = function (name,data) {
	return mongoose.model(name, mongoose.Schema(data));
}

//未完成
exports.mining = function (target,data) {
	
} 

exports.miningone = function (target,data) {
	
}

exports.update = function (params) {
	
};
//ここまで未完成

//参考
/*
User.find({}, function(err, docs) {
	for (var i=0, size=docs.length; i<size; ++i) {
		console.log(docs[i].doc.name);
	}
});
unicorns.find( { gender : "f" }, function( err, docs ){
 
    // 検索結果がdocsとして入力されるので、ループで取り出す
    docs.forEach( function( element ){
         
        // Schemaで定義した変数のアクセス方法は、element.<フィールド名>
        // ※genderはSchema定義してないので、element.genderでは参照できない
        console.log( element.name + " " + element.loves.join(",")  );
         
        // Schemaで定義していない変数への暗黙のアクセス方法は、element._doc.<フィールド名>
        // ※element._docには取得したドキュメントの全情報が格納されている。
        // Schemaで定義してなくても、_doc.<フィールド名>で、ドキュメントの中身を知っていれば
        // アクセスできる。
        console.log( element._doc.name + " " + element._doc.gender + " "+
                    element._doc.loves.join(","));
 
    },this);
});

*/
exports.remove = function (target,data) {
	target.remove(data, function(err) {
		if(err)	throw err;
	});
};


//data
exports.twitter = function () {
	return this.makeschema('tweet',{
		tweetid : { type : String, required : true },
		text 	: { type : String, required : true }
	});
}

exports.docomo = function () {
	return this.makeschema('user',new mongodb.makeschema('user',{
		accountid	: { type : String, required : true },
		nickname 	: { type : String, default : "光" },
		nickname_y 	: { type : String, default : "ヒカリ" }, 
		sex 		: { type : String, default : "女" }, 
		bloodtype 	: { type : String, default : "B" },
		birthdateY 	: { type : Number, default : "1997" }, 
		birthdateM 	: { type : Number, default : "5" },
		birthdateD	: { type : Number, default : "30" },
		age			: { type : Number, default : "18" },
		constellations : { type : String, default : "双子座" },
		place		: { type : String, default : "東京" },
		t			: { type : Number, default : "10" }
	}));
}

exports.log = function () {
	return this.makeschema('log',new mongodb.makeschema('log',{
		to : String	
	}));
}

exports.task = function () {
	return this.makeschema('task',new mongodb.makeschema('task',{
		time 	: { type : Number, required : true },
		doing 	: { type : Number, required : true }
	}));
}

//data end

