import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Text, View} from 'react-native';
import TcpSocket from 'react-native-tcp-socket';

const ca = `-----BEGIN CERTIFICATE-----
MIIFOTCCAyGgAwIBAgIUZiAx4QlvsVTwoSPJCW7oHBut1aEwDQYJKoZIhvcNAQEL
BQAwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoM
GEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDAeFw0yNDA4MjkxMTU5MzNaFw0yNDA5
MjgxMTU5MzNaMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEw
HwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwggIiMA0GCSqGSIb3DQEB
AQUAA4ICDwAwggIKAoICAQC7zpsawfWsf0A4D+A2apWo87oleyYIEyi5nZo6Bo+8
Sp9dO0qFPBfVvRjDLW/E2ZRcb22I4KUNp6bXv8AvqDWRkiCsI19uuZ4CapLTLPvw
mJeJICr/ol6NIHNUMBHAW8LshojTOA9Tu5l1qw34kMVZokT/2b98FIk0z0xaPjpR
8YMYOIGHJO0J2zV3qQS60C8tvaJNvAwjhvu59J897I4putQsfnU5+xO7gsTYh4md
mzDxCMBbfxMnexwpnAXIpxvlUXpdoMZf2KV1qetEZ539qDKCvsj20ejpAHWJnbJs
uR4ZXroXer1413XzRmn9xISllq2Z3c4QX5OmCLusXwi5yrTDvs/M0PNjMsnMm1O/
OvjZznAQ8c6FnUYAGKf4K2q7HKSIn45kTrvPVeLNvb42xhQ3B5luuTraNr/oTRTK
nrteBSf3LYeK8YLCZlF9nm2ppJkV90xl7RCatU0MqmGx/VCe5b7EGgpxj8fnEm5V
GbyJ+8B5ruOLoPynejgp/2S2LdfS1oBvqdAZfjeu6sJDLS95vKUpPDoNFe4FZgFr
N3V2alzocX5D2vHacOGR2XBqZ33w53KwekPuq3hMnC9X+gCJCp/WfSBqArbcEUWF
2++Ps5cO8tJ2aq0AzD2N7epEbc6LXolXAfv1JyHszjcE5cF4CzOTMntd8BBiFxXl
YwIDAQABoyEwHzAdBgNVHQ4EFgQUtfcXe+EBtuSZNdHTxf/mFJickCswDQYJKoZI
hvcNAQELBQADggIBAI3DKyh/ylg4gzlIA5SYMlC0wFCv5rMyXAbfJHebLIs/iqEV
L+Gs9TvQnGXqcR2Rk86CgxA+4kpqOhhVOrzSO6t6YbLTZf3lxBME0p2kmbs65Llx
FFAXe5Lyg1mPWU5cgXdZ0sakf9uc16mtl6VpYnTw9aAGMdF0JSPYNbU/o734Ze+q
1GlEdsrBP3pOrmF04WVSgfdUCKqdksP8Gq1tU/pGDpT2UkzQGh+ZDz8VQePsKzAd
hgDMJbKapgEjE1cRyHAKU0JhmhRMoSXAz5svVpYm/q1dgvqi7TamoftJfXsMsOaW
eFlvUzOcS77eIE4hN2kL+fpBRwiAx8pli2RnKzd0yFnhb/LG32nwDmYhzGOMrHOO
JfpU4tWVVrIp9yY6IKRXGsj4XQ//5ofnAySTSpu4H9wOCY4o+UCv/OGx17PJT7E+
e2gyq9FGyUZg0j+GBxjlzhT32WIhpCuWqr5dTWnIlXQJSVk3RIY+zuGVOh+H6Nby
zAXyUbWUStdw8dj24PDJK89a9qCmswNTGhu7cOeOId0wxYqqkY5G6J0j57Wo1CUG
QBxQ0dpH79QAjXOAG0zE3E1ci/Sd8Nb99OSygn/Y6l0379PKkUMb6ic6G08snn00
Z3cbzglkWavGfLsNHv4r2tptJTn003Cvd8w1gYSViOA1wd3JN/e3qZPPraIM
-----END CERTIFICATE-----`;

const serverKey = `-----BEGIN PRIVATE KEY-----
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
06v4n5pCSJDPebsNaecm5HETSwAfsg==
-----END PRIVATE KEY-----`;

const keystore = require('./ca/server-keystore.p12');

interface Message {
  id: number;
  text: string;
  user: string;
}

const getNowTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

let server: any = null;
let client: any = null;

let testCase = 1;

