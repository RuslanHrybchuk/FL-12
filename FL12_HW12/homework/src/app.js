const root = document.getElementById('root');

let mainFrame = document.createElement('div');
let addNewButton = document.createElement('button');
let mainFrameSet = document.createElement('div');
let mainFrameCompleted = document.createElement('div');
let mainFrameLine = document.createElement('div');

addNewButton.textContent = 'add new';
mainFrameLine.innerHTML = '<br><hr>'
mainFrameCompleted.innerHTML = 'completed sets';

mainFrame.append(addNewButton, mainFrameSet, mainFrameLine, mainFrameCompleted);

root.append(mainFrame);