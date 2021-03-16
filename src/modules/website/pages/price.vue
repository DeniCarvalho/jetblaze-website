<template>
  <div class="theme-dark">
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
                  <div class="section-heading page-heading">
                    <img
                      class=""
                      src="img/logo.png"
                      height="100"
                      alt="jetblaze"
                    >
                    <div />
                    <!-- <h2 class="section-title">Sobre nós</h2> -->
                    <div class="animated-bar" />
                  </div>
                </div>
              </div>
              <!-- Pricing section-->
              <div class="pricing-section single-section">
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <h2 class="section-title">
                        Valores
                      </h2>
                      <div class="section-description m-0">
                        Os valores das entregas podem variar conforme a sua localização
                        e a
                        do destinatário.
                      </div>
                      <div
                        class="section-description m-0"
                        style="color: #f1c40e;"
                      >
                        A cobrança é quinzenal com vencimentos
                        todo dia <b>05</b> (<b style="text-decoration: underline;">entregas entre 16 e
                          31 do mês anterior</b>) e <b>20</b> (<b style="text-decoration: underline;">entregas entre 01 e
                          15 do mês vigente</b>).
                      </div>
                      <div class="section-description m-0">
                        Na área logada é possível visualizar a distância de cada
                        entrega tal
                        como o valor conforme a categoria:
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <!-- Single plan-->
                  <div class="col-lg-4">
                    <div class="single-plan mb-4 mb-sm-5">
                      <i class="plan-icon icon ion-md-flash" />
                      <h3 class="plan-type">
                        Perto
                      </h3>
                      <h2 class="plan-price">
                        R$10,00/pacote
                      </h2>
                      <ul class="list-unstyled plan-list">
                        <li>Quando for na mesma região que a sua</li>
                      </ul><a
                        class="btn button-main button-scheme plan-btn"
                        href="#morePricePerto"
                        data-lightbox
                      >Entenda</a>
                    </div>
                  </div>
                  <!-- Single plan-->
                  <div class="col-lg-4">
                    <div class="single-plan mb-4 mb-sm-5">
                      <i class="plan-icon icon ion-ios-leaf" />
                      <h3 class="plan-type">
                        Mediano
                      </h3>
                      <h2 class="plan-price">
                        R$20,00/pacote
                      </h2>
                      <ul class="list-unstyled plan-list">
                        <li>Quando for em uma região próxima a sua</li>
                      </ul><a
                        class="btn button-main button-scheme plan-btn"
                        href="#morePriceMediano"
                        data-lightbox
                      >Entenda</a>
                    </div>
                  </div>
                  <!-- Single plan-->
                  <div class="col-lg-4">
                    <div class="single-plan mb-4 mb-sm-5">
                      <i class="plan-icon icon ion-md-flame" />
                      <h3 class="plan-type">
                        Longe
                      </h3>
                      <h2 class="plan-price">
                        R$30,00/pacote
                      </h2>
                      <ul class="list-unstyled plan-list">
                        <li>Quando for em uma região distante da sua</li>
                      </ul><a
                        class="btn button-main button-scheme plan-btn"
                        href="#morePriceLonge"
                        data-lightbox
                      >Entenda</a>
                    </div>
                  </div>
                  <!-- Single plan-->
                  <div class="col-lg-4">
                    <div class="single-plan mb-4 mb-sm-5">
                      <i class="plan-icon icon ion-md-bonfire" />
                      <h3 class="plan-type">
                        Muito Longe
                      </h3>
                      <h2 class="plan-price">
                        R$2,00/km pacote
                      </h2>
                      <ul class="list-unstyled plan-list">
                        <li>Quando for em uma região muito distante da sua</li>
                      </ul><a
                        class="btn button-main button-scheme plan-btn"
                        href="#morePriceMuitoLonge"
                        data-lightbox
                      >Entenda</a>
                    </div>
                  </div>
                <!-- Single plan-->
                <!-- <div class="col-lg-4">
                  <div class="single-plan mb-4 mb-sm-5"><i class="plan-icon icon ion-md-filing personalizado-color"></i>
                    <h3 class="plan-type">Em Lote</h3>
                    <h2 class="plan-price">Valores personalizados</h2>
                    <ul class="list-unstyled plan-list">
                      <li>Dependendo do volume de suas entregas diárias, temos valores especiais</li>
                    </ul><a class="btn button-main button-scheme plan-btn personalizado-bg-color"
                      href="#morePricePersonalizado" data-lightbox>Entenda</a>
                  </div>
                </div> -->
                </div>
              </div>
            <!-- Payment section-->
            <!-- <div class="payment-section single-section">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">Pagamentos</h2>
                    <p class="section-description">Trabalhamos com pagamento quinzenal, via BOLETO:
                    </p>

                    <p class="section-description">- Todo <b>dia 20</b> você paga
                      pelas
                      entregas do dia 1 ao dia 15 do mês vigente.
                    </p>

                    <p class="section-description">- Todo <b>dia 05</b> você paga pelas entregas do dia 16 ao dia 31 do
                      mês anterior.
                    </p>
                  </div>
                </div>
              </div>
            </div> -->
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
            Quando suas entregas forem em um raio de <b>12 KM</b>, a partir do endereço da coleta, dentro do município de
            <b>São Paulo</b>, elas serão classificadas como <b>PERTO</b>.
          </div>
        </div>
      </div>
      <div id="morePriceMediano">
        <div class="align-items-center">
          <div class="modal-header">
            <h5 class="modal-title">
              Como será cobrado
            </h5>
          </div>
          <div class="modal-body col-lg-12">
            Quando suas entregas forem em um raio acima de <b>12 KM</b> até <b>22 KM</b>, a partir do endereço da
            coleta, dentro do município de <b>São Paulo</b>, elas serão classificadas como <b>MEDIANO</b>.
          </div>
        </div>
      </div>
      <div id="morePriceLonge">
        <div class="align-items-center">
          <div class="modal-header">
            <h5 class="modal-title">
              Como será cobrado
            </h5>
          </div>
          <div class="modal-body col-lg-12">
            Quando suas entregas forem em um raio acima de <b>22 KM</b> até <b>32 KM</b>, a partir do endereço da coleta,
            dentro do
            município de <b>São Paulo</b>, elas serão classificadas como <b>LONGE</b>.
          </div>
        </div>
      </div>
      <div id="morePriceMuitoLonge">
        <div class="align-items-center">
          <div class="modal-header">
            <h5 class="modal-title">
              Como será cobrado
            </h5>
          </div>
          <div class="modal-body col-lg-12">
            Quando suas entregas forem em um raio acima de <b>32 KM</b>, a partir do endereço da coleta, dentro do
            município de <b>São Paulo</b>, elas serão classificadas como <b>MUITO LONGE</b> e então se aplica o valor da
            categoria <b>LONGE</b> como base + a diferença por KM.
          <!-- <div><b>(TOTAL KM - LONGE KM) * 2 = VALOR TOTAL</b></div> -->
          <!-- <div><b>Exemplo:</b></div>
          Se a distância da coleta para a entrega for de <b>35 KM</b>, será cobrado <i>R$30,00 (Longe)</i> + R$6,00 ((35km - 32km) * 2)
         -->
          </div>
        </div>
      </div>
      <div id="morePricePersonalizado">
        <div class="align-items-center">
          <div class="modal-header">
            <h5 class="modal-title">
              Como será cobrado
            </h5>
          </div>
          <div class="modal-body col-lg-12">
            <b>Para clientes com 40 ou mais entregas no dia</b>

            <p>R$10,00 de valor fixo para qualquer região</p>

            <b>Para clientes com 20 a 39 entregas no dia</b>
            <p>R$12,00 de valor fixo para qualquer região</p>

            <b>Para clientes com 10 a 19 entregas no dia</b>
            <p>R$13,50 de valor fixo para qualquer região</p>

            <b>*Regiões do município de São Paulo</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebsitePrice',
  }
</script>

<style>
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
