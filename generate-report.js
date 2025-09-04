const { execSync } = require('child_process');
const fs = require('fs');

const reportTitle = 'Reporte de Pruebas Titulo 2';

// Validar que el archivo de reporte JSON exista
const reportFile = 'mochawesome-report.json';
if (!fs.existsSync(reportFile)) {
  console.error(`❌ Error: El archivo de reporte '${reportFile}' no se encontró. Asegúrate de que los tests de Cypress se hayan ejecutado y que 'mochawesome-merge' haya funcionado correctamente.`);
  process.exit(1);
}

// Construir el comando con los flags correctos
const command = `marge ${reportFile} -o cypress/reports --reportPageTitle "${reportTitle}" --embeddedScreenshots --inlineAssets --show-logs --quiet`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Reporte generado exitosamente.');
} catch (error) {
  console.error('❌ Error al generar el reporte:', error.message);
  process.exit(1);
}
