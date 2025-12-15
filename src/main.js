// src/main.js

// 匯入您的自訂樣式（Vite 會自動處理 Sass 編譯）
import './scss/styles.scss';

// 匯入所有 Bootstrap 的 JavaScript 模組
import * as bootstrap from 'bootstrap';

// 確保 DOM 準備好後再初始化任何 Bootstrap JS 組件
document.addEventListener('DOMContentLoaded', () => {
    // 範例：初始化所有工具提示 (Tooltip)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    console.log('Baseball web page is running with Vite and Bootstrap!');
});