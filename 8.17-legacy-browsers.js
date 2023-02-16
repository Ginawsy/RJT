/************* 
 * 8.17 Test *
 *************/


// store info about the experiment session:
let expName = '8.17';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// Define the combo function
var combo_list = new Array();
var combo_listP = new Array();

Array.prototype.append = [].push;

// Initialize an index
combo_num = 0
list_num = 0
combo_numP = 0


var combo_listP = new Array();

Array.prototype.append = [].push;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(BlankScreenRoutineBegin());
flowScheduler.add(BlankScreenRoutineEachFrame());
flowScheduler.add(BlankScreenRoutineEnd());
flowScheduler.add(BlankScreenRoutineBegin());
flowScheduler.add(BlankScreenRoutineEachFrame());
flowScheduler.add(BlankScreenRoutineEnd());
flowScheduler.add(InstructionScreen1RoutineBegin());
flowScheduler.add(InstructionScreen1RoutineEachFrame());
flowScheduler.add(InstructionScreen1RoutineEnd());
flowScheduler.add(BlankScreenRoutineBegin());
flowScheduler.add(BlankScreenRoutineEachFrame());
flowScheduler.add(BlankScreenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(InstructionScreen2RoutineBegin());
flowScheduler.add(InstructionScreen2RoutineEachFrame());
flowScheduler.add(InstructionScreen2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(InstructionScreen3RoutineBegin());
flowScheduler.add(InstructionScreen3RoutineEachFrame());
flowScheduler.add(InstructionScreen3RoutineEnd());
flowScheduler.add(BlankScreenRoutineBegin());
flowScheduler.add(BlankScreenRoutineEachFrame());
flowScheduler.add(BlankScreenRoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);
flowScheduler.add(InstructionScreen4RoutineBegin());
flowScheduler.add(InstructionScreen4RoutineEachFrame());
flowScheduler.add(InstructionScreen4RoutineEnd());
flowScheduler.add(CompareRoutineBegin());
flowScheduler.add(CompareRoutineEachFrame());
flowScheduler.add(CompareRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(ThankYouScreenRoutineBegin());
flowScheduler.add(ThankYouScreenRoutineEachFrame());
flowScheduler.add(ThankYouScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var textWelcome;
var BlankScreenClock;
var textBlank;
var InstructionScreen1Clock;
var textInstruction1;
var AUTResponseClock;
var textInstruction;
var textbox1;
var counter_response;
var response;
var AddClock;
var InstructionScreen2Clock;
var textInstruction2;
var CheckResponseClock;
var text_Check;
var counter_check;
var textbox2;
var check;
var ChangeClock;
var InstructionScreen3Clock;
var textInstruction3;
var m1;
var combo_numP;
var choseP;
var tmpP;
var PracticeClock;
var combo_1P;
var combo_2P;
var unrelatedP;
var relatedP;
var slider_2;
var curV1;
var textScale;
var rjttext;
var key_resp;
var text_Intro;
var SJTcounterP;
var InstructionScreen4Clock;
var text_5;
var CompareClock;
var chose;
var tmp;
var combo_num;
var m2;
var RJTClock;
var combo_1;
var combo_2;
var Unrelated;
var Related;
var slider;
var currVal1;
var textScales;
var rjt_text;
var key_resp_2;
var textIntro2;
var SJTcounter;
var BreakClock;
var text_3;
var counter_text2;
var block_counter;
var text_4;
var ThankYouScreenClock;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: 'Welcome to the experiment!  \n\n\n\nPlease complete this experiment in one sitting, in a quiet place free of distractions.\n\nPress <Enter> to begin. \n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "BlankScreen"
  BlankScreenClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "InstructionScreen1"
  InstructionScreen1Clock = new util.Clock();
  textInstruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstruction1',
    text: 'For this task, you will be given a category, and be asked to type 20 items from that category. \n\nFor example, if the category is “musical instruments”, you should type 20 instruments. \n\nYou will type your items into a textbox. Only type one item at a time, then press <Enter>.\n\nDo not enter the same item twice, or the same root word with different suffixes. For example, if you list “guitar”, do not also list “guitars.” \n\nYou will have as much time as you need to enter 20 items – just press <Enter> after each one. \n\nPress <Enter> to get started.\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "AUTResponse"
  AUTResponseClock = new util.Clock();
  textInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstruction',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox1',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.2)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  counter_response = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter_response',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.7, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  response = 0;
  
  // Initialize components for Routine "Add"
  AddClock = new util.Clock();
  // Initialize components for Routine "InstructionScreen2"
  InstructionScreen2Clock = new util.Clock();
  textInstruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstruction2',
    text: 'Next, we will check the spelling of the animals you typed. \n\nOn the next screen, we will cycle through each animal. \n\nIf the animal spelling is correct, you can simply press <Enter>. \n\nIf the animal is misspelled, just type the correct spelling, then press <Enter>.\n\nPress <Enter> to begin spellchecking.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "CheckResponse"
  CheckResponseClock = new util.Clock();
  text_Check = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Check',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  counter_check = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter_check',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.7, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  textbox2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox2',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  check = 0;
  
  // Initialize components for Routine "Change"
  ChangeClock = new util.Clock();
  // Initialize components for Routine "InstructionScreen3"
  InstructionScreen3Clock = new util.Clock();
  textInstruction3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstruction3',
    text: 'Next, you will see all the animal names you typed again. This time, you will see two animal names at a time. Your job is to rate how RELATED you think these two words are to each other. \n\nYou will use a sliding scale, ranging from 1 (highly UNRELATED) to 9 (highly RELATED). Use the mouse to move the slider on the scale, then press the <Space> key to proceed to the next trial. \n\nTry to give a quick, intuitive judgement, without thinking too much about it. \n\nPress <Enter> to practice the task with words from the FOOD category.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  combo_listP.push("apple");
  combo_listP.push("banana");
  combo_listP.push("cereal");
  m1 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(3), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      m1.push(i);
  }
  combo_numP = 0;
  choseP = 0;
  tmpP = [];
  for (var i, _pj_c = 0, _pj_a = util.range(m1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      choseP = util.randint(0, (m1.length - 1));
      tmpP.push(m1[choseP]);
      m1 = (m1.slice(0, choseP) + m1.slice((choseP + 1)));
  }
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  combo_1P = new visual.TextStim({
    win: psychoJS.window,
    name: 'combo_1P',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  combo_2P = new visual.TextStim({
    win: psychoJS.window,
    name: 'combo_2P',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  unrelatedP = new visual.TextStim({
    win: psychoJS.window,
    name: 'unrelatedP',
    text: 'highly UNRELATED',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  relatedP = new visual.TextStim({
    win: psychoJS.window,
    name: 'relatedP',
    text: 'highly RELATED',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    size: [0.9, 0.12], pos: [0.03, (- 0.35)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  curV1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'curV1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  textScale = new visual.TextStim({
    win: psychoJS.window,
    name: 'textScale',
    text: '      1         2         3         4         5         6         7         8         9',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.036,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  rjttext = new visual.TextStim({
    win: psychoJS.window,
    name: 'rjttext',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.7, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_Intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Intro',
    text: 'Click and drag the circle, then press <Space> to proceed.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  SJTcounterP = 0;
  
  // Initialize components for Routine "InstructionScreen4"
  InstructionScreen4Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Okay, now you are ready to get started with the main task.\n\nYou will complete 5 rounds of the task. Each round will have 39 trials. After each round, you can take an optional short break. \n\nYou can keep track of the trials at the top right corner of the screen.\n\nOccasionally, you will see the same word twice. Here, you should select 9 (highly RELATED).  \n\nRemember to give a quick, intuitive judgement, without thinking too much about it. \n\nPress <Enter> to begin. \n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Compare"
  CompareClock = new util.Clock();
  chose = 0;
  tmp = [];
  combo_num = 0;
  m2 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(190), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      m2.push(i);
  }
  for (var i, _pj_c = 0, _pj_a = util.range(m2.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      chose = util.randint(0, (m2.length - 1));
      tmp.push(m2[chose]);
      m2 = (m2.slice(0, chose) + m2.slice((chose + 1)));
  }
  
  // Initialize components for Routine "RJT"
  RJTClock = new util.Clock();
  combo_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'combo_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  combo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'combo_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Unrelated = new visual.TextStim({
    win: psychoJS.window,
    name: 'Unrelated',
    text: 'highly UNRELATED',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Related = new visual.TextStim({
    win: psychoJS.window,
    name: 'Related',
    text: 'highly RELATED',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [0.9, 0.12], pos: [0.03, (- 0.35)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  currVal1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'currVal1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  textScales = new visual.TextStim({
    win: psychoJS.window,
    name: 'textScales',
    text: '      1         2         3         4         5         6         7         8         9',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.036,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  rjt_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rjt_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.7, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textIntro2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textIntro2',
    text: 'Click and drag the circle, then press <Space> to proceed.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  SJTcounter = 0;
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Thanks. You can take a short break if you want, or you can keep going. \n\n\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  counter_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter_text2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  block_counter = 5;
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Press <Enter> to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ThankYouScreen"
  ThankYouScreenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '**Please read the following to receive credit**\n\nThank you so much for your participation!  You have now completed the study.  After pressing Enter on this page, you will see an orange warning message, followed by a green message stating “Thank you for your patience”.  Click OK when you see this message.  Then you may safely close the page. \n\nWe hope you have a nice day:)\n\nPress <Enter> to end the experiment.\n\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.037,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(textWelcome);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'WelcomeScreen'-------
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BlankScreenComponents;
function BlankScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'BlankScreen'-------
    t = 0;
    BlankScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    BlankScreenComponents = [];
    BlankScreenComponents.push(textBlank);
    
    BlankScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function BlankScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'BlankScreen'-------
    // get current time
    t = BlankScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlank* updates
    if (t >= 0.0 && textBlank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlank.tStart = t;  // (not accounting for frame time here)
      textBlank.frameNStart = frameN;  // exact frame index
      
      textBlank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlankScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlankScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'BlankScreen'-------
    BlankScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var InstructionScreen1Components;
function InstructionScreen1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InstructionScreen1'-------
    t = 0;
    InstructionScreen1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    InstructionScreen1Components = [];
    InstructionScreen1Components.push(textInstruction1);
    
    InstructionScreen1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionScreen1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionScreen1'-------
    // get current time
    t = InstructionScreen1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstruction1* updates
    if (t >= 0.0 && textInstruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstruction1.tStart = t;  // (not accounting for frame time here)
      textInstruction1.frameNStart = frameN;  // exact frame index
      
      textInstruction1.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionScreen1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionScreen1RoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionScreen1'-------
    InstructionScreen1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InstructionScreen1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(AUTResponseRoutineBegin(snapshot));
      trialsLoopScheduler.add(AUTResponseRoutineEachFrame());
      trialsLoopScheduler.add(AUTResponseRoutineEnd());
      trialsLoopScheduler.add(BlankScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(BlankScreenRoutineEachFrame());
      trialsLoopScheduler.add(BlankScreenRoutineEnd());
      trialsLoopScheduler.add(AddRoutineBegin(snapshot));
      trialsLoopScheduler.add(AddRoutineEachFrame());
      trialsLoopScheduler.add(AddRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(CheckResponseRoutineBegin(snapshot));
      trials_3LoopScheduler.add(CheckResponseRoutineEachFrame());
      trials_3LoopScheduler.add(CheckResponseRoutineEnd());
      trials_3LoopScheduler.add(ChangeRoutineBegin(snapshot));
      trials_3LoopScheduler.add(ChangeRoutineEachFrame());
      trials_3LoopScheduler.add(ChangeRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      const snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(PracticeRoutineBegin(snapshot));
      trials_5LoopScheduler.add(PracticeRoutineEachFrame());
      trials_5LoopScheduler.add(PracticeRoutineEnd());
      trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_2LoopScheduler.add(trials_4LoopScheduler);
      trials_2LoopScheduler.add(trials_4LoopEnd);
      trials_2LoopScheduler.add(BreakRoutineBegin(snapshot));
      trials_2LoopScheduler.add(BreakRoutineEachFrame());
      trials_2LoopScheduler.add(BreakRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 39, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      const snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(RJTRoutineBegin(snapshot));
      trials_4LoopScheduler.add(RJTRoutineEachFrame());
      trials_4LoopScheduler.add(RJTRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var AUTResponseComponents;
function AUTResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'AUTResponse'-------
    t = 0;
    AUTResponseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textInstruction.setText('Category: ANIMALS \n\nType an animal below, then press <Enter> to type another animal:\n\n');
    textbox1.setText('');
    textbox1.setText('');
    psychoJS.eventManager.clearEvents("keyboard");
    
    textbox1.refresh();
    response = (response + 1);
    counter_response.text = (response.toString() + " of 20");
    
    // keep track of which components have finished
    AUTResponseComponents = [];
    AUTResponseComponents.push(textInstruction);
    AUTResponseComponents.push(textbox1);
    AUTResponseComponents.push(counter_response);
    
    AUTResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AUTResponseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'AUTResponse'-------
    // get current time
    t = AUTResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstruction* updates
    if (t >= 0.0 && textInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstruction.tStart = t;  // (not accounting for frame time here)
      textInstruction.frameNStart = frameN;  // exact frame index
      
      textInstruction.setAutoDraw(true);
    }

    
    // *textbox1* updates
    if (t >= 0.0 && textbox1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox1.tStart = t;  // (not accounting for frame time here)
      textbox1.frameNStart = frameN;  // exact frame index
      
      textbox1.setAutoDraw(true);
    }

    
    // *counter_response* updates
    if (t >= 0.0 && counter_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter_response.tStart = t;  // (not accounting for frame time here)
      counter_response.frameNStart = frameN;  // exact frame index
      
      counter_response.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    textbox1._pixi.focus();
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AUTResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AUTResponseRoutineEnd() {
  return async function () {
    //------Ending Routine 'AUTResponse'-------
    AUTResponseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textbox1.text',textbox1.text)
    // the Routine "AUTResponse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var AddComponents;
function AddRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Add'-------
    t = 0;
    AddClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    combo_list.push(textbox1.text);
    console.log(combo_list);
    
    // keep track of which components have finished
    AddComponents = [];
    
    AddComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AddRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Add'-------
    // get current time
    t = AddClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AddComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AddRoutineEnd() {
  return async function () {
    //------Ending Routine 'Add'-------
    AddComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Add" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var InstructionScreen2Components;
function InstructionScreen2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InstructionScreen2'-------
    t = 0;
    InstructionScreen2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    InstructionScreen2Components = [];
    InstructionScreen2Components.push(textInstruction2);
    
    InstructionScreen2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionScreen2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionScreen2'-------
    // get current time
    t = InstructionScreen2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstruction2* updates
    if (t >= 0.0 && textInstruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstruction2.tStart = t;  // (not accounting for frame time here)
      textInstruction2.frameNStart = frameN;  // exact frame index
      
      textInstruction2.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionScreen2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionScreen2RoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionScreen2'-------
    InstructionScreen2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InstructionScreen2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CheckResponseComponents;
function CheckResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'CheckResponse'-------
    t = 0;
    CheckResponseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_Check.setText('');
    text_Check.text = combo_list[list_num];
    
    textbox2.setText('');
    textbox2.setText('');
    psychoJS.eventManager.clearEvents("keyboard");
    
    textbox2.refresh();
    check = (check + 1);
    counter_check.text = (check.toString() + " 0f 20");
    
    // keep track of which components have finished
    CheckResponseComponents = [];
    CheckResponseComponents.push(text_Check);
    CheckResponseComponents.push(counter_check);
    CheckResponseComponents.push(textbox2);
    
    CheckResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CheckResponseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'CheckResponse'-------
    // get current time
    t = CheckResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Check* updates
    if (t >= 0.0 && text_Check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Check.tStart = t;  // (not accounting for frame time here)
      text_Check.frameNStart = frameN;  // exact frame index
      
      text_Check.setAutoDraw(true);
    }

    
    // *counter_check* updates
    if (t >= 0.0 && counter_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter_check.tStart = t;  // (not accounting for frame time here)
      counter_check.frameNStart = frameN;  // exact frame index
      
      counter_check.setAutoDraw(true);
    }

    
    // *textbox2* updates
    if (t >= 0.0 && textbox2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox2.tStart = t;  // (not accounting for frame time here)
      textbox2.frameNStart = frameN;  // exact frame index
      
      textbox2.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    textbox2._pixi.focus();
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CheckResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckResponseRoutineEnd() {
  return async function () {
    //------Ending Routine 'CheckResponse'-------
    CheckResponseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textbox2.text',textbox2.text)
    // the Routine "CheckResponse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ChangeComponents;
function ChangeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Change'-------
    t = 0;
    ChangeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    ChangeComponents = [];
    
    ChangeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ChangeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Change'-------
    // get current time
    t = ChangeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (((textbox2.text.length >= 2) && (textbox2.text !== ""))) {
        combo_list[list_num] = textbox2.text;
    } else {
        combo_list[list_num] = text_Check.text;
    }
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ChangeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var list_num;
function ChangeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Change'-------
    ChangeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    list_num = (list_num + 1);
    
    // the Routine "Change" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var new_arrayP;
var new_arrayP2;
var InstructionScreen3Components;
function InstructionScreen3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InstructionScreen3'-------
    t = 0;
    InstructionScreen3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    function n_length_combo(lst, n) {
        var l, m, remLst, remainlst_combo;
        if ((n === 0)) {
            return [[]];
        }
        l = [];
        for (var i, _pj_c = 0, _pj_a = util.range(0, lst.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            m = lst[i];
            remLst = lst.slice((i + 1));
            remainlst_combo = n_length_combo(remLst, (n - 1));
            for (var p, _pj_f = 0, _pj_d = remainlst_combo, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                p = _pj_d[_pj_f];
                l.push([m, ...p]);
            }
        }
        return l;
    }
    new_arrayP = n_length_combo(combo_listP, 2);
    new_arrayP2 = util.shuffle(new_arrayP);
    console.log(new_arrayP);
    
    // keep track of which components have finished
    InstructionScreen3Components = [];
    InstructionScreen3Components.push(textInstruction3);
    
    InstructionScreen3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionScreen3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionScreen3'-------
    // get current time
    t = InstructionScreen3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstruction3* updates
    if (t >= 0.0 && textInstruction3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstruction3.tStart = t;  // (not accounting for frame time here)
      textInstruction3.frameNStart = frameN;  // exact frame index
      
      textInstruction3.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionScreen3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionScreen3RoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionScreen3'-------
    InstructionScreen3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InstructionScreen3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var markerSize;
var slide2rating;
var slide2rt;
var PracticeComponents;
function PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Practice'-------
    t = 0;
    PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    combo_1P.setText('');
    combo_2P.setText('');
    slider_2.reset()
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    combo_1P.text = new_arrayP2[combo_numP][0];
    combo_2P.text = new_arrayP2[combo_numP][1];
    combo_numP = (combo_numP + 1);
    markerSize = util.to_px(slider_2.size, "height", psychoJS.window)[1];
    slider_2.markerPos = 5;
    SJTcounterP = (SJTcounterP + 1);
    rjttext.text = ((SJTcounterP.toString() + " of") + " 3");
    slide2rating = "";
    slide2rt = "";
    
    // keep track of which components have finished
    PracticeComponents = [];
    PracticeComponents.push(combo_1P);
    PracticeComponents.push(combo_2P);
    PracticeComponents.push(unrelatedP);
    PracticeComponents.push(relatedP);
    PracticeComponents.push(slider_2);
    PracticeComponents.push(curV1);
    PracticeComponents.push(textScale);
    PracticeComponents.push(rjttext);
    PracticeComponents.push(key_resp);
    PracticeComponents.push(text_Intro);
    
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var cVal2;
function PracticeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Practice'-------
    // get current time
    t = PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *combo_1P* updates
    if (t >= 0.0 && combo_1P.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combo_1P.tStart = t;  // (not accounting for frame time here)
      combo_1P.frameNStart = frameN;  // exact frame index
      
      combo_1P.setAutoDraw(true);
    }

    
    // *combo_2P* updates
    if (t >= 0.0 && combo_2P.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combo_2P.tStart = t;  // (not accounting for frame time here)
      combo_2P.frameNStart = frameN;  // exact frame index
      
      combo_2P.setAutoDraw(true);
    }

    
    // *unrelatedP* updates
    if (t >= 0.0 && unrelatedP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      unrelatedP.tStart = t;  // (not accounting for frame time here)
      unrelatedP.frameNStart = frameN;  // exact frame index
      
      unrelatedP.setAutoDraw(true);
    }

    
    // *relatedP* updates
    if (t >= 0.0 && relatedP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relatedP.tStart = t;  // (not accounting for frame time here)
      relatedP.frameNStart = frameN;  // exact frame index
      
      relatedP.setAutoDraw(true);
    }

    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    
    // *curV1* updates
    if (t >= 0.0 && curV1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      curV1.tStart = t;  // (not accounting for frame time here)
      curV1.frameNStart = frameN;  // exact frame index
      
      curV1.setAutoDraw(true);
    }

    
    // *textScale* updates
    if (t >= 0.0 && textScale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textScale.tStart = t;  // (not accounting for frame time here)
      textScale.frameNStart = frameN;  // exact frame index
      
      textScale.setAutoDraw(true);
    }

    
    // *rjttext* updates
    if (t >= 0.0 && rjttext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rjttext.tStart = t;  // (not accounting for frame time here)
      rjttext.frameNStart = frameN;  // exact frame index
      
      rjttext.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if ((slider_2.rating) && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_Intro* updates
    if (t >= 0.0 && text_Intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Intro.tStart = t;  // (not accounting for frame time here)
      text_Intro.frameNStart = frameN;  // exact frame index
      
      text_Intro.setAutoDraw(true);
    }

    cVal2 = slider_2.markerPos;
    curV1.text = (Math.round((cVal2 * 100.0)) / 100.0);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Practice'-------
    PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    slide2rating = slider_2.getRating();
    slide2rt = slider_2.getRT();
    if ((SJTcounterP === 3)) {
        SJTcounterP = 0;
    }
    psychoJS.experiment.addData("word1", combo_1P.text);
    psychoJS.experiment.addData("word2", combo_2P.text);
    psychoJS.experiment.addData("rating", slide2rating);
    psychoJS.experiment.addData("rjt_RT", slide2rt);
    
    // the Routine "Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var InstructionScreen4Components;
function InstructionScreen4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InstructionScreen4'-------
    t = 0;
    InstructionScreen4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    InstructionScreen4Components = [];
    InstructionScreen4Components.push(text_5);
    
    InstructionScreen4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionScreen4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionScreen4'-------
    // get current time
    t = InstructionScreen4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionScreen4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionScreen4RoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionScreen4'-------
    InstructionScreen4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InstructionScreen4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var new_array;
var new_array2;
var CompareComponents;
function CompareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Compare'-------
    t = 0;
    CompareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    function n_length_combo(lst, n) {
        var l, m, remLst, remainlst_combo;
        if ((n === 0)) {
            return [[]];
        }
        l = [];
        for (var i, _pj_c = 0, _pj_a = util.range(0, lst.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            m = lst[i];
            remLst = lst.slice((i + 1));
            remainlst_combo = n_length_combo(remLst, (n - 1));
            for (var p, _pj_f = 0, _pj_d = remainlst_combo, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                p = _pj_d[_pj_f];
                l.push([m, ...p]);
            }
        }
        return l;
    }
    new_array = n_length_combo(combo_list, 2);
    new_array2 = util.shuffle(new_array);
    console.log(new_array);
    
    // keep track of which components have finished
    CompareComponents = [];
    
    CompareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CompareRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Compare'-------
    // get current time
    t = CompareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CompareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CompareRoutineEnd() {
  return async function () {
    //------Ending Routine 'Compare'-------
    CompareComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Compare" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var slide1rating;
var slide1rt;
var RJTComponents;
function RJTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'RJT'-------
    t = 0;
    RJTClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    combo_1.setText('');
    combo_2.setText('');
    slider.reset()
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    if ((SJTcounter === 0)) {
        combo_1.text = combo_list[0];
        combo_2.text = combo_list[0];
    }
    if ((SJTcounter !== 0)) {
        combo_1.text = new_array2[combo_num][0];
        combo_2.text = new_array2[combo_num][1];
        combo_num = (combo_num + 1);
    }
    markerSize = util.to_px(slider.size, "height", psychoJS.window)[1];
    slider.markerPos = 5;
    SJTcounter = (SJTcounter + 1);
    rjt_text.text = ((SJTcounter.toString() + " of") + " 39");
    slide1rating = "";
    slide1rt = "";
    
    // keep track of which components have finished
    RJTComponents = [];
    RJTComponents.push(combo_1);
    RJTComponents.push(combo_2);
    RJTComponents.push(Unrelated);
    RJTComponents.push(Related);
    RJTComponents.push(slider);
    RJTComponents.push(currVal1);
    RJTComponents.push(textScales);
    RJTComponents.push(rjt_text);
    RJTComponents.push(key_resp_2);
    RJTComponents.push(textIntro2);
    
    RJTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var cVal1;
function RJTRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'RJT'-------
    // get current time
    t = RJTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *combo_1* updates
    if (t >= 0.0 && combo_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combo_1.tStart = t;  // (not accounting for frame time here)
      combo_1.frameNStart = frameN;  // exact frame index
      
      combo_1.setAutoDraw(true);
    }

    
    // *combo_2* updates
    if (t >= 0.0 && combo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combo_2.tStart = t;  // (not accounting for frame time here)
      combo_2.frameNStart = frameN;  // exact frame index
      
      combo_2.setAutoDraw(true);
    }

    
    // *Unrelated* updates
    if (t >= 0.0 && Unrelated.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Unrelated.tStart = t;  // (not accounting for frame time here)
      Unrelated.frameNStart = frameN;  // exact frame index
      
      Unrelated.setAutoDraw(true);
    }

    
    // *Related* updates
    if (t >= 0.0 && Related.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Related.tStart = t;  // (not accounting for frame time here)
      Related.frameNStart = frameN;  // exact frame index
      
      Related.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *currVal1* updates
    if (t >= 0.0 && currVal1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      currVal1.tStart = t;  // (not accounting for frame time here)
      currVal1.frameNStart = frameN;  // exact frame index
      
      currVal1.setAutoDraw(true);
    }

    
    // *textScales* updates
    if (t >= 0.0 && textScales.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textScales.tStart = t;  // (not accounting for frame time here)
      textScales.frameNStart = frameN;  // exact frame index
      
      textScales.setAutoDraw(true);
    }

    
    // *rjt_text* updates
    if (t >= 0.0 && rjt_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rjt_text.tStart = t;  // (not accounting for frame time here)
      rjt_text.frameNStart = frameN;  // exact frame index
      
      rjt_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if ((slider.rating) && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textIntro2* updates
    if (t >= 0.0 && textIntro2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textIntro2.tStart = t;  // (not accounting for frame time here)
      textIntro2.frameNStart = frameN;  // exact frame index
      
      textIntro2.setAutoDraw(true);
    }

    cVal1 = slider.markerPos;
    currVal1.text = (Math.round((cVal1 * 100.0)) / 100.0);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RJTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RJTRoutineEnd() {
  return async function () {
    //------Ending Routine 'RJT'-------
    RJTComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    slide1rating = slider.getRating();
    slide1rt = slider.getRT();
    if ((SJTcounter === 39)) {
        SJTcounter = 0;
    }
    psychoJS.experiment.addData("word1", combo_1.text);
    psychoJS.experiment.addData("word2", combo_2.text);
    psychoJS.experiment.addData("rating", slide1rating);
    psychoJS.experiment.addData("rjt_RT", slide1rt);
    
    // the Routine "RJT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Break'-------
    t = 0;
    BreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block_counter = (block_counter - 1);
    counter_text2.text = (("You have " + block_counter.toString()) + " of 5 rounds left.");
    
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(text_3);
    BreakComponents.push(counter_text2);
    BreakComponents.push(text_4);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BreakRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Break'-------
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *counter_text2* updates
    if (t >= 0.0 && counter_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter_text2.tStart = t;  // (not accounting for frame time here)
      counter_text2.frameNStart = frameN;  // exact frame index
      
      counter_text2.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd() {
  return async function () {
    //------Ending Routine 'Break'-------
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ThankYouScreenComponents;
function ThankYouScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ThankYouScreen'-------
    t = 0;
    ThankYouScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    ThankYouScreenComponents = [];
    ThankYouScreenComponents.push(text);
    
    ThankYouScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ThankYouScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ThankYouScreen'-------
    // get current time
    t = ThankYouScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("return", keys)) {
            continueRoutine = false;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ThankYouScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankYouScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'ThankYouScreen'-------
    ThankYouScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ThankYouScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
