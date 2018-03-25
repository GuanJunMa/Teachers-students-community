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
  ],

  cList: [
    {
      'title': '实现回文数算法',
      'content': '  “回文”是指正读反读都能读通的句子，它是古今中外都有的一种修辞方式和文字游戏，如“我为人人，人人为我”等。在数学中也有这样一类数字有这样的特征，成为回文数（palindrome number）。设n是一任意自然数。若将n的各位数字反向排列所得自然数n1与n相等，则称n为一回文数。例如，若n=1234321，则称n为一回文数；但若n=1234567，则n不是回文数。',
      'id': 1,
      'image': 'huiwen'
    }, {
      'title': '打印出所有的“水仙花数”',
      'content': '所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方＋5的三次方＋3的三次方。',
      'id': 2,
      'image': 'daozhi'
    }, {
      'title': '求所有‘完数’',
      'content': '一个数如果恰好等于它的因子之和，这个数就称为“完数”。例如6=1＋2＋3.编程找出1000以内的所有完数。',
      'id': 3,
      'image': 'jinzita'
    }, {
      'title': '找规律',
      'content': '有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？',
      'id': 4,
      'image': 'jinzita'
    }, {
      'title': '物理问题',
      'content': '一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？',
      'id': 5,
      'image': 'jinzita'
    }, {
      'title': '猴子摘桃',
      'content': '一只猴子摘了N个桃子第一天吃了一半又多吃了一个,第二天又吃了余下的一半又多吃了一个,到第十天的时候发现还有一个.',
      'id': 6,
      'image': 'jinzita'
    }, {
      'title': '鸡兔同笼',
      'content': '有若干只鸡和兔在同个笼子里，从上面数，有S个头；从下面数，有N只脚。求笼中各有几只鸡和几只兔？',
      'id': 7,
      'image': 'jinzita'
    }
  ],

  mathList: [
    {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }, {
      'title': '求极限练习题',
      'content': '123',
      'id': 1,
      'image': 'jixian'
    }
  ],

  englishList: [
    {
      'title': '阅读翻译:The dogs that protect little penguins ',
      'content': "The dogs that protect little penguins  Middle Island, a beautiful, rugged and windswept outcrop off the coast of southern Victoria is home to a colony of the world's smallest penguins. Originally known as fairy penguins, before some pen-pusher deemed that politically incorrect, they've now been given the far more dreary sounding title of little penguins. To be fair, they are just that - little, standing at 30 to 40cm tall.  There used to be hundreds of them on Middle Island - but that was before the foxes got to them. We went from a point where we had around 800 penguins down to where we could only find four,says Peter Abbott from the Penguin Preservation Project. In our biggest bird kill, we found 360 birds killed over about two nights. Foxes are thrill killers. They'll kill anything they can find. That particular incident was in 2005, but the problem had been building up for a few years. Middle Island - which is uninhabited by humans - is separated from the mainland by a stretch of water measuring no more than 20 or 30m.      At low tide, and when sand builds up in the narrow channel, foxes can cross from the mainland barely getting their paws wet.  The problem first became apparent in the year 2000 when the sea's natural current led to increased sand build-up.  Over time the fox population grew as it became clear they had an easy source of food. The fairy penguins, as I'm going to call them, faced being wiped out on Middle Island - until a chicken farmer, by the made-for-cinema name of Swampy Marsh, came up with a plan. He suggested sending one of his Maremma dogs to protect the birds. In Australia those dogs are generally used for chicken protection or goats or sheep,says Abbott.  The dog, the first of several to be used on Middle Island, was called Oddball - and Oddball made quite an impact.  We immediately saw a change in the pattern of the foxes,says Abbott.  Leading up to when the dog went on the island, every morning we'd find fox prints on the beach. Putting a dog on the island changed the hierarchy. The foxes can hear the dogs barking, they can smell them so they go somewhere else. Amazingly, since Oddball and his four-legged successors were introduced 10 years ago, there has not been a single penguin killed by a fox on Middle Island.  The fairy penguin population has gone back up to almost 200.  The current dogs patrolling Middle Island are Eudy and Tula, named after the scientific term for the fairy penguin: Eudyptula.  They are the sixth and seventh dogs to be used and a new puppy is being trained up by Peter Abbott and his team to start work in 2016.  The dogs operate in the penguin's breeding season, usually from October to March, when they spend five or six days a week on the island.  Even when the dogs are not there, their lingering scent is enough to keep the foxes away.",
      'id': 1,
      'image': 'fanyi'
    }, {
      'title': '阅读翻译:The dogs that protect little penguins ',
      'content': "The dogs that protect little penguins  Middle Island, a beautiful, rugged and windswept outcrop off the coast of southern Victoria is home to a colony of the world's smallest penguins. Originally known as fairy penguins, before some pen-pusher deemed that politically incorrect, they've now been given the far more dreary sounding title of little penguins. To be fair, they are just that - little, standing at 30 to 40cm tall.  There used to be hundreds of them on Middle Island - but that was before the foxes got to them. We went from a point where we had around 800 penguins down to where we could only find four,says Peter Abbott from the Penguin Preservation Project. In our biggest bird kill, we found 360 birds killed over about two nights. Foxes are thrill killers. They'll kill anything they can find. That particular incident was in 2005, but the problem had been building up for a few years. Middle Island - which is uninhabited by humans - is separated from the mainland by a stretch of water measuring no more than 20 or 30m.      At low tide, and when sand builds up in the narrow channel, foxes can cross from the mainland barely getting their paws wet.  The problem first became apparent in the year 2000 when the sea's natural current led to increased sand build-up.  Over time the fox population grew as it became clear they had an easy source of food. The fairy penguins, as I'm going to call them, faced being wiped out on Middle Island - until a chicken farmer, by the made-for-cinema name of Swampy Marsh, came up with a plan. He suggested sending one of his Maremma dogs to protect the birds. In Australia those dogs are generally used for chicken protection or goats or sheep,says Abbott.  The dog, the first of several to be used on Middle Island, was called Oddball - and Oddball made quite an impact.  We immediately saw a change in the pattern of the foxes,says Abbott.  Leading up to when the dog went on the island, every morning we'd find fox prints on the beach. Putting a dog on the island changed the hierarchy. The foxes can hear the dogs barking, they can smell them so they go somewhere else. Amazingly, since Oddball and his four-legged successors were introduced 10 years ago, there has not been a single penguin killed by a fox on Middle Island.  The fairy penguin population has gone back up to almost 200.  The current dogs patrolling Middle Island are Eudy and Tula, named after the scientific term for the fairy penguin: Eudyptula.  They are the sixth and seventh dogs to be used and a new puppy is being trained up by Peter Abbott and his team to start work in 2016.  The dogs operate in the penguin's breeding season, usually from October to March, when they spend five or six days a week on the island.  Even when the dogs are not there, their lingering scent is enough to keep the foxes away.",
      'id': 2,
      'image': 'fanyi'
    }
  ],

  communicationsList: [
    {
      'title': '简答题',
      'content': '简述脉冲编码调制的主要过程？',
      'id': 1,
      'image': 'fanyi'
    }, {
      'title': '简答题',
      'content': '随参信道传输媒质的特点？',
      'id': 1,
      'image': 'fanyi'
    }, {
      'title': '解答题',
      'content': '设信息序列为100000000001100001，试编为AMI 码和HDB3码（第一个非零码编为+1），并画出相应波形。',
      'id': 1,
      'image': 'fanyi'
    }, {
      'title': '解答题',
      'content': '已知调制信号载波为，分别画出AM、DSB、SSB（下边带）信号的频谱。',
      'id': 1,
      'image': 'fanyi'
    }, {
      'title': '大题',
      'content': '设发送数字信息为110010101100，试分别画出OOK、2FSK、2PSK及2DPSK信号的波形示意图。(对2FSK信号,“0”对应Ts=2Tc，“1”对应Ts=Tc；其余信号Ts=Tc，其中Ts为码元周期，Tc为载波周期；对2DPSK信号，代表“0”、代表“1”，参考相位为0；对2PSK信号，代表“0”、代表“1”。)',
      'id': 1,
      'image': 'fanyi'
    }
  ],

  newsList: [
    {
      'id': 1,
      'title': '使用git仓库搭建maven私服',
      'time': '2018年3月2日',
      'content': '自己编写的jar，想要通过maven方式进行分发必须发布到maven仓库。如果没有自己的私服，我们可以使用折中的办法来实现。maven客户端从maven仓库拉取构件时，实际上就是通过http协议去拉取对应仓库地址上的，对应目录中的metadata文件，查询需要的版本，就可以找到jar文件，下载到本机仓库。从而完成了依赖构件的拉取。就是说，我们可以使用任何http服务器，按照一定的目录结构部署构件，从而当做一个私服来使用。http服务器也没有？那好吧，悄悄告诉你，几乎所有的git服务都支持直接通过http访问指定文件的功能。',
      'image': 'test',
      'href': 'https://my.oschina.net/polly/blog/1649362'
    }
  ],

  myselfData: {
    'name': '马冠军',
    'type': '学生',
    'phone': '18895326040',
    'no': '14111206059',
    'major': '物联网工程'
  }
})
