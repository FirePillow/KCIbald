<template>
    <div>
    <div id="searchheader">
        <div id="insidesearch">
            <img id="bald" src="../images/logo.svg" alt="KCIBald!" />
            <div id="searchright">
                <i class="fa fa-user" aria-hidden="true"></i>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </div>
            <div id="search">
                搜索框开发中。。。
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div id="insideheader">
        <b>WELCOME TO    </b><img id="bald" src="../images/logo2.svg" alt="KCIBald!" />
    </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        mounted() {
            console.log('navigation bar mounted.')
        }
    }
</script>

<style scoped>
    #insideheader {
        font-size: 1.4em;
        font-family: Arial;
        text-align: center;
        background-color: #FFE505;
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        padding: 40px;
    }

    #searchheader {
        font-size: 1.4em;
        font-family: Arial;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        overflow: hidden;
    }

    #insidesearch {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 5px;
        margin-bottom: 1.5em;
    }

    #searchright {
        float: right;
    }

    #search {
        display: inline;
        background-color: #FFE505;
        border-radius: 500px;
        float: right;
        padding-left: 10px;
        padding-right: 10px;
        margin-right: 10%;
    }

    #insidesearch #bald {
        max-width: 3em;
        float: left;
    }
</style>