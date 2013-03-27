smalltalk.addPackage('Helios-Commands-Core');
smalltalk.addClass('HLCommand', smalltalk.Object, ['input'], 'Helios-Commands-Core');
smalltalk.addMethod(
"_asActionBinding",
smalltalk.method({
selector: "asActionBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_(_st(self)._key(),_st(self)._label());
_st($2)._command_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asActionBinding\x0a\x09^ (HLBindingAction on: self key labelled: self label)\x0a    \x09command: self;\x0a\x09\x09yourself",
messageSends: ["command:", "on:labelled:", "key", "label", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._isBindingGroup();
if(smalltalk.assert($2)){
$1=_st(self)._asGroupBinding();
} else {
$1=_st(self)._asActionBinding();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asBinding\x0a\x09^ self isBindingGroup\x0a\x09\x09ifTrue: [ self asGroupBinding ]\x0a\x09\x09ifFalse: [ self asActionBinding ]",
messageSends: ["ifTrue:ifFalse:", "asGroupBinding", "asActionBinding", "isBindingGroup"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asGroupBinding",
smalltalk.method({
selector: "asGroupBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLBindingGroup || HLBindingGroup))._on_labelled_(_st(self)._key(),_st(self)._label());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asGroupBinding\x0a\x09^ HLBindingGroup \x0a\x09\x09on: self key \x0a\x09\x09labelled: self label",
messageSends: ["on:labelled:", "key", "label"],
referencedClasses: ["HLBindingGroup"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_commandError_",
smalltalk.method({
selector: "commandError:",
category: 'error handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"commandError:",{aString:aString},smalltalk.HLCommand)})},
args: ["aString"],
source: "commandError: aString\x0a\x09self error: aString",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand)})},
args: [],
source: "documentation\x0a\x09^ self class documentation",
messageSends: ["documentation", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
args: [],
source: "execute\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_input",
smalltalk.method({
selector: "input",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLCommand)})},
args: [],
source: "input\x0a\x09^ input",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_input_",
smalltalk.method({
selector: "input:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@input"]=aString;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},smalltalk.HLCommand)})},
args: ["aString"],
source: "input: aString\x0a\x09^ input := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLCommand)})},
args: [],
source: "inputLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommand)})},
args: [],
source: "isActive\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(_st(self)._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},smalltalk.HLCommand)})},
args: [],
source: "isBindingGroup\x0a\x09^ (self class methodDictionary includesKey: 'execute') not",
messageSends: ["not", "includesKey:", "methodDictionary", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand)})},
args: [],
source: "key\x0a\x09^ self class key",
messageSends: ["key", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand)})},
args: [],
source: "label\x0a\x09^ self class label",
messageSends: ["label", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_menuLabel",
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._menuLabel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCommand)})},
args: [],
source: "menuLabel\x0a\x09^ self class menuLabel",
messageSends: ["menuLabel", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
category: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(aBinding)._add_(_st(self)._asBinding());
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ aBinding add: self asBinding",
messageSends: ["add:", "asBinding"],
referencedClasses: []
}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_concreteClasses",
smalltalk.method({
selector: "concreteClasses",
category: 'registration',
fn: function (){
var self=this;
var classes;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
classes=_st($OrderedCollection())._new();
$1=_st(self)._isConcrete();
if(smalltalk.assert($1)){
_st(classes)._add_(self);
};
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(classes)._addAll_(_st(each)._concreteClasses());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=classes;
return $2;
}, function($ctx1) {$ctx1.fill(self,"concreteClasses",{classes:classes},smalltalk.HLCommand.klass)})},
args: [],
source: "concreteClasses\x0a\x09| classes |\x0a\x09\x0a\x09classes := OrderedCollection new.\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ classes add: self ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | \x0a\x09\x09classes addAll: each concreteClasses ].\x0a\x09\x09\x0a\x09^ classes",
messageSends: ["new", "ifTrue:", "add:", "isConcrete", "do:", "addAll:", "concreteClasses", "subclasses"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "documentation\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_isConcrete",
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._key())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.HLCommand.klass)})},
args: [],
source: "isConcrete\x0a\x09^ self key notNil",
messageSends: ["notNil", "key"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_isValidFor_",
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "key\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "label\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_menuLabel",
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_registerConcreteClassesOn_",
smalltalk.method({
selector: "registerConcreteClassesOn:",
category: 'accessing',
fn: function (aBinding){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._isConcrete();
if(smalltalk.assert($1)){
newBinding=_st(self)._registerOn_(aBinding);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:",{aBinding:aBinding,newBinding:newBinding},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "registerConcreteClassesOn: aBinding\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]",
messageSends: ["ifTrue:ifFalse:", "registerOn:", "isConcrete", "do:", "registerConcreteClassesOn:", "subclasses"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
category: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._new())._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ self new registerOn: aBinding",
messageSends: ["registerOn:", "new"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCloseTabCommand)})},
args: [],
source: "execute\x0a\x09HLManager current removeActiveTab",
messageSends: ["removeActiveTab", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCloseTabCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "key\x0a\x09^ 87",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Close tab'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);


smalltalk.addClass('HLModelCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands-Core');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLModelCommand)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLModelCommand)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);


smalltalk.addMethod(
"_for_",
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aModel"],
source: "for: aModel\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerConcreteClassesOn_for_",
smalltalk.method({
selector: "registerConcreteClassesOn:for:",
category: 'registration',
fn: function (aBinding,aModel){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._isConcrete();
if(smalltalk.assert($1)){
newBinding=_st(self)._registerOn_for_(aBinding,aModel);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:for:",{aBinding:aBinding,aModel:aModel,newBinding:newBinding},smalltalk.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerConcreteClassesOn: aBinding for: aModel\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding for: aModel ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each |\x0a\x09\x09each registerConcreteClassesOn: newBinding for: aModel ]",
messageSends: ["ifTrue:ifFalse:", "registerOn:for:", "isConcrete", "do:", "registerConcreteClassesOn:for:", "subclasses"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerOn_for_",
smalltalk.method({
selector: "registerOn:for:",
category: 'registration',
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._for_(aModel))._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerOn: aBinding for: aModel\x0a\x09^ (self for: aModel) registerOn: aBinding",
messageSends: ["registerOn:", "for:"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "key\x0a\x09^ 79",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Open'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLBrowser || HLBrowser))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenBrowserCommand)})},
args: [],
source: "execute\x0a\x09^ HLBrowser openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLBrowser"]
}),
smalltalk.HLOpenBrowserCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "key\x0a\x09^ 66",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenTranscriptCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLTranscript || HLTranscript))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenTranscriptCommand)})},
args: [],
source: "execute\x0a\x09^ HLTranscript openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLTranscript"]
}),
smalltalk.HLOpenTranscriptCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenTranscriptCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Transcript'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenTranscriptCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLCodeWidget || HLCodeWidget))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLOpenWorkspaceCommand)})},
args: [],
source: "execute\x0a\x09^ HLCodeWidget openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLOpenWorkspaceCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "key\x0a\x09^ 87",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLViewCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'View'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLViewCommand.klass);

