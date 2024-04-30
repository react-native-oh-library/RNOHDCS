import React from 'react';
import { ScrollView,Text } from 'react-native';
import { PricingCard } from '@rneui/themed';

type PricingCardComponentProps = {};

const Pricing: React.FunctionComponent<PricingCardComponentProps> = () => {
  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Pricing</Text>
      <ScrollView>
        <PricingCard
          color='#397af8'
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: ' GET STARTED', icon: { name: 'rocket', type: 'font-awesome' } }}
        />
        <PricingCard
          color='#8F0CE8'
          title="Starter"
          price="$19"
          info={['10 Users', 'Basic Support', 'All Core Features']}
          button={{ title: ' GET STARTED', icon: { name: 'rocket', type: 'font-awesome' } }}
        />
        <PricingCard
          color='#00B233'
          title="Enterprise"
          price="$49"
          info={['100 Users', 'One on One Support', 'All Core Features']}
          button={{ title: ' GET STARTED', icon: { name: 'rocket', type: 'font-awesome' } }}
        />
      </ScrollView>
    </>
  );
};

export default Pricing;
