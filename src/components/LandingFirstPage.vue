<template>
    <div class="page">
      <div class="landing">
          <img class="logo" src="../imgs/logo.png">
          <h1 class="slogan">launch your bespoke, designer nfts within <span class="emphasis">48 hours</span>.</h1>
          <p class="details">(no really)</p>
          <a href="https://calendly.com/nyalabs" class="start">contact</a>
      </div>
      <img class="chevron" src="../imgs/chevron.png">
    </div>
</template>

<script>
export default {
  name: "LandingFirstPage"
};
</script>

<style scoped>
@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 900px;
}

.chevron {
  width: 2rem;
  margin-bottom: 2rem;
}

.logo {
    margin-top: 12rem;
    width: 50%;
}

.landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
}

.slogan {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin: 1rem 0 0.5rem 0;
    color: white;
}

.emphasis {
    color: var(--primary-main);
}

.details {
    text-align: center;
    font-size: 18px;
    margin-top: 0;
    color: white;
}

.start {
    margin-top: 6rem;
    cursor: pointer;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    background-color: var(--primary-main);
    filter: drop-shadow(0px 4px 4px rgba(1, 1, 1, 1));
    border: transparent;
    border-radius: 10px;
    padding: 18px 36px;
    width: 12rem;
    text-align: center;
    text-decoration: none;
    color: var(--background);
    
}

.start:hover {
    opacity: 0.8;
}

@media screen and (max-width: 480px) {
  .page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
  }

  .logo {
      margin-top: 12rem;
      width: 70%;
  }

  .slogan {
      font-size: 18px;
      text-align: center;
      margin: 1rem 1rem 0.5rem 1rem;
  }

  .details {
      font-size: 12px;
  }

  .start {
      margin-top: 4rem;
      font-size: 18px;
      padding: 9px 18px;
      width: 8rem;
      
  }

  .start:hover {
      opacity: 0.8;
  }
}
</style>