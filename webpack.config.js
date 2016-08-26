var path = require('path'),
	webpack = require('webpack');

var commonLoaders = [
	{test:/\.js$/,loader:'babel',exclude:'/node_modules/'},
	{test:/\.scss$/,loader:'style!css!autoprefixer!sass'}
];

var path = path.resolve(__dirname,'public/build');

module.exports = {
	entry:[
		'./public/js/entry.js'
	],

	output:{
		path:path,
		filename:'build.js'
	},
	module:{
		loaders:commonLoaders
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	resolve:{
		extensions:['','.js','.scss']
	},
	babel:{
		presets:['es2015','react']
	}
};