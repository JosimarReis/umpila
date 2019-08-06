(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{180:function(e,a,t){"use strict";t.r(a);var n=t(37),o=t(38),r=t(40),l=t(39),c=t(41),m=t(2),s=t.n(m),i=t(21),u=t(42),d=t(201),E=t(274),p=t(275),b=t(328),f=t(203),h=t(329),g=t(218),v=t(204),N=t(205),x=t(345),F=t(206),w=t(227),y=t(239),S=t(176),C=t(240),O=t(330),j=t.n(O),k=t(4),P=t(333),q=t(1),U=t(5),I=t.n(U),R={cidadePorCep:function(e){var a={method:"POST",headers:Object(q.a)()};return I.a.post("/cidades/cep",{cep:e},a).then(function(e){return e.data})},cidadePorUf:function(e){var a={method:"GET",headers:Object(q.a)()};return I.a.get("/cidades/uf/".concat(e),a).then(function(e){return e.data})},cidadePorId:function(e){var a={method:"GET",headers:Object(q.a)()};return I.a.get("/cidades/".concat(e),a).then(function(e){return e.data})}};var z=function(){var e=Object(P.a)(j.a.mark(function e(a,t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.cidade.cep){e.next=2;break}throw{_error:"Digite o CEP"};case 2:return e.next=4,R.cidadePorCep(a.cidade.cep).then(function(e){var n=Object(k.a)({},a,{cidade:e});t(u.c.estabelecimentoGet(n))});case 4:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),A=Object(C.a)({form:"formEstabelecimento",validate:function(e){var a={};e.ramo||(a.codbar="Obrigat\xf3rio"),e.dados&&(e.dados.razaoSocial||(a.razaoSocial="Obrigat\xf3rio"));e.telefones||(a.telefones="Obrigat\xf3rio"),e.endereco&&(e.endereco.rua||(a.endereco.rua="Obrigat\xf3rio"));return a},asyncBlurFields:"cidade.cep",asyncValidate:z,enableReinitialize:!0})(function(e){var a=e.handleSubmit,t=e.show,n=e.error;return t&&s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement("form",{onSubmit:a,className:"form"},s.a.createElement(p.a,{xs:"12",sm:"11",md:"9",lg:"8",xl:"5"},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement("strong",null," Estabelecimento"),s.a.createElement("small",null," | ",e.initialValues?" alterar":" novo")),s.a.createElement(h.a,null,s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"ramo"},"Ramo de Atividade"),s.a.createElement(y.a,{component:"select",className:"form-control",name:"ramo"},e.ramos.map(function(e,a){return s.a.createElement("option",{value:e._id,key:e._id},e.nome)}))))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"situacao"},"Situa\xe7\xe3o"),s.a.createElement(y.a,{component:"select",className:"form-control",name:"situacao"},s.a.createElement("option",{value:"true"},"Ativo"),s.a.createElement("option",{value:"false"},"Inativo"))))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"dados.razaoSocial"},"Raz\xe3o Social"),s.a.createElement(y.a,{type:"text",name:"dados.razaoSocial",placeholder:"Raz\xe3o Social da empresa",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"dados.fantasia"},"Fantasia"),s.a.createElement(y.a,{type:"text",name:"dados.fantasia",placeholder:"Fantasia da empresa",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"dados.cnpj"},"CPF ou CNPJ"),s.a.createElement(y.a,{type:"text",name:"dados.cnpj",placeholder:"CPF ou CNPJ",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"email"},"E-mail"),s.a.createElement(y.a,{type:"text",name:"email",placeholder:"email@email.com",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"telefones"},"Telefone"),s.a.createElement(y.a,{type:"text",name:"telefones",placeholder:"(00) 0 0000-0000",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.rua"},"Logradouro"),s.a.createElement(y.a,{type:"text",name:"endereco.rua",placeholder:"",component:"input",className:"form-control",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.numero"},"N\xfamero"),s.a.createElement(y.a,{type:"text",name:"endereco.numero",placeholder:"Digite o n\xfamero se tiver",component:"input",className:"form-control"})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.bairro"},"Bairro"),s.a.createElement(y.a,{type:"text",name:"endereco.bairro",placeholder:"Bairro",component:"input",className:"form-control"})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.referencia"},"Refer\xeacia"),s.a.createElement(y.a,{type:"text",name:"endereco.referencia",placeholder:"Quais os pontos de referencia?",component:"input",className:"form-control"})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"cidade.cep"},"CEP"),s.a.createElement(y.a,{type:"text",name:"cidade.cep",placeholder:"Digite o CEP",component:"input",className:"form-control"})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"cidade.estado.sigla"},"Estado"),s.a.createElement(y.a,{type:"text",component:"input",className:"form-control",name:"cidade.estado.sigla",disabled:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"cidade.nome"},"Cidade"),s.a.createElement(y.a,{type:"text",component:"input",className:"form-control",name:"cidade.nome",disabled:!0})))),s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"6"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.geo.latitude"},"Latitude"),s.a.createElement(y.a,{type:"text",name:"endereco.geo.latitude",placeholder:"Latitude do estabelecimento",component:"input",className:"form-control",required:!0}))),s.a.createElement(p.a,{xs:"6"},s.a.createElement(v.a,null,s.a.createElement(N.a,{htmlFor:"endereco.geo.longitude"},"Longitude",s.a.createElement("button",{onClick:function(){(window.navigator&&window.navigator.geolocation).getCurrentPosition(function(e){Object(S.a)("formEstabelecimento","endereco.geo.latitude",e.coords.latitude),Object(S.a)("formEstabelecimento","endereco.geo.longitude",e.coords.longitude)})},className:"btn-square btn btn-danger btn-sm"}," ",s.a.createElement("i",{className:"fa close"})," Usar Atual")),s.a.createElement(y.a,{type:"text",name:"endereco.geo.longitude",placeholder:"Longitude do estabelecimento",component:"input",className:"form-control",required:!0})))),n&&s.a.createElement(E.a,null,s.a.createElement(p.a,{xs:"12"},s.a.createElement(x.a,{color:"danger"},n)))),s.a.createElement(F.a,null,s.a.createElement(y.a,{component:w.a,name:"submit",type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),s.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",s.a.createElement("i",{className:"fa close"})," Cancelar"))))))});function L(e){var a,t=e.estabelecimento;return s.a.createElement("tr",{key:t._id.toString()},s.a.createElement("td",{className:"text-truncate"},t.dados.razaoSocial),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("small",null,t.telefones)),s.a.createElement("td",{className:"text-center"},s.a.createElement(d.a,{color:(a=t.situacao,!0===a?"success":"secondary")},!0===t.situacao?"Ativo":"Inativo")),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{onClick:function(){return e.alterarEstabelecimento({})},className:"btn-square btn btn-ghost-primary btn-sm",title:"Novo"},s.a.createElement("i",{className:"fa fa-plus"})),s.a.createElement("button",{onClick:function(){return e.alterarEstabelecimento(t,!1)},className:"btn-square btn btn-ghost-warning btn-sm",title:"Alterar dados"},s.a.createElement("i",{className:"fa fa-pencil"})),s.a.createElement("button",{className:"btn-square btn btn-ghost-danger btn-sm",title:"Remover",estabelecimento:t,onClick:function(){return e.removerEstabelecimento(t)}},s.a.createElement("i",{className:"fa fa-minus"}))))}var G=function(e){function a(){var e,t;Object(n.a)(this,a);for(var o=arguments.length,c=new Array(o),m=0;m<o;m++)c[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).alterarEstabelecimento=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&t.props.onFormUpload(),t.props.estabelecimentos.estabelecimentoFormShow||a||t.props.onShowForm(),t.props.onPopularEstabelecimento(e)},t.alterarImagem=function(e){t.props.onPopularEstabelecimento(e),t.props.estabelecimentos.estabelecimentoFormShow||t.props.onShowForm(),t.props.estabelecimentos.produtoShowForm&&t.props.onShowForm()},t.enviarImagem=function(e){e&&t.props.onImagemUpload(e),t.props.estabelecimentos.estabelecimentoFormImage&&t.props.onFormUpload(),q.b.push("/estabelecimentos")},t.submit=function(e){e._id?t.props.onUpdateEstabelecimento(e):t.props.onCreateEstabelecimento(e),t.props.estabelecimentos.estabelecimentoFormShow&&t.props.onShowForm()},t.removerEstabelecimento=function(e){window.confirm("Deseja remover o estabelecimento '".concat(e.dados.razaoSocial,"'"))&&t.props.onRemoveEstabelecimento(e)},t.setEstabelecimento=function(e){t.props.setEstabelecimento(e),q.b.push("/usuarios-estabelecimentos")},t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoadEstabelecimentos(),this.props.onGetRamos()}},{key:"render",value:function(){var e=this,a=this.props.estabelecimentos,t=a.estabelecimentoFormShow,n=a.estabelecimentoFormImage;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(A,{initialValues:a.estabelecimento,ramos:this.props.ramos.items,onSubmit:this.submit,onCancel:this.props.onShowForm,show:a.estabelecimentoFormShow}),s.a.createElement(E.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},!t&&!n&&s.a.createElement(p.a,{xs:12,xl:12},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement("i",{className:"fa fa-align-justify"})," ",s.a.createElement("strong",{className:"card-title"},"Estabelecimentos"),a.estabelecimentoFormShow?s.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-danger btn-sm"}," ",s.a.createElement("i",{className:"fa close"})," Fechar formu\xe1rio"):s.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-ghost-primary btn-sm"},s.a.createElement("i",{className:"fa fa-plus"})," Novo")),s.a.createElement(h.a,null,s.a.createElement(g.a,{responsive:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"Empresa"),s.a.createElement("th",{scope:"col"},"E-mail"),s.a.createElement("th",{scope:"col"},"Telefone"),s.a.createElement("th",{scope:"col"},"Situa\xe7\xe3o"),s.a.createElement("th",{scope:"col",className:"text-center"},"#"))),s.a.createElement("tbody",null,a.items&&a.items.map(function(a,t){return s.a.createElement(L,{key:t,estabelecimento:a,alterarEstabelecimento:e.alterarEstabelecimento,removerEstabelecimento:e.removerEstabelecimento,setEstabelecimento:e.setEstabelecimento})}))))))))}}]),a}(m.Component);a.default=Object(i.b)(function(e){var a=e.estabelecimentos,t=e.ramos,n=e.form;return{estabelecimentos:a,ramos:t,usuarioEstabelecimento:e.usuarioEstabelecimento,form:n}},function(e){return{onLoadEstabelecimentos:function(){return e(u.c.getAll())},onShowForm:function(){return e(u.c.showForm())},onFormUpload:function(){return e(u.c.formUpload())},onCreateEstabelecimento:function(a){return e(u.c.estabelecimentoCreate(a))},onRemoveEstabelecimento:function(a){return e(u.c.estabelecimentoRemove(a))},onUpdateEstabelecimento:function(a){return e(u.c.estabelecimentoUpdate(a))},onPopularEstabelecimento:function(a){return e(u.c.estabelecimentoGet(a))},onImagemUpload:function(a){return e(u.c.imagemUpload(a))},onGetRamos:function(){return e(u.e.getAll(!0))},setEstabelecimento:function(a){return e(u.g.setEstabelecimento(a))}}})(G)}}]);
//# sourceMappingURL=16.9de6403f.chunk.js.map