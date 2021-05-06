<template>
  <div id="view-home">
    <!-- Navbar-->
    <nav
      id="navbar"
      class="navbar-expand-md navbar fixed-top"
    >
      <router-link
        class="navbar-brand"
        data-scroll=""
        :to="'/'"
      >
        <!-- Navbar Logo-->
        <img
          class="img-fluid noselect"
          src="img/logo.png"
          alt="jetblaze"
        >
      </router-link>
      <span
        class="navbar-menu ml-auto"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        role="button"
      ><span
        class="btn-line"
      /></span>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse order-1 order-lg-0"
      >
        <!-- Navbar menu-->
        <ul class="navbar-nav ml-auto noselect">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="'/como-funciona'"
            >
              Como Funciona
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="'/valores'"
            >
              Preços
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="'/contato'"
            >
              Contato
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="'/faq'"
            >
              FAQ
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="'/entregador'"
            >
              Quero entregar
            </router-link>
          </li>
          <li class="nav-item">
            <a
              id="btn_rastreio"
              class="nav-link"
              href="https://rastreio.jetblaze.com.br"
              target="_blank"
            ><i
              class="icon ion-md-locate
          "
            />
              Rastreamento</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://cliente.jetblaze.com.br/"
              target="_blank"
            >Entrar</a>
          </li>
          <li class="nav-item">
            <a
              class="btn content-download button-main text-success more-btn btn-cadastro"
              href="https://cliente.jetblaze.com.br/cadastro"
              target="_blank"
            >Cadastro</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Home-->
    <section
      id="home"
      class="home-area element-cover-bg"
      style="background-image:url(./img/home-2.png)"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-lg-start">
          <div class="col-12 col-lg-8 home-content noselect">
            <h1 class="home-name">
              <span id="title-home-line-1">
                <span>Solução para</span>
                <br>
                <span
                  id="title-home-line-2"
                >entregas
                  <span style="font-weight: 600;">rápidas</span>
                </span>
              </span>
            </h1>
            <h4 class="cd-headline clip home-headline">
              <span class="">
                <b id="changerificwordspanid">Gestão de coletas</b>
              </span>
              <!-- <span class="cd-words-wrapper single-headline"><b
                class="is-visible"
              >Gestão de coletas</b><b>Fácil de usar</b><b>Rastreio online</b><b>Integração Mercado
                Livre</b><b>Suporte imediato</b></span> -->
              <!-- </spa> -->
            </h4>
            <br>
            <div class="display: flex !important;">
              <router-link
                class="btn content-download button-main button-scheme more-btn link"
                :to="'/como-funciona'"
                style="margin-bottom: 10px;"
              >
                Como funciona
              </router-link>
              <a
                class="btn content-download button-main text-success more-btn btn-cadastro"
                href="https://cliente.jetblaze.com.br/cadastro"
                target="_blank"
                style="margin-left: 10px;margin-bottom: 10px;"
              >
                Criar conta
              </a>
            </div>
          </div>
          <!-- -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Roboto',sans-serif;
        font-weight: 400; -->
        </div>
      </div>
      <div class="fixed-wrapper">
        <!-- Languages list-->
        <!-- <div class="fixed-block block-left">
        <ul class="list-unstyled languages-list">
          <li><a href="#0"><i class="icon ion-logo-twitter"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-facebook"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-instagram"></i></a></li>
        </ul>
      </div> -->
        <!-- Social media icons-->
        <div class="fixed-block noselect">
          <img
            src="img/mercado_envio_flex.png"
            height="60"
            alt="mercado-envios-flex"
          >
          <!-- <ul class="list-unstyled social-icons">
          <li><a href="#0"><i class="icon ion-logo-twitter"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-facebook"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-linkedin"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-github"></i></a></li>
          <li><a href="#0"><i class="icon ion-logo-instagram"></i></a></li>
        </ul> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'WebsiteHome',
    head: {
      title: {
        inner: 'Jetblaze Express',
        separator: '-',
        complement: 'Entregas rápidas | Mercado Envios Flex',
      },
      meta: [
        {
          name: 'description',
          content:
            'Plataforma para entregas de encomendas no mesmo dia. Integrada com o Mercado Envios Flex, em poucos cliques seus pedidos de envio são registrados',
          id: 'desc',
        },
        { name: 'application-name', content: 'Jetblaze Express' },
        // Twitter
        { name: 'twitter:title', content: 'Jetblaze Express - Entregas rápidas | Mercado Envios Flex' },
        // with shorthand
        { n: 'twitter:description', c: 'Plataforma para entregas de encomendas no mesmo dia. Integrada com o Mercado Envios Flex, em poucos cliques seus pedidos de envio são registrados' },
        // Google+ / Schema.org
        { itemprop: 'name', content: 'Jetblaze Express - Entregas rápidas | Mercado Envios Flex' },
        { itemprop: 'description', content: 'Plataforma para entregas de encomendas no mesmo dia. Integrada com o Mercado Envios Flex, em poucos cliques seus pedidos de envio são registrados' },
        // with shorthand
        { p: 'og:image', c: 'https://jetblaze.com.br/favicon.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://jetblaze.com.br' },
      ],
    },
  }
</script>

<style></style>
