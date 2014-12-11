$(function() {
  var component = Vue.component('city', {
    template: '#city_template',
    created: function() {
      console.log(this);
    }
  });
  var app = new Vue({
    el: '#app',
    data: {
      title: 'アメリカの都市',
      items: [
        { text: 'ニューヨーク' },
        { text: 'シカゴ' },
        { text: 'サンフランシスコ' }
      ]
    }
  });
});
