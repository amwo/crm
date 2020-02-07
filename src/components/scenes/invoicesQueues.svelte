<script>
    import Search from '../../components/parts/search.svelte'
	import Scroll from '../../components/parts/scroll.svelte'
	import Invoice from '../../components/parts/invoice.svelte'
</script>

<style>
    section {
        user-select: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .search {
        height: 48px;
    }
    .content {
        height: calc(100% - 78px);
        wdith: 100%;
    }
    .header {
        height: 30px;
        border-bottom: 1px solid #111;
    }
    .heads {
        padding: 10px 30px;
        display: flex;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1px;
    }
    .id {
        min-width: 193px;
    }
    .type {
        min-width: 81px
    }
    .project-name {
        min-width: 380px
    }
    .client {
        min-width: 274px;
    }
    .transmission-date {
        min-width: 127px;
    }
</style>

<section>
    <div class="search">
        <Search />
    </div>
    <div class="header">
        <div class="heads">
            <div class="id"><p>ID</p></div>
            <div class="type"><p>Type</p></div>
            <div class="project-name"><p>Project Name</p></div>
            <div class="client"><p>Client</p></div>
            <div class="transmission-date"><p>Transmit Date</p></div>
            <div class="total"><p>Total</p></div>
        </div>
    </div>
    <div class="content">
            <Scroll>
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
            </Scroll>
    </div>
</section>
