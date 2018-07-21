import shop from '../../api/shop'


//Store 里的一间库房: modules
//搬运 actions 动作(setTimeOut或ajax请求) 把数据搬过来
//state 状态数据(但是不可直接搬运)
//getters:获取状态的get方法
//mutation: 改变数据项(就像会计) 比如改变库存数量

const state = {
  all: []
}

const getters = {

}
const actions = {
    getAllProducts({commit}){     //commit就是一个api 会计验一下货
        console.log("货车发动了");
        shop.getProduct(products=>{
            console.log("货车回来了");
            commit("setProducts",products)
        });
    }
}
const mutations = {
    setProducts(state,products){
        console.log("商品入库验收，卸货");
        state.all=products
    },
    decrementProductInventory(state,{id}){
        const product=state.all.find(product => product.id===id);
        product.inventory--;
    }
}
export default {
  state, //状态数据
  getters,
  actions, //就像搬运工，负责搬运
  mutations
}
