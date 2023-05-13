import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from "./indexTemplate";
import { Header } from "../shared/Header";

// Инициализируем приложение
const app = express();

// Укарачиваем путь до наших статических файлов
app.use('/static', express.static('./dist/client'));

// Устанавливаем геттер на / и генерируем наше приложение
app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(Header())))
});

// Устанавливаем слушатель на 3000 порт
app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
});