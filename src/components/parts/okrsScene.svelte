<script>
	import Text from '../../components/cells/text.svelte'
	import List from '../../components/cells/list.svelte'
	import Label from '../../components/cells/label.svelte'
	import Buffer from '../../components/cells/buffer.svelte'
	import Spacer from '../../components/cells/spacer.svelte'
	import Wrap from '../../components/cells/wrap.svelte'
	import Col from '../../components/cells/col.svelte'
	import Chart from '../../components/cells/chart.svelte'
</script>

<Wrap>
    <Col>
        <Buffer x=20 y=40>
            <Label title="First OKR"/>
            <Buffer x=0 y=20>
                <Text title="$1,000M from Investers." />
            </Buffer>
        </Buffer>
    </Col>
    <Col>
        <Buffer x=20 y=40>
            <Buffer x=0 y=20>
                <Spacer h=10/>
                <List />
            </Buffer>
        </Buffer>
    </Col>
    <Col w=200 center>
        <Chart type="circle" ratio=30 />
    </Col>
</Wrap>

<Wrap>
    <Col>
        <Buffer x=20 y=0>
            <Label title="Second OKR"/>
            <Buffer x=0 y=20>
                <Text title="$1,000M from Investers." />
            </Buffer>
        </Buffer>
    </Col>
    <Col>
        <Buffer x=20 y=0>
            <Buffer x=0 y=20>
                <List />
            </Buffer>
        </Buffer>
    </Col>
    <Col w=180 center>
        <Chart type="circle" ratio=70 />
    </Col>
</Wrap>

<Wrap>
    <Col>
        <Buffer x=20 y=40>
            <Label title="Second OKR"/>
            <Buffer x=0 y=20>
                <Text title="$1,000M from Investers." />
            </Buffer>
        </Buffer>
    </Col>
    <Col>
        <Buffer x=20 y=40>
            <Buffer x=0 y=20>
                <List />
            </Buffer>
        </Buffer>
    </Col>
    <Col w=180 center>
        <Chart type="circle" ratio=70 />
    </Col>
</Wrap>
