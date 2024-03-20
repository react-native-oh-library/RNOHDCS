import {useEffect, useMemo, useState} from 'react';
import JsBarcode from 'jsbarcode';
import {SvgXml} from 'react-native-svg';
import {DOMImplementation, XMLSerializer} from 'xmldom';

interface optionsType {
  width?: number;
  height?: number;
  format?: string;
  displayValue?: boolean;
  fontOptions?: string;
  font?: string;
  text?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  flat?: boolean;
  valid?: (valid: boolean) => void;
}

interface Props {
  value: string;
  options: optionsType;
  jsbarcodeBack?: (value: string) => void;
  setValid?: (value: string) => void;
}

const defaults = {
  width: 2,
  height: 100,
  format: 'auto',
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  text: undefined,
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  flat: false,
  valid: function () {},
};

export const Barcode = (props: Props) => {
  const [jsbarcodeInfo, setJsbarcodeInfo] = useState('');
  const [data, setData] = useState('');
  const {
    width = defaults.width,
    height = defaults.height,
    format = defaults.format,
    displayValue = defaults.displayValue,
    fontOptions = defaults.fontOptions,
    font = defaults.font,
    text = defaults.text,
    textAlign = defaults.textAlign,
    textPosition = defaults.textPosition,
    textMargin = defaults.textMargin,
    fontSize = defaults.fontSize,
    background = defaults.background,
    lineColor = defaults.lineColor,
    margin = defaults.margin,
    marginTop = defaults.marginTop,
    marginBottom = defaults.marginBottom,
    marginLeft = defaults.marginLeft,
    marginRight = defaults.marginRight,
    flat = defaults.flat,
    valid = defaults.valid,
  } = props.options || {};

  useEffect(() => {
    if(props.jsbarcodeBack){
      props.jsbarcodeBack(jsbarcodeInfo);
    }
    if(props.setValid){
      props.setValid(data);
    }
  }, [jsbarcodeInfo,data]);

  const svgText = useMemo(() => {
    const document = new DOMImplementation().createDocument(null, 'html');
    const svgNode = document.createElementNS(null, 'svg');

    JsBarcode(svgNode, props.value, {
      xmlDocument: document,
      width,
      height,
      format,
      displayValue,
      fontOptions,
      font,
      text,
      textAlign,
      textPosition,
      textMargin,
      fontSize,
      background,
      lineColor,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      flat,
      valid:function(valid){
        if(valid){
          setData('条形码有效');
        }else{
          setData('条形码无效');
        }
      }
    });

    svgNode.removeAttribute('style')
    setJsbarcodeInfo(new XMLSerializer().serializeToString(svgNode));

    return new XMLSerializer().serializeToString(svgNode);
  }, [props]);

  return <SvgXml xml={svgText} />;
};
