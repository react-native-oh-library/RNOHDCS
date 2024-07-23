import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Linking,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import Autolink from "react-native-autolink";
import { Tester, TestCase } from "@rnoh/testerino";
import { Match } from "autolinker/dist/es2015";

const AutoLinkExample = () => {
  const [result, setResult] = useState<string>("");
  const linkProps = {
    onPress: () => {
      Linking.openURL("https://www.baidu.com/");
      setResult("success");
    },
  };
  const onPress = (url: any, match: any) => {
    switch (match.getType()) {
      case "mention":
        setResult("Mention pressed!");
        Linking.openURL(url);
        break;
      default:
        Linking.openURL("https://www.baidu.com");
        setResult("Link pressed!");
    }
  };
  const onLongPress = (url: any, match: any) => {
    switch (match.getType()) {
      case "mention":
        setResult("Mention pressed!");
        Linking.openURL(url);
        break;
      default:
        Linking.openURL("https://www.baidu.com");
        setResult("Link pressed!");
    }
  };
  const renderLink = (text: string, match: Match, index: number) => {
    return (
      <>
        <Text key={index} style={styles.link}>
          {text}
        </Text>
      </>
    );
  };
  const renderText = (text: string) => {
    return <Text style={styles.customText}>{text}</Text>;
  };
  const textProps = {
    style: {
      fontSize: 12,
      color: "red",
    },
  };
  const AutolinkProps: any = [
    {
      key: "Text",
      value: {
        text: "https://github.com/joshswan/react-native-autolink",
      },
    },
    {
      key: "email: true",
      value: {
        email: true,
        text: "emails (837185575@qq.com)",
      },
    },
    {
      key: "email: false",
      value: {
        email: false,
        text: "emails (837185575@qq.com)",
      },
    },
    {
      key: "hashtag: default is false",
      value: {
        hashtag: false,
        text: "hashtags (#exciting)",
      },
    },
    {
      key: "hashtag: facebook",
      value: {
        hashtag: "facebook",
        text: "hashtags (#exciting)",
      },
    },
    {
      key: "hashtag: instagram",
      value: {
        hashtag: "instagram",
        text: "hashtags (#exciting)",
      },
    },
    {
      key: "hashtag: twitter",
      value: {
        hashtag: "twitter",
        text: "hashtags (#exciting)",
      },
    },
    {
      key: "phone: true",
      value: {
        phone: true,
        text: "phone numbers (415-555-5555)",
      },
    },
    {
      key: "phone: false",
      value: {
        phone: false,
        text: "phone numbers (415-555-5555)",
      },
    },
    {
      key: "phone: sms",
      value: {
        phone: "sms",
        text: "phone numbers (415-555-5555)",
      },
    },
    {
      key: "phone: text",
      value: {
        phone: "text",
        text: "phone numbers (415-555-5555)",
      },
    },
    {
      key: "mention: false",
      value: {
        mention: false,
        text: "mentions/handles (@twitter)",
      },
    },
    {
      key: "mention: soundcloud",
      value: {
        mention: "soundcloud",
        text: "mentions/handles (@soundcloud)",
      },
    },
    {
      key: "mention: instagram",
      value: {
        mention: "instagram",
        text: "mentions/handles (@instagram)",
      },
    },
    {
      key: "mention: twitter",
      value: {
        mention: "twitter",
        text: "mentions/handles (@twitter)",
      },
    },
    {
      key: "showAlert: false",
      value: {
        showAlert: false,
        text: "https://www.baidu.com/",
      },
    },
    {
      key: "showAlert: true",
      value: {
        showAlert: true,
        text: "https://www.baidu.com/",
      },
    },
    {
      key: "stripPrefix: true",
      value: {
        stripPrefix: true,
        text: "Check out our website at https://www.example.com and follow us on http://twitter.com/example",
      },
    },
    {
      key: "stripPrefix: false",
      value: {
        stripPrefix: false,
        text: "Check out our website at https://www.example.com and follow us on http://twitter.com/example",
      },
    },
    {
      key: "stripTrailingSlash: true",
      value: {
        stripTrailingSlash: true,
        text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/",
      },
    },
    {
      key: "stripTrailingSlash: false",
      value: {
        stripTrailingSlash: false,
        text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/",
      },
    },
    {
      key: "textProps: 文本样式",
      value: {
        textProps: textProps,
        text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/",
      },
    },
    {
      key: "truncate: 10",
      value: {
        truncate: 10,
        text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink), emails (837185575@qq.com), and hashtags (#exciting)",
      },
    },
    {
      key: "truncate: 15",
      value: {
        truncate: 12,
        text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink), emails (837185575@qq.com), and hashtags (#exciting)",
      },
    },
    {
      key: "url: true",
      value: {
        url: true,
        text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)",
      },
    },
    {
      key: "url: false",
      value: {
        url: false,
        text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)",
      },
    },
    {
      key: "url: schemeMatches true",
      value: {
        url: {
          schemeMatches: true,
        },
        text: "This is the string to parse for urls (https://github.com)",
      },
    },
    {
      key: "url: schemeMatches false",
      value: {
        url: {
          schemeMatches: false,
        },
        text: "This is the string to parse for urls (https://github.com)",
      },
    },
    {
      key: "url: wwwMatches false",
      value: {
        url: {
          wwwMatches: false,
        },
        text: "This is the string to parse for urls (www.github.com)",
      },
    },
    {
      key: "url: wwwMatches true",
      value: {
        url: {
          wwwMatches: true,
        },
        text: "This is the string to parse for urls (www.github.com)",
      },
    },
    {
      key: "url: tldMatches true",
      value: {
        url: {
          tldMatches: true,
        },
        text: "This is the string to parse for urls (github.com)",
      },
    },
    {
      key: "url: tldMatches false",
      value: {
        url: {
          tldMatches: false,
        },
        text: "This is the string to parse for urls (github.com)",
      },
    },
  ];
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.inputArea}>
          <Text style={styles.baseText}>{result}</Text>
        </View>
        <Tester>
          {AutolinkProps.map((item: any) => {
            return (
              <TestCase itShould={item.key} tags={["C_API"]} key={item.key}>
                <View
                  style={{
                    height: 40,
                    display: "flex",
                  }}
                >
                  <Autolink
                    text={item.value.text}
                    email={item.value.email}
                    hashtag={item.value.hashtag}
                    phone={item.value.phone}
                    linkStyle={item.value.linkStyle}
                    mention={item.value.mention}
                    showAlert={item.value.showAlert}
                    stripPrefix={item.value.stripPrefix}
                    stripTrailingSlash={item.value.stripTrailingSlash}
                    textProps={item.value.textProps}
                    truncate={item.value.truncate}
                    url={item.value.url}
                    {...item}
                  ></Autolink>
                </View>
              </TestCase>
            );
          })}
          <TestCase itShould="useNativeSchemes: true" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="hashtags (#exciting)"
                hashtag="facebook"
                useNativeSchemes={true}
              />
            </View>
          </TestCase>
          <TestCase itShould="useNativeSchemes: false" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="hashtags (#exciting)"
                hashtag="facebook"
                useNativeSchemes={false}
              />
            </View>
          </TestCase>
          <TestCase itShould="truncateChars: **" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                truncate={5}
                truncateChars="**"
              />
            </View>
          </TestCase>
          <TestCase itShould="truncateChars: $$" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                truncate={5}
                truncateChars="$$"
              />
            </View>
          </TestCase>
          <TestCase
            itShould="linkProps: linkProps backgroundColor is yellow"
            tags={["C_API"]}
          >
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                linkProps={{
                  onPress: () => {
                    setResult("linkProps");
                  },
                }}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="linkProps: linkProps url is baidu"
            tags={["C_API"]}
          >
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                linkProps={linkProps}
              />
            </View>
          </TestCase>
          <TestCase itShould="onPress: 点击事件" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) mentions/handles (@twitter)"
                mention="twitter"
                onPress={onPress}
              />
            </View>
          </TestCase>
          <TestCase itShould="onLongPress: 长按事件" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) mentions/handles (@instagram)"
                mention="instagram"
                onLongPress={onLongPress}
              />
            </View>
          </TestCase>
          <TestCase itShould="renderLink: 自定义渲染连接" tags={["C_API"]}>
            <View style={{ height: 80 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) @mention"
                mention="instagram"
                renderLink={renderLink}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="renderText: 自定义渲染文本，字体颜色是紫色"
            tags={["C_API"]}
          >
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                renderText={renderText}
              />
            </View>
          </TestCase>
          <TestCase itShould="truncateLocation: smart" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                truncate={12}
                truncateLocation="smart"
              />
            </View>
          </TestCase>
          <TestCase itShould="truncateLocation: middle" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                truncate={12}
                truncateLocation="middle"
              />
            </View>
          </TestCase>
          <TestCase itShould="truncateLocation: end" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                truncate={12}
                truncateLocation="end"
              />
            </View>
          </TestCase>
          <TestCase itShould="linkStyle: color is red" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                linkStyle={{ color: "red" }}
              />
            </View>
          </TestCase>
          <TestCase itShould="linkStyle: color is green" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                linkStyle={{ color: "green" }}
              />
            </View>
          </TestCase>
          <TestCase itShould="component: ScrollView" tags={["C_API"]}>
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                component={ScrollView}
              />
            </View>
          </TestCase>
          <TestCase itShould="component: view" tags={["C_API"]}>
            <View style={{ height: 50 }}>
              <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                component={View}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="matchers: 自定义匹配规则(412-555-5555)"
            tags={["C_API"]}
          >
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the phone numbers (412-555-5555)"
                matchers={[
                  {
                    pattern:
                      /[+]?[0-9]?\s?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-]?[0-9]{2,4}/g,
                    style: {
                      color: "blue",
                      backgroundColor: "red",
                      textDecorationLine: "underline",
                    },
                  },
                ]}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="matchers: 自定义匹配规则(415-555-5555)"
            tags={["C_API"]}
          >
            <View style={{ height: 40 }}>
              <Autolink
                text="This is the phone numbers (415-555-5555)"
                matchers={[
                  {
                    pattern:
                      /[+]?[0-9]?\s?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-]?[0-9]{2,4}/g,
                    style: {
                      color: "red",
                      backgroundColor: "yellow",
                      textDecorationLine: "underline",
                    },
                  },
                ]}
              />
            </View>
          </TestCase>
        </Tester>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    color: "red",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  animationContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  typingAnimation: {
    width: Dimensions.get("window").width,
    backgroundColor: "pink",
  },
  typingAnimations: {
    width: Dimensions.get("window").width,
    backgroundColor: "green",
  },
  inputArea: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  baseText: {
    width: "100%",
    height: 100,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  linkStyle: {
    color: "red",
  },
  linkStyles: {
    backgroundColor: "pink",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  customText: {
    color: "purple",
  },
});
export default AutoLinkExample;
