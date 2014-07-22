/**
 * Created by dongww on 14-7-22.
 */
$('.ui.sidebar').sidebar({
    onShow: showSidebarAction,
    onHide: hideSidebarAction
}).sidebar('attach events', '.launch.item');

toggleSidebar($(window));

$(window).resize(function () {
    toggleSidebar();
});

function toggleSidebar() {
    if ($(window).width() < 998) {
        $('.ui.sidebar').sidebar('hide');
    } else {
        $('.ui.sidebar').sidebar('show');
    }
}

function hideSidebarAction() {
    $('.main.menu .container').css('margin-right', '10px');
}

function showSidebarAction() {
    $('.main.menu .container').css('margin-right', '210px');
}

$('.ui.dropdown')
    .dropdown()
;