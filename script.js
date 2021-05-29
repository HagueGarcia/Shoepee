
function showA(){

    document.getElementById("adidasshop").style.display = "block";

    document.getElementById("vansshop").style.display = "none";
    document.getElementById("drmtshop").style.display = "none";
    document.getElementById("hupushop").style.display = "none";
    document.getElementById("nikeshop").style.display = "none";
    document.getElementById("filashop").style.display = "none";
    
}
function showV(){

    document.getElementById("adidasshop").style.display = "none";
    document.getElementById("vansshop").style.display = "block";

    document.getElementById("drmtshop").style.display = "none";
    document.getElementById("hupushop").style.display = "none";
    document.getElementById("nikeshop").style.display = "none";
    document.getElementById("filashop").style.display = "none";
    
}
function showD(){

    document.getElementById("adidasshop").style.display = "none";
    document.getElementById("vansshop").style.display = "none";
    document.getElementById("drmtshop").style.display = "block";

    document.getElementById("hupushop").style.display = "none";
    document.getElementById("nikeshop").style.display = "none";
    document.getElementById("filashop").style.display = "none";
    
}
function showH(){

    document.getElementById("adidasshop").style.display = "none";
    document.getElementById("vansshop").style.display = "none";
    document.getElementById("drmtshop").style.display = "none";
    document.getElementById("hupushop").style.display = "block";

    document.getElementById("nikeshop").style.display = "none";
    document.getElementById("filashop").style.display = "none";
    
}
function showN(){

    document.getElementById("adidasshop").style.display = "none";
    document.getElementById("vansshop").style.display = "none";
    document.getElementById("drmtshop").style.display = "none";
    document.getElementById("hupushop").style.display = "none";
    document.getElementById("nikeshop").style.display = "block";

    document.getElementById("filashop").style.display = "none";
    
}
function showF(){

    document.getElementById("adidasshop").style.display = "none";
    document.getElementById("vansshop").style.display = "none";
    document.getElementById("drmtshop").style.display = "none";
    document.getElementById("hupushop").style.display = "none";
    document.getElementById("nikeshop").style.display = "none";
    document.getElementById("filashop").style.display = "block";

    
}

var cust_order = [];
		function displayproduct() {
		document.getElementById('poggers').innerHTML = "";
		for(var i=0; i<cust_order.length; i++) {
		document.getElementById('poggers').innerHTML += "<li>" + cust_order[i].prod_name + "<br>" + cust_order[i].prod_price + "<br><button class='btn btn-danger' id='"+i+"' onclick='remove(this.id)'>REMOVE</button><br></li>";
        document.getElementById("cust_order").value = JSON.stringify(cust_order);
		}}
		
		function remove(clicked){
            cust_order.splice(clicked,1);
            displayproduct();
		}
		
		function addtocart() {
		var custorder = { 
		prod_name: "Ultraboost 21 Shoes",
		prod_price: 9500 };
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart2() {
		var custorder = { 
		prod_name: "HU NMD Shoes" ,
		prod_price: 13000  }; 
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart3() {
		var custorder = { 
		prod_name: "Superstar Mules" ,
		prod_price: 4500  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart4() {
		var custorder = { 
		prod_name: "Stan Smith Primeblue Shoes" ,
		prod_price: 4800  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart5() {
		var custorder = { 
		prod_name: "Grand Court Shoes" ,
		prod_price: 3800  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart6() {
		var custorder = { 
		prod_name: "Ultraboost 6.0 DNA Shoes" ,
		prod_price: 8900  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart7() {
		var custorder = { 
		prod_name: "Bandana Sk8-Hi" ,
		prod_price: 3750  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart8() {
		var custorder = { 
		prod_name: "Vans x Parks Project Authentic" ,
		prod_price: 3250  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart9() {
		var custorder = { 
		prod_name: "Authentic" ,
		prod_price: 2500  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart10() {
		var custorder = { 
		prod_name: "Suede Canvas Old Skool V" ,
		prod_price: 3750  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart11() {
		var custorder = { 
		prod_name: "Aloha Classic Slip-on " ,
		prod_price: 3000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart12() {
		var custorder = { 
		prod_name: "Retro Cali Sk8-Hi Tapered" ,
		prod_price: 4000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart13() {
		var custorder = { 
		prod_name: "1460 Smooth Leather Lace Up Boots" ,
		prod_price: 7500  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart14() {
		var custorder = { 
		prod_name: "1461 Rick Owens Bex Leather Oxford Shoes" ,
		prod_price: 15000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart15() {
		var custorder = { 
		prod_name: "2976 Bex Smooth Leather Chelsea Boots" ,
		prod_price: 8000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart16() {
		var custorder = { 
		prod_name: "Sinclair Women’s Leather Platform Boots" ,
		prod_price: 10000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart17() {
		var custorder = { 
		prod_name: "8065 Smooth Leather Mary Jane Shoes" ,
		prod_price: 16000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart18() {
		var custorder = { 
		prod_name: "Jadon Smooth Leather Platform Boots" ,
		prod_price: 9000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart19() {
		var custorder = { 
		prod_name: "Men’s Expert Knit Plain Toe Oxford" ,
		prod_price: 6000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart20() {
		var custorder = { 
		prod_name: "Men’s Bennet Wingtip Oxford" ,
		prod_price: 7000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart21() {
		var custorder = { 
		prod_name: "Men’s Davis Oxford Perfect Fit" ,
		prod_price: 7000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart22() {
		var custorder = { 
		prod_name: "Women’s Everyday Slip-on" ,
		prod_price: 4000  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart23() {
		var custorder = { 
		prod_name: "Women’s Sabine Mule" ,
		prod_price: 4500  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
		
		function addtocart24() {
		var custorder = { 
		prod_name: "Women’s Sadie D’Orsay " ,
		prod_price: 4250  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart25() {
		var custorder = { 
		prod_name: "Nike Air Force 1 ’07 LV8" ,
		prod_price: 5295  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart26() {
		var custorder = { 
		prod_name: "Nike Blazer Mid ’77 Vintage " ,
		prod_price: 5895  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart27() {
		var custorder = { 
		prod_name: "NikeCourt Air Max Volley" ,
		prod_price: 4595  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart28() {
		var custorder = { 
		prod_name: "Nike Air Zoom Pegasus 38 " ,
		prod_price: 6295 }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart29() {
		var custorder = { 
		prod_name: "Nike Air Max 90" ,
		prod_price: 6445  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart30() {
		var custorder = { 
		prod_name: "Nike Court Vision Alta" ,
		prod_price: 3895  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart31() {
		var custorder = { 
		prod_name: "Fila Festivo ’91 Unisex Sneakers" ,
		prod_price: 2999  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart32() {
		var custorder = { 
		prod_name: "Oxidation Men’s Running Shoes " ,
		prod_price: 3998  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart33() {
		var custorder = { 
		prod_name: "Capello Men’s Running Shoes " ,
		prod_price: 1999  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart34() {
		var custorder = { 
		prod_name: "Zagato Unisex Lifestyle Sneakers " ,
		prod_price: 2699  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart35() {
		var custorder = { 
		prod_name: "Disruptor II Heart Women’s Lifestyle Sneakers" ,
		prod_price: 3999  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
        function addtocart36() {
		var custorder = { 
		prod_name: "Stirr Women’s Running Shoes " ,
		prod_price: 4250  }; //insert price//
	
		cust_order.push(custorder);
		displayproduct();
		}
   

       
       
       
       
       
       
       
       
       
       