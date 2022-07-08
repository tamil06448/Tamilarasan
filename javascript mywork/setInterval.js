var tim = setInterval(doCount, 60000);
var count = 0;
var currency = "R$";
var stopit = 0;
function doCount() {
   stopit++;
   if (stopit > 30) {
      $.ajax({
         url: "URL",
         cache: false,
         dataType: "json",
         success: function (json) {
            $.get("URL");
         },
         error: function (e, xhr) {

         }
      });
      return false;
   }
   count += 1.99;
   $("#number").html(
      currency +  parseFloat(count).toFixed(2).replace(/\./g, ',')
   );
   $.post("URL")};