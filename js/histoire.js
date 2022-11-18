var txt01 = datas.txt01;
    var txt02 = datas.txt02;
    var txt03 = datas.txt03;
    var txt04 = datas.txt04;
    var txt05 = datas.txt05;

    var txtA = datas.txtA;
    var txtB = datas.txtB;
    var txtC = datas.txtC;
    var txtD = datas.txtD;
    var txtE = datas.txtE;

    var nom01 = datas.members[0]['nom'];
    var nom02 = datas.members[1]['nom'];
    var nom03 = datas.members[2]['nom'];
    var nom04 = datas.members[3]['nom'];
    var nom05 = datas.members[4]['nom'];

    var famille01 = "Blason"+datas.members[0]['famille']+".png";
    var famille02 = "Blason"+datas.members[1]['famille']+".png";
    var famille03 = "Blason"+datas.members[2]['famille']+".png";
    var famille04 = "Blason"+datas.members[3]['famille']+".png";
    var famille05 = "Blason"+datas.members[4]['famille']+".png";

    var bio01 = datas.members[0]['bio'];
    var bio02 = datas.members[1]['bio'];
    var bio03 = datas.members[2]['bio'];
    var bio04 = datas.members[3]['bio'];
    var bio05 = datas.members[4]['bio'];

    var episodes01 = datas.members[0]['episodes'];
    var episodes02 = datas.members[1]['episodes'];
    var episodes03 = datas.members[2]['episodes'];
    var episodes04 = datas.members[3]['episodes'];
    var episodes05 = datas.members[4]['episodes'];

    var acteur01 = datas.members[0]['acteur'];
    var acteur02 = datas.members[1]['acteur'];
    var acteur03 = datas.members[2]['acteur'];
    var acteur04 = datas.members[3]['acteur'];
    var acteur05 = datas.members[4]['acteur'];

    var A1 = datas.members[0]['scenarios'][0];
    var A2 = datas.members[0]['scenarios'][1];
    var A3 = datas.members[0]['scenarios'][2];
    var A4 = datas.members[0]['scenarios'][3];
    var A5 = datas.members[0]['scenarios'][4];

    var B1 = datas.members[1]['scenarios'][0];
    var B2 = datas.members[1]['scenarios'][1];
    var B3 = datas.members[1]['scenarios'][2];
    var B4 = datas.members[1]['scenarios'][3];
    var B5 = datas.members[1]['scenarios'][4];

    var C1 = datas.members[2]['scenarios'][0];
    var C2 = datas.members[2]['scenarios'][1];
    var C3 = datas.members[2]['scenarios'][2];
    var C4 = datas.members[2]['scenarios'][3];
    var C5 = datas.members[2]['scenarios'][4];

    var D1 = datas.members[3]['scenarios'][0];
    var D2 = datas.members[3]['scenarios'][1];
    var D3 = datas.members[3]['scenarios'][2];
    var D4 = datas.members[3]['scenarios'][3];
    var D5 = datas.members[3]['scenarios'][4];

    var E1 = datas.members[4]['scenarios'][0];
    var E2 = datas.members[4]['scenarios'][1];
    var E3 = datas.members[4]['scenarios'][2];
    var E4 = datas.members[4]['scenarios'][3];
    var E5 = datas.members[4]['scenarios'][4];
    

   

    console.log(txt01);
    console.log(txtA);
    console.log(A1);
    console.log(nom01);
    console.log(famille01);

    var form = document.querySelector("form#toto");
    var bouton = document.querySelector("#bouton");



    form.addEventListener("submit", function(event) {
  		  var data = new FormData(form);
  		  var output = "";



  		var perso01 = document.getElementById('perso01').value;
        var perso02 = document.getElementById('perso02').value;
        var perso03 = document.getElementById('perso03').value;
        var perso04 = document.getElementById('perso04').value;
        var perso05 = document.getElementById('perso05').value;

        var objet01 = document.getElementById('objet01').value;
        var objet02 = document.getElementById('objet02').value;
        var objet03 = document.getElementById('objet03').value;
        var objet04 = document.getElementById('objet04').value;
        var objet05 = document.getElementById('objet05').value;


  		  
  		  var SelectRadio = '';
  		  for (const entry of data) {
    			console.log(entry);
    			SelectRadio += entry[1];
    			event.preventDefault();
  		  };


// <!-- :::::::::::::::::  PERSO 1 :::::::::::::::::::::: -->

  		if (SelectRadio == (perso01+objet01)){
  			document.getElementById('done').innerHTML = "<h1>"+nom01+"</h1>"+"<img src='css/images/visutitreDrag.png'/>"+"<p>"+txt01+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtA+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+A1+"</p><img class='blasons' src='css/images/"+famille01+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio01+"</p><p>"+episodes01+"</p><i>"+acteur01+"</i>"+"<hr>";
  		  }
        else if (SelectRadio == (perso01+objet02)){
        document.getElementById('done').innerHTML = "<h1>"+nom01+"</h1>"+"<img src='css/images/visutitreZom.png'/>"+"<p>"+txt01+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtB+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+A2+"</p><img class='blasons' src='css/images/"+famille01+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio01+"</p><p>"+episodes01+"</p><i>"+acteur01+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso01+objet03)){
        document.getElementById('done').innerHTML = "<h1>"+nom01+"</h1>"+"<img src='css/images/visutitreEpee.png'/>"+"<p>"+txt01+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtC+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+A3+"</p><img class='blasons' src='css/images/"+famille01+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio01+"</p><p>"+episodes01+"</p><i>"+acteur01+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso01+objet04)){
        document.getElementById('done').innerHTML = "<h1>"+nom01+"</h1>"+"<img src='css/images/visutitreGant.png'/>"+"<p>"+txt01+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtD+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+A4+"</p><img class='blasons' src='css/images/"+famille01+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio01+"</p><p>"+episodes01+"</p><i>"+acteur01+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso01+objet05)){
        document.getElementById('done').innerHTML = "<h1>"+nom01+"</h1>"+"<img src='css/images/visutitreMont.png'/>"+"<p>"+txt01+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtE+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+A5+"</p><img class='blasons' src='css/images/"+famille01+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio01+"</p><p>"+episodes01+"</p><i>"+acteur01+"</i>"+"<hr>";
        }

