## 实例的隐式原型属性(__proto__)永远指向自己缔造者的原型对象(prototype)

## 数据劫持
* Vue监视数据的原理
  1. vue会监视data中所有层次的数据。
  2. 如何监测对象中的数据？
     通过setter实现监测，且要在newVue时就传入要监测的数据。
      * 对象中后追加的属性，Vue默认不做响应式处理。
      * 如需给后添加的属性做响应式，请使用如下API:
        Vue.set(target, propertyName/index, value)或
        vm.$set(target, propertyName/index, value)
  3. 如何监测数组中的数据？(数组是响应式，但是数组里的元素没有getter,setter，不是响应式的。所以直接改变数组元素，监测不到)
      通过包裹数组更新元素的方法实现，本质就是做了两件事：
      * 调用原生对应的方法对数组进行更新。
      * 重新解析模板,生成新的虚拟DOM，新旧DOM对比，进而更新页面
  4. 在Vue修改数组中的某个元素一定要用如下方法：
      * 使用这些API：push()、shift()、unshift()、pop()、sort()、reverse()、splice()。
      * Vue.set() 或 vm.$set()
>特别注意：Vue.set() 和 vm.$set() 不能给vm或vm的根数据对象添加属性！！！
### 面试题：react、vue中的key有什么作用？（key的内部原理）
1. 虚拟DOM中可以的作用：key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】,随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
2. 对比规则：(文本节点，标签节点)
    * 旧虚拟DOM中找到了与新虚拟DOM相同的可以：
      * 若虚拟DOM中内容没变，直接使用之前的真实DOM!
      * 若虚拟DOM中内容变了，则生成新的真实DOM,随后替换掉页面中之前的真实DOM。
    * 旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM，随后渲染到页面。
3. 用index作为key可能会引发的问题：
    * 若对数据进行：逆序添加、逆序删除等破坏顺序操作：  会产生没有必要的真实DOM更新 ===> 界面效果没问题，但效率低。
    * 如果结构中还包含输入类的DOM:  会产生错误DOM更新 ===> 界面有问题
4. 开发中如何选择key?
    1. 最好使用每天数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
    2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的
## 自定义指令总结：
1. 定义语法：
    * 局部指令：
      ```ruby
      new Vue({
        directives:{指令名:配置对象}
      })
      或
      new Vue({
        directives:{指令名:回调函数}
      })
      ```
    * 全局指令：
      ```ruby
      Vue.directive(指令名,配置对象) 
      或
      Vue.directive:{指令名,回调函数}
      ```      
2. 配置对象中常用的3个回调：
    1. bind: 指令与元素成功绑定时调用。
    2. inserted: 指令所在元素被插入页面时调用。
    3. update: 指令所在模板结构被重新解析时调用。

3. 备注：
    * 指令定义时不加v- 但使用时要加v-
    * 指令名如果时多个单词，要使用kebab-case命名方式，不要用camelCase命名。
## 过滤器：
* 定义：对要显示的数据进行特定格式化后再显示(适用于一些简单逻辑的处理)。
* 语法：
  1. 注册过滤器：Vue.filter(name, callback) 或 new Vue(filter:{})
  2. 使用过滤器：{{ xxx | 过滤器名 }} 或 v-bind:属性 = "xxx | 过滤器名"
* 备注：
  1. 过滤器也可以接受额外参数、多个过滤器也可以串联
  2. 并没有改变原本的数据，是产生新的对应的数据
## 计算属性：
1. 定义：要用的属性不存在，要通过已有属性计算得来。
2. 原理：底层借助了Object.defineProperty方法提供的getter和setter。
3. get函数什么时候执行？
    * 初次读取时会执行一次。
    * 当依赖的数据发生改变时会被再次调用。
4. 优势：与methods实现相比，内部有缓存机制(复用)，效率更高，调试方便。
5. 备注：
    * 计算属性最终会出现在vm上，直接读取使用即可。
    * 如果计算属性要被修改，那必须写set函数去响应修改。且set中要引起计算时依赖的数据发生改变
### computed和watch之间的区别：
1. computed能完成的功能，watch都可以完成。
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
3. 两个重要的小原则：
    * 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。
    * 所有不被Vue所管理的函数(定时器的回调函数、ajax的回调函数、Promise的回调函数)，最好写成箭头函数，这样this的指向才是vm或组件实例对象。
