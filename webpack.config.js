var path = require('path');

var config = {
	entry: './src/main.js',
	context: __dirname,
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'index.js',
	},

	devServer: {
		inline: true,
		port: 9000
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;
