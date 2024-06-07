import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
import * as Icon from "react-native-feather";
import React from 'react';

export const FeatherExample = () => {

  return (
    <Tester>
      <TestSuite name="FeatherExample">
        <TestCase.Example
          tags={['C_API']}
          itShould="TesterFeatherExample">
          <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
              <Icon.Activity stroke='black' width={40} height={40} fill="white" collapsable />
              <Icon.Airplay stroke='black' width={40} height={40} fill="white" />
              <Icon.AlertCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.AlertOctagon stroke='black' width={40} height={40} fill="white" />
              <Icon.AlertTriangle stroke='black' width={40} height={40} fill="white" />
              <Icon.AlignCenter stroke='black' width={40} height={40} fill="white" />
              <Icon.AlignJustify stroke='black' width={40} height={40} fill="white" />
              <Icon.AlignLeft stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.AlignRight stroke='black' width={40} height={40} fill="white" />
              <Icon.Anchor stroke='black' width={40} height={40} fill="white" />
              <Icon.Aperture stroke='blue' width={40} height={40} fill="white" />
              <Icon.Archive stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowDownCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.ArrowDownLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowDownRight stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowDown stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.ArrowLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowLeftCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.ArrowRight stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowRightCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.ArrowUp stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowUpCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.ArrowUpLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.ArrowUpRight stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.AtSign stroke='black' width={40} height={40} fill="white" />
              <Icon.Award stroke='black' width={40} height={40} fill="white" />
              <Icon.BarChart stroke='black' width={40} height={40} fill="white" />
              <Icon.BarChart2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Battery stroke='black' width={40} height={40} fill="white" />
              <Icon.BatteryCharging stroke='black' width={40} height={40} fill="white" />
              <Icon.Bell stroke='black' width={40} height={40} fill="white" />
              <Icon.BellOff stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Bluetooth stroke='black' width={40} height={40} fill="white" />
              <Icon.Bold stroke='black' width={40} height={40} fill="white" />
              <Icon.Book stroke='black' width={40} height={40} fill="white" />
              <Icon.Bookmark stroke='black' width={40} height={40} fill="white" />
              <Icon.BookOpen stroke='black' width={40} height={40} fill="white" />
              <Icon.Box stroke='black' width={40} height={40} fill="white" />
              <Icon.Briefcase stroke='black' width={40} height={40} fill="white" />
              <Icon.Calendar stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Camera stroke='black' width={40} height={40} fill="white" />
              <Icon.CameraOff stroke='black' width={40} height={40} fill="white" />
              <Icon.Cast stroke='black' width={40} height={40} fill="white" />
              <Icon.Check stroke='black' width={40} height={40} fill="white" />
              <Icon.CheckCircle stroke='black' width={40} height={40} fill="white" />
              <Icon.CheckSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronDown stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronLeft stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.ChevronRight stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronsDown stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronsLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronsRight stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronsUp stroke='black' width={40} height={40} fill="white" />
              <Icon.ChevronUp stroke='black' width={40} height={40} fill="white" />
              <Icon.Chrome stroke='blue' width={40} height={40} fill="white" />
              <Icon.Circle stroke='blue' width={40} height={40} fill="blue" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Clipboard stroke='black' width={40} height={40} fill="white" />
              <Icon.Clock stroke='blue' width={40} height={40} fill="blue" />
              <Icon.Cloud stroke='black' width={40} height={40} fill="white" />
              <Icon.CloudDrizzle stroke='black' width={40} height={40} fill="white" />
              <Icon.CloudLightning stroke='black' width={40} height={40} fill="white" />
              <Icon.CloudOff stroke='black' width={40} height={40} fill="white" />
              <Icon.CloudRain stroke='black' width={40} height={40} fill="white" />
              <Icon.CloudSnow stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Code stroke='black' width={40} height={40} fill="white" />
              <Icon.Codepen stroke='black' width={40} height={40} fill="white" />
              <Icon.Codesandbox stroke='black' width={40} height={40} fill="white" />
              <Icon.Coffee stroke='black' width={40} height={40} fill="white" />
              <Icon.Columns stroke='black' width={40} height={40} fill="white" />
              <Icon.Command stroke='black' width={40} height={40} fill="white" />
              <Icon.Compass stroke='black' width={40} height={40} fill="white" />
              <Icon.Copy stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.CornerDownLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerDownRight stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerLeftDown stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerLeftUp stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerRightDown stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerRightUp stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerUpLeft stroke='black' width={40} height={40} fill="white" />
              <Icon.CornerUpRight stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Cpu stroke='black' width={40} height={40} fill="white" />
              <Icon.CreditCard stroke='black' width={40} height={40} fill="white" />
              <Icon.Crop stroke='black' width={40} height={40} fill="white" />
              <Icon.Crosshair stroke='blue' width={40} height={40} fill="blue" />
              <Icon.Delete stroke='black' width={40} height={40} fill="white" />
              <Icon.Disc stroke='blue' width={40} height={40} fill="blue" />
              <Icon.Divide stroke='black' width={40} height={40} fill="white" />
              <Icon.Zap stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.DivideCircle stroke='blue' width={40} height={40} fill="blue" />
              <Icon.DivideSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.DollarSign stroke='black' width={40} height={40} fill="white" />
              <Icon.Download stroke='black' width={40} height={40} fill="white" />
              <Icon.DownloadCloud stroke='black' width={40} height={40} fill="white" />
              <Icon.Dribbble stroke='black' width={40} height={40} fill="white" />
              <Icon.Droplet stroke='black' width={40} height={40} fill="white" />
              <Icon.Edit stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Edit2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Edit3 stroke='black' width={40} height={40} fill="white" />
              <Icon.ExternalLink stroke='black' width={40} height={40} fill="white" />
              <Icon.Eye stroke='black' width={40} height={40} fill="white" />
              <Icon.EyeOff stroke='black' width={40} height={40} fill="white" />
              <Icon.Facebook stroke='black' width={40} height={40} fill="white" />
              <Icon.FastForward stroke='black' width={40} height={40} fill="white" />
              <Icon.Feather stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Figma stroke='black' width={40} height={40} fill="white" />
              <Icon.FileMinus stroke='black' width={40} height={40} fill="white" />
              <Icon.FilePlus stroke='black' width={40} height={40} fill="white" />
              <Icon.FileText stroke='black' width={40} height={40} fill="white" />
              <Icon.Film stroke='black' width={40} height={40} fill="white" />
              <Icon.Filter stroke='black' width={40} height={40} fill="white" />
              <Icon.Flag stroke='black' width={40} height={40} fill="white" />
              <Icon.Folder stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.FolderMinus stroke='black' width={40} height={40} fill="white" />
              <Icon.FolderPlus stroke='black' width={40} height={40} fill="white" />
              <Icon.Framer stroke='black' width={40} height={40} fill="white" />
              <Icon.Frown stroke='black' width={40} height={40} fill="white" />
              <Icon.Gift stroke='black' width={40} height={40} fill="white" />
              <Icon.GitBranch stroke='black' width={40} height={40} fill="white" />
              <Icon.GitCommit stroke='black' width={40} height={40} fill="white" />
              <Icon.Github stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Gitlab stroke='black' width={40} height={40} fill="white" />
              <Icon.GitMerge stroke='black' width={40} height={40} fill="white" />
              <Icon.GitPullRequest stroke='black' width={40} height={40} fill="white" />
              <Icon.Globe stroke='black' width={40} height={40} fill="white" />
              <Icon.Grid stroke='black' width={40} height={40} fill="white" />
              <Icon.HardDrive stroke='black' width={40} height={40} fill="white" />
              <Icon.Hash stroke='black' width={40} height={40} fill="white" />
              <Icon.Headphones stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Heart stroke='black' width={40} height={40} fill="white" />
              <Icon.HelpCircle stroke='black' width={40} height={40} fill="white" />
              <Icon.Hexagon stroke='black' width={40} height={40} fill="white" />
              <Icon.Home stroke='black' width={40} height={40} fill="white" />
              <Icon.Image stroke='black' width={40} height={40} fill="white" />
              <Icon.Inbox stroke='black' width={40} height={40} fill="white" />
              <Icon.Info stroke='blue' width={40} height={40} fill="white" />
              <Icon.Instagram stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Italic stroke='black' width={40} height={40} fill="white" />
              <Icon.Key stroke='black' width={40} height={40} fill="white" />
              <Icon.Layers stroke='black' width={40} height={40} fill="white" />
              <Icon.Layout stroke='black' width={40} height={40} fill="white" />
              <Icon.LifeBuoy stroke='blue' width={40} height={40} fill="white" />
              <Icon.Link stroke='black' width={40} height={40} fill="white" />
              <Icon.Link2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Linkedin stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.List stroke='black' width={40} height={40} fill="white" />
              <Icon.Loader stroke='black' width={40} height={40} fill="white" />
              <Icon.Lock stroke='black' width={40} height={40} fill="white" />
              <Icon.LogIn stroke='black' width={40} height={40} fill="white" />
              <Icon.LogOut stroke='black' width={40} height={40} fill="white" />
              <Icon.Mail stroke='black' width={40} height={40} fill="white" />
              <Icon.MapPin stroke='black' width={40} height={40} fill="white" />
              <Icon.Maximize stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Maximize2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Meh stroke='blue' width={40} height={40} fill="white" />
              <Icon.Menu stroke='black' width={40} height={40} fill="white" />
              <Icon.MessageCircle stroke='black' width={40} height={40} fill="white" />
              <Icon.MessageSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.Mic stroke='black' width={40} height={40} fill="white" />
              <Icon.MicOff stroke='black' width={40} height={40} fill="white" />
              <Icon.Minimize stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Minimize2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Minus stroke='black' width={40} height={40} fill="white" />
              <Icon.MinusCircle stroke='blue' width={40} height={40} fill="white" />
              <Icon.MinusSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.Monitor stroke='black' width={40} height={40} fill="white" />
              <Icon.Moon stroke='black' width={40} height={40} fill="white" />
              <Icon.MoreHorizontal stroke='black' width={40} height={40} fill="white" />
              <Icon.MoreVertical stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.MousePointer stroke='black' width={40} height={40} fill="white" />
              <Icon.Move stroke='black' width={40} height={40} fill="white" />
              <Icon.Music stroke='black' width={40} height={40} fill="white" />
              <Icon.Navigation stroke='black' width={40} height={40} fill="white" />
              <Icon.Navigation2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Octagon stroke='black' width={40} height={40} fill="white" />
              <Icon.Package stroke='black' width={40} height={40} fill="white" />
              <Icon.Paperclip stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Pause stroke='black' width={40} height={40} fill="white" />
              <Icon.PauseCircle stroke='blue' width={40} height={40} fill="white" />
              <Icon.PenTool stroke='black' width={40} height={40} fill="white" />
              <Icon.Percent stroke='black' width={40} height={40} fill="white" />
              <Icon.Phone stroke='black' width={40} height={40} fill="white" />
              <Icon.PhoneCall stroke='black' width={40} height={40} fill="white" />
              <Icon.PhoneForwarded stroke='black' width={40} height={40} fill="white" />
              <Icon.PhoneIncoming stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.PhoneMissed stroke='black' width={40} height={40} fill="white" />
              <Icon.PhoneOff stroke='black' width={40} height={40} fill="white" />
              <Icon.PhoneOutgoing stroke='black' width={40} height={40} fill="white" />
              <Icon.PieChart stroke='black' width={40} height={40} fill="white" />
              <Icon.Play stroke='black' width={40} height={40} fill="white" />
              <Icon.PlayCircle stroke='black' width={40} height={40} fill="white" />
              <Icon.Plus stroke='black' width={40} height={40} fill="white" />
              <Icon.PlusCircle stroke='blue' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.PlusSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.Pocket stroke='black' width={40} height={40} fill="white" />
              <Icon.Power stroke='black' width={40} height={40} fill="white" />
              <Icon.Printer stroke='black' width={40} height={40} fill="white" />
              <Icon.Radio stroke='black' width={40} height={40} fill="white" />
              <Icon.RefreshCcw stroke='black' width={40} height={40} fill="white" />
              <Icon.RefreshCw stroke='black' width={40} height={40} fill="white" />
              <Icon.Repeat stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Rewind stroke='black' width={40} height={40} fill="white" />
              <Icon.RotateCcw stroke='black' width={40} height={40} fill="white" />
              <Icon.RotateCw stroke='black' width={40} height={40} fill="white" />
              <Icon.Rss stroke='black' width={40} height={40} fill="white" />
              <Icon.Save stroke='black' width={40} height={40} fill="white" />
              <Icon.Scissors stroke='black' width={40} height={40} fill="white" />
              <Icon.Search stroke='black' width={40} height={40} fill="white" />
              <Icon.Send stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Server stroke='black' width={40} height={40} fill="white" />
              <Icon.Settings stroke='black' width={40} height={40} fill="white" />
              <Icon.Share stroke='black' width={40} height={40} fill="white" />
              <Icon.Share2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Shield stroke='black' width={40} height={40} fill="white" />
              <Icon.ShieldOff stroke='black' width={40} height={40} fill="white" />
              <Icon.ShoppingBag stroke='black' width={40} height={40} fill="white" />
              <Icon.ShoppingCart stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Shuffle stroke='black' width={40} height={40} fill="white" />
              <Icon.Sidebar stroke='black' width={40} height={40} fill="white" />
              <Icon.SkipBack stroke='black' width={40} height={40} fill="white" />
              <Icon.SkipForward stroke='black' width={40} height={40} fill="white" />
              <Icon.Slack stroke='black' width={40} height={40} fill="white" />
              <Icon.Slash stroke='blue' width={40} height={40} fill="white" />
              <Icon.Sliders stroke='black' width={40} height={40} fill="white" />
              <Icon.Smartphone stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Smile stroke='black' width={40} height={40} fill="white" />
              <Icon.Speaker stroke='black' width={40} height={40} fill="white" />
              <Icon.Square stroke='black' width={40} height={40} fill="white" />
              <Icon.Star stroke='black' width={40} height={40} fill="white" />
              <Icon.StopCircle stroke='black' width={40} height={40} fill="white" />
              <Icon.Sun stroke='black' width={40} height={40} fill="white" />
              <Icon.Sunrise stroke='black' width={40} height={40} fill="white" />
              <Icon.Sunset stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Tablet stroke='black' width={40} height={40} fill="white" />
              <Icon.Tag stroke='black' width={40} height={40} fill="white" />
              <Icon.Target stroke='blue' width={40} height={40} fill="blue" />
              <Icon.Terminal stroke='black' width={40} height={40} fill="white" />
              <Icon.Thermometer stroke='black' width={40} height={40} fill="white" />
              <Icon.ThumbsDown stroke='black' width={40} height={40} fill="white" />
              <Icon.ThumbsUp stroke='black' width={40} height={40} fill="white" />
              <Icon.ToggleLeft stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.ToggleRight stroke='black' width={40} height={40} fill="white" />
              <Icon.Tool stroke='black' width={40} height={40} fill="white" />
              <Icon.Trash stroke='black' width={40} height={40} fill="white" />
              <Icon.Trash2 stroke='black' width={40} height={40} fill="white" />
              <Icon.Trello stroke='black' width={40} height={40} fill="white" />
              <Icon.TrendingDown stroke='black' width={40} height={40} fill="white" />
              <Icon.TrendingUp stroke='black' width={40} height={40} fill="white" />
              <Icon.Triangle stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Truck stroke='black' width={40} height={40} fill="white" />
              <Icon.Tv stroke='black' width={40} height={40} fill="white" />
              <Icon.Twitch stroke='black' width={40} height={40} fill="white" />
              <Icon.Twitter stroke='black' width={40} height={40} fill="white" />
              <Icon.Type stroke='black' width={40} height={40} fill="white" />
              <Icon.Umbrella stroke='black' width={40} height={40} fill="white" />
              <Icon.Underline stroke='black' width={40} height={40} fill="white" />
              <Icon.Unlock stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Upload stroke='black' width={40} height={40} fill="white" />
              <Icon.UploadCloud stroke='black' width={40} height={40} fill="white" />
              <Icon.User stroke='black' width={40} height={40} fill="white" />
              <Icon.UserCheck stroke='black' width={40} height={40} fill="white" />
              <Icon.UserMinus stroke='black' width={40} height={40} fill="white" />
              <Icon.UserPlus stroke='black' width={40} height={40} fill="white" />
              <Icon.Users stroke='black' width={40} height={40} fill="white" />
              <Icon.UserX stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Video stroke='black' width={40} height={40} fill="white" />
              <Icon.VideoOff stroke='black' width={40} height={40} fill="white" />
              <Icon.Voicemail stroke='black' width={40} height={40} fill="white" />
              <Icon.Volume stroke='black' width={40} height={40} fill="white" />
              <Icon.Volume1 stroke='black' width={40} height={40} fill="white" />
              <Icon.Volume2 stroke='black' width={40} height={40} fill="white" />
              <Icon.VolumeX stroke='black' width={40} height={40} fill="white" />
              <Icon.Watch stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon.Wifi stroke='black' width={40} height={40} fill="white" />
              <Icon.WifiOff stroke='black' width={40} height={40} fill="white" />
              <Icon.Wind stroke='black' width={40} height={40} fill="white" />
              <Icon.X stroke='black' width={40} height={40} fill="white" />
              <Icon.XCircle stroke='blue' width={40} height={40} fill="white" />
              <Icon.XOctagon stroke='black' width={40} height={40} fill="white" />
              <Icon.XSquare stroke='black' width={40} height={40} fill="white" />
              <Icon.Youtube stroke='black' width={40} height={40} fill="white" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 140 }}>
              <Icon.Zap stroke='black' width={40} height={40} fill="white" />
              <Icon.ZapOff stroke='black' width={40} height={40} fill="white" />
              <Icon.ZoomIn stroke='black' width={40} height={40} fill="white" />
              <Icon.ZoomOut stroke='black' width={40} height={40} fill="white" />
            </View>
          </ScrollView>
        </TestCase.Example>
      </TestSuite>
    </Tester>
  );
};




