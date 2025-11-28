import { HeaderTitle } from "@react-navigation/elements";
import React, { useLayoutEffect } from "react";
import {
  Text, View, ScrollView,
  Button, StyleSheet, FlatList,
  SafeAreaView, StatusBar, TouchableOpacity,
  Alert, FlatListProps
} from "react-native";

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    //color: 'white',
    textAlign: 'center',
    marginLeft: 10,
  },
  SecondTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 0,
    color: 'black',
    backgroundColor: '#ca3030ff',
    width: '18%',
  },
  CardContainer: {
    
  },
  SingleContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#39b840ff',
    borderRadius: 15,
    borderColor: '#e65f5fff',
    borderWidth: 1,
  },
  FlatListContent: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#c322c9ff',

  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#518ccfff',
  },
  itemTitle: {
    textAlign: 'left',
    marginRight: 'auto',
    fontSize: 13,
    fontWeight: 'bold',
    //文字修改成宋体
    fontFamily: 'songti',
    color: '#272626ff'
  },
  itemKey: {
    textAlign: 'right',
    marginLeft: 'auto',
    fontSize: 12,
    color: '#272626ff'
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


const recommend = () => {
  const renderItem = ({ item }: { item: { title: string, key: string } }) => (
    <View style={styles.item}>

      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemKey}>{item.key}</Text>
    </View>
  );
  return (
    <ScrollView>
      <Text style={styles.HeaderTitle}>名侦探柯南档案馆</Text>

      <View style={styles.CardContainer}>
        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>原作漫画</Text>
          <FlatList
            data={[
              { title: '12月03日 篇章第1话', key: 'File.1154' },
              { title: '10月15日 篇章第3话·解决篇', key: 'File.1153 被拍进照片的真相' },
              { title: '10月08日 篇章第2话', key: 'File.1152 糟糕的照片' },
              { title: '10月01日 篇章第1话', key: 'File.1151 有威胁的照片' },
            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>电视动画</Text>
          <FlatList
            data={[
              { title: '2026年01月03日', key: '工藤新一水族馆事件【1小时特别篇】' },
              { title: '11月29日 动画原创', key: 'TV1183(1241) The·审讯室3' },
              { title: '11月22日 原创重映', key: 'RTV918 迷你巡逻车女警大追踪' },
              { title: '11月15日 动画原创', key: 'TV1182(1240) 逮住那张脸' },
            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>剧场版</Text>
          <FlatList
            data={[
              { title: 'M29 制作决定表明，登场角色包括萩原千速、横沟重悟、毛利兰。', key: ' ' },
              { title: 'M28 独眼的残像 于2025年4月18日在日本首映,于2025年6月27日在中国大陆上映,导演为重原克也,编剧为樱井武晴,登场角色包括毛利小五郎、大和敢助、上原由衣、诸伏高明、黑田兵卫、安室透、风见裕也、诸伏景光、服部平次、榎本梓、茱蒂·斯泰琳、目暮十三、白鸟任三郎、佐藤美和子、高木涉、千叶和伸、京极真、冲野洋子、假面超人。', key: '  ' },
              { title: 'M1  计时引爆摩天楼 于1997年4月19日在日本首映。', key: '   ' },
            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>音乐</Text>
          <FlatList
            data={[
              { title: 'OP60 Poker Face/Amyuri', key: '7月12日启用·原版7月12日发表' },
              { title: 'MT28 TWILIGHT!!!/King Gnu', key: 'M28片尾曲·原版4月18日发表' },
              { title: 'M28原声集/菅野祐悟', key: '4月16日发行' },
              { title: 'ED73 Fun!Fun!Fun!/新浜莱昂', key: '4月12日启用·原版4月13日发表' },
            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>关联作品</Text>
          <FlatList
            data={[
              { title: '《犯人犯泽先生》原作漫画 2025年12月25日', key: 'HZFile.56' },
              { title: '《犯人犯泽先生》原作漫画 2025年11月25日', key: 'HZFile.55 目标是隐居杀人!' },
              { title: '《魔术快斗》原作漫画 2024年4月24日', key: 'MKChpt.37 绿龙(后篇)' },
              { title: '《YAIBA》2025版动画 2025年9月27日', key: 'Legend24 来自月球的侵略者' },
            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

        <View style={styles.SingleContainer}>
          <Text style={styles.SecondTitle}>出版物</Text>
          <FlatList
            data={[
              { title: '2025年4月18日', key: '原作漫画第107卷(钥匙孔角色为鬼冢八藏)发行' },

            ]}
            renderItem={renderItem}
            scrollEnabled={false}
            style={styles.FlatListContent}
          />
        </View>

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
  );
};

export default recommend;