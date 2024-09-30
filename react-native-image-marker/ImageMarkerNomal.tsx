import Marker, {
  Position, ImageFormat, ImageMarkOptions, TextBackgroundType, TextMarkOptions
} from 'react-native-image-marker'
import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Button, Image } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const ImageMarkerNomal = () => {
  // mark  image
  const [netWorkImageUrl, setNetWorkImage] = useState('');
  // file name
  const [file1url, setFilename1] = useState('');
  const [file2url, setFilename2] = useState('');
  // iamge type
  const [filetypeurl_png, setFileTypePng] = useState('');
  const [filetypeurl_jpg, setFileTypeJpg] = useState('');
  const [filetypeurl_base64, setFileTypebase64] = useState('');
  // image quality
  const [qualityurl_20, setqualityurl_20] = useState('');
  const [qualityurl_100, setqualityurl_100] = useState('');
  // image rotate
  const [url_rotate20, seturl_rotate20] = useState('');
  const [url_rotate50, seturl_rotate50] = useState('');
  const [url_backrotate20, seturl_backrotate20] = useState('');
  const [url_backrotate50, seturl_backrotate50] = useState('');
  // image scale
  const [url_scale0_5, seturl_scale0_5] = useState('');
  const [url_scale1_5, seturl_scale1_5] = useState('');
  const [url_backscale0_5, seturl_backscale0_5] = useState('');
  const [url_backscale1_5, seturl_backscale1_5] = useState('');
  // image alpha
  const [url_alpha0_1, seturl_alpha0_1] = useState('');
  const [url_alpha1, seturl_alpha1] = useState('');
  const [url_backalpha0_1, seturl_backalpha0_1] = useState('');
  const [url_backalpha1, seturl_backalpha1] = useState('');
  // image position
  const [url_icon_topLeft, seturl_icon_topLeft] = useState('');
  const [url_icon_topRight, seturl_icon_topRight] = useState('');
  const [url_icon_topCenter, seturl_icon_topCenter] = useState('');
  const [url_icon_bottomLeft, seturl_icon_bottomLeft] = useState('');
  const [url_icon_bottomCenter, seturl_icon_bottomCenter] = useState('');
  const [url_icon_bottomRight, seturl_icon_bottomRight] = useState('');
  const [url_icon_center, seturl_icon_center] = useState('');
  const [url_icon_xy, seturl_icon_xy] = useState('');
  const [url_icon_xypercent, seturl_icon_xypercent] = useState('');
  // network image 
  const image_options_network_image: ImageMarkOptions = {
    backgroundImage: { src: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/yuekan/xintexing00.jpg' },
    watermarkImages: [{
      src: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/yingyongicon.png',
      position: { position: Position.topLeft }
    }
    ]
  }
  // image position
  const image_options_topLeft: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.topLeft }
    }
    ]
  }
  const image_options_topRight: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.topRight }
    }
    ]
  }
  const image_options_topCenter: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.topCenter }
    }
    ]
  }
  const image_options_bottomLeft: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.bottomLeft }
    }
    ]
  }
  const image_options_bottomCenter: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.bottomCenter }
    }
    ]
  }
  const image_options_bottomRight: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.bottomRight }
    }
    ]
  }
  const image_options_center: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { position: Position.center }
    }
    ]
  }
  const image_options_xy: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { X: 30, Y: 50 }
    }
    ]
  }
  const image_options_xypercent: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      position: { X: '10%', Y: '20%' }
    }
    ]
  }
  // image alpha
  const image_options_alpha0_1: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      alpha: 0.1
    }
    ]
  }
  const image_options_alpha1: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      alpha: 1
    }
    ]
  }
  const image_options_backalpha0_1: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      alpha: 0.1
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg')
    }
    ]
  }
  const image_options_backalpha1: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      alpha: 1
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ]
  }
  // iamge scale
  const image_options_scale0_5: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      scale: 0.5
    }
    ]
  }
  const image_options_scale1_5: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      scale: 1.5
    }
    ]
  }
  const image_options_backscale0_5: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      scale: 0.5
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ]
  }
  const image_options_backscale1_5: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      scale: 1.5
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ]
  }
  // image rotate
  const image_options_backrotate20: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      rotate: 20
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ]
  }
  const image_options_backrotate50: ImageMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      rotate: 50
    },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ]
  }
  const image_options_rotate20: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      rotate: 20
    }
    ]
  }
  const image_options_rotate50: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
      rotate: 50
    }
    ]
  }
  // iamge quality
  const image_options_qualityurl_20: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    quality: 20
  }
  const image_options_qualityurl_100: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    quality: 100
  }
  // image file name
  const image_options_filename1: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    filename: 'test1'
  }
  const image_options_filename2: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    filename: 'test2'
  }
  // image type
  const image_options_filetype_png: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    saveFormat: ImageFormat.png
  }
  const image_options_filetyoe_jpg: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    saveFormat: ImageFormat.jpg
  }
  const image_options_filetyoe_base64: ImageMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkImages: [{
      src: require('./assets/pravatar-131.jpg'),
    }
    ],
    saveFormat: ImageFormat.base64
  }
  // network image
  const markImageNetWorkImage = () => {
    Marker.markImage(image_options_network_image).then((result) => {
      setNetWorkImage(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image file name
  const markImageFilename1 = () => {
    Marker.markImage(image_options_filename1).then((result) => {
      setFilename1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImageFilename2 = () => {
    Marker.markImage(image_options_filename2).then((result) => {
      setFilename2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image type
  const markImageFiletypepng = () => {
    Marker.markImage(image_options_filetype_png).then((result) => {
      setFileTypePng(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImageFiletypejpg = () => {
    Marker.markImage(image_options_filetyoe_jpg).then((result) => {
      setFileTypeJpg(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImageFiletypebase64 = () => {
    Marker.markImage(image_options_filetyoe_base64).then((result) => {
      setFileTypebase64(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image quality
  const markImagequalityurl_20 = () => {
    Marker.markImage(image_options_qualityurl_20).then((result) => {
      setqualityurl_20(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagequalityurl_100 = () => {
    Marker.markImage(image_options_qualityurl_100).then((result) => {
      setqualityurl_100(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image rotate
  const markImagerotate_20 = () => {
    Marker.markImage(image_options_rotate20).then((result) => {
      seturl_rotate20(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagerotate_50 = () => {
    Marker.markImage(image_options_rotate50).then((result) => {
      seturl_rotate50(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackrotate_20 = () => {
    Marker.markImage(image_options_backrotate20).then((result) => {
      seturl_backrotate20(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackrotate_50 = () => {
    Marker.markImage(image_options_backrotate50).then((result) => {
      seturl_backrotate50(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image scale
  const markImagescale0_5 = () => {
    Marker.markImage(image_options_scale0_5).then((result) => {
      seturl_scale0_5(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagescale1_5 = () => {
    Marker.markImage(image_options_scale1_5).then((result) => {
      seturl_scale1_5(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackscale0_5 = () => {
    Marker.markImage(image_options_backscale0_5).then((result) => {
      seturl_backscale0_5(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackscale1_5 = () => {
    Marker.markImage(image_options_backscale1_5).then((result) => {
      seturl_backscale1_5(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image alpha
  const markImagealpha0_1 = () => {
    Marker.markImage(image_options_alpha0_1).then((result) => {
      seturl_alpha0_1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagealpha1 = () => {
    Marker.markImage(image_options_alpha1).then((result) => {
      seturl_alpha1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackalpha0_1 = () => {
    Marker.markImage(image_options_backalpha0_1).then((result) => {
      seturl_backalpha0_1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebackalpha1 = () => {
    Marker.markImage(image_options_backalpha1).then((result) => {
      seturl_backalpha1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // position
  const markImagetopleft = () => {
    Marker.markImage(image_options_topLeft).then((result) => {
      seturl_icon_topLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagetopcenter = () => {
    Marker.markImage(image_options_topCenter).then((result) => {
      seturl_icon_topCenter(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagetopright = () => {
    Marker.markImage(image_options_topRight).then((result) => {
      seturl_icon_topRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagecenter = () => {
    Marker.markImage(image_options_center).then((result) => {
      seturl_icon_center(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebottomleft = () => {
    Marker.markImage(image_options_bottomLeft).then((result) => {
      seturl_icon_bottomLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebottomcenter = () => {
    Marker.markImage(image_options_bottomCenter).then((result) => {
      seturl_icon_bottomCenter(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagebottomright = () => {
    Marker.markImage(image_options_bottomRight).then((result) => {
      seturl_icon_bottomRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagexy = () => {
    Marker.markImage(image_options_xy).then((result) => {
      seturl_icon_xy(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markImagexppercentt = () => {
    Marker.markImage(image_options_xypercent).then((result) => {
      seturl_icon_xypercent(result)
    }).catch(error => {
      console.log('error', error)
    })
  }


  // mark text
  // file name
  const [textfile1url, setTextFilename1] = useState('');
  const [textfile2url, setTextFilename2] = useState('');
  // iamge type
  const [textfiletypeurl_png, setTextFileTypePng] = useState('');
  const [textfiletypeurl_jpg, setTextFileTypeJpg] = useState('');
  const [textfiletypeurl_base64, setTextFileTypebase64] = useState('');
  // image quality
  const [textqualityurl_20, setTextqualityurl_20] = useState('');
  const [textqualityurl_100, setTextqualityurl_100] = useState('');
  // image rotate
  const [url_backrotate20_text, seturl_backrotate20_text] = useState('');
  const [url_backrotate50_text, seturl_backrotate50_text] = useState('');
  // image scale
  const [url_backscale0_5_text, seturl_backscale0_5_text] = useState('');
  const [url_backscale1_5_text, seturl_backscale1_5_text] = useState('');

  // text alain
  const [url_text_textalain_left, seturl_text_textalain_left] = useState('');
  const [url_text_textalain_center, seturl_text_textalain_center] = useState('');
  const [url_text_textalain_right, seturl_text_textalain_right] = useState('');
  // image alpha
  const [url_backalpha0_1_text, seturl_backalpha0_1_text] = useState('');
  const [url_backalpha1_text, seturl_backalpha1_text] = useState('');
  // text position
  const [url_text_topLeft, seturl_text_topLeft] = useState('');
  const [url_text_topRight, seturl_text_topRight] = useState('');
  const [url_text_topCenter, seturl_text_topCenter] = useState('');
  const [url_text_bottomLeft, seturl_text_bottomLeft] = useState('');
  const [url_text_bottomCenter, seturl_text_bottomCenter] = useState('');
  const [url_text_bottomRight, seturl_text_bottomRight] = useState('');
  const [url_text_center, seturl_text_center] = useState('');
  const [url_text_xy, seturl_text_xy] = useState('');
  const [url_text_xypercent, seturl_text_xypercent] = useState('');
  // text text test
  const [url_text_test1, seturl_text_test1] = useState('');
  const [url_text_test2, seturl_text_test2] = useState('');

  // text style
  // font color
  const [url_text_color1, seturl_text_color1] = useState('');
  const [url_text_color2, seturl_text_color2] = useState('');
  // font name
  const [url_text_fontName, seturl_text_fontName] = useState('');
  // font size
  const [url_text_fontSize30, seturl_text_fontSize30] = useState('');
  const [url_text_fontSize100, seturl_text_fontSize100] = useState('');
  // font italic
  const [url_text_italic, seturl_text_italic] = useState('');
  const [url_text_skewX, seturl_text_skewX] = useState('');
  // underline
  const [url_text_underline, seturl_text_underline] = useState('');
  //strikeThrough
  const [url_text_strikeThrough, seturl_text_strikeThrough] = useState('');
  // bold
  const [url_text_bold, seturl_text_bold] = useState('');
  //rotate
  const [url_text_rotate30, seturl_text_rotate30] = useState('');
  //rotate
  const [url_text_rotate50, seturl_text_rotate50] = useState('');
  //rotate
  const [url_text_shadowStyle1, seturl_text_shadowStyle1] = useState('');
  //rotate
  const [url_text_shadowStyle2, seturl_text_shadowStyle2] = useState('');
  // text style
  // textBackgroundStyle
  // color
  const [url_text_backgroundstyle_color_red, seturl_text_backgroundstyle_color_red] = useState('');
  const [url_text_backgroundstyle_color_green, seturl_text_backgroundstyle_color_green] = useState('');
  // type
  const [url_text_backgroundstyle_type_stretchX, seturl_text_backgroundstyle_type_stretchX] = useState('');
  const [url_text_backgroundstyle_type_stretchY, seturl_text_backgroundstyle_type_stretchY] = useState('');
  // cornerRadius
  const [url_text_backgroundstyle_cornerRadius_all, seturl_text_backgroundstyle_cornerRadius_all] = useState('');
  const [url_text_backgroundstyle_cornerRadius_topLeft, seturl_text_backgroundstyle_cornerRadius_topLeft] = useState('');
  const [url_text_backgroundstyle_cornerRadius_topRight, seturl_text_backgroundstyle_cornerRadius_topRight] = useState('');
  const [url_text_backgroundstyle_cornerRadius_bottomLeft, seturl_text_backgroundstyle_cornerRadius_bottomLeft] = useState('');
  const [url_text_backgroundstyle_cornerRadius_bottomRight, seturl_text_backgroundstyle_cornerRadius_bottomRight] = useState('');
  // padding
  const [url_text_backgroundstyle_padding_all1, seturl_text_backgroundstyle_padding_all1] = useState('');
  const [url_text_backgroundstyle_padding_all2, seturl_text_backgroundstyle_padding_all2] = useState('');
  const [url_text_backgroundstyle_padding_all3, seturl_text_backgroundstyle_padding_all3] = useState('');
  const [url_text_backgroundstyle_padding_all4, seturl_text_backgroundstyle_padding_all4] = useState('');
  const [url_text_backgroundstyle_padding_left, seturl_text_backgroundstyle_padding_left] = useState('');
  const [url_text_backgroundstyle_padding_right, seturl_text_backgroundstyle_padding_right] = useState('');
  const [url_text_backgroundstyle_padding_top, seturl_text_backgroundstyle_padding_top] = useState('');
  const [url_text_backgroundstyle_padding_bottom, seturl_text_backgroundstyle_padding_bottom] = useState('');
  const [url_text_backgroundstyle_padding_horizontal, seturl_text_backgroundstyle_padding_horizontal] = useState('');
  const [url_text_backgroundstyle_padding_vertical, seturl_text_backgroundstyle_padding_vertical] = useState('');
  const [url_text_backgroundstyle_padding_x, seturl_text_backgroundstyle_padding_x] = useState('');
  const [url_text_backgroundstyle_padding_y, seturl_text_backgroundstyle_padding_y] = useState('');

  // font name
  const text_options_fontName: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        fontName: 'stcaiyun'
      }
    }
    ]
  }

  // textBackgroundStyle
  // italic
  const text_options_italic: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textAlign: 'left',
        italic: true
      }
    }
    ]
  }
  // skewX
  const text_options_skewX: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textAlign: 'center',
        skewX: 0.5,

      }
    }
    ]
  }
  // textalain
  const text_options_textalain_left: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textAlign: 'left'
      }
    }
    ]
  }
  const text_options_textalain_center: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textAlign: 'center'
      }
    }
    ]
  }
  const text_options_textalain_right: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textAlign: 'right'
      }
    }
    ]
  }
  // padding
  const text_options_backgroundstyle_padding_all1: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          padding: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_all2: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          padding: '10% 15%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_all3: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          padding: '10% 15% 20%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_all4: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          padding: '10% 15% 20% 5%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_top: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingTop: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_left: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingLeft: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_right: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingRight: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_bottom: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingBottom: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_horizontal: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingHorizontal: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_vertical: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingVertical: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_x: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingX: '10%'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_padding_y: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00',
          paddingY: '10%'
        }
      }
    }
    ]
  }

  // cornerRadius
  const text_options_backgroundstyle_cornerRadius_all: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        fontSize: 100,
        color: '#FF0000',
        textBackgroundStyle: {
          color: '#0FFF00',
          cornerRadius: { all: { "x": "20%", "y": "30%" } }
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_cornerRadius_topLeft: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          cornerRadius: { topLeft: { "x": "20%", "y": "30%" } },
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_cornerRadius_topRight: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          cornerRadius: { topRight: { "x": "20%", "y": "30%" } },
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_cornerRadius_bottomLeft: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          cornerRadius: { bottomLeft: { "x": "20%", "y": "30%" } },
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_cornerRadius_bottomRight: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          cornerRadius: { bottomRight: { "x": "20%", "y": "30%" } },
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  // type
  const text_options_backgroundstyle_type_stretchX: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          type: TextBackgroundType.stretchX,
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_type_stretchY: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        textBackgroundStyle: {
          type: TextBackgroundType.stretchY,
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  // color
  const text_options_backgroundstyle_color_green: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#000000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#0FFF00'
        }
      }
    }
    ]
  }
  const text_options_backgroundstyle_color_red: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#000000',
        fontSize: 100,
        textBackgroundStyle: {
          color: '#FC0700'
        }
      }
    }
    ]
  }
  // shadowStyle
  const text_options_shadowStyle1: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        shadowStyle: {
          dx: 50,
          dy: 50,
          radius: 10,
          color: '#008F6D'
        }
      }
    }
    ]
  }
  const text_options_shadowStyle2: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        shadowStyle: {
          dx: 50,
          dy: 50,
          radius: 20,
          color: '#FC0700'
        }
      }
    }
    ]
  }

  // bold
  const text_options_bold: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        bold: true
      }
    }
    ]
  }
  //rotate
  const text_options_rotate30: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        rotate: 30
      }
    }
    ]
  }

  const text_options_rotate50: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        rotate: 50
      }
    }
    ]
  }
  // underline
  const text_options_underline: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        underline: true
      }
    }
    ]
  }
  //strikeThrough
  const text_options_strikeThrough: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100,
        strikeThrough: true
      }
    }
    ]
  }
  // font size
  const text_options_fontSize30: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 30
      }
    }
    ]
  }
  const text_options_fontSize100: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FF0000',
        fontSize: 100
      }
    }
    ]
  }
  // font color
  const text_options_color1: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FFFF00',
        fontSize: 100
      }
    }
    ]
  }
  const text_options_color2: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: {
        color: '#FC0700',
        fontSize: 100
      }
    }
    ]
  }
  // text text test
  const text_options_test1: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'text test1',
      style: {
        color: '#FF0000',
        fontSize: 100,
      }
    }
    ]
  }
  const text_options_test2: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'text test2',
      style: {
        color: '#FF0000',
        fontSize: 100,
      }
    }
    ]
  }
  // text position
  const text_options_topLeft: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.topLeft },
      style: {
        color: '#FFFF00',
        fontSize: 100,
      }
    }
    ]
  }
  const text_options_topRight: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.topRight },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_topCenter: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.topCenter },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_bottomLeft: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.bottomLeft },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_bottomCenter: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.bottomCenter },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_bottomRight: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.bottomRight },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_center: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { position: Position.center },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_xy: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { X: 30, Y: 50 },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_xypercent: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      position: { X: '10%', Y: '20%' },
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  // image alpha
  const text_options_backalpha0_1: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      alpha: 0.1
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  const text_options_backalpha1: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      alpha: 1
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }
    ]
  }
  // iamge scale
  const text_options_scale0_5: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      scale: 0.5
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }]
  }
  const text_options_scale1_5: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      scale: 1.5
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }]
  }
  // image rotate
  const text_options_backrotate20: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      rotate: 20
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }]
  }
  const text_options_backrotate50: TextMarkOptions = {
    backgroundImage: {
      src: require('./assets/code-images/1.png'),
      rotate: 50
    },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }]
  }

  // iamge quality
  const text_options_qualityurl_20: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    quality: 20
  }
  const text_options_qualityurl_100: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    quality: 100
  }
  // image file name
  const text_options_filename1: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    filename: 'test1'
  }
  const text_options_filename2: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    filename: 'test2'
  }
  // image type
  const text_options_filetype_png: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    saveFormat: ImageFormat.png
  }
  const text_options_filetyoe_jpg: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    saveFormat: ImageFormat.jpg
  }
  const text_options_filetyoe_base64: TextMarkOptions = {
    backgroundImage: { src: require('./assets/code-images/1.png') },
    watermarkTexts: [{
      text: 'test text',
      style: { color: '#FFFF00', fontSize: 100, }
    }],
    saveFormat: ImageFormat.base64
  }

  // test style
  // font name
  const markTextFontName = () => {
    Marker.markText(text_options_fontName).then((result) => {
      seturl_text_fontName(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // text alain
  const markTextTextAlainLeft = () => {
    Marker.markText(text_options_textalain_left).then((result) => {
      seturl_text_textalain_left(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextTextAlainCenter = () => {
    Marker.markText(text_options_textalain_center).then((result) => {
      seturl_text_textalain_center(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextTextAlainRight = () => {
    Marker.markText(text_options_textalain_right).then((result) => {
      seturl_text_textalain_right(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // textBackgroundStyle padding
  const markTextbackgroundstylePaddingAll1 = () => {
    Marker.markText(text_options_backgroundstyle_padding_all1).then((result) => {
      seturl_text_backgroundstyle_padding_all1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingAll2 = () => {
    Marker.markText(text_options_backgroundstyle_padding_all2).then((result) => {
      seturl_text_backgroundstyle_padding_all2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingAll3 = () => {
    Marker.markText(text_options_backgroundstyle_padding_all3).then((result) => {
      seturl_text_backgroundstyle_padding_all3(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingAll4 = () => {
    Marker.markText(text_options_backgroundstyle_padding_all4).then((result) => {
      seturl_text_backgroundstyle_padding_all4(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingTop = () => {
    Marker.markText(text_options_backgroundstyle_padding_top).then((result) => {
      seturl_text_backgroundstyle_padding_top(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingLeft = () => {
    Marker.markText(text_options_backgroundstyle_padding_left).then((result) => {
      seturl_text_backgroundstyle_padding_left(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingRight = () => {
    Marker.markText(text_options_backgroundstyle_padding_right).then((result) => {
      seturl_text_backgroundstyle_padding_right(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingBottom = () => {
    Marker.markText(text_options_backgroundstyle_padding_bottom).then((result) => {
      seturl_text_backgroundstyle_padding_bottom(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingHorizontal = () => {
    Marker.markText(text_options_backgroundstyle_padding_horizontal).then((result) => {
      seturl_text_backgroundstyle_padding_horizontal(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingVertical = () => {
    Marker.markText(text_options_backgroundstyle_padding_vertical).then((result) => {
      seturl_text_backgroundstyle_padding_vertical(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingX = () => {
    Marker.markText(text_options_backgroundstyle_padding_x).then((result) => {
      seturl_text_backgroundstyle_padding_x(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstylePaddingY = () => {
    Marker.markText(text_options_backgroundstyle_padding_y).then((result) => {
      seturl_text_backgroundstyle_padding_y(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // textBackgroundStyle cornerRadius
  const markTextbackgroundstyleCornerRadiusAll = () => {
    Marker.markText(text_options_backgroundstyle_cornerRadius_all).then((result) => {
      seturl_text_backgroundstyle_cornerRadius_all(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleCornerRadiustopLeft = () => {
    Marker.markText(text_options_backgroundstyle_cornerRadius_topLeft).then((result) => {
      seturl_text_backgroundstyle_cornerRadius_topLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleCornerRadiustopRight = () => {
    Marker.markText(text_options_backgroundstyle_cornerRadius_topRight).then((result) => {
      seturl_text_backgroundstyle_cornerRadius_topRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleCornerRadiusbottomLeft = () => {
    Marker.markText(text_options_backgroundstyle_cornerRadius_bottomLeft).then((result) => {
      seturl_text_backgroundstyle_cornerRadius_bottomLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleCornerRadiusbottomRight = () => {
    Marker.markText(text_options_backgroundstyle_cornerRadius_bottomRight).then((result) => {
      seturl_text_backgroundstyle_cornerRadius_bottomRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // textBackgroundStyle type
  const markTextbackgroundstyleTypeStretchX = () => {
    Marker.markText(text_options_backgroundstyle_type_stretchX).then((result) => {
      seturl_text_backgroundstyle_type_stretchX(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleTypeStretchY = () => {
    Marker.markText(text_options_backgroundstyle_type_stretchY).then((result) => {
      seturl_text_backgroundstyle_type_stretchY(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // textBackgroundStyle color
  const markTextbackgroundstyleColorRed = () => {
    Marker.markText(text_options_backgroundstyle_color_red).then((result) => {
      seturl_text_backgroundstyle_color_red(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackgroundstyleColorGreen = () => {
    Marker.markText(text_options_backgroundstyle_color_green).then((result) => {
      seturl_text_backgroundstyle_color_green(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // shadowstyle
  const markTextShadowStyle1 = () => {
    Marker.markText(text_options_shadowStyle1).then((result) => {
      seturl_text_shadowStyle1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextShadowStyle2 = () => {
    Marker.markText(text_options_shadowStyle2).then((result) => {
      seturl_text_shadowStyle2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // bold
  const markTextFontBold = () => {
    Marker.markText(text_options_bold).then((result) => {
      seturl_text_bold(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // rotate
  const markTextRotate30 = () => {
    Marker.markText(text_options_rotate30).then((result) => {
      seturl_text_rotate30(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextRotate50 = () => {
    Marker.markText(text_options_rotate50).then((result) => {
      seturl_text_rotate50(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // strikeThrough
  const markTextFontStrikeThrough = () => {
    Marker.markText(text_options_strikeThrough).then((result) => {
      seturl_text_strikeThrough(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // underline
  const markTextUnderline = () => {
    Marker.markText(text_options_underline).then((result) => {
      seturl_text_underline(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // skewX
  const markTextskewX = () => {
    Marker.markText(text_options_skewX).then((result) => {
      seturl_text_skewX(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // text font italic
  const markTextFontItalic = () => {
    Marker.markText(text_options_italic).then((result) => {
      seturl_text_italic(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // text font size
  const markTextFontSize30 = () => {
    Marker.markText(text_options_fontSize30).then((result) => {
      seturl_text_fontSize30(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextFontSize100 = () => {
    Marker.markText(text_options_fontSize100).then((result) => {
      seturl_text_fontSize100(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // text color
  const markTextColor1 = () => {
    Marker.markText(text_options_color1).then((result) => {
      seturl_text_color1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextColor2 = () => {
    Marker.markText(text_options_color2).then((result) => {
      seturl_text_color2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // text test
  const markTextText1 = () => {
    Marker.markText(text_options_test1).then((result) => {
      seturl_text_test1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextText2 = () => {
    Marker.markText(text_options_test2).then((result) => {
      seturl_text_test2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image file name
  const markTextFilename1 = () => {
    Marker.markText(text_options_filename1).then((result) => {
      setTextFilename1(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextFilename2 = () => {
    Marker.markText(text_options_filename2).then((result) => {
      setTextFilename2(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image type
  const markTextFiletypepng = () => {
    Marker.markText(text_options_filetype_png).then((result) => {
      setTextFileTypePng(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextFiletypejpg = () => {
    Marker.markText(text_options_filetyoe_jpg).then((result) => {
      setTextFileTypeJpg(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextFiletypebase64 = () => {
    Marker.markText(text_options_filetyoe_base64).then((result) => {
      setTextFileTypebase64(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image quality
  const markTextqualityurl_20 = () => {
    Marker.markText(text_options_qualityurl_20).then((result) => {
      setTextqualityurl_20(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextqualityurl_100 = () => {
    Marker.markText(text_options_qualityurl_100).then((result) => {
      setTextqualityurl_100(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image rotate
  const markTextbackrotate_20 = () => {
    Marker.markText(text_options_backrotate20).then((result) => {
      seturl_backrotate20_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackrotate_50 = () => {
    Marker.markText(text_options_backrotate50).then((result) => {
      seturl_backrotate50_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image scale
  const markTextbackscale0_5 = () => {
    Marker.markText(text_options_scale0_5).then((result) => {
      seturl_backscale0_5_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackscale1_5 = () => {
    Marker.markText(text_options_scale1_5).then((result) => {
      seturl_backscale1_5_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // image alpha
  const markTextbackalpha0_1 = () => {
    Marker.markText(text_options_backalpha0_1).then((result) => {
      seturl_backalpha0_1_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbackalpha1 = () => {
    Marker.markText(text_options_backalpha1).then((result) => {
      seturl_backalpha1_text(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  // position
  const markTexttopleft = () => {
    Marker.markText(text_options_topLeft).then((result) => {
      seturl_text_topLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTexttopcenter = () => {
    Marker.markText(text_options_topCenter).then((result) => {
      seturl_text_topCenter(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTexttopright = () => {
    Marker.markText(text_options_topRight).then((result) => {
      seturl_text_topRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextcenter = () => {
    Marker.markText(text_options_center).then((result) => {
      seturl_text_center(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbottomleft = () => {
    Marker.markText(text_options_bottomLeft).then((result) => {
      seturl_text_bottomLeft(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbottomcenter = () => {
    Marker.markText(text_options_bottomCenter).then((result) => {
      seturl_text_bottomCenter(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextbottomright = () => {
    Marker.markText(text_options_bottomRight).then((result) => {
      seturl_text_bottomRight(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextxy = () => {
    Marker.markText(text_options_xy).then((result) => {
      seturl_text_xy(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const markTextxppercentt = () => {
    Marker.markText(text_options_xypercent).then((result) => {
      seturl_text_xypercent(result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"network_image"}
          </Text>
          <Button
            title="network_image "
            color="#9a73ef"
            onPress={markImageNetWorkImage}
          />
          <Text style={styles.sectionTitle}>
            {netWorkImageUrl}
          </Text>
          <Image resizeMode='contain' source={{ uri: netWorkImageUrl, width: 300, height: 150 }} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_topleft "
            color="#9a73ef"
            onPress={markImagetopleft}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_topLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_topLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_topright "
            color="#9a73ef"
            onPress={markImagetopright}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_topRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_topRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_topcenter "
            color="#9a73ef"
            onPress={markImagetopcenter}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_topCenter}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_topCenter, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_bottomleft "
            color="#9a73ef"
            onPress={markImagebottomleft}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_bottomLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_bottomLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_bottomcenter "
            color="#9a73ef"
            onPress={markImagebottomcenter}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_bottomCenter}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_bottomCenter, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_bottomright "
            color="#9a73ef"
            onPress={markImagebottomright}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_bottomRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_bottomRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_center "
            color="#9a73ef"
            onPress={markImagecenter}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_center}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_center, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_xy "
            color="#9a73ef"
            onPress={markImagexy}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_xy}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_xy, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_xypercent "
            color="#9a73ef"
            onPress={markImagexppercentt}
          />
          <Text style={styles.sectionTitle}>
            {url_icon_xypercent}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_icon_xypercent, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_alpha0_1 "
            color="#9a73ef"
            onPress={markImagebackalpha0_1}
          />
          <Text style={styles.sectionTitle}>
            {url_backalpha0_1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backalpha0_1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_alpha1"
            color="#9a73ef"
            onPress={markImagebackalpha1}
          />
          <Text style={styles.sectionTitle}>
            {url_backalpha1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backalpha1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_alpha0_1 "
            color="#9a73ef"
            onPress={markImagealpha0_1}
          />
          <Text style={styles.sectionTitle}>
            {url_alpha0_1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_alpha0_1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_alpha1"
            color="#9a73ef"
            onPress={markImagealpha1}
          />
          <Text style={styles.sectionTitle}>
            {url_alpha1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_alpha1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_scale0_5 "
            color="#9a73ef"
            onPress={markImagebackscale0_5}
          />
          <Text style={styles.sectionTitle}>
            {url_backscale0_5}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backscale0_5, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_scale1_5"
            color="#9a73ef"
            onPress={markImagebackscale1_5}
          />
          <Text style={styles.sectionTitle}>
            {url_backscale1_5}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backscale1_5, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_scale0_5 "
            color="#9a73ef"
            onPress={markImagescale0_5}
          />
          <Text style={styles.sectionTitle}>
            {url_scale0_5}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_scale0_5, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_scale1_5"
            color="#9a73ef"
            onPress={markImagescale1_5}
          />
          <Text style={styles.sectionTitle}>
            {url_scale1_5}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_scale1_5, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_rotate_50 "
            color="#9a73ef"
            onPress={markImagebackrotate_50}
          />
          <Text style={styles.sectionTitle}>
            {url_backrotate50}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backrotate50, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_rotate_20"
            color="#9a73ef"
            onPress={markImagebackrotate_20}
          />
          <Text style={styles.sectionTitle}>
            {url_backrotate20}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backrotate20, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_rotate_50 "
            color="#9a73ef"
            onPress={markImagerotate_50}
          />
          <Text style={styles.sectionTitle}>
            {url_rotate50}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_rotate50, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="icon_rotate_20"
            color="#9a73ef"
            onPress={markImagerotate_20}
          />
          <Text style={styles.sectionTitle}>
            {url_rotate20}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_rotate20, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="qualityurl_100 "
            color="#9a73ef"
            onPress={markImagequalityurl_100}
          />
          <Text style={styles.sectionTitle}>
            {qualityurl_100}
          </Text>
          <Image resizeMode='contain' source={{ uri: qualityurl_100, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="qualityurl_20"
            color="#9a73ef"
            onPress={markImagequalityurl_20}
          />
          <Text style={styles.sectionTitle}>
            {qualityurl_20}
          </Text>
          <Image resizeMode='contain' source={{ uri: qualityurl_20, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filename test1"
            color="#9a73ef"
            onPress={markImageFilename1}
          />
          <Text style={styles.sectionTitle}>
            {file1url}
          </Text>
          <Image resizeMode='contain' source={{ uri: file1url, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filename test2"
            color="#9a73ef"
            onPress={markImageFilename2}
          />
          <Text style={styles.sectionTitle}>
            {file2url}
          </Text>
          <Image resizeMode='contain' source={{ uri: file2url, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filetype png"
            color="#9a73ef"
            onPress={markImageFiletypepng}
          />
          <Text style={styles.sectionTitle}>
            {filetypeurl_png}
          </Text>
          <Image resizeMode='contain' source={{ uri: filetypeurl_png, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="file type jpg"
            color="#9a73ef"
            onPress={markImageFiletypejpg}
          />
          <Text style={styles.sectionTitle}>
            {filetypeurl_jpg}
          </Text>
          <Image resizeMode='contain' source={{ uri: filetypeurl_jpg, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="file type base64"
            color="#9a73ef"
            onPress={markImageFiletypebase64}
          />
          <Text style={styles.sectionTitle} ellipsizeMode="tail"
            numberOfLines={1}>
            {filetypeurl_base64}
          </Text>
          <Image resizeMode='contain' source={{ uri: filetypeurl_base64, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_fontName"
            color="#9a73ef"
            onPress={markTextFontName}
          />
          <Text style={styles.sectionTitle}>
            {url_text_fontName}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_fontName, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_textalain_left "
            color="#9a73ef"
            onPress={markTextTextAlainLeft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_textalain_left}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_textalain_left, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_textalain_center "
            color="#9a73ef"
            onPress={markTextTextAlainCenter}
          />
          <Text style={styles.sectionTitle}>
            {url_text_textalain_center}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_textalain_center, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_textalain_right "
            color="#9a73ef"
            onPress={markTextTextAlainRight}
          />
          <Text style={styles.sectionTitle}>
            {url_text_textalain_right}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_textalain_right, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_skewX "
            color="#9a73ef"
            onPress={markTextskewX}
          />
          <Text style={styles.sectionTitle}>
            {url_text_skewX}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_skewX, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_italic "
            color="#9a73ef"
            onPress={markTextFontItalic}
          />
          <Text style={styles.sectionTitle}>
            {url_text_italic}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_italic, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_fontSize_100 "
            color="#9a73ef"
            onPress={markTextFontSize100}
          />
          <Text style={styles.sectionTitle}>
            {url_text_fontSize100}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_fontSize100, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_fontSize_30 "
            color="#9a73ef"
            onPress={markTextFontSize30}
          />
          <Text style={styles.sectionTitle}>
            {url_text_fontSize30}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_fontSize30, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_color_red "
            color="#9a73ef"
            onPress={markTextColor2}
          />
          <Text style={styles.sectionTitle}>
            {url_text_color2}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_color2, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_color_yellow "
            color="#9a73ef"
            onPress={markTextColor1}
          />
          <Text style={styles.sectionTitle}>
            {url_text_color1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_color1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_test1 "
            color="#9a73ef"
            onPress={markTextText1}
          />
          <Text style={styles.sectionTitle}>
            {url_text_test1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_test1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_test2 "
            color="#9a73ef"
            onPress={markTextText2}
          />
          <Text style={styles.sectionTitle}>
            {url_text_test2}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_test2, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_all1 "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingAll1}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_all1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_all1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_all2 "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingAll2}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_all2}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_all2, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_all3 "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingAll3}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_all3}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_all3, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_all4 "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingAll4}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_all4}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_all4, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_top "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingTop}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_top}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_top, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_bottom "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingBottom}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_bottom}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_bottom, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_left "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingLeft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_left}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_left, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_right "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingRight}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_right}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_right, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_horizontal "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingHorizontal}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_horizontal}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_horizontal, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_vertical "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingVertical}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_vertical}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_vertical, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_x "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingX}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_x}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_x, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_padding_y "
            color="#9a73ef"
            onPress={markTextbackgroundstylePaddingY}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_padding_y}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_padding_y, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_cornerRadius_all "
            color="#9a73ef"
            onPress={markTextbackgroundstyleCornerRadiusAll}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_cornerRadius_all}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_cornerRadius_all, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_cornerRadius_topLeft "
            color="#9a73ef"
            onPress={markTextbackgroundstyleCornerRadiustopLeft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_cornerRadius_topLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_cornerRadius_topLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_cornerRadius_topRight "
            color="#9a73ef"
            onPress={markTextbackgroundstyleCornerRadiustopRight}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_cornerRadius_topRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_cornerRadius_topRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_cornerRadius_bottomLeft "
            color="#9a73ef"
            onPress={markTextbackgroundstyleCornerRadiusbottomLeft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_cornerRadius_bottomLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_cornerRadius_bottomLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_cornerRadius_bottomRight "
            color="#9a73ef"
            onPress={markTextbackgroundstyleCornerRadiusbottomRight}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_cornerRadius_bottomRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_cornerRadius_bottomRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_type_stretchX "
            color="#9a73ef"
            onPress={markTextbackgroundstyleTypeStretchX}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_type_stretchX}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_type_stretchX, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_type_stretchY "
            color="#9a73ef"
            onPress={markTextbackgroundstyleTypeStretchY}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_type_stretchY}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_type_stretchY, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_color_green "
            color="#9a73ef"
            onPress={markTextbackgroundstyleColorGreen}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_color_green}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_color_green, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_backgroundStyle_color_red "
            color="#9a73ef"
            onPress={markTextbackgroundstyleColorRed}
          />
          <Text style={styles.sectionTitle}>
            {url_text_backgroundstyle_color_red}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_backgroundstyle_color_red, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_shadowStyle1 "
            color="#9a73ef"
            onPress={markTextShadowStyle1}
          />
          <Text style={styles.sectionTitle}>
            {url_text_shadowStyle1}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_shadowStyle1, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_shadowStyle2 "
            color="#9a73ef"
            onPress={markTextShadowStyle2}
          />
          <Text style={styles.sectionTitle}>
            {url_text_shadowStyle2}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_shadowStyle2, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_bold "
            color="#9a73ef"
            onPress={markTextFontBold}
          />
          <Text style={styles.sectionTitle}>
            {url_text_bold}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_bold, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_rotate30 "
            color="#9a73ef"
            onPress={markTextRotate30}
          />
          <Text style={styles.sectionTitle}>
            {url_text_rotate30}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_rotate30, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_rotate50 "
            color="#9a73ef"
            onPress={markTextRotate50}
          />
          <Text style={styles.sectionTitle}>
            {url_text_rotate50}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_rotate50, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_underline "
            color="#9a73ef"
            onPress={markTextUnderline}
          />
          <Text style={styles.sectionTitle}>
            {url_text_underline}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_underline, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_strikeThrough "
            color="#9a73ef"
            onPress={markTextFontStrikeThrough}
          />
          <Text style={styles.sectionTitle}>
            {url_text_strikeThrough}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_strikeThrough, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_topleft "
            color="#9a73ef"
            onPress={markTexttopleft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_topLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_topLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_topright "
            color="#9a73ef"
            onPress={markTexttopright}
          />
          <Text style={styles.sectionTitle}>
            {url_text_topRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_topRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_topcenter "
            color="#9a73ef"
            onPress={markTexttopcenter}
          />
          <Text style={styles.sectionTitle}>
            {url_text_topCenter}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_topCenter, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_bottomleft "
            color="#9a73ef"
            onPress={markTextbottomleft}
          />
          <Text style={styles.sectionTitle}>
            {url_text_bottomLeft}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_bottomLeft, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_bottomcenter "
            color="#9a73ef"
            onPress={markTextbottomcenter}
          />
          <Text style={styles.sectionTitle}>
            {url_text_bottomCenter}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_bottomCenter, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_bottomright "
            color="#9a73ef"
            onPress={markTextbottomright}
          />
          <Text style={styles.sectionTitle}>
            {url_text_bottomRight}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_bottomRight, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_center "
            color="#9a73ef"
            onPress={markTextcenter}
          />
          <Text style={styles.sectionTitle}>
            {url_text_center}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_center, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_xy "
            color="#9a73ef"
            onPress={markTextxy}
          />
          <Text style={styles.sectionTitle}>
            {url_text_xy}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_xy, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="text_xypercent "
            color="#9a73ef"
            onPress={markTextxppercentt}
          />
          <Text style={styles.sectionTitle}>
            {url_text_xypercent}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_text_xypercent, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_alpha0_1 "
            color="#9a73ef"
            onPress={markTextbackalpha0_1}
          />
          <Text style={styles.sectionTitle}>
            {url_backalpha0_1_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backalpha0_1_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_alpha1"
            color="#9a73ef"
            onPress={markTextbackalpha1}
          />
          <Text style={styles.sectionTitle}>
            {url_backalpha1_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backalpha1_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_scale0_5 "
            color="#9a73ef"
            onPress={markTextbackscale0_5}
          />
          <Text style={styles.sectionTitle}>
            {url_backscale0_5_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backscale0_5_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_scale1_5"
            color="#9a73ef"
            onPress={markTextbackscale1_5}
          />
          <Text style={styles.sectionTitle}>
            {url_backscale1_5_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backscale1_5_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_rotate_50 "
            color="#9a73ef"
            onPress={markTextbackrotate_50}
          />
          <Text style={styles.sectionTitle}>
            {url_backrotate50_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backrotate50_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="back_rotate_20"
            color="#9a73ef"
            onPress={markTextbackrotate_20}
          />
          <Text style={styles.sectionTitle}>
            {url_backrotate20_text}
          </Text>
          <Image resizeMode='contain' source={{ uri: url_backrotate20_text, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="qualityurl_100 "
            color="#9a73ef"
            onPress={markTextqualityurl_100}
          />
          <Text style={styles.sectionTitle}>
            {textqualityurl_100}
          </Text>
          <Image resizeMode='contain' source={{ uri: textqualityurl_100, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="qualityurl_20"
            color="#9a73ef"
            onPress={markTextqualityurl_20}
          />
          <Text style={styles.sectionTitle}>
            {textqualityurl_20}
          </Text>
          <Image resizeMode='contain' source={{ uri: textqualityurl_20, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filename test1"
            color="#9a73ef"
            onPress={markTextFilename1}
          />
          <Text style={styles.sectionTitle}>
            {textfile1url}
          </Text>
          <Image resizeMode='contain' source={{ uri: textfile1url, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filename test2"
            color="#9a73ef"
            onPress={markTextFilename2}
          />
          <Text style={styles.sectionTitle}>
            {textfile2url}
          </Text>
          <Image resizeMode='contain' source={{ uri: textfile2url, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="filetype png"
            color="#9a73ef"
            onPress={markTextFiletypepng}
          />
          <Text style={styles.sectionTitle}>
            {textfiletypeurl_png}
          </Text>
          <Image resizeMode='contain' source={{ uri: textfiletypeurl_png, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="file type jpg"
            color="#9a73ef"
            onPress={markTextFiletypejpg}
          />
          <Text style={styles.sectionTitle}>
            {textfiletypeurl_jpg}
          </Text>
          <Image resizeMode='contain' source={{ uri: textfiletypeurl_jpg, width: 300, height: 150 }} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {"image marker"}
          </Text>
          <Button
            title="file type base64"
            color="#9a73ef"
            onPress={markTextFiletypebase64}
          />
          <Text style={styles.sectionTitle} ellipsizeMode="tail"
            numberOfLines={1}>
            {textfiletypeurl_base64}
          </Text>
          <Image resizeMode='contain' source={{ uri: textfiletypeurl_base64, width: 300, height: 150 }} />
        </View>
      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginBottom: 30,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
  }
});