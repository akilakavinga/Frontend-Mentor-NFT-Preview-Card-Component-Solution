<script>
    import NftCard from "./components/NFTCard.svelte";
    import Attribution from "./components/Attribution.svelte";

    const date = new Date();
    const julesNFT = {
        nftSrc: "image-equilibrium.jpg",
        name: "Equilibrium",
        id: 3429,
        extract: "Our Equilibrium collection promotes balance and calm.",
        coin: "ETH",
        price: 0.041,
        // 'expireDate' is always set to calculate
        // THREE days from the current date (today).
        // Change it if you would like to.
        // (try yyyy-mm-dd)
        expireDate: date.setDate(date.getDate() + 3),
        authorId: "US-202300001",
    };
    console.log(Date(julesNFT.expireDate));
</script>

<main>
    <NftCard {...julesNFT} />
    <Attribution />
</main>

<style lang="scss">
    @use "./../styles" as *;

    :global(*, *::after, *::before) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: $outfit;
    }

    :global(body) {
        @include flexCol;
        height: 100vh;
        font-size: $bodyFz;
        background-color: $veryDarkBlueMain;
    }

    main {
        height: 100%;
        @include flexCol;
    }
</style>
