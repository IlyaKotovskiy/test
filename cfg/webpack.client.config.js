const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
    // если дев. то генерирутеся настройка eval
    // почему eval - он имеет самые высокие показатели скорости при билде или ребилде приложения
    if(IS_DEV) return 'eval'
    // если прод. то генерироваться не будут
    if(IS_PROD) return false
}

module.exports = {
    // Откуда начинать сборку
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        // Для HMR
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    // Куда собираем
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        // Для HMR
        publicPath: '/static/',
        filename: 'client.js'
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
                    'style-loader', {
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
            }
        ]
    },
    // После этого генерируем tsconfig.json с помощью команды: npx tsc --init
    // В файле tsconfig.json нужно сделать опеределенные действтия:
    // 1) Найти настройку jsx раскмоментировать и поменять значение на "react"
    // 2) Найти настройку allowJs и раскоментировать

    // Изначально, webpack умеет работать только с .js и .json.
    // Поэтому нужно его научить с расширениями, которые описаны ниже
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        // Для HMR
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
        }
    },
    // Для HMR
    plugins: IS_DEV ? [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ] : [],
    devtool: setupDevtool()
}