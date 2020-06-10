import React, { Component } from 'react'
import { Accordion, List ,Icon} from 'antd-mobile';

import { withRouter } from 'react-router-dom'

class AAnxiety extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fff'}}>
                <div style={{width:'90%',margin:'auto',fontSize:16,lineHeight:'2em'}}>
                   <div style={{margin:'auto'}}>
                        <img src="https://i.loli.net/2020/06/03/xj7efKvSM2uybDc.jpg"
                    style={{width:'100%'}}/>
                   </div>
                    <div style={{textIndent:'2em'}}>
                    产后焦虑症，是发生在产后的一种以焦虑为主要表现的精神疾患。通常在产后4周内出现症状。与家人关系紧张，对周围事情缺乏兴趣，出现自暴自弃，恐怖、焦虑、沮丧和对自身及婴儿健康过度担忧，常失去生活自理及照料婴儿的能力，对人充满敌意，呼吸心跳加快，泌乳减少，厌食失眠消瘦，甚至出现自杀和杀婴的念头。
                    </div>
                    <Accordion defaultActiveKey="0" style={{marginTop:20}} onChange={this.onChange}>
                        <Accordion.Panel header="表现症状">
                            <ol style={{textIndent:'2em'}}>
                                <li>在身体上面产后的妈妈也会异常疲劳或虚弱状态。思想不能集中，语言表达紊乱，缺乏逻辑性和综合判断能力。还会有明显的自卑感，常常不由自主地过度自责，对任何事都缺乏自信。</li>
                                <li>产后妈妈一般会出现精神焦虑不安或呆滞，常为一点小事而恼怒，或者几天不言不语、不吃不喝。整天感觉沮丧、伤心，或"空荡荡的"，而且每天如此。</li>
                                <li>产后抑郁的患者往往是初产妇，发病于分娩的三天内，症状较轻，主要表现为情绪沮丧、焦虑、失眠、食欲下降、易激怒、注意力不集中、持续数日后症状可自行缓解。</li>
                                <li>在精神方面产后的妈妈难以集中精力，极端易怒或烦躁，或过多的哭泣。经常性地为自己或宝宝的健康担忧，或者经常感觉有些可怕的事情将要发生</li>
                            </ol>
                        </Accordion.Panel>
                        <Accordion.Panel header="疾病调节">
                            <ol style={{textIndent:'2em'}}>
                                <li>1、树立信心。<br/><span style={{paddingLeft:60}}>
                                    要明白作为母亲的不可推卸的职责，也应深刻体会自己付出母爱的社会价值和人生价值，保持心理平衡。</span>
                                </li>
                                <li>2、经验交流。<br/><span style={{paddingLeft:60}}>
                                产后忧郁烦躁怎么办，与其他新妈妈聊天，谈各自的感受也是件不错的自我调节措施。
                                    </span></li>
                                <li>3、学会放松。<br/><span style={{paddingLeft:60}}>
                                学会在宝宝睡觉的时候让自己放松，读书、洗澡、看影片，或找点其它你感兴趣的事情做。   
                                </span></li>
                                <li>4、找人聊天。<br/><span style={{paddingLeft:60}}>
                                把自己的感觉和感受向丈夫，家人，以及朋友倾诉。无论什么时候，只要觉得烦闷，找人聊天，叙说心中的烦闷永远是一个解决问题的好方法。
                                </span></li>
                                <li>5、找个帮手。<br/><span style={{paddingLeft:60}}>
                                坐月子确实有一定的道理，能让产妇身心都得到足够的放松。但相对过去的大家庭来说，如今的妈妈要辛苦得多，因为她们多半要承担起照顾宝宝的大部分任务。如果能够找到一个好帮手的话，产妇就能有一个喘息的空间和机会，恢复效果也会好得多。    
                                </span></li>
                            </ol>
                        </Accordion.Panel>
                        <Accordion.Panel header="注意事项">
                            <ol style={{textIndent:'2em'}}>
                                <li>首先，患者要加强营养，饮食总宜清淡，忌生冷、辛辣、油腻、不易消化食物。为免温热食物助邪，可多吃新鲜蔬菜。若气虚者，可予鸡汤、桂圆汤等。若血热者可食梨、橘子、西瓜等水果但宜温服。</li>
                                <li>其次，对于属血热、血瘀、肝郁化热的病人，应加强饮料服食，如藕汁、梨汁、橘子汁、西瓜汁，以清热化淤。</li>
                                <li>然后，脾虚气弱的病人，遇寒冷季节可增加羊肉、狗肉等温补食品。肝肾阳虚的病人，可增加滋阴食物，如甲鱼、龟肉等。</li>
                                <li>最后，在日常生活中患者要卧床休息静养，避免情绪激动，保持心情舒畅，安慰病人，消除思想顾虑，特别要注意意外的精神刺激。保持室内空气流通，祛除秽浊之气，但要注意保暖，避免受寒。若血热证者，衣服不宜过暖。</li>
                            </ol>
                        </Accordion.Panel>
                        <Accordion.Panel header="预防方法">
                            <div style={{textIndent:'2em'}}>
                            首先，在怀孕前就要做好生理及心理两方面的准备。学习妊娠和分娩的知识，系统地参加围产保健。很多医学研究表明，不同的性格会有不同的心情晴雨表，性格是对一个人情绪影响的一个很重要的因素。性格不稳定、情绪控制差、敏感、多疑、压抑、悲观的准妈妈在孕期较易出现紧张、焦虑、抑郁等不良情绪;而情绪稳定、控制力强、自信心与自尊心强、乐观的准妈妈心理稳定性高，孕期心理健康状态好。
                            </div>
                            <div style={{textIndent:'2em'}}>
                            另外，家属要给产妇提供一个良好的家庭氛围，调节好家庭成员的关系。即使产妇有焦虑倾向，丈夫要善于开导，调整其心理状态，必要时也可请心理医生进行咨询和疏导，参与一些社交活动;足够的营养和充分的休息能够避免心理疾病的发生。此外，对存在焦虑危险因素的孕产妇应严密监测;对已经发生焦虑的患者应尽早诊断评估，在孕期及产后采取安全有效的干预治疗及护理措施。
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel header="治疗方法">

                        </Accordion.Panel>
                    </Accordion>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(AAnxiety)


