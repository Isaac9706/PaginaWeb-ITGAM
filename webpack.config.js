const path = require('path')

module.exports = {
    // 1.Especificacion de archivo index de entrada
    entry: path.join(__dirname, 'src/index.js'),
    // 2. Especificacion de archivo de salida
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 3. Folder donde servira
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4040,
        compress: true,
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}