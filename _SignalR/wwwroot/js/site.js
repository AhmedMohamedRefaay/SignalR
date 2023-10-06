//Server
var signal = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
signal.on("Recieve", function (fromUser, Message) {

    var contect = fromUser + ":" + Message;
    var li = document.createElement("li");
    li.textContent = contect;
    $("#ul").prepend(li);

});
signal.start();

//Client
$("#btnsend").on("click",function ()
{
    var nm = $("#name").val();
    var ms = $("#messg").val();
    signal.invoke("Send" , nm, ms);
})