{/* <div style={{backgroundColor:'#fff',width:'100%',height:'100%',
background:"url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')"}}>
        <div>
            <div style={{width:'70%',
                lineHeight:'2em',paddingLeft:'12%'}}>
                <h2 style={{textAlign:'center'}}>产后焦虑</h2>
                <p style={{textIndent:'2em',fontSize:16,marginTop:10}}>
                产后焦虑症，是发生在产后的一种以焦虑为主要表现的精神疾患。通常在产后4周内出现症状。与家人关系紧张，对周围事情缺乏兴趣，出现自暴自弃，恐怖、焦虑、沮丧和对自身及婴儿健康过度担忧，常失去生活自理及照料婴儿的能力，对人充满敌意，呼吸心跳加快，泌乳减少，厌食失眠消瘦，甚至出现自杀和杀婴的念头。                            </p>
            </div>
            <img />
            <div style={{width:'70%',
                lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                <h2 style={{textAlign:'center'}}>表现症状</h2>
                <ul style={{textIndent:'2em'}}>
                    <li>
                    第一：在身体上面产后的妈妈也会异常疲劳或虚弱状态。思想不能集中，语言表达紊乱，缺乏逻辑性和综合判断能力。还会有明显的自卑感，常常不由自主地过度自责，对任何事都缺乏自信。
                    </li>
                    <li>
                    第二：产后妈妈一般会出现精神焦虑不安或呆滞，常为一点小事而恼怒，或者几天不言不语、不吃不喝。整天感觉沮丧、伤心，或"空荡荡的"，而且每天如此。
                    </li>
                    <li>
                    第三：产后抑郁的患者往往是初产妇，发病于分娩的三天内，症状较轻，主要表现为情绪沮丧、焦虑、失眠、食欲下降、易激怒、注意力不集中、持续数日后症状可自行缓解。                                
                    </li>
                    <li>
                    第四：在精神方面产后的妈妈难以集中精力，极端易怒或烦躁，或过多的哭泣。经常性地为自己或宝宝的健康担忧，或者经常感觉有些可怕的事情将要发生
                    </li>
                </ul>
                <h3>其他表现</h3>
                <ul style={{textIndent:'2em'}}>
                    <li>觉得所有的事情都没有意思、没有乐趣</li>
                    <li>难以集中精力</li>
                    <li>不应该的内疚感，觉得自己没有用，没有希望</li>
                </ul>
            </div>
            {/* 引发原因 */}
            // <div style={{width:'70%',
            //     lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
            //     <h2 style={{textAlign:'center'}}>引发原因</h2>
            //     <div style={{textIndent:'2em'}}>
            //         <p>
            //         导致人们患上产后焦虑症的原因有很多种，如：
            //         </p>
            //         <ul>
            //             <li>如患有妊娠高血压综合征、妊娠合并心脏病等产前并发症的产妇，由于自身健康存在问题，同时也怕殃及胎儿</li>
            //             <li>大家庭中对新生儿性别的过分期盼(丈夫是独子的想要男孩传宗接代、都是男孩的想要女孩)</li>
            //             <li>有人担心孩子出生后，自己的职业受到影响或家庭经济压力加大</li>
            //             <li>有精神疾病的家族史，或者在孕期或分娩期恰好遭遇工作或生活的打击</li>
            //             <li>缺乏家庭、社会、尤其是丈夫的关心和帮助</li>
            //             <li>由于到孕晚期各种不适症状加重，如出现皮肤痉痒、腹壁皮肤紧绷、水肿等不适、使心中烦躁、易焦虑。</li>
            //             <li>由于行动不便，整日闭门在家，注意力集中到种种消极因素上，加重焦虑。</li>
            //             <li>虽然做过多次检查但检查毕竟是通过机器和各种化验，有些胎儿存在健康问题不能查出，产妇对此焦虑，怕生个不健康的宝宝。</li>
            //         </ul>
            //     </div>
            // </div>
            {/* 如何改善 */}
