import * as ButtonInfo1 from './ButtonInfo1';
import _ from 'lodash';

const funcList= [
  'DEFAULT',
  'KEYBOARD_FUNCTION',
  'MACRO',
  'INTERDEVICE',
  'SWITCH_PROFILE',
  'SWITCH_LIGHTING',
  'RAZER_HYPERSHIFT',
  'LAUNCH_PROGRAM',
  'MULTIMEDIA',
  'WINDOWS_SHORTCUT',
  'TEXT_FUNCTION',
  'DISABLE',
];

const focus = false;
const mapped = false;
const enabled = true;
const inpType = 'KeyInput';
const Pos = 'left';
const assign = 'KEYBOARD';
const pageid = '7';
const scrlock = 'Scroll Lock';
// var i;
// let buttonList = [];
// for(i = 0; i< 108; i++){
//     buttonList[i] = {};
// }
export const groupList = [
  {
    group: {
      groupName: 'TOP VIEW',
      buttonList: [ 
        {
          
        },
        {
          defaultValue: 'F1',
          inputID: 'F1',
          counter: 'F1',
          assignmentValue: 'F1',
          HID: '58',
          d:
            'M144,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C146,119.1,145.1,120,144,120z',
        },
        {
          defaultValue: 'F2',
          inputID: 'F2',
          counter: 'F2',
          assignmentValue: 'F2',
          HID: '59',
          d:
            'M171,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C173,119.1,172.1,120,171,120z',
        },
        {
          defaultValue: 'F3',
          inputID: 'F3',
          counter: 'F3',
          assignmentValue: 'F3',
          HID: '60',
          d:
            'M196,120h-20c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v21C198,119.1,197.1,120,196,120z',
        },
        {
          defaultValue: 'F4',
          inputID: 'F4',
          counter: 'F4',
          assignmentValue: 'F4',
          HID: '61',
          d:
            'M223,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C225,119.1,224.1,120,223,120z',
        },
        {
          defaultValue: 'F5',
          inputID: 'F5',
          counter: 'F5',
          assignmentValue: 'F5',
          HID: '62',
          d:
            'M262,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C264,119.1,263.1,120,262,120z',
        },
        {
          defaultValue: 'F6',
          inputID: 'F6',
          counter: 'F6',
          assignmentValue: 'F6',
          HID: '63',
          d:
            'M288,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C290,119.1,289.1,120,288,120z',
        },
        {
          defaultValue: 'F7',
          inputID: 'F7',
          counter: 'F7',
          assignmentValue: 'F7',
          HID: '64',
          d:
            'M314,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C316,119.1,315.1,120,314,120z',
        },
        {
          defaultValue: 'F8',
          inputID: 'F8',
          counter: 'F8',
          assignmentValue: 'F8',
          HID: '65',
          d:
            'M341,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C343,119.1,342.1,120,341,120z',
        },
        {
          defaultValue: 'F9',
          inputID: 'F9',
          counter: 'F9',
          assignmentValue: 'F9',
          HID: '66',
          d:
            'M381,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C383,119.1,382.1,120,381,120z',
        },
        {
          defaultValue: 'F10',
          inputID: 'F10',
          counter: 'F10',
          assignmentValue: 'F10',
          HID: '67',
          d:
            'M406,120h-20c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v21C408,119.1,407.1,120,406,120z',
        },
        {
          defaultValue: 'F11',
          inputID: 'F11',
          counter: 'F11',
          assignmentValue: 'F11',
          HID: '68',
          d:
            'M433,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C435,119.1,434.1,120,433,120z',
        },
        {
          defaultValue: 'F12',
          inputID: 'F12',
          counter: 'F12',
          assignmentValue: 'F12',
          HID: '69',
          d:
            'M458,120h-20c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v21C460,119.1,459.1,120,458,120z',
        },
        {
          defaultValue: 'Prnt Scrn',
          inputID: 'PRT_SC',
          counter: 'Prnt Scrn',
          assignmentValue: 'Prnt Scrn',
          HID: '70',
          d:
            'M494,120h-22c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C496,119.1,495.1,120,494,120z',
        },
        {
          defaultValue: scrlock,
          inputID: 'PRT_SC',
          counter: scrlock,
          assignmentValue: scrlock,
          HID: '71',
          d:
            'M520,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C522,119.1,521.1,120,520,120z',
        },
        {
          defaultValue: 'Pause',
          inputID: 'PAUSE',
          counter: 'Pause',
          assignmentValue: 'Pause',
          HID: '72',
          d:
            'M546,120h-21c-1.1,0-2-0.9-2-2V97c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C548,119.1,547.1,120,546,120z',
        },
        {
          buttonKey: 'KEY_TILDE',
          defaultValue: '`',
          inputID: 'KEY_TILDE',
          counter: '`',
          assignmentValue: '`',
          HID: '53',
          d:
            'M91,155H70c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C93,154.1,92.1,155,91,155z',
        },
        {
          defaultValue: '1',
          inputID: 'KEY_1',
          counter: '1',
          assignmentValue: '1',
          HID: '30',
          d:
            'M118,155H96c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C120,154.1,119.1,155,118,155z',
        },
        {
          defaultValue: '2',
          inputID: 'KEY_2',
          counter: '2',
          assignmentValue: '2',
          HID: '31',
          d:
            'M144,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C146,154.1,145.1,155,144,155z',
        },
        {
          defaultValue: '3',
          inputID: 'KEY_3',
          counter: '3',
          assignmentValue: '3',
          HID: '32',
          d:
            'M171,155h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C173,154.1,172.1,155,171,155z',
        },
        {
          defaultValue: '4',
          inputID: 'KEY_4',
          counter: '4',
          assignmentValue: '4',
          HID: '33',
          d:
            'M196,155h-20c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v21C198,154.1,197.1,155,196,155z',
        },
        {
          defaultValue: '5',
          inputID: 'KEY_5',
          counter: '5',
          assignmentValue: '5',
          HID: '34',
          d:
            'M223,155h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C225,154.1,224.1,155,223,155z',
        },
        {
          defaultValue: '6',
          inputID: 'KEY_6',
          counter: '6',
          assignmentValue: '6',
          HID: '35',
          d:
            'M249,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C251,154.1,250.1,155,249,155z',
        },
        {
          defaultValue: '7',
          inputID: 'KEY_7',
          counter: '7',
          assignmentValue: '7',
          HID: '36',
          d:
            'M275,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C277,154.1,276.1,155,275,155z',
        },
        {
          defaultValue: '8',
          inputID: 'KEY_8',
          counter: '8',
          assignmentValue: '8',
          HID: '37',
          d:
            'M301,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C303,154.1,302.1,155,301,155z',
        },
        {
          defaultValue: '9',
          inputID: 'KEY_9',
          counter: '9',
          assignmentValue: '9',
          HID: '38',
          d:
            'M328,155h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C330,154.1,329.1,155,328,155z',
        },
        {
          defaultValue: '0',
          inputID: 'KEY_0',
          counter: '0',
          assignmentValue: '0',
          HID: '39',
          d:
            'M354,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C356,154.1,355.1,155,354,155z',
        },
        {
          defaultValue: '-',
          inputID: 'KEY_HYPEN',
          counter: '-',
          assignmentValue: '-',
          HID: '45',
          d:
            'M381,155h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C383,154.1,382.1,155,381,155z',
        },
        {
          defaultValue: '=',
          inputID: 'KEY_EQUAL',
          counter: '=',
          assignmentValue: '=',
          HID: '46',
          d:
            'M406,155h-20c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v21C408,154.1,407.1,155,406,155z',
        },
        {
          defaultValue: 'Backspace',
          inputID: 'KEY_BACKSPACE',
          counter: 'Back space',
          assignmentValue: 'Backspace',
          HID: '42',
          d:
            'M458,155h-47c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h47c1.1,0,2,0.9,2,2v21C460,154.1,459.1,155,458,155z',
        },
        {
          defaultValue: 'Tab',
          inputID: 'KEY_TAB',
          counter: 'Tab',
          assignmentValue: 'Tab',
          HID: '43',
          d:
            'M105,181H70c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h35c1.1,0,2,0.9,2,2v21C107,180.1,106.1,181,105,181z',
        },
        {
          defaultValue: 'Q',
          inputID: 'KEY_Q',
          counter: 'Q',
          assignmentValue: 'Q',
          HID: '20',
          d:
            'M131,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C133,180.1,132.1,181,131,181z',
        },
        {
          defaultValue: 'W',
          inputID: 'KEY_W',
          counter: 'W',
          assignmentValue: 'W',
          HID: '26',
          d:
            'M157,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C159,180.1,158.1,181,157,181z',
        },
        {
          defaultValue: 'E',
          inputID: 'KEY_E',
          counter: 'E',
          assignmentValue: 'E',
          HID: '8',
          d:
            'M183,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C185,180.1,184.1,181,183,181z',
        },
        {
          defaultValue: 'R',
          inputID: 'KEY_R',
          counter: 'R',
          assignmentValue: 'R',
          HID: '21',
          d:
            'M209,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C211,180.1,210.1,181,209,181z',
        },
        {
          defaultValue: 'T',
          inputID: 'KEY_T',
          counter: 'T',
          assignmentValue: 'T',
          HID: '23',
          d:
            'M235,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C237,180.1,236.1,181,235,181z',
        },
        {
          defaultValue: 'Y',
          inputID: 'KEY_Y',
          counter: 'Y',
          assignmentValue: 'Y',
          HID: '28',
          d:
            'M262,181h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C264,180.1,263.1,181,262,181z',
        },
        {
          defaultValue: 'U',
          inputID: 'KEY_U',
          counter: 'U',
          assignmentValue: 'U',
          HID: '24',
          d:
            'M288,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C290,180.1,289.1,181,288,181z',
        },
        {
          defaultValue: 'I',
          inputID: 'KEY_I',
          counter: 'I',
          assignmentValue: 'I',
          HID: '12',
          d:
            'M314,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C316,180.1,315.1,181,314,181z',
        },
        {
          defaultValue: 'O',
          inputID: 'KEY_O',
          counter: 'O',
          assignmentValue: 'O',
          HID: '18',
          d:
            'M341,181h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C343,180.1,342.1,181,341,181z',
        },
        {
          defaultValue: 'P',
          inputID: 'KEY_P',
          counter: 'P',
          assignmentValue: 'P',
          HID: '19',
          d:
            'M367,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C369,180.1,368.1,181,367,181z',
        },
        {
          defaultValue: '[',
          inputID: 'KEY_OPEN_BRACKET',
          counter: '[',
          assignmentValue: '[',
          HID: '47',
          d:
            'M393,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C395,180.1,394.1,181,393,181z',
        },
        {
          defaultValue: ']',
          inputID: 'KEY_CLOSE_BRACKET',
          counter: ']',
          assignmentValue: ']',
          HID: '48',
          d:
            'M419,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C421,180.1,420.1,181,419,181z',
        },
        {
          defaultValue: '\\',
          inputID: 'KEY_BACKSLASH',
          counter: '\\',
          assignmentValue: '\\',
          HID: '49',
          d:
            'M458,181h-34c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2v21C460,180.1,459.1,181,458,181z',
        },
        {
          defaultValue: 'Caps Lock',
          inputID: 'KEY_CAPS_LOCK',
          counter: 'Caps Lock',
          assignmentValue: 'Caps Lock',
          HID: '57',
          d:
            'M111,207H70c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h41c1.1,0,2,0.9,2,2v21C113,206.1,112.1,207,111,207z',
        },
        {
          defaultValue: 'A',
          inputID: 'KEY_A',
          counter: 'A',
          assignmentValue: 'A',
          HID: '4',
          d:
            'M137,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C139,206.1,138.1,207,137,207z',
        },
        {
          defaultValue: 'S',
          inputID: 'KEY_S',
          counter: 'S',
          assignmentValue: 'S',
          HID: '22',
          d:
            'M163,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C165,206.1,164.1,207,163,207z',
        },
        {
          defaultValue: 'D',
          inputID: 'KEY_D',
          counter: 'D',
          assignmentValue: 'D',
          HID: '7',
          d:
            'M189,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C191,206.1,190.1,207,189,207z',
        },
        {
          defaultValue: 'F',
          inputID: 'KEY_F',
          counter: 'F',
          assignmentValue: 'F',
          HID: '9',
          d:
            'M216,207h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C218,206.1,217.1,207,216,207z',
        },
        {
          defaultValue: 'G',
          inputID: 'KEY_G',
          counter: 'G',
          assignmentValue: 'G',
          HID: '10',
          d:
            'M242,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C244,206.1,243.1,207,242,207z',
        },
        {
          defaultValue: 'H',
          inputID: 'KEY_H',
          counter: 'H',
          assignmentValue: 'H',
          HID: '11',
          d:
            'M268,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C270,206.1,269.1,207,268,207z',
        },
        {
          defaultValue: 'J',
          inputID: 'KEY_J',
          counter: 'J',
          assignmentValue: 'J',
          HID: '13',
          d:
            'M295,207h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C297,206.1,296.1,207,295,207z',
        },
        {
          defaultValue: 'K',
          inputID: 'KEY_K',
          counter: 'K',
          assignmentValue: 'K',
          HID: '14',
          d:
            'M321,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C323,206.1,322.1,207,321,207z',
        },
        {
          defaultValue: 'L',
          inputID: 'KEY_L',
          counter: 'L',
          assignmentValue: 'L',
          HID: '15',
          d:
            'M347,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C349,206.1,348.1,207,347,207z',
        },
        ...ButtonInfo1.groupList[0].group.buttonList
      ],
    },
  },
];

