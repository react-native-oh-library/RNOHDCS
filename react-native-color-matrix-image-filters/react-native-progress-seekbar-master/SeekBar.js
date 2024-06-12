import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

export default class SeekBar extends Component {
    containerLeft = 0;
    progressLeft = 0;
    progressRight = 0;

    // 默认props
    static defaultProps = {
        progressHeight: 4,
        progressBackgroundColor: '#666666',
        progressColor: '#cccccc',
        thumbSize: 12,      // thumbSize为0则进度条不可拖动
        thumbColor: '#dddddd',
        thumbColorPressed: '#eeeeee',
        min: 0,
        max: 100,
        progress: 0,    // 初始值
    }

    // propTypes用于验证转入的props，当向 props 传入无效数据时，JavaScript 控制台会抛出警告
    /* static propTypes = {
         value: React.PropTypes.number.isRequired,
     }*/

    constructor(props) {
        super(props);
        // 初始化state
        this.state = {
            value: this.props.progress,
            progressPosition: this.getPositionFromValue(this.props.progress),    // 当前进度的位置（界面位置）
            isPressed: false,
        };


        let containerHeight = Math.max(this.props.progressHeight, this.props.thumbSize) * 2;

        // 外部style覆盖内部默认style
        this.styles = StyleSheet.create({
            container: {
                height: containerHeight,
                padding: this.props.progressHeight,
                justifyContent: 'center',
                backgroundColor: 'transparent',
            },
            progressBackground: {
                height: this.props.progressHeight,
                borderRadius: this.props.progressHeight / 2,
                overflow: 'hidden',
                backgroundColor: this.props.progressBackgroundColor,
            },
            innerProgressCompleted: {
                height: this.props.progressHeight,
                backgroundColor: this.props.progressColor,
            },
            progressThumb: {
                width: this.props.thumbSize,
                height: this.props.thumbSize,
                position: 'absolute',
                backgroundColor: this.props.thumbColor,
                borderStyle: 'solid',
                borderRadius: this.props.thumbSize / 2,
            },

        })
    }

    render() {
        return (
            <View style={[this.styles.container, this.props.style]}
                  onLayout={(e) => {
                      this.containerLeft = e.nativeEvent.layout.x;
                      console.log("获取容器位置：" + this.containerLeft);
                      this.setProgress(this.state.value);
                  }}

                  onStartShouldSetResponder={() => this.props.thumbSize > 0}
                  onMoveShouldSetResponder={() => this.props.thumbSize > 0}
                  onResponderGrant={(event) => this.onGrant(event)}
                  onResponderMove={(event) => this.onMoving(event)}
                  onResponderEnd={(event) => this.onPressEnd(event)}
            >

                <View style={this.styles.progressBackground}
                      onLayout={(e) => {
                          this.progressLeft = e.nativeEvent.layout.x;
                          this.progressRight = this.progressLeft + e.nativeEvent.layout.width;
                          console.log("获取进度条位置：" + this.progressLeft + ", " + this.progressRight);
                      }}
                >
                    <View style={[this.styles.innerProgressCompleted,
                        {
                            width: this.state.progressPosition - this.progressLeft,
                            backgroundColor: this.props.progressColor || this.styles.innerProgressCompleted.backgroundColor
                        }
                    ]}/>
                    {/*如果还要加其他进度条，在这儿加*/}
                </View>

                <View style={[this.styles.progressThumb,
                    {
                        left: this.state.progressPosition - this.props.thumbSize / 2,
                        backgroundColor: this.state.isPressed ? this.props.thumbColorPressed : this.props.thumbColor,
                    }]}
                />
            </View>
        );
    }

    /**
     * props被传递给组件实例时被调用
     * 判断如果父组件传过来的props发生了变化，就setState更新子组件
     * 这里setState不会再次触发render()
     */
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        if (!this.state.isPressed &&    // 如果自己再拖动过程中，就不要刷新自己，不然会抖动
            nextProps.progress != undefined && nextProps.progress != this.props.progress) {
            //console.log("nextProps.progress changed:" + nextProps.progress);
            this.setProgress(nextProps.progress);
        }
    }

    componentWillMount(): void {
        console.log("componentWillMount");
    }

    componentDidMount(): void {
        console.log("componentDidMount, value:" + this.state.value);
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        //console.log("componentDidUpdate");
    }

    /**
     * 把对外的value值转成界面对应的位置。
     * @param value
     */
    setProgress(value) {
        if (value < this.props.min) {
            value = this.props.min;
        } else if (value > this.props.max) {
            value = this.props.max;
        }
        let position = this.getPositionFromValue(value);
        this.updatePosition(position);
    }

    getPositionFromValue(value) {
        if (this.props.max <= this.props.min) { // 防止传入不合法的值。
            return 0;
        }
        let position = this.progressLeft + (this.progressRight - this.progressLeft) * (value - this.props.min) / (this.props.max - this.props.min);
        return position;
    }

    getPositionFromEvent(event) {
        let mX = event.nativeEvent.pageX;   // 相对于父组件位置
        let position = mX - this.containerLeft;  // 计算在组件内的位置
        //let position2 = event.nativeEvent.locationX; // 超出范围时会突然变很小，Bug??
        //console.log("getPositionFromEvent:" + mX + ", " + position + ", " + position2);
        return position;
    }

    /**
     *  刷新进度条位置
     * @param position  新的位置
     * @param fromUser  是否是用户手动更新，自动刷新不通知监听器，以免事件死循环。
     */
    updatePosition(position, fromUser = false) {
        console.log("updatePosition: " + position);
        let newValue;
        if (position < this.progressLeft) {
            position = this.progressLeft;
            newValue = this.props.min;
        } else if (position > this.progressRight) {
            position = this.progressRight;
            newValue = this.props.max;
        } else {
            // 去除两边间距，按比例计算出对应值
            newValue = this.props.min + (this.props.max - this.props.min) * (position - this.progressLeft) / (this.progressRight - this.progressLeft);
        }

        /*newValue = Math.round(newValue);
        position = Math.round(position);*/

        this.setState(
            {
                value: newValue,
                progressPosition: position,
            }
        )

        // 用户手动拖动才触发监听
        if (fromUser && this.props.onProgressChanged !== undefined) {
            this.props.onProgressChanged(newValue)
        }

    }


    onGrant(event) {
        console.log("onGrant");
        let position = this.getPositionFromEvent(event);
        this.updatePosition(position, true);
        this.setState(
            {
                isPressed: true,
            }
        )

        if (this.props.onStartTouch !== undefined) {
            this.props.onStartTouch(this.state.value)
        }

    }

    onMoving(event) {
        let position = this.getPositionFromEvent(event);
        this.updatePosition(position, true);
    }

    onPressEnd(event) {
        console.log("onPressEnd");
        let position = this.getPositionFromEvent(event);
        this.updatePosition(position, true);
        this.setState(
            {
                isPressed: false,
            }
        )

        if (this.props.onStopTouch !== undefined) {
            this.props.onStopTouch(this.state.value)
        }
    }

}

