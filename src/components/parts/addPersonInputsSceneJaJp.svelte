
<script>
    import { fade } from 'svelte/transition'
	import Input from '../../components/cells/input.svelte'
	import Wrap from '../../components/cells/wrap.svelte'
	import AvatarUploader from '../../components/parts/avatarUploader.svelte'
	import Col from '../../components/cells/col.svelte'
</script>

<style>
    .in {
        margin: 30px 50px 0 60px;
    }
    section {
        padding: 20px 0 100px;
    }
</style>

<section>
    <div class="in">
        <Wrap>
            <Col>
                <AvatarUploader />
            </Col>
        </Wrap>
    </div>

    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="山田" label="姓"/>
        </Col>
        <Col>
            <Input type="text" placeholder="太郎" label="名"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="email" placeholder="example@domain.com" label="メールアドレス"/>
        </Col>
        <Col>
            <Input type="text" placeholder="080-8080-8080" label="電話番号"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="代表取締役社長" label="肩書き" />
        </Col>
        <Col>
            <Input type="text" placeholder="superman" label="ハンドルネーム"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="CEO" label="Title" />
        </Col>
        <Col>
            <Input type="text" placeholder="superman" label="Handle Name"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="CEO" label="Title" />
        </Col>
        <Col>
            <Input type="text" placeholder="superman" label="Handle Name"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="CEO" label="Title" />
        </Col>
        <Col>
            <Input type="text" placeholder="superman" label="Handle Name"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="text" placeholder="CEO" label="Title" />
        </Col>
        <Col>
            <Input type="text" placeholder="superman" label="Handle Name"/>
        </Col>
        </Wrap>
    </div>
</section>
