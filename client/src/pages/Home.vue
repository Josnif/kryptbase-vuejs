<template>  
    <div class="gradient-bg-welcome">
        <Navbar />
        <Welcome />
    </div>
    <Services />
    <Transactions />
</template>

<script>
import { Navbar, Welcome, Transactions, Services } from '../components'

export default {
    components: {
        Navbar, Welcome, Transactions, Services
    }
}
</script>

<style>

</style>
