import { iconObject as icons, iconArray } from "./icons";

let message = [
  {
    icon: icons.icon1,
    title: "游戏推荐",
    subtitle: "热门游戏推荐：王者荣耀,英雄联盟"
  },
  {
    icon: icons.icon2,
    title: "通知提醒",
    subtitle: "您有一份快递已送达，请查收"
  },
  {
    icon: icons.icon3,
    title: "优惠活动",
    subtitle: "买999送0.1元，满9999立减100000元"
  },
  {
    icon: icons.icon4,
    title: "卡券消息",
    subtitle: "查看最新卡券福利消息，0元完全免费购机"
  },
  {
    icon: icons.icon5,
    title: "系统消息",
    subtitle: "您的智商已欠费停机，请充值！"
  }
];

let messages = [{items:[]}];
for (let i = 0; i < 1000; ++i) {
  messages[0].items.push(message[Math.floor(Math.random() * 5)]);
}

let contacts = [
  {
    header: "A",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Apple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "App",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Amliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Anni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Akali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "All",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Appqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "B",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bppqq",
        phone: "13333333333"
      }
    ]
  }
];

let foods = [
  {
    header: "热销",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "加菜",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "泡菜",
        subtitle: "含米饭一份",
        sales: "月销2020份",
        praise: "赞4",
        prise: "¥0.00",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加青菜",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    "header": "米饭", items:[
    {
      icon: iconArray[Math.floor(Math.random() * 11)],
      title: "米饭",
      subtitle: "",
      sales: "月销22000份",
      praise: "赞4",
      prise: "¥2",
      activity: ""
    },
  ]},
  {
    header: "砂锅黄焖鸡套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥20.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加香菇",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加青菜",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "砂锅黄焖猪脚套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加香菇",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥25.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加百事可乐",
        subtitle: "含米饭一份",
        sales: "月销2份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加金针菇",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥24",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加青菜",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "砂锅黄焖排骨套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加百事可乐",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥28.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加香菇",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加青菜",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "招牌菜",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "铁山坪麻辣跑山鸡",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "奉节二师兄烤猪头",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销1",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销2",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销3",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销4",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销5",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销6",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销7",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销8",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销9",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销10",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销11",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销12",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
];

export { messages, contacts,foods };
