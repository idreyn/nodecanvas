var SERVER = 'nodecanvas.idreyn.c9.io'; 
var PORT = 80;

// Makes an ajax request

function ajax(method,data,callback) {
    data.method = method;
    $.post('/ajax',data,function(d) {
        if(callback) callback(d);
    });
}