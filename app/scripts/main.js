var didResize = false;
var didScroll = false;

(function ($) {

    $(function () { HIRVIID.main.init(); });
    $(window).load(function () { HIRVIID.main.onload(); });

})(jQuery);

(function(HIRVIID,window,document,$) {

    HIRVIID.main = {};

    HIRVIID.main.init = function ()
    {
        this.callFunctions(HIRVIID, 'init');
    };

    HIRVIID.main.onload = function ()
    {
        this.callFunctions(HIRVIID, 'onload');
        this.start();
    };

    HIRVIID.main.start = function ()
    {
        var self = this;
        $(window).on('resize',function(){ didResize = true; });
        $(document).on('scroll', function(){ didScroll = true; });

        setInterval(function() {
            if(didResize) {
                didResize = false;
                self.windowResize();
            }
            if(didScroll) {
                didScroll = false;
                self.scroll();
            }
        }, 250);


        $('a[rel="external"]').attr('target', '_blank');
    };

    HIRVIID.main.windowResize = function ()
    {
        //http://ejohn.org/blog/learning-from-twitter/
        HIRVIID.main.callFunctions(HIRVIID, 'windowResize');
    };

    HIRVIID.main.scroll = function ()
    {
        HIRVIID.main.callFunctions(HIRVIID, 'scroll');
    };

    HIRVIID.main.callFunctions = function (collection, fn)
    {
        for (var cls in collection) {
            if ((cls != 'main') && (typeof collection[cls][fn] == 'function')) {
                collection[cls][fn]();
            }
        }
    };


})(window.HIRVIID = window.HIRVIID || {},window, document, jQuery);