class Vue {
  constructor(options) {
    console.log(options);
    console.log(this);
    this.data = options.data;
    this.methods = options.methods;
    Object.keys(this.data).forEach(key => {
      this.proxyKeys(key);
    });
    //发布者  数据不只用于一个地方，模版，指令，方法里
    // data 成为一个发布者
    //发布者？ 订阅者？(在模版里) 订阅-发布的关系  1对多的关系
    observe(this.data);
    new Compile(options.el, this);
    options.mounted.call(this);
  }
  proxyKeys (key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return this.data[key];
      },
      set: function setter(newVal) {
        this.data[key] = newVal;
      }
    })
  }
}