import { shuffle } from 'lodash';
import { decorate, observable, computed } from "mobx";
import axios from 'axios'

class Gallery {
  constructor() {
    this._photos     = [];
    this._searchTerm = '';

    this.fetchPhotos();
  }

  fetchPhotos() {
    axios.get('https://picsum.photos/list')
      .then((res) => this.photos = shuffle(res.data));
  }

  set searchTerm(str) {
    this._searchTerm = str.toLowerCase();
  }

  get searchTerm() {
    return this._searchTerm;
  }

  set photos(arr) {
    this._photos = arr;
  }

  get photos() {
    if (!this.searchTerm) return this._photos;

    return this._photos.filter((photo) => {
      const searchTerm          = this._searchTerm;
      const authorName          = photo.author;
      const authorNameLowered   = authorName.toLowerCase();
      const authorNameSeparated = authorNameLowered.split(' ');

      return authorNameSeparated.reduce((flag, cur) => {
        return flag || cur.startsWith(searchTerm);
      }, false)
    });
  }
}

decorate(Gallery, {
  _photos: observable,
  _searchTerm: observable,
  photos: computed,
  searchTerm: computed
});

export default Gallery;