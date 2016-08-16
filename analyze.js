kuromoji = require ("kuromoji");

exports.analyze = function (text,callback) {
	kuromoji.builder({ dicPath: "node_modules/kuromoji/dist/dict/" }).build(function (err, tokenizer) {
    	callback(tokenizer.tokenize(text));
	});
}

exports.command = function (text,callback) {
	var aaa = this.analyze(text,function (data) {
		var time = {};
		for(var i = 1;i < Object.keys(data).length;i++){
			if(data[i].surface_form == '時' && data[i-1].pos_detail_1 == '数'){
				time.push(data[i-1].surface_form + '時');
			}
			if(data[i].surface_form == '分' && data[i-1].pos_detail_1 == '数'){
				time.push(data[i-1].surface_form + '分');
			}
			/*
			if(data[i]){

			}
			*/
		}
		return time;
	});
	//callback()

}


/*
exports.search = function (params) {

}
*/


/*
exports.analyzefilter = function (text,) {

}
*/
