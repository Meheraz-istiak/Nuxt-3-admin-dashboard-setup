// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title:"Nuxt 3",
            meta:[
                {name:"description",content:"everything abou nuxt 3"}
            ],
            link:[
                { rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"},
                { rel:"stylesheet",href:"plugins/fontawesome-free/css/all.min.css"},
                { rel:"stylesheet",href:"plugins/overlayScrollbars/css/OverlayScrollbars.min.css"},
                { rel:"stylesheet",href:"dist/css/adminlte.min.css"},



            ],
            script:[

                {src:"plugins/jquery/jquery.min.js"},
                {src:"plugins/jquery-ui/jquery-ui.min.js"},
                {src:"plugins/bootstrap/js/bootstrap.bundle.min.js"},
                {src:"plugins/chart.js/Chart.min.js"},
                {src:"plugins/sparklines/sparkline.js"},
                {src:"plugins/jqvmap/jquery.vmap.min.js"},
                {src:"plugins/jqvmap/maps/jquery.vmap.usa.js"},
                {src:"plugins/jquery-knob/jquery.knob.min.js"},
                {src:"plugins/moment/moment.min.js"},
                {src:"plugins/daterangepicker/daterangepicker.js"},
                // {src:"plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"},
                {src:"dist/js/adminlte.js"},
                {src:"plugins/jquery-mousewheel/jquery.mousewheel.js"},
                {src:"plugins/raphael/raphael.min.js"},
                {src:"plugins/jquery-mapael/jquery.mapael.min.js"},
                {src:"plugins/jquery-mapael/maps/usa_states.min.js"},
                {src:"plugins/chart.js/Chart.min.js"},
                { src: 'dist/js/demo.js' },
                { src: 'dist/js/pages/dashboard2.js' },

            ]
        },



    }

})
