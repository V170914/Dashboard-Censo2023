// Seleciona o canvas
const ctx = document.getElementById('graficoMatriculado');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Município A', 'Município B', 'Município C'],
      datasets: [{
        label: 'Alunos matriculados em 2023',
        data: [1200, 950, 1600],
        backgroundColor: '#1abc9c'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        x: {
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#1abc9c' }
        }
      }
    }
  });
} else {
  console.error("Canvas 'graficoMatriculado' não encontrado!");
}
