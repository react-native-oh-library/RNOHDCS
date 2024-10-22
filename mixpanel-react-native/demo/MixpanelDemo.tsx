import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Mixpanel} from 'mixpanel-react-native';

const trackAutomaticEvents = false;
const token = 'c67ab2053f163f19e7420e82a8d820f4' //Use the token of your project. The token is used only for tests.
const mixpanel = new Mixpanel(token, trackAutomaticEvents);
mixpanel.init();

export default function MixpanelDemo() {
    return (
    <SafeAreaView>
      <Button
        title="Select Premium Plan"
        onPress={() => mixpanel.track('Plan Selected', {Plan: 'Premium'})}
      />
    </SafeAreaView>
    );
}
