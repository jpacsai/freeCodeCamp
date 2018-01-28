$(document).ready(function() {
    ('.fa-fw').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('fa-spin');
  }).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('fa-spin');
  });
});