import { Tabs, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
const tabs = [
    { title: '产后营养提示' },
    { title: '产后忌吃' },
    { title: '产后宜吃' },
    { title: '产后精选食谱' }
];
class AFood extends Component {
    goBack = () => {
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack} />}
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        height: 60, fontWeight: "bolder",
                        position: "fixed",
                        top: "0px",
                        zIndex: 100,
                        width: "100%"
                    }}
                >
                    产后饮食
                </NavBar>
                <div style={{ height: 700, marginTop: '61px' }}>
                    <WhiteSpace />
                    <Tabs tabs={tabs}
                        initialPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                    >
                        <div style={{
                            display: 'flex', justifyContent: 'center', height: '1000px',
                            backgroundColor: '#fff',
                            background: "url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')"
                        }}
                        >
                            <div style={{
                                width: '80%',
                                lineHeight: '2em', paddingLeft: '2%'
                            }}>
                                <h2 style={{ textAlign: 'center' }}>产后营养提示</h2>
                                <p style={{ textIndent: '2em', fontSize: 16, marginTop: 10 }}>
                                    因为母体在分娩时消耗各种营养素，产后大量出汗、恶露，也会损失一部分营养，所以，产后对于产妇和新生儿都非常重要。恰当的饮食调养可尽快补充足够的营养素，可补益受损的体质，防治产后病症，帮助产妇早日恢复健康，维持新生儿的生长发育。关于产后饮食有以下几点提示：
                           </p>
                                <ul style={{ textIndent: '2em' }}>
                                    <li>
                                        1、产后的第一餐饮食应首选易消化、营养丰富的流质食物。如糖水煮荷包蛋、冲蛋花汤、藕粉等。                                </li>
                                    <li>
                                        2、产后第二天就可以吃一些软食或普通饭菜了。                                </li>
                                    <li>
                                        3、产后5-7天应以米粥、软饭、烂面、蛋汤等为主食。不要吃过多油腻之物，如鸡、猪蹄等。                                </li>
                                    <li>
                                        4、产后7天以后胃纳正常，可以进步鱼、肉、蛋、鸡等。但不可过饱。                                </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', height: '1000px', backgroundColor: '#fff', backgroundColor: '#fff', background: "url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')" }}>
                            <div style={{
                                width: '80%',
                                lineHeight: '2em', paddingLeft: '12%', marginTop: 10
                            }}>
                                <h2 style={{ textAlign: 'center' }}>产后禁吃</h2>
                                <p style={{ textIndent: '2em', fontSize: 16, marginTop: 10 }}>
                                    <p style={{ textIndent: '2em', fontSize: 16, marginTop: 10 }}>
                                        1、过于寒凉、辛辣的食物；2、营养过于丰富的大补食物，比如人参，鹿茸等；3、刺激性较大的食物；4、过硬、难以消化的食物，加重新妈产后负担。                           </p>                           </p>
                                <ul style={{ textIndent: '2em' }}>
                                    <li>
                                        蔬菜：辣椒、南瓜                                </li>
                                    <li>
                                        水果：乌梅、莲子、柿子                                </li>
                                    <li>
                                        大补：人参、鹿茸、燕窝、枸杞、阿胶、鳖甲                                </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', height: '1000px', backgroundColor: '#fff', backgroundColor: '#fff', background: "url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')" }}>
                            <div style={{
                                width: '80%',
                                lineHeight: '2em', paddingLeft: '12%', marginTop: 10
                            }}>
                                <h2 style={{ textAlign: 'center' }}>产后宜吃</h2>
                                <div style={{ textIndent: '2em' }}>
                                    <p>
                                        1、含铁丰富的食物，促进体内铁的吸收；2、含有丰富B族维生素的食物，如维生素B12、叶酸的食物；3、富含蛋白质的食物，帮助产后妈妈增强营养。
                                </p>
                                    <ul>
                                        <li>肉类：鸡肉、猪肉、牛肉、猪肝、虾</li>
                                        <li>蔬菜：海带、紫菜、黄豆、菠菜、芹菜、油菜</li>
                                        <li>水果：番茄、杏、枣、橘子</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', height: '1000px', backgroundColor: '#fff', backgroundColor: '#fff', background: "url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')" }}>
                            <div style={{
                                width: '90%',
                                lineHeight: '2em', paddingLeft: '6%', marginTop: 10
                            }}>
                                <h2 style={{ textAlign: 'center' }}>产后精选食谱</h2>
                                <h3 style={{
                                    marginLeft: 30, marginTop: 10,
                                    backgroundColor: 'pink', width: '140px', textAlign: 'center'
                                }}>
                                    推荐食谱一：猪肝西红柿浓汤</h3>
                                <ul style={{ paddingLeft: 30 }}>
                                    <li>食材：大番茄2个、猪肝1小块。</li>
                                    <li>做法：</li>
                                    <li>1、番茄洗净去蒂，放在开水中泡两分钟。</li>
                                    <li>2、起油锅，爆香葱姜丝后，捞出扔掉。</li>
                                    <li>3、猪肝在流动水下冲洗干净，放清水里浸泡半个小时。然后取出切薄片，放水下冲洗至无血水，沥干，放料酒，姜丝，葱段，一点淀粉拌匀静置。</li>
                                    <li>4、番茄去皮，切小块。</li>
                                    <li>5、往锅中倒入番茄翻炒几下，放半汤匙白糖，反复煸炒出沙起糊，倒一大碗水，煮开加盖转小火炖20-30分钟左右成番茄浓汤。</li>
                                    <li>6、开盖放盐和鸡精调好味。火开大，把猪肝放入，等待大约半分钟，看到猪肝颜色发白即可关火撒葱花出锅。</li>
                                </ul>
                                <p style={{ paddingLeft: '6%' }}>功效：番茄猪肝汤味道鲜美，帮助妈妈补肝养血，去浮肿，提高妈妈免疫力。</p>
                                <h3 style={{
                                    marginLeft: 30, marginTop: 10,
                                    backgroundColor: 'pink', width: '140px', textAlign: 'center'
                                }}>
                                    推荐食谱二：黑豆乌鸡汤
                            </h3>
                                <div style={{ paddingLeft: 30 }}>
                                    食材：黑豆150克、乌骨鸡1只、枣（干）10个、食盐适量、姜5克。</div>
                                <ul style={{ paddingLeft: 30 }}>
                                    <li>做法：</li>
                                    <li>1、将处理好的乌鸡洗净备用</li>
                                    <li>2、黑豆放入铁锅中干炒至豆衣裂开，再用清水洗净，晾干备用。</li>
                                    <li>3、将红枣、生姜分别冼净，红枣去核，生姜刮皮切片，备用。加清水适量于锅，用猛火烧沸，放入黑豆、乌鸡、红枣和生姜。</li>
                                    <li>4、改用中火继续煲约3小时。</li>
                                    <li>5、加入适量盐，即可。</li>
                                    <li>6、开盖放盐和鸡精调好味。火开大，把猪肝放入，等待大约半分钟，看到猪肝颜色发白即可关火撒葱花出锅。</li>

                                </ul>
                                <p style={{ paddingLeft: '6%' }}>功效：食用乌鸡，可提高生理机能、延缓衰老、强筋健骨、对妇女缺铁性贫血症等有明显功效。</p>

                            </div>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}
export default withRouter(AFood);