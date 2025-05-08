const categories = {
  animals: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  fishes: ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
  insects: ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"]
};

let selectedImages = [];
let currentImage = '';
let currentCategory = 'animals';

$(document).ready(function () {
  $('#restartBtn').click(startGame);
  $('#category').change(function () {
    currentCategory = $(this).val();
    startGame();
  });
  startGame();
});

function startGame() {
  selectedImages = [];
  $('#grid').empty();
  $('#current').empty();

  const imageList = categories[currentCategory];
  const selectedNames = shuffle([...imageList]).slice(0, 25);
  selectedImages = selectedNames; // без підпапок!

  selectedImages.forEach(src => {
    const $img = $('<img>').attr('src', src).addClass('droppable');
    $img.droppable({
      accept: '.draggable',
      drop: function (event, ui) {
        const droppedSrc = ui.draggable.attr('src');
        const targetSrc = $(this).attr('src');
        if (droppedSrc === targetSrc) {
          alert('Правильно!');
          nextImage();
        } else {
          alert('Не вірно, спробуй ще!');
        }
      }
    });
    $('#grid').append($img);
  });

  nextImage();
}

function nextImage() {
  const rand = selectedImages[Math.floor(Math.random() * selectedImages.length)];
  currentImage = rand;
  $('#current').html('');
  const $img = $('<img>').attr('src', rand).addClass('draggable');
  $img.draggable({
    revert: 'invalid',
    helper: 'clone'
  });
  $('#current').append($img);
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