// <!-- :::::::::::::::::  PERSO 2 :::::::::::::::::::::: -->

        else if (SelectRadio == (perso02+objet01)){
        document.getElementById('done').innerHTML = "<h1>"+nom02+"</h1>"+"<img src='css/images/visutitreDrag.png'/>"+"<p>"+txt02+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtA+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+B1+"</p><img class='blasons' src='css/images/"+famille02+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio02+"</p><p>"+episodes02+"</p><i>"+acteur02+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso02+objet02)){
         document.getElementById('done').innerHTML = "<h1>"+nom02+"</h1>"+"<img src='css/images/visutitreZom.png'/>"+"<p>"+txt02+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtB+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+B2+"</p><img class='blasons' src='css/images/"+famille02+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio02+"</p><p>"+episodes02+"</p><i>"+acteur02+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso02+objet03)){
        document.getElementById('done').innerHTML = "<h1>"+nom02+"</h1>"+"<img src='css/images/visutitreEpee.png'/>"+"<p>"+txt02+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtC+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+B3+"</p><img class='blasons' src='css/images/"+famille02+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio02+"</p><p>"+episodes02+"</p><i>"+acteur02+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso02+objet04)){
        document.getElementById('done').innerHTML = "<h1>"+nom02+"</h1>"+"<img src='css/images/visutitreGant.png'/>"+"<p>"+txt02+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtD+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+B4+"</p><img class='blasons' src='css/images/"+famille02+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio02+"</p><p>"+episodes02+"</p><i>"+acteur02+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso02+objet05)){
        document.getElementById('done').innerHTML = "<h1>"+nom02+"</h1>"+"<img src='css/images/visutitreMont.png'/>"+"<p>"+txt02+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtE+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+B5+"</p><img class='blasons' src='css/images/"+famille02+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio02+"</p><p>"+episodes02+"</p><i>"+acteur02+"</i>"+"<hr>";
        }

// <!-- :::::::::::::::::  PERSO 3 :::::::::::::::::::::: -->

        else if (SelectRadio == (perso03+objet01)){
        document.getElementById('done').innerHTML = "<h1>"+nom03+"</h1>"+"<img src='css/images/visutitreDrag.png'/>"+"<p>"+txt03+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtA+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+C1+"</p><img class='blasons' src='css/images/"+famille03+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio03+"</p><p>"+episodes03+"</p><i>"+acteur03+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso03+objet02)){
        document.getElementById('done').innerHTML = "<h1>"+nom03+"</h1>"+"<img src='css/images/visutitreZom.png'/>"+"<p>"+txt03+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtB+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+C2+"</p><img class='blasons' src='css/images/"+famille03+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio03+"</p><p>"+episodes03+"</p><i>"+acteur03+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso03+objet03)){
        document.getElementById('done').innerHTML = "<h1>"+nom03+"</h1>"+"<img src='css/images/visutitreEpee.png'/>"+"<p>"+txt03+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtC+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+C3+"</p><img class='blasons' src='css/images/"+famille03+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio03+"</p><p>"+episodes03+"</p><i>"+acteur03+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso03+objet04)){
        document.getElementById('done').innerHTML = "<h1>"+nom03+"</h1>"+"<img src='css/images/visutitreGant.png'/>"+"<p>"+txt03+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtD+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+C4+"</p><img class='blasons' src='css/images/"+famille03+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio03+"</p><p>"+episodes03+"</p><i>"+acteur03+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso03+objet05)){
        document.getElementById('done').innerHTML = "<h1>"+nom03+"</h1>"+"<img src='css/images/visutitreMont.png'/>"+"<p>"+txt03+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtE+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+C5+"</p><img class='blasons' src='css/images/"+famille03+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio03+"</p><p>"+episodes03+"</p><i>"+acteur03+"</i>"+"<hr>";
        }

