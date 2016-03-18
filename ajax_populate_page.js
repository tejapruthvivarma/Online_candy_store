/*  
    
 Nadimpally, Teja Pruthvi Varma account jadrn031
CS545 Fall 2015
proj-4
   
*/    


var proj4_data;
var byName ;

$(document).ready(function() {


   var errorStatusHandle = $('#error_line');
    var elementHandle = new Array(26);
    elementHandle[0] = $('[name="First_Name"]');
    elementHandle[1] = $('[name="Last_Name"]');
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="city"]');
    elementHandle[4] = $('[name="state"]');
    elementHandle[5] = $('[name="zip"]');
    elementHandle[6] = $('[name="area_phone"]');
    elementHandle[7] = $('[name="prefix_phone"]');
    elementHandle[8] = $('[name="phone"]');
    elementHandle[9] = $('[name="email"]');
    elementHandle[10] = $('[name="sFirst_Name"]');
    elementHandle[11] = $('[name="sLast_Name"]');
    elementHandle[12] = $('[name="saddress1"]');
    elementHandle[13] = $('[name="scity"]');
    elementHandle[14] = $('[name="sstate"]');
    elementHandle[15] = $('[name="szip"]');
    elementHandle[16] = $('[name="sarea_phone"]');
    elementHandle[17] = $('[name="sprefix_phone"]');
    elementHandle[18] = $('[name="sphone"]');
    elementHandle[19] = $('[name="semail"]');
    elementHandle[20] = $('[name="card"]');
    elementHandle[21] = $('[name="card_number"]');
    elementHandle[22] = $('[name="mm"]');
    elementHandle[23] = $('[name="yyyy"]');
   
    
    
    var errorMessage = new Array(20);
    errorMessage[0] = "Please enter first name";
    errorMessage[1] = "Please enter last name";
    errorMessage[2] = "Please enter your address";
    errorMessage[3] = "Please enter your city";
    errorMessage[4] = "The state appears to be invalid, " +
                      "please use the two letter state abbreviation";
    errorMessage[5] = "The zip code must be exactly five digits";                      
    errorMessage[6] = "The area code appears to be invalid";
    errorMessage[7] = "The prefix appears to be invalid";
    errorMessage[8] = "The phone number must have exactly four digits";
    errorMessage[9] = "The email appears to be invalid";  
    errorMessage[10] = "Please enter first name in shipping";
    errorMessage[11] = "Please enter last name in shipping";
    errorMessage[12] = "Please enter your  shipping address";
    errorMessage[13] = "Please enter your shipping city";
    errorMessage[14] = "The state appears to be invalid in shipping, " +
                      "please use the two letter state abbreviation";
    errorMessage[15] = "The zip in shipping code must be exactly five digits";                      
    errorMessage[16] = "The area code in shipping appears to be invalid";
    errorMessage[17] = "The prefix in shipping appears to be invalid";
    errorMessage[18] = "The phone number in shipping must have exactly four digits";
    errorMessage[19] = "The email appears in shipping to be invalid";  
    errorMessage[20] = "please select a card type";
    errorMessage[21] = "The card number appears to be invalid";
    errorMessage[22] = "The epiration month is invalid";
    errorMessage[23] = "The expiration year is invalid";


         
    function isValidData() {      

      


        if(isEmpty(elementHandle[0].val())) {
                elementHandle[0].addClass("error");
                errorStatusHandle = $('#err_pname');
                errorStatusHandle.text(errorMessage[0]);
                elementHandle[0].focus();
                return false;
                }
        
   
         if(isEmpty(elementHandle[1].val())) {
                elementHandle[1].addClass("error");
                errorStatusHandle = $('#err_pname');
                errorStatusHandle.text(errorMessage[1]);
                elementHandle[1].focus();
                return false;
                }
        

       
if(isEmpty(elementHandle[10].val())) {
                elementHandle[10].addClass("error");
                errorStatusHandle = $('#serr_pname');
                errorStatusHandle.text(errorMessage[10]);
                elementHandle[10].focus();
                return false;
                }
        
   
         if(isEmpty(elementHandle[11].val())) {
                elementHandle[11].addClass("error");
                errorStatusHandle = $('#serr_pname');
                errorStatusHandle.text(errorMessage[11]);
                elementHandle[11].focus();
                return false;
                }
   // address 1
          if(isEmpty(elementHandle[2].val())) {
                elementHandle[2].addClass("error");
                errorStatusHandle = $('#err_add1');
                errorStatusHandle.text(errorMessage[2]);
                elementHandle[2].focus();
                return false;
                }

                 if(isEmpty(elementHandle[12].val())) {
                elementHandle[12].addClass("error");
                errorStatusHandle = $('#serr_add1');
                errorStatusHandle.text(errorMessage[12]);
                elementHandle[12].focus();
                return false;
                }
//city
           if(isEmpty(elementHandle[3].val())) {
                elementHandle[3].addClass("error");
                errorStatusHandle = $('#err_city');
                errorStatusHandle.text(errorMessage[3]);
                elementHandle[3].focus();
                return false;
                }

                 if(isEmpty(elementHandle[13].val())) {
                elementHandle[13].addClass("error");
                errorStatusHandle = $('#serr_city');
                errorStatusHandle.text(errorMessage[13]);
                elementHandle[13].focus();
                return false;
                }
//state
            if(isEmpty(elementHandle[4].val())) {
                elementHandle[4].addClass("error");
                errorStatusHandle = $('#err_city');
                errorStatusHandle.text(errorMessage[4]);
                elementHandle[4].focus();
                return false;
                }


            if(isEmpty(elementHandle[14].val())) {
                elementHandle[14].addClass("error");
                errorStatusHandle = $('#serr_city');
                errorStatusHandle.text(errorMessage[14]);
                elementHandle[14].focus();
                return false;
                }


             if(!isValidState(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle = $('#err_city');
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[4].focus();            
            return false;
            }

             if(!isValidState(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[14].focus();            
            return false;
            }
//zip


            if(isEmpty(elementHandle[5].val())) {
                elementHandle[5].addClass("error");
                errorStatusHandle = $('#err_city');
                errorStatusHandle.text(errorMessage[5]);
                elementHandle[5].focus();
                return false;
                }

                if(isEmpty(elementHandle[15].val())) {
                elementHandle[15].addClass("error");
                errorStatusHandle = $('#serr_city');
                errorStatusHandle.text(errorMessage[15]);
                elementHandle[15].focus();
                return false;
                }

            if(!$.isNumeric(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle = $('#err_city');
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[5].focus();            
            return false;
            }

             if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
            }


           if(elementHandle[5].val().length != 5) {
            elementHandle[5].addClass("error");
            errorStatusHandle = $('#err_city');
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[5].focus();            
            return false;
            }

             if(elementHandle[15].val().length != 5) {
            elementHandle[15].addClass("error");
            errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[15].focus();            
            return false;
            }

//phone
       

           if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("Please enter your area code");
            elementHandle[6].focus();            
            return false;
            }   

             if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("Please enter your area code");
            elementHandle[16].focus();            
            return false;
            }         

        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }

         if(!$.isNumeric(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[16].focus();            
            return false;
            }

        if(elementHandle[6].val().length != 3) {
            elementHandle[6].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[6].focus();            
            return false;
            } 

        if(elementHandle[16].val().length != 3) {
            elementHandle[16].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[16].focus();            
            return false;
            } 

        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("Please enter phone prefix code");
            elementHandle[7].focus();            
            return false;
            } 


         if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("Please enter phone prefix code");
            elementHandle[17].focus();            
            return false;
            } 
        
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
             errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }


        if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
             errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[17].focus();            
            return false;
            }

        if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[7].focus();            
            return false;
            } 
           


         if(elementHandle[17].val().length != 3) {
            elementHandle[17].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[17].focus();            
            return false;
            } 


           if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("Please enter phone number");
            elementHandle[8].focus();            
            return false;
            } 

            if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("Please enter phone number");
            elementHandle[18].focus();            
            return false;
            } 

            if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }


        if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle = $('#esrr_phone');
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[18].focus();            
            return false;
            }

        if(elementHandle[8].val().length != 4) {
            elementHandle[8].addClass("error");
            errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[8].focus();            
            return false;
            }  
         
          if(elementHandle[18].val().length != 4) {
            elementHandle[18].addClass("error");
            errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[18].focus();            
            return false;
            } 

   
 
