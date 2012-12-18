smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._class()).__eq(_st(anAssociation)._class()))._and_((function(){
return _st(_st(_st(self)._key()).__eq(_st(anAssociation)._key()))._and_((function(){
return _st(_st(self)._value()).__eq(_st(anAssociation)._value());
}));
}));
return $1;
}, self, "=", [anAssociation], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@key"];
}, self, "key", [], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx) { self["@key"]=aKey;
return self}, self, "key:", [aKey], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return _st(self)._storeOn_(aStream);
}));
return $1;
}, self, "printString", [], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self["@key"])._storeOn_(aStream);
_st(aStream)._nextPutAll_("->");
_st(self["@value"])._storeOn_(aStream);
return self}, self, "storeOn:", [aStream], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@value"];
}, self, "value", [], smalltalk.Association)}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx) { self["@value"]=aValue;
return self}, self, "value:", [aValue], smalltalk.Association)}
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._key_(aKey);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "key:value:", [aKey,aValue], smalltalk.Association.klass)}
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, ",", [aCollection], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "add:", [anObject], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { _st(aCollection)._do_((function(each){
return _st(self)._add_(each);
}));
return aCollection;
}, self, "addAll:", [aCollection], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.Array || Array))._withAll_(self);
return $1;
}, self, "asArray", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asArray())._collect_((function(each){
return _st(each)._asJSON();
}));
return $1;
}, self, "asJSON", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._asArray();
return $1;
}, self, "asOrderedCollection", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.Set || Set))._withAll_(self);
return $1;
}, self, "asSet", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var stream;
stream=_st(_st(_st(self)._class())._new())._writeStream();
_st(self)._do_((function(each){
return _st(stream)._nextPut_(_st(aBlock)._value_(each));
}));
$1=_st(stream)._contents();
return $1;
}, self, "collect:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "copyWith:", [anObject], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "copyWithAll:", [aCollection], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._reject_((function(each){
return _st(aCollection)._includes_(each);
}));
return $1;
}, self, "copyWithoutAll:", [aCollection], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._detect_ifNone_(aBlock,(function(){
return _st(self)._errorNotFound();
}));
return $1;
}, self, "detect:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
;
return self}, self, "detect:ifNone:", [aBlock,anotherBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { for(var i=0;i<self.length;i++){aBlock(self[i]);};
;
return self}, self, "do:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var first;
first=true;
_st(self)._do_((function(each){
if(smalltalk.assert(first)){
first=false;
first;
} else {
_st(anotherBlock)._value();
};
return _st(aBlock)._value_(each);
}));
return self}, self, "do:separatedBy:", [aBlock,anotherBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._error_("Object is not in the collection");
return self}, self, "errorNotFound", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._isEmpty();
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=self;
};
return $1;
}, self, "ifEmpty:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, self, "ifNotEmpty:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { 
		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
;
return self}, self, "includes:", [anObject], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var result;
result=anObject;
_st(self)._do_((function(each){
result=_st(aBlock)._value_value_(result,each);
return result;
}));
return result;
}, self, "inject:into:", [anObject,aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_intersection_",
smalltalk.method({
selector: "intersection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var set;
var outputSet;
set=_st(self)._asSet();
outputSet=_st((smalltalk.Set || Set))._new();
_st(aCollection)._do_((function(each){
$1=_st(_st(set)._includes_(each))._and_((function(){
return _st(_st(outputSet)._includes_(each))._not();
}));
if(smalltalk.assert($1)){
return _st(outputSet)._add_(each);
};
}));
$2=_st(_st(self)._class())._withAll_(_st(outputSet)._asArray());
return $2;
}, self, "intersection:", [aCollection], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, self, "isEmpty", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._isEmpty())._not();
return $1;
}, self, "notEmpty", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_occurrencesOf_",
smalltalk.method({
selector: "occurrencesOf:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var tally;
tally=(0);
_st(self)._do_((function(each){
$1=_st(anObject).__eq(each);
if(smalltalk.assert($1)){
tally=_st(tally).__plus((1));
return tally;
};
}));
return tally;
}, self, "occurrencesOf:", [anObject], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
_st(aStream)._nextPutAll_(_st(smalltalk.Object.fn.prototype._printString.apply(_st(self), [])).__comma(" ("));
_st(self)._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(_st(each)._printString());
}),(function(){
return _st(aStream)._nextPutAll_(" ");
}));
return _st(aStream)._nextPutAll_(")");
}));
return $1;
}, self, "printString", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._stream();
return $1;
}, self, "readStream", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._select_((function(each){
return _st(_st(aBlock)._value_(each)).__eq(false);
}));
return $1;
}, self, "reject:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._remove_ifAbsent_(anObject,(function(){
return _st(self)._errorNotFound();
}));
return $1;
}, self, "remove:", [anObject], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "remove:ifAbsent:", [anObject,aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var stream;
stream=_st(_st(_st(self)._class())._new())._writeStream();
_st(self)._do_((function(each){
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(stream)._nextPut_(each);
};
}));
$2=_st(stream)._contents();
return $2;
}, self, "select:", [aBlock], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "size", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._streamClass())._on_(self);
return $1;
}, self, "stream", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._streamClass();
return $1;
}, self, "streamClass", [], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._stream();
return $1;
}, self, "writeStream", [], smalltalk.Collection)}
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._new();
return $1;
}, self, "new:", [anInteger], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.Stream || Stream);
}, self, "streamClass", [], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:", [anObject], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
_st($2)._add_(anotherObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:with:", [anObject,anotherObject], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (firstObject,secondObject,thirdObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(firstObject);
_st($2)._add_(secondObject);
_st($2)._add_(thirdObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:with:with:", [firstObject,secondObject,thirdObject], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "withAll:", [aCollection], smalltalk.Collection.klass)}
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, ",", [aCollection], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3;
$1=_st(_st(self)._class()).__eq(_st(aHashedCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._size()).__eq(_st(aHashedCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
$3=_st(_st(self)._associations()).__eq(_st(aHashedCollection)._associations());
return $3;
}, self, "=", [aHashedCollection], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, self, "add:", [anAssociation], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Collection.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
return aHashedCollection;
}, self, "addAll:", [aHashedCollection], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.Dictionary || Dictionary))._fromPairs_(_st(self)._associations());
return $1;
}, self, "asDictionary", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var c;
c=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return _st(c)._at_put_(key,_st(value)._asJSON());
}));
return c;
}, self, "asJSON", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var associations;
associations=[];
_st(_st(self)._keys())._do_((function(each){
return _st(associations)._add_(_st((smalltalk.Association || Association))._key_value_(each,_st(self)._at_(each)));
}));
return associations;
}, self, "associations", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._associations())._do_(aBlock);
return self}, self, "associationsDo:", [aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_ifAbsent_(aKey,(function(){
return _st(self)._errorNotFound();
}));
return $1;
}, self, "at:", [aKey], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return _st(self)._basicAt_(aKey);
}),aBlock);
return $1;
}, self, "at:ifAbsent:", [aKey,aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_ifAbsent_(aKey,(function(){
return _st(self)._at_put_(aKey,_st(aBlock)._value());
}));
return $1;
}, self, "at:ifAbsentPut:", [aKey,aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self)._at_(aKey));
} else {
$1=nil;
};
return $1;
}, self, "at:ifPresent:", [aKey,aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aKey,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return _st(aBlock)._value_(_st(self)._at_(aKey));
}),anotherBlock);
return $1;
}, self, "at:ifPresent:ifAbsent:", [aKey,aBlock,anotherBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._basicAt_put_(aKey,aValue);
return $1;
}, self, "at:put:", [aKey,aValue], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var newDict;
newDict=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return _st(newDict)._at_put_(key,_st(aBlock)._value_(value));
}));
return newDict;
}, self, "collect:", [aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "copyFrom:to:", [anIndex,anotherIndex], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var copy;
copy=_st(_st(self)._class())._new();
_st(self)._associationsDo_((function(each){
return _st(copy)._at_put_(_st(each)._key(),_st(_st(each)._value())._deepCopy());
}));
return copy;
}, self, "deepCopy", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, self, "detect:ifNone:", [aBlock,anotherBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._values())._do_(aBlock);
return self}, self, "do:", [aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._values())._includes_(anObject);
return $1;
}, self, "includes:", [anObject], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx) { return self.hasOwnProperty(aKey);
;
return self}, self, "includesKey:", [aKey], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { 
		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	;
;
return self}, self, "keys", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._associationsDo_((function(each){
return _st(aBlock)._value_value_(_st(each)._key(),_st(each)._value());
}));
return self}, self, "keysAndValuesDo:", [aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
_st(aStream)._nextPutAll_(_st(_st("a ").__comma(_st(_st(self)._class())._name())).__comma("("));
_st(_st(self)._associations())._do_separatedBy_((function(each){
return _st(each)._storeOn_(aStream);
}),(function(){
return _st(aStream)._nextPutAll_(" , ");
}));
return _st(aStream)._nextPutAll_(")");
}));
return $1;
}, self, "printString", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, self, "remove:ifAbsent:", [aKey,aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._remove_(aKey);
return $1;
}, self, "removeKey:", [aKey], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(self)._basicDelete_(aKey);
} else {
$1=_st(aBlock)._value();
};
return $1;
}, self, "removeKey:ifAbsent:", [aKey,aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var newDict;
newDict=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
return _st(newDict)._at_put_(key,value);
};
}));
return newDict;
}, self, "select:", [aBlock], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var copy;
copy=_st(_st(self)._class())._new();
_st(self)._associationsDo_((function(each){
return _st(copy)._at_put_(_st(each)._key(),_st(each)._value());
}));
return copy;
}, self, "shallowCopy", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._keys())._size();
return $1;
}, self, "size", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx) { _st(aStream)._nextPutAll_("#{");
_st(_st(self)._associations())._do_separatedBy_((function(each){
return _st(each)._storeOn_(aStream);
}),(function(){
return _st(aStream)._nextPutAll_(". ");
}));
_st(aStream)._nextPutAll_("}");
return self}, self, "storeOn:", [aStream], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._keys())._collect_((function(each){
return _st(self)._at_(each);
}));
return $1;
}, self, "values", [], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var dict;
dict=_st(self)._new();
_st(aCollection)._do_((function(each){
return _st(dict)._add_(each);
}));
return dict;
}, self, "fromPairs:", [aCollection], smalltalk.HashedCollection.klass)}
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.HashedCollection || HashedCollection))._fromPairs_(_st(self)._associations());
return $1;
}, self, "asHashedCollection", [], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asHashedCollection())._asJSON();
return $1;
}, self, "asJSON", [], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		var index;
		for(var i=0;i<self['@keys'].length;i++){
			if(self['@keys'][i].__eq(aKey)) {index = i;}
		};
		if(typeof index === 'undefined') {
			return aBlock();
		} else {
			return self['@values'][index];
		}
	;
