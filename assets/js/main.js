$(document).ready(function() {
  var imageList = ['IMG_0332', 'IMG_0344', 'IMG_0383', 'IMG_1978',
                    'IMG_2289', 'IMG_2392', 'IMG_5349', 'IMG_6254',
                    'IMG_7634', 'IMG_8126'];
  $.each(imageList, function(index, value) {
    $("#photography").append("<button class='image-small' data-toggle='modal' data-target='#" + value + "'><img class='image-small' src='/assets/image/" + value + ".jpg'></button>");
    $("#photography").append("<div class='modal fade' id='" + value + "' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><img class='image-large' src='/assets/image/" + value + ".jpg'></div></div></img></div>");
    $("#modal" + value).focus();
  });
});