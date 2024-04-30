<template>
    <div class="h-12 flex items-center gap-x-2 font-[500] pl-6 transition-all hover:bg-slate-300/20 hover:cursor-pointer">
        {{ label }}
    </div>
    <!-- <Icon name=""></Icon> -->
</template>

<script>

export default {
    props: {
        label: {
            type: String,
        },
        href: {
            type: String,
        },

    },
    data() {
        return {
            
        };
    },
}
</script>

<style lang="scss" scoped></style>