import React, { Component } from 'react'
import { Accordion} from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class BAnxiety extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fff'}}>
                <div style={{width:'90%',margin:'auto',fontSize:16,lineHeight:'2em'}}>
                    <div style={{margin:'auto'}}>
                        <img src="https://i.loli.net/2020/06/03/C96kcIH3uLvpay2.jpg"
                    style={{width:'100%'}}/>
                    </div>
                    <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                    产生焦虑症的因素很多，城市女性大多是初产妇，缺乏对生产的直接体验。从电视，报刊等媒体上又耳闻目睹了许多他人生产的痛苦经历，考虑到自己也将经历此过程，心中不免焦虑。
                    </div>
                    <br/>
                    <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                    严重焦虑的孕妇常伴有恶性妊娠呕吐。并可导致早产、流产。孕妇的心理状态会直接影响到分娩过程和胎儿状况，产后易发生围产期并发症等。
                    </div>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="基本介绍">
                        <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                        据调查显示，有98%的孕妇在妊娠晚期会产生焦虑心理，有些人善于调节自己的情绪，会使焦虑心理减轻，有些人不善于调节，心理焦虑越来越重。
                        </div>
                        <br/>
                        <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                        焦虑还会使孕妇肾上腺素分泌增加，导致代谢性酸中毒引起胎儿宫内缺氧。焦虑还可引起植物神经紊乱，导致产时宫缩无力造成难产。由于焦虑，得不到充分的休息和营养，生产时会造成滞产。 
                        </div>
                        <br/>
                        <div style={{lineHeight:'2em',fontSize:16,textIndent:'2em'}}>
                        孕妇在孕晚期要采取积极的态度消除产前焦虑，当然这需要孕妇和家庭的共同努力。
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header='孕妇如何排解'>
                        <div style={{lineHeight:'2em',textIndent:'2em',fontSize:16}}>
                            <ol>
                                <li>
                                1、对生产有一个科学而正确的认识<br/><span style={{paddingLeft:60}}>
                                生育能力是女性与生俱来的能力，生产也是正常的生理现象，绝大多数女性都能顺利自然地完成，如果存在胎位不正、骨盆狭窄等问题，现在的医疗技术也能顺利地采取剖宫产将胎儿取出，最大限度地保证母子的安全。孕妈妈应该多学习这方面的知识，增加对自身的了解，增强生育健康宝宝的信心。
                                </span>
                                </li>
                                <li>
                                2、多照些有意义的照片留作纪念<br/><span style={{paddingLeft:60}}>
                                妊娠晚期大部分孕妈妈不愿意留影，由于面部无光泽、身体浮肿、肤色发暗等等，可是分娩过后，也会因缺少这段美好时光的纪念而感到遗憾，所以分娩前，要留下一两张大腹便便的纪念照。到附近的公园或休闲处拍照，能使孕妈妈忘却对分娩的恐惧，心情也会变得爽朗，从而减轻焦虑的情绪。这个时期的纪念照也是留给孩子的珍贵礼物。有条件的孕妈妈也可以去拍孕妇写真哦。
                                </span>
                                </li>
                                <li>
                                3、布置婴儿房间<br/><span style={{paddingLeft:60}}>给宝宝布置漂亮的房间也是减轻产前焦虑的有效方法。这并非一定要给宝宝留出单独的空间，可以在夫妻的卧室一边放一张婴儿床，布置好装宝宝用品的小柜子、箱子等。孩子的东西比想象的要多，所以经常会在布置的过程中发现自己还没有准备的东西。</span>
                                </li>
                                <li>
                                4、多接触外面的世界<br/><span style={{paddingLeft:60}}>孕晚期不要因为身体笨重而不愿意出门，就整日躺在床上把注意力集中到对未来生活的担忧上。每天早晚可以出去散散步，呼吸一下新鲜空气，感受一下生活的真实和忙碌，给自己的未来规划一个努力的目标，这也是放松紧张情绪的有效方法。</span>
                                </li>
                            </ol>
                            
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header='应对措施' style={{fontSize:16,lineHeight:'2em'}}>
                    <h3 style={{marginLeft:30,marginTop:10,
                        backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                        心理治疗</h3>
                        <div style={{textIndent:'2em'}}>
                        在妊娠最后阶段，孕妇常表现为心理依赖性强，希望寻求保护，引起他人重视。这种反应并非娇气，而是一种正常的心理反应。孕妇可能会喋喋不休，这是宣泄不良情绪的合理渠道。此时丈夫要理解妻子情绪上的波动，耐心倾听妻子诉说，给予妻子精神上的鼓励和安慰，打消其心中顾虑，特别是在孩子的性别上不要给妻子施加压力。
                        </div>
                        <div style={{textIndent:'2em'}}>
                        腹壁紧绷会给孕妇造成多种不适丈夫可在晚间为妻子轻抚腹部，一方面是与尚未谋面的宝宝交流，另方面又减轻了妻子的不适，使妻子依赖心理得到满足，焦虑情绪得到改善。
                        </div>
                        <div style={{textIndent:'2em'}}>
                        孕妇的母亲，婆婆最好也能现身说法让孕妇了解生产的全过程，做到心中有数。
                        </div>
                        <h3 style={{marginLeft:30,marginTop:10,
                        backgroundColor:'pink',width:'140px',textAlign:'center'}}>
                        自我调节</h3>
                        <div style={{textIndent:'2em'}}>
                        除了家人的关心体贴外，孕妇自己也要注意身心调节。
                        </div>
                        <ol style={{textIndent:'2em'}}>
                            <li>1、要纠正对生产的不正确认识。生育能力是女性与生俱来的能力，生产也是正常的生理现象，绝大多数女性都能顺利自然地完成，如存在些胎位不正、骨盆狭窄等问题、现代的医疗技术也能顺利地采取剖腹产的方式将婴儿取出最大限度地保证母婴安全。</li>
                            <li>2、孕妇应学习有关知识，增加对自身的了解，增强生育健康宝宝的自信心。</li>
                            <li>3、有产前并发症的孕妇应积极治疗并发症，与医师保持密切关系，有问题时及时请教保持良好情绪。</li>
                            <li>4、和一些妈妈们交流一下，讨教一些经验。</li>
                            <li>5、临产前做一些有利健康的活动，如编织、绘画、唱歌、散步等，不要闭门在家，整日躺在床上把注意力集中到对未来的担忧上。</li>
                        </ol>
                    </Accordion.Panel>
                    <Accordion.Panel header='产生原因' style={{fontSize:16,lineHeight:'2em'}}>
                        <h3 style={{textIndent:'2em'}}>
                        造成这种心理问题有多种原因：
                        </h3>
                        <ol style={{textIndent:'2em'}}>
                            <li>1、对胎儿性别的忧虑。城市人对生男生女大多能正确看待。但在人的潜意识里仍有某种对胎儿性别的好恶，或家人对生男生女比较在意。不知胎儿性别心中不免打鼓。</li>
                            <li>2、患有妊娠高血压综合征、妊娠合并心脏病等产前并发症的产妇，由于自身健康存在问题，同时也怕殃及胎儿，因此也易焦虑。</li>
                            <li>3、由于到孕晚期各种不适症状加重，如出现皮肤痉痒、腹壁皮肤紧绷、水肿等不适，使心中烦躁、易焦虑。</li>
                            <li>4、由于行动不便，整日闭门在家，注意力集中到种种消极因素上，加重焦虑。</li>
                            <li>5、担心孩子出生后，自己的职业受到影响或家庭经济压力加大，而产生焦虑。</li>
                        </ol>
                    </Accordion.Panel>
                    <Accordion.Panel header='症状'>
                        <ol style={{textIndent:'2em'}}>
                            <li>睡眠不好<br/><span style={{paddingLeft:60}}>
                            睡眠差，是很多孕妇都会遇到的麻烦。夜里睡不着、睡不深，夜尿频繁---怀孕时，子宫压迫膀胱，原本比较容易让膀胱的容量减小，而越睡不深容易醒，就越容易想上洗手间。于是，很多孕妇怀孕期间，每天的尿量并没有增加，但夜间上洗手间的次数却多了。睡眠差还会导致多梦。孕妇又往往对梦的内容特别在意。
                            </span></li>
                            <li>情感脆弱，不愿意独处<br/><span style={{paddingLeft:60}}>
                            产前焦虑还会使得孕妇变得情感脆弱，依赖性很重。产妇可能总是想粘着自己的丈夫，或者要有人陪伴，无法忍受独处。必须一个人呆着的时候，就会不停地打电话，或者用上网聊天等方式，和亲人朋友保持联系。只有这样才会觉得有安全感。
                                </span></li>
                            <li>担忧生育风险，害怕胎儿畸形<br/><span style={{paddingLeft:60}}>
                            对于生育前景的担忧，也是很多80后准妈妈焦虑的问题。害怕分娩给自己带来极大的痛苦，也担心孩子不健康。
                                </span></li>
                                <li>产妇担心产后与职场脱节<br/><span style={{paddingLeft:60}}>
                                害怕生完孩子之后公司会辞退自己，担心自己急速的变老而跟不上职场的变化。担心自己思想的减退等等。
                                    </span></li>
                        </ol>
                    </Accordion.Panel>
                    <Accordion.Panel header='预防'>
                        <ol style={{textIndent:'2em'}}>
                            <li>1、多和一些妈妈们交流一下，讨教一些经验。</li>
                            <li>2、及时的纠正对生产的不正确认识。</li>
                            <li>3、准妈妈应该多学习相关的知识，增加对自身的了解，增强生育健康宝宝的自信心。</li>
                            <li>4、有产前并发症的孕妇应积极治疗并发症，与医生保持密切关系，有问题时及时请教保持良好情绪</li>
                        </ol>
                    </Accordion.Panel>

                </Accordion>
                </div>
                

            </div>
        )
    }
}
export default withRouter(BAnxiety)
