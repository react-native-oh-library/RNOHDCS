import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  FlatList,
  TextInput,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import TcpSocket from 'react-native-tcp-socket';

interface Message {
  id: number;
  time: string;
  text: string;
}

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

let ca2 =
  '-----BEGIN CERTIFICATE-----\n' +
  'MIIDXDCCAkSgAwIBAgIUYNBSMX/qW/VzyVFt+XRC9ef7FcowDQYJKoZIhvcNAQEL\n' +
  'BQAwXzEPMA0GA1UECgwGR1RKQVFIMRMwEQYDVQQLDApHVEpBUUhUZWNoMQ8wDQYD\n' +
  'VQQDDAZMdWN5Q0ExJjAkBgkqhkiG9w0BCQEWF3podWNoZW4wMjUxMTNAZ3RqYXMu\n' +
  'Y29tMB4XDTIzMDkxODAxMzEzMVoXDTMzMDkxNTAxMzEzMVowXzEPMA0GA1UECgwG\n' +
  'R1RKQVFIMRMwEQYDVQQLDApHVEpBUUhUZWNoMQ8wDQYDVQQDDAZMdWN5Q0ExJjAk\n' +
  'BgkqhkiG9w0BCQEWF3podWNoZW4wMjUxMTNAZ3RqYXMuY29tMIIBIjANBgkqhkiG\n' +
  '9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyphHxv1SJ9ndZ0KL3sXoLJEIY+BKsVLknZyo\n' +
  'zA1RB0UQwGGDZ7F4C0YmeaQf+ofe1DVBwgcs+IJIcvTtWHHsZ8N0/clz6PQ2izTx\n' +
  'Q6538kzeWB+P9BFi1ezVPcWhK3GndW56+/GwXzYRt9Zl5dWv6faiwZLmQzzycE7J\n' +
  'IK1Ip2uRuxHv6FvNocQXuhTlj0yKsQ6vSLbkO+ewo0Jq1o+7+uW5Sp5IzktoaA4s\n' +
  't593S2X7w0D/ZFnPewHoGkLrBJ+V+Zppt0woS9k94sYOKyWNm1wU8OUtsdHu2lts\n' +
  'VmPlvSWzs1l6WgZ1uW1hyWrMawV4N8NdTMFlrvhIQv2X3jBO0wIDAQABoxAwDjAM\n' +
  'BgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBfVJqKIzEx4jzKlelM2f3L\n' +
  'mgAYgAt5qVdFMJLSztl2mQYm20c6myOrEi9d0gFjnub0Cb5r/UhRYkhW65c20TCO\n' +
  'nOgx+WdgXbff9CBvzLHiBm3I3mMAEmjHZ+nAUcei71yEYR4yoEgkcBMYTo5n9Jb7\n' +
  'i0tVy7pJMBBTgCyynXd+HOtc3cFyX3Ka+ZPgOVeyYC0v8HCvftYoZe+MvjkwGGKk\n' +
  'WYyInTSKJg4mlg9aw6CqMK7P9cvH3LDEQOt3Fdi/sHqJwfYYYrHOUtU8ZxjjzW1p\n' +
  'SDXaHR7feYkZfD6wr5yiGHjcA0U5BX1S6IIEfyxOLeYPBx8/fnWoMybQT3l1jBZV\n' +
  '-----END CERTIFICATE-----';
let cert2 =
  '-----BEGIN CERTIFICATE-----\n' +
  'MIIDaDCCAlACAQEwDQYJKoZIhvcNAQELBQAwXzEPMA0GA1UECgwGR1RKQVFIMRMw\n' +
  'EQYDVQQLDApHVEpBUUhUZWNoMQ8wDQYDVQQDDAZMdWN5Q0ExJjAkBgkqhkiG9w0B\n' +
  'CQEWF3podWNoZW4wMjUxMTNAZ3RqYXMuY29tMCAXDTIzMDkxODAxNDgzMFoYDzIx\n' +
  'MjMwODI1MDE0ODMwWjCBkjELMAkGA1UEBhMCQ04xETAPBgNVBAgMCFNoYW5nSGFp\n' +
  'MREwDwYDVQQHDAhTaGFuZ0hhaTEPMA0GA1UECgwGR1RKQVFIMRMwEQYDVQQLDApH\n' +
  'VEpBUUhUZWNoMQ8wDQYDVQQDDAZMdWN5Q0ExJjAkBgkqhkiG9w0BCQEWF3podWNo\n' +
  'ZW4wMjUxMTNAZ3RqYXMuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC\n' +
  'AQEA9uJFb5ROqRr20L3abXgwoCoIpbCZweBY/+jnZKXVOXmz3sGNKZwghE+qVvVY\n' +
  'no7Ua7n/wmLWlYs3NqyQK8aXIxocv0woHet2i2nbKMpSbOfOhbY58FcNDC2qedTE\n' +
  'VvRXmk4ZAAGvAyYk1gAAWTZ4wo9Wu9dnCCo8RgnBy0pYqGu+VQj4IoMtLV3Bbt1M\n' +
  '9UTjXR8nBL3xR+5UxYHHaMDwtf1d9SAXXgZ7L7nB1TWc9uB7mjPYJb2pKj+NsO78\n' +
  'stCSVUIj1cBsMPug+QsOk5RlrcEW+SAEqEzf7uVkijjtC4lr6t0dLE7rXNUEN03l\n' +
  '7CJkXyIJgEuc/BnqoT+5kSE4lwIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQBUZzka\n' +
  'HiJ/YCEU2TTQW8vufFOpdFOyOJhbH9P99cHMxOXARS8dt+zx3V8TUNtEr4kXmVxf\n' +
  'xIfvAJZ5yMkMA8XLAKxCRuDvKMRqgAa1f0hdnn9kzCAnk+JILfcenj66kasJeD72\n' +
  'YQeEGU9g05p9nIfcLz3RcmL8m8RsSt6JuFn3lgrvbctWG2tLHUuLRqyZWNPTHSTQ\n' +
  'bqs4bI6igTuDHa4N5TNd0SjDJJ14wA/LipTG+WIS9VorJnD4hR5BA38w6BIX9jOf\n' +
  'o7GO9itg82du+4Rhqx+vx870H6EQ3JDWD5+F4l6ffsM37KEv/FdCIK8G13aYyVwQ\n' +
  '2zwn4Ga5s5OX32Zd\n' +
  '-----END CERTIFICATE-----';
