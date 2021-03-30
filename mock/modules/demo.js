const Mock = require("mockjs");

const getList = {
  url: "/api/getList",
  type: "get",
  response: () => {
    return {
      code: 20000,
      data: Mock.mock({
        "user|30-50": [
          {
            "sid|+1": 1,
            date: '@date("yyyy-MM-dd")',
            name: "@csentence()",
            address: "@county(true)",
            region: "双流区"
          }
        ]
      })
    };
  }
};
const postList = {
  url: "/api/postList",
  type: "post",
  response: () => {
    return {
      code: 20000,
      data: Mock.mock({
        "list|50-100": [
          {
            "sid|+1": 1,
            date: '@date("yyyy-MM-dd")',
            name: "@csentence()",
            address: "@county(true)",
            region: "双流区"
          }
        ]
      })
    };
  }
};
const loginFail = {
  url: "/api/loginFail",
  type: "post",
  response: () => {
    return {
      code: 403,
      data: {},
      msg: "账号或密码错误"
    };
  }
};

module.exports = [getList, postList, loginFail];
