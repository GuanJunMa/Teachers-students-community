import Mock from 'mockjs'

export default Mock.mock('http://displaydata.cn', {

// 定义首页消息
  newsData: [
    {
      'id': 1,
      'title': '重大新闻',
      'label': '安徽师范大学成新学院',
      'image': '../images/3.jpeg'
    }, {
      'id': 2,
      'title': '考研快报',
      'label': '安师大考研分数出炉',
      'image': '../images/3.jpeg'
    }, {
      'id': 3,
      'title': '随便什么',
      'label': '这是一个测试数据',
      'image': '../images/3.jpeg'
    }
  ],

  // 发现页面数据列表
  displayData: [
    {
      'id': 1,
      'title': 'VUE 渐进式JavaScript 框架',
      'href': 'https://cn.vuejs.org/',
      'content': 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',
      'image': 'vue',
      'time': '2018年3月16日',
      'grade': '8.7'
    },
    {
      'id': 2,
      'title': 'Hyperledger Explorer',
      'href': 'https://github.com/hyperledger/blockchain-explorer',
      'content': 'Hyperledger Explorer is a simple, powerful, easy-to-use, highly maintainable, open source browser for viewing activity on the underlying blockchain network.',
      'image': 'blockchain',
      'time': '2018年3月16日',
      'grade': '9.0'
    },
    {
      'id': 3,
      'title': 'The Go Programming Language',
      'href': 'https://golang.org/',
      'content': 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
      'image': 'go',
      'time': '2018年3月16日',
      'grade': '9.2'
    }
  ],

  // 首页数据列表
  homeData: [
    {
      'id': 1,
      'title': '学院要闻',
      'contentTitle': '热烈庆祝：计算机与信息学院成立！',
      'href': 'http://ci.ahnu.edu.cn/',
      'content': '安徽师范大学是安徽建校最早的高等学府。学校坐落在具有“徽风皖韵、千湖之城”美誉的国家级开放城市——芜湖，濒临浩瀚长江，傍依灵秀赭山，集江南自然之神秀、汇安徽人文之灵杰，是安徽省人民政府与教育部共建高校、国家“中西部高校基础能力建设工程”项目建设高校，是安徽省委省政府优先建设的省属重点综合性大学和安徽省“地方高水平大学”项目建设高校。',
      'image': 'computer',
      'time': '2018年3月16日'
    }, {
      'id': 1,
      'title': '校内要闻',
      'contentTitle': '喜迎校庆，安徽师范大学90周年校庆倒计时！',
      'href': 'http://90xq.ahnu.edu.cn/',
      'content': '九十载梦想传承，再续芳华。2018年，学校将本着“隆重、简朴、务实、创新”的原则，围绕“发展校庆、学术校庆、人文校庆、共享校庆”四条主线，举办庆祝建校90周年系列活动。届时竭诚欢迎海内外校友和社会各界人士莅临指导。让我们相约2018，在灵秀的赭山脚下、美丽的花津河畔，共襄盛举，绸缪事业，共展宏图，再叙“师大情”，同筑“师大梦”，凝聚“师大力量”，奋力开创高水平大学建设的新局面！',
      'image': 'schoolBrithday',
      'time': '2018年3月16日'
    }
  ],

    // 动态数据
  speakList: [
    {
      'id': 1,
      'content': 'this is my first speak',
      'user': {
        'user_name': 'guanjunma',
        'user_type': 'student'
      },
      'images': [
        'image1',
        'image2'
      ]
    }
  ]
})
