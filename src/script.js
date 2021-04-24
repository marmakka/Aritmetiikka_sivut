





document.addEventListener('submit', (e) => {
    e.preventDefault();
    uusiLasku();

});


function uusiLasku() {
    {
    const ekaElementti = document.getElementById('eka');
    const merkkiElementti = document.getElementById('merkki');
    const tokaElementti = document.getElementById('toka');
    const vastausElementti = document.getElementById('vastaus');
    const harjoitus = document.getElementById('harjoitus');
    const showAnswer= document.getElementById("oikeinVaiEi");
    const vastaukset =document.getElementById("vastausAlue");
     
    showAnswer.textContent="";
    vastaukset.value=""
    vastaukset.focus();
    const ekaLuku = getRandomInt(11);
    const tokaLuku = getRandomInt(11);
    if (harjoitus.textContent==="Yhteenlasku") 
            {   merkkiElementti.textContent = " + ";
                vastaus = ekaLuku + tokaLuku;
            };
    if (harjoitus.textContent==="Vähennyslasku")
            {   merkkiElementti.textContent = " - ";
                vastaus = ekaLuku - tokaLuku;
            };
    if (harjoitus.textContent==="Kertolasku")
            {   merkkiElementti.textContent = " * ";
                vastaus = ekaLuku * tokaLuku;
            };
    if (harjoitus.textContent==="Jakolasku")
            {   merkkiElementti.textContent = " / ";
                vastaus = ekaLuku / tokaLuku;
            };
    ekaElementti.textContent = ekaLuku;
    tokaElementti.textContent = tokaLuku;
    vastausElementti.textContent = "= ?";
    }
}

function Tarkistus() {
    const harjoitus = document.getElementById('harjoitus');
    const vastattiin = parseInt(document.getElementById("vastausAlue").value); 
    const showAnswer= document.getElementById("oikeinVaiEi"); 
    const ekaLuku = document.getElementById('eka');
    const tokaLuku = document.getElementById('toka');
    eka=parseInt(ekaLuku.textContent);
    toka=parseInt(tokaLuku.textContent);
    
    if (harjoitus.textContent==="Yhteenlasku") 
            {   
                oikeaVastaus = eka + toka;
            };
    if (harjoitus.textContent==="Vähennyslasku")
            {   
                oikeaVastaus = eka - toka;
            };
    if (harjoitus.textContent==="Kertolasku")
            {   
                oikeaVastaus = eka * toka;
            };
    if (harjoitus.textContent==="Jakolasku")
            {   
                oikeaVastaus = eka / toka;
            };


    console.log(oikeaVastaus, vastattiin);

    if(vastattiin===oikeaVastaus) {
        showAnswer.textContent="Oikein!";
    } else
    {
        showAnswer.textContent="Oikea vastaus on "+oikeaVastaus;

    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


/*
function pipelipom() {
   if (harjoittelijanNimi==="Hep") 
        then {
            const userNimi = harjoittelija.value.trim();
            const oppilasElementti = document.getElementById('oppilas');
            harjoittelijanNimi=userNimi;
            oppilasElementti.textContent = harjoittelijanNimi
        } else {
            harjoittelijanNimi="Kekkonen";
            oppilasElementti.textContent = harjoittelijanNimi;
        }

   }
*/
/* 
function pipelipom() {
             const userNimi = harjoittelija.value.trim();
             const oppilasElementti = document.getElementById('oppilas');
             harjoittelijanNimi=userNimi;
             oppilasElementti.textContent = harjoittelijanNimi
     }
*/



        