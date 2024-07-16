
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { API_URL, API_TOKEN, BLOCK_LIST, ALLOW_UNDEFINED_VALUE } from '@env';
import { Text, View, TouchableHighlight } from 'react-native';

export const PALETTE = {
  REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
  REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

export function Button({ label, onPress }: { onPress: () => void; label: string }) {
  return (
    <TouchableHighlight
      underlayColor={PALETTE.REACT_CYAN_DARK}
      style={{
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: PALETTE.REACT_CYAN_LIGHT,
        borderWidth: 2,
        borderColor: PALETTE.REACT_CYAN_DARK,
      }}
      onPress={onPress}>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}

export function DotEnvTest() {
  return (
    <Tester>
      <TestSuite name="DotEnv">
        <TestCase itShould="current doc env:">
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{process.env.APP_ENV}</Text>
        </TestCase>
        <TestCase
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  label="Get API_URL"
                  onPress={() => {
                    setState(API_URL);
                  }}
                />
                <Text style={{ color: 'red' }}>{(API_URL)}</Text>
              </View>
            );
          }}
          assert={({ state, expect }) => {
            expect(state).to.be.eq('xxx.com');
          }}
          tags={['C_API']}
          itShould="Get API_URL Value"
        />
        <TestCase
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  label="Get API_TOKEN"
                  onPress={() => {
                    setState(API_TOKEN);
                  }}
                />
                <Text style={{ color: 'red' }}>{(API_TOKEN)}</Text>
              </View>
            );
          }}
          assert={({ state, expect }) => {
            expect(state).to.be.eq('123456');
          }}
          tags={['C_API']}
          itShould="Get API_TOKEN Value"
        />
        <TestCase itShould="read ALLOW_UNDEFINED_VALUE">
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{ALLOW_UNDEFINED_VALUE ? ALLOW_UNDEFINED_VALUE : 'undefined'}</Text>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}
