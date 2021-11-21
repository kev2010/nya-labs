<template>
    <div class="landing-two">
        <div class="images">
            <div class="caption">
                <img src="../imgs/larva.png">
                <p>larva labs sold this for <br>$11.8 million</p>
            </div>
            <div class="caption">
                <img src="../imgs/beeple.png">
                <p>beeple sold this for<br>$69.3 million</p>
            </div>
            <div class="caption">
                <img src="../imgs/mystery.png">
                <p>want this to be you?</p>
            </div>
        </div>
        <div class="text">
            <p>NFTs have taken the world by storm with sales of over <span class="emphasis">$2.4 billion</span> in the first six months of 2021. We’ll launch <span class="emphasis">amazing, bespoke NFTs</span> in <span class="emphasis">48 hours</span> and won’t take a penny until your NFTs have made over 1 million dollars.</p>
            <p>Our team of MIT crypto nerds knows how to get it done: from winning international Taekwondo medals to preventing million dollar losses in DeFi rescue missions to acquiring a personal invitation from Elon Musk to visit his Tesla factory as a 10-year-old. We'll make your NFT launch as extraordinary as your brand.</p>
        </div>
        <p class="copyright">© 2021 Nya Labs</p>
    </div>
</template>

<script>
export default {
    name: "LandingSecondPage",
    components: {
    },
};
</script>

<style scoped>
.landing-two {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
}

.images {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 6rem;
}

.caption {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
}

.text {
    font-family: "Poppins";
    font-style: normal;
    font-size: 18px;
    margin: 4rem 16rem;
}

.emphasis {
    font-weight: 600;
}

.footer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 4rem;
    background: var(--primary-main);
}

.copyright {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--background);
}

@media screen and (max-width: 480px) {
    .images {
        margin-top: 4rem;
        flex-wrap: wrap;
    }

    .caption {
        font-size: 18px;
    }

    .text {
        font-size: 14px;
        margin: 1rem 2rem;
    }

    .copyright {
        font-size: 12px;
    }
}
</style>