// <!-- :::::::::::::::::  PERSO 4 :::::::::::::::::::::: -->

        else if (SelectRadio == (perso04+objet01)){
        document.getElementById('done').innerHTML = "<h1>"+nom04+"</h1>"+"<img src='css/images/visutitreDrag.png'/>"+"<p>"+txt04+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtA+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+D1+"</p><img class='blasons' src='css/images/"+famille04+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio04+"</p><p>"+episodes04+"</p><i>"+acteur04+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso04+objet02)){
        document.getElementById('done').innerHTML = "<h1>"+nom04+"</h1>"+"<img src='css/images/visutitreZom.png'/>"+"<p>"+txt04+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtB+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+D2+"</p><img class='blasons' src='css/images/"+famille04+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio04+"</p><p>"+episodes04+"</p><i>"+acteur04+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso04+objet03)){
        document.getElementById('done').innerHTML = "<h1>"+nom04+"</h1>"+"<img src='css/images/visutitreEpee.png'/>"+"<p>"+txt04+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtC+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+D3+"</p><img class='blasons' src='css/images/"+famille04+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio04+"</p><p>"+episodes04+"</p><i>"+acteur04+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso04+objet04)){
       document.getElementById('done').innerHTML = "<h1>"+nom04+"</h1>"+"<img src='css/images/visutitreGant.png'/>"+"<p>"+txt04+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtD+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+D4+"</p><img class='blasons' src='css/images/"+famille04+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio04+"</p><p>"+episodes04+"</p><i>"+acteur04+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso04+objet05)){
        document.getElementById('done').innerHTML = "<h1>"+nom04+"</h1>"+"<img src='css/images/visutitreMont.png'/>"+"<p>"+txt04+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtE+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+D5+"</p><img class='blasons' src='css/images/"+famille04+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio04+"</p><p>"+episodes04+"</p><i>"+acteur04+"</i>"+"<hr>";
        }

// <!-- :::::::::::::::::  PERSO 5 :::::::::::::::::::::: -->

        else if (SelectRadio == (perso05+objet01)){
        document.getElementById('done').innerHTML = "<h1>"+nom05+"</h1>"+"<img src='css/images/visutitreDrag.png'/>"+"<p>"+txt05+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtA+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+E1+"</p><img class='blasons' src='css/images/"+famille05+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio05+"</p><p>"+episodes05+"</p><i>"+acteur05+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso05+objet02)){
        document.getElementById('done').innerHTML = "<h1>"+nom05+"</h1>"+"<img src='css/images/visutitreZom.png'/>"+"<p>"+txt05+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtB+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+E2+"</p><img class='blasons' src='css/images/"+famille05+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio05+"</p><p>"+episodes05+"</p><i>"+acteur05+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso05+objet03)){
        document.getElementById('done').innerHTML = "<h1>"+nom05+"</h1>"+"<img src='css/images/visutitreEpee.png'/>"+"<p>"+txt05+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtC+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+E3+"</p><img class='blasons' src='css/images/"+famille05+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio05+"</p><p>"+episodes05+"</p><i>"+acteur05+"</i>"+"<hr>";
        }
         else if (SelectRadio == (perso05+objet04)){
        document.getElementById('done').innerHTML = "<h1>"+nom05+"</h1>"+"<img src='css/images/visutitreGant.png'/>"+"<p>"+txt05+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtD+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+E4+"</p><img class='blasons' src='css/images/"+famille05+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio05+"</p><p>"+episodes05+"</p><i>"+acteur05+"</i>"+"<hr>";
        }
        else if (SelectRadio == (perso05+objet05)){
        document.getElementById('done').innerHTML = "<h1>"+nom05+"</h1>"+"<img src='css/images/visutitreMont.png'/>"+"<p>"+txt05+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+txtE+"<br/><img class='separation' src='css/images/separation.png'/><br/>"+E5+"</p><img class='blasons' src='css/images/"+famille05+"'/><h2>"+"Sur le personnage"+"</h2>"+"<p>"+bio05+"</p><p>"+episodes05+"</p><i>"+acteur05+"</i>"+"<hr>";
        }
 
  		  else{
  			document.getElementById('done').innerHTML = "";
  		  }
			 window.location.assign('#logo');
    },
    false);