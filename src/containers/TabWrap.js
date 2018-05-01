import React, { Component } from 'react';

// 引入组件
import SearchInput from './SearchInput';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default class TabWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type, // search or nav 导航
      list: [
        {
          name:'常用',
          key:'changyong',
          navList:[
            {
              title:'新浪微博',
              url:'',
              icon:'weibo-circle'
            },
            {
              title:'36kr',
              url:'',
              icon:''
            },
            {
              title:'虎嗅网',
              url:'',
              icon:''
            },
            {
              title:'NEXT',
              url:'',
              icon:''
            },
            {
              title:'雷锋网',
              url:'',
              icon:''
            },
            {
              title:'钛媒体',
              url:'',
              icon:''
            },
            {
              title:'人人都是产品经理',
              url:'',
              icon:''
            }
          ]
        },
        {
          name:'产品',
          key:'changping',
          navList:[]
        },
        {
          name:'运营',
          key:'yunying',
          navList:[]
        },
        {
          name:'市场',
          key:'shichang',
          navList:[]
        },
        {
          name:'营销',
          key:'yingxiao',
          navList:[]
        },
        {
          name:'前端',
          key:'qianduan',
          navList:[
            {
              title:'菜鸟教程',
              url:'http://www.runoob.com',
              icon:''
            },
            {
              title:'最代码',
              url:'http://www.zuidaima.com',
              icon:''
            },
            {
              title:'前端网',
              url:'http://www.qdfuns.com',
              icon:''
            },
            {
              title:'前端度',
              url:'http://qianduandu.com',
              icon:''
            },
            {
              title:'Node.js中文社区',
              url:'http://cnodejs.org',
              icon:''
            },
            {
              title:'脚本之家',
              url:'http://www.jb51.net',
              icon:''
            },
            {
              title:'模板之家',
              url:'http://www.cssmoban.com',
              icon:''
            },
            {
              title:'ThemeForest网站模板',
              url:'http://themeforest.net',
              icon:''
            },
            {
              title:'TEMPLATED',
              url:'http://templated.co',
              icon:''
            },
            {
              title:'FontAwesome图标字体库',
              url:'http://fontawesome.dashgame.com',
              icon:''
            },
            {
              title:'HTML5资源教程分享',
              url:'http://www.html5tricks.com',
              icon:''
            },
            {
              title:'最全前端资源汇集',
              url:'http://segmentfault.com/a/1190000004978770',
              icon:''
            },
            {
              title:'全球酷站中心',
              url:'http://www.iiiimg.com',
              icon:''
            },
            {
              title:'jQuery插件库	',
              url:'http://www.jq22.com',
              icon:''
            },


          ]
        },
        {
          name:'后端',
          key:'houduan',
          navList:[]
        },
        {
          name:'测试',
          key:'ceshi',
          navList:[]
        },
        {
          name:'学习',
          key:'xuexi',
          navList:[]
        },
        {
          name:'工具',
          key:'gongju',
          navList:[]
        }
      ],
      searchList:[
        {
          name: '百度',
          icon:'ie',
          url:'',
          placeholder:'百度一下,你就知道',
          query:'baidu_txt'
        },
        {
          name: '知乎',
          icon:'zhihu',
          url:'https://www.zhihu.com/search?type=content&q=',
          placeholder:'发现更大的世界',
          query:'zhihu_question'
        },
        {
          name: '谷歌',
          icon:'google',
          url:'https://www.google.com/search?q=',
          placeholder:'Hey Google',
          query:'google_scholar'
        },
      ]
    }
  }
  render() {
    return (
      <div>
        {this.props.type === 'search' ? (
          <Tabs defaultActiveKey="百度">
            {this.state.searchList.map(item => {
              return (
                <TabPane
                  tab={
                    <span>
                      <Icon type={item.icon} />{item.name}
                    </span>
                  }
                  key={item.name}
                >
                  <SearchInput placeholder={item.placeholder} query={item.query}/>
                </TabPane>
              )
            })}
            
          </Tabs>
        ) : (
          <Tabs defaultActiveKey="changyong">
            {
              this.state.list.map((item) => {
                return (
                  <TabPane
                    tab={
                      <span>
                        {item.name}
                      </span>
                    }
                    key={item.key}
                  >
                    <ul>
                      {
                        item.navList.map((nav) => {
                          return (
                            <li key={nav.title}>
                              <a target="_blank" href={nav.url} rel={item.key}>{nav.title}</a>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </TabPane>
                )
              })
            }
          </Tabs>
        )}
      </div>
    );
  }
}
