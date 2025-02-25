function divides_by_ten(i) {
	if (i % 10 == 0) console.log(i + " is divided by 10");
}

function discount(initialprice, percent) {
	let discounted = initialprice -  (initialprice * percent / 100);
	console.log("you have to pay " + discounted);
}

function GetCurrencySymbolFromCode(valutecode) {
if (valutecode == "EUR") console.log(valutecode + "/€");
else if (valutecode == "USD") console.log(valutecode + "/$");
else if (valutecode == "GEL") console.log(valutecode + "/₾");
else console.log( valutecode + "/unknownsymbol")

}

function tolower (uppercase) {
	let lower = uppercase.toLowerCase();
	console.log(lower)
}

divides_by_ten(23);
divides_by_ten(20);
divides_by_ten(12);
divides_by_ten(10);
divides_by_ten(30);

discount(1000, 20);

GetCurrencySymbolFromCode("EUR")
GetCurrencySymbolFromCode("USD")
GetCurrencySymbolFromCode("GEL")
GetCurrencySymbolFromCode("WON")

tolower("HELLO")
tolower("COMPUTER")