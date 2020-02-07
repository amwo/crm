<script>
    export const component = ''
    export const data = {}
	import Scroll from '../../components/parts/scroll.svelte'
	import Outside from '../../components/parts/outside.svelte'
    import ClickOutside from 'svelte-click-outside'

    import {store} from '../../store'

    const onClickOutside = () => {
        store.documentEditorVisibilityClose()
    }
</script>

<style>
    .r {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,.8);
        z-index: 999;
        display: flex;
        justify-content: flex-end;
    }
    .wrapper {
        width: 40%;
        height: 100%;
        background: #111;
    }
    .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    .content {
        flex-grow: 1;
        width: 100%;
        height: 100%;
        max-height: calc(100% - 60px);
    }
    footer {
        width: 100%;
        height: 60px;
        background: #181818;
    }
</style>

<div class="r">
    <div class="wrapper">
        <Outside on:clickoutside={onClickOutside}>
            <div class="container">
                <div class="content">
                    <Scroll>
                    <h1>fda</h1>
                    </Scroll>
                </div>
                <footer><button on:click={store.documentEditorClose}></button>  </footer>
            </div>
        </Outside>
    </div>
</div>
