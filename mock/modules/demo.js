const Mock = require("mockjs");

const userList = {
  url: "/api/list",
  type: "post",
  response: () => {
    return {
      code: 20000,
      data: Mock.mock({
        "books|1-10": [
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

module.exports = [userList];
