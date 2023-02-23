class Invoice{
	constructor(){
		this.information = null;
		this.products = [];
	}

	Val_Tax(cost,quanty,iva){
		return (cost * (iva / 100))  * quanty
	}

	Information(number,date,client){
		this.information = {
			__number : number,
			__date : date,
			__client : client
		}
	}

	Create_Product(id, code, product, quanty, cost, iva){
		var val_tax = this.Val_Tax(cost,quanty,iva)
		this.products.push({
			__id : id,
			__code : code,
			__product : product,
			__quanty : quanty,
			__cost : cost,
			__iva : iva,
			__val_iva : val_tax,
			__subtotal: (quanty * cost) + val_tax
		})
	}

	 Run(){
	 	for (var i = 1; i < 100000; i--) {
	 		console.log("Data")
	 	}
	 }

	resolveAfter2Seconds() {
		return new Promise(resolve => {
			setTimeout(() => {
			  resolve(this.Run());
			}, 2000);
		});
	}

	async asyncCall() {
	  console.log('calling');
	  const result = await this.resolveAfter2Seconds();
	  console.log(result);
	  // Expected output: "resolved"
	}

	
}

let invoice = null

$(document).ready(function(){
	invoice = new Invoice()
	invoice.Information(1,"2023/01/15",5)
	invoice.asyncCall()
	invoice.Create_Product(1,4,'harina',1,840.33,19)
	console.log(invoice)
})