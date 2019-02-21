let fs = require('fs');
let dir = './tmp';
let dirs = [
	'./PSD',
	'./source',
	'./source/fonts',
	'./source/images',
	'./source/js',
	'./source/styles',
	'./source/styles/src',
	'./source/template',
	'./source/template/src'
]

dirs.forEach(function(item,index,arr){
	if (!fs.existsSync(item)){
		fs.mkdirSync(item);
	}

});
let createFiles = [
	'./source/styles/main.sass',
	'./source/template/index.pug'
];
createFiles.forEach(function(item,index,arr){
	// if (!fs.existsSync(item)){
	// 	fs.mkdirSync(item);
	// }
	fs.openSync(item, 'a');
});
/* ---------- Create Sass main file ------------- */
let sassTemplate ='@import "normalize"\n/* Custom styles*/'
fs.writeFile("./source/styles/main.sass", sassTemplate, function(err) {
	if(err) {
		return console.log(err);
	}
});
/* ---------- Create Pug main file ------------- */
let pugTemplate = "doctype htlm\nhtml(lang='en')\n	header\n		title Some Title\n		meta(charset='utf-8')\n		meta(name='viewport', content='width=device-width, initial-scale=1.0')\n		link(rel='stylesheet', href='/styles/main.min.css')\n		script(src='js/main.js')\n	body\n		header\n		main\n		footer"
fs.writeFile("./source/template/index.pug", pugTemplate, function(err) {
	if(err) {
		return console.log(err);
	}
}); 