<template>
    <div>
        <div class="titlehead">
            <div class="titleleft">
                <div class="badge">
                    <span class="badge1" v-bind:class="data.color1">DP</span><span class="badge2" v-bind:class="data.color2">活动</span>
                </div>
                <div class="title">{{data.title}}</div>
                <div class="stamp">{{data.stat}}</div>
            </div>
            <div class="titleright">
                <div class="floorcount">#1 floor</div>
                <img class="avatar" v-bind:src="data.avatarurl">
            </div>
        </div>
        <div class="vhtml">
            {{data.body}}
        </div>
        <div class="botbar">
            {{data.likecount}}
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            <i class="fa fa-comments-o" aria-hidden="true"></i>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "ff",
        props:["data"]
    }
</script>

<style scoped>

</style>