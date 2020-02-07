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
            <Input type="text" placeholder="Taro" label="First Name"/>
        </Col>
        <Col>
            <Input type="text" placeholder="Yamada" label="Last Name"/>
        </Col>
        </Wrap>
    </div>
    <div class="in">
        <Wrap>
        <Col>
            <Input type="email" placeholder="example@domain.com" label="Email Address"/>
        </Col>
        <Col>
            <Input type="text" placeholder="080-8080-8080" label="Phone Number"/>
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