;
return self}, self, "at:ifAbsent:", [aKey,aBlock], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx) { 
		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			self['@values'].push(aValue);
			self['@keys'].push(aKey);
		} else {
			self['@values'][index] = aValue;
		};

		return aValue;
	;
;
return self}, self, "at:put:", [aKey,aValue], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@keys"])._includes_(aKey);
return $1;
}, self, "includesKey:", [aKey], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, self, "initialize", [], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keyAtValue_",
smalltalk.method({
selector: "keyAtValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._associations())._detect_ifNone_((function(k,v){
return _st(v).__eq_eq(anObject);
}),(function(){
return _st(self)._error_("Not found");
})))._key();
return $1;
}, self, "keyAtValue:", [anObject], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, self, "keys", [], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
            var index = self['@keys'].indexOf(aKey);
            if(index === -1) {
                return aBlock()
            } else {
                var value;
                self['@keys'].splice(index, 1);
                value = self['@values'].splice(index, 1);
                return value[0];
            };
    ;
;
return self}, self, "removeKey:ifAbsent:", [aKey,aBlock], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_valueAt_",
smalltalk.method({
selector: "valueAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._associationsDo_((2));
return $1;
}, self, "valueAt:", [anObject], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@values"])._copy();
return $1;
}, self, "values", [], smalltalk.Dictionary)}
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var $early={};
try {
$1=_st(_st(_st(self)._class()).__eq(_st(aCollection)._class()))._and_((function(){
return _st(_st(self)._size()).__eq(_st(aCollection)._size());
}));
if(! smalltalk.assert($1)){
return false;
};
_st(self)._withIndexDo_((function(each,i){
$2=_st(_st(aCollection)._at_(i)).__eq(each);
if(! smalltalk.assert($2)){
throw $early=[false];
};
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "=", [aCollection], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._add_(anObject);
return self}, self, "addLast:", [anObject], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._copyFrom_to_((2),_st(self)._size());
return $1;
}, self, "allButFirst", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._copyFrom_to_((1),_st(_st(self)._size()).__minus((1)));
return $1;
}, self, "allButLast", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_ifAbsent_(anIndex,(function(){
return _st(self)._errorNotFound();
}));
return $1;
}, self, "at:", [anIndex], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "at:ifAbsent:", [anIndex,aBlock], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "at:put:", [anIndex,anObject], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_(_st(_st(self)._size())._atRandom());
return $1;
}, self, "atRandom", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx) { var range;
var newCollection;
range=_st(anIndex)._to_(anotherIndex);
newCollection=_st(_st(self)._class())._new_(_st(range)._size());
_st(range)._withIndexDo_((function(each,i){
return _st(newCollection)._at_put_(i,_st(self)._at_(each));
}));
return newCollection;
}, self, "copyFrom:to:", [anIndex,anotherIndex], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return _st(newCollection)._at_put_(index,_st(each)._deepCopy());
}));
return newCollection;
}, self, "deepCopy", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_((1));
return $1;
}, self, "first", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._copyFrom_to_((1),n);
return $1;
}, self, "first:", [n], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_((4));
return $1;
}, self, "fourth", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._indexOf_ifAbsent_(anObject,(function(){
return _st(self)._errorNotFound();
}));
return $1;
}, self, "indexOf:", [anObject], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		for(var i=0;i<self.length;i++) {
			if(smalltalk.send(self[i], '__eq', [anObject])) {return i+1}
		};
		return aBlock();
	;