let key2 =
  '-----BEGIN PRIVATE KEY-----\n' +
  'MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQD24kVvlE6pGvbQ\n' +
  'vdpteDCgKgilsJnB4Fj/6OdkpdU5ebPewY0pnCCET6pW9ViejtRruf/CYtaVizc2\n' +
  'rJArxpcjGhy/TCgd63aLadsoylJs586FtjnwVw0MLap51MRW9FeaThkAAa8DJiTW\n' +
  'AABZNnjCj1a712cIKjxGCcHLSlioa75VCPgigy0tXcFu3Uz1RONdHycEvfFH7lTF\n' +
  'gcdowPC1/V31IBdeBnsvucHVNZz24HuaM9glvakqP42w7vyy0JJVQiPVwGww+6D5\n' +
  'Cw6TlGWtwRb5IASoTN/u5WSKOO0LiWvq3R0sTutc1QQ3TeXsImRfIgmAS5z8Geqh\n' +
  'P7mRITiXAgMBAAECggEBAMblF8eClbSK8pjMuvJCR/pgosLJebXFxi21NuXQ6+z3\n' +
  '7T7ic5U4IMI3ZCXWVuS2cM+w8ylpczLbC0pSz3tU7GHtIYfEFPW1wrUiPNup06nF\n' +
  'Po5edmL33p0XFSY9kUf0Zbb8gAuPT62bx0VYju9QgQ1NaTS/nlPnotNR/PyIEtDr\n' +
  'F0GU1dOwSR89tNS8mxEhN5kkC70Pup82MpnLqMHO9f+3XSeQVxw2ElAxAVRr2f+7\n' +
  '42XOeIf87jcPO2QbPJmKKe3KpFyIuE5JU7LUiwFINy10KowcTTSD3vz2eimJif/n\n' +
  'HBEdSAAo3amVzwN4IDdarvRvL9arElyGx9oTHv6vP5ECgYEA/IUan0QwWX+TkiDZ\n' +
  'I/o3oWHYScdV1Hcu5dryE9Bt4lCz5HZoWMCfDals9eRyf9njcGLHMAjsA2wq8d6s\n' +
  'z6x9b/UPben/CM+NI+kLC9rD5AE0itr9EyHLFoz3r3rwlvX+X2eTNYGGSRUsxlF3\n' +
  'GunHrBT1do8ggNhECkb2fnA5p0MCgYEA+klId6UvsIJIlFvKCQKEcbXJlH6po5We\n' +
  'gIRXJ1hSyR/RgS40BbuCLiQ77299rcK+3mMfDBl+z9G9XAuOmN/t5YtqlgBT8x6N\n' +
  'BAx1l3XlnYu3jhW+gu7a1Htgf7bue6UHfrUlVzBwG5dmpWanJsmNfl8wA+W4m8TB\n' +
  '2XuZ9MP+Qh0CgYEA9MCKMi5kcoqt3OfLrwxaGSh9+9yh+0Hdidox4jSWHNI92kVO\n' +
  'FB/2ycYanyZiODtXL9n92Df9kb+ozDAY7VzxY69x2gYANGj/EvxQwZezYG4uoBtr\n' +
  'SbzqXBwcAdC2Gouplo0MaML3BiTo9fuF5ucKqmbSF6zYQynaoN9xENHzf4MCgYEA\n' +
  'n0KecDOWYvSkBnNZ3d3SNSD9whXPEB6WmySa6JhVJVGv2El0JOmp7n5z/OmuyTCQ\n' +
  'j6X3DZXzkX3exoE8HZ7wHA5YplZTFPKtvJPJB7WnhFZxWGIRtfMTH/3Z66qVmevr\n' +
  'Fv9hYVebHpN6Z2kol4/ND0q2nORCUiwjRaZW0t8cHSkCgYEAqNjaVjNdCd3uXZr6\n' +
  'hA5Ig3LHyc50jF72hY1AzmP0it/3D4c1pMm9AubJ+mGJ8R7PuvWDEwtQvzGcDuUn\n' +
  'BQEO8JF70/olgESKXuY94Dh0HUrHdXPLmDU5mrwnHwvNpY4d17Zh3jUsghtnTyxv\n' +
  'crr271wZvdNcLRzP0uWot2XNNuY=\n' +
  '-----END PRIVATE KEY-----';

const keystore = require('../ca/server-keystore.p12');

let instanceNumber = 0;

