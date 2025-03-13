<div>
  <canvas id="currencyChart"></canvas>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const ctx = document.getElementById('currencyChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['USD', 'EUR', 'GBP', 'JPY', 'AUD'],
        datasets: [{
          label: 'Exchange Rates',
          data: [1, 0.85, 0.75, 110, 1.35], // Example data
          borderColor: '#3b82f6',
          fill: false,
        }]
      }
    });
  </script>
</div>