const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    // Откуда начинать сборку
    entry: path.resolve(__dirname, '../src/server/server.js'),
    // Куда собираем
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    // Module отвечает за работу с файлами .jsx .js .tsx .ts, а точнее транспилировать эти файлы в js
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.sass$/,
                use: [
                     {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
        ]
    },
    // После этого генерируем tsconfig.json с помощью команды: npx tsc --init
    // В файле tsconfig.json нужно сделать опеределенные действтия:
    // 1) Найти настройку jsx раскмоментировать и поменять значение на "react"
    // 2) Найти настройку allowJs и раскоментировать

    // Изначально, webpack умеет работать только с .js и .json.
    // Поэтому нужно его научить с расширениями, которые описаны ниже
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
    },
    // Отключаем минимизацию для понимания, где будут возникать ошибки
    optimization: {
        minimize: false
    },
    // Этот плагин помогает исключить ненужные модули из создаваемого пакета JavaScript при сборке приложения
    externals: nodeExternals()
}
