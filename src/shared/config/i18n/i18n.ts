// src/i18n.js или i18n.ts

import i18n from 'i18next';  // основная библиотека
import { initReactI18next } from 'react-i18next';  // адаптер для React
import Backend from 'i18next-http-backend';  // плагин для загрузки переводов по HTTP
import LanguageDetector from 'i18next-browser-languagedetector';  // плагин, чтобы определять язык браузера

i18n
  .use(Backend)  // подключаем загрузку переводов
  .use(LanguageDetector)  // подключаем детектор языка
  .use(initReactI18next)  // подключаем интеграцию с React
  .init({
    fallbackLng: 'ru',  // язык по умолчанию, если не найдён нужный
    debug: __IS_DEV__,  // полезно в dev-режиме
    interpolation: {
      escapeValue: false,  // React сам экранирует, ставим false
    },
    // здесь могут быть дополнительные опции:
    // - namespaces (разделение переводов по частям)
    // - ресурсы (resource files) или настройка пути для Backend
    // - поддержка SSR если нужно

      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      }
  });

export default i18n;
