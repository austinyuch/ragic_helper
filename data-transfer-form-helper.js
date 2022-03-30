
//確認進貨
function _RAGIC_AUTOGEN_ENTRY_UPDATER_90894(nodeId){
    var result = db.entryUpdater(JSON.stringify(
      {"THIS_PATH":"/ragicpurchasing/20007",
       "UPDATE_PATH":"/ragicpurchasing/20006",
       "THIS_NODE_ID":nodeId,
       "MATCH":{"3001276":"3001351","3001285":"3001336","3001322":"3001358"},
       "THIS_NUMBER_FIELD":"3001356",
       "UPDATE_NUMBER_FIELD":"3001324",
       "UPDATE_ACTION":"ADD",
       "LAST_UPDATE_FIELD":"3001373",
       "RECALCULATE":true
      }
    ), response);
  }//END_RAGIC_AUTOGEN_ENTRY_UPDATER_90894
  
  //復原//確認進貨
  function _RAGIC_AUTOGEN_ENTRY_UPDATER_90894_REVERSE(nodeId){
    var result = db.entryUpdater(JSON.stringify(
      {"THIS_PATH":"/ragicpurchasing/20007",
       "UPDATE_PATH":"/ragicpurchasing/20006",
       "THIS_NODE_ID":nodeId,
       "MATCH":{"3001276":"3001351","3001285":"3001336","3001322":"3001358"},
       "THIS_NUMBER_FIELD":"3001356",
       "UPDATE_NUMBER_FIELD":"3001324",
       "UPDATE_ACTION":"SUBSTRACT",
       "LAST_UPDATE_FIELD":"3001373",
       "RECALCULATE":true,
       "REVERSE":true
      }
    ), response);
  }//END_RAGIC_AUTOGEN_ENTRY_UPDATER_90894
  
  
  
  //轉驗收單
  function _RAGIC_AUTOGEN_CR_27682(nodeId){
    var result = db.entryCopier(JSON.stringify(
      {"THIS_PATH":"/ragicpurchasing/20007",
       "THIS_NODEID":nodeId,
       "NEW_PATH":"/ragicpurchasing/20008",
       "CHECK_MUST_FIELDS":false,
       "COPY":{"3001377":"3001332","3001378":"3001373","3001379":"3001334","3001383":"3001338",
               "3001385":"3001340","3001386":"3001341","3001387":"3001342","3001389":"3001344",
               "3001390":"3001346","3001391":"3001350","3001392":"3001351","3001393":"3001352",
               "3001395":"3001354","3001396":"3001356","3001399":"3001358","3001416":"3001336",
               "3001710":"3001343"}
      }
    ), response);
    if(result) return result;
  }//END_RAGIC_AUTOGEN_CR_27682
  
  //已轉驗收: Yes
  function _RAGIC_AUTOGEN_FIELD_UPDATER_80543(nodeId){
    var result = db.fieldUpdater(JSON.stringify(
  {"THIS_PATH":"/ragicpurchasing/20007",
   "THIS_NODE_ID":nodeId,
   "UPD_FIELDS":{"3001870":"Yes"}}
    ));
  }//END_RAGIC_AUTOGEN_FIELD_UPDATER_80543
  
  
  
  //建立物料應付發票
  function _RAGIC_AUTOGEN_CR_18812(nodeId){
    var result = db.entryCopier(JSON.stringify(
  {"TEMPLATE_NAME":"財會系統（整合進銷存）", 
   "TEMPLATE_SHEET_NAME":"物料應付發票", 
   "THIS_PATH":"/ragicpurchasing/20007",
   "THIS_NODEID":nodeId,
   "NEW_PATH":"/ragicforms8/20006",
   "CHECK_MUST_FIELDS":false,
   "CHECK_VALIDATION_FIELDS":false,
   "CHECK_ALL_MUST_FIELDS_MAPPED":false,
   "SILENT":false,
   "COPY":{"3002033":"3001332","3002036":"3001371",
           "3002038":"3001372","3002039":"3001338",
           "3002041":"3001340","3002047":"3001350",
           "3002048":"3001351","3002049":"3001352",
           "3002050":"3001869","3002051":"3001353",
           "3002053":"3001356","3002054":"3001355",
           "3002057":"3001359","3002058":"3001360",
           "3002059":"3001361","3002060":"3001362",
           "3002061":"3001363","3002112":"3001358",
           "3003206":"3002205"}}
    ), response);
    if(result) return result;
  }//END_RAGIC_AUTOGEN_CR_18812
  
  
  //轉驗收單
  function _RAGIC_AUTOGEN_MERGED_BUTTON_36177(nodeId){
    db.executeMergedActionButtons(JSON.stringify(
  {"THIS_NODE_ID":nodeId,"THIS_PATH":"/ragicpurchasing",
   "THIS_SHEETINDEX":20007,
   "ACTIONS":["_RAGIC_AUTOGEN_CR_27682","_RAGIC_AUTOGEN_FIELD_UPDATER_80543"]}
    ), response);
    response.setDisplayButtonNameAsMessage(true)
  }//END_RAGIC_AUTOGEN_MERGED_BUTTON_36177
  
  