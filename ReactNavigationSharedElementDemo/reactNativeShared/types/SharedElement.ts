import {
  SharedElementAnimation,
  SharedElementResize,
  SharedElementAlign,
} from "react-native-shared-element";

export interface SharedElementStrictConfig {
  readonly id: string;
  readonly otherId: string;
  readonly animation: SharedElementAnimation;
  readonly resize?: SharedElementResize;
  readonly align?: SharedElementAlign;
  readonly debug?: boolean;
}

export interface SharedElemenLooseConfig {
  readonly id: string;
  readonly otherId?: string;
  readonly animation?: SharedElementAnimation;
  readonly resize?: SharedElementResize;
  readonly align?: SharedElementAlign;
  readonly debug?: boolean;
}

export type SharedElementsStrictConfig = SharedElementStrictConfig[];

export type SharedElementConfig = SharedElemenLooseConfig | string;

export type SharedElementsConfig = SharedElementConfig[];

export function normalizeSharedElementConfig(
  sharedElementConfig: SharedElementConfig
): SharedElementStrictConfig {
  if (typeof sharedElementConfig === "string") {
    return {
      id: sharedElementConfig,
      otherId: sharedElementConfig,
      animation: "move",
    };
  } else {
    const { id, otherId, animation, ...other } = sharedElementConfig;
    return {
      id,
      otherId: otherId || id,
      animation: animation || "move",
      ...other,
    };
  }
}

export function normalizeSharedElementsConfig(
  sharedElementsConfig?: SharedElementsConfig | void
): SharedElementsStrictConfig | void {
  if (!sharedElementsConfig || !sharedElementsConfig.length) return;
  return sharedElementsConfig.map(normalizeSharedElementConfig);
}
