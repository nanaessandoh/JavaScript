import Tooltip from './ui-library/tooltip';
import Dropdown from './ui-library/dropdown';
import Tabs from './ui-library/tabs';
import Snackbar from './ui-library/snackbar';

// create a tooltip
const tooltip = new Tooltip( document.querySelector('.tooltip'));
tooltip.init();


// create dropdowns
const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach( dropdown => {
        const instance = new Dropdown(dropdown);
        instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You Clicked me');
});