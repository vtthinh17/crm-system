<template>
  <div v-if="userToken !== ''">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 gap-x-2 mx-3 pt-2">

      <a-card title="Earning" :bordered="false">
        <div class="text-2xl font-bold">$425,200</div>
        <p class="text-xs text-muted-foreground">+5% this month</p>
      </a-card>
      <a-card title="Customer" :bordered="false">
        <div class="text-2xl font-bold">2400</div>
        <p class="text-xs text-muted-foreground">
          +150 new customer
        </p>
      </a-card>
      <a-card title="Total products" :bordered="false">
        <div class="text-2xl font-bold">24</div>
      </a-card>
      <a-card title="Orders" :bordered="false">
        <div class="text-2xl font-bold">1866</div>
        <div class="grid grid-cols-9">
          <div class="col-span-3 flex flex-col">
            <p class="text-green-400 font-medium">Success</p>
            <p class="text-medium font-semibold">1680</p>
          </div>
          <div class="col-span-3 flex flex-col">
            <p class="text-gray-400 font-medium">Pending</p>
            <p class="text-medium font-semibold">170</p>
          </div>
          <div class="col-span-3 flex flex-col">
            <p class="text-red-400 font-medium">Cancel</p>
            <p class="text-medium font-semibold">23</p>
          </div>
        </div>
      </a-card>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-10 gap-x-2 mx-3 py-2">
      <!-- Chart -->
      <a-card class="col-span-4 md:col-span-6" title="Earning Analytics" :bordered="false">
        <div class="md:col-span-4">
          <div v-if="currentChartType == 'week'">
            <Bar :data="data" :options="options" class="md:w-full" />

            <p class="flex justify-center pt-10 text-lg font-semibold">Chart shows order in week</p>
          </div>
          <div v-else>
            <Line :data="data" :options="options" class="md:w-full" />

            <p class="flex justify-center pt-10 text-lg font-semibold">Chart show statics order in month</p>
          </div>



        </div>
        <!-- Selection for chart type: Week, Month, Year -->
        <template #extra>
          <a-dropdown :trigger="['hover']" :placement="'bottom'">
            <a class="ant-dropdown-link font-sans font-bold bg-neutral-200 rounded-md p-1" @click.prevent>
              This {{ currentChartType }}
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item :key="item.no" v-for="item in chartTypes" @click="changeChartType(item.type)">
                  <p>This {{ item.type }}</p>
                </a-menu-item>


              </a-menu>
            </template>
          </a-dropdown>

        </template>
      </a-card>

      <!-- Recent orders -->
      <a-card class="col-span-6 md:col-span-4" title="Recent Orders" :bordered="false">
        <a-list size="large" :bordered="false" :data-source="recentOrders" class="w-full">
          <template #renderItem="{ item }">
            <a-list-item>
              <div class="flex flex-col">
                <p class="text-gray-400 font-bold">{{ item.orderID }}</p>
                <div class="grid grid-cols-5">
                  <div class="col-span-2 font-bold">{{ item.totalPrice }}$ </div>
                  <div class="col-span-3">{{ item.atTime }}</div>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </div>
  </div>
  <div v-else>
    <a-result status="403" title="Sorry, you are not authorized to access this page">
      <template #extra>
        <a-button type="primary" @click="clickA">Login/Register</a-button>
      </template>
    </a-result>


  </div>
</template>
<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Bar, Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement)

export default {
  components: {
    Bar, Line
  },
  data() {
    return {
      userToken: '',
      chartTypes: [
        {
          no: "0",
          type: "week"
        },
        {
          no: "1",
          type: "year"
        },
      ],
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Order',
            data: [40, 20, 12, 50, 124, 69, 89],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 0.5)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          }
        ]
      },
      currentChartType: "week",
      recentOrders: [
        {
          orderID: '#001',
          totalPrice: 49.99,
          atTime: '17:24 16/04/2024'
        },
        {
          orderID: '#002',
          totalPrice: 109.99,
          atTime: '09:30 16/04/2024'
        },
        {
          orderID: '#003',
          totalPrice: 32.99,
          atTime: '21:03 19/04/2024'
        },
        {
          orderID: '#004',
          totalPrice: 50.00,
          atTime: '07:56 14/04/2024'
        },
        {
          orderID: '#005',
          totalPrice: 32.99,
          atTime: '21:03 19/04/2024'
        },
        {
          orderID: '#006',
          totalPrice: 50.00,
          atTime: '07:56 14/04/2024'
        },
      ],
      options: {
        responsive: false,
        maintainAspectRatio: true,
        fill: true,
      }


    }

  },
  mounted() {
    let localStorageData = localStorage.getItem('user_token');
    if (localStorageData !== null) {
      this.userToken = localStorageData;
    }
    console.log(this.$route.fullPath);
  },
  methods: {
    clickA() {
      navigateTo('/auth/login')
    },
    changeChartType(type: string) {
      this.currentChartType = type;
      if (type == 'week') {
        this.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.data.datasets = [
          {
            label: 'Order',
            data: [40, 20, 12, 50, 124, 69, 89],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 0.5)',
            ],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
          }
        ]
      } else {
        this.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.data.datasets = [
          {
            label: 'Order',
            data: [40, 20, 12, 50, 124, 69, 89, 104, 92, 160, 128, 77,],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(67, 162, 255, 0.2)',
              'rgba(91, 53, 207, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(43, 212, 255, 0.2)',
              'rgba(178, 53, 207, 0.2)',
            ],
            borderWidth: 4,
            borderColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(255, 159, 64, 0.9)',
              'rgba(255, 205, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(201, 203, 207, 0.9)',
              'rgba(67, 162, 255, 0.9)',
              'rgba(91, 53, 207, 0.9)',
              'rgba(201, 203, 207, 0.9)',
              'rgba(43, 212, 255, 0.9)',
              'rgba(178, 53, 207, 0.9)',
            ]
          }
        ]
      }
    }
  },
  computed: {
    dataChart(): object {
      return this.data;
    }
  }
}
</script>