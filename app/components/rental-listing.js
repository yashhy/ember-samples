import Component from '@ember/component';

export default Component.extend({
  canShow: true,
  actions: {
    toggleShowHide() {
      // this.set('canShow', !this.get('canShow'));
      // OR 
      this.toggleProperty('canShow');
    }
  }
});
