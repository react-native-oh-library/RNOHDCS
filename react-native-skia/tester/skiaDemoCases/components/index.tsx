import Shapes_Ellipses from './Skia_Shapes_Ellipses';
import Shapes_Box from './Skia_Shapes_Box';
import Shapes_Path from './Skia_Shapes_Path';
import Shapes_Polygons from './Skia_Shapes_Polygons';
import Shapes_Atlas from './Skia_Shapes_Atlas';
import Shapes_Vertices from './Skia_Shapes_Vertices';
import Shapes_Patch from './Skia_Shapes_Patch';
import Shapes_Picture from './Skia_Shapes_Picture';
import ImageFilters_Overview from './Skia_ImageFilters_Overview';
import ImageFilters_Shadows from './Skia_ImageFilters_Shadows';
import ImageFilters_Blur from './Skia_ImageFilters_Blur';
import ImageFilters_DisplacementMap from './Skia_ImageFilters_DisplacementMap';
import ImageFilters_Offset from './Skia_ImageFilters_Offset';
import ImageFilters_Morphology from './Skia_ImageFilters_Morphology';
import ImageFilters_RuntimeShader from './Skia_ImageFilters_RuntimeShader';
import Images from './Skia_Images';
import Text from './Skia_Text';
import Canvas from './Skia_Canvas';
import Group from './Skia_Group';
import Painting from './Skia_Painting';
import Mask from './Skia_Mask';
import MaskFilters from './Skia_MaskFilters';
import Shaders_Language from './Skia_Shaders_Language';
import Shaders_Gradients from './Skia_Shaders_Gradients';
import Shaders_PerlinNoise from './Skia_Shaders_PerlinNoise';
import Shaders_Image from './Skia_Shaders_Image';
import Shaders_BlendingAndColors from './Skia_Shaders_BlendingAndColors';
import BackdropFilters from './Skia_BackdropFilters';
import PathEffect from './Skia_PathEffect';
import Animations_Animations from './Skia_Animations';
import Video from './Skia_Video';
import ColorFilters from './Skia_ColorFilters';

import ZgenPath from './genPath';
import ZgenRect from './genRect';
import ZgenRoundedRect from './genRoundedRect';
import ZgenDiffRect from './genDiffRect';
import ZgenLine from './genLine';
import ZgenPoints from './genPoints';
import ZgenCircle from './genCircle';
import ZgenOval from './genOval';
import ZgenAtlas from './genAtlas';
import ZgenVertices from './genVertices';
import ZgenPatch from './genPatch';
import ZgenPicture from './genPicture';
import ZgenImage from './genImage';
import ZgenImageSVG from './genImageSVG';
import ZgenParagraph from './genParagraph';
import ZgenText from './genText';
import ZgenGlyphs from './genGlyphs';
import ZgenTextPath from './genTextPath';
import ZgenTextBlob from './genTextBlob';
import ZgenDiscretePathEffect from './genDiscretePathEffect';
import ZgenDashPathEffect from './genDashPathEffect';
import ZgenCornerPathEffect from './genCornerPathEffect';
import ZgenPath1DPathEffect from './genPath1DPathEffect';
import ZgenPath2DPathEffect from './genPath2DPathEffect';
import ZgenLine2DPathEffect from './genLine2DPathEffect';
import ZgenLinearGradient from './genLinearGradient';
import ZgenRadialGradient from './genRadialGradient';
import ZgenTwoPointConicalGradient from './genTwoPointConicalGradient';
import ZgenSweepGradient from './genSweepGradient';
import ZgenImageShader from './genImageShader';
import ZgenBlur from './genBlur';
import ZgenMorphology from './genMorphology';
import ZgenBlurMask from './genBlurMask';

export default {
  ZgenPath,
  ZgenRect,
  ZgenRoundedRect,
  ZgenDiffRect,
  ZgenLine,
  ZgenPoints,
  ZgenCircle,
  ZgenOval,
  ZgenAtlas,
  ZgenVertices,
  ZgenPatch,
  ZgenPicture,
  ZgenImage,
  ZgenImageSVG,
  ZgenParagraph,
  ZgenText,
  ZgenGlyphs,
  ZgenTextPath,
  ZgenTextBlob,
  ZgenDiscretePathEffect,
  ZgenDashPathEffect,
  ZgenCornerPathEffect,
  ZgenPath1DPathEffect,
  ZgenPath2DPathEffect,
  ZgenLine2DPathEffect,
  ZgenLinearGradient,
  ZgenRadialGradient,
  ZgenTwoPointConicalGradient,
  ZgenSweepGradient,
  ZgenImageShader,
  ZgenBlur,
  ZgenMorphology,
  ZgenBlurMask,

  Canvas, //1：Canvas
  Painting, //0：Painting
  Group, //1：Group
  // Shapes_Ellipses,
  Shapes_Box, //2：Box、BoxShadow
  // Shapes_Path,
  // Shapes_Polygons,
  // Shapes_Atlas,
  // Shapes_Vertices,
  // Shapes_Patch,
  // Shapes_Picture,
  Images, //-2：Image、ImageSVG,1接口
  // Text,
  Shaders_Language, //1：Shader
  // Shaders_Gradients,
  Shaders_PerlinNoise, //2：FractalNoise、Turbulence
  Shaders_BlendingAndColors, //2：Blend、ColorShader
  // Shaders_Image,
  ImageFilters_Overview, //1：ColorMatrix
  ImageFilters_Shadows, //1：Shadow
  ImageFilters_Blur,
  ImageFilters_DisplacementMap, //1：DisplacementMap
  ImageFilters_Offset, //1：Offset
  ImageFilters_Morphology,
  ImageFilters_RuntimeShader, //1：RuntimeShader
  BackdropFilters, //2：BackdropFilter、BackdropBlur
  // MaskFilters,
  ColorFilters, //4：BlendColor、Lerp、LinearToSRGBGamma、SRGBToLinearGamma
  Mask, //1：Mask

  PathEffect,
  // Animations_Animations,
  // Video,
};
//54组件
