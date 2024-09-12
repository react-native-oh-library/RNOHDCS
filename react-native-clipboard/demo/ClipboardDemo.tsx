import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

// Small icon of a plus for demo purposes
const TEST_IMAGE_PNG =
  'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

//官方例子中png图转换后的jpg图
const TEST_IMAGE_JPG =
  '/9j/4AAQSkZJRgABAQEAYABgAAD/4QBQRXhpZgAATU0AKgAAAAgABAExAAIAAAAJAAAAPlEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAABwbmdjcnVzaAAA/9sAQwACAQECAQECAgICAgICAgMFAwMDAwMGBAQDBQcGBwcHBgcHCAkLCQgICggHBwoNCgoLDAwMDAcJDg8NDA4LDAwM/9sAQwECAgIDAwMGAwMGDAgHCAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAMwAzAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/fyiiigD5/8A+CsX/KLL9pb/ALJV4o/9NF1X5A/8GMf/ADdF/wByp/7mq/X7/grF/wAosv2lv+yVeKP/AE0XVfkD/wAGMf8AzdF/3Kn/ALmqAP3+ooooAKKKKAPn/wD4exfss/8ARy37P/8A4cPSP/kij/h7F+yz/wBHLfs//wDhw9I/+SK/IH/iBj/6ui/8xv8A/fSj/iBj/wCrov8AzG//AN9KAP0P/wCCmv8AwU2/Zt8e/wDBNv8AaD0LQv2g/gfrWt618NfEdhp+n2HjrS7m6v7iXS7lIoYoknLySO7KqooJYkAAk1+WH/Bmt+1j8LP2X/8Aho7/AIWZ8S/h/wDDv+3P+EZ/s3/hJ/ENppH9oeV/a/m+T9okTzNnmx7tudvmJnG4ZP2sf+DNb/hl/wDZY+JfxM/4aO/tz/hXfhXVPE/9m/8ACAfZf7Q+xWktz5Hm/wBpP5e/ytu/Y23dna2MH5A/4IY/8EMf+H0f/C0f+Lo/8K1/4Vr/AGT/AMy3/bH9o/bvtv8A09W/l+X9j/2t3mfw7eQD+n3/AIexfss/9HLfs/8A/hw9I/8Akij/AIexfss/9HLfs/8A/hw9I/8AkivyB/4gY/8Aq6L/AMxv/wDfSj/iBj/6ui/8xv8A/fSgD9fv+HsX7LP/AEct+z//AOHD0j/5Ior8gf8AiBj/AOrov/Mb/wD30ooA/f6iiigD5/8A+CsX/KLL9pb/ALJV4o/9NF1X5A/8GMf/ADdF/wByp/7mq/X7/grF/wAosv2lv+yVeKP/AE0XVfkD/wAGMf8AzdF/3Kn/ALmqAP3+ooooAKKKKACiiigD5/8A+CsX/KLL9pb/ALJV4o/9NF1X5A/8GMf/ADdF/wByp/7mqKKAP3+ooooAKKKKAP/Z';

const ClipboardTest = () => {
  const [copiedText, setCopiedText] = useState('');
  const [hasString, setHasString] = useState<boolean>(false);
  const [copiedStrings, setCopiedStrings] = useState("");
  const [hasNumber, setHasNumber] = useState<boolean | undefined>(false);
  const [hasURL, setHasURL] = useState<boolean | undefined>(false);
  const [hasWebURL, setHasWebURL] = useState<boolean | undefined>(false);
  const [hasImageVal, setHasImageVal] = useState<boolean | undefined>(false);
  const [jpgImage, setJpgImage] = useState('');
  const [pngImage, setPngImage] = useState('');

  const demoGetString = async () => {
    const flag = await Clipboard.getString();
    setCopiedText(flag);
  };

  const demoHasString = async () => {
    const flag = await Clipboard.hasString();
    setHasString(flag);
  };

  const demoSetStrings = async () => {
    Clipboard.setStrings(["ABC100", "ABC200", "ABC300"]);
  };

  const demoGetStrings = async () => {
    const array = await Clipboard.getStrings();
    setCopiedStrings(JSON.stringify(array));
  };

  const demoSetString = async (content: string) => {
    Clipboard.setString(content);
  };

  const demoHasURL = async () => {
    const flag = await Clipboard.hasURL();
    setHasURL(flag);
  };

  const demoHasWebURL = async () => {
    const flag = await Clipboard.hasWebURL();
    setHasWebURL(flag);
  };

  const demoHasNumber = async () => {
    const flag = await Clipboard.hasNumber();
    setHasNumber(flag)
  };

  const writeImageJPGToClipboard = async () => {
    Clipboard.setImage(TEST_IMAGE_JPG);
  };

  const getImageJPG = async () => {
    const hasImage = await Clipboard.hasImage();
    if (hasImage) {
      const image = await Clipboard.getImageJPG();
      setJpgImage(image);
    } else {
      setJpgImage('');
    }
  };

  const writeImagePNGToClipboard = async () => {
    Clipboard.setImage(TEST_IMAGE_PNG);
  };

  const getImagePNG = async () => {
    const hasImage = await Clipboard.hasImage();
    if (hasImage) {
      const image = await Clipboard.getImagePNG();
      setPngImage(image);
    } else {
      setPngImage('');
    }
  };

  const getHasImage = async () => {
    const hasImage = await Clipboard.hasImage();
    setHasImageVal(hasImage);
  };

  return (
    <View style={styles.sectionContainer}>
      <Button
        title="Click setString"
        onPress={() => { demoSetString('111') }}
      />
      <Button title="Click getString" onPress={demoGetString} />
      <Text>{`getString: ${copiedText}`}</Text>
      <Button title="Click get hasString" onPress={demoHasString} />
      <Text>{`hasString: ${hasString}`}</Text>
      <Button title="Click setStrings" onPress={demoSetStrings} />
      <Button title="Click getStrings" onPress={demoGetStrings} />
      <Text>{`GetStrings: ${copiedStrings}`}</Text>
      <Button title="Click get hasNumber" onPress={demoHasNumber} />
      <Text>{`hasNumber: ${hasNumber}`}</Text>
      <Button
        title="Click setURL"
        onPress={() => { demoSetString("dataability:///com.example.myapplication1/user.txt") }}
      />
      <Button title="Click get hasURL" onPress={demoHasURL} />
      <Text>{`hasURL: ${hasURL}`}</Text>
      <Button
        title="Click setWebUrl"
        onPress={() => { demoSetString("http://www.baidu.com") }}
      />
      <Button title="Click get hasURL" onPress={demoHasWebURL} />
      <Text>{`hasWebURL: ${hasWebURL}`}</Text>
      <Button title="writeImageJPG ToClipboard" onPress={writeImageJPGToClipboard} />
      <Button title="Click getImageJPG" onPress={getImageJPG} />
      <Text>{`getImageJPG: ${jpgImage}`}</Text>
      <Button title="writeImagePNG ToClipboard" onPress={writeImagePNGToClipboard} />
      <Button title="Click getImagePNG" onPress={getImagePNG} />
      <Text>{`getImagePNG: ${pngImage}`}</Text>
      <Button title="Click get hasImage" onPress={getHasImage} />
      <Text>{`hasImage: ${hasImageVal}`}</Text>
    </View>
  );
};
export default ClipboardTest;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  view: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    margin: 5,
  },
});