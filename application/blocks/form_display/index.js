function formsInit(){

  $('.form-control').each(function(){

    var input = this;
    var parentGroup = this.parentElement;

    if ( !$(this).hasClass('form-control-fake') ){

      input.value != '' ? parentGroup.classList.add('filled') : parentGroup.classList.remove('filled');

      parentGroup.addEventListener("focus", () => parentGroup.classList.add('focused'), true);
      parentGroup.addEventListener("blur", () => parentGroup.classList.remove('focused'), true);
      parentGroup.addEventListener("change", () => input.value != '' ? parentGroup.classList.add('filled') : parentGroup.classList.remove('filled'), true);

    }

  });

};

// --- Ready
$(function() {

  formsInit();

});
