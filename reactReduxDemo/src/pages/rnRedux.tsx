import React, { useEffect, useState } from 'react';
import { Text, Button, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, TouchableOpacity, ViewStyle, TextInput } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { connect, useStore, batch } from 'react-redux';
import { getCurrentPage, switchUi, UiControl } from '../../store/uiControl';
import { getProductComments, getProductDetail, getProducts } from '../../store/product';
import { addToCart, calcTotalPrice, cartProductAdd, cartProductMinus, getShopingCart, getShopingCartCount } from '../../store/shoppingCart';
import { Dispatch } from '@reduxjs/toolkit';
import { addComment } from '../../store/comments';



const mapStateToProps = (state: RootState) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    switchUi: (page: UiControl) => dispatch({ type: 'uiControl/switchUi', payload: page }),
    saveProductId: (pid: number) => dispatch({ type: "uiControl/saveProductId", payload: pid })
});

interface ProductListProps {
    products: RootState['products']
    switchUi: ReturnType<typeof mapDispatchToProps>['switchUi']
    saveProductId: ReturnType<typeof mapDispatchToProps>['saveProductId']
};



const ProductList = connect(
    mapStateToProps, mapDispatchToProps
)(
    ({ products, switchUi, saveProductId }: ProductListProps) => {

        const toDetail = (pid: number) => {
            switchUi(UiControl.PRODUCT_DETAIL);
            saveProductId(pid);
        };

        return (
            <>
                <FlatList
                    style={{ height: '100%' }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={products}
                    numColumns={2}
                    renderItem={(p) =>
                        <TouchableHighlight
                            underlayColor='#fdfdfd'
                            style={styles.productCard}
                            onPress={() => toDetail(p.item.id)}>
                            <View key={p.item.id}>
                                <Text style={styles.productTitle}>{p.item.prodName}</Text>
                                <View style={{ alignItems: 'flex-end', marginTop: 20, ...styles.flexRow }}>
                                    <Text style={styles.productPrice}>￥{p.item.price}</Text>
                                    <Text style={{ color: '#666', fontSize: 10 }}>{p.item.shop}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }>
                </FlatList>
            </>
        )
    })

const ProductDetail: React.FC = () => {

    const dispatch = useAppDispatch();

    const product = useAppSelector(getProductDetail);
    const params = product?.params;
    const comments = useAppSelector(getProductComments);
    const cartCount = useAppSelector(getShopingCartCount);

    const [commentInp, setCommentInp] = useState('');

    const renderProductParams = () => {
        return params && <View style={{ width: '88%' }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 20 }}>配置参数:</Text>
            {
                Object.entries(params).map(([p, value]) => {
                    return <View style={{ ...styles.flexRow, marginTop: 6 }} key={p}>
                        <Text style={{ fontSize: 16 }}>{p}</Text>
                        <Text style={{ fontSize: 16, color: 'orange' }}>{value}</Text>
                    </View>
                })
            }
        </View>
    }

    const renderComments = () => {
        return <>
            <View style={{ width: '88%' }}>
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8, marginTop: 8 }}>评价:</Text>
                {product && <View style={{ ...styles.flexRow, justifyContent: 'flex-start' }}>
                    <TextInput onChangeText={setCommentInp} style={styles.TextInput} value={commentInp} on></TextInput>
                    <TouchableOpacity style={{ padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7365ff' }} onPress={() => {
                        if (commentInp.length) {
                            dispatch(addComment({
                                pid: product.id,
                                text: commentInp,
                                rating: 5,
                                user: 'Loki'
                            }))
                        }
                    }}><Text style={{ color: '#fff' }}>评价</Text>
                    </TouchableOpacity>
                </View>
                }
                {comments ?
                    <View >
                        {
                            comments.map((c, index) =>
                                <View style={{ padding: 8 }} key={c.id}>
                                    <Text style={{ fontWeight: '600', color: '#ad5918' }}>{c.user}</Text>
                                    <Text>{c.text}</Text>
                                    {
                                        comments.length - 1 !== index &&
                                        <View style={{ height: 1, backgroundColor: 'silver', marginTop: 6 }} />
                                    }
                                </View>
                            )
                        }
                        <View style={{ height: 50, width: '100%' }}></View>
                    </View>
                    : <View><Text>暂无评价!</Text></View>}
            </View>
        </>
    }

    const backToListPage = () => {
        dispatch(switchUi(UiControl.PRODUCT_LIST));
    };

    const toShopCart = () => {
        dispatch(switchUi(UiControl.SHOPCART));
    };

    const addToShoppingCart = () => {
        if (product) {
            dispatch(addToCart(product));
            dispatch(calcTotalPrice());
        }
    };

    return (
        <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
            <TouchableHighlight style={{ width: '100%' }} onPress={backToListPage} underlayColor='#fdfdfd'>
                <Text style={{ color: 'blue', fontSize: 16, fontWeight: 'bold' }}>{'< Back List'}</Text>
            </TouchableHighlight>
            <ScrollView style={{ width: '100%', zIndex: 1 }}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {
                    product &&
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {product.prodName}
                        </Text>
                    </View>
                }
                {renderProductParams()}
                {renderComments()}
            </ScrollView>
            <View style={styles.buttomBar}>
                <Text style={{ ...styles.productPrice, marginRight: 20, lineHeight: 50 }}>￥{product?.price}</Text>
                <Text style={{ lineHeight: 50, marginRight: 20 }} onPress={toShopCart}>Cart ({cartCount})</Text>
                <TouchableOpacity onPress={addToShoppingCart} style={{ width: 100, backgroundColor: '#7365FF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: '600' }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CounterButton: React.FC<{
    count: number,
    onAdd: (n: number) => void,
    onMinus: (n: number) => void,
    style?: ViewStyle
}> = ({ count, onAdd, onMinus, style }) => {

    return <View style={{ ...(style ?? {}), display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button title=' - ' onPress={() => onMinus?.(count)}></Button>
        <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 18 }}>{count}</Text>
        <Button title=' + ' onPress={() => onAdd?.(count)}></Button>
    </View>
}

const ShopCart: React.FC = () => {
    const dispatch = useAppDispatch();
    const shoppingCart = useAppSelector(getShopingCart);
    // useStore
    const total = useStore<RootState>().getState().shoppingCart.cartTotal;
    const products = useAppSelector(getProducts);
    const cartList = shoppingCart.productInfo.map(d =>
        ({ ...d, detail: products.find(p => p.id === d.pid) }));

    const backToDetailPage = () => {
        dispatch(switchUi(UiControl.PRODUCT_DETAIL));
    };
    return (
        <>
            <TouchableHighlight style={{ width: '100%' }} onPress={backToDetailPage} underlayColor='#fdfdfd'>
                <Text style={{ color: 'blue', fontSize: 16, fontWeight: 'bold' }}>{'< Back Detail'}</Text>
            </TouchableHighlight>
            <ScrollView style={{ width: '100%', zIndex: 1 }}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {
                    cartList.map(d => <View key={d.pid} style={{ ...styles.productCard, width: '92%' }}>
                        <Text>{d.detail?.prodName}</Text>
                        <CounterButton style={{ alignSelf: 'flex-end' }} onAdd={() => {
                            batch(() => {
                                dispatch(cartProductAdd(d.pid));
                                dispatch(calcTotalPrice())
                            })
                        }} onMinus={() => {
                            dispatch(cartProductMinus(d.pid));
                            dispatch(calcTotalPrice())
                        }} count={d.count}></CounterButton>
                        <Text style={{ ...styles.productPrice, alignSelf: 'flex-end', marginTop: 10 }}>￥{d.total}</Text>
                    </View>)
                }
            </ScrollView>
            {
                cartList.length ?
                    <View style={{ ...styles.flexRow, justifyContent: 'flex-end' }}>
                        <Text>Total: </Text>
                        <Text style={{ ...styles.productPrice }}>￥{total}</Text>
                    </View> :
                    <View>
                        <Text style={{ ...styles.flexRow, justifyContent: 'center' }}>No Product Is Selected</Text>
                    </View>
            }
        </>
    )
}


export const RnReduxPage: React.FC = () => {

    const currnetPage = useAppSelector(getCurrentPage);
    const dispatch = useAppDispatch();

    useEffect(() => () => {
        dispatch(switchUi(UiControl.PRODUCT_LIST));
    }, []);

    return (
        <View style={styles.container}>
            { currnetPage === UiControl.PRODUCT_LIST && <ProductList />}
            { currnetPage === UiControl.PRODUCT_DETAIL && <ProductDetail />}
            { currnetPage === UiControl.SHOPCART && <ShopCart />}
        </View>
    )
}


const styles = StyleSheet.create({
    productCard: {
        display: 'flex',
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: '48%',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2d2c29'
    },
    buttomBar: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        width: '100%', height: 50,
        zIndex: 1, backgroundColor: '#fff',
        borderTopColor: '#f0f0f0',
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    flexRow: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fa5035'
    },
    numberText: {
        fontSize: 24,
        color: '#cbe124'
    },
    btnWidth: {
        width: 100
    },
    container: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    },
    TextInput: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '90%' }
})