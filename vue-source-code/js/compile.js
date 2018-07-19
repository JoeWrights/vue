class Compile {
  constructor(el, vm) {
    this.vm = vm
    this.el = document.querySelector(el)
    // 文档碎片  
    // 
    this.fragment = null
    this.init()
  }
  init() {
    // this.el 将会被编译后的 html 替换
    if (this.el) {
      // 文档碎片没有标签 会承载所有的改变 但不会挂载到页面上 使DOM只刷新一次 性能优化
      this.fragment = this.nodeToFragment(this.el)
      this.compileElement(this.fragment)
      this.el.appendChild(this.fragment)
    } else {
      console.log('DOM元素不存在')
    }
  }
  nodeToFragment(el) {
    var fragment = document.createDocumentFragment()
    var child = el.firstChild;
    while (child) {
      fragment.appendChild(child)
      child = el.firstChild
    }
    return fragment
  }
  // 递归调用 一层层往里走
  compileElement(el) {
    var childNodes = el.childNodes;
    // console.log(childNodes);
    [].slice.call(childNodes).forEach(node => {
      console.log(node)
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;
      // console.log(text)
      // 如果是结点 指令的编译
      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1]) // 得到那个分组
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    });
  }
  compile(node) {
    // 指令  
    var nodeAttrs = node.attributes;
    console.log(nodeAttrs)
    Array.prototype.forEach.call(nodeAttrs, attr => {
      var attrName = attr.name

      // console.log(attrName)
      if (this.isDirective(attrName)) {
        var exp = attr.value
        var dir = attrName.substring(2)
        // on
        if (this.isEventDirective(dir)) {
          this.compileEvent(node, this.vm, exp, dir)
        } else {
          //  v-model  

        }
      }
    })
  }
  compileEvent(node, vm, exp, dir) {
    // 什么事件
    // callback
    // addEventListener
    const eventType = dir.split(':')[1]
    var cb = vm.methods && vm.methods[exp]
    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false)
    }
  }

  isDirective(attr) {
    return attr.indexOf('v-') == 0
  }
  isEventDirective(dir) {
    return dir.indexOf('on') == 0
  }

  compileText(node, Exp) {
    console.log(this.vm)
    var initText = this.vm[Exp]
    this.updateText(node, initText)
  }
  updateText(node, value) {
    console.log('123')
    console.log(value)
    node.textContent = typeof value === 'undefined' ? '' : value
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  isTextNode(node) {
    return node.nodeType === 3
  }
}