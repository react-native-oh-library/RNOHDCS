/**
 * title: Basic Usage
 * desc: Try to scroll the box below.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 尝试滚动一下文字内容。
 */

import React, { useRef } from 'react';
import { useScroll } from 'ahooks';
import { Text, View } from 'react-native';

export function FullscreenScroll() {
  const ref = useRef(null);
  const scroll = useScroll(ref);
  return (
    <View>
      <Text>{JSON.stringify(scroll)}</Text>
      <View
        style={{
          height: 160,
          width: 160,
          borderWidth: 1,
          borderColor: '#000',
          overflow: 'scroll',
          flexWrap: 'nowrap',
        }}
        ref={ref}
      >
        <View>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex
          excepturi explicabo iste iure labore molestiae neque optio perspiciatis
        </View>
        <View>
          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda
          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt
        </View>
        <View>
          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus
          magni modi mollitia nihil nisi provident
        </View>
        <View>
          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,
          quia quisquam repellendus reprehenderit.
        </View>
        <View>
          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,
          consectetur corporis cum deserunt distinctio dolore eius est exercitationem
        </View>
        <View>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</View>
        <View>
          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore
          earum, eum expedita facilis
        </View>
        <View>
          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque
          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi
        </View>
      </View>
    </View>
  );
};
