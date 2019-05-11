import React, { Component } from 'react';
import {
    NativeModules,
    StyleSheet,
    Alert,
    Text,
    TextInput,
    FlatList,
    View,
    Image,
    LayoutAnimation,
    Animated,
    Easing,
    TouchableHighlight,
    TouchableWithoutFeedback,
    WebView,
    PanResponder
} from 'react-native';
import { connect } from 'react-redux';
import * as Action from '../store/action';
import { px } from '../js/common.js';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const BIG_CONFIG = ['皮肤科', '眼科', '内科', '外科', '口腔科', '耳鼻喉科', '泌尿外科', '妇产科', '胸外科', '骨科', '儿科', '康复科', '中医科'];

class ChooseWrapAnim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            fadeAnim2: new Animated.Value(0)
        };
    }
    componentWillUnmount() {
        LayoutAnimation.configureNext({
            duration: 200,
            delete: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity
            }
        });
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.elastic(4)
            }
        ).start();
        Animated.timing(
            this.state.fadeAnim2,
            {
                toValue: 1,
                duration: 250
            }
        ).start();
    }
    render() {
        let animateStyle;

        switch (this.props.type) {
            case '1':
                animateStyle = {
                    backgroundColor: this.state.fadeAnim2.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,.6)']
                    })
                };
                break;
            case '2':
                animateStyle = {
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-px(180), 0]
                        })
                    }]
                };
                break;
            default: return;
        }
        return (
            <Animated.View
                style={[
                    ...(this.props.style || {}),
                    animateStyle
                ]}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

class ChooseWrap extends Component {
    state = {
        area: [
            { key: '后湖院区' },
            { key: '谌家矶院区' }
        ]
    }
    choose(i) {
        this.props.chooseArea(i);
    }
    render() {
        return (
            <ChooseWrapAnim style={[choose.wrap]} type="1">
                <FlatList
                    ref="flatList_2"
                    data={this.state.area}
                    keyExtractor={() => Math.random()}
                    renderItem={({ item, index }) =>
                        <TouchableWithoutFeedback onPress={this.choose.bind(this, index)}>
                            <View style={choose.li_wrap}>
                                <Text style={choose.li}>{item.key}</Text>
                            </View>
                        </TouchableWithoutFeedback>}
                    showsVerticalScrollIndicator={false}
                />
            </ChooseWrapAnim>
        );
    }
}

class Main extends Component {
    constructor() {
        super();
        this.state = {
            doctorName: '',
            chooseWrapShow: false,
            webViewIsShow: false,
            bigDepart: BIG_CONFIG,
            bigActive: -1,
            smallDepart: []
        };
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => {
                console.log('%cpan1', 'color:orange', 'onStartShouldSetPanResponder');
                return true;
            }
        });
    }
    changeArea() {
        // this.refs.flatList_1.scrollToEnd();
        this.setState({ chooseWrapShow: !this.state.chooseWrapShow });
    }
    chooseArea(i) {
        Alert.alert(
            'Prince Tips',
            '确定不后悔？',
            [
                {
                    text: 'Yes I do',
                    onPress() {
                        console.log('当然了');
                    }
                }
            ]
        );
    }
    chooseBigDepart(i) {
        this.setState({ bigActive: i });
        const num = Math.floor(Math.random() * 16) + 5;
        const smallArr = [];

        for (let i = 0; i < num; i++) {
            smallArr.push({ key: '小科室' });
        }
        this.setState({ smallDepart: smallArr });
    }
    chooseSmallDepart(i) {
        this.setState({ webViewIsShow: true });
    }
    closeWebView() {
        console.log('丝袜');
        this.setState({ webViewIsShow: false });
    }
    refreshFlat() {
        /* this.setState({
            bigDepart: [{key: '大科室'}]
        }) */
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={this.changeArea.bind(this)}>
                    <View style={[styles.wrap, styles.wrap_1]}>
                        <Text style={styles.font_choose_area}>
                            当前院区：后湖院区
                        </Text>
                        <Image style={styles.li_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                    </View>
                </TouchableWithoutFeedback>

                <View style={[styles.wrap, styles.wrap_2]}>
                    <Image style={styles.search_img} source={require('../img/icon_2.png')} resizeMode='contain'></Image>
                    <TextInput
                        style={styles.search_input}
                        placeholder="请输入医生姓名"
                        onChangeText={(doctorName) => this.setState({ doctorName })}
                        value={this.state.doctorName}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={[styles.wrap_content]}>
                    <View style={[styles.wrap_3]}>
                        <FlatList
                            ref="flatList_1"
                            data={this.state.bigDepart}
                            keyExtractor={() => Math.random()}
                            renderItem={({ item, index }) => {
                                const act = this.state.bigActive === index ? styles.font_big_depart_act : null;
                                const bottom = this.state.bigDepart.length - 1 === index && styles.list_bottom;

                                return (
                                    <TouchableWithoutFeedback onPress={this.chooseBigDepart.bind(this, index)}>
                                        <View style={[styles.font_big_wrap, bottom]}>
                                            <Text style={[styles.font_big_depart, act]}>{item}</Text>
                                            {act && <Image style={styles.act_img} source={require('../img/icon_3.png')} resizeMode='contain'></Image>}
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            }}
                            refreshing={false}
                            onRefresh={this.refreshFlat.bind(this)}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={[styles.wrap_4]}>
                        <FlatList
                            ref="flatList_3"
                            data={this.state.smallDepart}
                            keyExtractor={() => Math.random()}
                            renderItem={({ item, index }) => {
                                const bottom = this.state.smallDepart.length - 1 === index && styles.list_bottom;

                                return (
                                    <TouchableWithoutFeedback onPress={this.chooseSmallDepart.bind(this, index)}>
                                        <View style={[styles.small_depart, bottom]}>
                                            <Text style={styles.font_small_depart}>{item.key + index}</Text>
                                            <Image style={styles.tap_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            }}
                            refreshing={false}
                            onRefresh={this.refreshFlat.bind(this)}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>

                {this.state.chooseWrapShow && <ChooseWrap chooseArea={this.chooseArea}/>}

                {this.state.webViewIsShow ? <View style={[styles.webViewWrap]}>
                    <View style={[styles.webViewClose]} onTouchStart={this.closeWebView.bind(this)}></View>
                    <View style={[styles.webViewWrap2]}>
                        <WebView
                            source={{ uri: 'https://h5.m.taobao.com/' }}
                        />
                    </View>
                </View> : null}

            </View>
        );
    }
}


export default connect(state => state)(Main);

const choose = StyleSheet.create({
    wrap: {
        position: 'absolute',
        top: px(90),
        bottom: 0,
        width: '100%'
    },
    li_wrap: {
        backgroundColor: '#fff'
    },
    li: {
        marginLeft: px(30),
        paddingLeft: px(54),
        paddingTop: px(21),
        height: px(90),
        fontSize: px(32),
        color: '#333333',
        borderTopWidth: 1,
        borderColor: '#eaecf1'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#f0f0f5'
    },
    wrap: {
        backgroundColor: '#fff',
        width: px(750),
        justifyContent: 'center'
    },
    wrap_1: {
        height: px(90),
        marginBottom: px(10)
    },
    font_choose_area: {
        paddingLeft: px(30),
        fontSize: px(32),
        color: '#333333',
        position: 'relative'
    },
    li_img: {
        height: px(28),
        width: px(15),
        position: 'absolute',
        right: px(30),
        top: px((90 - 28) / 2),
        transform: [{ rotate: ('90deg') }]
    },
    wrap_2: {
        height: px(100),
        position: 'relative'
    },
    search_img: {
        height: px(34),
        width: px(34),
        position: 'absolute',
        left: px(45),
        top: px((100 - 34) / 2),
        zIndex: 1
    },
    search_input: {
        height: px(60),
        padding: 0,
        marginLeft: px(30),
        paddingLeft: px(80),
        fontSize: px(30),
        marginRight: px(30),
        color: '#666',
        borderRadius: px(30),
        backgroundColor: '#f8f8f8'
    },
    wrap_content: {
        flexDirection: 'row',
        width: px(750),
        position: 'absolute',
        top: px(200),
        bottom: 0
    },
    wrap_3: {
        flex: 3,
        backgroundColor: '#f2f2f2',
        width: px(240)
    },
    list_bottom: {
        marginBottom: px(200)
    },
    font_big_wrap: {
        position: 'relative'
    },
    font_big_depart: {
        paddingLeft: px(55),
        paddingTop: px(23),
        height: px(94),
        fontSize: px(32),
        color: '#838899',
        borderBottomWidth: 1,
        borderColor: '#eaecf1'
    },
    font_big_depart_act: {
        backgroundColor: '#fff',
        borderBottomWidth: 0
    },
    act_img: {
        height: px(14),
        width: px(9),
        position: 'absolute',
        left: px(30),
        top: px((94 - 14) / 2),
        zIndex: 1
    },
    wrap_4: {
        flex: 4.5,
        backgroundColor: '#fff',
        width: px(500)
    },
    small_depart: {
        position: 'relative'
    },
    font_small_depart: {
        textAlign: 'center',
        paddingTop: px(21),
        height: px(90),
        fontSize: px(32),
        color: '#838899'
    },
    tap_img: {
        height: px(28),
        width: px(15),
        position: 'absolute',
        right: px(30),
        top: px((90 - 28) / 2)
    },
    webViewWrap: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 10
    },
    webViewWrap2: {
        position: 'absolute',
        width: '100%',
        height: '75%',
        borderTopLeftRadius: px(20),
        borderTopRightRadius: px(20),
        bottom: px(0),
        overflow: 'hidden'
    },
    webViewClose: {
        position: 'absolute',
        width: '100%',
        height: '25%',
        top: px(0),
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
});