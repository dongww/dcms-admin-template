/**
 * Created by dongww on 14-7-22.
 */
$window = $(window);
$sidebar = $('.ui.sidebar');
$menuContainer = $('.main.menu .container');
$rightMenu = $('.right.menu');
$dropdown = $('.ui.dropdown');

var middleWidth = 1000;
var smallWidth = 600;
var sidebarWidth = 200;
var menuMarginRight = 10;

/**
 * sidebar 相关
 */
$sidebar.sidebar({
    onShow: showSidebarAction,
    onHide: hideSidebarAction
}).sidebar('attach events', '.launch.item');

function hideSidebarAction() {
    $menuContainer.css('margin-right', menuMarginRight + 'px');
    $rightMenu.show();
}

function showSidebarAction() {
    $menuContainer.css('margin-right', sidebarWidth + menuMarginRight + 'px');
    if ($window.width() <= smallWidth) {
        $rightMenu.hide();
    }
}

toggleSidebar();

$window.resize(function () {
    toggleSidebar();
});

function toggleSidebar() {
    if ($window.width() <= middleWidth) {
        if ($sidebar.sidebar('is open')) {
            $sidebar.sidebar('hide');
        }
    } else {
        if ($sidebar.sidebar('is closed')) {
            $sidebar.sidebar('show');
        }
    }
}

/**
 * 下拉列表或菜单
 */
$dropdown.dropdown();