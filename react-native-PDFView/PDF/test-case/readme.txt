推荐引入方式：在APP.tsx引入下面的代码 


   import * as testSuiteByName from './tests/PDF/test-case';

...


        {Object.keys(testSuiteByName).map(testSuiteName => {
            const TestSuite =
              testSuiteByName[testSuiteName as keyof typeof testSuiteByName];
            return (
              <Page
                key={testSuiteName}
                name={`${testSuiteName.replace('Test', '')}`}>
              
                    <TestSuite key={testSuiteName} />
              
              </Page>
            );
          })}