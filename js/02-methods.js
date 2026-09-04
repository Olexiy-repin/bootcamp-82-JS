/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/
const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName: function (newName) {
    if (newName.length >= 2) {
      this.name = newName;
    }
  },

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
};

console.log('playlist =', playlist);

playlist.changeName('New playlist 1');
playlist.updateRating(4);

console.log('playlist =', playlist);

// const changePlaylistName = function (myPlaylist, newName) {
//   if (newName.length >= 2) {
//     myPlaylist.name = newName;
//   }
// };

// const updatePlaylistRating = function (myPlaylist, newRating) {
//   if (newRating >= 0 && newRating <= 5) {
//     myPlaylist.rating = newRating;
//   }
// };

// changePlaylistName(playlist, 'My new playlist!');
// updatePlaylistRating(playlist, 4.5);

// console.log('playlist =', playlist);
