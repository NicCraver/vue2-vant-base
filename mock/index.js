// 按功能划分模块，方便维护

const Mock = require("mockjs");

// 收集modules
const mockFiles = require.context("./modules", false, /\.js$/);
let mocks = [];
mockFiles.keys().forEach(key => {
  mocks.push(...mockFiles(key));
});

// 使用Mock根据数据模板生成模拟数据
mocks.forEach(item => {
  Mock.mock(item.url, item.type, item.response);
});
