import swal from 'sweetalert';

function plugin(vue) {
  vue.prototype.$tada = swal;
  vue.prototype.$tada.success = function success(title, text = '') {
    return swal({
      title,
      text,
      icon: 'success',
      button: '确认'
    });
  };
  vue.prototype.$tada.error = function error(title, text = '') {
    if (typeof text === 'object') {
      text = JSON.stringify(text);
    }
    return swal({
      title,
      text,
      icon: 'error',
      button: '确认'
    });
  }
  vue.prototype.$tada.confirm = function danger(config) {
    const {
      title,
      text,
      // primaryLevel: 'success',
      primaryText = '删除',
    } = config;
    return swal({
      title,
      text,
      icon: 'warning',
      closeOnClickOutside: false,
      buttons: ['取消', primaryText],
      dangerMode: true
    });
  };
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
