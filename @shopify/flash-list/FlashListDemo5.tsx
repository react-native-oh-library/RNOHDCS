import React, { useCallback, useEffect, useState } from 'react'
import { MasonryFlashList, FlashList } from '@shopify/flash-list'
import { Text, View, FlatList, ScrollView, Alert } from 'react-native'
import { TestCase, Tester, TestSuite } from '@rnoh/testerino'

const OnScrollDemo: React.FC = () => {
    const [data, setData] = useState<number[]>([])
    const [hasMore, setHasMore] = useState<boolean>(false)
    const [toastMessage, setToastMessage] = useState<string>('')
    const [showToast, setShowToast] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setData(Array.from(new Array(1000).fill(1)))
            setHasMore(true)
        }, 200)
    }, [])

    const showToastMessage = (message: string) => {
        setToastMessage(message)
        setShowToast(true)

        setTimeout(() => {
            setShowToast(false)
        }, 500)
    }

    const renderItem = useCallback(() => (
        <View style={{ height: 200, borderBottomWidth: 1, borderBottomColor: '#F00' }}>
            <Text>{Math.random()}</Text>
        </View>
    ), [])

    console.log('OnScrollDemo111  render', { hasMore, length: data.length })
    const handleScroll = () => {
        if (hasMore && data.length > 0) {
            console.log('OnScrollDemo111  should loadmore', { hasMore, length: data.length })
            showToastMessage(`OnScroll triggered - Should load more (hasMore: ${hasMore}, items: ${data.length})`)
        } else {
            console.log('OnScrollDemo111  error', { hasMore, length: data.length })
            showToastMessage(`OnScroll Error - Error state (hasMore: ${hasMore}, items: ${data.length})`)
        }
    }

    return (
        <Tester>
            <TestSuite name="MasonryFlashList OnScroll">
                <TestCase itShould="handle onScroll event when scrolling through items">
                    <View style={{ height: '80%', width: '100%', position: 'relative' }}>
                        <MasonryFlashList
                            onScroll={handleScroll}
                            renderItem={renderItem}
                            data={data}
                        />
                        {showToast && (
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20,
                                    right: 20,
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 12,
                                    borderRadius: 8,
                                    zIndex: 1000,
                                }}
                            >
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                                    {toastMessage}
                                </Text>
                            </View>
                        )}
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    )
}
export default OnScrollDemo