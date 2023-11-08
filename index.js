const fs = require("fs");
const pdfDoc = require("pdfkit");

const doc = new pdfDoc({ size: "B5", margin: 20});

// Metadane
doc.info['Title'] = 'Dokument PDF z przykładem';
doc.info['Author'] = 'Kacper Filipiak';

doc.pipe(fs.createWriteStream("dokument.pdf"));

// doc.lineGap(0.5);
doc.registerFont("lato", "./assets/Lato-Regular.ttf");


// Dodanie obrazu
doc.image('./assets/zse-logo.png', {
    width: doc.page.width * 0.3,
    align: 'left',
    valign: 'top'
});


// Tytuł
doc.font('lato').fontSize(20);
doc.text('Zespół Szkół Elektrycznych', 200, 80, {align: 'center'});

// Autor
doc.font('lato').fontSize(16);
doc.text('4TP Kacper Filipiak',200, 105, {align: 'center'});




// Lista
doc.moveDown();

doc.font('lato').fontSize(14);
doc.text('Znane mi technologie Web:',125, 200, { underline: true });

doc.moveDown();
doc.font('lato').fontSize(12);
doc.list(['HTML5, CSS3, ES6', 'Joomla, WordPress, PrestaShop', 'Node.js i React'] , {bulletRadius: 2});

doc.fillColor('blue').text("• Więcej", {link: "google.com", underline: true});


doc.end();

console.log('Dokument PDF został wygenerowany.');