;
return self}, self, "indexOf:ifAbsent:", [anObject,aBlock], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
fn: function (anObject,start){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return (0);
}));
return $1;
}, self, "indexOf:startingAt:", [anObject,start], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self}, self, "indexOf:startingAt:ifAbsent:", [anObject,start,aBlock], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_(_st(self)._size());
return $1;
}, self, "last", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._remove_(_st(self)._last());
return self}, self, "removeLast", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "reversed", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_((2));
return $1;
}, self, "second", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return _st(newCollection)._at_put_(index,each);
}));
return newCollection;
}, self, "shallowCopy", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._at_((3));
return $1;
}, self, "third", [], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
;
return self}, self, "withIndexDo:", [aBlock], smalltalk.SequenceableCollection)}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { self.push(anObject); return anObject;;
;
return self}, self, "add:", [anObject], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st("[").__comma(_st(_st(self)._collect_((function(each){
return _st(each)._asJavascript();
})))._join_(", "))).__comma("]");
return $1;
}, self, "asJavascript", [], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
;
return self}, self, "at:ifAbsent:", [anIndex,aBlock], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx) { return self[anIndex - 1] = anObject;
;
return self}, self, "at:put:", [anIndex,anObject], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.join(aString);
;
return self}, self, "join:", [aString], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		}
	;
