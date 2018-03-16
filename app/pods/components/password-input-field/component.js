import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['password-input-field'],

  filteredWords: computed('words', 'searchQuery', function() {
    const words = this.get('words');
    if (words) {
      return words.filter(a => a.word.includes(this.get('searchQuery') || ''));
    }
  }),

  actions: {
    search (query) {
      this.set('searchQuery', query);
      const filteredWords = this.get('filteredWords')
      if (filteredWords.length === 1 && query === filteredWords[0].word) {
        this.get('onSelectionChange')(filteredWords[0]);
      }
    }
  }
});
