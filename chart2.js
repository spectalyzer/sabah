var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Therapist', 'Web Designer', 'System Developer', 'Data Analyst', 'Coordinator', 'Data Collector'],

        datasets: [{
            label: 'Team',
            data: [3, 2, 2, 1, 1, 1],
            backgroundColor: [
                'rgba(12, 109, 50, 1)',
                'rgba(54, 162, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)',
                'rgba(12, 46, 139,1)',
                'rgba(200, 46, 139,1)'

            ],
            borderColor: [
                'rgba(12, 109, 50, 1)',
                'rgba(54, 162, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)',
                'rgba(12, 46, 139,1)',
                'rgba(200, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});