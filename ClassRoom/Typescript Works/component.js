"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("./forms");
var service_1 = require("./service");
var frm = new forms_1.ReactiveFormmodule();
frm.setvalue();
var serv = new service_1.Todoservice();
serv.createtodo();
