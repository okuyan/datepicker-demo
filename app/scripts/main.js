require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap/bootstrap',
        datepicker: '../bower_components/bootstrap-datepicker/js/bootstrap-datepicker'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        datepicker : {
            deps: ['jquery'],
            exports : 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'datepicker'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);


    $('.datepicker').datepicker();
});