import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NetworkInfo} from 'react-native-network-info';

interface NetworkInfoState {
  ipAddress: string | null;
  ipv4Address: string | null;
  broadcast: string | null;
  ssid: string | null;
  bssid: string | null;
  subnet: string | null;
  defaultGateway: string | null;
  frequency: number | null;
}

export function NetworkInfoDemo(): JSX.Element {
  const [info, setInfo] = useState<NetworkInfoState>({
    ipAddress: '',
    ipv4Address: '',
    broadcast: '',
    ssid: '',
    bssid: '',
    subnet: '',
    defaultGateway: '',
    frequency: 0,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={async () => {
            const value = await NetworkInfo.getIPAddress();
            setInfo({...info, ipAddress: value});
          }}>
          <Text style={styles.button}>ipAddress</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>{`${info.ipAddress}`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={async () => {
            const value = await NetworkInfo.getIPV4Address();
            setInfo({...info, ipv4Address: value});
          }}>
          <Text style={styles.button}>ipv4Address</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>{`${info.ipv4Address}`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={async () => {
            const value = await NetworkInfo.getBroadcast();
            setInfo({...info, broadcast: value});
          }}>
          <Text style={styles.button}>broadcast</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>{`${info.broadcast}`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={async () => {
            const value = await NetworkInfo.getSSID();
            setInfo({...info, ssid: value});
          }}>
          <Text style={styles.button}>ssid</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>{`${info.ssid}`}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'hsl(193, 95%, 68%)',
    borderWidth: 2,
    borderColor: 'hsl(193, 95%, 30%)',
    borderRadius: 4,
  },
});