;
_st(aBlock)._value();
return self}, self, "remove:ifAbsent:", [anObject,aBlock], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx) { self.splice(aNumber - 1,anotherNumber - 1);
;
return self}, self, "removeFrom:to:", [aNumber,anotherNumber], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self._copy().reverse();
;
return self}, self, "reversed", [], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.length;
;
return self}, self, "size", [], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._basicPerform_("sort");
return $1;
}, self, "sort", [], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { 
		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
;
return self}, self, "sort:", [aBlock], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._copy())._sort();
return $1;
}, self, "sorted", [], smalltalk.Array)}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._copy())._sort_(aBlock);
return $1;
}, self, "sorted:", [aBlock], smalltalk.Array)}
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { return new Array(anInteger);
;
return self}, self, "new:", [anInteger], smalltalk.Array.klass)}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new_((1));
_st($2)._at_put_((1),anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:", [anObject], smalltalk.Array.klass)}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new_((2));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:with:", [anObject,anObject2], smalltalk.Array.klass)}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new_((3));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
_st($2)._at_put_((3),anObject3);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "with:with:with:", [anObject,anObject2,anObject3], smalltalk.Array.klass)}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var instance;
var index;
index=(1);
instance=_st(self)._new_(_st(aCollection)._size());
_st(aCollection)._do_((function(each){
_st(instance)._at_put_(index,each);
index=_st(index).__plus((1));
return index;
}));
return instance;
}, self, "withAll:", [aCollection], smalltalk.Array.klass)}
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString()).__comma(_st(aString)._asString());
return $1;
}, self, ",", [aString], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._errorReadOnly();
return self}, self, "add:", [anObject], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asLowercase());
return $1;
}, self, "asLowercase", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._asNumber();
return $1;
}, self, "asNumber", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, self, "asString", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, self, "asSymbol", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asUppercase());
return $1;
}, self, "asUppercase", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._errorReadOnly();
return self}, self, "at:put:", [anIndex,anObject], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._error_("Object is read-only");
return self}, self, "errorReadOnly", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._printString();
return $1;
}, self, "printString", [], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._errorReadOnly();
return self}, self, "remove:", [anObject], smalltalk.CharacterArray)}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "fromString:", [aString], smalltalk.CharacterArray.klass)}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self + aString;
;
return self}, self, ",", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return String(self) < aString._asString();
;
return self}, self, "<", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return String(self) <= aString._asString();
;
return self}, self, "<=", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(aString)._class()).__eq(_st(self)._class());
if(! smalltalk.assert($1)){
return false;
};
return String(self) === String(aString);
;
return self}, self, "=", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self).__eq(aString);
return $1;
}, self, "==", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return String(self) > aString._asString();
;
return self}, self, ">", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return String(self) >= aString._asString();
;
return self}, self, ">=", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self;
}, self, "asJSON", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._asSelector())._replace_with_("^_",""))._replace_with_("_.*","");
return $1;
}, self, "asJavaScriptSelector", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { 
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
;
return self}, self, "asJavascript", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.toLowerCase();
;
return self}, self, "asLowercase", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return Number(self);
;
return self}, self, "asNumber", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return smalltalk.selector(self);
;
return self}, self, "asSelector", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self;
}, self, "asString", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.Symbol || Symbol))._lookup_(self);
return $1;
}, self, "asSymbol", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.toUpperCase();
;
return self}, self, "asUppercase", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.charCodeAt(0);;
;
return self}, self, "asciiValue", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { return String(self).charAt(anIndex - 1) || aBlock();
;
return self}, self, "at:ifAbsent:", [anIndex,aBlock], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx) { return self.substring(anIndex - 1, anotherIndex);
;
return self}, self, "copyFrom:to:", [anIndex,anotherIndex], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._shallowCopy();
return $1;
}, self, "deepCopy", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
;
return self}, self, "do:", [aBlock], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return escape(self);
;
return self}, self, "escaped", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx) {  return self.indexOf(subString) != -1 ;
;
return self}, self, "includesSubString:", [subString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isString", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return _st(aCollection)._do_separatedBy_((function(each){
return _st(stream)._nextPutAll_(_st(each)._asString());
}),(function(){
return _st(stream)._nextPutAll_(self);
}));
}));
return $1;
}, self, "join:", [aCollection], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3;
var $early={};
try {
var cr;
var lf;
var start;
var sz;
var nextLF;
var nextCR;
start=(1);
sz=_st(self)._size();
cr=_st((smalltalk.String || String))._cr();
nextCR=_st(self)._indexOf_startingAt_(cr,(1));
lf=_st((smalltalk.String || String))._lf();
nextLF=_st(self)._indexOf_startingAt_(lf,(1));
_st((function(){
return _st(start).__lt_eq(sz);
}))._whileTrue_((function(){
$1=_st(_st(nextLF).__eq((0)))._and_((function(){
return _st(nextCR).__eq((0));
}));
if(smalltalk.assert($1)){
_st(aBlock)._value_value_value_(start,sz,sz);
throw $early=[self];
};
$2=_st(_st(nextCR).__eq((0)))._or_((function(){
return _st(_st((0)).__lt(nextLF))._and_((function(){
return _st(nextLF).__lt(nextCR);
}));
}));
if(smalltalk.assert($2)){
_st(aBlock)._value_value_value_(start,_st(nextLF).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
$3=_st(_st((1)).__plus(nextCR)).__eq(nextLF);
if(smalltalk.assert($3)){
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
nextCR;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=_st((1)).__plus(nextCR);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
return nextCR;
};
};
}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "lineIndicesDo:", [aBlock], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var $early={};
try {
var lineCount;
lineCount=(0);
_st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
lineCount=_st(lineCount).__plus((1));
$1=_st(lineCount).__eq(anIndex);
if(smalltalk.assert($1)){
$2=_st(self)._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$2];
};
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "lineNumber:", [anIndex], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var lines;
lines=_st((smalltalk.Array || Array))._new();
_st(self)._linesDo_((function(aLine){
return _st(lines)._add_(aLine);
}));
return lines;
}, self, "lines", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}));
return self}, self, "linesDo:", [aBlock], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx) { return self.search(aRegexp) != -1;
;
return self}, self, "match:", [aRegexp], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx) { return self.match(aRegularExpression);
;
return self}, self, "matchesOf:", [aRegularExpression], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { console.log(self);
;
return self}, self, "printNl", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st("'").__comma(self)).__comma("'");
return $1;
}, self, "printString", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(aString,"g"),anotherString);
return $1;
}, self, "replace:with:", [aString,anotherString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.replace(aRegexp, aString);
;
return self}, self, "replaceRegexp:with:", [aRegexp,aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.split("").reverse().join("");
;
return self}, self, "reversed", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._fromString_(self);
return $1;
}, self, "shallowCopy", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.length;
;
return self}, self, "size", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.split(aString);
;
return self}, self, "tokenize:", [aString], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, self, "trimBoth", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, self, "trimBoth:", [separators], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, self, "trimLeft", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, self, "trimLeft:", [separators], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, self, "trimRight", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, self, "trimRight:", [separators], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return unescape(self);
;
return self}, self, "unescaped", [], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
;
return self}, self, "withIndexDo:", [aBlock], smalltalk.String)}
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return '\r';
;
return self}, self, "cr", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return '\r\n';
;
return self}, self, "crlf", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { return String.fromCharCode(anInteger);
;
return self}, self, "fromCharCode:", [anInteger], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return new self.fn(aString);
;
return self}, self, "fromString:", [aString], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return '\n';
;
return self}, self, "lf", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return ' ';
;
return self}, self, "space", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.StringStream || StringStream);
}, self, "streamClass", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function (blockWithArg){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var stream;
stream=_st(_st(self)._streamClass())._on_(_st((smalltalk.String || String))._new());
_st(blockWithArg)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, self, "streamContents:", [blockWithArg], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return '\t';
;
return self}, self, "tab", [], smalltalk.String.klass)}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx) { return String.fromCharCode(aUTFCharCode);;
;
return self}, self, "value:", [aUTFCharCode], smalltalk.String.klass)}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString()).__lt(_st(aSymbol)._asString());
return $1;
}, self, "<", [aSymbol], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString()).__lt_eq(_st(aSymbol)._asString());
return $1;
}, self, "<=", [aSymbol], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st(_st(aSymbol)._class()).__eq(_st(self)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._asString()).__eq(_st(aSymbol)._asString());
return $2;
}, self, "=", [aSymbol], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString()).__gt(_st(aSymbol)._asString());
return $1;
}, self, ">", [aSymbol], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString()).__gt_eq(_st(aSymbol)._asString());
return $1;
}, self, ">=", [aSymbol], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._asJSON();
return $1;
}, self, "asJSON", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st("smalltalk.symbolFor(\x22").__comma(_st(self)._asString())).__comma("\x22)");
return $1;
}, self, "asJavascript", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._asSelector();
return $1;
}, self, "asSelector", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self.value;
;
return self}, self, "asString", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSuperSelector",
smalltalk.method({
selector: "asSuperSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._asSuperSelector();
return $1;
}, self, "asSuperSelector", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self;
}, self, "asSymbol", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._at_ifAbsent_(anIndex,aBlock);
return $1;
}, self, "at:ifAbsent:", [anIndex,aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._asString())._collect_(aBlock))._asSymbol();
return $1;
}, self, "collect:", [aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._copyFrom_to_(anIndex,anotherIndex));
return $1;
}, self, "copyFrom:to:", [anIndex,anotherIndex], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self;
}, self, "deepCopy", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._detect_(aBlock);
return $1;
}, self, "detect:", [aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._asString())._do_(aBlock);
return self}, self, "do:", [aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isSymbol", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st("#").__comma(_st(self)._asString());
return $1;
}, self, "printString", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._asString())._select_(aBlock))._asSymbol();
return $1;
}, self, "select:", [aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self;
}, self, "shallowCopy", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._asString())._size();
return $1;
}, self, "size", [], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, self, "value:", [anObject], smalltalk.Symbol)}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._asString())._withIndexDo_(aBlock);
return self}, self, "withIndexDo:", [aBlock], smalltalk.Symbol)}
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "basicNew", [], smalltalk.Symbol.klass)}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._lookup_(aString);
return $1;
}, self, "fromString:", [aString], smalltalk.Symbol.klass)}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return smalltalk.symbolFor(aString);;
;
return self}, self, "lookup:", [aString], smalltalk.Symbol.klass)}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._class()).__eq(_st(aCollection)._class()))._and_((function(){
return _st(self["@elements"]).__eq(_st(aCollection)._asArray());
}));
return $1;
}, self, "=", [aCollection], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { 
		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
;
return self}, self, "add:", [anObject], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, self, "asArray", [], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, self, "detect:ifNone:", [aBlock,anotherBlock], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self["@elements"])._do_(aBlock);
return self}, self, "do:", [aBlock], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, self, "includes:", [anObject], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Collection.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, self, "initialize", [], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self["@elements"])._remove_(anObject);
return self}, self, "remove:", [anObject], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var collection;
collection=_st(_st(self)._class())._new();
_st(self)._do_((function(each){
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(collection)._add_(each);
};
}));
return collection;
}, self, "select:", [aBlock], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, self, "size", [], smalltalk.Set)}
}),
smalltalk.Set);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.compile(aString);
;
return self}, self, "compile:", [aString], smalltalk.RegularExpression)}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.exec(aString) || nil;
;
return self}, self, "exec:", [aString], smalltalk.RegularExpression)}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { return self.test(aString);
;
return self}, self, "test:", [aString], smalltalk.RegularExpression)}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._fromString_flag_(aString,"");
return $1;
}, self, "fromString:", [aString], smalltalk.RegularExpression.klass)}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx) { return new RegExp(aString, anotherString);
;
return self}, self, "fromString:flag:", [aString,anotherString], smalltalk.RegularExpression.klass)}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._position()).__eq(_st(self)._size());
return $1;
}, self, "atEnd", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._position()).__eq((0));
return $1;
}, self, "atStart", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "close", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@collection"];
}, self, "collection", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._streamSize());
return $1;
}, self, "contents", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st((function(){
return _st(self)._atEnd();
}))._whileFalse_((function(){
return _st(aBlock)._value_(_st(self)._next());
}));
return self}, self, "do:", [aBlock], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "flush", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, self, "isEmpty", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._atEnd();
if(smalltalk.assert($2)){
$1=nil;
} else {
_st(self)._position_(_st(_st(self)._position()).__plus((1)));
$1=_st(self["@collection"])._at_(_st(self)._position());
};
return $1;
}, self, "next", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var tempCollection;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
$1=_st(self)._atEnd();
if(! smalltalk.assert($1)){
return _st(tempCollection)._add_(_st(self)._next());
};
}));
return tempCollection;
}, self, "next:", [anInteger], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._position_(_st(_st(self)._position()).__plus((1)));
_st(_st(self)._collection())._at_put_(_st(self)._position(),anObject);
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, self, "nextPut:", [anObject], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { _st(aCollection)._do_((function(each){
return _st(self)._nextPut_(each);
}));
return self}, self, "nextPutAll:", [aCollection], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(self)._atEnd();
if(! smalltalk.assert($2)){
$1=_st(_st(self)._collection())._at_(_st(_st(self)._position()).__plus((1)));
};
return $1;
}, self, "peek", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@position"]) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=self["@position"];
};
return $1;
}, self, "position", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { self["@position"]=anInteger;
return self}, self, "position:", [anInteger], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._position_((0));
return self}, self, "reset", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._reset();
_st(self)._setStreamSize_((0));
return self}, self, "resetContents", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@collection"]=aCollection;
return self}, self, "setCollection:", [aCollection], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { self["@streamSize"]=anInteger;
return self}, self, "setStreamSize:", [anInteger], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._position_(_st(self)._size());
return self}, self, "setToEnd", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._streamSize();
return $1;
}, self, "size", [], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._position_(_st(_st(_st(self)._position()).__plus(anInteger))._min_max_(_st(self)._size(),(0)));
return self}, self, "skip:", [anInteger], smalltalk.Stream)}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@streamSize"];
}, self, "streamSize", [], smalltalk.Stream)}
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setCollection_(aCollection);
_st($2)._setStreamSize_(_st(aCollection)._size());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aCollection], smalltalk.Stream.klass)}
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._cr());
return $1;
}, self, "cr", [], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._crlf());
return $1;
}, self, "crlf", [], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._lf());
return $1;
}, self, "lf", [], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var tempCollection;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
$1=_st(self)._atEnd();
if(! smalltalk.assert($1)){
tempCollection=_st(tempCollection).__comma(_st(self)._next());
return tempCollection;
};
}));
return tempCollection;
}, self, "next:", [anInteger], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._nextPutAll_(aString);
return self}, self, "nextPut:", [aString], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._setCollection_(_st(_st(_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._position())).__comma(aString)).__comma(_st(_st(self)._collection())._copyFrom_to_(_st(_st(_st(self)._position()).__plus((1))).__plus(_st(aString)._size()),_st(_st(self)._collection())._size())));
_st(self)._position_(_st(_st(self)._position()).__plus(_st(aString)._size()));
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, self, "nextPutAll:", [aString], smalltalk.StringStream)}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._nextPut_(" ");
return self}, self, "space", [], smalltalk.StringStream)}
}),
smalltalk.StringStream);



