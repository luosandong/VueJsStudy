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

- v-model 绑定文本框
- v-on:click 绑定单击事件
- v-once 只在第一次绑定有效
- v-html="" 绑定 html 代码
- v-text 绑定普通文本
- v-bind:src="" 绑定 src 属性 还可写成 :src=""
- v-bind:class="{class1:true,calss2:false}" 对象语法绑定样式

## 生命周期函数钩子

created:
mounted:

## 2019-09-19 v-bind 绑定 style

:style="{'font-size':fontSize}"

- 计算属性
  computed:{
  fullName:function(){}
  }

优先使用计算属性绑定值，不要使用 methods 方法返回值去绑定（因为方法会多次调用）

- ES6 的 const 定义常量 let 定义变量 用 const 修饰的常量对象里的属性可修改

- v-on 语法糖

  v-on 可以用 @号代码 @click = v-on:click  
  阻止事件冒泡： @click.stop="click()"
  阻止默认事件：@click.prevent="click()"
  特定键才触发：@keyup.enter="key()" 按回车才会触发事件
  只触发一次：@click.once=" clickOnce()"

## v-model

绑定表单 通常会用 v-model
使用 v-model 时注意事项是 绑定 select 的时候 v-model 需要写在 select 上不能写在 option 上
借助值绑定功能，动态添加 select 的 option

option v-for="(item,index) in categories" :value="item">{{item}} option>
动态添加 checkbox 集合也一样的道理
label :for="item+index" v-for="(item,index) in aihao">
input :id="item+index" type="checkbox" :value="item" v-model="checkedNames">{{item}}
label

- v-model.lazy
  此绑定用于不要实时绑定，等文本框失去焦点或者被按回车时再绑定
- v-model.number
  此绑定可转换为数值
- v-model.trim
  此绑定项可去除左右空格
