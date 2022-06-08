### EventLoop(事件循环)
##### 同步任务和异步任务
1. <strong style="color:#cf3527">同步任务</strong>（synchronous）
    * 又叫做<strong style="color:#cf3527">非耗时任务</strong>，指的是在主线程上排队执行的那些任务。
    * 只有前一个任务执行完毕，才能执行后一个任务。
2. 异步任务（asynchronous）
    * 又叫做<strong style="color:#cf3527">耗时任务</strong>，异步任务由Javascript<strong style="color:#cf3527">委托给</strong>宿主环境（node.js环境，浏览器）进行执行。
    * 当异步任务执行完成后，会<strong style="color:#cf3527">通知Javascript主线程</strong>执行异步任务的<strong style="color:#cf3527">回调函数。</strong>
##### 同步任务和异步任务的执行过程
1. 同步任务由Javascript主线程次序执行。
2. 异步任务<strong style="color:#cf3527">委托给</strong>宿主环境执行。
3. 已完成的异步任务<strong style="color:#cf3527">对应的回调函数</strong>，会被加入到任务队列中等待执行。
4. Javascript主线程的<strong style="color:#cf3527">执行栈</strong>被清空后，会读取任务队列中的回调函数，次序执行。
5. <strong style="color:#cf3527">Javascript主线程不断重复上面的地4步</strong>。
##### 宏任务和微任务
* 宏任务
  * 异步Ajax请求
  * setTimeout、setInterval
  * 文件操作
* 微任务
  * Promise.then、.cath和.finally
  * process.nextTick
  
## axios
* 如果调用某个方法的返回值是Promise实例，则前面可以添加await!
* await只能用在被async<strong style="color:#cf3527">修饰</strong>的方法中。
* 在async方法中，<strong style="color:#cf3527">第一个await之前的代码会同步执行</strong>，await之后的代码会异步执行。
* 解构赋值的时候，使用 : 进行重命名`const { data: res } = await axios({})`
## webpack中的loader
1. 在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块。其他<strong style="color:#cf3527">非.js后缀名结尾的模块，</strong>webpack默认处理不了，<strong style="color:#cf3527">需要调用loader加载器才可以正常打包，</strong>否则会报错！
2. loader加载器的作用：<strong style="color:#cf3527">协助webpack打包处理特定的文件模块</strong>。比如：
    * css-loader可以打包处理.css相关的文件
    * less-loader可以打包处理.less相关的文件
    * babel-loader可以打包处理webpack无法处理的高级JS语法

## 打包发布
##### 为什么要打包发布
<strong style="color:#cf3527">项目开发完成之后</strong>，使用webpack<strong style="color:#cf3527">对项目进行打包发布</strong>的主要原因有一下两点：

1. 开发环境下，打包生成的文件<strong style="color:#cf3527">存放在内存中，并没有实际的放在伪磁盘上</strong>，所以在开发环境上是拿不到打包生成的文件的，所以也无法完成上线的部署。
2. 开发环境下，打包生成的文件<strong style="color:#cf3527">不会进行代码压缩和性能优化</strong>，开发期间只是为了快速打包，不会进行压缩，而上线后体积越小，性能能越高。

## Source Map
##### 什么是Scoure Map
* <strong style="color:#cf3527">Source Map 就是一个信息文件，里面存储着位置信息</strong>。也就是说，Source Map 文件中存储着代码压缩混淆<strong style="color:#cf3527">前后的对应关系</strong>。
* 有了它，出错的时候，除错工具将<strong style="color:#cf3527">直接显示原始代码，而不是转换后的代码</strong>，能够极大的方便后期的调试。
##### Source Map 的最佳实践
1. 开发环境下：
    * 建议把devtool的值设置为<strong style="color:#cf3527">eval-source-map</strong>(显示错误的代码行数且显示源码)
    * 好处：可以精准定位到具体的错误行
2. 生产环境下：
    * 建议<strong style="color:#cf3527">关闭Source Map</strong>或将devtool的值设置为<strong style="color:#cf3527">nosource-source-map</strong>(显示错误的代码行数但不显示源码)
    * 好处：防止源码泄露，提高网站的安全性

## js语句与js表达式
1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，如：
    * a
    * a+b
    * demo(1)
    * arr.map()
    * function test() {}
2. 语句（代码）
    * if() {}
    * for() {}
    * switch(){case: xxxx}
## 模块与组件、模块化与组件化的理解
##### 模块
1. 理解：向外提供特定功能的js程序，一般就是一个js文件
2. 为什么要拆成模块：随着业务逻辑的增加，代码越来越多且复杂
3. 作用：复用js，简化js的编写，提高js运行效率
##### 组件
1. 理解：用来实现局部功能效果的代码和资源的集合（html/css/js/image等等）
2. 为什么：一个界面的功能更复杂
3. 作用：服用代码，简化项目编码，提高运行效率
##### 模块化
* 当应用的js都以模块来编写的，这个应用就是一个模块化的应用
##### 组件化
* 当应用是以多组件的方式实现，这个应用就是一个模块化的应用


<strong style="color:#cf3527"></strong>
<strong style="color:#21d86d"></strong>
