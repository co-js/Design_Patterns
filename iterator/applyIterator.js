/**
 * Created by common on 2017/7/7.
 */
var getUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActionX.FTNUpload');  //IE上传控件
  } catch (e) {
    if (supportFlash()) { //supportFlash函数未提供
      var str = '<object type="application/x-shockware-flash"></object>';
      return $(str).appendTo($('body'));
    } else {
      var str = '<input name="file" type="file"/>'; //表单上传
      return $(str).appendTo($('body'));
    }
  }
};


//迭代器方式实现
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActionX.FTNUpload');  //IE上传控件
  } catch (e) {
    return false;
  }
};

var getFlashUploadObj = function () {
  if (supportFlash()) {  //supportFlash函数未提供
    var str = '<object type="application/x-shockware-flash"></object>';
    return $(str).appendTo($('body'));
  }
  return false;
};

var getFormUploadObj = function () {
  var str = '<input name="file" type="file" class="ui-file">';  //表单上传
  return $(str).appendTo($('body'));
};

var iteratorUploadObj = function () {
  for (var i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn();
    if (uploadObj !== false) {
      return uploadObj;
    }
  }
};

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj);