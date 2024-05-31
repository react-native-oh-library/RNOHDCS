/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Button} from 'react-native';
import { createThumbnail }  from 'react-native-create-thumbnail';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function CreateThumbnailDemo() { 
  return (
    <Tester>
      <TestSuite name='CreateThumbnail'>
       <TestCase
          itShould="Create video thumbnail"
          initialState={null as any}
          arrange={({setState}) => (
            <Button title='运行' color='#841584' onPress= {async() => {
              let obj = await createThumbnail({ 
                url:'https://media.w3.org/2010/05/sintel/trailer.mp4',
                timeStamp: 10000
              });
              setState(obj)
            }}></Button>
          )}
          assert={({expect, state}) => {
            expect(state).to.have.property('path')
          }}
        />
     </TestSuite>
    </Tester>
  )
}
export default CreateThumbnailDemo;
