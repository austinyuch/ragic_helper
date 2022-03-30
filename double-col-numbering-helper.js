
var STR_PATH_TO_FORM = "";
var colIdKey = ;
/*
var thisRecordId = param.getNewNodeId(colIdKey);

function getThisNewRecordId() {
  var thisRecordId = param.getNewNodeId(colIdKey);
  response.setStatus('WARN');
  response.setMessage(thisRecordId);
  return thisRecordId;
};
*/

// 要更新的column id 紀錄編號
var colIdSerial = ;//
// 流水號參照的第一組 column id : 專案編號
var colId1 = ; 
// 流水號參照的第二組column id : 日期
var colId2 = ;

// 流水號長度,不足補0
var intSrNoLen = 2 ;
//流水號格式
//const strColIdSerialFmt = "strColId1-strColId2-00";
//const strDateFmt = "yyyyMMdd";

// 取得本col的strColId1,strColId2 數值
col2isDate = true;
// 找到符合相同的 strColId1  strColId2的 colIdSerial的結果
function searchSerialCol(_str_path_to_form,_colIdSerial,_strKeyword) {
    var _query = db.getAPIQuery(_str_path_to_form); 
    _query.addFilter(_colIdSerial, 'like', _strKeyword);
    var arrRest = _query.getAPIResultList();
    //response.setStatus('WARN'); 
    
    //response.setMessage(arrRest);
    return arrRest
  }
  
  //得到最後的流水號
  // test: arr = ["key-096","key-097","key-010"]
  // test result: 97
  // _arr: result of searchSerialCol (db.getAPIQuery.getAPIQuery.getAPIResultList)
  function getLastSerialInt(_colIdSerial, _arr, _strKeyword) {
    if ( _arr.length > 0) {
      // get init _numLargest
      var firstItem = _arr[0].getFieldValue(_colIdSerial);
      var _strNumLargest = firstItem.replace(_strKeyword,"");
      var strNumLargest = _strNumLargest.replace("-","");
        var _numLargest = 0;
      try {
          _numLargest = Number(strNumLargest);  	      
      } catch(e) {
        _numLargest = 0;      
      };
      
      //response.setStatus('WARN');
      //var str_msg = 'numLargest:' + _numLargest ;
      //response.setMessage(str_msg);
     
        try {
      for (var i = 0; i < _arr.length; i++) {
        try {
            var _strNumThis = _arr[i].getFieldValue(_colIdSerial).replace(_strKeyword,"");
            var strNumThis = _strNumThis.replace("-","");
            var numThis = Number(strNumThis);
            if (_numLargest < numThis ) {
                _numLargest = numThis;
            };
          } catch(e) {
            response.setStatus('WARN');
            response.setMessage(e);
          }
      };
      response.setStatus('WARN');
       var str_msg2 = "搜尋結果最大流水號:" + _numLargest;
      response.setMessage(str_msg2);
        return _numLargest;
        
      } catch(e) {
        response.setStatus('WARN');
        response.setMessage(e);
        return 0;
      } 	
     } else {
       return 0;
     }
    
  }
  
  
  /*
  function getNumCurrentLgt(_str_path_to_form,_colIdSerial,_strKeyword) 
  
    var _arrResults = searchSerialCol(_str_path_to_form,_colIdSerial,_strKeyword);
    var arrLen = _arrResults.length;
    var str_msg = "arrLen:"+String(arrLen);
    response.setStatus('WARN');
    response.setMessage(str_msg);
    var numCurrentLgt = getLastSerialInt(_colIdSerial,_arrResults,_strKeyword);
    response.setStatus('WARN');
    response.setMessage(numCurrentLgt);
    return numCurrentLgt;
  }
  */
  
  // 自动补零：value数值，len长度
  function getPrefixInteger(value, len) {
    // 当值大于长度限制值时，返回原值
    if (value > Number(Array(3).join(9) + 9)) {
      return value
    }  else {
      return (Array(len).join(0) + value).slice(-len);
    }
  }
  
  
  
  
  
  
  
  
//var dateformat = "yyyy/MM/dd";

function date2str(x, removeString) {
  var retVal = String(x).replace(removeString,"").replace(removeString,"");
  return retVal;
//function date2str(x, y) {
/*
  var offset = Account.getInstance(db.getApname()).getTimeZoneOffsetInHours();
  x.setUTCHours(x.getUTCHours() + offset);
   
  var z = {
    M: x.getUTCMonth() + 1,
    d: x.getUTCDate(),
    h: x.getUTCHours(),
    m: x.getUTCMinutes(),
    s: x.getUTCSeconds()
  };
  
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
    return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
  });

  return y.replace(/(y+)/g, function(v) {
    return x.getUTCFullYear().toString().slice(-v.length)
  });
  */
  
}



function getSearchKeyword(_str_path_to_form,_thisRecordId,_colId1,_colId2,_col2isDate) {
  	//var _str_path_to_form = _str_path_to_form;
  	//var _colId1 = colId1;
    //var _colId2 = colId2;
  	var query = db.getAPIQuery(_str_path_to_form);    
	var entry = query.getAPIEntry(_thisRecordId);
  	var val1 = entry.getFieldValue(_colId1);
  	var val2 = entry.getFieldValue(_colId2);
  	
    var strval1 = String(val1);
   var strval2 = String(val2);
   if (_col2isDate  === true) {	
  	  strval2 = date2str(val2,"/");
    }; 
  
    //var strval2 = String(val2).replace("/","").replace("/","");
  
  	var strKeyword = strval1 + '-' + strval2;
    response.setStatus('WARN');  	
  	var str_msg = "search keyword:" + strKeyword;
	response.setMessage(str_msg);
  
  	return strKeyword;
}

function getThisSerialColVal(_thisRecordId) {
  var strKeyword = getSearchKeyword(STR_PATH_TO_FORM,_thisRecordId,colId1,colId2,col2isDate);
  //get current table numCurrentLgt 
  var arrResults = searchSerialCol(STR_PATH_TO_FORM,colIdSerial,strKeyword);
  var arrLen = arrResults.length;
  var str_msg = "arrLen:"+String(arrLen);
  response.setStatus('WARN');
  response.setMessage(str_msg);
  var numCurrentLgt = getLastSerialInt(colIdSerial,arrResults,strKeyword);
  response.setStatus('WARN');
  response.setMessage(numCurrentLgt);
  // get "to-be" col val, e.g. xx-2023032-002
  var serialColVal = getSerialColVal(strKeyword,numCurrentLgt,intSrNoLen);
  return serialColVal;
}

//更新序號
function updateSerialColNo(_thisRecordId) {  
  var serialColVal = getThisSerialColVal(_thisRecordId);
  var query = db.getAPIQuery(STR_PATH_TO_FORM);
  var entry = query.getAPIEntry(_thisRecordId);
  entry.setFieldValue(colIdSerial,serialColVal);
   entry.save();
  response.setStatus('WARN');
  var str_msg = "RagicId:" + _thisRecordId +";Serial No Col. value:"+serialColVal+"...updated!";
  response.setMessage(str_msg);
}

