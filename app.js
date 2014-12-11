$(function() {
  var component = Vue.component('city', {
    template: '#city_template',
    created: function() {
      console.log(this);
    },
    methods: {
      showDesc: function() {
        alert('こんにちは');
      }
    }
  });
  var component = Vue.component('other', {
    template: '#other_template',
    created: function() {
      console.log(this);
    },
    methods: {
      showWarning: function() {
        alert('エラー');
      }
    }
  });
  var component = Vue.component('food', {
    template: '#food_template',
    created: function() {
      console.log(this);
    },
    methods: {
      printLog: function(vm) {
        console.log(vm);
        console.log(this);
      }
    }
  });
  var app = new Vue({
    el: '#app',
    data: {
      title: 'アメリカといえば',
      items: [
        { text: 'ニューヨーク', type: 'city', visible: true },
        { text: '大統領', type: 'other', visible: false },
        { text: 'ハンバーガー', type: 'food', visible: true }
      ] //サーバサイドと連携したいならここをajaxでとってくるなり、data属性経由で引っ張れば良い
    }
  });
});
