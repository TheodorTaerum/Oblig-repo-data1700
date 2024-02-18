const kjopRegistrer = []; // Lager et array som jeg skal bruke i resten av koden

function KjopRegistrer() {
    let ut = "<table><tr>" + //Oppretter "ut" meldingen som skal vise de kjøpte billettene
        "<th>Film</th>  <th>Antall</th> <th>Fornavn</th>    <th>Etternavn</th>  <th>Telefonnr</th>  <th>Epost</th>" +
        "</tr>";
    // henter verdier input boksene
    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;
// oppretter billetten som skal inneholde denne informasjonen
    const billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        telefonnr: telefonnr,
        epost: epost
    }; // validering av alle inputtene. Ved telefonnummer er det også brukt validering for formatering.
    if (film === "Velg film her"){ //Bruker denne slik at man må velgen en film
        document.getElementById("ErrorFilm").textContent = "Du må velge en film!"
        return;
    } else {
        document.getElementById("ErrorFilm").textContent = "";
    }
    if (antall === "" || antall <= 0) {
        document.getElementById("ErrorAntall").textContent = "Antallet må være minst 1"
        return;
    } else {
        document.getElementById("ErrorAntall").textContent = "";
    }
    if (fnavn === ""){
        document.getElementById("ErrorFnavn").textContent = "Du må fylle inn navn!"
        return;
    } else {
        document.getElementById("ErrorFnavn").textContent = "";
    }
    if (enavn === ""){
        document.getElementById("ErrorEnavn").textContent = "Du må fylle inn navn!"
        return;
    } else {
        document.getElementById("ErrorEnavn").textContent = "";
    }
    if (telefonnr === ""){
        document.getElementById("ErrorTelefonnr").textContent = "Du må fylle inn telefonnummer!"
        return;
    } else if (!NummerValidation(telefonnr)){
        document.getElementById("ErrorTelefonnr").textContent = "Du må skrive inn et gylding telefonnr (8 siffer)"
        return;
    }
    else {
        document.getElementById("ErrorTelefonnr").textContent = "";
    }
    if (epost === ""){
        document.getElementById("ErrorEpost").textContent = "Du må fylle inn epost!"
        return;
    }
    else if (!EpostValidation(epost)) {
        document.getElementById("ErrorEpost").textContent="Du har skrevet inn en ugylding epostadresse!";
        return;
    }else{
        document.getElementById("ErrorEpost").textContent = "";
    }

    kjopRegistrer.push(billett);
// oppdaterer tabellen (skriver ut billetten)
    for (let p of kjopRegistrer) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fnavn + "</td><td>" + p.enavn + "</td>" +
            "<td>" + p.telefonnr + "</td><td>" + p.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("kjopRegistrer").innerHTML = ut;
// tømmer input feltene, utenom "Velg film" som blir gjort tilbake til "start"
    document.getElementById("filmer").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}
function slettAlle() { // tømmer arrayet (fra position 0, til lengden av arrayet)
    kjopRegistrer.splice(0, kjopRegistrer.length);
    location.reload();
}
function EpostValidation(epost){ // valideringen sørger for at man må ha med "@" og "."
    return /\S+@\S+.\S+/.test(epost);
}
function NummerValidation(telefonnr){ // validering av telefonnummer for å sørge for at det er 8 siffer.
    return telefonnr.match(/\d/g).length===8;
}