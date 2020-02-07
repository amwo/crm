<script>
    import { fade  } from 'svelte/transition'
    import Tabs from '../components/parts/tabs.svelte'
    import DayScene from '../components/parts/dayScene.svelte'
    import MonthScene from '../components/parts/monthScene.svelte'
    import OkrsScene from '../components/parts/okrsScene.svelte'
    const items = [
        {
            name: 'Day',
            code: 'day',
            component: DayScene
        },
        {
            name: 'Month',
            code: 'month',
            component: MonthScene
        },
        {
            name: '1Q',
            code: 'quarter',
            component: MonthScene
        },
        {
            name: 'Year',
            code: 'year',
            component: MonthScene
        },
        {
            name: 'OKR\'s',
            code: 'okrs',
            component: OkrsScene
        }
    ]
</script>
<style>
    div {
        height: 100%;
    }
</style>

<div in:fade out:fade>
    <Tabs current="day" items={items}/>
</div>
