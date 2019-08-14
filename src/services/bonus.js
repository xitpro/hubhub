import Axios from 'axios';
let autoSave = null;
const createTimeOut = data => {
  return window.setTimeout(() => {
    (async () => {
      const rawResponse = await Axios.post(
        'https://jsonplaceholder.typicode.com/posts', //change
        { items: [data] },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(rawResponse);
    })();
  }, 3000);
};

const initAutoSave = data => {
  if (!autoSave) {
    autoSave = createTimeOut(data);
  } else {
    clearTimeout(autoSave);
    autoSave = createTimeOut(data);
  }
};

const autoSaveService = {
  initAutoSave,
  autoSave,
};

export default autoSaveService;