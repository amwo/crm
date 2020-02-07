<script>
    import { createEventDispatcher } from 'svelte'
    export let exclude = []
    let child;
    const dispatch = createEventDispatcher()
    const isExcluded = t => {
        let parent = t
        while (parent) {
            if (exclude.indexOf(parent) >= 0 || parent === child) {
                return true;
            }
            parent = parent.parentNode;
        }
        return false
    }

    const onClickOutside = e => {
        if (!isExcluded(e.target)) {
            dispatch('clickoutside');
        }
    }
</script>

<svelte:body on:click={onClickOutside} />

<div bind:this={child} style="width: 100%; height: 100%;">
    <slot></slot>
</div>
