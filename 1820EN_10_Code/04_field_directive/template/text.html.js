angular.module("1820EN_10_Code/04_field_directive/template/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("1820EN_10_Code/04_field_directive/template/text.html",
    "<div class=\"control-group\" ng-class=\"{'error' : $field.$invalid && $field.$dirty, 'success' : $field.$valid && $field.$dirty}\">" +
    "  <label class=\"control-label\">{{label}}</label>" +
    "  <div class=\"controls\">" +
    "    <input type=\"text\">" +
    "    <span ng-repeat=\"(key, error) in $field.$error\" ng-show=\"error && $field.$dirty\" class=\"help-inline\">{{$validationMessages[key]}}</span>" +
    "  </div>" +
    "</div>");
}]);