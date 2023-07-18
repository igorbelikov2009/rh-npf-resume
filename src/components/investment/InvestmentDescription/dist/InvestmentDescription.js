"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_1 = require("../../general/paragraphs/Paragraph/Paragraph");
var ParagraphBefore_1 = require("../../general/paragraphs/ParagraphBefore/ParagraphBefore");
var InvestmentDescription_module_scss_1 = require("./InvestmentDescription.module.scss");
var InvestmentDescription = function () {
    var paragraphs2 = [
        "основана на анализе макроэкономических тенденций и финансовых рынков в долгосрочной перспективе,",
        "предусматривает широкую диверсификацию инвестиционных портфелей,",
        "предписывает четкий контроль и регулярное отслеживание динамики инвестиционных портфелей.",
    ];
    var paragraphs3 = [
        "Банки, с которыми сотрудничает Фонд, являются участниками системы страхования вкладов и  обладают кредитными рейтингами от одного или нескольких международных и/или национальных рейтинговых агентств – Рейтинговое агентство «Эксперт РА», АКРА (Аналитическое Кредитное Рейтинговое Агентство), Standard & Poor`s, Fitch или Moody`s.",
        "Для инвестиций в государственные ценные бумаги и другие финансовые инструменты Фонд привлекает управляющие компании. АО НПФ «Ренессанс пенсии» сотрудничает с АО «Сбер Управление Активами», АО «УК «ТРАНСФИНГРУП» и АО УК «СПУТНИК – УПРАВЛЕНИЕ КАПИТАЛОМ».",
        "В соответствии с нормами законодательства, ежедневный контроль за соблюдением фондами и управляющими компаниями ограничений на размещение средств пенсионных резервов осуществляет специализированный депозитарий. Для АО НПФ «Ренессанс пенсии» эти услуги предоставляет АО ВТБ Специализированный депозитарий, занимающее лидирующие позиции на внутреннем рынке депозитарных услуг. Фонд на ежедневной основе рассчитывает долю активов, приходящуюся на каждый пенсионный счет. Окончательный расчет и распределение инвестиционного дохода за календарный год на пенсионные счета участников производится, в соответствии с требованиями законодательства РФ, до 31-го марта следующего календарного года.",
    ];
    var paragraphs4 = [
        "доход от размещения пенсионных резервов может увеличиваться или уменьшаться;",
        "результаты инвестирования в прошлом не определяют доходов в будущем;",
        "государство не гарантирует доходности размещения средств пенсионных резервов.",
    ];
    return (react_1["default"].createElement("div", { className: InvestmentDescription_module_scss_1["default"]["container"] },
        react_1["default"].createElement(Paragraph_1["default"], { paragraphs: [
                "АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой, которая:",
            ] }),
        react_1["default"].createElement(ParagraphBefore_1["default"], { paragraphs: paragraphs2 }),
        react_1["default"].createElement(Paragraph_1["default"], { paragraphs: paragraphs3 }),
        react_1["default"].createElement("h1", { className: InvestmentDescription_module_scss_1["default"]["container__heading"] }, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0434\u043E\u0445\u043E\u0434\u0430"),
        react_1["default"].createElement(Paragraph_1["default"], { paragraphs: ["Просим вас обратить внимание на следующее:"] }),
        react_1["default"].createElement(ParagraphBefore_1["default"], { paragraphs: paragraphs4 }),
        react_1["default"].createElement(Paragraph_1["default"], null),
        react_1["default"].createElement(Paragraph_1["default"], null)));
};
exports["default"] = InvestmentDescription;
