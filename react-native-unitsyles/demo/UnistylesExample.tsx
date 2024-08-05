import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  PixelRatio,
} from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
  UnistylesRegistry,
  mq,
  UnistylesPlugin,
} from "react-native-unistyles";
import React, { useEffect } from "react";
const basic_styles = StyleSheet.create({
  consta: { backgroundColor: "#F5FCFF" },
  titleStyle: { fontSize: 16, fontWeight: "500" },
});

export function UnistylesExample() {
  let anti_shake = true;
  const hasSomeCoolFeatures = true;
  const { styles, theme } = useStyles(stylesheet, {
    colors: hasSomeCoolFeatures,
    sizes: !hasSomeCoolFeatures,
  });
  let status_color = true;
  const renderCount = React.useRef(1);
  useEffect(
    () => () => {
      UnistylesRuntime.removePlugin(autoGuidelinePlugin);
    },
    []
  );
  const isAutoGuidelinePluginEnabled = UnistylesRuntime.enabledPlugins.includes(
    autoGuidelinePlugin.name
  );

  return (
    <ScrollView>
      <View style={basic_styles.consta}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={basic_styles.titleStyle}>{"变更状态栏颜色:"}</Text>
        <Button
          title="status"
          onPress={() => {
            anti_shake = !anti_shake;
            if (anti_shake) {
              UnistylesRuntime.statusBar.setColor(
                status_color ? sharedColors.barbie : sharedColors.aloes
              );
              status_color = !status_color;
            }
          }}
        ></Button>

        <Text style={basic_styles.titleStyle}>{"变更主题对象:"}</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            {" "}
            当前主题:{UnistylesRuntime.themeName} 重新渲染的次数:{renderCount.current++}
          </Text>
          <Text style={styles.theme}>
            {" "}
            Colors: {JSON.stringify(theme.colors, null, 2)}{" "}
          </Text>
          <Button
            title="变更light主题"
            onPress={() => {
              anti_shake = !anti_shake;
              if (anti_shake) {
                UnistylesRuntime.setAdaptiveThemes(false);
                UnistylesRuntime.setTheme("light");
                UnistylesRuntime.updateTheme("light", (theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    typography:
                      theme.colors.typography === "#000000"
                        ? theme.colors.blood
                        : "#000000",
                  },
                }));
              }
            }}
          />
        </View>

        <Text style={basic_styles.titleStyle}>{"更改页面样式:"}</Text>
        <Text style={styles.text}>
          {" "}
          这个页面正在使用 {UnistylesRuntime.themeName} 主题.
        </Text>
        <Button
          title="更改页面主题"
          color={theme.colors.accent}
          onPress={() => {
            anti_shake = !anti_shake;
            if (anti_shake) {
              UnistylesRuntime.setAdaptiveThemes(false);
              UnistylesRuntime.setTheme(
                UnistylesRuntime.themeName === "light" ? "premium" : "light"
              );
            }
          }}
        />

        <Text style={basic_styles.titleStyle}>{"自适应主题:"}</Text>
        <Text style={styles.container}>
          {" 系统主题:" + UnistylesRuntime.colorScheme}
        </Text>
        <Button
          title="启用自适应主题"
          onPress={() => {
            anti_shake = !anti_shake;
            if (anti_shake) {
              UnistylesRuntime.setAdaptiveThemes(true);
            }
          }}
        />

        <Text style={basic_styles.titleStyle}>{"插件:"}</Text>
        <View style={styles.unscaledBox}></View>
        <Text>
          前缀为unscaled的样式会被插件跳过,已启用的插件
          {UnistylesRuntime.enabledPlugins}
        </Text>
        <Button
          title={isAutoGuidelinePluginEnabled ? "关闭插件" : "启用插件"}
          onPress={() => {
            anti_shake = !anti_shake;
            if (anti_shake) {
              isAutoGuidelinePluginEnabled
                ? UnistylesRuntime.removePlugin(autoGuidelinePlugin)
                : UnistylesRuntime.addPlugin(autoGuidelinePlugin);
            }
          }}
        />

        <Text style={basic_styles.titleStyle}>
          {"在StyleSheets中使用runtime:"}
        </Text>
        <View style={styles.box}>
          <Text>
            占据了屏幕一半大小的方块width:{styles.box.width} 861 height:
            {styles.box.height}
          </Text>
        </View>

        <Text style={basic_styles.titleStyle}>{"动态函数式样式表:"}</Text>
        <View style={styles.dynamicFunction(2)}>
          <Text>accent</Text>
        </View>
        <View style={styles.dynamicFunction(1)}>
          <Text>barbie</Text>
        </View>

        <Text style={basic_styles.titleStyle}>{"媒体查询:"}</Text>
        <View style={styles.container1}>
          <Text>
            你的屏幕大小是:{UnistylesRuntime.screen.width}x
            {UnistylesRuntime.screen.height};当宽大于500时背景是
            {theme.colors.backgroundColor}，宽大于900时背景为
            {theme.colors.aloes}
          </Text>
        </View>

        <Text style={basic_styles.titleStyle}>
          {"在StyleSheets中使用variants:"}
        </Text>
        <View style={styles.box_variants}></View>
        <Text style={basic_styles.titleStyle}>{":"}</Text>

        <Text style={basic_styles.titleStyle}>{"字体大小偏好:"}</Text>
        <Text>
          {"现在的字体大小偏好设置为:" + UnistylesRuntime.contentSizeCategory}
        </Text>
      </View>
    </ScrollView>
  );
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: theme.colors.backgroundColor,
    rowGap: 20,
  },
  text: {
    textAlign: "center",
    color: theme.colors.typography,
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: {
      [mq.width(undefined, 500).and.height(undefined, 1000)]:
        theme.colors.backgroundColor,
      [mq.only.width(932)]: theme.colors.aloes,
    },
    rowGap: 20,
  },
  theme: {
    color: theme.colors.typography,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
    width: runtime.screen.width / 2,
    height: runtime.screen.height / 2,
    backgroundColor:
      runtime.orientation === "portrait"
        ? theme.colors.accent
        : theme.colors.oak,
  },
  dynamicFunction: (index: number) => ({
    backgroundColor:
      index % 2 === 0 ? theme.colors.accent : theme.colors.barbie,
  }),
  box_variants: {
    borderRadius: 10,
    variants: {
      colors: {
        true: { backgroundColor: theme.colors.barbie },
        false: { backgroundColor: theme.colors.blood },
        default: { backgroundColor: theme.colors.sky },
        other: { backgroundColor: theme.colors.typography },
      },
      sizes: {
        true: { width: 200, height: 200 },
        false: { width: 50, height: 50 },
        default: { width: 100, height: 100 },
        other: { width: 150, height: 150 },
      },
    },
  },
  unscaledBox: { width: 100, height: 100, backgroundColor: theme.colors.blood },
}));

