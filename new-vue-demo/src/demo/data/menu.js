export default [
  {
    id: 1,
    title: "出勤",
    list: [
      {
        id: 1,
        type: 1,
        icon: "iconfont-ebx icon-ebx-daqia",
        text: "打卡",
        color: "#8897ea",
        route: "/register"
      },
      {
        id: 2,
        type: 1,
        icon: "iconfont-ebx icon-ebx-qiandao1",
        text: "签到",
        color: "#ff9800",
        route: "/register"
      },
      {
        id: 3,
        type: 1,
        icon: "iconfont-ebx icon-ebx-qingjia1",
        text: "请假",
        param: "请假",
        color: "#16bbac",
        route: "/register"
      },
      {
        id: 4,
        type: 1,
        icon: "iconfont-ebx icon-ebx-woshou",
        text: "外出",
        param: "外出",
        color: "#1eac1c",
        route: "/register"
      },
      {
        id: 5,
        type: 1,
        icon: "iconfont-ebx icon-ebx-tiaoxiu1",
        text: "调休",
        param: "调休",
        color: "#fd5991",
        route: "/register"
      },
      {
        id: 6,
        type: 1,
        icon: "iconfont-ebx icon-ebx-butieshenqing",
        text: "补贴",
        param: "补贴",
        color: "#f2676c",
        route: "/register"
      },
      {
        id: 7,
        type: 1,
        icon: "iconfont-ebx icon-ebx-business",
        text: "出差",
        color: "#2973e3",
        route: "/register"
      }
    ]
  },
  {
    id: 2,
    title: "财务",
    list: [
      {
        id: 9,
        type: 1,
        icon: "iconfont-ebx icon-ebx-baoxiao",
        text: "申请报销",
        color: "#ff9800",
        route: "/register"
      },
      {
        id: 10,
        type: 1,
        icon: "iconfont-ebx icon-ebx-wodebaoxiaodan",
        text: "我的报销",
        color: "#8bc34a",
        route: "/register"
      }
    ]
  },
  {
    id: 3,
    title: "集采",
    list: [
      {
        id: 13,
        type: 2,
        icon: "iconfont-ebx icon-ebx-flight",
        text: "机票",
        color: "#f2676c",
        route: "",
        link: ""
      },
      {
        id: 14,
        type: 2,
        icon: "iconfont-ebx icon-ebx-train",
        text: "火车票",
        color: "#2973e3",
        route: ""
      },
      {
        id: 15,
        type: 2,
        icon: "iconfont-ebx icon-ebx-hotel",
        text: "酒店",
        color: "#fd5991",
        route: ""
      }
    ]
  }
]
