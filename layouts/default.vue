<template>
    <body class="dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed hold-transition login-page">
        <div class="wrapper ">
        <Navbar/>
        <Sidebar />
        <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
        <div class="container-fluid">

        </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
        <div class="container-fluid">
        <!-- Info boxes -->
        <slot />
        <!-- /.row -->
        </div><!--/. container-fluid -->
        </section>
        <!-- /.content -->
        </div>
    </div>
    </body>

</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
    color: aqua;
}

</style>