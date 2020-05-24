import React, { Component } from 'react'
import {WingBlank ,Grid,Flex,List,NavBar,Icon} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import '../all.css'
class Yiyu extends Component {
    render() {
        return (
            
            <div style={{backgroundColor:'#fff',width:'100%',height:'100%',
        background:"url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')"}}>
                <div style={{}}>
                    {/* <img src="https://i.loli.net/2020/05/18/WoydtGvhjqMkJZD.jpg" 
                    style={{paddingLeft:'20%',width:'60%',height:200}}
                    /> */}
                    <div style={{width:'70%',
                        lineHeight:'2em',paddingLeft:'12%'}}>
                        <h2 style={{textAlign:'center'}}>产前抑郁症是什么</h2>
                        <p style={{textIndent:'2em',fontSize:16,marginTop:10}}>
                            产前抑郁症是新出现的一种孕期心理疾病，是指孕妇对丈夫产生了一些新的
                            或者不合理的期望，并且内心的需求没有被满足时，故产生各种负面情绪。
                        </p>
                    </div>
                    <img />
                    <div style={{width:'70%',
                        lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                        <h2 style={{textAlign:'center'}}>三大主要表现</h2>
                        <ul style={{textIndent:'2em'}}>
                            <li>
                                情绪低落就是高兴不起来、总是忧愁伤感、甚至悲观绝望。
                            </li>
                            <li>
                                思维迟缓就是自觉脑子不好使，记不住事，思考问题困难。患者觉得脑子空空、变笨了。
                            </li>
                            <li>
                                运动抑制就是不爱活动，浑身发懒。走路缓慢，言语少等。严重的可能不吃不动，生活不能自理。
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
                    <div style={{width:'70%',
                        lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                        <h2 style={{textAlign:'center'}}>引发原因</h2>
                        <div style={{textIndent:'2em'}}>
                            <p>
                            怀孕期间体内激素水平的显著变化，可以影响大脑中调节情绪的神经传递素的变化。可能在
                            怀孕6-10周时初次经历这些变化，之后当开始为分娩做准备时，会再次体验到这些变化。
                            </p>
                            <p>
                            激素的变化将使你比以往更容易感觉焦虑，因此，当你开始感觉比以往更易焦虑和抑郁时，应注意提醒自己，这些都是怀孕期间的正常反应，以免为此陷入痛苦和失望的情绪中不能自拔。
                            </p>
                            <p>有些孕妈咪因身体或心理的变化，对丈夫产生了一些新的或者不合理的期望，如果内心的需求没有被满足，就会产生各种负面情绪。
                                这种与平常心态反差比较大的心理状态就是产前抑郁症。其产生原因可能有
                            </p>
                            <ul>
                                <li>怀孕后的女性往往最担心产后会失去怀孕前的一切，在丈夫里“失宠”,还担心自己身材会变形。</li>
                                <li>原先充实的生活状态、明确的生活目的一下子就没了，人也变得很空虚，不做事情就东猜西想，猜想久了心理问题也就出来了。</li>
                                <li>由于到孕晚期各种不适症状加重，如出现皮肤痉痒、腹壁皮肤紧绷、水肿等不适、使心中烦躁、易焦虑。</li>
                                <li>由于行动不便，整日闭门在家，注意力集中到种种消极因素上，加重焦虑。</li>
                                <li>虽然做过多次检查但检查毕竟是通过机器和各种化验，有些胎儿存在健康问题不能查出，产妇对此焦虑，怕生个不健康的宝宝。</li>
                                <li>患有妊娠高血压综合征、妊娠合并心脏病、妊娠合并心脏病等产前并发症的产妇，由于自身健康存在问题，同时也怕殃及胎儿，因此也易焦虑。</li>
                            </ul>
                        </div>
                    </div>
                    {/* 如何改善 */}
                    <div style={{width:'70%',
                        lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                        <h2 style={{textAlign:'center'}}>如何改善</h2>
                        <h3 style={{marginLeft:30,marginTop:10,
                            backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                            孕妇的自我救助</h3>
                        <ol style={{paddingLeft:70}}>
                            <li>养成有规律的生活。饮食休闲要按部就班，从稳定的生活规律中领会自身的
                                <span className='lightly'>生活情趣</span>。</li>
                            <li>保持自己的外观整洁。自己的身体要保持清洁卫生，不得身穿邋遢的衣服，房间院落也要随时打扫干净。</li>
                            <li>即使在抑郁状态下，也决不放弃自己的学习和工作。</li>
                            <li>不得强压怒气，对人对事要宽宏大度。</li>
                            <li>主动吸收新知识，做到“活到老学到老”。</li>
                            <li>建立挑战意识，学会主动接受矛盾，解决矛盾，要有自信心，并相信自己能够成功。</li>
                            <li>即使是小事，也要采取合乎情理的行动;即使你心情烦闷，仍要特别注意自己的言行，让自己合乎生活情理。</li>
                            <li>对待他人的态度要因人而异。具有抑郁心情的人，显得对外界每个人的反应、态度几乎相同。这是不对的，如果有这种倾向，要尽快给予纠正。</li>
                            <li>培养自己的兴趣、爱好和特长，拓宽自己的兴趣范围。</li>
                            <li>不要把自己的生活与别人的生活进行比较。</li>
                            <li>最好把日常生活中美好的事情记录下来。</li>
                            <li>要积极的去尝试以前没有做过的事情，要积极的开辟新的生活园地，使自己的生活更充实。</li>
                            <li>要与精力旺盛、又有理想、有追求的人交往。</li>
                        </ol>
                        <h3 style={{marginLeft:30,marginTop:10,
                            backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                            家人的帮助
                        </h3>
                        <div style={{paddingLeft:70}}>
                            对待抑郁患者，首先不要轻易尝试劝解对方。亲人朋友的关怀如果选择了恰当的方式，对患者是非常重要的精神支持;若采用错误的方式，对患者而言就是更大的压力和绝望。
　　                        帮助老婆走出抑郁症，恰当的方式是：给她关注、陪伴、尊重与接纳。</div>
                        <ol style={{paddingLeft:90}}>
                            <li>理解她的感受，承认她的痛苦。对患者而言，痛苦是真实存在的，而且时时让其有生不如死的可怕感觉。</li>
                            <li>不要试图改变对方，允许她表露出痛苦、悲伤、愤怒等情绪。<br/>
                                不要说凡事想开一点吧，保持乐观态度之类的，这话好比某人感冒了，你却跟她说别流鼻涕了。流鼻涕不是她能自主的，所有的抑郁情绪也是她不能自主的。
                                <br/>
　　                            一味要求患者振作，患者根本做不到，相反只会使患者更加沮丧和绝望。她们更需要身边的人来承认她们的困境，关注她们的内心苦痛。</li>
                            <li>少指责多陪伴。要知道，抑郁症患者本来已经觉得自己非常糟糕，每一句不够“中听”的话语都可能在其心中掀起大浪，甚至将其推向绝望的深渊。
                                <br/>
                                　　请让她感知到，生病不是她的错，不管发生任何事，你愿意陪她一起去面对。
                                <br/>
　　                                给予她更多的关爱和保护，让她知道你对她的在乎，给她一个坚实的臂膀，可以让她有所依托，这样孕妈们会感到深沉的爱与安全感。</li>
                            <li>鼓励她及时就诊，求助专业心理咨询师，必要时遵从医嘱吃药。
                                <br/>
　　                            产前抑郁症患者能被理解、被关注、被关怀，感受到全新的体验和看到另一个不同的世界，渐渐走出她眼中的黑暗世界。</li>
                        </ol>
                    </div>

                    <div style={{width:'70%',
                        lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                        <h2 style={{textAlign:'center'}}>危害</h2>
                        <div style={{textIndent:'2em',marginTop:10}}>
                            <p>
                                产前抑郁症是一种孕期心理疾病，产前出现精神问题、心理问题
                                的女性正呈上升趋势，而其中又以白领女性为主。专家指出，产前抑郁症的危害性
                                远远大于产后抑郁症，严重的话甚至还会做出伤害自己的行为，
                                诸如自残、自杀等，累及胎儿的性命。
                            </p>
                            <p>
                            由于孕妇在怀孕的4-10个星期情绪的过度不安，是有可能
                            会引起胎儿的口唇畸变的、而且还会出现一些颚裂性的兔唇。而孕妇精神的状态
                            的突然变化，又如一些惊吓或者是恐惧和忧伤或者是一些其他的原因而导致的
                            精神过度的紧张，从而是会让大脑的皮层和内脏之间的平衡的关系会失调，
                            从而会导致循环系统功能的紊乱，而导致胎盘会早期的剥离，而且甚至是会造成
                            胎儿的死亡的。
                            </p>
                            <p style={{height:30,width:'100%',marginTop:10,
                            backgroundColor:'pink',textAlign:'center'}}>
                                案例一
                            </p>
                            <img style={{width:'100%',marginTop:10}}
                            src="https://i.loli.net/2020/05/19/mbhPTav6YgfOsdI.jpg" />
                            <div>
                            赵灵(化名)，一名28岁的女性，怀孕第八个月，正被孕期抑郁折磨着。
                                <br/>　　她说，和很多人想象不同的是，抑郁带来的并不是对世界的厌恶，而是强烈的自我厌恶。

                                　　老公不理解我，劝我“生活还是很美好的”、“多看看世界好的一面”，但对我来说都没有用。
                                <br/>　　我也觉得世界很好，只是这世界和我毫无关系。而我的存在糟糕透顶，一无是处，只会给身边人带来无尽的负能量——如果这世界上没有我会更好。
                                <br/>　　白天还好，从黄昏天色变暗开始，我的情绪就不可抑制地开始下沉。
                                <br/>　　所有的食物都索然无味，所有的笑话都乏味不堪，跟人正常说句话都需要调动全身的精力。
                                <br/>　　耳鸣声逼得我发疯，让我无法集中精力做任何事情，甚至连看电视都难以做到。
                                <br/>　　我什么都做不了，只能在耳朵的轰鸣声里无力地熬着时间 。随着夜色加深，我的情绪越来越失去控制。每个抑郁的夜晚都是极端漫长痛苦的。  
                                之前因为一点小事跟老公吵架了，躲在房间里一直在哭，特别想寻死，想象用刀去割手腕，感觉那一下肯定很痛快很爽，至少比现在心里受折磨痛快。可是，我自杀还是会伤害到他，还有我的父母，我的孩子。
                                <br/>　　于是我心里常常希望自己可以在生孩子时大出血死掉，这样我才能不亏欠任何人并获得解脱。
                                <br/>　　是的，我是个希望在生产时死掉的孕妇。            
                            </div>
                            <p style={{fontWeight:'bold',color:'skyblue',fontSize:16}}>
                                如果患上了产前抑郁，孕妈不需要过于自责，这不是你的错，而更善待自己、善待生活的方式是：倘若你感觉不适，请及早寻求专业的诊断和帮助。</p>
                            <p style={{height:30,marginTop:10,
                                width:'100%',backgroundColor:'pink',textAlign:'center'}}>
                                案例二
                            </p>
                            <img style={{width:'100%',marginTop:10}}
                            src="https://i.loli.net/2020/05/19/mbhPTav6YgfOsdI.jpg" />
                            <div>
                                自从怀二胎后，我觉得自己性格大变，以前是很开朗活泼的人，
                                现在变得特别不爱说话，不爱出门，甚至连亲戚电话也不愿意接，
                                总是找借口说自己没听见或者忙。<br/>
                                在家除了跟我女儿说话，连我爸妈也不愿意多交流。今天因为一点小事跟我妈吵架了，
                                躲在房间里
                            </div>哭到现在，特别想去寻死，想象用到去割手腕，感觉那一下肯定很痛快很爽，至少
                            比现在心理受折磨痛快。<br/>
                            感觉自己快无药可救了，这种情况，我不敢想象生了二宝以后怎么办，真的不敢去想。
                            <p style={{fontWeight:'bold',color:'skyblue',fontSize:16}}>
                            以上就是一个怀二胎、又得了产前抑郁症妈妈的自述，很难想象这是什么样的一段心理历程。
                            一开始家人通常觉得这不是什么大的事情，总觉得准妈妈们在矫情。就是因为这份忽略
                            导致患上产前抑郁症的准妈妈走上了绝路。</p>
                        </div>
                            
                        
                    </div>

                </div>
            </div>
        )
    }
}
export default withRouter(Yiyu);
