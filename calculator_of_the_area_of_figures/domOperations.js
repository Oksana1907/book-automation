function showResultInDomKvadrat() {
    let dlinaStoroniKvadrata = document.getElementById('dlinaStoroniKvadrata').value;

    document.getElementById('ploschadKvadrata').innerHTML = calcVolumeKvadrat(dlinaStoroniKvadrata);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function showResultInDomPriamougolnika() {
    let pervayaStoronaPriamougolnika = document.getElementById('pervayaStoronaPriamougolnika').value;
    let drugayaStoronaPriamougolnika = document.getElementById('drugayaStoronaPriamougolnika').value;
    
    document.getElementById('ploschadPriamougolnika').innerHTML = calcVolumePriamougolnika(pervayaStoronaPriamougolnika,drugayaStoronaPriamougolnika);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function showResultInDomParalelograma() {
    let dlinaStoronyParalelograma = document.getElementById('dlinaStoronyParalelograma').value;
    let dlinaVisotyParalelograma = document.getElementById('dlinaVisotyParalelograma').value;
    
    document.getElementById('ploschadParalelograma').innerHTML = calcVolumeParalelograma(dlinaStoronyParalelograma,dlinaVisotyParalelograma);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function showResultInDomRomba() {
    let dlinaStoronyRomba = document.getElementById('dlinaStoronyRomba').value;
    let dlinaVisotyRomba = document.getElementById('dlinaVisotyRomba').value;
    
    document.getElementById('ploschadRomba').innerHTML = calcVolumeRomba(dlinaStoronyRomba,dlinaVisotyRomba);
};

