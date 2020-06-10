import React, { Component } from 'react'
import { Accordion, List ,Icon} from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class AYiyu extends Component {
    goBack=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div style={{backgroundColor:'#fff'}}>
                <div style={{width:'90%',margin:'auto',padding:0,}}>
                    <div style={{margin:'auto'}}>
                        <img style={{width:'100%'}}
                        src="https://i.loli.net/2020/06/09/tPHDX1QruhxJWEa.jpg"
                         />
                    </div>
                    <div style={{fontSize:16,lineHeight:'2em',textIndent:'2em'}}>
                    有不少女性在生完宝宝出现了伤心、难过、爱哭、心烦易怒的情况，甚至会自杀的念头，这都是产后抑郁的表现。那么产后抑郁的原因有哪些？如何治疗产后抑郁？预防产后抑郁的方法是什么？
                    </div>
                    <div style={{marginTop: 10 ,lineHeight:'2em',textIndent:'2em',fontSize:16}}>
                        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header="产后抑郁是什么">
                                <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                                产后抑郁症，也叫产后忧郁症，是一种女性特有的特殊精神障碍类型。指女性在生育后，常见于坐月子期间,由于生理、心理、社会角色等因素的变化，造成精神、情绪、行为的紊乱和不良变化。这种精神障碍需引起重视，否则可能会造成女性行为失常，影响健康和生活。
                                    发病率在 15%～30%。典型的产后抑郁症于产后6周内发生，可在3～6个月自行恢复，但严重的也可持续1～2年，再次妊娠则有20%～30%的复发率。
                                </div>                                
                            </Accordion.Panel>
                            <Accordion.Panel header="临床表现" className="pad">
                                <ul style={{textIndent:'2em',fontSize:16,lineHeight:'2em'}}>
                                    <li>
                                    情绪的改变
                                    患者最突出的症状是持久的情绪低落，表现为表情阴郁，无精打采、困倦、易流泪和哭泣。患者常用“郁郁寡欢”、“凄凉”、“沉闷”、“空虚”、“孤独”、“与他人好像隔了一堵墙”之类的词来描述自己的心情。患者经常感到心情压抑、郁闷，常因小事大发脾气。在很长一段时期内，多数时间情绪是低落的，即使其间有过几天或1～2周的情绪好转，但很快又陷入抑郁。尽管如此，患者抑郁程度一般并不严重，情绪反应依然存在，几句幽默解嘲的警句，能使之破涕为笑。一场轻松的谈话，能使之心情暂时好转。患者本人也能够觉察到自己情绪上的不正常，但往往将之归咎于他人或环境。
                                    </li>
                                    <li>
                                    自我评价降低    
                                    对婴儿健康过分焦虑；自责，担心不能照顾好婴儿；自暴自弃，自罪感；对身边的人充满敌意，与家人、丈夫关系不协调。                            
                                    </li>
                                    <li>
                                    对生活缺乏信心  
                                    不情愿喂养婴儿；觉得生活无意义；主动性降低，创造性思维受损；严重者有自杀意念或伤害婴儿的行为。                              
                                    </li>
                                    <li>
                                    躯体症状  
                                    易疲倦；入睡困难、早醒；食欲下降；性欲的减退乃至完全丧失。                              
                                    </li>
                                </ul>
                            </Accordion.Panel>
                            <Accordion.Panel header="引发原因" className="pad">
                                <ul style={{textIndent:'2em',fontSize:16,lineHeight:'2em'}}>
                                    <li>
                                    内分泌因素 
                                    在妊娠分娩的过程中，体内内分泌环境发生了很大变化，尤其是产后24小时内，体内激素水平的急剧变化是产后抑郁症发生的生物学基础。研究发现，临产前胎盘类固醇的释放达到最高值，患者表现情绪愉快；分娩后胎盘类固醇分泌突然减少时患者表现抑郁。
                                    </li>
                                    <li>
                                    遗传因素 
                                    有精神病家族史，特别是有家族抑郁症病史的产妇，产后抑郁的发病率高。
                                    </li>
                                    <li>
                                    产科因素 
                                    产前心态与产后抑郁症的发病相关，产时、产后的并发症、难产、滞产、使用辅助生育技术、第一产程时间长、阴道助产、手术等均会给产妇带来紧张和恐惧，导致生理和心理上的应激增强，诱发产后抑郁症。
                                    </li>
                                    <li>
                                    躯体疾病因素 
                                    有躯体疾病或残疾的产妇已发生产后抑郁，尤其是感染、发热时对产后抑郁的促发有一定影响。再有中枢神经机能的易感性，情绪及运动信息处理调节系统（如多巴胺）的影响，可能与产后抑郁的发生有关。
                                    </li>
                                    <li>
                                    产妇人格特征、分娩前心理准备不足、产后适应不良、产后早期心绪不良、睡眠不足、照顾婴儿过于疲劳、产妇年龄小、夫妻关系不和、缺乏社会支持、家庭经济状况、分娩时医务人员态度、婴儿性别和健康状况等等，均与产后抑郁症的发生密切相关。
                                    </li>
                                </ul>                            
                            </Accordion.Panel>
                            <Accordion.Panel header="诊断">
                                <div>
                                    产后抑郁症的诊断至今无统一的判断标准，目前一般采用两步筛查法，即先使用筛查量表筛查出可疑患者，再采用研究使用的诊断标准进行诊断。应用较多的是美国精神病学会在《精神疾病的诊断与统计手册》（1994年）中制定的：在产后4周内出现下列症状的5条或5条以上（其中第1条和第2条是必须具备的），且持续2周以上，患者自感痛苦或患者的社会功能已经收到严重影响。症状包括：
                                    </div>
                                    <ul style={{marginTop:10}}> 
                                        <li>情绪抑郁。</li>
                                        <li>
                                        对全部或者多数活动明显缺乏兴趣或愉悦。                                    </li>
                                        <li>
                                        体重显著下降或者增加。                                    </li>
                                        <li>
                                        失眠或者睡眠过度。                                    </li>
                                        <li>
                                        精神运动性兴奋或阻滞。
                                        </li>
                                        <li>
                                        疲劳或乏力。
                                        </li>
                                        <li>
                                        遇事皆感毫无意义或自罪感。
                                        </li>
                                        <li>
                                        思维力减退或注意力涣散。
                                        </li><li>
                                        反复出现死亡或自杀的想法。
                                        </li>
                                    </ul>
                                
                            </Accordion.Panel>
                            <Accordion.Panel header="如何改善">
                                <h3 style={{marginLeft:30,marginTop:10,
                                    backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                                心理治疗</h3>
                                <ol style={{textIndent:'2em',fontSize:16,lineHeight:'2em'}}>
                                    <li>
                                    支持性心理治疗 
                                    支持性心理疗法又称支持疗法。是指在执行医护过程中，医护人员对患者的心理状态合理的采用劝导、鼓励、同情、安慰、支持以及理解和保证等方法，可有效消除患者的不良情绪，使其处于接受治疗的最佳心理状态，从而保证治疗的顺利进行，使疾病早日康复。
                                    </li>
                                    <li>人际心理治疗 
                                        这项抑郁症心理治疗方法主要用于治疗成人抑郁症急性期发病，旨在缓解抑郁症状，改善抑郁患者的一些社交问题。抑郁症患者常见的人际问题包括四方面：不正常的悲伤反应、人际冲突、角色转变困难和人际交往缺乏等。
                                    </li>
                                    <li>
                                    音乐疗法 
                                    抑郁症心理治疗方法中最受患者欢迎的一种，莫过于音乐疗法。大脑边缘系统和脑干网状结构对人体内脏及躯体功能起主要调节作用，而音乐对这些神经结构能产生直接或间接影响。
                                    </li>
                                    <li>
                                    焦点转移 
                                    如果产后的确面临严重的不愉快的生活事件，甚至问题棘手难以解决，不要让精力总是集中在不良事件上。越想不愉快的事心情就会越不好，心情越不好越容易钻牛角尖，心情就会越发低落，陷入情感恶性循环的怪圈中。所以要适当转移自己的注意，就是一种转移法，将注意力转移到一些愉快的事情，关注自己的喜好，不仅思维上转移，还可以身体力行参与力所能及的愉快活动。
                                    </li>
                                    <li>
                                    行为调整法 
                                    鉴于女性生产后不适于做剧烈的运动，但一些适当放松的活动是非常必要的，例如深呼吸、散步、打坐、冥想平静的画面、听舒缓优美的音乐等等。
                                    </li>
                                    <li>
                                    倾诉宣泄法 
                                    找好友或亲人交流，尽诉心曲，大哭一场也无妨，尽情宣泄郁闷情绪。
                                    </li>
                                    <li>
                                    角色交替法 
                                    别忘了虽然已为人母，但仍是老公的娇妻、父母的爱女，谁也不可能只做24小时全职妈妈，所以要给自己换个角色享受娇妻爱女的权力。
                                    </li>
                                    <li>
                                    自我鼓励法 
                                    自我欣赏，多看自己的优点，多看事物的好处，多想事情可能成功的一面。
                                    </li>
                                    <li>
                                    自我实现法 
                                    生儿育女只是女性自我实现的一种方式，但决不是惟一的方式，所以不要忘了还有其他自我实现的潜力和需要。也许趁着休产假的时间还能关注一下自己有擅长的事业，等产假结束会有改头换面的新形象出现。
                                    </li>
                                </ol>
                                <h3 style={{marginLeft:30,marginTop:10,
                                    backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                                    药物治疗
                                </h3>
                                <ol style={{lineHeight:'2em',textIndent:'2em',fontSize:16}}>
                                    <li>
                                    抗抑郁药物 
                                    包括选择性5-HT再摄取抑制剂（SSRIs）、三环类抗抑郁药、四环类抗抑郁药和单胺氧化酶类抗抑郁药等。其中SSRIs是产后抑郁症的一线治疗药物，代表药物有氟西汀、帕罗西汀、舍曲林、氟伏沙明、西酞普兰。应特别注意药物剂量，从低剂量开始，逐渐增加至足量、足疗程。
                                    </li>
                                    <li>
                                    激素 
                                    雌激素有多种神经调节功能，雌激素替代治疗能增加5-HT能，可作为产后抑郁的辅助治疗。甲状腺功能低下者可选用甲状腺素治疗。
                                    </li>
                                </ol>
                                <h3 style={{marginLeft:30,marginTop:10,
                                    backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                                    物理治疗
                                </h3>
                                <ol style={{fontSize:16,textIndent:'2em',lineHeight:'2em'}}>
                                    <li>
                                    颅微电流刺激疗法 
                                    通过微电流刺激大脑，能够直接调节大脑分泌一系列有助于改善抑郁病症的神经递质和激素，它通过提高5-HT的分泌量，促进去甲肾上腺素的释放，增强神经细胞活动的兴奋性，从而起到缓解个体抑郁情绪的效果。                                
                                    </li>
                                    <li>
                                    电休克治疗 
                                    抑郁症患者应严防自伤和自杀，对于自杀观念强烈者应用电休克可获得立竿见影的效果，待病情稳定后再用药物和巩固。                                
                                    </li>
                                    <li>
                                    其他 
                                    研究显示中医穴位按摩可改善产后抑郁患者的心理状态和生活质量。运动疗法、亮光治疗、音乐治疗、饮食疗法等也可用来辅助治疗产后抑郁。                                </li>

                                </ol>
                            </Accordion.Panel>
                            
                        </Accordion>
                    </div>
                </div> 
            </div>
        )
    }
}
export default withRouter(AYiyu)


/*
<div>
                <div style={{float:'left',width:'60%',marginLeft:'3%',backgroundColor:'#fff',height:200}}>
                    <div style={{lineHeight:'2em',textIndent:'2em'}}>
                        <p style={{backgroundColor:"url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')"}}>
                        有不少女性在生完宝宝出现了伤心、难过、爱哭、心烦易怒的情况，甚至会自杀的念头，这都是产后抑郁的表现。那么产后抑郁的原因有哪些？如何治疗产后抑郁？预防产后抑郁的方法是什么？
                        </p>
                        <div style={{marginTop:20,}}>
                            <p style={{float:'left',border:'5px solid pink',height:10,marginLeft:30,marginRight:-15}}></p>
                            <h2>什么是产后抑郁</h2>
                            <div style={{marginTop:10,fontSize:16}}>
                            产后抑郁症，也叫产后忧郁症，是一种女性特有的特殊精神障碍类型。指女性在生育后，常见于坐月子期间,由于生理、心理、社会角色等因素的变化，造成精神、情绪、行为的紊乱和不良变化。这种精神障碍需引起重视，否则可能会造成女性行为失常，影响健康和生活。
                            发病率在 15%～30%。典型的产后抑郁症于产后6周内发生，可在3～6个月自行恢复，但严重的也可持续1～2年，再次妊娠则有20%～30%的复发率。
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{float:'right',width:'30%',marginRight:'3%',backgroundColor:'green',height:200}}>

                </div>
            </div>
*/

{/* <div style={{backgroundColor:'#fff',width:'100%',height:'100%',
background:"url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')"}}>
        <div style={{}}>
            <p style={{width:'70%',margin:'auto',lineHeight:'2em',textIndent:'2em'}}>
            有不少女性在生完宝宝出现了伤心、难过、爱哭、心烦易怒的情况，甚至会自杀的念头，这都是产后抑郁的表现。那么产后抑郁的原因有哪些？如何治疗产后抑郁？预防产后抑郁的方法是什么？
            </p>
            <div style={{width:'70%',
                lineHeight:'2em',paddingLeft:'12%'}}>
                <h2 style={{textAlign:'center'}}>产后抑郁症是什么</h2>
                <p style={{textIndent:'2em',fontSize:16,marginTop:10}}>
                产后抑郁症（postpartum depression）是指女性于产褥期出现明显的
                抑郁症状或典型的抑郁发作，与产后心绪不宁和产后精神病同属产褥期精神综合征。
                发病率在 15%～30%。典型的产后抑郁症于产后6周内发生，可在3～6个月
                自行恢复，但严重的也可持续1～2年，再次妊娠则有20%～30%的复发率。
                其临床特征与其他时间抑郁发作无明显区别。                         
                </p>
            </div>
            <img />
            <div style={{width:'70%',
                lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
                <h2 style={{textAlign:'center'}}>临床表现</h2>
                <ul style={{textIndent:'2em'}}>
                    <li>
                    情绪的改变
                    患者最突出的症状是持久的情绪低落，表现为表情阴郁，无精打采、困倦、易流泪和哭泣。患者常用“郁郁寡欢”、“凄凉”、“沉闷”、“空虚”、“孤独”、“与他人好像隔了一堵墙”之类的词来描述自己的心情。患者经常感到心情压抑、郁闷，常因小事大发脾气。在很长一段时期内，多数时间情绪是低落的，即使其间有过几天或1～2周的情绪好转，但很快又陷入抑郁。尽管如此，患者抑郁程度一般并不严重，情绪反应依然存在，几句幽默解嘲的警句，能使之破涕为笑。一场轻松的谈话，能使之心情暂时好转。患者本人也能够觉察到自己情绪上的不正常，但往往将之归咎于他人或环境。
                    </li>
                    <li>
                    自我评价降低    
                    对婴儿健康过分焦虑；自责，担心不能照顾好婴儿；自暴自弃，自罪感；对身边的人充满敌意，与家人、丈夫关系不协调。                            
                    </li>
                    <li>
                    对生活缺乏信心  
                    不情愿喂养婴儿；觉得生活无意义；主动性降低，创造性思维受损；严重者有自杀意念或伤害婴儿的行为。                              
                    </li>
                    <li>
                    躯体症状  
                    易疲倦；入睡困难、早醒；食欲下降；性欲的减退乃至完全丧失。                              
                    </li>
                </ul>
            </div>
            {/* 引发原因 */}
            // <div style={{width:'70%',
            //     lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
            //     <h2 style={{textAlign:'center'}}>引发原因</h2>
            //     <div style={{textIndent:'2em'}}>
            //         <ul>
            //             <li>
            //             内分泌因素 
            //             在妊娠分娩的过程中，体内内分泌环境发生了很大变化，尤其是产后24小时内，体内激素水平的急剧变化是产后抑郁症发生的生物学基础。研究发现，临产前胎盘类固醇的释放达到最高值，患者表现情绪愉快；分娩后胎盘类固醇分泌突然减少时患者表现抑郁。
            //             </li>
            //             <li>
            //             遗传因素 
            //             有精神病家族史，特别是有家族抑郁症病史的产妇，产后抑郁的发病率高。
            //             </li>
            //             <li>
            //             产科因素 
            //             产前心态与产后抑郁症的发病相关，产时、产后的并发症、难产、滞产、使用辅助生育技术、第一产程时间长、阴道助产、手术等均会给产妇带来紧张和恐惧，导致生理和心理上的应激增强，诱发产后抑郁症。
            //             </li>
            //             <li>
            //             躯体疾病因素 
            //             有躯体疾病或残疾的产妇已发生产后抑郁，尤其是感染、发热时对产后抑郁的促发有一定影响。再有中枢神经机能的易感性，情绪及运动信息处理调节系统（如多巴胺）的影响，可能与产后抑郁的发生有关。
            //             </li>
            //             <li>
            //             产妇人格特征、分娩前心理准备不足、产后适应不良、产后早期心绪不良、睡眠不足、照顾婴儿过于疲劳、产妇年龄小、夫妻关系不和、缺乏社会支持、家庭经济状况、分娩时医务人员态度、婴儿性别和健康状况等等，均与产后抑郁症的发生密切相关。
            //             </li>
            //         </ul>
            //     </div>
            // </div>
            
            // <div style={{width:'70%',
            //     lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
            //     <h2 style={{textAlign:'center'}}>诊断</h2>
            //     <div style={{textIndent:'2em'}}>
            //         <div>
            //         产后抑郁症的诊断至今无统一的判断标准，目前一般采用两步筛查法，即先使用筛查量表筛查出可疑患者，再采用研究使用的诊断标准进行诊断。应用较多的是美国精神病学会在《精神疾病的诊断与统计手册》（1994年）中制定的：在产后4周内出现下列症状的5条或5条以上（其中第1条和第2条是必须具备的），且持续2周以上，患者自感痛苦或患者的社会功能已经收到严重影响。症状包括：
            //         </div>
            //         <ul style={{marginTop:10}}> 
            //             <li>情绪抑郁。</li>
            //             <li>
            //             对全部或者多数活动明显缺乏兴趣或愉悦。                                    </li>
            //             <li>
            //             体重显著下降或者增加。                                    </li>
            //             <li>
            //             失眠或者睡眠过度。                                    </li>
            //             <li>
            //             精神运动性兴奋或阻滞。
            //             </li>
            //             <li>
            //             疲劳或乏力。
            //             </li>
            //             <li>
            //             遇事皆感毫无意义或自罪感。
            //             </li>
            //             <li>
            //             思维力减退或注意力涣散。
            //             </li><li>
            //             反复出现死亡或自杀的想法。
            //             </li>
            //         </ul>
            //     </div>
            // </div>
            

            {/* 如何改善 */}
//             <div style={{width:'70%',
//                 lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
//                 <h2 style={{textAlign:'center'}}>如何改善</h2>
//                 <h3 style={{marginLeft:30,marginTop:10,
//                     backgroundColor:'pink',width:'140px',textAlign:'center'}}>
//                    心理治疗</h3>
//                 <ol style={{paddingLeft:70}}>
//                     <li>
//                     支持性心理治疗 
//                     支持性心理疗法又称支持疗法。是指在执行医护过程中，医护人员对患者的心理状态合理的采用劝导、鼓励、同情、安慰、支持以及理解和保证等方法，可有效消除患者的不良情绪，使其处于接受治疗的最佳心理状态，从而保证治疗的顺利进行，使疾病早日康复。
//                     </li>
//                     <li>人际心理治疗 
//                         这项抑郁症心理治疗方法主要用于治疗成人抑郁症急性期发病，旨在缓解抑郁症状，改善抑郁患者的一些社交问题。抑郁症患者常见的人际问题包括四方面：不正常的悲伤反应、人际冲突、角色转变困难和人际交往缺乏等。
//                     </li>
//                     <li>
//                     音乐疗法 
//                     抑郁症心理治疗方法中最受患者欢迎的一种，莫过于音乐疗法。大脑边缘系统和脑干网状结构对人体内脏及躯体功能起主要调节作用，而音乐对这些神经结构能产生直接或间接影响。
//                     </li>
//                     <li>
//                     焦点转移 
//                     如果产后的确面临严重的不愉快的生活事件，甚至问题棘手难以解决，不要让精力总是集中在不良事件上。越想不愉快的事心情就会越不好，心情越不好越容易钻牛角尖，心情就会越发低落，陷入情感恶性循环的怪圈中。所以要适当转移自己的注意，就是一种转移法，将注意力转移到一些愉快的事情，关注自己的喜好，不仅思维上转移，还可以身体力行参与力所能及的愉快活动。
//                     </li>
//                     <li>
//                     行为调整法 
//                     鉴于女性生产后不适于做剧烈的运动，但一些适当放松的活动是非常必要的，例如深呼吸、散步、打坐、冥想平静的画面、听舒缓优美的音乐等等。
//                     </li>
//                     <li>
//                     倾诉宣泄法 
//                     找好友或亲人交流，尽诉心曲，大哭一场也无妨，尽情宣泄郁闷情绪。
//                     </li>
//                     <li>
//                     角色交替法 
//                     别忘了虽然已为人母，但仍是老公的娇妻、父母的爱女，谁也不可能只做24小时全职妈妈，所以要给自己换个角色享受娇妻爱女的权力。
//                     </li>
//                     <li>
//                     自我鼓励法 
//                     自我欣赏，多看自己的优点，多看事物的好处，多想事情可能成功的一面。
//                     </li>
//                     <li>
//                     自我实现法 
//                     生儿育女只是女性自我实现的一种方式，但决不是惟一的方式，所以不要忘了还有其他自我实现的潜力和需要。也许趁着休产假的时间还能关注一下自己有擅长的事业，等产假结束会有改头换面的新形象出现。
//                     </li>
//                 </ol>
//                 <h3 style={{marginLeft:30,marginTop:10,
//                     backgroundColor:'pink',width:'140px',textAlign:'center'}}>
//                     药物治疗
//                 </h3>
//                 <ol style={{paddingLeft:90}}>
//                     <li>
//                     抗抑郁药物 
//                     包括选择性5-HT再摄取抑制剂（SSRIs）、三环类抗抑郁药、四环类抗抑郁药和单胺氧化酶类抗抑郁药等。其中SSRIs是产后抑郁症的一线治疗药物，代表药物有氟西汀、帕罗西汀、舍曲林、氟伏沙明、西酞普兰。应特别注意药物剂量，从低剂量开始，逐渐增加至足量、足疗程。
//                     </li>
//                     <li>
//                     激素 
//                     雌激素有多种神经调节功能，雌激素替代治疗能增加5-HT能，可作为产后抑郁的辅助治疗。甲状腺功能低下者可选用甲状腺素治疗。
//                     </li>
//                 </ol>
//                 <h3 style={{marginLeft:30,marginTop:10,
//                     backgroundColor:'pink',width:'140px',textAlign:'center'}}>
//                     物理治疗
//                 </h3>
//                 <ol style={{paddingLeft:90}}>
//                     <li>
//                     颅微电流刺激疗法 
//                     通过微电流刺激大脑，能够直接调节大脑分泌一系列有助于改善抑郁病症的神经递质和激素，它通过提高5-HT的分泌量，促进去甲肾上腺素的释放，增强神经细胞活动的兴奋性，从而起到缓解个体抑郁情绪的效果。                                
//                     </li>
//                     <li>
//                     电休克治疗 
//                     抑郁症患者应严防自伤和自杀，对于自杀观念强烈者应用电休克可获得立竿见影的效果，待病情稳定后再用药物和巩固。                                
//                     </li>
//                     <li>
//                     其他 
//                     研究显示中医穴位按摩可改善产后抑郁患者的心理状态和生活质量。运动疗法、亮光治疗、音乐治疗、饮食疗法等也可用来辅助治疗产后抑郁。                                </li>

//                 </ol>
//             </div>

//             <div style={{width:'70%',
//                 lineHeight:'2em',paddingLeft:'12%',marginTop:10}}>
//                 <h2 style={{textAlign:'center'}}>如何预防</h2>
//                 <div style={{textIndent:'2em',marginTop:10}}>
                   
//                     <ul>
//                         <li>加强围生期保健
// 利用孕妇学校等多种渠道普及有关妊娠、分娩常识，减轻孕妇对妊娠、分娩的紧张、恐惧心情，完善自我保健。</li>
//                         <li>密切观察
// 对有精神疾患家族史的孕妇，应定期密切观察，避免一切不良刺激，给予更多的关爱、指导。</li>
//                         <li>充分关注
// 分娩过程和疼痛对产后抑郁有较大影响，尤其对产程长、精神压力大的产妇，更应给予充分关注。</li>
//                         <li>心理疏导
// 对于有不良分娩史、死胎、畸形胎儿、孕期情绪异常等高危因素的产妇，应给予她们更多的关心，及早进行心理疏导。</li>
//                     </ul>
//                 </div>
                    
                
//             </div>

//         </div>
    // </div> */}


