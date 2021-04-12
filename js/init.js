const app = {};
app.html = {};
app.html.Body = $('body') ;
app.loadHtml = function(args){
    var element = $('<'+args.element+'></'+args.element+'>').attr({"class":args.body.class,"id":args.body.id});
    if($.type(args.body.html) == 'string'){
        element.text(args.body.html);
    } else if($.type(args.body.html) == "object"){
        element.append(app.loadHtml(args.body.html));
    }else if($.type(args.body.html) == "array"){
        $.map(args.body.html, function(item){
            element.append(app.loadHtml(item));
        })
    }
    return element
};