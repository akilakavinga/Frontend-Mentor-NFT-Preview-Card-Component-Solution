<div class="container">
    <span>
        Challenge by
        <a target="_blank" href="https://www.frontendmentor.io/"
            >Frontend Mentor</a
        >
    </span>
    <span>
        Coded by
        <a target="_blank" href="https://github.com/akilakavinga"
            >Akila Kavinga</a
        >
    </span>
</div>

<style lang="scss">
    @use "/src/styles" as *;

    .container {
        @include flexCol;
        font-size: 1rem;
        background-color: $veryDarkBlueCard;
        margin-top: 20px;
        padding: 0.4rem 1.5rem;
        border-radius: 3rem;

        span {
            color: $softBlue;
            font-weight: 500;
        }

        a {
            color: $cyan;
            transition: color 75ms ease;

            &:hover {
                color: $white;
            }
        }
    }
</style>
