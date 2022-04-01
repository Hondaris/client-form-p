(function(){"use strict";var e={6181:function(e,r,t){var o=t(8935),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrap"},[t("form",{staticClass:"form",attrs:{action:"",method:"post",name:"client_form"},on:{keydown:e.changeEnterForm,submit:function(r){return r.preventDefault(),e.checkForm.apply(null,arguments)}}},[t("ul",{staticClass:"form_list"},[t("h2",[e._v("Заполните данные клиента")]),t("li",[t("label",{attrs:{for:"surname"}},[e._v("Фамилия*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.surname,expression:"form.surname",modifiers:{trim:!0}}],class:{is_invalid:e.v$.form.surname.$error},attrs:{type:"text",id:"surname",name:"surname"},domProps:{value:e.form.surname},on:{blur:[e.v$.form.surname.$touch,function(r){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(e.form,"surname",r.target.value.trim())}}}),e.v$.form.surname.required.$invalid&&e.v$.form.surname.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e()]),t("li",[t("label",{attrs:{for:"name"}},[e._v("Имя*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],class:{is_invalid:e.v$.form.name.$error},attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.form.name},on:{blur:[e.v$.form.name.$touch,function(r){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(e.form,"name",r.target.value.trim())}}}),e.v$.form.name.required.$invalid&&e.v$.form.name.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e()]),t("li",[t("label",{attrs:{for:"middlename"}},[e._v("Отчество")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.middlename,expression:"form.middlename",modifiers:{trim:!0}}],attrs:{type:"text",id:"middlename",name:"middlename"},domProps:{value:e.form.middlename},on:{input:function(r){r.target.composing||e.$set(e.form,"middlename",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"birthday"}},[e._v("Дата рождения*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.birthday,expression:"form.birthday"}],class:{is_invalid:e.v$.form.birthday.$error},attrs:{type:"date",id:"birthday",name:"birthday"},domProps:{value:e.form.birthday},on:{blur:e.v$.form.birthday.$touch,input:function(r){r.target.composing||e.$set(e.form,"birthday",r.target.value)}}}),e.v$.form.birthday.required.$invalid&&e.v$.form.birthday.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e(),e.v$.form.birthday.between.$invalid&&e.v$.form.birthday.$error?t("p",{staticClass:"invalid"},[e._v(" Это действительно ваша дата рождения? ")]):e._e()]),t("li",[t("label",{attrs:{for:"tel"}},[e._v("Номер телефона*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.tel,expression:"form.tel",modifiers:{trim:!0}}],class:{is_invalid:e.v$.form.tel.$error},attrs:{type:"tel",id:"tel",name:"tel"},domProps:{value:e.form.tel},on:{blur:[e.v$.form.tel.$touch,function(r){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(e.form,"tel",r.target.value.trim())}}}),e.v$.form.tel.required.$invalid&&e.v$.form.tel.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e(),e.v$.form.tel.checkLength.$invalid&&e.v$.form.tel.$error?t("p",{staticClass:"invalid"},[e._v(" Пожалуйста введите ваш номер, должно быть 11 цифр ")]):e._e()]),t("li",[t("label",{attrs:{for:"gender"}},[e._v("Пол")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",id:"male",name:"gender",value:"male"},domProps:{checked:e._q(e.form.gender,"male")},on:{change:function(r){return e.$set(e.form,"gender","male")}}}),t("label",{staticClass:"light",attrs:{for:"male"}},[e._v("Мужской")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",id:"female",name:"gender",value:"female"},domProps:{checked:e._q(e.form.gender,"female")},on:{change:function(r){return e.$set(e.form,"gender","female")}}}),t("label",{staticClass:"light",attrs:{for:"female"}},[e._v("Женский")])]),t("li",{staticClass:"wrap_group"},[t("label",{staticClass:"label_group",attrs:{for:"client_group"}},[e._v("Группа клиента*")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.group,expression:"form.group"}],staticClass:"client_group",class:{is_invalid:e.v$.form.group.$error},attrs:{name:"client_group",id:"client_group",multiple:""},on:{blur:e.v$.form.group.$touch,change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"group",r.target.multiple?t:t[0])}}},[t("option",{attrs:{disabled:""}},[e._v(" Выберите группы к которым вы принадлежите ")]),e._l(e.groups,(function(r,o){return t("option",{key:o,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])}))],2),t("p",{staticClass:"hint"},[e._v(" Подсказка: Вы можете выбрать несколько вариантов с помощью зажатой клавишей Ctrl ")]),e.v$.form.group.required.$invalid&&e.v$.form.group.$error?t("p",{staticClass:"invalid"},[e._v(" Выберите хотя бы один вариант ")]):e._e()]),t("li",[t("label",{attrs:{for:"doctor"}},[e._v("Лечащий врач")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.doctor,expression:"form.doctor"}],attrs:{name:"doctor",id:"doctor"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"doctor",r.target.multiple?t:t[0])}}},e._l(e.doctors,(function(r,o){return t("option",{key:o,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])})),0)]),t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sendSms,expression:"form.sendSms"}],attrs:{type:"checkbox",id:"send_sms",name:"send_sms"},domProps:{checked:Array.isArray(e.form.sendSms)?e._i(e.form.sendSms,null)>-1:e.form.sendSms},on:{change:function(r){var t=e.form.sendSms,o=r.target,a=!!o.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);o.checked?n<0&&e.$set(e.form,"sendSms",t.concat([i])):n>-1&&e.$set(e.form,"sendSms",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.form,"sendSms",a)}}}),t("label",{staticClass:"light",attrs:{for:"send_sms"}},[e._v("Не отправлять СМС")])]),t("h2",[e._v("Адрес")]),t("li",[t("label",{attrs:{for:"index"}},[e._v("Индекс")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.index,expression:"form.index",modifiers:{trim:!0}}],attrs:{type:"text",id:"index",name:"index"},domProps:{value:e.form.index},on:{input:function(r){r.target.composing||e.$set(e.form,"index",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"country"}},[e._v("Страна")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.country,expression:"form.country",modifiers:{trim:!0}}],attrs:{type:"text",id:"country",name:"country"},domProps:{value:e.form.country},on:{input:function(r){r.target.composing||e.$set(e.form,"country",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"region"}},[e._v("Область")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.region,expression:"form.region",modifiers:{trim:!0}}],attrs:{type:"text",id:"region",name:"region"},domProps:{value:e.form.region},on:{input:function(r){r.target.composing||e.$set(e.form,"region",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"city"}},[e._v("Город*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.city,expression:"form.city",modifiers:{trim:!0}}],class:{is_invalid:e.v$.form.city.$error},attrs:{type:"text",id:"city",name:"city"},domProps:{value:e.form.city},on:{blur:[e.v$.form.city.$touch,function(r){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(e.form,"city",r.target.value.trim())}}}),e.v$.form.city.required.$invalid&&e.v$.form.city.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e()]),t("li",[t("label",{attrs:{for:"street"}},[e._v("Улица")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.street,expression:"form.street",modifiers:{trim:!0}}],attrs:{type:"text",id:"street",name:"street"},domProps:{value:e.form.street},on:{input:function(r){r.target.composing||e.$set(e.form,"street",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"homenumber"}},[e._v("Дом")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.homenumber,expression:"form.homenumber",modifiers:{trim:!0}}],attrs:{type:"text",id:"homenumber",name:"homenumber"},domProps:{value:e.form.homenumber},on:{input:function(r){r.target.composing||e.$set(e.form,"homenumber",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("h2",[e._v("Документ подтверждайщий личность")]),t("li",[t("label",{attrs:{for:"document"}},[e._v("Тип документа*")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.document,expression:"form.document"}],attrs:{name:"document",id:"document"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"document",r.target.multiple?t:t[0])}}},[t("option",{attrs:{disabled:""}},[e._v("Выберите тип документа")]),e._l(e.documents,(function(r,o){return t("option",{key:o,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])}))],2)]),t("li",[t("label",{attrs:{for:"series"}},[e._v("Серия")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.series,expression:"form.series",modifiers:{trim:!0}}],attrs:{type:"text",id:"series",name:"series"},domProps:{value:e.form.series},on:{input:function(r){r.target.composing||e.$set(e.form,"series",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"number"}},[e._v("Номер")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.number,expression:"form.number",modifiers:{trim:!0}}],attrs:{type:"text",id:"number",name:"number"},domProps:{value:e.form.number},on:{input:function(r){r.target.composing||e.$set(e.form,"number",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"issued_by"}},[e._v("Кем выдан")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.issuedBy,expression:"form.issuedBy",modifiers:{trim:!0}}],attrs:{type:"text",id:"issued_by",name:"issued_by"},domProps:{value:e.form.issuedBy},on:{input:function(r){r.target.composing||e.$set(e.form,"issuedBy",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("li",[t("label",{attrs:{for:"date_issued"}},[e._v("Дата выдачи*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dateIssued,expression:"form.dateIssued"}],class:{is_invalid:e.v$.form.dateIssued.$error},attrs:{type:"date",id:"date_issued",name:"date_issued"},domProps:{value:e.form.dateIssued},on:{blur:e.v$.form.dateIssued.$touch,input:function(r){r.target.composing||e.$set(e.form,"dateIssued",r.target.value)}}}),e.v$.form.dateIssued.required.$invalid&&e.v$.form.dateIssued.$error?t("p",{staticClass:"invalid"},[e._v(" Это обязательное поле ")]):e._e(),e.v$.form.dateIssued.between.$invalid&&e.v$.form.dateIssued.$error?t("p",{staticClass:"invalid"},[e._v(" Введите корректную дату выдачи документа ")]):e._e()]),e._m(0)])])])])},i=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("li",[t("button",{attrs:{type:"submit"}},[e._v("Отправить")])])}],n=t(1545),s=t(4677),m={name:"App",setup(){return{v$:(0,n.ZP)()}},data(){return{form:{surname:"",name:"",middlename:"",gender:"",birthday:"",tel:"+7",sendSms:!1,index:"",country:"",region:"",city:"",street:"",homenumber:"",series:"",number:"",issuedBy:"",dateIssued:"",group:[],doctor:"Ivanov",document:"passport"},groups:[{label:"VIP",value:"VIP"},{label:"Проблемные",value:"problematic"},{label:"ОМС",value:"OMS"}],doctors:[{label:"Иванов",value:"Ivanov"},{label:"Захаров",value:"Zaharov"},{label:"Чернышева",value:"Chernisheva"}],documents:[{label:"Паспорт",value:"passport"},{label:"Свидетельство о рождении",value:"birthCertificate"},{label:"Вод. удостоверение",value:"driversLicense"}]}},validations(){return{form:{surname:{required:s.C1},name:{required:s.C1},birthday:{required:s.C1,between:e=>Date.parse(e)>Date.parse("1900-01-01")&&Date.parse(e)<Date.now()},tel:{required:s.C1,checkLength(e){return 12===e.length}},group:{required(e){return e.length>0}},city:{required:s.C1},dateIssued:{required:s.C1,between:e=>Date.parse(e)>Date.parse("1900-01-01")&&Date.parse(e)<Date.now()}}}},methods:{changeEnterForm(e){if(13==e.keyCode)return e.preventDefault(),!1},checkForm(){this.v$.form.$touch(),this.v$.form.$error?alert("Данные заполненны не полностью или некорректно! Необходимые для заполнения поля отмечены красным."):alert("Клиент создан")}}},l=m,u=t(1001),d=(0,u.Z)(l,a,i,!1,null,null,null),f=d.exports;o.Z.config.productionTip=!1,new o.Z({render:e=>e(f)}).$mount("#app")}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,o,a,i){if(!o){var n=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,m=0;m<o.length;m++)(!1&i||n>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[m])}))?o.splice(m--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(r=l)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,o){var a,i,n=o[0],s=o[1],m=o[2],l=0;if(n.some((function(r){return 0!==e[r]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(m)var u=m(t)}for(r&&r(o);l<n.length;l++)i=n[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkclient_form_vue2"]=self["webpackChunkclient_form_vue2"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6181)}));o=t.O(o)})();
//# sourceMappingURL=app.bb8a2bc3.js.map