//             <div style={{width:'70%',
//                 lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
//                 <h2 style={{textAlign:'center'}}>如何调节</h2>
//                 <h3 style={{marginLeft:30,marginTop:10,
//                     backgroundColor:'pink',width:'140px',textAlign:'center'}}>
//                     孕妇的自我救助</h3>
//                 <ol style={{paddingLeft:70}}>
//                     <li>树立信心。要明白作为母亲的不可推卸的职责，也应深刻体会自己付出母爱的社会价值和人生价值，保持心理平衡。</li>
//                     <li>经验交流。产后忧郁烦躁怎么办，与其他新妈妈聊天，谈各自的感受也是件不错的自我调节措施。</li>
//                     <li>学会放松。学会在宝宝睡觉的时候让自己放松，读书、洗澡、看影片，或找点其它你感兴趣的事情做。</li>
//                     <li>找个帮手。坐月子确实有一定的道理，能让产妇身心都得到足够的放松。但相对过去的大家庭来说，如今的妈妈要辛苦得多，因为她们多半要承担起照顾宝宝的大部分任务。如果能够找到一个好帮手的话，产妇就能有一个喘息的空间和机会，恢复效果也会好得多。</li>
//                 </ol>
//                 <h3 style={{marginLeft:30,marginTop:10,
//                     backgroundColor:'pink',width:'140px',textAlign:'center'}}>
//                     家人的帮助
//                 </h3>
//                 <div style={{paddingLeft:70}}>
//                     对待抑郁患者，首先不要轻易尝试劝解对方。亲人朋友的关怀如果选择了恰当的方式，对患者是非常重要的精神支持;若采用错误的方式，对患者而言就是更大的压力和绝望。
// 　　                        帮助老婆走出抑郁症，恰当的方式是：给她关注、陪伴、尊重与接纳。</div>
//                 <ol style={{paddingLeft:90}}>
//                     <li>理解她的感受，承认她的痛苦。对患者而言，痛苦是真实存在的，而且时时让其有生不如死的可怕感觉。</li>
//                     <li>不要试图改变对方，允许她表露出痛苦、悲伤、愤怒等情绪。<br/>
//                         不要说凡事想开一点吧，保持乐观态度之类的，这话好比某人感冒了，你却跟她说别流鼻涕了。流鼻涕不是她能自主的，所有的抑郁情绪也是她不能自主的。
//                         <br/>
// 　　                            一味要求患者振作，患者根本做不到，相反只会使患者更加沮丧和绝望。她们更需要身边的人来承认她们的困境，关注她们的内心苦痛。</li>
//                     <li>少指责多陪伴。要知道，抑郁症患者本来已经觉得自己非常糟糕，每一句不够“中听”的话语都可能在其心中掀起大浪，甚至将其推向绝望的深渊。
//                         <br/>
//                         　　请让她感知到，生病不是她的错，不管发生任何事，你愿意陪她一起去面对。
//                         <br/>
// 　　                                给予她更多的关爱和保护，让她知道你对她的在乎，给她一个坚实的臂膀，可以让她有所依托，这样孕妈们会感到深沉的爱与安全感。</li>
//                     <li>鼓励她及时就诊，求助专业心理咨询师，必要时遵从医嘱吃药。
//                         <br/>
// 　　                            产前抑郁症患者能被理解、被关注、被关怀，感受到全新的体验和看到另一个不同的世界，渐渐走出她眼中的黑暗世界。</li>
//                 </ol>
//             </div>