//Email

         if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle = $('#err_email');
            errorStatusHandle.text("Please enter your E-mail");
            elementHandle[9].focus();            
            return false;
            } 

        if(!isValidEmail(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle = $('#err_email');
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[9].focus();            
            return false;
            } 


         if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle = $('#serr_email');
            errorStatusHandle.text("Please enter your E-mail");
            elementHandle[19].focus();            
            return false;
            } 

        if(!isValidEmail(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle = $('#serr_email');
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[19].focus();            
            return false;
            } 

 if($('input[name=card]:checked').length<=0){
            errorStatusHandle = $('#err_ctype');
            errorStatusHandle.text("Please select a card type");
            $('[name="card"]')[0].focus();
        return false;
        } 

         if(isEmpty(elementHandle[21].val())) {
                elementHandle[21].addClass("error");
                errorStatusHandle = $('#err_cardname');
                errorStatusHandle.text(errorMessage[21]);
                elementHandle[21].focus();
                return false;
                }


if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle = $('#err_cardname');
            errorStatusHandle.text("The card number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[21].focus();            
            return false;
            }


           if(elementHandle[21].val().length != 16) {
            elementHandle[21].addClass("error");
            errorStatusHandle = $('#err_cardname');
            errorStatusHandle.text("The card number must have exactly sixteen digits")
            elementHandle[21].focus();            
            return false;
            }



       if(isEmpty(elementHandle[22].val())) {
                elementHandle[22].addClass("error");
                errorStatusHandle = $('#err_cdate');
                errorStatusHandle.text(errorMessage[22]);
                elementHandle[22].focus();
                return false;
                }

                if(isEmpty(elementHandle[23].val())) {
                elementHandle[23].addClass("error");
                errorStatusHandle = $('#err_cdate');
                errorStatusHandle.text(errorMessage[23]);
                elementHandle[23].focus();
                return false;
                }

         if(elementHandle[22].val().length > 0 && elementHandle[23].val().length > 0){
            var date = elementHandle[22].val()+"/01/"+elementHandle[23].val();
            
            if(!isValidDate(date)){
             errorStatusHandle = $('#err_cdate');
            errorStatusHandle.text("Please enter Valid date");
            elementHandle[22].focus();   
            return false;     
            }
          var age = CheckDateDifference(date);
       
          if(age>=0){
             errorStatusHandle = $('#err_cdate');
            errorStatusHandle.text("Please enter future date");
            elementHandle[22].focus();   
            return false; 
          }
        } 


        return true;
        }       

   elementHandle[0].focus();
      

    elementHandle[4].on('keyup', function() {
        elementHandle[4].val(elementHandle[4].val().toUpperCase());
        });

    elementHandle[14].on('keyup', function() {
        elementHandle[14].val(elementHandle[14].val().toUpperCase());
        });
        
    elementHandle[6].on('keyup', function() {
        if(elementHandle[6].val().length == 3)
            elementHandle[7].focus();
            });
            
            elementHandle[16].on('keyup', function() {
        if(elementHandle[16].val().length == 3)
            elementHandle[17].focus();
            });

    elementHandle[7].on('keyup', function() {
        if(elementHandle[7].val().length == 3)
            elementHandle[8].focus();
            }); 

      elementHandle[17].on('keyup', function() {
        if(elementHandle[17].val().length == 3)
            elementHandle[18].focus();
            });

    
   




  elementHandle[0].on('blur', function(){
    if(isValidName(elementHandle[0].val())){
    elementHandle[0].removeClass("error");
    errorStatusHandle = $('#err_pname');
            errorStatusHandle.text("")
   }
   });

   elementHandle[10].on('blur', function(){
    if(isValidName(elementHandle[10].val())){
    elementHandle[10].removeClass("error");
    errorStatusHandle = $('#serr_pname');
            errorStatusHandle.text("")
   }
   });

