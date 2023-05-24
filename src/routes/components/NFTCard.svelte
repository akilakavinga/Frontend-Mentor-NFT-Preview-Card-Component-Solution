<script>
    import { get } from "svelte/store";
    import { cryptoIcons, profiles } from "../stores";

    const getRemainingDays = (futureDate) => {
        // author: MaxVT
        // https://stackoverflow.com/a/2627493
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date();
        const secondDate = new Date(futureDate);
        const diffDays = Math.round(
            Math.abs((firstDate - secondDate) / oneDay)
        );
        return diffDays;
    };

    export let nftSrc = "";
    export let name = "";
    export let id = "";
    export let extract = "";
    export let coin = "";
    export let price = 0;
    export let expireDate = undefined;
    export let authorId = "";

    const coinIcon = get(cryptoIcons)[coin];
    const remainingDays = getRemainingDays(expireDate);
    const authorName = get(profiles)[authorId].name;
    const authorIcon = get(profiles)[authorId].pic;
</script>

<section class="nft">
    <div class="image-container">
        <img class="nftPic" src={nftSrc} alt="" />
    </div>
    <h2 class="name">{name} #{id}</h2>
    <p class="extract">{extract}</p>
    <div class="price-container">
        <span class="price">
            <img src={coinIcon} alt="crypto icon" class="price-icon" />
            {price}
            {coin}
        </span>
        <span class="remaining-days"
            ><img src="icon-clock.svg" alt="clock icon" />
            {remainingDays} days left</span
        >
    </div>
    <div class="line-break" />
    <div class="author-container">
        <img src={authorIcon} alt="" class="author_icon" />
        <span>Creation of <a href="/">{authorName}</a></span>
    </div>
</section>

<style lang="scss">
    @use "/src/styles" as *;

    section {
        max-width: 320px;
        background-color: $veryDarkBlueCard;
        padding: 1.3rem 1.4rem 1.75rem;
        border-radius: 1rem;
        box-shadow: 0 20px 20px 10px
            rgba($color: $darkenedDarkBlue, $alpha: 0.2);

        .image-container {
            position: relative;
            display: inline-block;

            .nftPic {
                max-width: 100%;
                border-radius: 0.75rem;
            }

            &::before {
                content: url("icon-view.svg");
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 99%;
                background-color: rgba($color: $cyan, $alpha: 0.5);
                opacity: 0;
                transition: opacity 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.75rem;
                cursor: pointer;
            }

            &:hover::before {
                opacity: 1;
            }
        }

        .name {
            color: $white;
            font-size: 1.25rem;
            margin: 1rem 0;
            cursor: pointer;
            transition: color 75ms;

            &:hover {
                color: $cyan;
            }
        }

        .extract {
            color: $softBlue;
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.4rem;
        }

        .price-container {
            @include flexRow;
            justify-content: space-between;
            font-size: 0.95rem;
            margin-top: 1.125rem;

            .price {
                color: $cyan;
            }

            .remaining-days {
                @include flexRow;
                gap: 10px;
                color: $softBlue;
            }
        }

        .line-break {
            background-color: $softBlue;
            height: 1px;
            opacity: 0.25;
            margin-top: 1.25rem;
            margin-bottom: 0.75rem;
        }

        .author-container {
            @include flexRow;
            justify-content: flex-start;
            gap: 0.9rem;

            .author_icon {
                border: 1px solid $white;
                border-radius: 50%;
                width: 1.8rem;
            }

            span {
                color: $softBlue;
                font-size: 0.9rem;

                a {
                    text-decoration: none;
                    color: $white;
                    transition: color 50ms;

                    &:hover {
                        color: $cyan;
                    }
                }
            }
        }
    }
</style>
