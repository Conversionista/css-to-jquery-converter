!function(){function a(a){$.ajax({type:"POST",url:d,data:a,encode:!0}).done(function(a){console.log(a);var b='$("head").append("<style>'+a+'</style>");';b=b.replace(/\s+/g,""),c.setReadOnly(!0),c.setValue(b),$("#copyjQuery").text("Copy"),ZeroClipboard.setData("text/plain",c.getValue())}).fail(function(a){console.warn(a)})}var b=ace.edit("css");b.setTheme("ace/theme/github"),b.getSession().setMode("ace/mode/css");var c=ace.edit("jquery");c.setTheme("ace/theme/github"),c.getSession().setMode("ace/mode/javascript");var d="https://api.conversionista.se/css/css2.php";$(document).ready(function(){$("#convert").click(function(c){var d={css:b.getValue()};a(d),c.preventDefault()})});var e=new ZeroClipboard(document.getElementById("copyjQuery"));e.on("ready",function(){e.on("aftercopy",function(a){$("#copyjQuery").text("Copied!"),console.log("Copied text to clipboard: "+a.data["text/plain"])})})}();