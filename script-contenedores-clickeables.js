    
    // Array de contenedores y URLs correspondientes servicios
const contenedores = [
    { selector: '.alambre-de-pua-contenedor', link: 'https://mallasantioquia.com/producto/alambre-de-pua' },
    { selector: '.angulo-contenedor', link: 'https://mallasantioquia.com/producto/angulo' },
    { selector: '.puerta-contenedor', link: 'https://mallasantioquia.com/producto/puerta' },
    { selector: '.malla-ondulada-contenedor', link: 'https://mallasantioquia.com/producto/malla-ondulada' }, 
    { selector: '.tuberia-contenedor', link: 'https://mallasantioquia.com/producto/tuberia' }
];

// Asigna el evento de clic a cada contenedor
contenedores.forEach(contenedor => {
    const element = document.querySelector(contenedor.selector);
    if (element) {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
            window.location.href = contenedor.link;
        });
    }
});
