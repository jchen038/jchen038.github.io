$(document).ready(function() {
  var imageList = ['IMG_0344', 'IMG_0332', 'IMG_0383', 'IMG_0506', 'IMG_0587', 'IMG_1345', 'IMG_1369', 'IMG_2342', 'IMG_1978', 'IMG_2289', 'IMG_2392', 'IMG_2768', 'IMG_2820', 'IMG_3178', 'IMG_5349', 'IMG_6254', 'IMG_3951', 'IMG_4367', 'IMG_4397', 'IMG_4481', 'IMG_6254', 'IMG_6910', 'IMG_7401', 'IMG_7634', 'IMG_7636', 'IMG_7911', 'IMG_8126',
                    'IMG_8409', 'IMG_8466', 'IMG_8477', 'IMG_9190', 'IMG_9249', 'IMG_9320', 'IMG_9412', 'IMG_9463', 'IMG_9524', 'IMG_9624', 'IMG_9720'];
  $.each(imageList, function(index, value) {
    $("#photography").append("<button class='image-small' data-toggle='modal' data-target='#" + value + "'><img class='image-small' src='/assets/image/" + value + ".jpg'></button>");
    $("#photography").append("<div class='modal fade' id='" + value + "' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><img class='image-large' src='/assets/image/" + value + ".jpg'></div></div></img></div>");
    $("#modal" + value).focus();
  });
});