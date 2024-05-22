
import React, {Component} from 'react';
import Swipeout from 'react-native-swipeout';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

class myResourceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    //删除资源
    _deleteReource(productId){
        alert('删除资源'+productId)
    }

    render() {
        var resource = this.props.resource;
        // Buttons
        var swipeoutBtns = [
            {
                text: '删除',
                backgroundColor:'red',
                onPress:this._deleteReource.bind(this,resource.productId)
            },
            {
                text: '屏蔽',
                backgroundColor:'blue',
            }

        ];
        return (
            <Swipeout right={swipeoutBtns} style={{backgroundColor:'white'}}>
                <TouchableOpacity style={styles.item} {...this.props} >

                    <View style={styles.imageContainer}>
                        {
                            resource.detailImageUrl != null ?
                                <Image
                                    source={{uri: resource.detailImageUrl}}
                                    style={styles.image}
                                    defaultSource={require('../img/loading.gif')}
                                />
                                : null
                        }
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={styles.resourceTitle}>资源名称:{resource.productName}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.price}
                                  numberOfLines={1}>价格:{resource.price}</Text>
                            {
                                resource.firstName != null ? <Text style={styles.price}
                                                                   numberOfLines={1}>发布人:{resource.firstName}</Text> : null
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10,
        width: 300,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'gray'
    },
    contentContainer: {
        flex: 1,
        margin: 15
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    resourceTitle: {
        fontSize: 18,
        color: '#1d1d1d',
        paddingBottom: 10
    },
    publisher_author: {
        color: "#A3A3A3",
        fontSize: 13
    },
    price: {
        color: '#2bb2a3',
        fontSize: 16,
    },
    pages: {
        color: "#ff00ff",
        marginLeft: 10
    }
});

export default myResourceItem
