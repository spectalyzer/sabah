var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['School Day', 'Off Day'],

        datasets: [{
            label: 'School',
            data: [10, 20],
            backgroundColor: [
                'rgba(12, 109, 50, 1)',
                'rgba(54, 162, 0, 1)'

            ],
            borderColor: [
                'rgba(12, 109, 50, 1)',
                'rgba(54, 162, 0, 1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});