const sharedColors = {
  barbie: "#ff9ff3",
  oak: "#1dd1a1",
  sky: "#48dbfb",
  fog: "#c8d6e5",
  aloes: "#00d2d3",
  blood: "#ff6b6b",
};
const lightTheme = {
  colors: {
    ...sharedColors,
    backgroundColor: "#ffffff",
    typography: "#000000",
    accent: sharedColors.blood,
  },
};
const darkTheme = {
  colors: {
    ...sharedColors,
    backgroundColor: "#000000",
    typography: "#ffffff",
    accent: sharedColors.barbie,
  },
};
const premiumTheme = {
  colors: {
    ...sharedColors,
    backgroundColor: sharedColors.barbie,
    typography: "#76278f",
    accent: "#000000",
  },
};
const breakpoints = { xs: 0, sm: 300, md: 500, lg: 800, xl: 1200 };
UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
  premium: premiumTheme,
})
  .addBreakpoints(breakpoints)
  .addConfig({ adaptiveThemes: true, initialTheme: "light" });

const REFERENCE_WIDTH = 300;
const REFERENCE_HEIGHT = 800;

const autoGuidelinePlugin: UnistylesPlugin = {
  name: "autoGuideline",
  onParsedStyle: (styleKey, style, runtime) => {
    const pairs = Object.entries(style).map(([key, value]) => {
      if (styleKey.includes("unscaled")) {
        return [key, value];
      }

      const isNumber = typeof value === "number";

      if (!isNumber || key === "flex") {
        return [key, value];
      }

      if (key === "height") {
        const percentage = value / REFERENCE_HEIGHT;
        return [
          key,
          PixelRatio.roundToNearestPixel(runtime.screen.height * percentage),
        ];
      }
      const percentage = value / REFERENCE_WIDTH;
      return [
        key,
        PixelRatio.roundToNearestPixel(runtime.screen.width * percentage),
      ];
    });

    return Object.fromEntries(pairs);
  },
};