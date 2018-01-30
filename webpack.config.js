const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'develop'),
	entry: {
		app: './main.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './assets/js/[name].bundle.js',
	}, 
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader??cacheDirectory=true',
					options: {
						presets: ['latest', 'env', 'react']
					}
				}
			}
		]
	}
}