function getNextId() {
  return instanceNumber++;
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

let tlsServer: any = null;
let tlsClient: any = null;

let tlsClient2: any = null;
let testCase = 1;

export const TcpSocketTest = () => {
  const [ip, setIP] = useState('127.0.0.1');
  const [ip2, setIP2] = useState('192.168.1.1');
  const [ip3, setIP3] = useState('2001:0db8:85a3:0000:0000:8a2e:0370:7334');

  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (msg: string) => {
    let time = getNowTime();
    let newMessage = {
      id: getNextId(),
      time: time,
      text: msg,
    };
    setMessages([newMessage]);
  };

  const createTcpServer = () => {
    if (server) {
      sendMessage('TcpSocketDemo:tcpServer had created!');
      return;
    }
    server = new TcpSocket.Server();

    server.listen({port: 0, host: '127.0.0.1', reuseAddress: true}, () => {
      let port = server.address()?.port;
      if (!port) {
        setTimeout(() => {
          port = server.address()?.port;
        }, 3000);
      }
      console.log('TcpSocketDemo:tcpServer start listen success on:' + port);
      sendMessage('TcpSocketDemo:tcpServer start listen success on:' + port);
    });

    server.on('connection', (socket: any) => {
      console.log('TcpSocketDemo:tcpServer on connection!');
      socket.on('data', (data: any) => {
        switch (testCase) {
          case 1:
            console.log(
              'TcpSocketDemo:tcpServer received data:' + JSON.stringify(data),
            );
            sendMessage(
              'TcpSocketDemo:tcpServer received data:' + JSON.stringify(data),
            );
            let time = getNowTime();
            socket.write(`${time} Hello, tcpClient!`);
            break;
          case 2:
            console.log(
              `TcpSocketDemo:tcpServer Received ${data.length} bytes of data.`,
            );
            sendMessage(
              `TcpSocketDemo:tcpServer Received ${data.length} bytes of data.`,
            );
            socket.pause();
            console.log(
              'TcpSocketDemo:tcpServer There will be no additional data for 1 second.',
            );
            sendMessage(
              'TcpSocketDemo:tcpServer There will be no additional data for 1 second.',
            );
            setTimeout(() => {
              console.log(
                'TcpSocketDemo:tcpServer Now data will start flowing again.',
              );
              sendMessage(
                'TcpSocketDemo:tcpServer Now data will start flowing again.',
              );
              socket.resume();
            }, 1000);
            break;
          case 3:
            let dataLen = data.length;
            console.log(
              'TcpSocketDemo:tcpServer client received data: ' +
                dataLen +
                ' bytes',
            );
            sendMessage(
              'TcpSocketDemo:tcpServer client received data: ' +
                dataLen +
                ' bytes',
            );
            break;
          default:
            console.log(
              'TcpSocketDemo:tcpServer socket received data:' +
                JSON.stringify(data),
            );
            sendMessage(
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
        sendMessage('TcpSocketDemo:tcpServer socket on error ' + errorMsg);
      });

      socket.on('close', (error: any) => {
        let errorMsg = '';
        if (error) {
          errorMsg = JSON.stringify(error);
        }
        console.log('TcpSocketDemo:tcpServer socket on close ' + errorMsg);
        sendMessage('TcpSocketDemo:tcpServer socket on close ' + errorMsg);
      });
    });

    server.on('error', (error: any) => {
      console.log('TcpSocketDemo:tcpServer on error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:tcpServer on error ' + JSON.stringify(error));
    });

    server.on('close', () => {
      console.log('TcpSocketDemo:tcpServer closed');
      sendMessage('TcpSocketDemo:tcpServer closed');
    });

    server.on('listening', () => {
      console.log('TcpSocketDemo:tcpServer starts listening');
    });
  };

  const createTcpClient = () => {
    if (client) {
      sendMessage('TcpSocketDemo:tcpClient had created!');
      return;
    }
    client = new TcpSocket.Socket();

    let port = server.address()?.port;
    if (!port) {
      setTimeout(() => {
        port = server.address()?.port;
      }, 3000);
    }
    let options = {
      port: port,
      host: '127.0.0.1',
      localAddress: '127.0.0.1',
      reuseAddress: true,
      localPort: 20000,
      timeout: 3000,
      interface: 'wifi',
    };
    client.connect(options, () => {
      console.log('TcpSocketDemo:tcpClient connect success');
      sendMessage('TcpSocketDemo:tcpClient connect success');
    });
    client.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
    });

    client.on('connect', () => {
      console.log(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('drain', () => {
      sendMessage('TcpSocketDemo:tcpClient drained');
    });

    client.on('error', (error: any) => {
      if (error) {
        console.log('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
        sendMessage('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
      }
    });

    client.on('timeout', () => {
      console.log('TcpSocketDemo:tcpClient Socket timed out!');
      sendMessage('TcpSocketDemo:tcpClient Socket timed out!');
      //client.end();
    });

    client.on('close', (error: any) => {
      let errorMsg = '';
      if (error) {
        errorMsg = JSON.stringify(error);
      }
      console.log('TcpSocketDemo:tcpClient closed ' + errorMsg);
      sendMessage('TcpSocketDemo:tcpClient closed ' + errorMsg);
    });
  };

  const createTcpClientError = () => {
    let port = server.address()?.port;
    if (!port) {
      setTimeout(() => {
        port = server.address()?.port;
      }, 3000);
    }

    let options = {
      port: port,
      host: '127.0.0.1',
      localAddress: 'xxxxx',
      reuseAddress: true,
      localPort: 20000,
      interface: 'wifi',
    };
    client.connect(options, () => {
      console.log('TcpSocketDemo:tcpClient connect success');
      sendMessage('TcpSocketDemo:tcpClient connect success');
    });
  };
  const tcpSendData = () => {
    testCase = 1;
    let time = getNowTime();
    client.write(`${time} Hello, tcpServer!`);
  };

  const clearData = () => {
    if (client) {
      client.destroy();
      client = null;
    }
    if (server) {
      server.close();
      server = null;
    }
    if (tlsClient) {
      tlsClient.destroy();
      tlsClient = null;
    }
    if (tlsServer) {
      tlsServer.close();
      tlsServer = null;
    }
    sendMessage('');
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
    sendMessage('TcpSocketDemo:tcpClient end hugeData...');
  };

  const setSokcetTimeout = () => {
    client.setTimeout(3000);
  };

  const createTlsServer = () => {
    if (tlsServer) {
      sendMessage('TcpSocketDemo:tlsSever had created!');
      return;
    }

    tlsServer = new TcpSocket.TLSServer();
    tlsServer.setSecureContext({
      key: serverKey,
      cert: ca,
      keystore: keystore,
    });
    tlsServer.on('secureConnection', (socket: any) => {
      console.log(
        'TcpSocketDemo:TlsServer on secureConnection:' +
          JSON.stringify(socket.address()),
      );
      sendMessage(
        'TcpSocketDemo:TlsServer on secureConnection:' +
          JSON.stringify(socket.address()),
      );
      socket.on('data', (data: any) => {
        switch (testCase) {
          case 1:
            console.log(
              'TcpSocketDemo:tlsServer received data:' + JSON.stringify(data),
            );
            sendMessage(
              'TcpSocketDemo:tlsServer received data:' + JSON.stringify(data),
            );
            let time = getNowTime();
            socket.write(`${time} Hello, tlsClient!`);
            break;
          case 2:
            console.log(
              `TcpSocketDemo:tlsServer Received ${data.length} bytes of data.`,
            );
            sendMessage(
              `TcpSocketDemo:tlsServer Received ${data.length} bytes of data.`,
            );
            socket.pause();
            console.log(
              'TcpSocketDemo:tlsServer There will be no additional data for 1 second.',
            );
            sendMessage(
              'TcpSocketDemo:tlsServer There will be no additional data for 1 second.',
            );
            setTimeout(() => {
              console.log(
                'TcpSocketDemo:tlsServer Now data will start flowing again.',
              );
              sendMessage(
                'TcpSocketDemo:tlsServer Now data will start flowing again.',
              );
              socket.resume();
            }, 1000);
            break;
          case 3:
            let dataLen = data.length;
            console.log(
              'TcpSocketDemo:tlsServer client received data: ' +
                dataLen +
                ' bytes',
            );
            sendMessage(
              'TcpSocketDemo:tlsServer client received data: ' +
                dataLen +
                ' bytes',
            );
            break;
          default:
            console.log(
              'TcpSocketDemo:tlsServer socket received data:' +
                JSON.stringify(data),
            );
            sendMessage(
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
        sendMessage(
          'TcpSocketDemo:TlsServer secureConnection socket error ' +
            JSON.stringify(error),
        );
      });

      socket.on('close', (error: any) => {
        console.log(
          'TcpSocketDemo:TlsServer secureConnection socket closed ' +
            (error ? JSON.stringify(error) : ''),
        );
        sendMessage(
          'TcpSocketDemo:TlsServer secureConnection socket closed ' +
            (error ? JSON.stringify(error) : ''),
        );
      });
    });

    tlsServer.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsServer on error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:TlsServer on error ' + JSON.stringify(error));
    });

    tlsServer.on('close', () => {
      console.log('TcpSocketDemo:TlsServer closed');
      sendMessage('TcpSocketDemo:TlsServer closed');
    });

    tlsServer.listen(
      {port: 9999, host: '127.0.0.1', reuseAddress: true},
      () => {
        console.log('TcpSocketDemo:tlsServer start listen success!');
        sendMessage('TcpSocketDemo:tlsServer start listen success!');
      },
    );
  };

  const createTlsClient = () => {
    if (tlsClient) {
      sendMessage('TcpSocketDemo:tlsClient had created!');
      return;
    }

    let clientSocket = new TcpSocket.Socket();

    tlsClient = new TcpSocket.TLSSocket(clientSocket, {ca});
    clientSocket.on('error', error => {
      console.log(
        'TcpSocketDemo:TlsClient clientSocket error',
        error ? JSON.stringify(error) : '',
      );
      sendMessage(
        'TcpSocketDemo:TlsClient clientSocket error' + error
          ? JSON.stringify(error)
          : '',
      );
    });

    clientSocket.on('close', hadError => {
      console.log(
        'TcpSocketDemo:TlsClient clientSocket close ' +
          (hadError ? JSON.stringify(hadError) : ''),
      );
      sendMessage(
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
        sendMessage('TcpSocketDemo:TlsClient clientSocket connect success.');
      },
    );
    tlsClient.on('secureConnect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on secureConnect:' +
          JSON.stringify(tlsClient.address()),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient on secureConnect:' +
          JSON.stringify(tlsClient.address()),
      );
    });

    tlsClient.on('connect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on connect:' +
          JSON.stringify(tlsClient.address()),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient on connect:' +
          JSON.stringify(tlsClient.address()),
      );
    });

    tlsClient.on('drain', () => {
      console.log('TcpSocketDemo:TlsClient Client drained');
      sendMessage('TcpSocketDemo:TlsClient Client drained');
    });

    tlsClient.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:TlsClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
    });

    tlsClient.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsClient error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:TlsClient error ' + JSON.stringify(error));
    });

    tlsClient.on('close', (error: any) => {
      console.log(
        'tcpSocketDemo:TlsClient closed ' +
          (error ? JSON.stringify(error) : ''),
      );
      sendMessage(
        'tcpSocketDemo:TlsClient closed ' +
          (error ? JSON.stringify(error) : ''),
      );
    });
  };

  const createServer = () => {
    if (server) {
      sendMessage('TcpSocketDemo:tcpServer had created!');
      return;
    }
    server = TcpSocket.createServer((socket: any) => {
      socket.on('data', (data: any) => {
        switch (testCase) {
          case 1:
            console.log(
              'TcpSocketDemo:tcpServer received data:' + JSON.stringify(data),
            );
            sendMessage(
              'TcpSocketDemo:tcpServer received data:' + JSON.stringify(data),
            );
            let time = getNowTime();
            socket.write(`${time} Hello, tcpClient!`);
            break;
          case 2:
            console.log(
              `TcpSocketDemo:tcpServer Received ${data.length} bytes of data.`,
            );
            sendMessage(
              `TcpSocketDemo:tcpServer Received ${data.length} bytes of data.`,
            );
            socket.pause();
            console.log(
              'TcpSocketDemo:tcpServer There will be no additional data for 1 second.',
            );
            sendMessage(
              'TcpSocketDemo:tcpServer There will be no additional data for 1 second.',
            );
            setTimeout(() => {
              console.log(
                'TcpSocketDemo:tcpServer Now data will start flowing again.',
              );
              sendMessage(
                'TcpSocketDemo:tcpServer Now data will start flowing again.',
              );
              socket.resume();
            }, 1000);
            break;
          case 3:
            let dataLen = data.length;
            console.log(
              'TcpSocketDemo:tcpServer client received data: ' +
                dataLen +
                ' bytes',
            );
            sendMessage(
              'TcpSocketDemo:tcpServer client received data: ' +
                dataLen +
                ' bytes',
            );
            break;
          default:
            console.log(
              'TcpSocketDemo:tcpServer socket received data:' +
                JSON.stringify(data),
            );
            sendMessage(
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
        sendMessage('TcpSocketDemo:tcpServer socket on error ' + errorMsg);
      });

      socket.on('close', (error: any) => {
        let errorMsg = '';
        if (error) {
          errorMsg = JSON.stringify(error);
        }
        console.log('TcpSocketDemo:tcpServer socket on close ' + errorMsg);
        sendMessage('TcpSocketDemo:tcpServer socket on close ' + errorMsg);
      });
    });

    server.listen({port: 0, host: '127.0.0.1', reuseAddress: true}, () => {
      let port = server.address()?.port;
      if (!port) {
        setTimeout(() => {
          port = server.address()?.port;
        }, 3000);
      }
      console.log('TcpSocketDemo:tcpServer start listen success on:' + port);
      sendMessage('TcpSocketDemo:tcpServer start listen success on:' + port);
    });

    server.on('error', (error: any) => {
      console.log('TcpSocketDemo:tcpServer on error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:tcpServer on error ' + JSON.stringify(error));
    });

    server.on('close', () => {
      console.log('TcpSocketDemo:tcpServer closed');
      sendMessage('TcpSocketDemo:tcpServer closed');
    });
  };

  const connect = () => {
    if (client) {
      sendMessage('TcpSocketDemo:tcpClient had created!');
      return;
    }
    if (!server) {
      sendMessage('TcpSocketDemo:tcpServer is null!');
      return;
    }
    let port = server.address()?.port;
    if (!port) {
      setTimeout(() => {
        port = server.address()?.port;
      }, 3000);
    }
    client = TcpSocket.connect(
      {
        port: port,
        host: '127.0.0.1',
        localAddress: '127.0.0.1',
        reuseAddress: true,
        localPort: 20000,
        interface: 'wifi',
      },
      () => {
        console.log('TcpSocketDemo:tcpClient connect success');
        sendMessage('TcpSocketDemo:tcpClient connect success');
      },
    );
    client.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
    });

    client.on('connect', () => {
      console.log(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('drain', () => {
      console.log('TcpSocketDemo:tcpClient drained');
      sendMessage('TcpSocketDemo:tcpClient drained');
    });

    client.on('error', (error: any) => {
      if (error) {
        console.log('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
        sendMessage('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
      }
    });

    client.on('close', (error: any) => {
      let errorMsg = '';
      if (error) {
        errorMsg = JSON.stringify(error);
      }
      console.log('TcpSocketDemo:tcpClient closed ' + errorMsg);
      sendMessage('TcpSocketDemo:tcpClient closed ' + errorMsg);
    });
  };

  const createConnection = () => {
    if (client) {
      sendMessage('TcpSocketDemo:tcpClient had created!');
      return;
    }
    if (!server) {
      sendMessage('TcpSocketDemo:tcpServer is null!');
      return;
    }
    let port = server.address()?.port;
    if (!port) {
      setTimeout(() => {
        port = server.address()?.port;
      }, 3000);
    }
    client = TcpSocket.createConnection(
      {
        port: port,
        host: '127.0.0.1',
        localAddress: '127.0.0.1',
        reuseAddress: true,
        localPort: 20000,
        interface: 'wifi',
      },
      () => {
        console.log('TcpSocketDemo:tcpClient createConnection success');
        sendMessage('TcpSocketDemo:tcpClient createConnection success');
      },
    );
    client.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
    });

    client.on('connect', () => {
      console.log(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
      sendMessage(
        'TcpSocketDemo:tcpClient on connect:' +
          JSON.stringify(client.address()),
      );
    });

    client.on('drain', () => {
      console.log('TcpSocketDemo:tcpClient drained');
      sendMessage('TcpSocketDemo:tcpClient drained');
    });

    client.on('error', (error: any) => {
      if (error) {
        console.log('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
        sendMessage('TcpSocketDemo:tcpClient error ' + JSON.stringify(error));
      }
    });

    client.on('close', (error: any) => {
      let errorMsg = '';
      if (error) {
        errorMsg = JSON.stringify(error);
      }
      console.log('TcpSocketDemo:tcpClient closed ' + errorMsg);
      sendMessage('TcpSocketDemo:tcpClient closed ' + errorMsg);
    });
  };

  const createTLSServer = () => {
    if (tlsServer) {
      sendMessage('TcpSocketDemo:tlsServer had created!');
      return;
    }
    tlsServer = TcpSocket.createTLSServer(
      {
        ca: ca,
        key: serverKey,
        cert: ca,
        keystore: keystore,
      },
      (socket: any) => {
        console.log(
          'TcpSocketDemo:TlsServer on secureConnection:' +
            JSON.stringify(socket.address()),
        );
        sendMessage(
          'TcpSocketDemo:TlsServer on secureConnection:' +
            JSON.stringify(socket.address()),
        );
        socket.on('data', (data: any) => {
          switch (testCase) {
            case 1:
              console.log(
                'TcpSocketDemo:tlsServer received data:' + JSON.stringify(data),
              );
              sendMessage(
                'TcpSocketDemo:tlsServer received data:' + JSON.stringify(data),
              );
              let time = getNowTime();
              socket.write(`${time} Hello, tlsClient!`);
              break;
            case 2:
              console.log(
                `TcpSocketDemo:tlsServer Received ${data.length} bytes of data.`,
              );
              sendMessage(
                `TcpSocketDemo:tlsServer Received ${data.length} bytes of data.`,
              );
              socket.pause();
              console.log(
                'TcpSocketDemo:tlsServer There will be no additional data for 1 second.',
              );
              sendMessage(
                'TcpSocketDemo:tlsServer There will be no additional data for 1 second.',
              );
              setTimeout(() => {
                console.log(
                  'TcpSocketDemo:tlsServer Now data will start flowing again.',
                );
                sendMessage(
                  'TcpSocketDemo:tlsServer Now data will start flowing again.',
                );
                socket.resume();
              }, 1000);
              break;
            case 3:
              let dataLen = data.length;
              console.log(
                'TcpSocketDemo:tlsServer client received data: ' +
                  dataLen +
                  ' bytes',
              );
              sendMessage(
                'TcpSocketDemo:tlsServer client received data: ' +
                  dataLen +
                  ' bytes',
              );
              break;
            default:
              console.log(
                'TcpSocketDemo:tlsServer socket received data:' +
                  JSON.stringify(data),
              );
              sendMessage(
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
          sendMessage(
            'TcpSocketDemo:TlsServer secureConnection socket error ' +
              JSON.stringify(error),
          );
        });

        socket.on('close', (error: any) => {
          console.log(
            'TcpSocketDemo:TlsServer secureConnection socket closed ' +
              (error ? JSON.stringify(error) : ''),
          );
          sendMessage(
            'TcpSocketDemo:TlsServer secureConnection socket closed ' +
              (error ? JSON.stringify(error) : ''),
          );
        });
      },
    );

    tlsServer.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsServer on error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:TlsServer on error ' + JSON.stringify(error));
    });

    tlsServer.on('close', () => {
      console.log('TcpSocketDemo:TlsServer closed');
      sendMessage('TcpSocketDemo:TlsServer closed');
    });

    tlsServer.listen(
      {port: 9999, host: '127.0.0.1', reuseAddress: true},
      () => {
        console.log('TcpSocketDemo:tlsServer start listen success!');
        sendMessage('TcpSocketDemo:tlsServer start listen success!');
      },
    );
  };

  const connectTLS = () => {
    if (tlsClient) {
      sendMessage('TcpSocketDemo:tlsClient had created!');
      return;
    }
    if (!tlsServer) {
      sendMessage('TcpSocketDemo:tlsServer is null!');
      return;
    }
    tlsClient = TcpSocket.connectTLS(
      {
        port: 9999,
        host: '127.0.0.1',
        reuseAddress: true,
        localPort: 20000,
        interface: 'wifi',
        key: serverKey,
        ca: ca,
        cert: ca,
      },
      () => {
        console.log('TcpSocketDemo:TlsClient clientSocket connect success.');
        sendMessage('TcpSocketDemo:TlsClient clientSocket connect success.');
      },
    );

    tlsClient.on('secureConnect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on secureConnect:' +
          JSON.stringify(tlsClient.address()),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient on secureConnect:' +
          JSON.stringify(tlsClient.address()),
      );
    });

    tlsClient.on('connect', () => {
      console.log(
        'TcpSocketDemo:TlsClient on connect:' +
          JSON.stringify(tlsClient.address()),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient on connect:' +
          JSON.stringify(tlsClient.address()),
      );
    });

    tlsClient.on('drain', () => {
      console.log('TcpSocketDemo:TlsClient Client drained');
      sendMessage('TcpSocketDemo:TlsClient Client drained');
    });

    tlsClient.on('data', (data: any) => {
      console.log(
        'TcpSocketDemo:TlsClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient received data: ' +
          (data.length < 500 ? data : data.length + ' bytes'),
      );
    });

    tlsClient.on('error', (error: any) => {
      console.log('TcpSocketDemo:TlsClient error ' + JSON.stringify(error));
      sendMessage('TcpSocketDemo:TlsClient error ' + JSON.stringify(error));
    });

    tlsClient.on('close', (error: any) => {
      console.log(
        'TcpSocketDemo:TlsClient closed ' +
          (error ? JSON.stringify(error) : ''),
      );
      sendMessage(
        'TcpSocketDemo:TlsClient closed ' +
          (error ? JSON.stringify(error) : ''),
      );
    });
  };

  const connectRemoteTLS = () => {
    if (tlsClient2) {
      sendMessage('TcpSocketDemo:tlsClient had created!');
      return;
    }
    tlsClient2 = TcpSocket.connectTLS(
      {
        port: 0,
        host: '192.168.0.196',
        reuseAddress: true,
        localPort: 20000,
        interface: 'wifi',
        key: key2,
        ca: ca2,
        cert: cert2,
      },
      () => {
        console.log('TcpSocketDemo:TlsClient clientSocket connect success.');
        sendMessage('TcpSocketDemo:TlsClient clientSocket connect success.');
      },
    );
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <FlatList
            data={messages}
            renderItem={({item}) => (
              <View style={styles.message}>
                <Text style={styles.messageText}>
                  {item?.time}: {item?.text}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <ScrollView style={{margin: 10, height: '90%'}}>
          <Tester>
            <TestSuite name="测试API属性">
              <TestCase itShould="1.测试创建TCP服务器，成功会打印'tcpServer start listen success on:xxx'">
                <TouchableOpacity
                  onPress={createServer}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createServer</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="2.测试TCP客户端连接服务器，成功会打印‘tcpClient on connect:xxx’，（需要先创建服务器）">
                <TouchableOpacity onPress={connect} style={styles.moduleButton}>
                  <Text style={styles.buttonText}>connect</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="3.测试TCP客户端连接服务器，成功会打印‘tcpClient on connect:xxx（测试前先clearData，再重新创建服务器）">
                <TouchableOpacity
                  onPress={createConnection}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createConnection</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="4.测试创建TLS服务器，无打印，需要与客户端一起使用">
                <TouchableOpacity
                  onPress={createTLSServer}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>createTLSServer</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="5.测试TLS客户端连接服务器，成功会打印‘TlsClient clientSocket connect success‘（需要先创建服务器）">
                <TouchableOpacity
                  onPress={connectTLS}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>connectTLS</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="6.测试isIP方法,判断输入字符串是否是IP，返回值：无效字符串返回`0`，IPV4地址返回`4`，IPV6地址返回`6`">
                <View>
                  <TextInput
                    placeholder="请输入地址"
                    style={styles.TextInput}
                    onChangeText={newValue => {
                      setIP(newValue);
                    }}
                    value={ip}></TextInput>

                  <Text>返回值：{TcpSocket.isIP(ip)}</Text>
                </View>
              </TestCase>
              <TestCase itShould="7.测试isIPv4方法,判断输入字符串是否是IPv4地址，返回值：是返回`true`,否返回`false`">
                <View>
                  <TextInput
                    placeholder="请输入地址"
                    style={styles.TextInput}
                    onChangeText={newValue => {
                      setIP2(newValue);
                    }}
                    value={ip2}></TextInput>
                  <Text>返回值：{TcpSocket.isIPv4(ip2) + ''}</Text>
                </View>
              </TestCase>
              <TestCase itShould="8.测试isIPv6方法,判断输入字符串是否是IPv6地址，返回值：是返回`true`,否返回`false`">
                <View>
                  <TextInput
                    placeholder="请输入地址"
                    style={styles.TextInput}
                    onChangeText={newValue => {
                      setIP3(newValue);
                    }}
                    value={ip3}></TextInput>
                  <Text>返回值：{TcpSocket.isIPv6(ip3) + ''}</Text>
                </View>
              </TestCase>
              <TestCase itShould="重置服务器和客户端">
                <TouchableOpacity
                  onPress={clearData}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>clearData</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
            <TestSuite name="测试Server对象属性">
              <TestCase itShould="9.测试Server.listen方法,成功会打印‘tcpServer start listen success on:’(先点击clearData清除已创建的服务器)">
                <TouchableOpacity
                  onPress={createTcpServer}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>listen</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase
                itShould="10.测试Server.address方法"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (server) {
                        setState(server.address()?.port);
                      } else {
                        sendMessage('TcpSocketDemo:tcpServer is null');
                      }
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>address</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).not.to.be.undefined;
                }}
              />
              <TestCase itShould="11.测试Server.close方法，关闭TCP服务器，成功会打印‘tcpServer closed’(测试前先点击9.创建TCP服务器)">
                <TouchableOpacity
                  onPress={() => {
                    if (server) {
                      server.close();
                    } else {
                      sendMessage('TcpSocketDemo:tcpServer is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>close</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="12.测试Server.getConnections方法，成功会打印‘tcpServer getConnections:1’，（测试前先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (server) {
                      server.getConnections((error: any, count: number) => {
                        sendMessage(
                          'TcpSocketDemo:tcpServer getConnections:' + count,
                        );
                      });
                    } else {
                      sendMessage('TcpSocketDemo:tcpServer is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>getConnections</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase
                itShould="13.测试Server.listening属性（测试前先点击1,2创建服务器和客户端）"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (server) {
                        setState(server.listening);
                      } else {
                        sendMessage('TcpSocketDemo:tcpServer is null');
                      }
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>listening</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
              <TestCase itShould="14.测试on('close')事件，成功会打印‘tcpServer closed’(测试前先点击9.创建TCP服务器)">
                <TouchableOpacity
                  onPress={() => {
                    if (server) {
                      server.close();
                    } else {
                      sendMessage('TcpSocketDemo:tcpServer is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('close')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="15.测试on('connection')事件，成功会打印‘tcpClient on connect:xxx’(测试前先点击9.创建TCP服务器)">
                <TouchableOpacity
                  onPress={createTcpClient}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('connection')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="16.测试on('error')事件，成功会打印‘tcpServer socket on close’(需要先点击1,2创建服务器和客户端)">
                <TouchableOpacity
                  onPress={createTcpClientError}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('error')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="17.测试on('listening')事件，成功会打印‘tcpServer start listen success on:’(需点击clearData清除已创建的服务器)">
                <TouchableOpacity
                  onPress={createTcpServer}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('listening')</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
            <TestSuite name="测试Socket对象属性">
              <TestCase itShould="18.测试Socket.connect方法，成功会打印‘tcpClient on connect:xxx’,（测试前需要先点击1.创建服务器）">
                <TouchableOpacity
                  onPress={createTcpClient}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>connect</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase
                itShould="19.测试Socket.address方法（测试前需要先点击1,2创建服务器和客户端）"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (client) {
                        setState(client.address()?.port);
                      } else {
                        sendMessage('TcpSocketDemo:tcpClient is null');
                      }
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>address</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).not.to.be.undefined;
                }}
              />
              <TestCase itShould="20.测试Socket.destroy方法，关闭TCP服务器，成功会打印‘tcpServer socket on close’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.destroy();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>destroy</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="21.测试Socket.end方法，成功会打印‘tcpServer socket on close’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={tcpLongData}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>end</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="22.测试Socket.setEncoding方法，成功会打印‘Hello, tcpClient!’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.setEncoding('UTF-8');
                      tcpSendData();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>setEncoding</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="23.测试Socket.setEncoding方法，成功会打印‘Hello, tcpClient!’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.setNoDelay(true);
                      tcpSendData();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>setNoDelay</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="24.测试Socket.setTimeout方法，点击3s后会打印‘Socket timed out!’(测试前需要先点击17,15创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.setTimeout(3000);
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>setTimeout</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="25.测试Socket.write方法，成功会打印‘Hello, tcpClient!’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpSendData();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>write</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="26.测试Socket.pause方法，成功会打印‘Now data will start flowing again.’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpPauseResume();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>pause</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="27.测试Socket.resume方法，成功会打印‘Now data will start flowing again.’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpPauseResume();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>resume</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="28.测试Socket.writableNeedDrain属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient writableNeedDrain:' +
                          client.writableNeedDrain,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>writableNeedDrain</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="29.测试Socket.bytesRead属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient bytesRead:' + client.bytesRead,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>bytesRead</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="30.测试Socket.bytesWritten属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient bytesWritten:' +
                          client.bytesWritten,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>bytesWritten</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="31.测试Socket.connecting属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient connecting:' +
                          client.connecting,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>connecting</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="32.测试Socket.destroyed属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient destroyed:' + client.destroyed,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>destroyed</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="33.测试Socket.localAddress属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient localAddress:' +
                          client.localAddress,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>localAddress</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="34.测试Socket.localPort属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient localPort:' + client.localPort,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>localPort</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="35.测试Socket.remoteAddress属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient remoteAddress:' +
                          client.remoteAddress,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>remoteAddress</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="36.测试Socket.remoteFamily属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient remoteFamily:' +
                          client.remoteFamily,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>remoteFamily</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="37.测试Socket.remotePort属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient remotePort:' +
                          client.remotePort,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>remotePort</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="38.测试Socket.pending属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient pending:' + client.pending,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>pending</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="39.测试Socket.timeout属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.setTimeout(3000);
                      sendMessage(
                        'TcpSocketDemo:tcpClient timeout:' + client.timeout,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>timeout</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="40.测试Socket.readyState属性">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      sendMessage(
                        'TcpSocketDemo:tcpClient readyState:' +
                          client.readyState,
                      );
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>readyState</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="41.测试on('pause')事件，成功会打印‘Now data will start flowing again.’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpPauseResume();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('pause')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="42.测试on('resume')事件，成功会打印‘Now data will start flowing again.’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpPauseResume();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('resume')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="43.测试on('close')事件，成功会打印‘tcpServer socket on close’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      client.destroy();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('close')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="44.测试on('connect')事件，成功会打印‘tcpClient on connect:xxx’(测试前需要先点击1,创建服务器）">
                <TouchableOpacity
                  onPress={createTcpClient}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('connect')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="45.测试on('data')事件，成功会打印‘Hello, tcpClient!’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpSendData();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('data')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="46.测试on('drain')事件，成功会打印‘Now data will start flowing again.’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      tcpPauseResume();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('drain')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="47.测试on('error')事件，成功会打印‘socket on close’(测试前需要先点击1,2创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      createTcpClientError();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('error')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="48.测试on('timeout')事件，点击3s后会打印‘Socket timed out!’(测试前需要先点击17,15创建服务器和客户端）">
                <TouchableOpacity
                  onPress={() => {
                    if (client) {
                      setSokcetTimeout();
                    } else {
                      sendMessage('TcpSocketDemo:tcpClient is null');
                    }
                  }}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('timeout')</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
            <TestSuite name="测试TLSServer对象属性">
              <TestCase itShould="49.测试TLSServer.setSecureContext方法，成功会打印’TlsServer on secureConnection:xx‘（49，50用例需要一起验证）">
                <TouchableOpacity
                  onPress={createTlsServer}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>setSecureContext</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="50.测试on('secureConnection')事件，成功会打印’TlsServer on secureConnection:xx‘（49，50用例需要一起验证）">
                <TouchableOpacity
                  onPress={createTlsClient}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('secureConnection')</Text>
                </TouchableOpacity>
              </TestCase>
              <TestCase itShould="重置服务器和客户端">
                <TouchableOpacity
                  onPress={clearData}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>clearData</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
            <TestSuite name="测试TLSSocket对象属性">
              <TestCase
                itShould="51.测试TLSSocket.getCertificate方法（测试前先点击4,5创建服务器和客户端）"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (tlsClient) {
                        const certificate =
                          tlsClient.getCertificate() as Promise<string>;
                        certificate.then(data => {
                          console.log(
                            'tcpSocketDemo:TlsClient getLocalCertificate:' +
                              JSON.stringify(data),
                          );
                          setState(data);
                        });
                      } else {
                        sendMessage('TcpSocketDemo:tlsClient is null');
                      }
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>getCertificate</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).not.to.be.null;
                }}
              />
              <TestCase
                itShould="52.测试TLSSocket.getPeerCertificate方法（连接的是远端服务器）"
                initialState={null as any}
                arrange={({setState}) => (
                  <TouchableOpacity
                    onPress={() => {
                      connectRemoteTLS();
                      setTimeout(() => {
                        const certificate =
                          tlsClient2.getPeerCertificate() as Promise<string>;
                        certificate.then(data => {
                          console.log(
                            'tcpSocketDemo:TlsClient getPeerCertificate:' +
                              JSON.stringify(data),
                          );
                          setState(data);
                        });
                      }, 3000);
                    }}
                    style={styles.moduleButton}>
                    <Text style={styles.buttonText}>getPeerCertificate</Text>
                  </TouchableOpacity>
                )}
                assert={({expect, state}) => {
                  expect(state).not.to.be.null;
                }}
              />
              <TestCase itShould="53.测试on('secureConnect')事件，成功会打印’TlsClient on secureConnect:xx‘,（测试前先点击49.创建服务器）">
                <TouchableOpacity
                  onPress={createTlsClient}
                  style={styles.moduleButton}>
                  <Text style={styles.buttonText}>on('secureConnect')</Text>
                </TouchableOpacity>
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
  },
});
