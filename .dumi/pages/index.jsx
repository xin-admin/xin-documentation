import React, {useState} from 'react';
import './index.less';
import {Card, Col, ConfigProvider, Row, Segmented, Space, Typography} from 'antd';
import {createFromIconfontCN} from '@ant-design/icons';
import thinkphp from '../../static/logo/thinkphp.png';
import antd from '../../static/logo/antd.png';
import umijs from '../../static/logo/umijs.png';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_1930408_25cmzfo9vn3.js']
});

const {Text} = Typography;
const Index = () => {
  const logos = [thinkphp, antd, umijs]

  const cardData = [
    {
      id: 1,
      title: '全栈开发框架',
      content: '拥有前台门户、前台用户端、后台管理系统、App、小程序等全栈解决方案',
      iconName: 'icon-kuangjia'
    },
    {
      id: 2,
      title: 'Swagger 文档',
      content: '基于 Swagger-PHP 一键生成Api文档，支持UmiJs一键生成前端接口',
      iconName: 'icon-a-Group808'
    },
    {
      id: 4,
      title: '权限验证',
      content: ' 完善的双端权限验证，支持无限级菜单，以及页面按钮级权限控制 ',
      iconName: 'icon-a-Group796'
    },
    {id: 5, title: '数据字典', content: '强大且实用的数据字典，支持设置数据展示状态。', iconName: 'icon-cengji'},
    {
      id: 7,
      title: '文件系统',
      content: '拥有完善的文件系统，支持图片、视频、压缩包等文件格式上传',
      iconName: 'icon-a-Group807'
    },
    {
      id: 6,
      title: '系统架构',
      content: '基于 PHP8.2 和 React，强大且实用，也可以让你的技术栈更上一层楼',
      iconName: 'icon-jiagou'
    },
  ]

  const programmeList = [
    {
      id: 1,
      key: 'medicine',
      title: '医疗服务解决方案',
      headIcon: 'https://qcloudimg.tencent-cloud.cn/raw/bfbcf8d7614bcd231c16da40ea1d48b5.png',
      headTitle: '医疗服务',
      content: [
        "适用场景：医疗HIS、医疗CRM、全民健康平台、家庭医生APP、挂号小程序等",
        "适用系统：Xin Admin",
        "Xin Admin 拥有强大的CRUD以及系统字典功能，在帮助医疗行业软件快速开发的同时，并可以进行高度的自定义开发",
        "为满足医疗大健康客户的资源定制化需求，我们的系统全方位发展，支持全端开发，不仅适用于医疗内部系统的开发，也可以作为患者APP的开发",
        "极大的减少了业务场景中频繁的代码操作，并且不失灵活性！",
        "适用客户：医联体、医疗集团、影像中心"
      ],
      img: 'https://main.qcloudimg.com/raw/413228b068a16c5e2f59a3e7fe72ac2f.png'
    },
    {
      id: 2,
      key: 'manufacture',
      title: '文旅产业数字化转型',
      headIcon: 'https://qcloudimg.tencent-cloud.cn/raw/e44f8613c89741b78886fc6680effaa7.png',
      headTitle: '文旅',
      content: [
        "适用场景：景区购票、停车场、商超、租车等",
        "适用系统：Xin Admin",
        "通过 Xin Admin ，为目的地、政府、景区、游客等提供基于全流程服务和管理的智慧文旅应用体系。",
        "面向景区管理者和消费者，提供景区游客服务、景区智慧管理和智慧营销等一站式产品和服务能力，做景区数字化助手。",
        "通过平台、技术、连接、内容，助力博物馆和文博产业，实现馆内管理与保护、文物价值创新、优化展馆体验、提升文化教育。",
        "通过 Xin Admin 在科技领域的前沿探索和丰富实践，助力全国科普机构提升场馆建设效能、创新展教服务，做科技馆的数字化助手，助力旅游业以及文化产业向私有化数字转型",
      ],
      img: 'https://main.qcloudimg.com/raw/be630d00a9699a73c8ddf29c768cee16.svg'
    },
    {
      id: 3,
      key: 'restaurant',
      title: '教育行业数字助手',
      headIcon: 'https://qcloudimg.tencent-cloud.cn/raw/af14217f927eedc0c3c403ddb0b4a8a3.png',
      headTitle: '教育',
      content: [
        "适用场景：上课打卡App/小程序、在线课堂、搜题、问卷等",
        "适用系统：Xin Admin",
        "提供一站式云计算基础资源，如服务器、数据库、云存储、带宽、大数据等服务，满足企业建立网站或 App、存储课件、存储录制的课程和图片等。",
        "提供互动课堂解决方案，包含直播、点播及交互式白板产品，多终端覆盖，支持高清实时视频通信，帮助企业快速搭建在线直播点播课程。",
        "基于 DRM 加密技术，对直播、点播课程进行加密，防录制、防盗链，全方位护航课程版权内容。",
        "基于人脸识别、情绪识别等 AI 能力，准确识别教学过程中老师的上课状态，如板书追踪、关键点识别等，帮助教师提升教学质量。"
      ],
      img: 'https://cloudcache.tencent-cloud.com/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-action-panel3-img-calendar_553.png'
    },
    {
      id: 4,
      key: 'shop',
      title: '稳定可靠一站式云服务',
      headIcon: 'https://qcloudimg.tencent-cloud.cn/raw/c92a7debc16466ddd27a7e5b0c1eb6ef.png',
      headTitle: '实体经济',
      content: [
        "适用场景：智慧油站、点餐小程序、排队买单、制造等",
        "适用系统：Xin Admin Or Xin Admin Taro",
        "只需编写核心逻辑代码，内建小程序用户鉴权，无需关注后端配置与部署，专注于业务开发。",
        "源由 Xin Admin 提供专业支持，满足不同业务场景和需求，具备快速拓展能力，确保服务稳定，数据安全。",
        "推动实体经济全行业上云，快速开发和便捷的自定义使得客户以及开发者都能满足需求",
      ],
      img: 'https://cloudcache.tencent-cloud.com/qcloud/ui/static/portal_advantage_new/39505120-49d8-475a-b330-73fd8d767e87.png'
    },
    {
      id: 5,
      key: 'game',
      title: '打造全域融合信息化平台',
      headIcon: 'https://qcloudimg.tencent-cloud.cn/raw/9780f877770e03979b7462549a17ad8f.png',
      headTitle: '政务',
      content: [
        "适用场景：暂无",
        "适用系统：Xin Admin",
        "基于对政府行业需求的深度理解，将客户需求与腾讯的产品技术、顶尖智库资源、生态创新能力、建设运营体系等政府信息化转型要素有机融合，打造“全域融合”新理念新模式。",
        "通过 Xin Admin 独有的管理端、电脑端、Taro 三端融合，释放平台连接价值，实现政府公职人员、企业和民众的三端最广泛的连接和协同，建设共建共治共享全民参与的人民城市。",
        "通过政务服务、政务协同、政府监管、城市治理、科学决策、未来社区、乡村振兴和产业发展等领域体系化的产品能力矩阵，全方位支撑政府的数字化转型和产业升级。",
        "结合国家新基建战略，依托腾讯政务“数字底座”能力，为城市管理和政务服务提供强有力的“弹性”支撑，可靠的安全保障，做一朵更懂政务行业的“云”，让城市能够更好的数字化生长。"
      ],
      img: 'https://main.qcloudimg.com/raw/9216eb61ff975759978f1983c3a6feac.svg'
    }
  ];

  const [iconHoverId, setIconHoverId] = useState();
  const characteristicOption = programmeList.map((item) => {
    return {
      label: (
        <div
          style={{padding: '20px 0'}}
          onMouseEnter={() => {
            setIconHoverId(item.id)
          }}
          onMouseLeave={() => {
            setIconHoverId(0)
          }}
        >
          <div style={{backgroundImage: 'url(' + item.headIcon + ')'}}
               className={'characteristic ' + (iconHoverId === item.id ? 'is_enter' : 'is_leave')}></div>
          <div style={{width: '100%', textAlign: 'center', marginTop: 10}}>{item.headTitle}</div>
        </div>
      ),
      value: item.key,
    }
  })

  const [programmeData, setProgrammeData] = useState(programmeList[0]);
  const [programmeContent, setProgrammeContent] = useState(programmeList[0].content);

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
             autoPlay loop/>
      <div className={'index-body'}>
        <div className={'banner'}>
          <h1>Xin Admin</h1>
          <a href="/doc/start" style={{marginRight: 20}}>快速上手</a>
          <a href="https://demo.xinadmin.cn" target={'_blank'}>查看演示</a>
        </div>
        <Row gutter={[20, 20]} style={{padding: '0 20px'}}>
          {cardData.map((item) => (
            <Col key={item.id} xs={12} sm={8} md={8} lg={6} xl={4} xxl={4}>
              <Card
                size={'small'}
                style={{border: '2px solid #fff',}}
                bordered={false}
                styles={{body: {height: '96px'}}}
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

        <h1 style={{textAlign: 'center', marginTop: 60, marginBottom: 0}}>
          面向丰富业务场景的全栈解决方案
        </h1>
        <div style={{textAlign: 'center', marginBottom: 20}}>
          <Text type="secondary">仅作为案例参考</Text>
        </div>

        <Segmented
          rootClassName={'index-segmented'}
          block
          options={characteristicOption}
          style={{padding: '0 20px', marginBottom: 20}}
          onChange={(value) => {
            programmeList.forEach((item) => {
              if (item.key === value) {
                setProgrammeData(item)
                setProgrammeContent(item.content)
              }
            })
          }}
        />

        <Card style={{border: '2px solid #f3f5f8', margin: '0 20px'}} title={programmeData.title}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space direction={'vertical'} size={'small'}>
                {programmeContent.map((item) => (
                  <div key={item}>
                    <Text type="secondary">{item}</Text><br/>
                  </div>
                ))}
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}
                 style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center'}}>
              <img src={programmeData.img} alt={programmeData.title} style={{height: '300px', padding: '20px 0'}}/>
            </Col>
          </Row>
        </Card>

        <h1 style={{textAlign: 'center', marginTop: 60, marginBottom: 0}}> 鸣谢单位和赞助商列表 </h1>
        <div style={{textAlign: 'center', marginBottom: 20}}>
          <Text type="secondary">如果你发现我们使用了你的技术，请联系作者添加，因为工作量较大，暂未统计所有</Text>
        </div>

        <div style={{margin: '0 20px', background: '#fff', padding: '40px 20px', borderRadius: '8px'}}>
          <Row justify="space-evenly" className={'logo-group'}>
            {logos.map((src, index) => {
              return (
                <Col className={'logos'} key={index}>
                  <div style={{backgroundImage: 'url(' + src + ')'}} className={'logo'}></div>
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
        </div>
      </div>
    </ConfigProvider>
  );
};


export default Index;
