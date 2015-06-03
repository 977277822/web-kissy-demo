/**
 * requery config file
 * if you need update config path , please modification BaseUrl.
 * Created by zxb on 2015/6/3.
 */

(function () {
    require.config({
        baseUrl: "../src/",
        waitSeconds: 15,
        paths: {
            "dom": "jquery/jquip",
            "css": "jquery/jquip.css",
            "ajax": "jquery/jquip.ajax",
            "event": "jquery/jquip.events",
            "ready": "jquery/jquip.docready"
        },
        map: {
            '*': {
                'css': 'jquery/css'
            }
        }
       // ,shim: {
       //     'formvalidation': ["css!jquery/formvalidation/validationEngine.jquery.css","formvalidationLang"]
       // }
    });
})();
