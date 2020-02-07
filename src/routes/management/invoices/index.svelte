<script>
    import { fade  } from 'svelte/transition'
    import Tabs from '../../../components/parts/tabs.svelte'
    import DayScene from '../../../components/parts/dayScene.svelte'
    import MonthScene from '../../../components/parts/monthScene.svelte'
    import InvoicesQueues from '../../../components/scenes/invoicesQueues.svelte'
    const items = [
        {
            name: 'Queues',
            code: 'queues',
            component: InvoicesQueues
        },
        {
            name: 'Sent',
            code: 'sent',
            component: MonthScene
        },
        {
            name: 'Paid',
            code: 'paid',
            component: MonthScene
        }
    ]
</script>
<style>
    section {
        width: 100%;
        height: 100%;
    }
</style>
<section in:fade out:fade>
    <Tabs current="queues" items={items}/>
</section>
