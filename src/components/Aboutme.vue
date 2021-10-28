<template>
    <div :class="$style.personal_msg">
        <div :class="$style.personal_msg_box">
            <a href="https://weibo.com/u/5596130246">
                <div :class="$style.account_wrap">
                    <img src="@/assets/weibo.svg" alt="我的微博" />
                    <div :class="$style.img_title">我的微博</div>
                </div>
            </a>
        </div>

        <div :class="$style.personal_msg_box">
            <a href="https://www.jianshu.com/u/63b43f7fdff3">
                <div :class="$style.account_wrap">
                    <img src="@/assets/jianshu.svg" alt="我的简书" />
                    <div :class="$style.img_title">我的简书</div>
                </div>
            </a>
        </div>

        <div :class="$style.personal_msg_box">
            <a href="https://space.bilibili.com/10841979">
                <div :class="$style.account_wrap">
                    <img src="@/assets/bilibili-on.svg" alt="我的B站" />
                    <div :class="$style.img_title">我的B站</div>
                </div>
            </a>
        </div>

        <div :class="$style.personal_msg_box">
            <a href="https://space.bilibili.com/10841979">
                <div :class="$style.account_wrap">
                    <img src="@/assets/Github.svg" alt="我的GitHub" />
                    <div :class="$style.img_title">我的GitHub</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" module>
.personal_msg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .personal_msg_box {
        margin-top: 10px;
    }
    .account_wrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
            width: 3rem;
            height: 3rem;
        }
    }
}
</style>