import { readFirebase, updateFirebase } from './firebase.js';
import debounce from './debounce.js';

const shareTextarea = document.querySelector('#share');

document.addEventListener('DOMContentLoaded', async () => {
    const value = await readFirebase();
    shareTextarea.value = value;
});

const debounceUpdate = debounce(async () => {
    await updateFirebase(shareTextarea.value);

    const toastEl = document.querySelector('.toast');
    const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
    toast.show();
});

shareTextarea.oninput = debounceUpdate;

shareTextarea.focus();
