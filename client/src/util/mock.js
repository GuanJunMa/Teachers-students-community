import Mock from 'mockjs'

export default Mock.mock('http://nwesdata.cn', {

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
    dispatchData: [
        {
            'id': 1,
            'title': '开源项目',
            'label': '精选来自github的优质项目'
        },
        {
            'id': 2,
            'title': '算法工厂',
            'label': '精选算法'
        },
        {
            'id': 3,
            'title': 'test',
            'label': 'this is a test label'
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