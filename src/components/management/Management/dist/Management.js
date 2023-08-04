"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var SidebarLink_1 = require("../../ui/links/SidebarLink/SidebarLink");
var AuditCommittee_1 = require("../AuditCommittee/AuditCommittee");
var BoardOfDirectors_1 = require("../BoardOfDirectors/BoardOfDirectors");
var ChiefAccountant_1 = require("../ChiefAccountant/ChiefAccountant");
var TeamController_1 = require("../TeamController/TeamController");
var GeneralMeetingOfShareholders_1 = require("../GeneralMeetingOfShareholders/GeneralMeetingOfShareholders");
var GoverningBody_1 = require("../GoverningBody/GoverningBody");
var Team_1 = require("../Team/Team");
var Management_module_scss_1 = require("./Management.module.scss");
var Management = function () {
    var block1 = react_1.useRef(null);
    var block2 = react_1.useRef(null);
    var block3 = react_1.useRef(null);
    var block4 = react_1.useRef(null);
    var block5 = react_1.useRef(null);
    var block6 = react_1.useRef(null);
    var block7 = react_1.useRef(null);
    var refBbarContainer = react_1.useRef(null);
    var _a = react_1.useState(0), barContainerTop = _a[0], setBarContainerTop = _a[1];
    var _b = react_1.useState(true), barNavAbsolute = _b[0], setBarNavAbsolute = _b[1];
    var _c = react_1.useState("0"), idSidebarLink = _c[0], setIdSidebarLink = _c[1];
    var _d = react_1.useState(0), iconTop = _d[0], setIconTop = _d[1];
    var h00 = react_1.useState(452)[0]; // высота (topBlock - 100px)
    var _e = react_1.useState(0), h01 = _e[0], setH01 = _e[1];
    var _f = react_1.useState(0), h02 = _f[0], setH02 = _f[1];
    var _g = react_1.useState(0), h03 = _g[0], setH03 = _g[1];
    var _h = react_1.useState(0), h04 = _h[0], setH04 = _h[1];
    var _j = react_1.useState(0), h05 = _j[0], setH05 = _j[1];
    var _k = react_1.useState(0), h06 = _k[0], setH06 = _k[1];
    var _l = react_1.useState(0), h07 = _l[0], setH07 = _l[1];
    var _m = react_1.useState(0), scrollY = _m[0], setScrollY = _m[1];
    var sidebarLinks = [
        { itemName: "Правление", id: "0" },
        { itemName: "Совет директоров", id: "1" },
        { itemName: "Команда", id: "2" },
        { itemName: "Ревизионная комиссия", id: "3" },
        { itemName: "Главный бухгалтер", id: "4" },
        { itemName: "Контролер", id: "5" },
        { itemName: "Собрание акционеров", id: "6" },
    ];
    react_1.useEffect(function () {
        getTopBarContainer();
        changeStyleBarNav();
        getIconTop();
        document.addEventListener("scroll", scrollHandler);
        // "Этот код срабатывает при размонтировании!
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [barContainerTop]);
    var scrollHandler = function (event) {
        getTopBarContainer();
        getTopAllComponents();
        setScrollY(window.scrollY);
    };
    // console.log(scrollY);
    var getTopBarContainer = function () {
        if (refBbarContainer.current) {
            setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
        }
    };
    // console.log(barContainerTop);
    var changeStyleBarNav = function () {
        if (barContainerTop > 0) {
            setBarNavAbsolute(true);
        }
        else {
            setBarNavAbsolute(false);
        }
    };
    // console.log(barNavAbsolute);
    var getTopAllComponents = function () {
        if (block1.current) {
            setH01(block1.current.getBoundingClientRect().height);
        }
        if (block2.current) {
            setH02(block2.current.getBoundingClientRect().height);
        }
        if (block3.current) {
            setH03(block3.current.getBoundingClientRect().height);
        }
        if (block4.current) {
            setH04(block4.current.getBoundingClientRect().height);
        }
        if (block5.current) {
            setH05(block5.current.getBoundingClientRect().height);
        }
        if (block6.current) {
            setH06(block6.current.getBoundingClientRect().height);
        }
        if (block7.current) {
            setH07(block7.current.getBoundingClientRect().height);
        }
    };
    /* Если не нравится эта логика, то можно использовать:
     Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
     https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
  */
    var getIconTop = function () {
        if (scrollY >= h00 && scrollY < h00 + h01) {
            setIconTop(0);
            setIdSidebarLink("0");
        }
        else if (scrollY >= h00 + h01 && scrollY < h00 + h01 + h02) {
            setIconTop(1);
            setIdSidebarLink("1");
        }
        else if (scrollY >= h00 + h01 + h02 && scrollY < h00 + h01 + h02 + h03) {
            setIconTop(2);
            setIdSidebarLink("2");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 && scrollY < h00 + h01 + h02 + h03 + h04) {
            setIconTop(3);
            setIdSidebarLink("3");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 && scrollY < h00 + h01 + h02 + h03 + h04 + h05) {
            setIconTop(4);
            setIdSidebarLink("4");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 && scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
            setIconTop(5);
            setIdSidebarLink("5");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
            scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 + h07) {
            setIconTop(6);
            setIdSidebarLink("6");
        }
    };
    var getValueId = function (id) {
        setIdSidebarLink(id);
    };
    return (react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management"] },
        react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__container"] },
            react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__content"] },
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u041F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435", ref: block1 },
                    react_1["default"].createElement(GoverningBody_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u0421\u043E\u0432\u0435\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432", ref: block2 },
                    react_1["default"].createElement(BoardOfDirectors_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430", ref: block3 },
                    react_1["default"].createElement(Team_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u0420\u0435\u0432\u0438\u0437\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F", ref: block4 },
                    react_1["default"].createElement(AuditCommittee_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440", ref: block5 },
                    react_1["default"].createElement(ChiefAccountant_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440", ref: block6 },
                    react_1["default"].createElement(TeamController_1["default"], null)),
                react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__department"], id: "\u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432", ref: block7 },
                    react_1["default"].createElement(GeneralMeetingOfShareholders_1["default"], null))),
            react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__bar-container"], ref: refBbarContainer },
                react_1["default"].createElement("aside", { className: barNavAbsolute ? Management_module_scss_1["default"]["management__bar-nav_absolute"] : Management_module_scss_1["default"]["management__bar-nav_fixed"] },
                    react_1["default"].createElement("div", { className: Management_module_scss_1["default"]["management__bar-icon"], style: { top: iconTop * 48 + "px" } },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Arrow Down" })),
                    sidebarLinks.map(function (link, index) { return (react_1["default"].createElement(SidebarLink_1["default"], { key: index, itemName: link.itemName, id: link.id, isActive: index === Number(idSidebarLink), emitID: getValueId })); }))))));
};
exports["default"] = Management;