elementHandle[1].on('blur', function(){
    if(isValidName(elementHandle[1].val())){
    elementHandle[1].removeClass("error");
    errorStatusHandle = $('#err_pname');
            errorStatusHandle.text("")
   }
   });

elementHandle[11].on('blur', function(){
    if(isValidName(elementHandle[11].val())){
    elementHandle[11].removeClass("error");
    errorStatusHandle = $('#serr_pname');
            errorStatusHandle.text("")
   }
   });

elementHandle[2].on('blur', function(){
    if(!isEmpty(elementHandle[2].val())){
    elementHandle[2].removeClass("error");
        errorStatusHandle = $('#err_add1');
            errorStatusHandle.text("")
   }
   });

elementHandle[12].on('blur', function(){
    if(!isEmpty(elementHandle[12].val())){
    elementHandle[12].removeClass("error");
        errorStatusHandle = $('#serr_add1');
            errorStatusHandle.text("")
   }
   });

elementHandle[3].on('blur', function(){
    if(!isEmpty(elementHandle[3].val())){
    elementHandle[3].removeClass("error");
        errorStatusHandle = $('#err_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[13].on('blur', function(){
    if(!isEmpty(elementHandle[13].val())){
    elementHandle[13].removeClass("error");
        errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[4].on('blur', function(){
    if(!isEmpty(elementHandle[4].val()) && isValidState(elementHandle[4].val())){
    elementHandle[4].removeClass("error");
        errorStatusHandle = $('#err_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[14].on('blur', function(){
    if(!isEmpty(elementHandle[14].val()) && isValidState(elementHandle[14].val())){
    elementHandle[14].removeClass("error");
        errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[5].on('blur', function(){
    if(!isEmpty(elementHandle[5].val()) &&  $.isNumeric(elementHandle[5].val()) && elementHandle[5].val().length ==5){
    elementHandle[5].removeClass("error");
        errorStatusHandle = $('#err_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[15].on('blur', function(){
    if(!isEmpty(elementHandle[15].val()) &&  $.isNumeric(elementHandle[15].val()) && elementHandle[15].val().length ==5){
    elementHandle[15].removeClass("error");
        errorStatusHandle = $('#serr_city');
            errorStatusHandle.text("")
   }
   });

elementHandle[6].on('blur', function(){
    if(!isEmpty(elementHandle[6].val()) && $.isNumeric(elementHandle[6].val()) && elementHandle[6].val().length == 3){
    elementHandle[6].removeClass("error");
        errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("")
   }
   });

elementHandle[16].on('blur', function(){
    if(!isEmpty(elementHandle[16].val()) && $.isNumeric(elementHandle[16].val()) && elementHandle[16].val().length == 3){
    elementHandle[16].removeClass("error");
        errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("")
   }
   });

elementHandle[17].on('blur', function(){s
    if(!isEmpty(elementHandle[17].val()) && $.isNumeric(elementHandle[7].val()) && elementHandle[17].val().length == 3){
    elementHandle[17].removeClass("error");
        errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("")
   }
   })

elementHandle[8].on('blur', function(){
    if(!isEmpty(elementHandle[8].val()) && $.isNumeric(elementHandle[8].val()) && elementHandle[8].val().length == 3){
    elementHandle[8].removeClass("error");
        errorStatusHandle = $('#err_phone');
            errorStatusHandle.text("")
   }
   })

elementHandle[18].on('blur', function(){
    if(!isEmpty(elementHandle[18].val()) && $.isNumeric(elementHandle[18].val()) && elementHandle[18].val().length == 3){
    elementHandle[18].removeClass("error");
        errorStatusHandle = $('#serr_phone');
            errorStatusHandle.text("")
   }
   })



elementHandle[9].on('blur', function(){
    if(!isEmpty(elementHandle[9].val()) && isValidEmail(elementHandle[9].val())){
    elementHandle[9].removeClass("error");
        errorStatusHandle = $('#err_email');
            errorStatusHandle.text("")
   }
   })

elementHandle[19].on('blur', function(){
    if(!isEmpty(elementHandle[19].val()) && isValidEmail(elementHandle[19].val())){
    elementHandle[19].removeClass("error");
        errorStatusHandle = $('#serr_email');
            errorStatusHandle.text("")
   }
   })

elementHandle[20].change(function(){
    if(!isEmpty(elementHandle[20].val())){
    elementHandle[20].removeClass("error");
        errorStatusHandle = $('#err_ctype');
            errorStatusHandle.text("")
   }
   })


elementHandle[21].on('blur', function(){
    if(!isEmpty(elementHandle[21].val()) &&  $.isNumeric(elementHandle[21].val()) && elementHandle[21].val().length ==16){
    elementHandle[21].removeClass("error");
        errorStatusHandle = $('#err_cardname');
            errorStatusHandle.text("")
   }
   });


//function initVars() {
    proj4_data = new Array();
    $.get('/perl/jadrn031/proj4/get_products.cgi', storeData);
   var cart = new shopping_cart("jadrn031");
   $('#count').text(cart.size());


  
    // milk_click();
    $.extend({
      getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      },
      getUrlVar: function(name){
        return $.getUrlVars()[name];
      }
    });

    byName = $.getUrlVar('name');
   

   milk_click();
   
    $('#dark').on('click', function() {

    

       byName = "dark";
       print_milk();
        })
        
    $('#nuts').on('click', function() {   
       

 

       byName = "nuts";
       print_milk();

        }) ;
        
    $('#brittle').on('click', function() {


     byName = "brittles";
       print_milk();

        })  ; 

          $('#milk').on('click', function() {
  

     byName = "milk";
       print_milk();
        }) ;



         $('#truffles').on('click', function() {


    byName = "truffles";
       print_milk();
        }) ;


         $('#gifts').on('click', function() {


 byName = "gifts";
       print_milk();

        }) ;


         $('#holiday').on('click', function() {
   
 byName = "assortments";
       print_milk();


        }) ;


        $('#your_cart').on('click',cart, function() {
          

      display(cart);
       
        }) ;
        
    
    $(document).on('click', "#order_button" , function($e) {       
            $("#dialog_modal").dialog('open');
            });                 
   
  $( "#dialog_modal" ).dialog({
     height: 600,
            width: 1000,
            modal: true,
            autoOpen: false
    });

    $(document).on('click', ".buy", function() {  
        var sku = this.id;
        var ss = "#"+sku+"_text";
        var val = $(ss).val();
        var name = "";
        var msg = "#"+sku+"_msg";
        var price = 0;
        for(var i=0; i < proj4_data.length; i++) {
           
               if(proj4_data[i][0] == sku){
              name = proj4_data[i][2];
              price = parseFloat(proj4_data[i][6]);
               }                
            
        }
        if($.isNumeric(val) && isInt(val)){
        price = parseFloat(price) * parseInt(val,10);
        cart.add(sku,name,val,price.toFixed(2));
        $('#count').text(cart.size());
        $(this).next().fadeIn(50).fadeOut(2000);
    }
    else
        $(msg).fadeIn(50).fadeOut(2000);
        
        });      
       

    $(document).on('click', ".qty_modify", function() {  
        var sku = this.id;
        var ss = "#"+sku+"_qty";
        var val = $(ss).val();
          var price = 0;
         for(var i=0; i < proj4_data.length; i++) {
           
               if(proj4_data[i][0] == sku){
           
             var price = parseFloat(proj4_data[i][6]);
               }                
            
        }
        if($.isNumeric(val) && isInt(val)){
        price = parseFloat(price) * parseInt(val,10);
        cart.setQuantity(sku,val,price.toFixed(2));
        display(cart);
    }
        }); 

    $(document).on('click', ".delete" , function() {   
        var sku = this.id;
        cart.delete(sku);
        display(cart);
        });     

    $('#same').change(function(){
      

        if(document.getElementById('same').checked){
            document.getElementById('shipping').style.display = "none";
        }
        else
         document.getElementById('shipping').style.display = "block";
   // }
    })

    $('#send_data').on('click', function() {
        for(var i=0; i < 19; i++)
             elementHandle[i].removeClass("error");
        errorStatusHandle.text("");

             if(document.getElementById('same').checked){
         $('[name="sFirst_Name"]').val($('[name="First_Name"]').val());
         $('[name="sLast_Name"]').val($('[name="Last_Name"]').val());
         $('[name="saddress1"]').val($('[name="address1"]').val());
         $('[name="saddress2"]').val($('[name="address2"]').val());
         $('[name="scity"]').val($('[name="city"]').val());
         $('[name="sstate"]').val($('[name="state"]').val());
         $('[name="szip"]').val($('[name="zip"]').val());
         $('[name="sarea_phone"]').val($('[name="area_phone"]').val());
         $('[name="sprefix_phone"]').val($('[name="prefix_phone"]').val());
         $('[name="sphone"]').val($('[name="phone"]').val());
         $('[name="semail"]').val($('[name="email"]').val());

    }
        var ret_Data = isValidData();
        if(ret_Data )
        {

             $('input, select').prop('disabled', false);
            $.ajax({
                url: $('#signUpForm').attr('action'),
                type: 'POST',
                data: $('#signUpForm').serialize(),
                success: displayResponse
            });
   // $('#signUpForm').submit();
     }

    else
        return false;
        })

  $(':reset').on('click', function() {
        for(var i=0; i < 13; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        })

    }); 
    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
       print_milk();
    }
     
 function milk_click() {
$.get('/perl/jadrn031/proj4/get_products.cgi', storeData);
    }   


function display(cart){
    var cartArray = cart.getCartArray();
        var size = cart.size();  
         var total = 0;    
         var price = 0;    
        var toWrite = "<table>";
       
        toWrite += "<tr><th>SKU</th><th>Name</th><th>Quantity</th><th>Price</th></tr>";
        for(i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
            toWrite += "<td>"+cartArray[i][0]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>";
            toWrite += "<td>"+"<input type='text' "+ "class='qty_text' id='" + cartArray[i][0]+"_qty' value='" +cartArray[i][2]+"' /></td>"; 
            price =  parseFloat(cartArray[i][3]).toFixed(2);
            toWrite += "<td> $"+price+"</td>";
            toWrite += "<td class = 'td_btn'>"+"<input type='button' class='qty_modify' value = 'update' id='" + cartArray[i][0]+"' /></td>"; 
            toWrite += "<td class = 'td_btn'>"+"<input type='button' class='delete' value = 'Delete' id='" +cartArray[i][0]+"' /></td>";
            toWrite += "</tr>";
            total = parseFloat(total) + parseFloat(cartArray[i][3]);
            }
            if(total >0){
            var tax = total * 0.08
            var grand = total + tax + 2;
             toWrite += "<tr>";
             toWrite += "<td class = 'td_btn'></td>";
            toWrite += "<td class = 'td_btn'></td>";
              toWrite += "<td>Total Amount</td>";
             toWrite += "<td>$"+total.toFixed(2)+"</td>";
             toWrite += "</tr>";
              toWrite += "<tr>";
             toWrite += "<td class = 'td_btn'></td>";
            toWrite += "<td class = 'td_btn'></td>";
              toWrite += "<td>Shipping charges</td>";
             toWrite += "<td>$2</td>";
             toWrite += "</tr>";
              toWrite += "<td class = 'td_btn'></td>";
            toWrite += "<td class = 'td_btn'></td>";
              toWrite += "<td>Grand Total(8% Tax)</td>";
             toWrite += "<td>$"+grand.toFixed(2)+"</td>";
             toWrite += "</tr>";
             toWrite += "</table>";
            
        toWrite += "<input type='button' value = 'order now' id = 'order_button' />"; 
    }

    else
    {
        toWrite = "</table>";
      toWrite +="<p id = 'empty'>Cart is Empty</p>";  
    }
        var handle = document.getElementById('content');
        handle.innerHTML = toWrite;      

}
    function print_milk() {
     tmpString = "";
     var type = "";
     if(byName=="dark")
       type = "Dark chocolate";
     
   
   else  if(byName=="milk")
       type = "Milk chocolate";


   else  if(byName=="nuts")
       type = "Nuts and chews";

   else  if(byName=="brittles")
       type = "Brittles and toffies";


   else  if(byName=="truffles")
       type = "Truffles";


   else  if(byName=="gifts")
       type = "Gifts";


   else  if(byName=="assortments")
       type = "Holiday assortments";

else
    type = "Milk chocolate";
 
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == type) {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
            for(var j=0; j < proj4_data[i].length-3; j++)
            {  
                tmpString += proj4_data[i][j] + "<br />";
            }
             tmpString += "$"+proj4_data[i][6] + "<br />";
            tmpString += "<input type='text' "+ "class='buy_text' id='" + proj4_data[i][0]+"_text' />";
             tmpString += "<input type='button' value='Add To Cart'"+ "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id = 'add_cart_msg'>Added to Cart</span><br />";
            tmpString += "<span id='" + proj4_data[i][0]+"_msg' class = 'a_c_m_n'>Please enter numeric values</span><br />";
        tmpString += "<br /><br />";                       
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;     
    }
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
} 


function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }  
        

          
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }                
            
    function isValidName(name) {
        var pattern = new RegExp(/^[a-zA-Z " "]+$/);
        return pattern.test(name);
        }      

        function isValidDate(date){
        var pattern = new RegExp(/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
       
        if(!pattern.test(date)){
           return false;
           }

        var tempDate = date;
    
        var checkDate = new Date(date);   
     
        var checkDay = (checkDate.getDate()).toString();
    
        var checkMonth = (checkDate.getMonth()+1).toString();
    
        var checkYear = (checkDate.getFullYear()).toString();
    
    
      if(checkMonth.length == 1 )
    var tempDate1 = "0"+checkMonth + "/" + checkDay + "/" + checkYear;
      else if(checkDay.length == 1)
    var tempDate1 = checkMonth + "/" + "0"+checkDay + "/" + checkYear;
      else
    var tempDate1 = checkMonth + "/" +checkDay + "/" + checkYear;
     
     if(checkDay.length == 1 && checkMonth.length == 1)
    var tempDate1 = "0"+checkMonth + "/" + "0"+checkDay + "/" + checkYear;
   
    if(tempDate == tempDate1)
        return true;
    else
        return false;        
           
        return true;

        } 

         function CheckDateDifference(date){
        var enteredDate=new Date(date);
        var comparisionDate="06/01/2016"
        var dateToBeCompared=new Date();
        dateToBeCompared=new Date(dateToBeCompared-enteredDate);
        return dateToBeCompared.getFullYear() - 1970;
    }


    function displayResponse(response) {

  

    var resAray = response.split("--");
    var itemsArrays = resAray[0].split("||");
    var addressArray = resAray[1].split("###");
   
 var res_html = " <h1>Thank you for your order</h1>" +
         "<br/>" ;
         res_html += "<h2>Items List</h2>";
       res_html+=  "<div id='confirmation_content'>"; 
         res_html+= "<table id = 'items'>";
                 res_html+= "<tr>";
                      res_html+= "<th>Name</th><th>Quantity</th><th>Price</th>";
                     res_html+= "</tr>";
var total=0;
    for (var i = 0; i < itemsArrays.length-1; i++) {
        var itemArray = itemsArrays[i].split("|");
                      res_html += "<tr>";
                        res_html +=  "<td>"+itemArray[0]+"</td>";
                        res_html +=  "<td>"+itemArray[1]+"</td>";
                        res_html +=  "<td>$"+itemArray[2]+"</td>";
                     res_html += "</tr>";
                     total +=parseFloat(itemArray[2]);
    }
      res_html += "<tr>";
                        res_html +=  "<td></td>";
                        res_html +=  "<td>Total</td>";
                        res_html +=  "<td>$"+total.toFixed(2)+"</td>";
                     res_html += "</tr>";
                      res_html += "<tr>";
                        res_html +=  "<td></td>";
                        res_html +=  "<td>Shipment charges</td>";
                        res_html +=  "<td>$2</td>";
                     res_html += "</tr>";
                     var tax = 0.08*total;
                    var tax_total = total + 2 + tax;
                      res_html += "<tr>";
                        res_html +=  "<td></td>";
                        res_html +=  "<td>Grand Total</td>";
                        res_html +=  "<td>$"+tax_total.toFixed(2)+"</td>";
                     res_html += "</tr>";

    res_html+= "</table>";
          res_html+= "</br>";
          res_html+="<div id = ba>"
res_html += "<h2>Billing Address</h2>";
 res_html+=   "<table id = 'billing_addr' class = 'addr'>" ;
              
        var bAddrArr = addressArray[0].split("@@");
         for (var i = 0; i < bAddrArr.length-5; i++) {
             var bAddrArray = bAddrArr[i].split("@");
            if( bAddrArray.length ==2 ){
              res_html += "<tr>";
             res_html+=  "<td>"+bAddrArray[1]+"</td>";
            res_html+= "</tr>";
                 }
             }
             res_html+= "</table>";
             for(var i=7 ; i <=9 ; i++){
                var bAddrArray = bAddrArr[i].split("@");
            if(bAddrArray.length ==2){
             res_html+=  bAddrArray[1];
            
                 }
             }
             
     res_html+="</div>";

 res_html+="<div id = sa>"
   res_html += "<h2>Shipping Address</h2>";
 res_html+=   "<table id = 'shipping_addr'  class = 'addr'>" ;
              
        var sAddrArr = addressArray[1].split("@@");
         
         for (var i = 0; i < sAddrArr.length -5; i++) {
            var sAddrArray = sAddrArr[i].split("@");
             if(sAddrArray.length ==2){
        res_html += "<tr>";
             res_html+=  "<td>"+sAddrArray[1]+"</td>";
            res_html+= "</tr>";
                 }
             }
 res_html+= "</table>";
  res_html+= "<p>";
                         for(var i=7 ; i <=9 ; i++){
                var sAddrArray = sAddrArr[i].split("@");
            if(sAddrArray.length ==2){
             res_html+=  sAddrArray[1];
            
                 }
             }
              res_html+= "</p>";

          
          res_html+= "</br>";
           res_html+="</div >";

 res_html+="<div id = 'pa'>";
 res_html += "<h2>Payment Info</h2>";
 res_html+=   "<table id = pay_info class = 'addr'>" ;
 var pAddrArr = addressArray[2].split("@@");

var pAddrArray = pAddrArr[0].split("@");
 res_html += "<tr>";
             res_html+=  "<td>"+pAddrArray[1]+"</td>";

var pAddrArray = pAddrArr[1].split("@");
res_html+=  "<td>xxxxxxxxxxxx";
             for(var i=12;i<pAddrArray[1].length ;i++)
                {
                    res_html+=pAddrArray[1][i];
                }
                res_html+="</td>";
            res_html+= "</tr>";


             res_html+= "</table>";
             res_html+="<a href = 'ajax_populate_page.html?name=milk' ><input type='button' value='Go back' /></a>";
          res_html+= "</br>";
          res_html+="</div >"

               res_html+="</div>";



    $('#content_f')[0].innerHTML = res_html;
}

function isInt(n) {
  var res = n.split(".");
  if( res.length==1){
    return true;
  }
  else
    return false;

}

