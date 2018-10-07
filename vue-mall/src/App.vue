<template>
  <div id="app">
    <Menu>
      <btn
        btnColor="btn btn-small btn-info btn-popup"
        :cartIcon="true"
        @click.native="showPopupCart()">
        购物车
      </btn>
      <span class="btn-circle" v-if="hasProducts">
        {{ getProductsInCart.length }}
      </span>
    </Menu>
    <transition name="appear">
      <popup-cart class="cart" v-if="getPopupCart"/>
    </transition>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <bg-mask v-if="getPopupCart"
      @click.native="showPopupCart()">
    </bg-mask>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Menu from '@/components/Menu'
import Btn from '@/components/Btn'
import PopupCart from '@/components/PopupCart'
import BgMask from '@/components/Mask'
export default {
  name: 'App',
  components: {
    Menu,
    Btn,
    PopupCart,
    BgMask
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart'
    ]),
    hasProducts () {
      return this.getProductsInCart.length > 0
    }
  },
  methods: {
    ...mapActions([
      'showCart'
    ]),
    showPopupCart () {
      this.showCart()
    }
  }
}
</script>

<style>
@import './assets/css/normalize.css';
a {
  color: #000;
  text-decoration: none;
}
.container {
  width: 100%;
}
.cart {
  position: absolute;
  top: 75px;
  right: 300px;
}
.btn-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.leave-enter-active, .leave-leave-active {
  transition: all 1.2s;
}
.leave-enter, .leave-leave-to {
  opacity: 0;
  /* transform: translateX(-50%); */
  transform: scale(0.5);
  transform-origin: 50% 25%;
}
.appear-enter-active {
  animation: appear-animation .5s;
}
.appear-leave-active {
  animation: appear-animation .5s reverse;
}
@keyframes appear-animation {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

</style>
