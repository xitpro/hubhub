import {
    getCurrentList,
    setCurrentProfile,
    addProfile,
    renameProfile,
    deleteProfile,
    switchProfile,
} from '../actions/profileAction';
import service from '../../services/bonus';

const defaultProfiles = [
    {
        id: 0,
        name: 'Default',
        img: 'profile_sel_default.svg',
        class: 'default',
        isDefault: true,
        choose: 'active',
      },
      {
        id: 1,
        name: 'Game',
        img: 'icon_profiles_game.svg',
        class: 'game',
        isDefault: true,
        choose: '',
      },
      {
        id: 2,
        name: 'Movie',
        img: 'icon_profiles_movie.svg',
        class: 'movie',
        isDefault: true,
        choose: '',
      },
      {
        id: 3,
        name: 'Music',
        img: 'icon_profiles_music.svg',
        class: 'music',
        isDefault: true,
        choose: '',
      },
      
];

const selected = 0;
const newCustom = {
  id: defaultProfiles.length - 1,
  name: 'New Profile',
  img: 'profile_sel_custom.svg',
  class: 'custom',
  isDefault: false,
  choose: 'active',
};

function getProfileList() {
  return function(dispatch) {
    if (!localStorage.hasOwnProperty("defaultProfiles") 
        || localStorage["defaultProfiles"]===null) {
      localStorage.setItem('defaultProfiles', JSON.stringify(defaultProfiles));
      localStorage.setItem('selected', selected);
    } else{
      console.log('dsadsa ' ,)
      localStorage.setItem('selected', selected);
      var b = JSON.parse(localStorage.defaultProfiles)
      var c = b.find(x => x.choose === 'active')
      c.choose = '';
      b[0].choose = 'active'
      service.initAutoSave({...b})
      localStorage.setItem('defaultProfiles', JSON.stringify(b));
    }
    return dispatch(getCurrentList(b));
  };
}

function chooseProfile(index) {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var a = list.find(x => x.choose === 'active')
    a.choose = ''
    list[index].choose = 'active';
    service.initAutoSave({...list})
    localStorage.setItem('defaultProfiles', JSON.stringify(list));
    localStorage.setItem('selected', index);
    console.log('sss', JSON);
    return dispatch(setCurrentProfile());
  };
}

function moveUp() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var selected = JSON.parse(localStorage.selected);
    if (selected > 0) {
      var movedIndex = selected - 1;
      var movedProfile = list[movedIndex];
      var profile = list[selected];

      list[movedIndex] = profile;
      list[selected] = movedProfile;
      service.initAutoSave({...list})
      localStorage.setItem('defaultProfiles', JSON.stringify(list));
      localStorage.setItem('selected', movedIndex);
    }

    return dispatch(switchProfile());
  };
}

function moveDown() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var selected = JSON.parse(localStorage.selected);
    if (selected < list.length - 1) {
      var movedIndex = selected + 1;
      var movedProfile = list[movedIndex];
      var profile = list[selected];

      list[movedIndex] = profile;
      list[selected] = movedProfile;
      service.initAutoSave({...list})
      localStorage.setItem('defaultProfiles', JSON.stringify(list));
      localStorage.setItem('selected', movedIndex);
    }

    return dispatch(switchProfile());
  };
}

function addNewProfile() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var selected = JSON.parse(localStorage.selected);
    newCustom.id = list.length;
    console.log('fuck this', list.length)
    list.push(newCustom);
    list[selected].choose = '';
    service.initAutoSave({...list})
    localStorage.setItem('defaultProfiles', JSON.stringify(list));
    localStorage.setItem('selected', list.length - 1);
    
    return dispatch(addProfile());
  };
}

function changeProfileName(Name) {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var selected = JSON.parse(localStorage.selected);
    console.log('Dis vo day ', Name);
    if(Name.trim() === ""){
      return list[selected].name;
    } else{
      list[selected].name = Name;
    }
    service.initAutoSave({...list})
    localStorage.setItem('defaultProfiles', JSON.stringify(list));
    return dispatch(renameProfile());
  };
}

function removeProfile() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.defaultProfiles);
    var selected = JSON.parse(localStorage.selected);
    
    var nextProfile;
    if (selected === 0) {
      nextProfile = selected;
      list[1].choose = 'active';
      list.shift();
    } else {
      nextProfile = selected - 1;
      list[nextProfile].choose = 'active';
      list.splice(selected, 1);
    }
    service.initAutoSave({...list})
    localStorage.setItem('defaultProfiles', JSON.stringify(list));
    localStorage.setItem('selected', nextProfile);
    return dispatch(deleteProfile());
  };
}

export {
  getProfileList,
  chooseProfile,
  moveUp,
  moveDown,
  addNewProfile,
  changeProfileName,
  removeProfile,
};
