// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development', // Или 'production'
    entry: './src/index.js', // Путь к вашему входному файлу JavaScript
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'), // Путь к папке, где будет собран проект
        filename: 'bundle.js', // Имя файла, в который будет собран JavaScript
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Загрузка JavaScript с помощью Babel
                    options: {
                        presets: ['@babel/preset-env'], // Используем пресет @babel/preset-env для поддержки ES6+
                    },
                },
            },
            {
                test: /\.css$/, // Обрабатываем файлы CSS
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // Загружаем CSS в JavaScript
                    'postcss-loader', // Применяем PostCSS для дополнительных преобразований
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ // Плагин для извлечения CSS в отдельный файл
            filename: 'styles.css', // Имя файла для собранного CSS
        }),
    ],
};
