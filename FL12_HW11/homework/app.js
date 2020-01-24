const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let container = document.createElement('div');

function build_Structure(structure, wrapper){
  for (let i = 0; i < structure.length; i++){
    if(structure[i].folder){

      let innerContainer = document.createElement('div');

      if(!structure[i].children){
        let span = document.createElement('span');
        span.innerText = 'Folder is empty';
        span.classList.add('italic');
        span.classList.add('left_Margin10');
        span.classList.add('hide');
        createElement(structure[i].title, true, wrapper, innerContainer, span);
        wrapper.appendChild(span);
      }

      if(structure[i].children){
        innerContainer.classList.add('left_Margin');
        innerContainer.classList.add('hide');

        createElement(structure[i].title, true, wrapper, innerContainer);
        build_Structure(structure[i].children, innerContainer); 
        wrapper.appendChild(innerContainer);
      }
    } else {
        createElement(structure[i].title, false, wrapper);
    }
  }
} 

function createElement(text, isFolder, container, innerContainer, tempSpan) {

  let element = document.createElement('div');
  let element_Icon = document.createElement('i');
  let textSpan = document.createElement('span');
  textSpan.innerText = text;

  element.classList.add('element');
  element_Icon.classList.add('material-icons');

    if (isFolder){
      element_Icon.classList.add('folder_image');
      element_Icon.innerText = 'folder';

      element.addEventListener('click', () => {
        if(element_Icon.innerHTML === 'folder'){
          element_Icon.innerHTML = 'folder_open';
          innerContainer.classList.remove('hide');
          tempSpan.classList.remove('hide');
        } else {
          element_Icon.innerHTML = 'folder';
          innerContainer.classList.add('hide');
          tempSpan.classList.add('hide');
        }
      });
    } else {
        element_Icon.classList.add('file_image');
        element_Icon.innerText = 'insert_drive_file';
    }
  element.appendChild(element_Icon);
  element.appendChild(textSpan);
  container.appendChild(element);
}

build_Structure(structure, container);
rootNode.appendChild(container);