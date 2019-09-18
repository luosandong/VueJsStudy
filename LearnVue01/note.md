# Vue 初体验

## 简单绑定

- {{message}} 将一个数据简单绑定到元素
- v-for 将数据绑定到列表

  <li v-for="item in movies">{{item}}</li>  
  <script>
          const app = new Vue({
              el: '#app',
              data: {
                  movies: ['程序人生', '.NET CORE', 'java']
              }
          });
   </script>

- v-on:click 绑定单击事件
- v-once 只在第一次绑定有效
- v-html="" 绑定 html 代码
- v-text 绑定普通文本
- v-bind:src="" 绑定 src 属性 还可写成 :src=""
- v-bind:class="{class1:true,calss2:false}" 对象语法绑定样式

## 生命周期函数钩子

created:
mounted:
