var CIKsearcher = "http://www.sec.gov/cgi-bin/browse-edgar?owner=exclude&action=getcompany&company="
var TickerSearcher = "http://www.sec.gov/cgi-bin/browse-edgar?Find=Search&owner=exclude&action=getcompany&CIK="
$( "#CIKsearch" ).click(function() {
    console.log('CIK Search!');
    $( "#myModalLabel" ).text("CIK Search");
    console.log($("#CIKinput").val());
    $("#SearchHyperLink").attr("href", CIKsearcher + $("#CIKinput").val().toString());
    $("#SearchHyperLink").text(CIKsearcher + $("#CIKinput").val().toString());
    $("#SearchIframe").attr("src", CIKsearcher + $("#CIKinput").val().toString());
});
$( "#TickerSearch" ).click(function() {
  console.log('Ticker Search!');
  $( "#myModalLabel" ).text( "Ticker Search" ); 
    console.log($("#TickerInput").val());
    $("#SearchHyperLink").attr("href", TickerSearcher + $("#TickerInput").val().toString());
    $("#SearchHyperLink").text(TickerSearcher + $("#TickerInput").val().toString());
    $("#SearchIframe").attr("src", TickerSearcher + $("#TickerInput").val().toString());  
});
$( "#TickerSymbolSearch" ).click(function() {
  console.log('TickerSymbolSearch Search!');
  $( "#myModalLabel" ).text( "Ticker Symbol Search" );
});