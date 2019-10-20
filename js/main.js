$(document).ready(function(){
    $("#aa").hide(2000);
    $("#cc").hide(2000)
})
const client = new Discord.Client();
function connect(){
    $("#cc").show(2000)
const token = $("#token").val()

client.login(token);
client.on("ready", () =>{
    alert("Bot is ready: "+client.user.tag);
    $("#token").hide(2000);
$("#connect").hide(2000);
$("#aa").show(2000);
$("#cc").hide(1000)
})

}
function send(){
    client.channels.find(i => i.id===$("#cid").val()).send($("#msg").val());
}