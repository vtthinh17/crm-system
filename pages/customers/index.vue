<template>
    {{ console.log(items) }}
    <!-- <a-table :columns="columns" :data-source="data" @change="handleChange">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
                <a-dropdown>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="1" @click="handleViewProfile(record.name)">
                                <UserOutlined />
                                View profile
                            </a-menu-item>
                            <a-menu-item key="2">
                                <UserOutlined />
                                2nd menu item
                            </a-menu-item>
                        </a-menu>
                    </template>
                    <a-button>
                        More action
                        <DownOutlined />
                    </a-button>
                </a-dropdown>
                <span>


                </span>
            </template>
        </template>
    </a-table> -->
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
import { computed, ref } from 'vue';

export default {
    data() {
        return {
            filteredInfo: '',
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    filterSearch: true,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    sorter: (a:any, b:any) => a.age - b.age,
                },
                {
                    title: 'Gender',
                    dataIndex: 'gender',
                    key: 'gender',
                    filters: [
                        { text: 'Male', value: 'Male' },
                        { text: 'Female', value: 'Female' },
                    ],
                    // filteredValue: filtered.gender || null,
                    // onFilter: (value: string, record: string) => record.gender.includes(value),
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: 'Phone',
                    key: 'phone',
                    dataIndex: 'phone',
                },
                {
                    title: 'Action',
                    key: 'action',
                },
            ],

            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    gender: 'Male',
                    address: 'New York No. 1 Lake Park',
                    phone: '0733 224 1424',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    gender: 'Female',
                    address: 'London No. 1 Lake Park',
                    phone: '0622 997 3213',
                },
            ],
            items:null,
        }
    },
    methods: {
        handleChange(pagination: any, filters: any, sorter: any) {
            console.log({
                pagination: pagination,
                filters: filters,
                sorter: sorter
            })
        },
        handleViewProfile(nameCustomer: string){
            console.log("onclick View Profile of customerName: ",nameCustomer)
        }
    },
    mounted() {
        axios.get('http://localhost:8000/api/customers')
            .then(response => {
                this.items = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
};


</script>
