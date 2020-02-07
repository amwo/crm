<script>
	import Text from '../../components/cells/text.svelte'
	import Number from '../../components/cells/number.svelte'
	import List from '../../components/cells/list.svelte'
	import Label from '../../components/cells/label.svelte'
	import Buffer from '../../components/cells/buffer.svelte'
	import Spacer from '../../components/cells/spacer.svelte'
	import Wrap from '../../components/cells/wrap.svelte'
	import Col from '../../components/cells/col.svelte'
	import Chart from '../../components/cells/chart.svelte'
	import Scroll from '../../components/parts/scroll.svelte'
	import Timeline from '../../components/parts/timeline.svelte'
	import Tasks from '../../components/parts/tasks.svelte'
</script>

<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .tasks {
        overflow: hidden;
        /*background: #233;*/
        flex: 1;
        height: 100%;
    }
    .timeline {
        width: 22%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .timeline-content {
        border-bottom: 1px solid #111;
        border-top: 1px solid #111;
        flex: 1 0 auto;
        height: calc(100% - 100px);
    }
    .timeline-footer {
        height: 40px;
        flex: 0 0 auto;
    }
    .timeline-header {
        height: 50px;
        flex: 0 0 auto;
        display: flex;
    }
    .timeline-header .l,  .timeline-header .r{
        width: 100%;
    }
    .timeline-header .l, .timeline-header .r {
        align-items: center;
        display: flex;
    }
    .timeline-header .l .date {
        font-size: 20px;
        font-family: 'Playfair Display', serif;
    }
</style>

<section>
    <div class="tasks">
        <Scroll>
            <Tasks />
        </Scroll>
    </div>
    <aside class="timeline">
        <div class="timeline-header">
            <div class="l">
                <p class="date">San, Jan 26</p>
            </div>
            <div class="r">
                <div>
                    <button>p</button>
                    <button>Today</button>
                    <button>n</button>
                </div>
            </div>
        </div>
        <div class="timeline-content">
            <Scroll>
                <Timeline />
            </Scroll>
        </div>
        <div class="timeline-footer">
            <p>Current Task: hogehoge</p>
        </div>
    </aside>
</section>