export const TcpSocketDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (msg: string, user: string) => {
    let newMessage = {
      id: Date.now(),
      text: msg,
      user: user,
    };
    setMessages([...messages, newMessage]);
  };

  const createTcpServer = () => {

    server = new TcpSocket.Server();

    server.listen({port: 0, host: '127.0.0.1', reuseAddress: true}, () => {
      const port = server.address()?.port;
      if (!port) throw new Error('Server port not found');
      console.log('TcpSocketDemo:tcpServer start listen success on:'+port);
    });

    server.on('connection', (socket: any) => {
      console.log('TcpSocketDemo:tcpServer on connection!');
      socket.on('data', (data: any) => {
        switch (testCase) {
          case 1:
            console.log(
              'TcpSocketDemo:tcpServer received data:' + JSON.stringify(data),
            );
            sendMessage(`received data: ${data}`, 'tcpServer');
            let time = getNowTime();
            socket.write(`${time} Hello, tcpClient!`);
            break;
          case 2:
            console.log(
              `TcpSocketDemo:tcpServer Received ${data.length} bytes of data.`,
            );
            socket.pause();
            console.log(
              'TcpSocketDemo:tcpServer There will be no additional data for 1 second.',
            );
            setTimeout(() => {
              console.log(
                'TcpSocketDemo:tcpServer Now data will start flowing again.',
              );
              socket.resume();
            }, 1000);
            break;
          case 3:
            let dataLen = data.length;
            let time1 = getNowTime();
            console.log(
              'TcpSocketDemo:tcpServer client received data: ' +
                dataLen +
                ' bytes',
            );
            sendMessage(
              `${time1} received data: ${dataLen} bytes`,
              'tcpServer',
            );
            break;
          default:
            console.log(
              'TcpSocketDemo:tcpServer socket received data:' +
                JSON.stringify(data),
            );
        }
      });
      socket.on('error', (error: any) => {
        let errorMsg = '';
        if (error) {
          errorMsg = JSON.stringify(error);
        }
        console.log('TcpSocketDemo:tcpServer socket on error ' + errorMsg);
      });

      socket.on('close', (error: any) => {
        let errorMsg = '';
        if (error) {
          errorMsg = JSON.stringify(error);
        }
        console.log('TcpSocketDemo:tcpServer socket on close ' + errorMsg);
      });
    });

    server.on('error', (error: any) => {
      console.log('TcpSocketDemo:tcpServer on error ' + JSON.stringify(error));
    });

    server.on('close', () => {
      console.log('TcpSocketDemo:tcpServer closed');
    });
  };

  const createTcpClient = () => {

    client = new TcpSocket.Socket();

    const port = server.address()?.port;
    if (!port) throw new Error('Server port not found');

    let options = {
      port: port,
      host: '127.0.0.1',
      localAddress: '127.0.0.1',
      reuseAddress: true,
      localPort: 20000,
      interface: 'wifi',
    };
    client.connect(options, () => {
      console.log('TcpSocketDemo:tcpClient connect success');
    });
    client.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(`received data: ${data}`, 'tcpClient');
    });

    client.on('connect', () => {
      console.log(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('drain', () => {
      console.log('TcpSocketDemo:tcpClient drained');
    });

    client.on('error', (error: any) => {
      if (error) {
        console.log('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
      }
    });

    client.on('close', (error: any) => {
      let errorMsg = '';
      if (error) {
        errorMsg = JSON.stringify(error);
      }
      console.log('TcpSocketDemo:tcpClient closed ' + errorMsg);
    });
  };

  const tcpSendData = () => {
    testCase = 1;
    let time = getNowTime();
    client.write(`${time} Hello, tcpServer!`);
  };

  const tcpClose = () => {
    client.destroy();
    server.close();
    client = null;
    server = null;
  };

  const tcpPauseResume = () => {
    testCase = 2;
    let i = 0;
    const MAX_ITER = 3000;
    write();
    async function write() {
      let ok = true;
      while (i <= MAX_ITER && ok) {
        i++;
        const buff = ' ->' + i + '<- ';
        ok = client.write(buff);
      }
      if (!ok) {
        client.once('drain', write);
      }
    }
  };

  const tcpLongData = () => {
    testCase = 3;
    const hugeData = 'x'.repeat(5 * 1024);
    client.end(hugeData, 'utf8');
    console.log('TcpSocketDemo:tcpClient end hugeData...');
  };

  const createTlsServer = () => {

    server = new TcpSocket.TLSServer();
    server.setSecureContext({
      key: serverKey,
      cert: ca,
      keystore: keystore,
    });
    server.on('secureConnection', (socket: any) => {
      console.log(
        'TcpSocketDemo:TlsServer on secureConnection:' +
          JSON.stringify(socket.address()),
      );
      socket.on('data', (data: any) => {

        switch (testCase) {
          case 1:
            console.log(
              'TcpSocketDemo:tlsServer received data:' + JSON.stringify(data),
            );
            sendMessage(`received data: ${data}`, 'tlsServer');
            let time = getNowTime();
            socket.write(`${time} Hello, tlsClient!`);
            break;
          case 2:
            console.log(
              `TcpSocketDemo:tlsServer Received ${data.length} bytes of data.`,
            );
            socket.pause();
            console.log(
              'TcpSocketDemo:tlsServer There will be no additional data for 1 second.',
            );
            setTimeout(() => {
              console.log(
                'TcpSocketDemo:tlsServer Now data will start flowing again.',
              );
              socket.resume();
            }, 1000);
            break;
          case 3:
            let dataLen = data.length;
            let time1 = getNowTime();
            console.log(
              'TcpSocketDemo:tlsServer client received data: ' +
                dataLen +
                ' bytes',
            );
            sendMessage(
              `${time1} received data: ${dataLen} bytes`,
              'tlsServer',
            );
            break;
          default:
            console.log(
              'TcpSocketDemo:tlsServer socket received data:' +
                JSON.stringify(data),
            );
        }
      });
      socket.on('error', (error: any) => {
        console.log(
          'TcpSocketDemo:TlsServer secureConnection socket error ' +
            JSON.stringify(error),
        );
      });

      socket.on('close', (error: any) => {
        console.log(
          'TcpSocketDemo:TlsServer secureConnection socket closed ' +
            (error ? JSON.stringify(error) : ''),
        );
      });
    });

    server.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsServer on error ' + JSON.stringify(error));
    });

    server.on('close', () => {
      console.log('TcpSocketDemo:TlsServer closed');
    });

    server.listen({port: 9999, host: '127.0.0.1', reuseAddress: true}, () => {
      console.log('TcpSocketDemo:tlsServer start listen success!');
    });
  };

  const createTlsClient = () => {

    let clientSocket = new TcpSocket.Socket();

    client = new TcpSocket.TLSSocket(clientSocket, {ca});
    clientSocket.on('error', error => {
      console.log(
        'TcpSocketDemo:TlsClient clientSocket error',
        error ? JSON.stringify(error) : '',
      );
    });

    clientSocket.on('close', hadError => {
      console.log(
        'TcpSocketDemo:TlsClient clientSocket close ' +
          (hadError ? JSON.stringify(hadError) : ''),
      );
    });

    clientSocket.connect(
      {
        port: 9999,
        host: '127.0.0.1',
        reuseAddress: true,
        localPort: 20000,
        interface: 'wifi',
      },
      () => {
        console.log('TcpSocketDemo:TlsClient clientSocket connect success.');
      },
    );
    client.on('secureConnect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on secureConnect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('connect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on connect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('drain', () => {
      console.log('TcpSocketDemo:TlsClient Client drained');
    });

    client.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:TlsClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        `received data: ${data.length < 500 ? data : data.length + ' bytes'}`,
        'tlsClient',
      );
    });

    client.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsClient error ' + JSON.stringify(error));
    });

    client.on('close', (error: any) => {
      console.log(
        'cpSocketDemo:TlsClient closed ' + (error ? JSON.stringify(error) : ''),
      );
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <View style={styles.message}>
            <Text style={styles.messageText}>
              {item?.user}: {item?.text}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity onPress={createTcpServer} style={styles.moduleButton}>
        <Text style={styles.buttonText}>创建TCP服务器</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createTcpClient} style={styles.moduleButton}>
        <Text style={styles.buttonText}>创建TCP客户端</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tcpSendData} style={styles.moduleButton}>
        <Text style={styles.buttonText}>客户端和服务器通信</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tcpPauseResume} style={styles.moduleButton}>
        <Text style={styles.buttonText}>数据的暂停与恢复</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tcpLongData} style={styles.moduleButton}>
        <Text style={styles.buttonText}>长数据传输</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tcpClose} style={styles.moduleButton}>
        <Text style={styles.buttonText}>关闭连接</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createTlsServer} style={styles.moduleButton}>
        <Text style={styles.buttonText}>创建TLS服务器</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createTlsClient} style={styles.moduleButton}>
        <Text style={styles.buttonText}>创建TLS客户端</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  message: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#aaa',
  },
  messageText: {
    fontSize: 16,
  },
  moduleButton: {
    marginBottom: 5,
    backgroundColor: 'deepskyblue',
    height: 34,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    verticalAlign: 'middle',
  },
});
