import React from 'react';
import { View,Text, ScrollView } from 'react-native';
import { SocialIcon, SocialIconProps } from '@rneui/themed';
import { SocialMediaType } from '@rneui/themed';

type IconData = {
  type: SocialMediaType;
  iconType: string;
};

const dataList: Partial<IconData>[][] = [
  [
    {
      type: 'facebook',
    },
    {
      type: 'twitter',
    },
    {
      type: 'google-plus-official',
    },
  ],
  [
    {
      type: 'google',
    },
    {
      type: 'pinterest',
    },
    {
      type: 'linkedin',
    },
  ],
  [
    {
      type: 'youtube',
    },
    {
      type: 'vimeo',
    },
    {
      type: 'tumblr',
    },
  ],
  [
    {
      type: 'instagram',
    },
    {
      type: 'quora',
    },
    {
      type: 'flickr',
    },
  ],
  [
    {
      type: 'foursquare',
    },
    {
      type: 'wordpress',
    },
    {
      type: 'stumbleupon',
    },
  ],
  [
    {
      type: 'github',
    },
    {
      type: 'github-alt',
    },
    {
      type: 'twitch',
    },
  ],
  [
    {
      type: 'twitch',
    },
    {
      type: 'medium',
    },
    {
      type: 'soundcloud',
    },
    {
      type: 'stack-overflow',
    },
  ],
  [
    {
      type: 'gitlab',
    },
    {
      type: 'angellist',
    },
    {
      type: 'codepen',
    },
  ],
  [
    {
      type: 'weibo',
    },
    {
      type: 'vk',
    },
    {
      type: 'whatsapp', 
    },
  ]
];

type SocialIconsComponentProps = {};

const SocialIcons: React.FunctionComponent<SocialIconsComponentProps> = () => {
  const socialProps = {};
  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Social Icons</Text>
      <ScrollView>
        {dataList.map(
          (chunk: Partial<IconData>[], chunkIndex: React.Key) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
                backgroundColor: '#4c4c4c',
              }}
              key={chunkIndex}
            >
              {chunk.map((l: Partial<IconData>, i: React.Key) => (
                <SocialIcon
                  {...(socialProps as SocialIconProps)}
                  type={l.type}
                  iconType={l.iconType ? l.iconType : 'font-awesome'}
                  key={`${chunkIndex}-${i}`}
                />
              ))}
            </View>
          )
        )}
      </ScrollView>
    </>
  );
};

export default SocialIcons;
