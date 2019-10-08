const funcList= [
    'DEFAULT',
    'KEYBOARD_FUNCTION',
    'MOUSE_FUNCTION',
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
const enabled= true;
const Pos = 'left';
const assign = 'KEYBOARD';
const pageid = '7';
  
export const groupList = [
    {
      group: {
        groupName: 'TOP VIEW',
        buttonList: [
          {
            buttonKey: 'KEY_SEMICOLON',
            defaultValue: ';',
            inputType: 'KeyInput',
            inputID: 'KEY_SEMICOLON',
            counter: ';',
            assignmentValue: ';',
            HID: '51',
            d:
              'M374,207h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C376,206.1,375.1,207,374,207z',
          },
          {
            buttonKey: 'KEY_QUOTE',
            defaultValue: "'",
            inputType: 'KeyInput',
            inputID: 'KEY_QUOTE',
            counter: "'",
            assignmentValue: "'",
            HID: '52',
            d:
              'M400,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C402,206.1,401.1,207,400,207z',
          },
          {
            buttonKey: 'KEY_ENTER',
            defaultValue: 'Enter',
            inputType: 'KeyInput',
            inputID: 'KEY_ENTER',
            counter: 'Enter',
            assignmentValue: 'Enter',
            HID: '40',
            d:
              'M458,207h-53c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h53c1.1,0,2,0.9,2,2v21C460,206.1,459.1,207,458,207z',
          },
          {
            buttonKey: 'KEY_LEFT_SHIFT',
            defaultValue: 'Shift',
            inputType: 'KeyInput',
            inputID: 'KEY_LEFT_SHIFT',
            counter: 'Shift',
            assignmentValue: 'Shift',
            HID: '225',
            d:
              'M124,233H70c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h54c1.1,0,2,0.9,2,2v21C126,232.1,125.1,233,124,233z',
          },
          {
            buttonKey: 'KEY_Z',
            defaultValue: 'Z',
            inputType: 'KeyInput',
            inputID: 'KEY_Z',
            counter: 'Z',
            assignmentValue: 'z',
            HID: '29',
            d:
              'M150,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C152,232.1,151.1,233,150,233z',
          },
          {
            buttonKey: 'KEY_X',
            defaultValue: 'X',
            inputType: 'KeyInput',
            inputID: 'KEY_X',
            counter: 'X',
            assignmentValue: 'X',
            HID: '27',
            d:
              'M176,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C178,232.1,177.1,233,176,233z',
          },
          {
            buttonKey: 'KEY_C',
            defaultValue: 'C',
            inputType: 'KeyInput',
            inputID: 'KEY_C',
            counter: 'C',
            assignmentValue: 'C',
            HID: '6',
            d:
              'M202,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C204,232.1,203.1,233,202,233z',
          },
          {
            buttonKey: 'KEY_V',
            defaultValue: 'V',
            inputType: 'KeyInput',
            inputID: 'KEY_V',
            counter: 'V',
            assignmentValue: 'V',
            HID: '25',
            d:
              'M229,233h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C231,232.1,230.1,233,229,233z',
          },
          {
            buttonKey: 'KEY_B',
            defaultValue: 'B',
            inputType: 'KeyInput',
            inputID: 'KEY_B',
            counter: 'B',
            assignmentValue: 'B',
            HID: '5',
            d:
              'M255,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C257,232.1,256.1,233,255,233z',
          },
          {
            buttonKey: 'KEY_N',
            defaultValue: 'N',
            inputType: 'KeyInput',
            inputID: 'KEY_N',
            counter: 'N',
            assignmentValue: 'N',
            HID: '17',
            d:
              'M281,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C283,232.1,282.1,233,281,233z',
          },
          {
            buttonKey: 'KEY_M',
            defaultValue: 'M',
            inputType: 'KeyInput',
            inputID: 'KEY_M',
            counter: 'M',
            assignmentValue: 'M',
            HID: '16',
            d:
              'M308,233h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C310,232.1,309.1,233,308,233z',
          },
          {
            buttonKey: 'KEY_COMMA',
            defaultValue: ',',
            inputType: 'KeyInput',
            inputID: 'KEY_COMMA',
            counter: ',',
            assignmentValue: ',',
            HID: '54',
            d:
              'M334,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C336,232.1,335.1,233,334,233z',
          },
          {
            buttonKey: 'KEY_PERIOD',
            defaultValue: '.',
            inputType: 'KeyInput',
            inputID: 'KEY_PERIOD',
            counter: '.',
            assignmentValue: '.',
            HID: '55',
            d:
              'M360,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C362,232.1,361.1,233,360,233z',
          },
          {
            buttonKey: 'KEY_SLASH',
            defaultValue: '/',
            inputType: 'KeyInput',
            inputID: 'KEY_SLASH',
            counter: '/',
            assignmentValue: '/',
            HID: '56',
            d:
              'M386,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C388,232.1,387.1,233,386,233z',
          },
          {
            buttonKey: 'KEY_RIGHT_SHIFT',
            defaultValue: 'Right Shift',
            inputType: 'KeyInput',
            inputID: 'KEY_RIGHT_SHIFT',
            counter: 'Right Shift',
            assignmentValue: 'Right Shift',
            HID: '229',
            d:
              'M458,233h-67c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h67c1.1,0,2,0.9,2,2v21C460,232.1,459.1,233,458,233z',
          },
          {
            buttonKey: 'KEY_LEFT_CONTROL',
            defaultValue: 'Ctrl',
            inputType: 'KeyInput',
            inputID: 'KEY_LEFT_CONTROL',
            counter: 'Ctrl',
            assignmentValue: 'Ctrl',
            HID: '224',
            d:
              'M104,259H70c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2v21C106,258.1,105.1,259,104,259z',
          },
          {
            buttonKey: 'KEY_WINDOWS',
            defaultValue: 'Windows',
            inputType: 'KeyInput',
            inputID: 'KEY_WINDOWS',
            counter: 'Windows',
            MappingGroup: 'KEYBOARD',
            assignmentValue: 'Windows',
            buttonPos: Pos,
            d:
              'M137,259h-28c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v21C139,258.1,138.1,259,137,259z',
          },
          {
            buttonKey: 'KEY_LEFT_ALT',
            defaultValue: 'Alt',
            inputType: 'KeyInput',
            inputID: 'KEY_LEFT_ALT',
            counter: 'Alt',
            assignmentValue: 'Alt',
            HID: '226',
            d:
              'M170,259h-28c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v21C172,258.1,171.1,259,170,259z',
          },
          {
            buttonKey: 'KEY_SPACEBAR',
            defaultValue: 'Space',
            inputType: 'KeyInput',
            inputID: 'KEY_SPACEBAR',
            counter: 'Space',
            assignmentValue: 'Space',
            HID: '44',
            d:
              'M321,259H175c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h146c1.1,0,2,0.9,2,2v21C323,258.1,322.1,259,321,259z',
          },
          {
            buttonKey: 'KEY_RIGHT_ALT',
            defaultValue: 'Right Alt',
            inputType: 'KeyInput',
            inputID: 'KEY_RIGHT_ALT',
            counter: 'Right Alt',
            assignmentValue: 'Right Alt',
            HID: '230',
            d:
              'M354,259h-28c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v21C356,258.1,355.1,259,354,259z',
          },
          {
            buttonKey: 'KEY_FN',
            defaultValue: 'FN',
            inputType: 'KeyInput',
            inputID: 'KEY_FN',
            counter: 'FN',
            MappingGroup: 'RAZER HYPERSHIFT',
            assignmentValue: 'RAZER HYPERSHIFT',
            buttonPos: Pos,
            d:
              'M386,259h-27c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h27c1.1,0,2,0.9,2,2v21C388,258.1,387.1,259,386,259z',
          },
          {
            buttonKey: 'KEY_APPLICATION',
            defaultValue: 'Application',
            inputType: 'KeyInput',
            inputID: 'KEY_APPLICATION',
            counter: 'Application',
            assignmentValue: 'Application',
            HID: '101',
            d:
              'M420,259h-29c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h29c1.1,0,2,0.9,2,2v21C422,258.1,421.1,259,420,259z',
          },
          {
            buttonKey: 'KEY_RIGHT_CONTROL',
            defaultValue: 'Right Ctrl',
            inputType: 'KeyInput',
            inputID: 'KEY_RIGHT_CONTROL',
            counter: 'Right Ctrl',
            assignmentValue: 'Right Ctrl',
            HID: '228',
            d:
              'M458,259h-33c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h33c1.1,0,2,0.9,2,2v21C460,258.1,459.1,259,458,259z',
          },
          {
            buttonKey: 'KEY_INSERT',
            defaultValue: 'Insert',
            inputType: 'KeyInput',
            inputID: 'KEY_INSERT',
            counter: 'Insert',
            assignmentValue: 'Insert',
            HID: '73',
            d:
              'M494,155h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C496,154.1,495.1,155,494,155z',
          },
          {
            buttonKey: 'KEY_HOME',
            defaultValue: 'HOME',
            inputType: 'KeyInput',
            inputID: 'KEY_HOME',
            counter: 'Home',
            assignmentValue: 'Home',
            HID: '74',
            d:
              'M520,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C522,154.1,521.1,155,520,155z',
          },
          {
            buttonKey: 'KEY_PAGE_UP',
            defaultValue: 'Page Up',
            inputType: 'KeyInput',
            inputID: 'KEY_PAGE_UP',
            counter: 'Page Up',
            assignmentValue: 'Page Up',
            HID: '75',
            d:
              'M546,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C548,154.1,547.1,155,546,155z',
          },
          {
            buttonKey: 'KEY_DELETE',
            defaultValue: 'Delete',
            inputType: 'KeyInput',
            inputID: 'KEY_DELETE',
            counter: 'Delete',
            assignmentValue: 'Delete',
            HID: '76',
            d:
              'M494,181h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C496,180.1,495.1,181,494,181z',
          },
          {
            buttonKey: 'KEY_END',
            defaultValue: 'End',
            inputType: 'KeyInput',
            inputID: 'KEY_END',
            counter: 'End',
            assignmentValue: 'End',
            HID: '77',
            d:
              'M520,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C522,180.1,521.1,181,520,181z',
          },
          {
            buttonKey: 'KEY_PAGE_DOWN',
            defaultValue: 'Page Down',
            inputType: 'KeyInput',
            inputID: 'KEY_PAGE_DOWN',
            counter: 'Page Down',
            assignmentValue: 'Page Down',
            HID: '78',
            d:
              'M546,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C548,180.1,547.1,181,546,181z',
          },
          {
            buttonKey: 'KEY_UP_ARROW',
            defaultValue: 'Up',
            inputType: 'KeyInput',
            inputID: 'KEY_UP_ARROW',
            counter: 'Up',
            assignmentValue: 'Up',
            HID: '82',
            d:
              'M520,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C522,232.1,521.1,233,520,233z',
          },
          {
            buttonKey: 'KEY_LEFT_ARROW',
            defaultValue: 'Left',
            inputType: 'KeyInput',
            inputID: 'KEY_LEFT_ARROW',
            counter: 'Left',
            assignmentValue: 'Left',
            HID: '80',
            d:
              'M494,259h-22c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v21C496,258.1,495.1,259,494,259z',
          },
          {
            buttonKey: 'KEY_DOWN_ARROW',
            defaultValue: 'Down',
            inputType: 'KeyInput',
            inputID: 'KEY_LEFT_ARROW',
            counter: 'Down',
            assignmentValue: 'Down',
            HID: '81',
            d:
              'M520,259h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C522,258.1,521.1,259,520,259z',
          },
          {
            buttonKey: 'KEY_RIGHT_ARROW',
            defaultValue: 'Right',
            inputType: 'KeyInput',
            inputID: 'KEY_RIGHT_ARROW',
            counter: 'Right',
            assignmentValue: 'Right',
            HID: '79',
            d:
              'M546,259h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C548,258.1,547.1,259,546,259z',
          },
          {
            buttonKey: 'KEY_NUM_LOCK',
            defaultValue: 'Num Lock',
            inputType: 'KeyInput',
            inputID: 'KEY_NUM_LOCK',
            counter: 'Num Lock',
            assignmentValue: 'Num Lock',
            HID: '83',
            d:
              'M581,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C583,154.1,582.1,155,581,155z',
          },
          {
            buttonKey: 'KEY_NUMPAD_SLASH',
            defaultValue: 'Num /',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_SLASH',
            counter: 'Num /',
            assignmentValue: 'Num /',
            HID: '84',
            d:
              'M607,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C609,154.1,608.1,155,607,155z',
          },
          {
            buttonKey: 'KEY_NUMPAD_ASTERISK',
            defaultValue: 'Num *',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_ASTERISK',
            counter: 'Num *',
            assignmentValue: 'Num *',
            HID: '85',
            d:
              'M633,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C635,154.1,634.1,155,633,155z',
          },
          {
            buttonKey: 'KEY_NUMPAD_DASH',
            defaultValue: 'Num -',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_DASH',
            counter: 'Num -',
            assignmentValue: 'Num -',
            HID: '86',
            d:
              'M659,155h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C661,154.1,660.1,155,659,155z',
          },
          {
            buttonKey: 'KEY_NUMPAD_7',
            defaultValue: 'Num 7',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_7',
            counter: 'Num 7',
            assignmentValue: 'Num 7',
            HID: '95',
            d:
              'M581,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C583,180.1,582.1,181,581,181z',
          },
          {
            buttonKey: 'KEY_NUMPAD_8',
            defaultValue: 'Num 8',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_8',
            counter: 'Num 8',
            assignmentValue: 'Num 8',
            HID: '96',
            d:
              'M607,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C609,180.1,608.1,181,607,181z',
          },
          {
            buttonKey: 'KEY_NUMPAD_9',
            defaultValue: 'Num 9',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_9',
            counter: 'Num 9',
            assignmentValue: 'Num 9',
            HID: '97',
            d:
              'M633,181h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C635,180.1,634.1,181,633,181z',
          },
          {
            buttonKey: 'KEY_NUMPAD_PLUS',
            defaultValue: 'Num +',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_PLUS',
            counter: 'Num +',
            assignmentValue: 'Num +',
            HID: '87',
            d:
              'M659,207h-21c-1.1,0-2-0.9-2-2v-47c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v47C661,206.1,660.1,207,659,207z',
          },
          {
            buttonKey: 'KEY_NUMPAD_4',
            defaultValue: 'Num 4',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_4',
            counter: 'Num 4',
            assignmentValue: 'Num 4',
            HID: '92',
            d:
              'M581,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C583,206.1,582.1,207,581,207z',
          },
          {
            buttonKey: 'KEY_NUMPAD_5',
            defaultValue: 'Num 5',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_5',
            counter: 'Num 5',
            assignmentValue: 'Num 5',
            HID: '93',
            d:
              'M607,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C609,206.1,608.1,207,607,207z',
          },
          {
            buttonKey: 'KEY_NUMPAD_6',
            defaultValue: 'Num 6',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_6',
            counter: 'Num 6',
            assignmentValue: 'Num 6',
            HID: '94',
            d:
              'M633,207h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C635,206.1,634.1,207,633,207z',
          },
          {
            buttonKey: 'KEY_NUMPAD_1',
            defaultValue: 'Num 1',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_1',
            counter: 'Num 1',
            assignmentValue: 'Num 1',
            HID: '89',
            d:
              'M581,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C583,232.1,582.1,233,581,233z',
          },
          {
            buttonKey: 'KEY_NUMPAD_2',
            defaultValue: 'Num 2',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_2',
            counter: 'Num 2',
            assignmentValue: 'Num 2',
            HID: '90',
            d:
              'M607,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C609,232.1,608.1,233,607,233z',
          },
          {
            buttonKey: 'KEY_NUMPAD_3',
            defaultValue: 'Num 3',
            
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_3',
            counter: 'Num 3',
            assignmentValue: 'Num 3',
            HID: '91',
            d:
              'M633,233h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C635,232.1,634.1,233,633,233z',
          },
          {
            buttonKey: 'KEY_NUMPAD_ENTER',
            defaultValue: 'Num Enter',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_ENTER',
            counter: 'Num Enter',
            assignmentValue: 'Num Enter',
            HID: '88',
            d:
              'M659,259h-21c-1.1,0-2-0.9-2-2v-47c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v47C661,258.1,660.1,259,659,259z',
          },
          {
            buttonKey: 'KEY_NUMPAD_0',
            defaultValue: 'Num 0',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_0',
            counter: 'Num 0',
            assignmentValue: 'Num 0',
            HID: '98',
            d:
              'M607,259h-47c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h47c1.1,0,2,0.9,2,2v21C609,258.1,608.1,259,607,259z',
          },
          {
            buttonKey: 'KEY_NUMPAD_PERIOD',
            defaultValue: 'Num .',
            inputType: 'KeyInput',
            inputID: 'KEY_NUMPAD_PERIOD',
            counter: 'Num .',
            assignmentValue: 'Num .',
            HID: '99',
            d:
              'M633,259h-21c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v21C635,258.1,634.1,259,633,259z',
          },
        ],
      },
    },
  ];
  
  groupList.map((groupItem, index) => {
    groupItem.group.buttonList.forEach((item, idx) =>{
      item.isFocused = focus;
      item.isMapped = mapped;
      item.isEnabled = enabled;
      item.functionList = funcList;
      item.buttonPos = Pos;
      item.assignment = assign;
      item.pageID = pageid;
    })
  })
