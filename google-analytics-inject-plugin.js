// language=JavaScript
const payload =
    '!funct' +
    'ion(e,a,t,n,g,c,o){e.GoogleA' +
    'nalyticsObject=g,e.ga=e.ga||function(){(e.ga.q=' +
    'e.ga.q||[]).push(arguments)},e.g' +
    'a.l=1*new Date,c=a.createElement(t),o=a.getElementsByTa' +
    'gName(t)[0],c.async=1,c.src="https://www.' +
    'google-analytics.com/analytic' +
    's.js",o.parentNode.insertBefore(c,o)}(window,document,"script",0,"ga"),ga("create","UA-135644799-2","auto"),ga("send","pageview");';

let a = class GoogleAnalyticsInjectPlugin {

    constructor() {
    }

    apply(compiler) {


        compiler.hooks.compilation.tap('GoogleAnalyticsInjectPlugin', (compilation) => {

            compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
                'GoogleAnalyticsInjectPlugin',
                (data, cb) => {
                    data.head.unshift({
                        tagName: 'script',
                        closeTag: true,
                        attributes: {
                            type: 'text/javascript'
                        },
                        innerHTML: payload
                    });
                    cb(null, data)
                }
            )
        })

    };

};
module.exports = a; 