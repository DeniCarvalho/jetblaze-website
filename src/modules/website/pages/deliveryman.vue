<template>
  <div
    id="view-deliveryman"
    class="theme-dark"
  >
    <!-- About lightbox-->
    <div
      id="about"
      class="lightbox-wrapper noselect lightbox-wrapper-custom"
    >
      <div class="container">
        <div class="lightbox-close">
          <router-link
            class="close-btn"
            :to="'/'"
          >
            <span class="btn-line" />
          </router-link>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="lightbox-content">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading page-heading mb-5">
                    <img
                      class=""
                      src="img/logo.png"
                      height="100"
                      alt="jetblaze"
                    >
                    <div />
                    <br>
                    <h2 class="section-title">
                      Quero entregar
                    </h2>
                    <div class="animated-bar" />
                    <br>
                    <p>
                      Aumente sua renda com a <span
                        class="cursor-pointer"
                        @click="openStore()"
                      ><span style="color:#f1c40f;">Jet</span><span style="color:rgb(109, 173, 83);">Driver</span></span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Pricing section-->
              <div class="pricing-section single-section mb-3">
                <div class="row justify-content-around">
                  <div class="col-12 col-md-7 col-lg-7">
                    <div class="section-description m-0">
                      A <span
                        class="cursor-pointer"
                        @click="openStore()"
                      ><span style="color:#f1c40f;">Jet</span><span style="color:rgb(109, 173, 83);">Driver</span></span> organiza as coletas e as entregas associadas a você e calcula o trajeto ideal, fazendo com que
                      as suas últimas entregas no dia sejam perto de onde
                      você mora.
                    </div>
                    <br>
                    <div class="section-description m-0">
                      Não existe centro de distribuição ou ponto de encontro. Você retira os pacotes no endereço da coleta entre 12:30 - 14:00 e se responsabiliza pelas entregas no restante do dia.
                    </div>
                    <br>
                    <div class="section-description m-0">
                      O repasse acontece todo dia <b>15 e o último dia do mês</b>. No <b>último dia do mês</b> é o repasse das entregas realizadas entre os dias 01 e 15 do mês vigente e o dia <b>15</b> é referente ao repasse das entregas relizadas entre os dias 16 e o último dia do mês anterior.
                    </div>
                    <br>
                    <div class="section-description m-0">
                      <p>Valores de repasse:</p>
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <div class="single-plan mb-4 mb-sm-5">
                            <img
                              class=""
                              src="img/scooter.svg"
                              height="100"
                              alt="jetblaze"
                            >
                            <h3 class="plan-type">
                              JetGo
                            </h3>

                            <ul class="list-unstyled plan-list">
                              <li class="">
                                Tarifa base | <b>R$5,20 (0-4km)</b>
                              </li>
                              <li>A partir 4km | <b>R$1,30/km</b></li>
                            </ul>
                            <a
                              class="btn button-main button-scheme plan-btn"
                              href="#morePricePerto"
                              data-lightbox
                            >Entenda</a>
                          </div>
                        </div>
                      </div>
                      <i>*Obs: Em cada repasse é descontado uma quantia de R$4,90 do valor total. Quantia essa destinada ao custo operacional de transferência bancária.</i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing-section single-section">
                <div class="row justify-content-around">
                  <div class="col-12 col-md-7 col-lg-7">
                    <div
                      id="resume"
                      class="pricing-section single-section section-rotina"
                    >
                      <div

                        class="divider mb-5"
                      />
                      <div class="text-h6">
                        <h4 class="ma-0 pa-0">
                          Faça agora o seu cadastro!
                        </h4>
                      </div>
                      <p class="ma-0 pa-0">
                        Siga as seguintes etapas:
                      </p>
                      <br>

                      <div class="resume-section single-section">
                        <div class="row">
                          <!-- Education part-->
                          <div class="col-12 col-md-12">
                            <div class="col-block education">
                              <div class="resume-item">
                                <span class="item-arrow" />
                                <h5 class="item-title">
                                  1. Instale o aplivativo JetDriver na Google Play
                                </h5>
                                <p class="item-description">
                                  Disponível apenas para dispositivos Android.
                                </p>
                              </div>
                              <div class="resume-item">
                                <span class="item-arrow" />
                                <h5 class="item-title">
                                  2. Preencha os dados
                                </h5>
                                <p class="item-description">
                                  Siga as etapas de cadastro e preencha todos os campos obrigatórios.
                                </p>
                              </div>
                              <div class="resume-item">
                                <span class="item-arrow" />
                                <h5 class="item-title">
                                  3. Envio de documentos
                                </h5>
                                <p class="item-description">
                                  Para concluir o cadastro é necessário nos enviar alguns documentos obrigatórios. Todo o processo é realizado dentro do app.
                                </p>
                              </div>
                              <div class="resume-item">
                                <span class="item-arrow" />
                                <h5 class="item-title">
                                  4. Aguarde a validação dos dados
                                </h5>
                                <p class="item-description">
                                  Após concluir todas as etapas, seu cadastro será analisado e você será notificado por e-mail, sms ou whatsapp assim que for liberado.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <v-btn
                          style="border-top-left-radius: 0px;"
                          light
                          depressed
                          block
                          color="rgba(241, 196, 15, 1)"
                          @click="openStore()"
                        >
                          Instalar aplicativo
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="prices"
      class="lightbox-wrapper"
      data-simplebar
    >
      <div id="morePricePerto">
        <div class="align-items-center">
          <div class="modal-header">
            <h5 class="modal-title">
              Como será cobrado
            </h5>
          </div>
          <div class="modal-body col-lg-12">
            <p class="mb-0 pb-0">
              Na modalidade
              <b style="text-decoration: underline;">JetGo</b> será contabilizado um
              valor base de <b>R$5,20</b> para cada pacote entregue em um raio
              de <b>4km</b> do endereço da coleta.
            </p>
            <p>
              A partir de 4km será somado a tarifa base + <b>R$1,30 por km</b>.
            </p>
            <ul class="pl-4">
              <li>Limite de peso: 3kg</li>
              <li>Limite de tamanho: 08 x 30 x 35 cm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebsiteDeliveryman',
    data () {
      return {}
    },
    methods: {
      openStore () {
        window.open('https://play.google.com/store/apps/details?id=com.jetblaze.jetdriver', '_blank')
      },
    },
    head: {
      title: {
        inner: 'Quero entregar',
        separator: '-',
        complement: 'Jetblaze Express',
      },
      meta: [
        {
          name: 'description',
          content:
            'Aumente sua renda realizando entregas para clientes próximos a onde você mora',
          id: 'desc',
        },
        { name: 'application-name', content: 'Jetblaze Express' },
        // Twitter
        { name: 'twitter:title', content: 'Quero entregar - Jetblaze Express' },
        // with shorthand
        { n: 'twitter:description', c: 'Aumente sua renda realizando entregas para clientes próximos a onde você mora' },
        // Google+ / Schema.org
        { itemprop: 'name', content: 'Quero entregar - Jetblaze Express' },
        { itemprop: 'description', content: 'Aumente sua renda realizando entregas para clientes próximos a onde você mora' },
        // with shorthand
        { p: 'og:image', c: 'https://jetblaze.com.br/favicon.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://jetblaze.com.br/entregador' },
      ],
    },
  }
</script>

<style lang="scss" scoped>
#resume {
  .divider {
    width: 100%;
    height: 3px;
    /* background-color: aqua; */
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(241, 196, 15, 1) 35%,
      rgba(126, 171, 107, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(241, 196, 15, 1) 35%,
      rgba(126, 171, 107, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(241, 196, 15, 1) 35%,
      rgba(126, 171, 107, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#7eab6b",GradientType=1);
  }
}
.lightbox-wrapper-custom {
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  left: 0px !important;
  z-index: 9999 !important;
  opacity: 1 !important;
  animation-duration: 0s !important;
  animation-delay: 0.5s !important;
  animation-fill-mode: none !important;
  overflow-y: auto !important;
  display: block !important;
}
</style>
