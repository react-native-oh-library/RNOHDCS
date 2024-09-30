import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import {
  ReactNativeLanguageDetector,
  getLanguage,
  setLanguage,
} from "react-native-localization-settings";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18next
  .use(ReactNativeLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          key: "hello",
        },
      },
      zh: {
        translation: {
          key: "你好",
        },
      },
      fr: {
        translation: {
          key: "hello world in french",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: "v3",
  });

export function LocalizationSettings() {
  const { t } = useTranslation();
  const [languages1, setLanguages1] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [languages3, setLanguages3] = React.useState("");
  return (
    <ScrollView>
      <View>
        <Text>{languages1}</Text>
        <Text>{t("key")}</Text>
        <Button
          title={"change to zh---i18"}
          onPress={() => {
            i18next.changeLanguage("zh");
          }}
        />
        <Button
          title={"change to en---i18"}
          onPress={() => {
            i18next.changeLanguage("en-US");
          }}
        />
        <Button
          title={"getLanguage"}
          onPress={() => {
            setLanguages1(getLanguage());
          }}
        />
      </View>
      <View>
        <Text style={{ backgroundColor: "#fff" }}>
          当前语言为：{languages2}
        </Text>
        <View>
          <Button
            title={"setLanguage:zh"}
            onPress={() => {
              setLanguage("zh");
              setLanguages2(getLanguage());
            }}
          />
        </View>
        <View>
          <Button
            title={"setLanguage:en"}
            onPress={() => {
              setLanguage("en");
              setLanguages2(getLanguage());
            }}
          />
        </View>
      </View>
      <View>
        <Text style={{ backgroundColor: "#fff" }}>
          当前语言为：{languages3}
        </Text>
        <View>
          <Button
            title={"getLanguage"}
            onPress={() => {
              setLanguages3(getLanguage());
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
