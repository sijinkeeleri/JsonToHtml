 app.index = {};
 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    var url = "./Datafiles/index.json";
    xobj.open("GET", url, true)
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(JSON.parse(xobj.responseText));
          }
    };
   ;
    xobj.send(); 
 }
 $(document).ready(function(){
    function init() {
        loadJSON(function(response) {
            app.html.Body.append(app.loadHtml(response));
            app.index.loadSelect();
        });
       }
    init();
   
});
var optionArr = [
    {"name":"sijin"},
    {"name":"ameera"},
    {"name":"antony"}
]
app.index.loadSelect = function(){
    app.loadSelect(optionArr,'name','selectdata');
}


   