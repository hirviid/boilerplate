(function(HIRVIID,window,document,$) {

    HIRVIID.general = {};

    HIRVIID.general.init = function ()
    {
        log('Module init')
    };

    HIRVIID.general.onload = function ()
    {
        log('Module loaded');
    };

    HIRVIID.general.windowResize = function ()
    {
        log('Window resized!');
    };

    HIRVIID.general.scroll = function ()
    {
        log('Scrolled');
    };

})(window.HIRVIID = window.HIRVIID || {},window, document, jQuery);