//             <div style={{width:'70%',
//                 lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
//                 <h2 style={{textAlign:'center'}}>危害</h2>
//                 <div style={{textIndent:'2em',marginTop:10}}>
//                     <p>
//                         产前抑郁症是一种孕期心理疾病，产前出现精神问题、心理问题
//                         的女性正呈上升趋势，而其中又以白领女性为主。专家指出，产前抑郁症的危害性
//                         远远大于产后抑郁症，严重的话甚至还会做出伤害自己的行为，
//                         诸如自残、自杀等，累及胎儿的性命。
//                     </p>
//                     <p>
//                     由于孕妇在怀孕的4-10个星期情绪的过度不安，是有可能
//                     会引起胎儿的口唇畸变的、而且还会出现一些颚裂性的兔唇。而孕妇精神的状态
//                     的突然变化，又如一些惊吓或者是恐惧和忧伤或者是一些其他的原因而导致的
//                     精神过度的紧张，从而是会让大脑的皮层和内脏之间的平衡的关系会失调，
//                     从而会导致循环系统功能的紊乱，而导致胎盘会早期的剥离，而且甚至是会造成
//                     胎儿的死亡的。
//                     </p>
//                     <p style={{height:30,width:'100%',marginTop:10,
//                     backgroundColor:'pink',textAlign:'center'}}>
//                         案例一
//                     </p>
//                     <img style={{width:'100%',marginTop:10}}
//                     src="https://i.loli.net/2020/05/19/mbhPTav6YgfOsdI.jpg" />
//                     <div>
//                     赵灵(化名)，一名28岁的女性，怀孕第八个月，正被孕期抑郁折磨着。
//                         <br/>　　她说，和很多人想象不同的是，抑郁带来的并不是对世界的厌恶，而是强烈的自我厌恶。

//                         　　老公不理解我，劝我“生活还是很美好的”、“多看看世界好的一面”，但对我来说都没有用。
//                         <br/>　　我也觉得世界很好，只是这世界和我毫无关系。而我的存在糟糕透顶，一无是处，只会给身边人带来无尽的负能量——如果这世界上没有我会更好。
//                         <br/>　　白天还好，从黄昏天色变暗开始，我的情绪就不可抑制地开始下沉。
//                         <br/>　　所有的食物都索然无味，所有的笑话都乏味不堪，跟人正常说句话都需要调动全身的精力。
//                         <br/>　　耳鸣声逼得我发疯，让我无法集中精力做任何事情，甚至连看电视都难以做到。
//                         <br/>　　我什么都做不了，只能在耳朵的轰鸣声里无力地熬着时间 。随着夜色加深，我的情绪越来越失去控制。每个抑郁的夜晚都是极端漫长痛苦的。  
//                         之前因为一点小事跟老公吵架了，躲在房间里一直在哭，特别想寻死，想象用刀去割手腕，感觉那一下肯定很痛快很爽，至少比现在心里受折磨痛快。可是，我自杀还是会伤害到他，还有我的父母，我的孩子。
//                         <br/>　　于是我心里常常希望自己可以在生孩子时大出血死掉，这样我才能不亏欠任何人并获得解脱。
//                         <br/>　　是的，我是个希望在生产时死掉的孕妇。            
//                     </div>
//                     <p style={{fontWeight:'bold',color:'skyblue',fontSize:16}}>
//                         如果患上了产前抑郁，孕妈不需要过于自责，这不是你的错，而更善待自己、善待生活的方式是：倘若你感觉不适，请及早寻求专业的诊断和帮助。</p>
//                     <p style={{height:30,marginTop:10,
//                         width:'100%',backgroundColor:'pink',textAlign:'center'}}>
//                         案例二
//                     </p>
//                     <img style={{width:'100%',marginTop:10}}
//                     src="https://i.loli.net/2020/05/19/mbhPTav6YgfOsdI.jpg" />
//                     <div>
//                         自从怀二胎后，我觉得自己性格大变，以前是很开朗活泼的人，
//                         现在变得特别不爱说话，不爱出门，甚至连亲戚电话也不愿意接，
//                         总是找借口说自己没听见或者忙。<br/>
//                         在家除了跟我女儿说话，连我爸妈也不愿意多交流。今天因为一点小事跟我妈吵架了，
//                         躲在房间里
//                     </div>哭到现在，特别想去寻死，想象用到去割手腕，感觉那一下肯定很痛快很爽，至少
//                     比现在心理受折磨痛快。<br/>
//                     感觉自己快无药可救了，这种情况，我不敢想象生了二宝以后怎么办，真的不敢去想。
//                     <p style={{fontWeight:'bold',color:'skyblue',fontSize:16}}>
//                     以上就是一个怀二胎、又得了产前抑郁症妈妈的自述，很难想象这是什么样的一段心理历程。
//                     一开始家人通常觉得这不是什么大的事情，总觉得准妈妈们在矫情。就是因为这份忽略
//                     导致患上产前抑郁症的准妈妈走上了绝路。</p>
//                 </div>
                    
                
//             </div>

//         </div>
//     </div> */}

