import React, { useState } from 'react';
import './index.less';
import { Card, Col, ConfigProvider, Row, Space, Typography } from 'antd';
import {createFromIconfontCN, GithubFilled, GithubOutlined} from '@ant-design/icons';
import thinkphp from '../../static/logo/thinkphp.png';
import haoliangyunqing from '../../static/logo/haoliangyunqing.jpg';
import thinklogo from '../../static/logo/think.svg';
import tarologo from '../../static/logo/taro-logo.png';
import wx from '../../static/wx.jpg';


const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_1930408_25cmzfo9vn3.js']
});

const { Text } = Typography;
const Index = () => {

  const logos = [
    {
      logo: thinkphp,
      link: 'https://www.thinkphp.cn/'
    },
    {
      logo: haoliangyunqing,
      link: 'https://www.haoliangyun.com/?aff=tK3srG'
    }
  ]

  const cardData = [
    {
      id: 1,
      title: '全栈开发框架',
      content: '拥有前台门户、前台用户端、后台管理系统、App、多端小程序等全栈解决方案，更方便的开阔你的业务。',
      iconName: 'icon-kuangjia'
    },
    {
      id: 2,
      title: '响应式页面',
      content: '使用 Ant Design 作为前端框架，不仅具备响应式页面，而且贴合阿里系设计风格，让你的管理系统更漂亮。',
      iconName: 'icon-a-Group801'
    },
    {
      id: 3,
      title: '丰富功能特性',
      content: '包含完善的权限菜单管理、数据字典、文件系统、系统监控、系统设置等功能方便开发者们开发。',
      iconName: 'icon-paidui'
    },
    {
      id: 4,
      title: '前后端分离',
      content: '系统采用前后端分离架构，API 开发规范，使前后端代码互不干扰，并且拥有完善的错误处理和响应机制。',
      iconName: 'icon-a-Group789'
    },
    {
      id: 5,
      title: 'CRUD 代码生成',
      content: '可视化设计前端表格、搜索、表单页面，一键生成后台增删改查代码，自动创建数据表，可为你节省大量时间。',
      iconName: 'icon-a-Group808'
    },
    {
      id: 6,
      title: '系统架构',
      content: '基于 PHP8.2 和 TypeScript，丰富的IDE支持，对新手也非常友好，强大且实用，可用于大型商业化项目。',
      iconName: 'icon-jiagou'
    },
  ]

  const versions = [
    {
      versions: '',
      title: 'Laravel 版本',
      logo: 'https://laravel.com/img/logomark.min.svg',
      contents: [
        'Xin Admin 的 Laravel 版本。',
        'Laravel 清晰、简洁的代码结构。',
        '代码组织与模块化开发体验。',
        '完善的社区支持与丰富的开发文档。',
        '开发支持多语言。',
        '强大代码生成器。',
      ],
      github: {
        icon: 'https://img.shields.io/github/stars/xinframe%2FXin-Laravel?style=flat&logo=github&logoColor=red&labelColor=%23f3f5f8&color=red',
        url: 'https://github.com/xinframe/Xin-Laravel'
      },
    },
    {
      versions: '',
      title: 'Think 版本',
      logo: thinklogo,
      contents: [
        'Xin Admin 的 Think 版本。',
        '优越的性能与接口访问速度。',
        '轻量级开发框架，便捷使用。',
        '在国内有良好的文档和基础。',
        '开发支持多语言。',
        '强大代码生成器。'
      ],
      github: {
        icon: 'https://img.shields.io/github/stars/xinframe%2FXin-Admin?style=flat&logo=github&logoColor=%23009e3c&labelColor=%23f3f5f8&color=%23009e3c',
        url: 'https://github.com/xinframe/Xin-Admin'
      },
    },
    {
      versions: '',
      title: 'Taro 多端小程序',
      logo: tarologo,
      contents: [
        'Xin Admin 的 Taro 前端示例。',
        '支持包括鸿蒙在内的小程序框架。',
        '开放式跨端跨框架解决方案。',
        '一套代码就能够适配到多端的能力。',
        '与后台前端接口吻合，互通使用。',
        '完善的TS开发体验。'
      ],
      github: {
        icon: 'https://img.shields.io/github/stars/xinframe%2FXin-Taro?style=flat&logo=github&logoColor=%231183c4&labelColor=%23f3f5f8',
        url: 'https://github.com/xinframe/Xin-Taro'
      },
    },
    {
      versions: '',
      title: '文档仓库',
      logo: 'https://file.xinadmin.cn/file/favicons.ico',
      contents: [
        'Xin Admin 的 文档仓库。',
        '基于 Dumi 开发的静态文档站。',
        '内置全文搜索，更好的编译性能。',
        '欢迎大家共享开发文档与纠错。'
      ],
      github: {
        icon: 'https://img.shields.io/github/stars/xinframe%2FXin-Documentation?style=flat&logo=github&logoColor=%231677ff&labelColor=%23f3f5f8&color=%231677ff',
        url: 'https://github.com/xinframe/Xin-Documentation'
      },
    }
  ]

  const blockTitle = (title, description) => (
    <>
      <h1 style={{textAlign: 'center', marginTop: 100, marginBottom: 20}}> {title} </h1>
      <div style={{textAlign: 'center', marginBottom: 40}}>
        <Text type="secondary">{description}</Text>
      </div>
    </>
  )

  return (
    <ConfigProvider
      theme={{
        token: {
          boxShadowTertiary: '8px 8px 20px 0 rgba(55,99,170,.15)',
          colorBgContainer: "linear-gradient(0deg,#fff,#f3f5f8)",
          borderRadiusSM: 8,
          colorBgLayout: 'rgba(0,0,0,0)'
        },
      }}
    >
      <video src="https://file.xinadmin.cn/file/6f00b0cbbbbc2f1c714db7bd7f8a8d52.mp4" className={'index-video'} muted
        autoPlay loop />
      <div className={'index-body'}>
        <div className={'index-banner'}>
          <h1>Xin Admin</h1>
          <p>基于流行技术栈（Think、Laravel、Webman) + React + Ant Design + Umijs 开发的中后台管理框架</p>
          <a href="/doc/start" style={{marginRight: 20}}>快速上手</a>
          <a href="https://demo.xinadmin.cn" target={'_blank'}>查看演示</a>
        </div>
        <Row gutter={[20, 20]} style={{padding: '0 30px'}}>
          {cardData.map((item) => (
            <Col key={item.id} xs={12} sm={8} md={8} lg={6} xl={4} xxl={4}>
              <Card
                size={'small'}
                style={{border: '2px solid #fff',}}
                bordered={false}
                styles={{body: {minHeight: '112px'}, title: {height: '46px', display: 'flex', alignItems: "center"}}}
                title={
                  <Space>
                    <IconFont type={item.iconName} style={{fontSize: '28px'}}/>
                    {item.title}
                  </Space>
                }
              >
                <div className={'line-clamp-three'}>
                  {item.content}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {blockTitle('软件仓库', '包含系列版本仓库、文档仓库以及其它分支仓库。')}
        <Row gutter={[20, 20]} style={{padding: '0 30px'}}>
          {versions.map((item) => (
            <Col key={item.id} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Card
                style={{border: '2px solid #fff',}}
                bordered={false}
                styles={{body: {minHeight: '112px', padding: '20px 50px'}, title: {height: '46px', display: 'flex', alignItems: "center"}}}
                title={
                  <Space>
                    <img src={item.logo} alt="logo" height={24} style={{maxWidth: '66px'}}/>
                    {item.title}
                  </Space>
                }
                extra={
                  <a href={item.github.url} target={'_blank'}>
                    <img alt="GitHub Org's stars" src={item.github.icon}/>
                  </a>
                }
              >
                <ul>
                  {item.contents.map((item) => <li className={'versions-li'} >{item}</li>)}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        {blockTitle('金牌赞助商', '赞助商招商联系QQ：2302563948，备注来意')}
        <div style={{margin: '0 20px', background: '#fff', padding: '40px 20px', borderRadius: '8px'}}>
          <Row justify="space-between" className={'logo-group'}>
            {logos.map((data, index) => {
              return (
                <Col className={'logos'} key={index}>
                  <a href={data.link} target="_blank">
                    <div style={{backgroundImage: 'url(' + data.logo + ')'}} className={'logo'}></div>
                  </a>
                </Col>
              )
            })}
          </Row>
        </div>
        <h1 style={{textAlign: 'center', marginTop: 60, marginBottom: 0}}> 反馈与共建 </h1>
        <div style={{textAlign: 'center', marginBottom: 20}}>
          <Text type="secondary">如果你在使用过程中有任何问题，都可以加入我们的官方qq群来解答</Text>
        </div>
        <div className={'feedback'}>
          <div>
            <img src="https://file.xinadmin.cn/file/qqchat.jpg" height="200" alt="qq群"/>
            <p>官方交流QQ群</p>
          </div>
          <div>
            <img src="https://file.xinadmin.cn/file/wechat.png" height="200" alt="微信公众号"/>
            <p>微信公众号</p>
          </div>
          <div>
            <img src={wx} height="200" alt="微信群"/>
            <p>微信群</p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};


export default Index;
