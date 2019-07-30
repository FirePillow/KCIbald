<template>
    <div class='prepost'>
        <img class='prepostimg' v-bind:src='data.avatarurl' alt='avatar'>
        <div class='prepcontent'>
            <div class='badge'>
                <span class='badge1' v-bind:class='data.color1'>DP</span><span class='badge2'
                                                                               v-bind:class='data.color2'>活动</span>
            </div>
            <div class='prepcomments'>
                <span><i class='fa fa-comments' aria-hidden='true'></i> {{data.postcount}}</span>
            </div>
            <div class='preptitle'>
                <b>{{data.title}}</b>
            </div>
            <div class='prepstat'>
                <span>{{data.stat}}</span>
            </div>
            <div class='prepbody'>
                <span>{{data.body}}</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'preposts',
        props: ['data']
    }
</script>

<style scoped>

</style>