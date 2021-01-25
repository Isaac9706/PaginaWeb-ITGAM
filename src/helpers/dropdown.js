/* eslint-disable prettier/prettier */
import 'materialize-css/dist/js/materialize';
/* global M */
const init = () => {
    // eslint-disable-next-line no-console
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elements);
    });
};

export default {
    init,
};