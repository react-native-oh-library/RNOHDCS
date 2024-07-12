import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import * as Icon from "react-native-feather";
import React from 'react';

export const FeatherExample = () => {

    return (

            <ScrollView>
                <TestSuite name="FeatherExample">
                    <TestCase
                        tags={['C_API']}
                        itShould="基本图标,线条(stroke)为黑色,长宽(height/width)均为40,默认填充色(fill)为白色,线条宽度为1">
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={1}  />
                            <Icon.Airplay stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.AlignCenter stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.AlignJustify stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.AlignLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.AlignRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Archive stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ZapOff stroke='black' width={40} height={40} fill="white" strokeWidth={1}/>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.ArrowDownLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ArrowDownRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ArrowDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ArrowLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.ArrowRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ArrowUp stroke='black' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.ArrowUpLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ArrowUpRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.AtSign stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Zap stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.BarChart stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.BarChart2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Battery stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.BatteryCharging stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Bell stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.BellOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Bold stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Book stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Bookmark stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.BookOpen stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Box stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Briefcase stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Calendar stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CameraOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Cast stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Check stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CheckCircle stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CheckSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronsDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.ChevronsLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronsRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronsUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ChevronUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Clipboard stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Cloud stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CloudDrizzle stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CloudLightning stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.CloudOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CloudRain stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CloudSnow stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Code stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Codepen stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Codesandbox stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Coffee stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Columns stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Command stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Youtube stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Copy stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerDownLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerDownRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerLeftDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerLeftUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerRightDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.CornerRightUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerUpLeft stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CornerUpRight stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Cpu stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.CreditCard stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Crop stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.XSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Zap stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.DivideSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.DollarSign stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Download stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.DownloadCloud stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.XOctagon stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Droplet stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Edit stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Edit2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Edit3 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ExternalLink stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.EyeOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Facebook stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.FastForward stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Feather stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Figma stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.FileMinus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.FilePlus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.FileText stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Film stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Filter stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Flag stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Folder stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.FolderMinus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.FolderPlus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Framer stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Wind stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.X stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Gift stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Github stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Gitlab stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Grid stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.HardDrive stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Hash stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Headphones stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Heart stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.WifiOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Hexagon stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Home stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Inbox stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Instagram stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Italic stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Key stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Layers stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Layout stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Link stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Link2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.List stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Loader stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Lock stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.LogIn stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.LogOut stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Mail stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Maximize stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Maximize2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Menu stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MessageCircle stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.MessageSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Mic stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MicOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Minimize stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Minimize2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Minus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MinusSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Monitor stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Moon stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MoreHorizontal stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MoreVertical stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.MousePointer stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Move stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Navigation2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Octagon stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Package stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Paperclip stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Pause stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PenTool stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Wifi stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Phone stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PhoneCall stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PhoneForwarded stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PhoneIncoming stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.PhoneMissed stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PhoneOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PhoneOutgoing stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PieChart stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Play stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.VolumeX stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Plus stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.PlusSquare stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Pocket stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Power stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Printer stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.RefreshCcw stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.RefreshCw stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Repeat stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Rewind stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.RotateCcw stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.RotateCw stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Rss stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Save stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Send stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Server stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Settings stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Share stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Shield stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.ShieldOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ShoppingBag stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ShoppingCart stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Shuffle stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Sidebar stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.SkipBack stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.SkipForward stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Slack stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Sliders stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Smartphone stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.VolumeX stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Square stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Star stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Sunrise stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Sunset stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Tablet stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Tag stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Terminal stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Thermometer stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ThumbsDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.ThumbsUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Tool stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Trash stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Trash2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Trello stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.TrendingDown stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.TrendingUp stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Triangle stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Tv stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Twitch stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Twitter stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Type stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Umbrella stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Underline stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Unlock stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Upload stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.UploadCloud stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Video stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.VideoOff stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Volume stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon.Volume1 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.Volume2 stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                            <Icon.VolumeX stroke='black' width={40} height={40} fill="white" strokeWidth={1} />
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="FeatherExample2">
                    <TestCase
                        tags={['C_API']}
                        itShould="线条(stroke)为蓝色,长宽(height/width)均为40,默认填充色(fill)为白色,线条宽度为1">
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Icon.Activity stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.Airplay stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.AlignCenter stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.AlignJustify stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.AlignLeft stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.AlignRight stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.Archive stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                            <Icon.ZapOff stroke='blue' width={40} height={40} fill="white" strokeWidth={1}/>
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="FeatherExample3">
                    <TestCase
                        tags={['C_API']}
                        itShould="线条(stroke)为黑色,长宽(height/width)均为100,默认填充色(fill)为白色,线条宽度为1">
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Icon.Activity stroke='black' width={100} height={100} fill="white" strokeWidth={1}/>
                            <Icon.Airplay stroke='black' width={100} height={100} fill="white" strokeWidth={1}/>
                            <Icon.AlignCenter stroke='black' width={100} height={100} fill="white" strokeWidth={1}/>
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="FeatherExample4">
                    <TestCase
                        tags={['C_API']}
                        itShould="线条(stroke)为黑色,长宽(height/width)均为40,默认填充色(fill)为绿色,线条宽度为1">
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Icon.Activity stroke='black' width={40} height={40} fill="green" strokeWidth={1}/>
                            <Icon.Airplay stroke='black' width={40} height={40} fill="green" strokeWidth={1}/>
                            <Icon.Archive stroke='black' width={40} height={40} fill="green" strokeWidth={1}/>
                            <Icon.Star stroke='black' width={40} height={40} fill="green" strokeWidth={1}/>
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="FeatherExample5">
                    <TestCase
                        tags={['C_API']}
                        itShould="线条(stroke)为黑色,长宽(height/width)均为40,默认填充色(fill)为白色,线条宽度顺序为12345">
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={1}  />
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={2}  />
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={3}  />
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={4}  />
                            <Icon.Activity stroke='black' width={40} height={40} fill="white" strokeWidth={5} />
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>

    );
};