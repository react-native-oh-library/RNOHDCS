在App.tsx引入（custAlertporpsDemo.tsx、dropdownalertDemo.tsx、zIndexDemo.tsx）三个文件即可
示例代码：
import CustAlertporpsDemo from './tests/dropdownalert/custAlertporpsDemo';
import DropdownalertDemo from './tests/dropdownalert/dropdownalertDemo';
import ZIndexDemo from './tests/dropdownalert/zIndexDemo';

<Page name="CustAlertporpsDemo">
    <CustAlertporpsDemo />
</Page>
<Page name="DropdownalertDemo">
    <DropdownalertDemo />
</Page>
<Page name="ZIndexDemo">
    <ZIndexDemo />
</Page>


因testerino以及page对DropdownAlert的展示会有遮挡，如需验证本库纯净无遮挡效果，可使用 当前目录下App.tsx代替您的APP.tsx
