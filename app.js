$(function() {
  //※componentの宣言に戻り値はない
  Vue.component('city', {
    template: '#city_template',
    parent: '#app',
    created: function() {
      this.$data.isFeature = true;
    },
    methods: {
      showDesc: function() {
        alert('こんにちは');
      }
    }
  });

  Vue.component('other', {
    template: '#other_template',
    parent: '#app',
    created: function() {
      this.isFeature = true;
    },
    methods: {
      showWarning: function() {
        alert('エラー');
      },
      isFeature: function() {
        return false;
      }
    }
  });

  Vue.component('food', {
    template: '#food_template',
    parent: '#app',
    created: function() {
      this.isFeature = true;
      console.log(this.$el); //ここではcomponentの$elはnullになっている
    },
    methods: {
      printLog: function(vm) {
        console.log(app);
        console.log(this.$el); //ここではセットされている
      }
    }
  });
  var app = new Vue({
    el: '#app',
    data: {
      title: 'アメリカといえば',
      items: [
        { text: 'ニューヨーク', type: 'city' },
        { text: '大統領', type: 'other' },
        { text: 'ハンバーガー', type: 'food' }
      ] //サーバサイドと連携したいならここをajaxでとってくるなり、data属性経由で引っ張れば良い
    }
  });
  console.log(app); //このappはvm
});
