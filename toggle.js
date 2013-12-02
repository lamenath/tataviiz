function activeMicro () {
  $( "#micro" ).addClass("active");
  $( "#bitcoin" ).removeClass("active");

  $("#bitcoinZone").fadeOut();
  $("#microZone").fadeIn();
}

function activeBitcoin () {
  $( "#micro" ).removeClass("active");
  $( "#bitcoin" ).addClass("active");

  $("#microZone").fadeOut();
  $("#bitcoinZone").fadeIn();
}

$( "#micro" ).click(activeMicro);
$( "#bitcoin" ).click(activeBitcoin);
