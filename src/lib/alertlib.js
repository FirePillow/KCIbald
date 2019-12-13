require("../css/alertlib.css");

const layer = require("layui-layer");
const exp ={};

layer.config({
    path: 'https://cdn.jsdelivr.net/gh/sentsin/layer@3.1.1/src/'
});

function user_err(info){
    layer.msg(info, {
        offset: 't',
        anim: 1,
        time:5000000,
        //time for develop environment
        skin: 'alertlib'
    });
}

function unexpected_err(info){
    layer.alert(info, {icon: 2});
}

function twoinferr(title,first,second){
    var content = `<p style="font-size:1.5em;"><b>${first}</b></p>`;
    content += `<p>${second}</p>`;
    layer.open({
        title:title,
        content:content
    })
}

exp.twoinferr = twoinferr;
exp.user_err = user_err;
exp.unexpected_err = unexpected_err;

module.exports = exp;