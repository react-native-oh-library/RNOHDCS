import React from 'react'
import { Image } from 'react-native'
import { appleAuthHarmony, AppleButton } from '@invertase/react-native-apple-authentication'
const appleLogoWhite = require('./img/apple_logo_white.png')

const AppleAuthenticationDemo: React.FC = (): JSX.Element => {
    return (
        <>
            <AppleButton
                style={{ margin: 10, marginTop: 48 }}
                cornerRadius={5}
                buttonStyle={AppleButton.Style.BLACK}
                buttonType={AppleButton.Type.SIGN_IN}
                onPress={async () => {
                    appleAuthHarmony.configure({
                        clientId: 'com.wyz',
                        redirectUri: 'www.zhihu.com',
                        responseType: appleAuthHarmony.ResponseType.ALL,
                        nonceEnabled: true,
                        scope: appleAuthHarmony.Scope.ALL,
                        nonce: '1111111111111',
                        state: '2222222222222'
                    })
                    const singinRes = await appleAuthHarmony.signIn()
                    console.log(singinRes)
                }}
                leftView={(
                    <Image
                        style={{
                            alignSelf: 'center',
                            width: 14,
                            height: 14,
                            marginRight: 7,
                            resizeMode: 'contain',
                        }}
                        source={appleLogoWhite}
                    />
                )}
            />
        </>
    )
}

export default AppleAuthenticationDemo