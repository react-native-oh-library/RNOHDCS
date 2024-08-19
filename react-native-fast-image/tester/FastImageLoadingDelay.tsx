import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

export function FastImageLoadingDelay(): JSX.Element {
  const source =[
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6651224a-b18d-4456-97b8-14c6daad236d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694154457&t=37e024c7f8fb33d10e154f32353baf4a",
    "https://res.vmallres.com//uomcdn/CN/cms/202206/5B874DC0E45B0467105D3D3872A3E9A3.png",
    "https://res.vmallres.com//uomcdn/CN/cms/202206/5B874DC0E45B0467105D3D3872A3E9A3.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/logo_app.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/sort-search.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106613/800_800_9C902761A61D65937C1F911426C89786mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202205/gbom/6941487239535/800_800_A3E7FDE17D36C5B2AE387D6AC0C5BD0Cmp_tds.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202207/gbom/6941487262915/800_800_0734AA176A25064EDB37B01BF0821362mp_tds.png",
    "https://res.vmallres.com/pimages/product/6941487215461/800_800_6E52FE5AD52A2106A11D6D894FCB12F04E037A1519BF7E05mp_tds.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202112/gbom/6941487258284/800_800_9C1364E7C5482011E4603ADED8EA9AEBmp_tds.png",
    "https://res.vmallres.com/pimages/product/6941487236428/800_800_D43CEE13783730F0DBAAE0705BBA910E83763046FC5CEE1Bmp_tds.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487299805/800_800_8573D11CE8F5DFD0E7C58EEA59A6CCE6mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487295494/800_800_92C397A019C9141026C913A25A2E96A8mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487299522/800_800_2BA5E182AE733B855B350E39D45C88A4mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487289967/800_800_52D28727FA321E9D2DD4B19405FBCF6Bmp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202307/displayProduct/10086132190519/800_800_C7D4BE755586AAE9F4E5DAB3E156F8CDmp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106125/800_800_3348B1FC7C489DA5930549EB81B39BFCmp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202306/gbom/6941487298976/800_800_F902AD5D19AD0CD8B517A8A2FBF5BA8Cmp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487293766/800_800_13C73D46BA3379FBEA7A3F7D7523C2A1mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487295494/800_800_92C397A019C9141026C913A25A2E96A8mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202302/gbom/6941487288137/800_800_9417461A77545688DF373F2C5100EEF5mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487299713/800_800_5CC2E661FC9277527112CCD6D69D6CE3mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487299768/800_800_01343D25358015B22E19B08B612A7EC9mp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487297405/800_800_B24860B68E59665B53F67CE5EBC79B8Dmp.png",
    "https://res.vmallres.com/pimages/uomcdn/CN/pms/202210/gbom/6942103100642/800_800_5F6A0ADEF3722AEE3026EE7DD5457F62mp_tds.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/link-left-disabled.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/link-right.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/logo_app.png",
    "https://res.vmallres.com/cmscdn/CN/2023-09/6c51df9d320d4079ad76b92055a81f8f.png.webp",
    "https://res.vmallres.com/cmscdn/CN/2023-09/8c65745c05714c07ad192eb5e4d95e60.png.webp",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487293711/428_428_FB9122BA46A91595DC0ECB743980E928mp.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290710/428_428_F6083CCDA64E43AF09DAD021C5F4595Dmp.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png",
    "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487277193/428_428_E95748906687299F1AF7D41233A21051mp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487279234/428_428_8713E1108A3420D264C785C12C58389Bmp_tds.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202210/gbom/6941487280919/428_428_12C4AF01BB572F2E5CBA850A623237F2mp_tds.png",
    "https://res5.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487289523/428_428_07B68F98B17887CDC0362CF7D95D3236mp.png",
    "https://res5.vmallres.com/pimages/uomcdn/CN/pms/202211/gbom/6941487284009/428_428_C6CB7EAD9AE111244B2F046EFBDCFA11mp_tds.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487292097/428_428_BEF0E709F8D28D64C13A3B0D7873363Cmp.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296101/428_428_CB300EA39492BA2D9529FF7B2B68267Fmp.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487277988/428_428_F17861761B9A06A33CFBC8D6AA61482Fmp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296736/428_428_BC8E409E084DC788E95A0819BDF4381Emp.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487279234/428_428_8713E1108A3420D264C785C12C58389Bmp_tds.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487277193/428_428_E95748906687299F1AF7D41233A21051mp_tds.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202210/gbom/6941487280919/428_428_12C4AF01BB572F2E5CBA850A623237F2mp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202211/gbom/6941487284009/428_428_C6CB7EAD9AE111244B2F046EFBDCFA11mp_tds.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202207/gbom/6941487279418/428_428_1142FAB7EA4DCBDD8C64BF54486A7D4Bmp_tds.png",
    "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487289523/428_428_07B68F98B17887CDC0362CF7D95D3236mp.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487298006/428_428_FEB1DCD7FBCECEF986D30BB39B7CD924mp.png",
    "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487298624/428_428_1CCBF4F359253C6B59973318246482AFmp.png",
    "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487299485/428_428_0E661462A95A3A1F11AA54AAEB53C63Fmp_tds.png",
    "https://res5.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487266920/428_428_FA25F9CC6F6BF9237C314819D6BE53F3mp_tds.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487292097/428_428_BEF0E709F8D28D64C13A3B0D7873363Cmp.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202306/gbom/6941487293940/428_428_A309A2CD669CF905E1EB7CAC2C2C683Dmp.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202306/gbom/6941487294442/428_428_D5AA0B25FAE61066B476A0A11C84A424mp.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487297153/428_428_6AC44C47C8F772DEECF7DE49BF662D3Fmp.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487287529/428_428_C1AF41DA096A826F14E8FAC49FFCF36Bmp_tds.png",
    "https://res7.vmallres.com/pimages//uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png",
    "https://res6.vmallres.com/pimages//uomcdn/CN/pms/202304/gbom/6941487290802/428_428_D1954FFACCE390C8C1054BFCC4A2BF5Emp.png",
    "https://res1.vmallres.com/pimages//uomcdn/CN/pms/202303/gbom/6941487290710/428_428_F6083CCDA64E43AF09DAD021C5F4595Dmp.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487279906/428_428_FD0A7FB44AC89E470F23E19F6AA06544mp_tds.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202211/gbom/6941487284870/428_428_ED91FA5CC21D0BCED957FF470E420807mp_tds.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487276523/428_428_AC05C93CFCD993DCFDEA7499D93BBD4Bmp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296736/428_428_BC8E409E084DC788E95A0819BDF4381Emp.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487298235/428_428_1C172EDC310A6CB0AA0A5E9AB56CFFBBmp.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296101/428_428_CB300EA39492BA2D9529FF7B2B68267Fmp.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487297979/428_428_7AF7472A5347032FD27E7EF137267EDFmp.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487292097/428_428_BEF0E709F8D28D64C13A3B0D7873363Cmp.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487294466/428_428_8C4EAAD37B1D9B4A35F6BCCDF72DB733mp.png",
    "https://res3.vmallres.com/pimages//uomcdn/CN/pms/202210/gbom/6941487280919/428_428_12C4AF01BB572F2E5CBA850A623237F2mp_tds.png",
    "https://res6.vmallres.com/pimages//uomcdn/CN/pms/202209/gbom/6941487279234/428_428_8713E1108A3420D264C785C12C58389Bmp_tds.png",
    "https://res4.vmallres.com/pimages//uomcdn/CN/pms/202304/gbom/6941487294466/428_428_8C4EAAD37B1D9B4A35F6BCCDF72DB733mp.png",
    "https://res7.vmallres.com/pimages//uomcdn/CN/pms/202212/gbom/6941487299485/428_428_0E661462A95A3A1F11AA54AAEB53C63Fmp_tds.png",
    "https://res4.vmallres.com/pimages//uomcdn/CN/pms/202305/gbom/6941487298006/428_428_FEB1DCD7FBCECEF986D30BB39B7CD924mp.png",
    "https://res6.vmallres.com/pimages//uomcdn/CN/pms/202303/gbom/6941487289523/428_428_07B68F98B17887CDC0362CF7D95D3236mp.png",
    "https://res5.vmallres.com/pimages//uomcdn/CN/pms/202303/gbom/6941487292097/428_428_BEF0E709F8D28D64C13A3B0D7873363Cmp.png",
    "https://res2.vmallres.com/pimages//uomcdn/CN/pms/202208/gbom/6941487265954/428_428_4C1EEACDB24B734DFCE52AB1706BB48Amp_tds.png",
    "https://res2.vmallres.com/pimages//uomcdn/CN/pms/202212/gbom/6941487277988/428_428_F17861761B9A06A33CFBC8D6AA61482Fmp_tds.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487299485/428_428_0E661462A95A3A1F11AA54AAEB53C63Fmp_tds.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487266173/428_428_A203102E3FEC97486FB20721C836365Cmp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202206/gbom/6941487268832/428_428_E655CDEBA1A3CB6FF46A68A6DF3CE747mp_tds.png",
    "https://res5.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290710/428_428_F6083CCDA64E43AF09DAD021C5F4595Dmp.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487290802/428_428_D1954FFACCE390C8C1054BFCC4A2BF5Emp.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487279906/428_428_FD0A7FB44AC89E470F23E19F6AA06544mp_tds.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202211/gbom/6941487284870/428_428_ED91FA5CC21D0BCED957FF470E420807mp_tds.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487276523/428_428_AC05C93CFCD993DCFDEA7499D93BBD4Bmp_tds.png",
    "https://res6.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296118/428_428_110FA9C40DADD73D7C1A29BEB0B54B2Amp.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487296651/428_428_3A384889B352B3B6E08BD4F0508C922Amp.png",
    "https://res1.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487298228/428_428_9E1189EDE36120EC030A50C1AF6C88BEmp.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202210/gbom/6941487280919/428_428_12C4AF01BB572F2E5CBA850A623237F2mp_tds.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202211/gbom/6941487283972/428_428_79D8C8AFAF9BD60C171D5E9FD418B309mp_tds.png",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202209/gbom/6941487261352/428_428_058DF8465878ABAFC566B8F7C1DB8851mp_tds.png",
    "https://res5.vmallres.com/pimages/product/GB51096SQD/428_428_6357A005C6D4E777762A04E2301398E9CE5C9079F60046E4mp_tds.png",
    "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202205/gbom/6941487259298/428_428_D7BFF22D4678EB68440F914B352214C4mp_tds.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202302/gbom/6941487289240/800_800_DB03AB89E0FCA775CC6282346395D505mp.png",
    "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487287512/800_800_3CF1816284EBBE24AA2B0A2A3FF3DF38mp_tds.png",
    "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202306/gbom/6941487293896/800_800_88B6A700581CA58013AF0765ACF5AB30mp.png",
    "https://res4.vmallres.com/pimages/uomcdn/CN/pms/202212/gbom/6941487287543/800_800_366C59077983A46840AD43FB84E59D19mp_tds.png",
    "https://res.vmallres.com/pimages//pages/cdnImages/40227551365615572204.png",
    "https://res.vmallres.com//uomcdn/CN/cms/202211/230DB6530B42A545972D16D45640D1D6.png",
    "https://res.vmallres.com//uomcdn/CN/cms/202211/230DB6530B42A545972D16D45640D1D6.png",
    "https://res.vmallres.com/pimages//pages/cdnImages/42579551365615597524.png",
    "https://res.vmallres.com/cmscdn/CN/2023-08/9dcb29e5a96d4825a5db6f7748259f50.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-09/c1d41c62724c4eec895e35a26b667571.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-09/d26ad590e23f41fbabfb7657d32f48f9.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-08/bc41d8ab25d9482384047f76c1f0e969.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-08/101a216617da404b8474a47ea0422b06.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-08/9dcb29e5a96d4825a5db6f7748259f50.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-09/c1d41c62724c4eec895e35a26b667571.jpg",
    "https://res.vmallres.com/cmscdn/CN/2023-09/c1d41c62724c4eec895e35a26b667571.jpg",
    "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487289042/428_428_2CBF9BC1CF844ABA4FC19C8C2B9E4BFFmp.jpg",
    "https://res.vmallres.com/pimages//pages/cdnImages/17308188080618180371.jpg",
    "https://res3.vmallres.com/shopdc/pic/5a818c14-f886-41b6-ad48-56c94a430471.jpg",
  ]
  const [data, setData] = React.useState([]);
  const [time, setTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);
  const [lostStr, setLoadStr] = React.useState("点击加载");
  let endNum =0;
  let clumns =6;

  const loadOnPress=()=> {
    setLoadStr("开始加载")
    setTime(0)
    setStartTime((new Date()).valueOf())
    let rows = source.length/clumns;
    const newData =[]
    
    for(let i=0;i<rows;i++){
      newData.push(i);
    }
    setData(newData);
  }
  const preloadOnPress=()=> {
    let images = [];
    for (const iterator of source) {
      images.push({uri:iterator})
    }
    FastImage.preload(images);
  }
  const clearOnPress=()=> {
    FastImage.clearDiskCache();
    FastImage.clearMemoryCache();
  }

  return (
    <View style={styles.container}>
      <Tester>
        <TestSuite name='加载速度测试'>
          <TestCase itShould='平台'><Text style={{paddingLeft:20}}>FastImage-RN-{Platform.OS}</Text></TestCase>
          <TestCase itShould='加载图片'><Text onPress={loadOnPress} style={styles.label}>{lostStr} 用时{time}</Text></TestCase>
          <TestCase itShould='preload'><Text onPress={preloadOnPress} style={styles.label}>preload 预加载</Text></TestCase>
          <TestCase itShould='清除缓存'><Text onPress={clearOnPress} style={styles.label}>清除缓存</Text></TestCase>
        </TestSuite>
      </Tester>

      <FlatList
        data={data}
        renderItem={({ item }) => <View style={styles.item}>
        
        <FastImage source={{ uri: source[item*clumns] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} />
        <FastImage source={{ uri: source[item*clumns+1] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} /><FastImage source={{ uri: source[item*clumns+2] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} />
        <FastImage source={{ uri: source[item*clumns+3] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} />
        <FastImage source={{ uri: source[item*clumns+4] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} />
        <FastImage source={{ uri: source[item*clumns+5] }} style={styles.image} onLoadEnd={()=>{
          endNum++;
          if(endNum == source.length ){
            setTime(((new Date()).valueOf() -startTime)/1000)
          }
        }} />
        </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  item: {
    paddingLeft:30,
    width: '100%',
    height: 100,
    flexDirection:'row'
  },
  image: {
    width: 50,
    height: 50,
  },
  label: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
  },
  label2: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
});