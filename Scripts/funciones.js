document.getElementById('Habilidades').style.display = 'none';
document.getElementById('Formacion').style.display = 'none';
 
document.getElementById('exp').addEventListener('click', function(){
    document.getElementById('Experiencia').style.display = '';
    document.getElementById('Habilidades').style.display = 'none';
    document.getElementById('Formacion').style.display = 'none';
});

document.getElementById('hab').addEventListener('click', function(){
    document.getElementById('Experiencia').style.display = 'none';
    document.getElementById('Habilidades').style.display = '';
    document.getElementById('Formacion').style.display = 'none';
});

document.getElementById('form').addEventListener('click', function(){
    document.getElementById('Experiencia').style.display = 'none';
    document.getElementById('Habilidades').style.display = 'none';
    document.getElementById('Formacion').style.display = '';
});