## 脚手架文件结构：
  |— node_modules
  |— public
  |   |— favicon.ico: 页签图表
  |   |— index.html: 主页面
  |— src
  |   |— assets: 存放静态资源
  |   |— component: 存放组件
  |   |— App.vue: 汇总所有组件
  |   |— main.js: 入口文件
  |— .gitignore: git版本忽略的配置(避免在提交代码时把不想上传的文件提交到git中)
  |— babel.config.js: babel的配置文件
  |— package.json: 应用包配置文件
  |— README: 应用描述文件
  |— package-lock.json: 包版本控制文件
## vue.config.js配置文件
>使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
>使用vue.config.js可以对脚手架进行个性化定制，详情监：https://cli.vuejs.org/zh

## 关于不同版本
- vue.js与vue.runtime.xxx.js的区别：
    (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
    (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能：没有模板解析器。
-  因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的creatElement函数去指定具体内容。

## vue指令v-bind : 单向绑定解析表达式，可简写为：xxx。
- v-model: 双向数据绑定。
- v-for: 遍历数组/对象/字符串。
- v-on: 绑定事件监听，可简写为@。
- v-if: 条件渲染(动态控制节点是否存在)。
- v-else: 条件渲染(动态控制节点是否存在)。
- v-show: 条件渲染(动态控制节点是否展示)。
- v-text: 
    1.作用：向其所在的节点中渲染文本内容。
    2.与插值语法的区别：v-text会替换掉节点中的内容，{{xxx}}则不会。
- v-html: 
    1.作用：向指定节点中渲染包含html结构的内容。
    2.与插值语法的区别：
      (1).v-html会替换掉节点中所有的内容，{{xxx}}则不会。
      (2).v-html可以识别html结构。
    3.严重注意：v-html有安全性问题！！！！
      (1).再网站上动态渲染任意HMTL是非常危险的，==容易导致XSS攻击==。
      (2).一定要早可信的内容上使用v-html，永不要在用户提交的内容上！
- v-cloak:
    1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
    2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
- v-once:
    1.v-once所在节点在初次动态渲染后，就视为静态内容了。
    2.以后数据的改变不会引起v-once所在结构的更新，可以用于==优化性能==。
- v-pre:
    1.跳过其所在节点的编译过程。
    2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会==加快编译==。

## 生命周期
1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。
2. 是什么？Vue在关键时刻帮我们调用的一些特殊名称的函数。
3. 生命周期函数的名字不可更改，但函数的具体内容时程序员根据需求编写的。
4. 生命周期函数中的this指向的时vm或组件实例对象。

      初始化：生命周期、事件(时间修饰符once)，但数据代理还未开始。
* brforeCreate: 无法通过vm访问到data中的数据、methods中的方法。

      初始化：数据监测(Vue如何监测对象变化的、如何监测数组变化的、给对象里的属性匹配getter,setter、对操作数组的方法进行二次包装)、数据代理。
* created：可以通过vm访问到data中的数据、methods中配置的方法。

      查看是否有'el'选项，没有的话调用vm.$mount(el)，然后看是否有'template'选项，没有的话编译el的外部HTML(包含#root的dom)作为模板。
      此阶段Vue开始解析模板，生成虚拟DOM(内存中)，页面还不能显示解析好的内容。
      往vm.$el上存一份el的数据(虚拟DOM，当进行虚拟DOM 真实DOM对比时，$el里有之前的节点才能复用)
* beforeMount:  
    1.页面呈现的是未经Vue编译的DOM结构。
    2.所有DOM的操作，最终都不能奏效。(原生DOM的操作好使，但是会继续Vue模板编译过程，生成真实DOM)。

      将内存中的虚拟DOM转为真实DOM插入页面
* mount:        
    1.页面中呈现的是经过Vue编译的DOM
    2.对DOM的操作均有效(尽可能避免)。至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等初始化功能。

      当数据改变时(data里的数据改变)
* boforeUpdate: 此时：数据时新的，但页面时旧的，即：页面尚未和数据保持同步(data里的数据已更新，但是页面没有更新)。

      根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即：完成了Model->View的更新。
* updated:      此时数据是新的，页面也是新的，即：页面和数据保持同步。

      当vm.$destroy()被调用时
* beforeDestroy: vm中所有的：data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器、取消的订阅消息、解绑自定义事件等收尾工作

      拆毁所有监听，子组件和事件监听器
* destroyed
#### 常用的生命周期钩子：
1. mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等==初始化操作==。
2. beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等==收尾工作==。

#### 关于销毁Vue实例：
1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效，但原生DOM时间依然有效。
3. 一般不会在beforeDestory操作数据，因为即使操作数据，也不会再触发更新流程了。
## 组件
* 什么是组件————实现应用中==局部功能代码和资源==的集合
* 关于VueComponent：
      1. 子组件(school)本质是一个名为VueComponent的构造函数，且不失程序员定义的，是Vue.extend生成的。
      2. 我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件实例随想，即Vue帮我们执行的：new VueComponent(options)。options:name data methods template等
      3. 特别注意：每次调用Vue.extend，返回的都是一个全新的==VueComponent==！！！
  
##### 一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype。
##### 为什么要有这个关系：让组件实例对象(vc)可以访问到Vue原型上的属性、方法。
## ref属性
1. 被用来给元素或子组件注册引用信息(id的替代者)。
2. 应用在html标签上获取DOM元素，应用在标签上是组件实例对象(vc)。
3. 使用方式：
    打标识：`<h1 ref="xxx">......</h1>`或`<School ref="xxx"></School>`
    获取：this.$refs.xx
## 配置项props
* 功能：让组件接受外部传过来的数据
  * 传递数据：
    ```ruby
    <Demo name="xxx/>
    ```
  * 接收数据：
    1. 只接受：
          ```ruby
          props:['name']
          ```
    2. 限制类型：
          ```ruby
          props: {
            name: Number
          }
          ```
    3. 显示类型、限制必要性、指定默认值：
          ```ruby
          props: {
            name: {
              type: String,     类型
              required: true,   必要性
              default: '老王',  默认值
            }
          }
          ```
* 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，==若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据==
## mixin(混入)
* 功能：可以把多个组件公用的配置提取成一个换入对象
* 使用方式：
  * 全局混入：Vue.mixin(xxx)
  * 局部混入：minxins:['xxx']
## 插件
* 功能：用于增强Vue
* 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用这传递的数据。
* 定义插件：
    ```ruby
    对象.install = function (Vue, options) {
      // 1.添加全局过滤器
      Vue.filter(...)
      // 2.添加全局指令
      Vue.directive(...)
      // 3.配置全局混入
      Vue.mixin(...)
      // 4. 添加实例方法
      Vue.prototype.$myMethod = function() {...}
      Vue.prototype.$myProperty = xxx
    }
    ```
* 使用插件：Vue.use(plugins)
## 组件的自定义事件
1. 一种组件间通信的方式，适用于：==子传父==。
2. 使用场景：子组件想要给父组件传递数据，那么就要在父组件中给子组件绑定自定义事件(==事件的回调在父组件中==)。
3. 绑定自定义事件：
    * 在父组件中：`<Demo @atguigu="test">`。
    * 在父组件中：
        ```ruby
        <Demo ref="demo">
        methods:{
          test(){
            ......
          }
        },
        mounted(){
          this.$refs.demo.$on('atguigu', this.test())
        }
        ```
    * 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法
4. 触发自定义事件：`this.$emit('atguigu', params)`。
5. 解绑自定义事件：`this.$off('atguigu')`。
6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符。(@click.native="")
7. 注意：通过`this.$refs.xxx.$on('atguigu', 回调)`绑定自定义事件时，回调==要么配置在methods中，要么用箭头函数==，否则this指向会出问题！(正常函数回调里的this指向触发atguigu组件的实例vc)
## 全局事件总线（GlobalEventBus）
1. 一种组件间的通信方式，适用于任意组件监通信。
2. 安装全局事件总线：
    ```ruby
    new Vue({
      el: "#app",
      render: h => h(App),
      beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm。
      }
    })
    ```
3. 使用事件总线：
    1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的==回调留在A组件自身==。
        ```ruby
        methods() {
          demo(data){
            ......
          }
        },
        mounted() {
          this.$bus.$on('B组件$emit触发的事件名', this.demo)
        }
        ``` 
    2. 提供数据：`this.$bus.$emit('xxx', 数据)`。
4. 最好在beforeDestroy钩子中，用$off去解绑==当前组件所用到的==事件。
## nextTick
  1. 语法：`this.$nextTick(回调函数)`。
  2. 作用：在`下一次`DOM更新结束后执行其指定的回调。
  3. 什么时候用：当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
## vue脚手架配置代理
1. 在vue.config.js中添加如下配置：
    ```ruby
    devServer: {
      proxy: "http://localhost:5000"
    }
    ```
    说明：
      1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
      2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
      3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器。前端存在是说public文件里存在的文件，优先匹配。
2. 编写vue.config.js配置具体代理规则：
    ```ruby
    module.exports = {
      devServer: {
        proxy: {
          '/api': { // 匹配所有以'/api'开头的请求路径
            target: 'http://locahost:5000/api', // 代理目标的基础路径
            ws: true, // 用于支持websocket
            changeOrigin: true, // 用于控制请求头中的host值与请求的服务器中的一样(vue中默认true)
            pathRewrite: {'^/api' : ''} // 把自己定义的'/api'在代理服务器请求服务器时去掉
          },
          '/api2': { // 匹配所有以'/api2'开头的请求路径
            target: 'http://locahost:5000', // 代理目标的基础路径
            ws: true, // 用于支持websocket
            changeOrigin: true, // 用于控制请求头中的host值与请求的服务器中的一样
            pathRewrite: {'^/api2' : ''} // 把自己定义的'/api2'在代理服务器请求服务器时去掉(vue中默认true)
          }
        }
      }
    }
    /*
      changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
      changeOrigin默认值为true
    */
    ```
    说明：
      1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
      2. 缺点：配置略微繁琐，请求资源时必须加前缀。
## 插槽
1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于==父组件--->子组件==。
2. 使用方式：
    1. 默认插槽：
        ```ruby
        父组件：
            <Category>
              <div>html结构</div>
            </Category>
        子组件：
            <template>
              <div>
                <!-- 定义插槽 -->
                <slot>插槽默认内容...</slot>
              </div>
            </template>
        ``` 
    2. 具名插槽：
        ```ruby
        父组件：
            <Category>
              <template slot="center">
                <div>html结构1</div>
              </template>
              <template v-slot="footer">
                <div>html结构2</div>
              </template>
            </Category>
        子组件：
            <template>
              <div>
                <!-- 定义插槽 -->
                <slot name="center">插槽默认内容...</slot>
                <slot name="footer">插槽默认内容...</slot>
              </div>
            </template>
        ``` 
    3. 作用域插槽：
        1. 理解：==数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定==（数据在子组件中，但是要在父组件中使用）
        2. 具体编码
            ```ruby
            父组件：
                <Category>
                  <template scope="scopeData">
                    <!-- 生成的是ul列表 -->
                    <ul>
                      <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                    </ul>
                  </template>
                </Category>
                <Category>
                  <template slot-scope="{games}">
                    <!-- 生成的是h4标题 -->
                    <h4 v-for="g in games" :key="g">{{g}}</h4>
                  </template>
                </Category>
            子组件：
                <template>
                  <div>
                    <!-- 定义插槽 -->
                    <slot :games=games>插槽默认内容...</slot>
                  </div>
                </template>

                <script>
                  export default {
                    name: "Category",
                    // 数据在子组件中
                    data() {
                      return {
                        games: ["学习", "吃饭", "玩"]
                      }
                    }
                  }
                </script>
            ``` 
## vuex
1. 基本使用
    ```ruby
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default new Vuex.Store({
      <!-- 组件中读取vuex数据：$store.state.sum -->
      <!-- 组件中修改vuex中的数据：$store.dispatch('action中的方法名', 数据)或$store.commit('mutations中的方法名', 数据) -->
      <!-- 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit -->
      state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
        personList: [
          { id: '001', name: '张三' }
        ]
      },
      <!-- getter: 当state中的数据需要经过加工后再使用时，可以使用getters加工；
           组件中读取数据$store.getters.bigSum -->
      getters: {
        bigSum (state) {
          return state.sum * 10
        }
      },
      actions: {
        <!-- 响应组件中add的动作，当需要发请求时可以调用 -->
        addOdd (context, value) {
          if (context.state.sum % 2) {
            context.commit('ADDODD', value)
          }
        },
        addWait (context, value) {
          setTimeout(() => {
            context.commit('ADDWAIT', value)
          }, 500)
        }
      },
      mutations: {
        <!-- 执行INCREMENT -->
        INCREMENT (state, value) {
          state.sum += value
        },
        DECREMENT (state, value) {
          state.sum -= value
        },
        ADDODD (state, value) {
          state.sum += value
        },
        ADDWAIT (state, value) {
          state.sum += value
        },
        ADDPERSON (state, value) {
          console.log(state)
          state.personList.unshift(value)
        }
      }
    })
    ```
2. 四个map方法的使用
    1. mapState：映射state中的数据为计算属性
    2. mapGetters：映射getters中的数据为计算属性
        ```ruby
        import { mapState, mapGetters } from 'vuex'

        computed: {
          // 对象写法
          ...mapState({ sum: 'sum', school: 'school', subject: 'subject' })
          ...mapGetters({ bigSUm: 'bigSum' })
          // 数组写法
          ...mapState(['sum', 'school', 'subject'])
          ...mapGetters(['bigSum'])
        }
        ```
    3. mapActions：帮助我们生成与actions对话的方法，即：包含`$store.dispatch(xxx)`的函数
    4. mapMutataions：帮助我们生成与mutations对话的方法，即：包含`$store.commit(xxx)`的函数
        ```ruby
        import { mapActions, mapMutations } from 'vuex'

        methods: {
          // 对象方法
          ...mapActions({ addOdd: 'addOdd', addWait: 'addWait' })
          ...mapMutations({ increment: 'INCREMENT', decrement: 'DECREMENT' })
          // 数组方法
          ...mapActions(['addOdd', 'addWait'])
          ...mapMutations(['INCREMENT', 'DECREMENT'])
        }
        ```
        >注意：mapActions和mapMutations使用时，若需要传递参数，需要在模板中绑定事件时传递好参数，否则参数是事件对象
3. 命名空间
    ```ruby
   <!-- 组件中读取state数据 -->
    this.$store.state.personAbout.personList
    ...mapState('personAbout', ['personList'])

    <!-- 组件中读取getter数据 -->
    this.$store.getters['personAbout/getFirstName']
    ...mapGetters('personAbout', ['getFirstName'])

    <!-- 组件中调用dispatch -->
    this.$store.dispatch('personAbout/addWangName', val)
    ...mapActions('personAbout', ['addWangPerson'])

    <!-- 组件中调用commit -->
    this.$store.commit('personAbout/ADDPERSON', val)
    ...mapMutations('personAbout', ['ADDPERSON'])
    ```
## 路由
##### 1. 基本使用
1. 理解：一个路由（router）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。
3. 实现切换（active-class可配置高亮样式）
`<router-link active-class="active" to="/about"></router-link>`
4. 指定展示位置
`<router-view />`
##### 2. 几个注意点
1. 路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
2. 通过切换，"隐藏"了的组件路由，默认是呗销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的`$router`属性获取到。
##### 3. 多级路由 命名路由
1. 作用：可以简化路由的跳转。
2. 配置路由规则，使用children配置项：
    ```ruby
    routes: [
      {
        path: '/about', // 一级路由用name属性，组件用到的地方会找name属性值的路径
        component: About
      },
      {
        path: '/home',
        component: Home,
        children: [ // 通过children配置子级路由
          {
            path: 'news', // 此处一定不要写：/news
            name: 'news',
            components: News
          },
          {
            path: 'message', // 此处一定不要写：/message
            name: 'message',
            component: Message
          }
        ]
      }
    ]
    ```
3. 跳转（要写完整路径）:
`<router-link to="/home/news">News</router-link>`
4. 简化跳转：
    ```ruby
        <!-- 简化前，需要写完整的路径 -->
        <router-link to="/router/home/message">跳转</router-link>
        <!-- 简化后，直接通过名字跳转 -->
        <router-link :to=""{name: "message"}>跳转</router-link>

        <!-- 简化写法配合传递参数 -->
        <router-link
          :to="{
              name: 'message',
              query: {
                id: item.id,
                title: item.title
              }
            }">跳转</router-link>
    ```
##### 4. 路由的query参数
1. 传递参数
    ```ruby
    <!-- 跳转并携带query参数，to的字符串写法 -->
    <router-link
      :to="{
        path: 'home/message/detail',
        query: {
          id: item.id,
          title: item.title
        }
      }">跳转</router-link>
    ```
2. 接收参数：
    ```ruby
    $route.query.id
    $route.query.title
    ```
##### 5. 路由的params参数
1. 配置路由，声明接受params参数
    ```ruby
        {
          path: '/home',
          component: Home,
          children: [
            {
              path: 'news',
              component: News
            },
            {
              path: 'message',
              component: Message,
              children: [
                {
                  name: 'detail',
                  path: 'detail/:id/:title', // 使用占位符声明接受params参数
                  component: Detail
                }
              ]
            }
          ]
        }
    ```
2. 传递参数
    ```ruby
        <!-- 跳转并携带params参数，to的字符串写法 -->
        <router-link :to=`/home/message/detail/${item.id}/${item.title}`>跳转</router-link>
        <!-- 跳转并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title
            }
          }">跳转</router-link>
    ```
    > 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项。必须使用name配置
##### 6. 路由的props配置
1. 作用：让子路由组件更方便的收到参数
    ```ruby
        {
          name: 'detail',
          path: 'detail/:id',
          component: Detail,
          // 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件（固定值）
          // props: {a: 666, title: '你好'}

          // 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
          // props: true

          // 第三种写法：props值为函数，该函数但会的对象中每一组key-value都会通过props传给Detail组件
          props(router) {
            return {
              id: router.query.id,
              title: router.query.title
            }
          }
        }
    ```
2. 组件中使用
    ```ruby
        props: ['id', 'title']
        模板或者方法中直接用 id title
    ```
##### 7. replace属性
1. 作用：控制路由跳转时操作浏览器历史记录的模式。
2. 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，`push`是追加历史记录，`replace`是替换当前记录。路由跳转时默认为`push`。
##### 8. 编程式路由导航
1. 作用：不借助`<router-link>`实现路由跳转，让路由更加灵活
2. 具体编码
    ```ruby
    // $router的两个API
    this.$router.push({
      name: 'detail',
      params: {
        id: xxx,
        title: xxx
      }
    })

    this.$router.replace({
      name: 'detail',
      params: {
        id: xxx,
        title: xxx
      }
    })

    this.$router.forward() // 向前路由
    this.$router.back() // 后退路由
    this.$router.go(-1) // 参数为数字，前进或回退到几次
    ```
##### 9. 缓存路由组件
1. 作用：让不展示的路由组件保持挂载，不被销毁。
2. 具体编码：
    ```ruby
    <keep-alive include="News">
      <router-view></router-view>
    <keep-alive>
    ```
##### 10. 两个新的生命周期钩子
1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
    1. `activated`路由组件被激活时触发。
    2. `deactivated`路由组件失活时触发。
##### 11. 路由守卫
1. 作用：对路由进行权限控制。
2. 分类：全局守卫、独享守卫、组件内守卫
3. 全局守卫：
    ```ruby
    // 全局前置守卫，初始化时执行，每次路由切换前执行
    router.beforeEach((to, from, next)) => {
      if (to.meta.isAuth && localStorage.getItem('school') !== 'atguigu') {
        alert('暂无权限查看')
      } else {
        next()
      }
    }

    // 全局后置守卫，初始化时执行，每次路由切换后执行
    router.afterEach((to, from) => {
      if (to.meta.title) {
        document.title = to.meta.title
      } else {
        document.title = 'vue_test'
      }
    })
    ```
4. 独享守卫：
    ```ruby
    beforeEnter(to, from, next) {
      if (to.meta.isAuth && !localStorage.getItem('school') !== 'atguigu') {
        alert('暂无权限查看')
      } else {
        next()
      }
    }
    ```
5. 组件内守卫：
    ```ruby
    // 进入守卫，通过路由规则，进入该组件时被调用
    beforeRouterEnter(to, from, next) {
      ...
    }
    // 离开守卫，通过路由规则，离开该组件时被调用
    beforeRouterLeave(to, from, next) {
      ...
    }
    ```
##### 12. 路由器的两种工作模式
1. 对一个url来说，什么是hash值？——`#`及其后面的内容就是hash值。
2. hash值不会包含在HTTP请求中，即：hash值不会带给服务器。
3. hash模式：
    * 地址中永远带着#号，不美观。
    * 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
    * 兼容性好。
4. history模式：
    * 地址干净，美观。
    * 兼容性和hash模式相比略差。
    * 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
