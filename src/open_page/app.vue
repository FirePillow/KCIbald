<template>
    <div>
        <preposts v-for='data in datas' v-bind:data='data'></preposts>
    </div>
</template>

<script>
    // let preposts = require('./components/preposts.vue'); does the same thing
    import preposts from '../components/preposts.vue';

    let datalist = [
        {
            // can not use  ./common/sampleavatar, because it won't be bundled
            avatarurl: 'https://dummyimage.com/70x70/6dc5d6/000000',
            badge1: 'DP',
            color1: 'bgred',
            badge2: '活动',
            color2: 'bggreen',
            title: 'Battle of Bands 开始报名',
            stat: 'Abby 回复于 13:13',
            postcount: 3,
            body: 'SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN'
        },
        {
            avatarurl: 'https://dummyimage.com/70x70/6dc5d6/000000',
            badge1: 'DP',
            color1: 'bgred',
            badge2: '活动',
            color2: 'bggreen',
            title: 'Battle of Bands 开始报名',
            stat: 'Abby 回复于 13:13',
            postcount: 3,
            body: 'SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN'
        }
    ];

    export default {
        name: 'app',
        components: {
            preposts
        },
        data: () => ({
            datas: datalist
        })
    }

</script>

<style scoped>

</style>