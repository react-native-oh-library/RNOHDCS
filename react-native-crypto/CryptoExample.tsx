import '../shim.js'
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import {
    Tester,
    TestSuite,
    TestCase
} from '@rnoh/testerino';
import { TextEncoder } from 'text-encoding';
import crypto from 'react-native-crypto';

const TestCrypto = () => {
    // Crypto.randomBytes State
    const [randomBytesResult, setRandomBytesResult] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [intValue, setIntValue] = useState(0);

    // Crypto.createHash State
    const [hashResult, setHashResult] = useState('');
    const [hashResult_2, setHashResult_2] = useState('');

    // Crypto.getHashes State
    const [hashSupported, setHashSupported] = useState('');

    // Crypto.createHmac State
    const [hmacResult, sethmacResult] = useState('');

    // Crypto.pbkdf2 State
    const [pbkdf2, setPbkdf2] = useState('');
    const [pbkdf2Sync, setPbkdf2Sync] = useState('');

    // Crypto.createCipher state
    const [encryptedData, setEncryptedData] = useState('');

    // Crypto.Cipher state
    const [encryptedData_2, setEncryptedData_2] = useState('');

    // Crypto.createDecipher state
    const [decryptedData, setDecryptedData] = useState('');

    // Crypto.Decipher state
    const [decryptedData_2, setDecryptedData_2] = useState('');

    // Crypto.Cipheriv state
    const [encryptedCipheriv_2, setEncryptedCipheriv_2] = useState('');

    // Crypto.createCipheriv state
    const [encryptedCipheriv, setEncryptedCipheriv] = useState('');

    // Crypto.Decipheriv state
    const [decrypteDecipheriv_2, setDecrypteDecipheriv_2] = useState('');

    // Crypto.createDecipheriv state
    const [decrypteDecipheriv, setDecrypteDecipheriv] = useState('');

    // Crypto.getCiphers state
    const [availableCiphers, setAvailableCiphers] = useState('');

    // Crypto.listCiphers state
    const [listCiphers, setListCiphers] = useState('');

    // Crypto.diffieHellman state
    const [privateKey, setPrivateKey] = useState('');
    const [publicKey, setPublicKey] = useState('');

    // Crypto.createECDH state
    const [createECDH_1, setCreateECDH_1] = useState('');
    const [createECDH_2, setCreateECDH_2] = useState('');

    // Crypto.publicEncrypt state
    const [publicCryptoed, setPublicCryptoed] = useState('');
    const [privateCryptoed, setPrivateCryptoed] = useState('');

    // Crypto.privateEncrypt state
    const [publicCryptoed_2, setPublicCryptoed_2] = useState('');
    const [privateCryptoed_2, setPrivateCryptoed_2] = useState('');

    // Crypto.randomFill state
    const [randomFill, setRandomFill] = useState('');
    const [randomFillSync, setRandomFillSync] = useState('');

    // Crypto.sign and verify 
    const [signature, setSignature] = useState('');
    const [verify, setVerify] = useState(false);

    // Crypto.sign and verify 
    const [createSignature, setCreateSignature] = useState('');
    const [createVerify, setCreateVerify] = useState(false);

    // Crypto.randomBytes Function
    function handleRandom(data: number) {
        if (!data) throw new Error('The input is can not be null!')
        crypto.randomBytes(data, (err: Error | null, bytes: Buffer) => {
            if (err) throw err;
            setRandomBytesResult(bytes.toJSON().data.join('-'));
        });
    }

    function handleInputChange(text: any) {
        const intValue = parseInt(text);
        if (!isNaN(text)) {
            setInputValue(text);
            setIntValue(intValue);
        } else {
            setInputValue('');
            setIntValue(0);
        }
    };

    function handleButtonPress() {
        handleRandom(intValue);
    };

    // Crypto.createHash Function
    function handleCreatHashSha() {
        const hash = crypto.createHash('sha');
        hash.update('some data');
        setHashResult('返回解码格式: hex\n' + hash.digest('hex'));
    }

    function handleCreatHashSha1() {
        const hash = crypto.createHash('sha1');
        hash.update('some data');
        setHashResult('返回解码格式: hex\n' + hash.digest('hex'));
    }

    function handleCreatHashSha224() {
        const hash = crypto.createHash('sha224');
        hash.update('some data');
        setHashResult('返回解码格式: hex\n' + hash.digest('hex'));
    }

    function handleCreatHashSha256() {
        const hash = crypto.createHash('sha256');
        hash.update('some data');
        setHashResult('返回解码格式: base64\n' + hash.digest('base64'));
    }

    function handleCreatHashSha384() {
        const hash = crypto.createHash('sha384');
        hash.update('some data');
        setHashResult('返回解码格式: base64\n' + hash.digest('base64'));
    }

    function handleCreatHashSha512() {
        const hash = crypto.createHash('sha512');
        hash.update('some data');
        setHashResult('返回解码格式: utf8\n' + hash.digest('utf8'));
    }

    function handleCreatHashRmd160() {
        const hash = crypto.createHash('rmd160');
        hash.update('some data');
        setHashResult('返回解码格式: utf8\n' + hash.digest('utf8'));
    }

    function handleCreatHashMd5() {
        const hash = crypto.createHash('md5');
        hash.update('some data');
        setHashResult(hash.digest());
    }

    function handleCreatHashRipemd160() {
        const hash = crypto.createHash('ripemd160');
        hash.update('some data');
        setHashResult(hash.digest());
    }

    // use write
    function writeCreatHashSha() {
        const hash = crypto.createHash('sha');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: hex\n' + hash.read().toString('hex'));
    }

    function writeCreatHashSha1() {
        const hash = crypto.createHash('sha1');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: hex\n' + hash.read().toString('hex'));
    }

    function writeCreatHashSha224() {
        const hash = crypto.createHash('sha224');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: hex\n' + hash.read().toString('hex'));
    }

    function writeCreatHashSha256() {
        const hash = crypto.createHash('sha256');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: base64\n' + hash.read().toString('base64'));
    }

    function writeCreatHashSha384() {
        const hash = crypto.createHash('sha384');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: base64\n' + hash.read().toString('base64'));
    }

    function writeCreatHashSha512() {
        const hash = crypto.createHash('sha512');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: utf8\n' + hash.read().toString('utf8'));
    }

    function writeCreatHashRmd160() {
        const hash = crypto.createHash('rmd160');
        hash.write('some data');
        hash.end();
        setHashResult_2('返回解码格式: utf8\n' + hash.read().toString('utf8'));
    }

    function writeCreatHashMd5() {
        const hash = crypto.createHash('md5');
        hash.write('some data');
        hash.end();
        setHashResult_2(hash.read());
    }

    function writeCreatHashRipemd160() {
        const hash = crypto.createHash('ripemd160');
        hash.write('some data');
        hash.end();
        setHashResult_2(hash.read());
    }

    // Crypto.getHashes Function
    function handleGetHashes() {
        const supportedHashes = crypto.getHashes().join(' / ');
        setHashSupported(supportedHashes)
    }

    // Crypto.createHmac Argument
    const key = 'mySecretKey';
    const keyBuffer = Buffer.from('mySecretKey');
    const data = 'Hello, world!';

    // Crypto.createHmac Function
    function handleCreateHmacSha() {
        const hmac = crypto.createHmac('sha', key);
        hmac.update(data);
        sethmacResult('返回解码格式: hex\n' + hmac.digest('hex'));
    }

    function handleCreateHmacSha1() {
        const hmac = crypto.createHmac('sha1', key);
        hmac.update(data);
        sethmacResult('返回解码格式: hex\n' + hmac.digest('hex'));
    }

    function handleCreateHmacSha224() {
        const hmac = crypto.createHmac('sha224', keyBuffer);
        hmac.update(data);
        sethmacResult('返回解码格式: binary\n' + hmac.digest('binary'));
    }

    function handleCreateHmacSha256() {
        const hmac = crypto.createHmac('sha256', keyBuffer);
        hmac.update(data);
        sethmacResult('返回解码格式: binary\n' + hmac.digest('binary'));
    }

    function handleCreateHmacSha384() {
        const hmac = crypto.createHmac('sha384', key);
        hmac.update(data);
        sethmacResult('返回解码格式: base64\n' + hmac.digest('base64'));
    }

    function handleCreateHmacSha512() {
        const hmac = crypto.createHmac('sha512', key);
        hmac.update(data);
        sethmacResult('返回解码格式: base64\n' + hmac.digest('base64'));
    }

    function handleCreateHmacRmd160() {
        const hmac = crypto.createHmac('rmd160', key);
        hmac.update(data);
        sethmacResult('返回解码格式: utf8\n' + hmac.digest('utf8'));
    }

    function handleCreateHmacMd5() {
        const hmac = crypto.createHmac('md5', key);
        hmac.update(data);
        sethmacResult('返回解码格式: utf8\n' + hmac.digest('utf8'));
    }

    function handleCreateHmacRipemd160() {
        const hmac = crypto.createHmac('ripemd160', key);
        hmac.update(data);
        sethmacResult(hmac.digest());
    }

    // Crypto.pbkdf2 Argument
    const password = 'password';
    const salt = 'salt';
    const iterations = 10;
    const keylen = 64;
    const digest = 'sha512';

    // Crypo.pbkdf2 Buffer
    const passwordBuffer = Buffer.from('password');
    const saltBuffer = Buffer.from('salt');

    // Crypo.pbkdf2 Int8Array
    const passwordArray = stringToUint8Array(password);
    const saltArray = stringToUint8Array(salt);

    // Crypto.pbkdf2 Utils
    function stringToUint8Array(str: any) {
        // 将字符串转换为Uint8Array
        let encoder = new TextEncoder();
        let uint8Array = encoder.encode(str);

        // 将Uint8Array转换为Int8Array
        let int8Array = new Int8Array(uint8Array);

        return int8Array;
    }

    // Crypo.pbkdf2 DataView
    const encoder = new TextEncoder();

    const _passwordArray = encoder.encode('password');
    const _saltArray = encoder.encode('salt');

    const _passwordBuffer = _passwordArray.buffer;
    const _saltBuffer = _saltArray.buffer;

    const passwordView = new DataView(_passwordBuffer);
    const saltView = new DataView(_saltBuffer);

    // Crypto.pbkdf2 Function
    function handlePbkdf2() {
        crypto.pbkdf2(password, salt, iterations, keylen, digest, (err: Error, derivedKey: Buffer) => {
            if (err) throw err;
            setPbkdf2(derivedKey.toString('hex'));
        });
    }

    function handlePbkdf2Buffer() {
        crypto.pbkdf2(passwordBuffer, saltBuffer, iterations, keylen, digest, (err: Error, derivedKey: Buffer) => {
            if (err) throw err;
            setPbkdf2(derivedKey.toString('base64'));
        });
    }

    function handlePbkdf2Array() {
        crypto.pbkdf2(passwordArray, saltArray, iterations, keylen, digest, (err: Error, derivedKey: Buffer) => {
            if (err) throw err;
            setPbkdf2(derivedKey.toString('utf8'));
        });
    }

    function handlePbkdf2DataView() {
        crypto.pbkdf2(passwordView, saltView, iterations, keylen, digest, (err: Error, derivedKey: Buffer) => {
            if (err) throw err;
            setPbkdf2(derivedKey.toString('binary'));
        });
    }

    function handlePbkdf2Sync() {
        const derivedKeySync = crypto.pbkdf2Sync('password', 'salt', 10, 32, 'sha');
        setPbkdf2Sync(derivedKeySync.toString('hex'));
    }

    function handlePbkdf2SyncBuffer() {
        const derivedKeySync = crypto.pbkdf2Sync(passwordBuffer, saltBuffer, 10, 32, 'sha1');
        setPbkdf2Sync(derivedKeySync.toString('hex'));
    }

    function handlePbkdf2SyncArray() {
        const derivedKeySync = crypto.pbkdf2Sync(passwordArray, saltArray, 15, 64, 'sha256');
        setPbkdf2Sync(derivedKeySync.toString('hex'));
    }

    function handlePbkdf2SyncDataView() {
        const derivedKeySync = crypto.pbkdf2Sync(passwordView, saltView, 15, 64, 'sha512');
        setPbkdf2Sync(derivedKeySync.toString('hex'));
    }

    // Crypto.createCipher 
    function handleCreateCipher() {
        const cipher = crypto.Cipher('aes-256-ctr', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data aes-256-ctr', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData_2(encrypted);
    }

    // Crypto.createDecipher
    function handleCreateDecipher() {
        const decipher = crypto.Decipher('aes-256-ctr', 'a password');
        let decrypted = decipher.update(encryptedData_2, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData_2(decrypted);
    }

    // Crypto.createCipher 
    function handleCreateCipher_2() {
        const cipher = crypto.createCipher('aes-128-ecb', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data aes-128-ecb', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData_2(encrypted);
    }

    // Crypto.createDecipher
    function handleCreateDecipher_2() {
        const decipher = crypto.createDecipher('aes-128-ecb', 'a password');
        let decrypted = decipher.update(encryptedData_2, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData_2(decrypted);
    }

    // Crypto.createCipher 
    function handleCreateCipher_3() {
        const cipher = crypto.createCipher('des-ecb', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data des-ecb', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData_2(encrypted);
    }

    // Crypto.createDecipher
    function handleCreateDecipher_3() {
        const decipher = crypto.createDecipher('des-ecb', 'a password');
        let decrypted = decipher.update(encryptedData_2, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData_2(decrypted);
    }

    // Crypto.Cipher 
    function handleCipher() {
        const cipher = crypto.Cipher('aes-256-ctr', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data aes-256-ctr', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData(encrypted);
    }

    // Crypto.Decipher
    function handleDecipher() {
        const decipher = crypto.Decipher('aes-256-ctr', 'a password');
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData(decrypted);
    }

    // Crypto.Cipher 
    function handleCipher_2() {
        const cipher = crypto.Cipher('aes-128-ecb', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data aes-128-ecb', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData(encrypted);
    }

    // Crypto.Decipher
    function handleDecipher_2() {
        const decipher = crypto.Decipher('aes-128-ecb', 'a password');
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData(decrypted);
    }

    // Crypto.Cipher 
    function handleCipher_3() {
        const cipher = crypto.Cipher('des-ecb', 'a password');
        cipher.setAutoPadding(true);
        let encrypted = cipher.update('hello, this is data des-ecb', 'utf8', 'hex');
        encrypted += cipher.final('hex');
        setEncryptedData(encrypted);
    }

    // Crypto.Decipher
    function handleDecipher_3() {
        const decipher = crypto.Decipher('des-ecb', 'a password');
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        setDecryptedData(decrypted);
    }

    // createCipheriv And createDecipheriv Arguments
    const keyCipheriv_1 = Buffer.alloc(32);
    const iv_1 = Buffer.alloc(16);

    const keyCipheriv_2 = Buffer.from('0123456789abcdef');
    const iv_2 = Buffer.alloc(0);

    const keyCipheriv_3 = Buffer.alloc(8);

    // Crypto.Cipheriv 
    function handleCipheriv() {
        const cipheriv = crypto.Cipheriv('aes-256-cbc', keyCipheriv_1, iv_1);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! aes-256-cbc', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv(encryptedCipheriv);
    }

    // Crypto.Decipheriv
    function handleDecipheriv() {
        const decipheriv = crypto.Decipheriv('aes-256-cbc', keyCipheriv_1, iv_1);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv(decrypteDecipheriv);
    }

    // Crypto.Cipheriv 
    function handleCipheriv_2() {
        const cipheriv = crypto.Cipheriv('aes-128-ecb', keyCipheriv_2, iv_2);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! aes-128-ecb', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv(encryptedCipheriv);
    }

    // Crypto.Decipheriv
    function handleDecipheriv_2() {
        const decipheriv = crypto.Decipheriv('aes-128-ecb', keyCipheriv_2, iv_2);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv(decrypteDecipheriv);
    }

    // Crypto.Cipheriv 
    function handleCipheriv_3() {
        const cipheriv = crypto.Cipheriv('des-ecb', keyCipheriv_3, iv_2);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! des-ecb', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv(encryptedCipheriv);
    }

    // Crypto.Decipheriv
    function handleDecipheriv_3() {
        const decipheriv = crypto.Decipheriv('des-ecb', keyCipheriv_3, iv_2);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv(decrypteDecipheriv);
    }

    // Crypto.createCipheriv 
    function handleCreateCipheriv() {
        const cipheriv = crypto.createCipheriv('aes-256-cbc', keyCipheriv_1, iv_1);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! aes-256-cbc', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv_2(encryptedCipheriv);
    }

    // Crypto.createDecipheriv
    function handleCreateDecipheriv() {
        const decipheriv = crypto.createDecipheriv('aes-256-cbc', keyCipheriv_1, iv_1);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv_2, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv_2(decrypteDecipheriv);
    }

    // Crypto.createCipheriv 
    function handleCreateCipheriv_2() {
        const cipheriv = crypto.createCipheriv('aes-128-ecb', keyCipheriv_2, iv_2);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! aes-128-ecb', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv_2(encryptedCipheriv);
    }

    // Crypto.createDecipheriv
    function handleCreateDecipheriv_2() {
        const decipheriv = crypto.createDecipheriv('aes-128-ecb', keyCipheriv_2, iv_2);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv_2, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv_2(decrypteDecipheriv);
    }

    // Crypto.createCipheriv 
    function handleCreateCipheriv_3() {
        const cipheriv = crypto.createCipheriv('des-ecb', keyCipheriv_3, iv_2);

        cipheriv.setAutoPadding(true);
        let encryptedCipheriv = cipheriv.update('Hello, world! des-ecb', 'utf8', 'hex');
        encryptedCipheriv += cipheriv.final('hex');
        setEncryptedCipheriv_2(encryptedCipheriv);
    }

    // Crypto.createDecipheriv
    function handleCreateDecipheriv_3() {
        const decipheriv = crypto.createDecipheriv('des-ecb', keyCipheriv_3, iv_2);

        let decrypteDecipheriv = decipheriv.update(encryptedCipheriv_2, 'hex', 'utf8');
        decrypteDecipheriv += decipheriv.final('utf8');
        setDecrypteDecipheriv_2(decrypteDecipheriv);
    }

    // Crypto.getCiphers example
    function handleGetCiphers() {
        const availableCiphers = crypto.getCiphers();
        setAvailableCiphers(availableCiphers.join(' ; '));
    }


    // Crypto.listCiphers example
    function handleListCiphers() {
        const cipherDetails = crypto.listCiphers();
        setListCiphers(cipherDetails.join(' ; '));
    }

    // Crypto.diffieHellman
    function clear() {
        setPrivateKey(' ');
        setPublicKey(' ');
    };

    function handleGenerateKeys_1() {
        try {
            // 获取modp14组的默认Diffie-Hellman实例
            const dh = crypto.getDiffieHellman('modp14');

            // 生成密钥对
            const publicKey = dh.generateKeys('hex');

            // 获取生成的私钥
            const privateKey = dh.getPrivateKey('hex');

            setPublicKey(publicKey);
            setPrivateKey(privateKey);
        } catch (error) {
            throw new Error('Error generating keys:' + error);
        }
    };

    function handleGenerateKeys_2() {
        try {
            // 创建一个自定义参数的Diffie-Hellman实例
            const prime = 'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E08'
                + '8A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD'
                + '3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E'
                + '7EC6F44C42E9A63A3620FFFFFFFFFFFFFFFF';
            const dh = new crypto.DiffieHellman(prime, 'hex');

            // 生成密钥对
            const publicKey = dh.generateKeys('hex');

            // 获取生成的私钥
            const privateKey = dh.getPrivateKey('hex');

            setPublicKey(publicKey);
            setPrivateKey(privateKey);
        } catch (error) {
            throw new Error('Error generating keys:' + error);
        }
    };

    function handleGenerateKeys_3() {
        try {
            const dh = crypto.createDiffieHellman(128);

            // 生成密钥对
            const publicKey = dh.generateKeys('hex');

            // 获取生成的私钥
            const privateKey = dh.getPrivateKey('hex');

            setPublicKey(publicKey);
            setPrivateKey(privateKey);
        } catch (error) {
            throw new Error('Error generating keys:' + error);
        }
    };

    function handleGenerateKeys_4() {
        try {
            // 使用modp14组创建DiffieHellmanGroup实例
            const dhGroup = new crypto.DiffieHellmanGroup('modp14');

            // 生成密钥对
            const publicKey = dhGroup.generateKeys('hex');

            // 获取生成的私钥
            const privateKey = dhGroup.getPrivateKey('hex');

            setPublicKey(publicKey);
            setPrivateKey(privateKey);
        } catch (error) {
            throw new Error('Error generating keys:' + error);
        }
    };

    function handleGenerateKeys_5() {
        try {
            // 创建一个modp14组的Diffie-Hellman实例
            const dhGroup = crypto.createDiffieHellmanGroup('modp14');

            // 生成密钥对
            const publicKey = dhGroup.generateKeys('hex');

            // 获取生成的私钥
            const privateKey = dhGroup.getPrivateKey('hex');

            setPublicKey(publicKey);
            setPrivateKey(privateKey);
        } catch (error) {
            throw new Error('Error generating keys:' + error);
        }
    };

    // Crypto.createECDH
    function handleCreateECDH() {
        // 生成 ECDH 实例
        const testA = crypto.createECDH('secp256k1');
        const testB = crypto.createECDH('secp256k1');

        // 生成密钥对
        const aKey = testA.generateKeys();
        const bKey = testB.generateKeys();

        // 交换公钥
        const aShared = testA.computeSecret(bKey);
        const bShared = testB.computeSecret(aKey);

        setCreateECDH_1(aShared.toString('hex'));
        setCreateECDH_2(bShared.toString('hex'));
    }

    // publicEncrypt Arguments
    const private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
        'MIIEpAIBAAKCAQEAwWP6TDDQNMZC4U5rMDou2LKQMfnF56YtOiCteheKHv/evDqp\n' +
        'WFOcmLdGnqqmBK70FrJ5LMmT02cFubCODhIAZ/48yBcbpxY9QM1j/yaHL/vEdfDY\n' +
        'dcUYW3dbS/ESaBcVlBmbbWt+zgV4+Zq4nj9zEULtWmmjS7SKzVkwHdg+PN0AVqR0\n' +
        'qn0CtXtYdZluhw9um5ujelunTqQclaV/1Ld64oA4lubp/HhQVC9FsfmCN6LITMw/\n' +
        'OyR9n/kmSVxA7xynvi1j5GbqkOseOXlCi/Vmvel3eBTdrmItcczv9fWgtnAEksZG\n' +
        'clqAPB2J3qUaK3IbhPYdyfdQQTkchMgO2iV3mQIDAQABAoIBAHSUY2eYqXqW5exS\n' +
        'TJV3DZR+GCS4UFAzweHfnxQRqqbDUi8gIcPoK2d4XG77qjb6jJQ+JIQWRDHVUgM9\n' +
        'ZnUe7vXBsjxgib/wzR4KcrR2Mlp/qE/8z1A3b1Z8HiIqghETkWOFCEgu2/MwI1w8\n' +
        'o/xpfWEzekfdlJ3niSD/Gd1z5RjkiKUyAPPC/B+5XFQzN1tPKCWAtECYlMHYsMSX\n' +
        'yno4pIoSJm9csPapDE8w6WRMGmz5TjBHXpmNjxKylDQC3d8yPYIra8bYYZEQDVEq\n' +
        'RQBAl3cgzrH0ZlHTozrW4NNQ0MBt1ZnTm5+ALx0jyAu/GksMrAZ2SIvEtpOmjFa4\n' +
        'rJTN0d0CgYEA4wvl5EbQs2BoXQRRwIsr02HoU8U/2dtj6XQIjRdadTSzMRzpFmVf\n' +
        'Fm2slx+ceJrHuifjR4G8pb4SDFXYl/FCbVGpLxxhrAeSPH/814OoQtn2CqazBB8o\n' +
        '79rYRlgFxxYI14f/xvt9/FAQJ+g4Q9w0dzwDv4XaqOWWSu09E3ycCOcCgYEA2g1b\n' +
        'PwXxN67Fksn/r0oarP7RodnKzUxjXKpXUKv20sS6ifOmb9zi+HB1eODTLHr5Zj9C\n' +
        'kMd1nYyNXm02UTVfB0njdDymidRkmfIYxrF1+L4qPvEnAsoUmmJ80Cu+nZvFycrO\n' +
        'B/SZEaQetxDSue0++4q8HL3IXIav+rlyCffH638CgYAtNsJaOkv3XLyLwX9yQ4S/\n' +
        'vKCihgZYIRt9cxD83+iwrIT+w84bGqbb9Y1ILxBe6BvcE3NsWwaxTu+TK0lNwMrE\n' +
        'sF1rt1AwDPXvPGGinWJVpcgciOPfb0Ecus0U/RRxeA7ctQWXn5+QLnV5LQJ/aQu9\n' +
        'ruLkMgjAV7AdTa87ATalgwKBgQCGjcFlpYwROUbv6rhdeZP2dpPzlQqhHucdknuo\n' +
        '60S3EPCvGev1kU950SOcQNfu1b+6iYTRBFQesVG3GBtxh0apn728x4RY/vhJSuxh\n' +
        'B7btlKNLDdJt1TdbgTTV3HiWlz445G242QXvrd/KRZZTZwP7gsPL1IykE/TZ+b9W\n' +
        'SVFTjwKBgQCXIrsN8ET3J2vjlyTdNAayU7j5lLoEXhWtPdyshLQd+WMZ8Oh4hcFx\n' +
        'fOrNzC5vZUJHb6Etc8SflSLywEmuAo+S88Q46GVvChYmFFsb2qTFl6fUlh39LtE9\n' +
        'o+ETKHRReEPaAr4YqewNCPqNogfUMTn8U8IFFYQ3L5rZQs3HOkibyg==\n' +
        '-----END RSA PRIVATE KEY-----\n';

    const public_key = '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWP6TDDQNMZC4U5rMDou\n' +
        '2LKQMfnF56YtOiCteheKHv/evDqpWFOcmLdGnqqmBK70FrJ5LMmT02cFubCODhIA\n' +
        'Z/48yBcbpxY9QM1j/yaHL/vEdfDYdcUYW3dbS/ESaBcVlBmbbWt+zgV4+Zq4nj9z\n' +
        'EULtWmmjS7SKzVkwHdg+PN0AVqR0qn0CtXtYdZluhw9um5ujelunTqQclaV/1Ld6\n' +
        '4oA4lubp/HhQVC9FsfmCN6LITMw/OyR9n/kmSVxA7xynvi1j5GbqkOseOXlCi/Vm\n' +
        'vel3eBTdrmItcczv9fWgtnAEksZGclqAPB2J3qUaK3IbhPYdyfdQQTkchMgO2iV3\n' +
        'mQIDAQAB\n' +
        '-----END PUBLIC KEY-----'

    // Crypto.publicEncrypt Function
    function handlePublicEncrypt() {
        const str = 'hello,world! PublicEncrypt';
        const cryptoed = crypto.publicEncrypt(public_key, Buffer.from(str));

        setPublicCryptoed(cryptoed);
    };

    function handlePrivateDecrypt() {
        const decryptoed = crypto.privateDecrypt(private_key, publicCryptoed);
        setPrivateCryptoed(decryptoed.toString('utf8'));
    };

    function handlePrivateEncrypt() {
        const str = 'hello,world! PrivateEncrypt';
        const cryptoed = crypto.privateEncrypt(private_key, Buffer.from(str));

        setPrivateCryptoed_2(cryptoed);
    };

    function handlePublicDecrypt() {
        const decryptoed = crypto.publicDecrypt(public_key, privateCryptoed_2);
        setPublicCryptoed_2(decryptoed.toString('utf8'));
    };

    // Crypto.randomfill
    function handleRandomFill() {
        // randomFill example
        const buffer = Buffer.alloc(16);
        crypto.randomFill(buffer, (err: Error | null, buf: Buffer) => {
            if (err) throw err
            setRandomFill(buf.toString('hex'));
        });
    }

    function handleRandomFillSync() {
        // randomFillSync example
        const bufferSync = Buffer.alloc(16);
        try {
            crypto.randomFillSync(bufferSync);
            setRandomFillSync(bufferSync.toString('hex'));
        } catch (err) {
            throw new Error('Error filling buffer:' + err);
        }
    }

    const private_Key = '-----BEGIN EC PRIVATE KEY-----\n' +
        'MHcCAQEEIP1NW/jAxtJ/uIPmntGZzjPiQdpKgI/HkN6NzqBYdGiloAoGCCqGSM49\n' +
        'AwEHoUQDQgAE/+jQoPrSP6dfYzr6EFxN+fMZerdsTBax5nxF7TvNLZrKavU1noaC\n' +
        'j8p98LkhfPreSGtUpjR4/4554krEepjLZw==\n' +
        '-----END EC PRIVATE KEY-----'

    const public_Key = '-----BEGIN PUBLIC KEY-----\n' +
        'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/+jQoPrSP6dfYzr6EFxN+fMZerds\n' +
        'TBax5nxF7TvNLZrKavU1noaCj8p98LkhfPreSGtUpjR4/4554krEepjLZw==\n' +
        '-----END PUBLIC KEY-----'

    function handleCreateSign() {
        // 要签名的消息
        const message = 'Hello, this is a test message!';

        // 创建签名
        const signer = crypto.createSign('sha256'); // 确保使用正确的算法
        signer.update(message);
        signer.end();
        const signature = signer.sign(private_Key, 'hex');

        setCreateSignature(signature)
        console.log('Signature:', signature);

        // 验证签名
        const verifier = crypto.createVerify('sha256'); // 确保使用相同的算法
        verifier.update(message);
        verifier.end();
        const isVerified = verifier.verify(public_Key, signature, 'hex');

        setCreateVerify(isVerified.toString())
        console.log('Signature verified:', isVerified);
    }

    function handleSign() {
        // 要签名的消息
        const message = 'Hello, this is a test message!';

        // 创建签名
        const signer = crypto.Sign('sha256'); // 确保使用正确的算法
        signer.update(message);
        signer.end();
        const signature = signer.sign(private_Key, 'hex');

        setSignature(signature)
        console.log('Signature:', signature);

        // 验证签名
        const verifier = crypto.Verify('sha256'); // 确保使用相同的算法
        verifier.update(message);
        verifier.end();
        const isVerified = verifier.verify(public_Key, signature, 'hex');

        setVerify(isVerified.toString())
        console.log('Signature verified:', isVerified);
    }

    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <TestSuite name="Crypto.createHash">
                    <TestCase itShould="Use update() to add data" >
                        <View style={styles.buttonContainer}>
                            <Button title="sha" onPress={handleCreatHashSha} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha1" onPress={handleCreatHashSha1} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha224" onPress={handleCreatHashSha224} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha256" onPress={handleCreatHashSha256} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha384" onPress={handleCreatHashSha384} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha512" onPress={handleCreatHashSha512} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="rmd160" onPress={handleCreatHashRmd160} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="md5" onPress={handleCreatHashMd5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="ripemd160" onPress={handleCreatHashRipemd160} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{hashResult}</Text>
                    </TestCase>

                    <TestCase itShould="Use write() to add data" >
                        <View style={styles.buttonContainer}>
                            <Button title="sha" onPress={writeCreatHashSha} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha1" onPress={writeCreatHashSha1} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha224" onPress={writeCreatHashSha224} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha256" onPress={writeCreatHashSha256} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha384" onPress={writeCreatHashSha384} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha512" onPress={writeCreatHashSha512} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="rmd160" onPress={writeCreatHashRmd160} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="md5" onPress={writeCreatHashMd5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="ripemd160" onPress={writeCreatHashRipemd160} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{hashResult_2}</Text>
                    </TestCase>
                </TestSuite >

                <TestSuite name="Crypto.randomBytes">
                    <TestCase itShould="输入期望的 length" >
                        <View style={styles.buttonContainer}>
                            <Button
                                title="提交"
                                onPress={handleButtonPress}
                            />
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, marginTop: 5 }}
                                placeholder="输入数字"
                                onChangeText={handleInputChange}
                                value={inputValue}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.result}>{randomBytesResult}</Text>
                    </TestCase>
                </TestSuite >

                <TestSuite name="Crypto.getHashes">
                    <TestCase itShould="支持的 hash 算法" >
                        <View style={styles.buttonContainer}>
                            <Button title="获取" onPress={handleGetHashes} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{hashSupported}</Text>
                    </TestCase>
                </TestSuite >

                <TestSuite name="Crypto.createHmac">
                    <TestCase itShould="HMAC" >
                        <View style={styles.buttonContainer}>
                            <Button title="sha" onPress={handleCreateHmacSha} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha1" onPress={handleCreateHmacSha1} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha224" onPress={handleCreateHmacSha224} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha256" onPress={handleCreateHmacSha256} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha384" onPress={handleCreateHmacSha384} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="sha512" onPress={handleCreateHmacSha512} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="rmd160" onPress={handleCreateHmacRmd160} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="md5" onPress={handleCreateHmacMd5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="ripemd160" onPress={handleCreateHmacRipemd160} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{hmacResult}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.pbkdf2">
                    <TestCase itShould="异步" >
                        <View style={styles.buttonContainer}>
                            <Button title="string" onPress={handlePbkdf2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="buffer" onPress={handlePbkdf2Buffer} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="array" onPress={handlePbkdf2Array} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="dataView" onPress={handlePbkdf2DataView} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{pbkdf2}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.pbkdf2Sync">
                    <TestCase itShould="同步" >
                        <View style={styles.buttonContainer}>
                            <Button title="string" onPress={handlePbkdf2Sync} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="buffer" onPress={handlePbkdf2SyncBuffer} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="array" onPress={handlePbkdf2SyncArray} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="dataView" onPress={handlePbkdf2SyncDataView} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>{pbkdf2Sync}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.Cipher and Crypto.Decipher">
                    <TestCase itShould="加密，解密" >
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-256-cbc</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCipher} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleDecipher} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-128-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCipher_2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleDecipher_2} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv des-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCipher_3} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleDecipher_3} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>Encrypted: {encryptedData}</Text>
                        <Text style={styles.result}>Decrypted: {decryptedData}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.createCipher Crypto.createDecipher">
                    <TestCase itShould="加密，解密" >
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-256-cbc</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCreateCipher} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleCreateDecipher} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-128-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCreateCipher_2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleCreateDecipher_2} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv des-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipher" onPress={handleCreateCipher_3} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipher" onPress={handleCreateDecipher_3} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>Encrypted: {encryptedData_2}</Text>
                        <Text style={styles.result}>Decrypted: {decryptedData_2}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.Cipheriv and Crypto.Decipheriv">
                    <TestCase itShould="加密，解密" >
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-256-cbc</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCipheriv} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleDecipheriv} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-128-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCipheriv_2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleDecipheriv_2} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv des-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCipheriv_3} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleDecipheriv_3} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>Encrypted: {encryptedCipheriv}</Text>
                        <Text style={styles.result}>Decrypted: {decrypteDecipheriv}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.createCipheriv Crypto.createDecipheriv">
                    <TestCase itShould="加密，解密" >
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-256-cbc</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCreateCipheriv} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleCreateDecipheriv} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv aes-128-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCreateCipheriv_2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleCreateDecipheriv_2} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>cipheriv des-ecb</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Cipheriv" onPress={handleCreateCipheriv_3} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Decipheriv" onPress={handleCreateDecipheriv_3} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>Encrypted: {encryptedCipheriv_2}</Text>
                        <Text style={styles.result}>Decrypted: {decrypteDecipheriv_2}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.listCiphers">
                    <TestCase itShould="支持算法">
                        <View style={styles.buttonContainer}>
                            <Button title="ListCiphers" onPress={handleListCiphers} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>listCiphers: {listCiphers}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.getCiphers">
                    <TestCase itShould="支持算法">
                        <View style={styles.buttonContainer}>
                            <Button title="GetCiphers" onPress={handleGetCiphers} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>getCiphers: {availableCiphers}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.diffieHellman">
                    <TestCase itShould="DiffieHellman">
                        <Text style={styles.subtitle}>PrivateKey:</Text>
                        <View style={styles.box}>
                            <ScrollView contentContainerStyle={styles.scrollView}>
                                <Text style={styles.result}>{privateKey}</Text>
                            </ScrollView>
                        </View>

                        <Text style={styles.subtitle}>PublicKey:</Text>
                        <View style={styles.box}>
                            <ScrollView contentContainerStyle={styles.scrollView}>
                                <Text style={styles.result}>{publicKey}</Text>
                            </ScrollView>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button title="Clear" onPress={clear} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="getDiffieHellman" onPress={handleGenerateKeys_1} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="DiffieHellman" onPress={handleGenerateKeys_2} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="createDiffieHellman" onPress={handleGenerateKeys_3} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="DiffieHellmanGroup" onPress={handleGenerateKeys_4} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="createDiffieHellmanGroup" onPress={handleGenerateKeys_5} />
                        </View>
                    </TestCase>
                </TestSuite>


                <TestSuite name="Crypto.createECDH">
                    <TestCase itShould="密钥交换">
                        <View style={styles.buttonContainer}>
                            <Button title="GetCiphers" onPress={handleCreateECDH} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>createECDH A: {createECDH_1}</Text>
                        <Text style={styles.result}>createECDH B: {createECDH_2}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.publicEncrypt Crypto.privateDecrypt">
                    <TestCase itShould="公钥加密，私钥解密">
                        <View style={styles.buttonContainer}>
                            <Button title="PublicEncrypt" onPress={handlePublicEncrypt} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="PrivateDecrypt" onPress={handlePrivateDecrypt} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>PublicEncrypt: {publicCryptoed}</Text>
                        <Text style={styles.result}>PrivateDecrypt: {privateCryptoed}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.privateEncrypt Crypto.publicDecrypt">
                    <TestCase itShould="私钥加密，公钥解密">
                        <View style={styles.buttonContainer}>
                            <Button title="PrivateEncrypt" onPress={handlePrivateEncrypt} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="PublicDecrypt" onPress={handlePublicDecrypt} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>PrivateEncrypt: {privateCryptoed_2}</Text>
                        <Text style={styles.result}>PublicDecrypt: {publicCryptoed_2}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.randomFill">
                    <TestCase itShould="异步">
                        <View style={styles.buttonContainer}>
                            <Button title="randomFill" onPress={handleRandomFill} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>randomFill: {randomFill}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.randomFillSync">
                    <TestCase itShould="同步">
                        <View style={styles.buttonContainer}>
                            <Button title="randomFill" onPress={handleRandomFillSync} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>randomFillSync: {randomFillSync}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.Sign and Crypto.Verify">
                    <TestCase itShould="签名，认证">
                        <View style={styles.buttonContainer}>
                            <Button title="Sign and Verify" onPress={handleSign} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>signature: {signature}</Text>
                        <Text style={styles.result}>verified: {verify}</Text>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Crypto.createSign Crypto.createVerify">
                    <TestCase itShould="签名，认证:">
                        <View style={styles.buttonContainer}>
                            <Button title="Sign and Verify" onPress={handleCreateSign} />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.result}>signature: {createSignature}</Text>
                        <Text style={styles.result}>verified: {createVerify}</Text>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        color: 'white',
    },
    buttonContainer: {
        marginVertical: 5,
    },
    result: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: 6,
        marginBottom: 12
    },
    line: {
        height: 1,
        backgroundColor: '#000000',
        width: '100%',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
        marginTop: 5
    },
    box: {
        height: 150,
        backgroundColor: 'white',
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
});

export default TestCrypto;