"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../schemas/index");
var json_1 = __importDefault(require("../utils/json"));
var Router = require('koa-router');
var router = new Router();
router.get('/manage/overview', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var clients, client, _i, clients_1, c, tasks, task, _a, tasks_1, c, proxies, proxy, _b, proxies_1, c;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, index_1.Client.find({}, { status: 1 })];
            case 1:
                clients = _c.sent();
                client = {
                    total: clients.length,
                    working: 0,
                    waiting: 0
                };
                for (_i = 0, clients_1 = clients; _i < clients_1.length; _i++) {
                    c = clients_1[_i];
                    client[c['status'].toLowerCase()]++;
                }
                return [4 /*yield*/, index_1.Task.find({}, { status: 1 })];
            case 2:
                tasks = _c.sent();
                task = {
                    working: 0,
                    waiting: 0,
                    success: 0,
                    fail: 0
                };
                for (_a = 0, tasks_1 = tasks; _a < tasks_1.length; _a++) {
                    c = tasks_1[_a];
                    task[c['status'].toLowerCase()]++;
                }
                return [4 /*yield*/, index_1.Proxy.find({}, { status: 1 })];
            case 3:
                proxies = _c.sent();
                proxy = {
                    alive: 0,
                    ban: 0
                };
                for (_b = 0, proxies_1 = proxies; _b < proxies_1.length; _b++) {
                    c = proxies_1[_b];
                    proxy[c['status'].toLowerCase()]++;
                }
                json_1.default(ctx, {
                    data: {
                        task: task,
                        proxy: proxy,
                        client: client
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
