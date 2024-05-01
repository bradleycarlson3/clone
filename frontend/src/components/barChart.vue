<template>
  <div>
    <canvas class="p-10" ref="attendanceChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables, Colors } from 'chart.js';

Chart.register(...registerables);
Chart.register(Colors);

export default {
  props: {
    label: {
      type: Array,
      required: true,
    },
    chartData: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const attendanceChart = ref(null);

    onMounted(() => {
      const chartInstance = new Chart(attendanceChart.value, {
        type: 'bar',
        data: {
          labels: props.label,
          datasets: [
            {
              borderWidth: 1,
              data: props.chartData,
            },
          ],
        },
        options: {
          scales: {
            y: {
              ticks: {
                stepSize: 1,
              },
            },
            x: {
              gridLines: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Attendance Chart',
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        },
      });

      watch(
        () => [props.label, props.chartData],
        ([newLabels, newData]) => {
          chartInstance.data.labels = newLabels;
          chartInstance.data.datasets[0].data = newData;
          chartInstance.update();
        }
      );
    });

    return { attendanceChart };
  },
};
</script>
