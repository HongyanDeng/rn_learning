import React from 'react';
import {
  Text, TextInput, View,
  Image, ImageSourcePropType,
  ScrollView, StyleSheet,
  Button, Alert
} from 'react-native';

interface CharacterNameProps {
  name: string;
  introdeuce: string;
  image: ImageSourcePropType;
}
const styles = StyleSheet.create({
  titleStyle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  mainIntouctionStyle: {
    color: '#3b3e44ff',
    fontSize: 14,
    textAlign: 'left',
    margin: 15
  },
  nameStyle: {
    color: '#3366bb',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 3
  },
  introduceStyle: {
    color: '#3b3e44ff',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  ouSideContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
    flex: 1,
    backgroundColor: '#b61f1fff'
  },
  buttonContainer: {
    flex: 1,
    margin: 10
  },

});

const CharacterName = (props: CharacterNameProps) => {
  return (
    <View style={styles.ouSideContainer}>
      <View style={styles.characterContainer}>
        <Image source={props.image} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.nameStyle}>{props.name}</Text>
          <Text style={styles.introduceStyle}>{props.introdeuce}</Text>
        </View>
      </View>
    </View>
  );
};


const characters = () => {
  return (
    <View>
      <ScrollView >
        <View>
          <Text style={styles.titleStyle} >名侦探柯南角色</Text>
          <Text style={styles.mainIntouctionStyle} >角色是剧情中的人物,与剧情相辅相成。角色的行为推动剧情的发展,剧情的发展丰富角色的形象。
            柯南百科介绍的《名侦探柯南》角色(Character)指《名侦探柯南》原作漫画、动画、真人版、部分番外作品相结合的剧情中的人物,相关基础概念见。
            柯南百科重点介绍《名侦探柯南》常驻角色,亦开辟专属词条介绍《名侦探柯南》其他的“多次登场角色与部分重要的单次登场角色”。</Text>

          <Text style={styles.titleStyle} >角色列表</Text>

          <CharacterName name="江户川柯南(えどがわ こなんEdogawa Konan)" introdeuce={"初登场时6岁,在《计时引爆摩天楼》中过生日后7岁,生日为5月4日,名侦探柯南主角,侦探,少年侦探团实际领导者,原是知名高中生侦探工藤新一,被琴酒灌下APTX-4869变成小学生,为避免身份曝光化名江户川柯南寄住在毛利家,现就读于帝丹小学1年B班,调查黑衣组织并寻找恢复自己身体的方法。"} image={require('./assets/img/1.png')} />
          <CharacterName name="工藤新一(くどう しんいちKudō Shin'ichi)" introdeuce={"初登场时16岁,在《计时引爆摩天楼》中过生日后17岁,生日为5月4日,名侦探柯南主角,帝丹高中2年B班学生,知名高中生侦探,工藤优作与工藤有希子的独子,黑羽快斗的堂兄弟,毛利兰的青梅竹马兼男友,被称为“日本警察的救世主”、“平成年代的福尔摩斯”,并与平次共称“关东的工藤”“关西的服部”。"} image={require('./assets/img/2.png')} />
          <CharacterName name="毛利兰(もうり らんMōri Ran)" introdeuce={"16岁,名侦探柯南女主角,帝丹高中2年B班学生,空手道部主将兼关东空手道大赛冠军,毛利小五郎与妃英理的独女,工藤新一的青梅竹马兼女友。"} image={require('./assets/img/3.png')} />
          <CharacterName name="毛利小五郎(もうり こごろうMōri Kogorō)" introdeuce={"38岁,原警视厅刑事部搜查一课强行犯搜查三系刑警,警衔为巡查部长,经营毛利侦探事务所的知名侦探,妃英理的丈夫,毛利兰的父亲,因经常被柯南麻醉破案,被称为“沉睡的小五郎”。"} image={require('./assets/img/4.png')} />
          <CharacterName name="阿笠博士(あがさ ひろしAgasa Hiroshi)" introdeuce={"初登场时52岁,在《众目睽睽之下的码头惨剧》中过生日后53岁,发明家,工藤新一的邻居,工藤优作与寺井黄之助的老相识,少年侦探团的协助者,芙莎绘·坎贝尔·木之下的初恋,自称“天才发明家”。"} image={require('./assets/img/5.png')} />
          <CharacterName name="灰原哀(はいばら あいHaibara Ai)" introdeuce={"约7岁,原是黑衣组织科学家宫野志保、代号雪莉,因宫野明美之死,向组织抗议被囚禁,服下APTX-4869变成小学生后被阿笠博士收养,现化名灰原哀并就读于帝丹小学1年B班。"} image={require('./assets/img/6.png')} />
          <CharacterName name="吉田步美(よしだ あゆみYoshida Ayumi)" introdeuce={"7岁,帝丹小学1年B班,少年侦探团成员。"} image={require('./assets/img/7.png')} />
          <CharacterName name="圆谷光彦(つぶらや みつひこTsuburaya Mitsuhiko)" introdeuce={"7岁,帝丹小学1年B班,少年侦探团成员,圆谷朝美的弟弟。"} image={require('./assets/img/8.png')} />
          <CharacterName name="小岛元太(こじま げんたKojima Genta)" introdeuce={"初登场时6岁,在《四处逃窜的游戏软件》中已7岁,帝丹小学1年B班,自称少年侦探团团长,小岛元次的独子。"} image={require('./assets/img/9.png')} />
          <CharacterName name="铃木园子(すずき そのこSuzuki Sonoko)" introdeuce={"17岁,帝丹高中2年B班学生,铃木财团二千金,网球部成员,铃木史郎与铃木朋子的次女,铃木绫子的妹妹,京极真的女友。"} image={require('./assets/img/10.png')} />
          <CharacterName name="服部平次(はっとり へいじHattori Heiji)" introdeuce={"17岁,改方学园高中2年级学生,知名高中生侦探,剑道部部长,服部平藏与服部静华的独子,远山和叶的青梅竹马兼男友,并与新一共称“关西的服部”“关东的工藤”。"} image={require('./assets/img/11.png')} />
          <CharacterName name="远山和叶(とおやま かずはTōyama Kazuha)" introdeuce={"17岁,改方学园高中2年级学生,合气道二段兼歌牌部成员,远山银司郎的独女,服部平次的青梅竹马兼女友。"} image={require('./assets/img/12.png')} />
          <CharacterName name="世良真纯(せら ますみSera Masumi)" introdeuce={"约16-17岁,帝丹高中2年B班学生,侦探,赤井务武与赤井玛丽的长女,赤井秀一和羽田秀吉的妹妹。"} image={require('./assets/img/13.png')} />
          <CharacterName name="赤井秀一(あかい しゅういちAkai Shūichi)" introdeuce={"32岁,化名诸星大,代号黑麦,FBI搜查官兼狙击手,曾潜伏在黑衣组织的卧底,赤井务武与赤井玛丽的长子,羽田秀吉与世良真纯的大哥,宫野明美与宫野志保的表亲,詹姆斯·布莱克的下属,茱蒂·斯泰琳的前男友兼同事,安德雷·卡迈尔的同事,琴酒的宿敌。"} image={require('./assets/img/14.png')} />
          <CharacterName name="安室透(あむろ とおるAmuro Tōru)" introdeuce={"29岁,本名降谷零,代号波本,警察厅警备局警备企划课“零”的公安警察,警衔为警部,波洛咖啡厅服务员,私家侦探,潜伏在黑衣组织的卧底,与松田、萩原、景光、伊达为同期毕业生兼好友,朗姆与黑田兵卫的下属,风见裕也的上级,榎本梓的同事,毛利小五郎的大徒弟,被称为“秘密主义者”。"} image={require('./assets/img/15.png')} />
          <CharacterName name="怪盗基德(かいとうキッドKaitō Kiddo)" introdeuce={"怪盗魔术师,江户川柯南的对手兼伙伴,白马探的对手,中森银三、茶木神太郎与铃木次郎吉的抓捕对象,国际犯罪代号1412,被称为“日本的亚森·罗宾”、“平成的鲁邦”、“世纪末的魔术师”、“月光下的魔术师”与“令和的魔术师”。来自《魔术快斗》,第一代的真实身份是黑羽盗一,第二代的真实身份是黑羽快斗。"} image={require('./assets/img/16.png')} />
        </View>

       
          <Text>底部导航</Text>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => Alert.alert('跳转到首页')}
                title="首页"
                color="#841584"
                accessibilityLabel="HomePage"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => Alert.alert('跳转到探索页面')}
                title="探索更多"
                color="#1727b6ff"
                accessibilityLabel="RecommendPage"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => Alert.alert('跳转到个人中心')}
                title="个人中心"
                color="#1cc52aff"
                accessibilityLabel="MinePage"
              />
            </View>
         
        </View>

      </ScrollView>




    </View>

  );
}

export default characters;