<script>
    import { goto, stores } from '@sapper/app'
    import { onMount } from 'svelte'
    import { fade,fly } from 'svelte/transition'
    import {store} from '../store.js'
	import Nav from '../components/Nav.svelte';
	import Loading from '../components/bodies/loading.svelte'
	import WorkSpace from '../components/bodies/workSpace.svelte'
	import DocumentEditor from '../components/bodies/documentEditor.svelte'
	import Header from '../components/parts/header.svelte'
	import Sidebar from '../components/parts/sidebar.svelte'
	import Actionbutton from '../components/parts/actionButton.svelte'
	import Account from '../components/parts/account.svelte'
    import H1 from '../components/cells/h1.svelte'
    import Tabs from '../components/parts/tabs.svelte'

    const { page } = stores();
	export let segment;

    //TODO
    //$: console.log($store)
    $: if($store.s.initialized && !$store.s.login) {
        goto('/login/')
    }
</script>

<style>
    .r {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .cnt {
        width: 100%;
        height: 100%;
        display: flex;
        height: 100%;
        overflow: scroll;
        position: relative;
        flex: 1
    }
    .main {
        height: 100%;
        overflow: hidden;
        flex: 1
    }
    .sidebar {
        width: 250px;
        height: 100%;
    }
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header {
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
        transform: translateX(0%);
        top: 0%;
        right: 0%;
        width: calc(100% - 30px);
        padding: 52px 0 0 30px;
        height: calc(120px - 52px);
        z-index: 1;
    }
    .content {
        flex: 1;
        height: calc(100% - 170px);
    }
    .account {
        position: absolute;
        right: 60px;
        top: 56px;
    }
</style>


{#if !$store.s.initialized}
    <Loading />
{:else if $store.s.login && segment === 'chonme'}
    <div class="r" in:fade>
        <div class="cnt">
            <div class="sidebar">
                <Sidebar {segment}/>
            </div>
            <div class="main">
                <slot></slot>
            </div>
        </div>
        <Header {segment}/>
        <Actionbutton />
    </div>
{:else if $store.s.login}
    <div class="r" in:fade>
        <div class="cnt">
            <div class="sidebar">
                <Sidebar {segment}/>
            </div>
            <div class="main">
                <section in:fly="{{ y: 30, duration: 500 }}">
                    <header>
                        {#if $page.path.split('/')[$page.path.split('/').length - 2] === ''}
                            <div in:fly="{{ y: 30, duration: 500 }}">
                                <H1 title="Dashboard" />
                            </div>
                        {:else}
                            <div in:fly="{{ y: 30, duration: 500 }}">
                                <H1 title={$page.path.split('/')[$page.path.split('/').length - 2]} />
                            </div>
                        {/if}
                        <div class="account">
                            <Account avatar={$store.d[$store.c.user].avatar}/>
                        </div>
                    </header>
                    <div class="content">
                        <slot></slot>
                    </div>
                </section>
            </div>
        </div>
        <Header {segment}/>
        <Actionbutton />
        {#if $store.v.documentEditor}
            <DocumentEditor component='' data={{}} />
        {/if}
        {#if $store.ws.type !== null}
            <WorkSpace type={$store.ws.type}/>
        {/if}
    </div>
{:else if segment === 'login'}
    <slot></slot>
{:else if segment === 'signin'}
    <h1>Sign In</h1>
{/if}
