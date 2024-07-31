import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  createBox,
  createRestyleComponent,
  createText,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  spacing,
  SpacingProps,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps,
  VariantProps,
  visible,
  VisibleProps,
} from '@shopify/restyle';
import {Theme} from '../creatTheme/theme';

export const BackgroundRestyle = (props:BackgroundColorProps<Theme>) => {
type Props = BackgroundColorProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
  const Text = createText<Theme>()
  const Box  = createBox<Theme>()
  const Card = createRestyleComponent<
  Props,
  Theme
>([backgroundColor],Box);
  return (
    <Card {...props} variant='elevated'>
      <Text >backgroundColorRestyle</Text>
    </Card>
  )
}

export const ColorRestyle = (props:ColorProps<Theme>) => {
  type Props = ColorProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
    const Text = createText<Theme>()
    const Box  = createBox<Theme>()
    const Card = createRestyleComponent<
    Props,
    Theme
  >([color],Box);
    return (
      <Card variant='elevated'>
        <Text {...props}  >backgroundColorRestyle</Text>
      </Card>
    )
  }
  export const OpacityRestyle = (props:OpacityProps<Theme>) => {
    type Props = OpacityProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
      const Text = createText<Theme>()
      const Box  = createBox<Theme>()
      const Card = createRestyleComponent<
      Props,
      Theme
    >([opacity],Box);
      return (
        <Card variant='elevated'>
          <Text {...props}  >backgroundColorRestyle</Text>
        </Card>
      )
    }

    export const VisibleRestyle = (props:VisibleProps<Theme>) => {
      type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
        const Text = createText<Theme>()
        const Box  = createBox<Theme>()
        const Card = createRestyleComponent<
        Props,
        Theme
      >([visible],Box);
        return (
          <Card variant='elevated'>
            <Text {...props}  >visible</Text>
          </Card>
        )
      }
    export const SpacingRestyle = (props:SpacingProps<Theme>) => {
      type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
        const Text = createText<Theme>()
        const Box  = createBox<Theme>()
        const Card = createRestyleComponent<
        Props,
        Theme
      >([spacing],Box);
        return (
          <Card variant='elevated'>
            <Text {...props}  >spacing</Text>
          </Card>
        )
      }

      export const LayoutRestyle = (props:LayoutProps<Theme>|BackgroundColorProps<Theme>) => {
        type Props = LayoutProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
          const Text = createText<Theme>()
          const Box  = createBox<Theme>()
          const Card = createRestyleComponent<
          Props,
          Theme
        >([layout,backgroundColor],Box);
          return (
            <Card {...props}  variant='elevated'>
              <Text>layout</Text>
            </Card>
          )
        }

        export const PositionRestyle = (props:PositionProps<Theme>|BackgroundColorProps<Theme>) => {
          type Props = PositionProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
            const Text = createText<Theme>()
            const Box  = createBox<Theme>()
            const Card = createRestyleComponent<
            Props,
            Theme
          >([position],Box);
            return (
              <Card {...props}  variant='elevated'>
                <Text>layout</Text>
              </Card>
            )
          }

          export const BorderRestyle = (props:BorderProps<Theme>|BackgroundColorProps<Theme>) => {
            type Props = BorderProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
              const Text = createText<Theme>()
              const Box  = createBox<Theme>()
              const Card = createRestyleComponent<
              Props,
              Theme
            >([border],Box);
              return (
                <Card {...props}  variant='elevated'>
                  <Text>layout</Text>
                </Card>
              )
            }

            export const ShadowRestyle = (props: ShadowProps<Theme>|BackgroundColorProps<Theme>|LayoutProps<Theme>) => {
              type Props = ShadowProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
                const Text = createText<Theme>()
                const Box  = createBox<Theme>()
                const Card = createRestyleComponent<
                Props,
                Theme
              >([shadow,layout],Box);
                return (
                  <Card {...props} variant='elevated'>
                    <Text  {...props} >layout</Text>
                  </Card>
                )
              }

              export const TextShadowRestyle = (props:TextShadowProps<Theme>|BackgroundColorProps<Theme>|LayoutProps<Theme>) => {
                type Props = TextShadowProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
                  const Text = createText<Theme>()
                  const Box  = createBox<Theme>()
                  const Card = createRestyleComponent<
                  Props,
                  Theme
                >([textShadow,layout],Box);
                  return (
                    <Card {...props} variant='elevated'>
                      <Text  {...props} >layout</Text>
                    </Card>
                  )
                }

              export const TypographyRestyle = (props:TypographyProps<Theme>) => {
                type Props = TypographyProps<Theme> & VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>;
                  const Text = createText<Theme>()
                  const Box  = createBox<Theme>()
                  const Card = createRestyleComponent<
                  Props,
                  Theme
                >([typography],Box);
                  return (
                    <Card variant='elevated'>
                      <Text  {...props} >layout</Text>
                    </Card>
                  )
                }
    
  

  
