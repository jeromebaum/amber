smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.addClass('HLBrowserCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCommand.klass)})},
args: ["aBrowserModel"],
source: "for: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(71);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLBrowserGoToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 71",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Go to";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLBrowserGoToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToClassesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnClasses",
messageSends: ["focusOnClasses", "model"],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToMethodsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnMethods",
messageSends: ["focusOnMethods", "model"],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(77);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22m\x22\x0a    \x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnPackages",
messageSends: ["focusOnPackages", "model"],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(80);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 80",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToProtocolsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
messageSends: ["focusOnProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(84);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToSourceCodeCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
messageSends: ["focusOnSourceCode", "model"],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(83);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "key\x0a\x09\x22s\x22\x0a    \x0a\x09^ 83",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Source code";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Source code'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommitPackageCommand)})},
args: [],
source: "execute\x0a\x09self model commitPackage",
messageSends: ["commitPackage", "model"],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommitPackageCommand)})},
args: [],
source: "isActive\x0a\x09^ true\x0a\x09\x22 slf model isPackageDirty\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isPackage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLCommitPackageCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isPackage",
messageSends: ["isPackage"],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(75);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommitPackageCommand.klass)})},
args: [],
source: "key\x0a\x09^ 75",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Commit package";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommitPackageCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Commit package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand.klass);


smalltalk.addClass('HLFindCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(70);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindCommand.klass)})},
args: [],
source: "key\x0a\x09^ 70",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Find'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._openClassNamed_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "execute\x0a\x09self model openClassNamed: self input",
messageSends: ["openClassNamed:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find a class";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Find a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindClassCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindClassCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(77);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Move'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveClassToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveClassToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLMoveClassToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToCommand.klass);


smalltalk.addClass('HLMoveClassCommand', smalltalk.HLMoveClassToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a package";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveClassCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveClassToPackage_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveClassCommand)})},
args: [],
source: "execute\x0a\x09self model moveClassToPackage: self input",
messageSends: ["moveClassToPackage:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availablePackageNames",
messageSends: ["availablePackageNames", "model"],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move class to package:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveClassCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Move class to package:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveClassCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isBehavior();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLMoveClassCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isBehavior",
messageSends: ["isBehavior"],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(80);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassCommand.klass)})},
args: [],
source: "key\x0a\x09^ 80",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to package";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'to package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to package...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveClassCommand.klass)})},
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to package...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(77);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveMethodToClass_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToClass: self input",
messageSends: ["moveMethodToClass:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to class:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to class:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isCompiledMethod",
messageSends: ["isCompiledMethod"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: [],
source: "label\x09\x0a\x09^ 'to class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to class...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a protocol";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveMethodToProtocol_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToProtocol: self input",
messageSends: ["moveMethodToProtocol:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableProtocols",
messageSends: ["availableProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to a protocol:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to a protocol:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isCompiledMethod",
messageSends: ["isCompiledMethod"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(84);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'to protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to protocol...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ 'Move to protocol...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(88);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveCommand.klass)})},
args: [],
source: "key\x0a\x09^ 88",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Remove'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveClassCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._removeClass();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveClassCommand)})},
args: [],
source: "execute\x0a\x09self model removeClass",
messageSends: ["removeClass", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isBehavior();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLRemoveClassCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isBehavior",
messageSends: ["isBehavior"],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveClassCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveClassCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove class";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveClassCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ 'Remove class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "execute\x0a\x09self model removeMethod",
messageSends: ["removeMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLRemoveMethodCommand.klass)})},
args: ["anObject"],
source: "isValidFor: anObject\x0a\x09^ anObject isCompiledMethod",
messageSends: ["isCompiledMethod"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(77);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveMethodCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveMethodCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove method";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveMethodCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ 'Remove method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(84);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Toggle";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassCommentCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showComment_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassCommentCommand)})},
args: [],
source: "execute\x0a\x09self model showComment: true",
messageSends: ["showComment:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(68);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassCommentCommand.klass)})},
args: [],
source: "key\x0a\x09\x22d\x22\x0a    \x0a\x09^ 68",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Documentation";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassCommentCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Documentation'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showInstance_(false);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: false",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(67);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showInstance_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleInstanceSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: true",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(73);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22i\x22\x0a    \x0a\x09^ 73",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Instance side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Instance side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);


