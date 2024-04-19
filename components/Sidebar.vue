<template>
    <div class="h-full border-r flex flex-col overflow-y-auto bg-slate-100 shadow-sm">
        <!-- Logo -->
        <div className="p-1">
            <NuxtImg class="ml-6 mt-3" height="100" width="130" alt="logo" src="/logo.svg" />
        </div>
        <!-- Sidebar items -->
        <div class="flex flex-col w-full">
            <SidebarItem @click="onClickSidebarItem(item.href)" v-for="item in routes" :key="item.href"
                :label="item.label" :class="isActiveLink(item.href)" />
        </div>
    </div>
    <!-- <div>
        current URL: {{ currentRouteName }}
    </div> -->
</template>

<script lang="ts">
export default {
    data() {
        return {

            routes: [
                {
                    label: "Overview",
                    href: "/",
                    // iconName: 'AppstoreOutlined'
                },
                {
                    label: "Customers",
                    href: "/customers",
                    // iconName: 'AppstoreOutlined'
                },
                {
                    label: "Products",
                    href: "/products",
                    // iconName: 'AppstoreOutlined'
                },
                {
                    label: "Orders",
                    href: "/orders",
                    // iconName: 'AppstoreOutlined'
                },
                {
                    label: "Report",
                    href: "/report",
                    // iconName: 'AppstoreOutlined'
                },
                {
                    label: "Settings",
                    href: "/settings",
                    // iconName: 'AppstoreOutlined'
                },
            ],
        }

    },
    methods: {
        onClickSidebarItem(href: string) {
            navigateTo(href)
        },
        isActiveLink(sideBarHref: string) {
            if (this.currentRouteName === sideBarHref) {
                return 'text-sky-500 bg-zinc-200 font-bold text-lg';
            }
            else {
                return 'text-slate-500 '
            }


        },
        
    },
    computed: {     
        currentRouteName() {
            return this.$route.path;
        }
    },
}
</script>

<style scoped></style>