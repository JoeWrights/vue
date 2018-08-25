<template>
  <div class="hello">
    <button @click="sweetAlert()">click</button>
    <hr/>
    <h1>{{ status | instance_status }}</h1>
    <hr/>
    <h2>{{ price | to_fix(2) | money_format | to_usd}}</h2>
    <hr/>
    <h3>{{ str | upper_case }}</h3>
    <hr/>
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <h2><a :href="article.link"></a>{{ article.title }}</h2>
        <div class="summary">{{ article.summary | read_more(110, '...')}}</div>
        <div class="action"><a :href="article.link">阅读更多</a></div>
      </li>
    </ul>
    <hr/>
    <h3 style="color:#ff6700">{{ date | date_formate()}}</h3>
    <hr/>
    <h3>卡号：{{ account | four_space }}</h3>
    <hr/>
    <h3>{{ str | upper_case | no_space }}</h3>
    <hr/>
    <h3>手机号：{{ phone | tel_formate }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      status: 'updating',
      price: 23333.33333,
      str: 'hello world',
      articles: [
        {
          title: 'Web全栈入门',
          summary: '目前，Web开发技术仍在快速发展中，异步开发、新的MVVM前端技术层出不穷。由于Node.js把JavaScript引入了服务器端，因此，原来必须使用PHP/Java/C#/Python/Ruby等其他语言来开发服务器端程序，现在可以使用Node.js开发了！',
          link: 'https://joewrights.github.io/2018/07/20/web%E5%85%A8%E6%A0%88%E5%85%A5%E9%97%A8/#more'
        },
        {
          title: 'MySQL笔记',
          summary: 'MySQL是一种 关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了 双授权政策，分为社区版和商业版，由于其 体积小、速度快、总体拥有成本低，尤其是 开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。',
          link: 'https://joewrights.github.io/2018/07/01/mysql%E7%AC%94%E8%AE%B0/#more'
        }
      ],
      date: new Date().getTime(),
      account: '1234342324322342',
      phone: '15770704072'
    }
  },
  methods: {
    sweetAlert() {
      this.$tada.confirm({
        title: '删除',
        text: '你确定要删除吗?',
        primaryText: '删除'
      }).then(willDelete => {
        if (!willDelete) return;
        swal('deleted!', 'you has deleted this item', 'success'); 
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none outside none;

  li :not(:last-child) {
    border-bottom: 1px solid #d3d7d9;
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
}

h2 a {
  font-size: 24px;
  color: #29B4F0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0d8abf;
  }
}

.summary {
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 25px;
}

.action {
  text-align: right;
  
  a {
    background-color: #008fb5;
    color: #fff;
    padding: 5px 10px;
    line-height: 18px;
    border-radius: 3px;
    transition: all 0.28s ease-in;
    text-decoration: none;
    
    &:hover {
      background-color: #00b7e9;
    }
  }
}
</style>
