<template>
    <div class="tmpl">
        <go-back-header title="新闻列表"></go-back-header>
        <!-- 首字母大写可以直接改成小写，中间有大写，-小写 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="{name:'news.detail',params:{id:item.id}}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <span>{{item.title}}</span>
                        <div class="news-desc">
                            <p>点击数:{{item.click}}</p>
                            <p>发表时间:{{item.add_time | convertTime}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // title: '新闻列表',
            newsList: []

        }
    }, created() { //当页面被加载后，发起请求获取数据
        this.$http.get('http://webhm.top:8899/api/getnewslist')
            .then(res => {
                this.newsList = res.body.message; //是数组

            }, res => {
                console.log('出错了')
            });
    }
}
</script>
<style scoped>
.mui-media-body p {
    color: #ff4081;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>
