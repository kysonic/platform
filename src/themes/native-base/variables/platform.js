import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import { PLATFORM } from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platformStyle,
  platform,

  // Accordion
  accordionBorderColor: '#d3d3d3',
  accordionContentPadding: 10,
  accordionIconFontSize: 18,
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  headerStyle: '#edebed',
  iconStyle: '#000',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(255,76,30,0.3)',
  androidRippleColorDark: 'rgba(181,164,122,0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === PLATFORM.IOS ? 3 : 0,

  // Button
  buttonFontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  buttonDefaultActiveOpacity: 0.5,
  buttonDefaultFlex: 1,
  buttonDefaultBorderRadius: 2,
  buttonDefaultBorderWidth: 1,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return platform === PLATFORM.IOS
      ? this.fontSizeBase * 1.1
      : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  CheckboxPaddingLeft: platform === PLATFORM.IOS ? 4 : 2,
  CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  CheckboxIconSize: platform === PLATFORM.IOS ? 21 : 16,
  CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  CheckboxFontSize: platform === PLATFORM.IOS ? 23 / 0.9 : 17,
  checkboxBgColor: '#12b582',
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,

  // Color
  brandPrimary: platform === PLATFORM.IOS ? '#ed1c24' : '#ed1c24',
  brandPrimaryDark: '#ed1c24',
  brandSecondary: '#23b4b5',
  brandInfo: '#50b586',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#fff',

  // Container
  containerBgColor: '#f0f0f0',

  // Date Picker
  datePickerFlex: 1,
  datePickerPadding: 10,
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabBackgroundColor: 'blue',
  fabBorderRadius: 28,
  fabBottom: 0,
  fabButtonBorderRadius: 20,
  fabButtonHeight: 40,
  fabButtonLeft: 7,
  fabButtonMarginBottom: 10,
  fabContainerBottom: 20,
  fabDefaultPosition: 20,
  fabElevation: 4,
  fabIconColor: '#fff',
  fabIconSize: 24,
  fabShadowColor: '#000',
  fabShadowOffsetHeight: 2,
  fabShadowOffsetWidth: 0,
  fabShadowOpacity: 0.4,
  fabShadowRadius: 2,
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#F8F8F8',
  footerPaddingBottom: 0,
  footerCTAButtonColor: '#e6e6e6',
  footerCTAActiveButtonColor: '#e01c24',

  // FooterTab
  tabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#6b6b6b',
  tabBarTextSize: platform === PLATFORM.IOS ? 14 : 11,
  activeTab: platform === PLATFORM.IOS ? '#6b6b6b' : '#6b6b6b',
  sTabBarActiveTextColor: '#6b6b6b',
  tabBarActiveTextColor: platform === PLATFORM.IOS ? '#e01c24' : '#e01c24',
  tabActiveBgColor: platform === PLATFORM.IOS ? '#F8F8F8' : '#F8F8F8',

  // Header
  toolbarBtnColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#6b6b6b',
  toolbarDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#F8F8F8',
  toolbarHeight: platform === PLATFORM.IOS ? 64 : 56,
  toolbarSearchIconSize: platform === PLATFORM.IOS ? 20 : 23,
  toolbarInputColor: platform === PLATFORM.IOS ? '#CECDD2' : '#CECDD2',
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 30 : 50,
  toolbarBtnTextColor: platform === PLATFORM.IOS ? '#a7a6ab' : '#a7a6ab',
  toolbarDefaultBorder: platform === PLATFORM.IOS ? '#a7a6ab' : '#a7a6ab',
  iosStatusbar: platform === PLATFORM.IOS ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === PLATFORM.IOS ? 30 : 28,
  iconHeaderSize: platform === PLATFORM.IOS ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  // Hr
  lineColor: '#fff',

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === PLATFORM.IOS ? 20 : 24,
  listItemSelected: platform === PLATFORM.IOS ? '#007aff' : '#3F51B5',

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === PLATFORM.IOS ? 10 : 12,
  listNoteColor: '#575757',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === PLATFORM.IOS ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: platform === PLATFORM.IOS ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentActiveTextColor: platform === PLATFORM.IOS ? '#fff' : '#3F51B5',
  segmentBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentBorderColorMain: platform === PLATFORM.IOS ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabBarDisabledTextColor: '#BDBDBD',
  tabDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#12b582',
  topTabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#12b582',
  topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  topTabBarBorderColor: platform === PLATFORM.IOS ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  grayText: '#434343',
  weakText: '#949494',
  strongText: '#595959',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  titleFontSize: platform === PLATFORM.IOS ? 17 : 19,
  subTitleFontSize: platform === PLATFORM.IOS ? 11 : 14,
  subtitleColor: platform === PLATFORM.IOS ? '#8e8e93' : '#FFF',
  titleFontColor: platform === PLATFORM.IOS ? '#8e8e93' : '#8e8e93',

  // Social Icons
  socialIconsBorderColor: '#8e8e93',

  // Other
  borderRadiusBase: platform === PLATFORM.IOS ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // Shadows

  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
