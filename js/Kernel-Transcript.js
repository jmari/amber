smalltalk.addPackage('Kernel-Transcript', {});
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "clear", [], smalltalk.ConsoleTranscript)},
args: [],
source: "clear\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "cr", [], smalltalk.ConsoleTranscript)},
args: [],
source: "cr\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "open", [], smalltalk.ConsoleTranscript)},
args: [],
source: "open",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var string;
string=_st(anObject)._asString();
console.log(String(string));
;
return self}, self, "show:", [anObject], smalltalk.ConsoleTranscript)},
args: ["anObject"],
source: "show: anObject\x0a\x09| string |\x0a\x09string := anObject asString.\x0a\x09<console.log(String(string))>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._new());
return self}, self, "initialize", [], smalltalk.ConsoleTranscript.klass)},
args: [],
source: "initialize\x0a\x09Transcript register: self new",
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._clear();
return self}, self, "clear", [], smalltalk.Transcript.klass)},
args: [],
source: "clear\x0a    self current clear",
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._show_(_st((smalltalk.String || String))._cr());
return self}, self, "cr", [], smalltalk.Transcript.klass)},
args: [],
source: "cr\x0a    self current show: String cr",
messageSends: ["show:", "cr", "current"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@current"];
}, self, "current", [], smalltalk.Transcript.klass)},
args: [],
source: "current\x0a    ^current",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.Transcript.klass)},
args: [],
source: "new\x0a    self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._open();
return self}, self, "open", [], smalltalk.Transcript.klass)},
args: [],
source: "open\x0a    self current open",
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
category: 'instance creation',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx) { self["@current"]=aTranscript;
return self}, self, "register:", [aTranscript], smalltalk.Transcript.klass)},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09current := aTranscript",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._show_(anObject);
return self}, self, "show:", [anObject], smalltalk.Transcript.klass)},
args: ["anObject"],
source: "show: anObject\x0a    self current show: anObject",
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);


