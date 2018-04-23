import Component from '@ember/component';

export default Component.extend({
  actions: {
    alertMe(name) {
      alert(name);
    }
  }
});
