<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .header
        background-color #02a774
        position fixed
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform  translateY(-50%)
            width 10%
            height 50%
            .icon-sousuo
                font-size 25px
                color #fff
        &_title
            position absolute
            left 50%
            right 50%
            transform translate(-50%,50%)
            width 50%
            color #fff
            text-align center
            &_text
                font-size 20px
                color #fff
                display block
        &_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            ._text
                color #fff
</style>