export enum FlashMode {
    /**
     * Close mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FLASH_MODE_CLOSE = 0,
    /**
     * Open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FLASH_MODE_OPEN = 1,
    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FLASH_MODE_AUTO = 2,
    /**
     * Always open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FLASH_MODE_ALWAYS_OPEN = 3,
  }
  export enum FocusMode {
    /**
     * Manual mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FOCUS_MODE_MANUAL = 0,
    /**
     * Continuous auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FOCUS_MODE_CONTINUOUS_AUTO = 1,
    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FOCUS_MODE_AUTO = 2,
    /**
     * Locked mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    FOCUS_MODE_LOCKED = 3
  }
  export enum CameraType {
    Front = 'front',
    Back = 'back',
  }