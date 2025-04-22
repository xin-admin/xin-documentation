import React from 'react';
import './index.less';
import {Card, Col, ConfigProvider, Row, Space, Typography} from 'antd';
import {createFromIconfontCN} from '@ant-design/icons';
import logos from './logos';
import versions from "./versions";
import cardData from './cardData';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_1930408_25cmzfo9vn3.js']
});

const {Text} = Typography;

const BlockTitle = (props) => (
  <>
    <h1 style={{textAlign: 'center', marginTop: 100, marginBottom: 20}}> {props.title} </h1>
    <div style={{textAlign: 'center', marginBottom: 40}}>
      <Text type="secondary">{props.description}</Text>
    </div>
  </>
)

export default () => {


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
      <video src="https://file.xinadmin.cn/file/6f00b0cbbbbc2f1c714db7bd7f8a8d52.mp4" className={'index-video'} muted autoPlay loop/>
      <div className={'index-body'}>
        <div className={'index-banner'}>
          <h1>Xin Admin</h1>
          <p>兼具性能、开发体验、安全、快速、多态、全场景等多种优势的企业级快速开发框架</p>
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

        <BlockTitle title={'软件仓库'} description={'包含系列版本仓库、文档仓库以及其它分支仓库。'} />

        <Row gutter={[20, 20]} style={{padding: '0 30px'}}>
          {versions.map((item) => (
            <Col key={item.id} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Card
                style={{border: '2px solid #fff',}}
                bordered={false}
                styles={{
                  body: {minHeight: '112px', padding: '20px 50px'},
                  title: {height: '46px', display: 'flex', alignItems: "center"}
                }}
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
                  {item.contents.map((item) => <li className={'versions-li'}>{item}</li>)}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <BlockTitle title={'生态系统项目'} description={'感谢为 XinAdmin 的诞生做出杰出贡献的优秀生态项目'} />

        <div className={'logo-group'}>
          {logos.map((item, index) => (
            <div className={'logos'} key={index}>
              <a href={item.link} target="_blank">
                <img src={item.logo} height="40" alt={item.link}/>
              </a>
            </div>
          ))}
        </div>

        <BlockTitle title={'反馈与赞助'} description={'如果你在使用过程中有任何问题，都可以加入我们的官方qq群来解答'} />

        <div className={'feedback'}>
          <div>
            <img src="https://file.xinadmin.cn/file/qqchat.jpg" height="280" alt="官方交流QQ群"/>
            <p>官方交流QQ群</p>
          </div>
          <div>
            <img src="https://file.xinadmin.cn/file/wechat.png" height="280" alt="微信公众号"/>
            <p>微信公众号</p>
          </div>
          <div>
            <img src="https://xinadmin.oss-cn-beijing.aliyuncs.com/file/wxPay.jpg" height="280" alt="微信赞助"/>
            <p>微信赞助</p>
          </div>
          <div>
            <img src="https://xinadmin.oss-cn-beijing.aliyuncs.com/file/aliPay.jpg" height="280" alt="支付宝赞助"/>
            <p>支付宝赞助</p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