groupList.map((groupItem, index) => {
  groupItem.group.buttonList.forEach((item, idx) =>{
      console.log('Fuck easy json .................', idx)
      const button = ['ESC','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','PRT_SC',
                    'SCR_LK','PAUSE','KEY_TILDE','KEY_1','KEY_2','KEY_3',
                    'KEY_4','KEY_5','KEY_6','KEY_7','KEY_8','KEY_9','KEY_0','KEY_HYPEN','KEY_EQUAL',
                    'KEY_BACKSPACE','TAB','KEY_Q','KEY_W','KEY_E','KEY_R','KEY_T','KEY_Y','KEY_U','KEY_I','KEY_O','KEY_P',
                    'KEY_OPEN_BRACKET','KEY_CLOSE_BRACKET','KEY_BACKSLASH','KEY_CAPS_LOCK','KEY_A','KEY_S','KEY_D',
                    'KEY_F','KEY_G','KEY_H','KEY_J','KEY_K','KEY_L'];
      item.buttonKey = button[idx];
      item.isFocused = focus;
      item.isMapped = mapped;
      item.isEnabled = enabled;
      item.inputType = inpType;
      item.functionList = funcList;
      item.buttonPos = Pos;
      item.assignment = assign;
      item.pageID = pageid;
      console.log('Fuck easy json .................', item)
  })
})
