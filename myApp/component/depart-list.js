import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import {px,win_height} from '../js/Common.js';

export default class extends Component{
    state = {
        doctorName:""
    }
    render() {
        return (
        <View style={styles.container}>

            <TouchableHighlight underlayColor="#ddd">
                <View style={[styles.wrap,styles.wrap_1]}>
                    <Text style={styles.font_choose_area}>
                        当前院区：后湖院区
                    </Text>
                    <Image style={styles.li_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                </View>
            </TouchableHighlight>

            <View style={[styles.wrap,styles.wrap_2]}>
                <Image style={styles.search_img} source={require('../img/icon_2.png')} resizeMode='contain'></Image>
                <TextInput
                    style={styles.search_input}
                    placeholder="请输入医生姓名"
                    onChangeText={(doctorName) => this.setState({doctorName})}
                    value={this.state.doctorName}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={[styles.wrap_content]}>
                <View style={[styles.wrap_3]}>
                    <Text style={styles.font_big_depart}>
                        内科
                    </Text>
                    <Text style={styles.font_big_depart}>
                        内科
                    </Text>
                </View>
                <View style={[styles.wrap_4]}>
                    <View style={styles.small_depart}>
                        <Text style={styles.font_small_depart}>内科</Text>
                        <Image style={styles.tap_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                    </View>
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#f0f0f5'
    },
    wrap:{
        backgroundColor:"#fff",
        width:px(750),
        justifyContent:"center"
    },
    wrap_1:{
        height:px(90),
        marginBottom:px(10)
    },
    font_choose_area:{
        paddingLeft:px(30),
        fontSize:px(32),
        color:"#333333",
        position:"relative"
    },
    li_img:{
        height:px(28),
        width:px(15),
        position:"absolute",
        right:px(30),
        top:px((90-28)/2),
        transform:[{rotate:("90deg")}]
    },
    wrap_2:{
        height:px(100),
        position:"relative",
    },
    search_img:{
        height:px(34),
        width:px(34),
        position:"absolute",
        left:px(45),
        top:px((100-34)/2),
    },
    search_input:{
        padding:0, 
        marginLeft:px(100),
        fontSize:px(30),
        width:px(620),
        color:"#666666"
    },
    wrap_content:{
        flexDirection:'row',
        width:px(750),
        position:"absolute",
        top:px(200),
        bottom:0,
        backgroundColor:"blue",
    },
    wrap_3:{
        flex:3,
        backgroundColor:"#f2f2f2", 
        width:px(240),
    },
    font_big_depart:{
        textAlign:"center",
        paddingTop:px(23),
        height:px(94),
        fontSize:px(32),
        color:"#838899",
        borderBottomWidth:1,
        borderColor:"#eaecf1",
    },
    wrap_4:{
        flex:4.5,
        backgroundColor:"#fff",
        width:px(500),
    },
    small_depart:{
        position:"relative",
    },
    font_small_depart:{
        textAlign:"center",
        paddingTop:px(21),
        height:px(90),
        fontSize:px(32),
        color:"#838899",
    },
    tap_img:{
        height:px(28),
        width:px(15),
        position:"absolute",
        right:px(30),
        top:px((90-28)/2),
    },
});
