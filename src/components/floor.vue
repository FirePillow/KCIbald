<template>
    <div class="floor">
        <div class="titlehead">
            <div class="titleright">
                <div class="floorcount">#{{index}} floor</div>
                <img class="avatar" v-bind:src="data.avatarurl">
            </div>
            <div class="titleleft">
                <div class="stamp">{{data.stat}}</div>
            </div>
        </div>
        <div class="vhtml">
            {{data.body}}
        </div>
        <div class="botbar">
            {{data.like}}
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            <i class="fa fa-comments-o" aria-hidden="true"></i>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "floor",
        props:["data"]
    }
</script>

<style scoped>

</style>