// webpack entry point

import 'whatwg-fetch';

var modalToggle = function(v, h) {
  $(v).modal(h);
};

window.modalToggle = modalToggle;

/* Use Cases:
  modalToggle('.modal1', 'show');
  modalToggle('#modal2', 'hide');
  modalToggle('.body .modal3', 'toggle');
*/
