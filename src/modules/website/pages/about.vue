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
                    <p class="section-description">
                      Seja Bem-vindo(a)
                    </p>
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
              <!-- Info section-->
              <div class="info-section single-section">
                <div class="row align-content-start">
                  <!-- Picture part-->
                  <div class="col-12 col-lg-5 info-img">
                    <img
                      class="img-fluid img-thumbnail"
                      src="img/info-img.svg"
                      alt="sobre jetblaze"
                    >
                  </div>
                  <!-- Content part-->
                  <div class="col-12 col-lg-7 info-content">
                    <div class="content-block">
                      <h2 class="content-subtitle">
                        Qual é a da Jet?
                      </h2>
                      <h6 class="content-title">
                        Somos uma solução de entregas no mesmo dia, diferente das que você
                        conhece.
                      </h6>
                      <div class="content-description">
                        <p>
                          Com o objetivo de facilitar a sua vida e tornar os seus envios o mais simples e eficaz
                          possível, unimos a tecnologia com a experiência de entregadores parceiros, para proporcionar um
                          serviço
                          completo para o seu negócio. Em poucos passos suas encomendas estarão registradas e prontas para
                          serem
                          coletadas e entregues no mesmo dia. <strong class="destaque">Sem segredos, sem
                            complicações.</strong>
                        </p>

                        <p>
                          Pela Jet você terá a opção de envios do tipo <strong class="destaque">Avulso</strong> ou pelo
                          <strong class="destaque">Mercado Envios Flex</strong>. Optando pelo
                          Mercado
                          Envios Flex possibilitamos a integração da sua conta do Mercado Livre com a nossa plataforma,
                          dando ainda mais agilidade e flexibilidade nas entregas diárias.
                        </p>
                        <p>
                          Na opção de envio Avulso você também terá rastreio total de seus pacotes além de poder agendar a
                          coleta/entrega para um dia específico. Bacana né?!
                        </p>
                      </div>
                      <address class="content-info">
                        <div class="d-block d-sm-flex align-items-center">
                          <a
                            class="btn content-download button-main button-scheme"
                            href="https://cliente.jetblaze.com.br/cadastro"
                            target="_blank"
                          >Criar conta agora!</a>
                          <ul class="list-unstyled list-inline content-follow">
                            <li class="list-inline-item">
                              <a
                                href="https://instagram.com/jetblazebrasil"
                                target="_blank"
                              ><i
                                class="icon ion-logo-instagram"
                              /></a>
                            </li>
                            <!-- <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-linkedin"></i></a></li> -->
                            <li class="list-inline-item">
                              <a
                                href="https://www.facebook.com/jetblazebrasil"
                                target="_blank"
                              ><i class="icon ion-logo-facebook" /></a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                href="https://twitter.com/jetblazebrasil/"
                                target="_blank"
                              ><i
                                class="icon ion-logo-twitter"
                              /></a>
                            </li>
                          </ul>
                        </div>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Services section-->
              <div class="services-section single-section">
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <!-- <p class="section-description">Services i offer to my clients</p> -->
                      <h2 class="section-title">
                        Detalhes do serviço
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <!-- Single service-->
                  <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-service">
                      <i class="icon service-icon ion-md-locate" />
                      <h6 class="service-title">
                        Áreas de cobertura
                      </h6>
                      <p class="service-description">
                        Em toda Grande São Paulo e expandindo a cada dia.
                      </p>
                      <br>
                      <br>
                    </div>
                  </div>
                  <!-- Single service-->
                  <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-service">
                      <i class="icon service-icon ion-md-timer" />
                      <h6 class="service-title">
                        Horário limite para solicitar coleta
                      </h6>
                      <p class="service-description">
                        Para entregas no mesmo dia, você pode solicitar coletas até
                        12:30h. Vendas pelo Mercado Livre, colocar corte para 12h.
                      </p>
                    </div>
                  </div>
                  <!-- Single service-->
                  <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-service">
                      <i class="icon service-icon ion-md-time" />
                      <h6 class="service-title">
                        Horário da coleta
                      </h6>
                      <p class="service-description">
                        Coletamos entre 12:45h e 13:45h no endereço selecionado.
                      </p>
                      <br>
                      <br>
                    </div>
                  </div>
                  <!-- Single service-->
                  <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-service">
                      <i class="icon service-icon ion-md-folder" />
                      <h6 class="service-title">
                        Medidas aceitas
                      </h6>
                      <p class="service-description">
                        08 cm de comprimento, 30 cm de largura, 35 cm de altura e peso máximo
                        de 3kg.
                      </p>
                      <b>* Para envio de pacotes com medidas superiores a estas, fale conosco pelo chat ou whatsapp.</b>
                    </div>
                  </div>
                  <!-- Single service-->
                  <!-- <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service"><i class="icon service-icon ion-md-cash"></i>
                    <h6 class="service-title">Seguro</h6>
                    <p class="service-description">Todas encomendas possuem uma garantia de extravio.</p>
                  </div>
                </div> -->
                  <!-- Single service-->
                  <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-service">
                      <i class="icon service-icon ion-md-compass" />
                      <h6 class="service-title">
                        Rastreio
                      </h6>
                      <p class="service-description">
                        Todos os envios são rastreáveis através <a
                          href="https://rastreio.jetblaze.com.br/"
                          target="_blank"
                        >deste link</a> e também podem ser
                        visualizados no seu
                        painel da Jet. Quando o envio for Flex o
                        cliente também será atualizado pelo Mercado Livre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Resume section-->
              <div
                id="resume"
                class="pricing-section single-section"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <h2 class="section-title">
                        Como funciona
                      </h2>
                      <p class="section-description">
                        Veja como será a nossa rotina <img
                          height="17"
                          alt="wink jetblaze"
                          src="img/wink.png"
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="resume-section single-section">
                  <div class="row">
                    <!-- Education part-->
                    <div class="col-12 col-md-6">
                      <div class="col-block education">
                        <div class="resume-item">
                          <span class="item-arrow" />
                          <h5 class="item-title">
                            Registro dos pedidos
                          </h5>
                          <p class="item-description">
                            No seu painel de gerencimento da Jetblaze, você poderá cadastrar os
                            seus envios do dia até às 12:30h.
                          </p>
                          <p class="item-description">
                            Se o envio não for para o mesmo dia você pode agendá-lo.
                          </p>
                        </div>
                        <div class="resume-item">
                          <span class="item-arrow" />
                          <h5 class="item-title">
                            Retirada dos pacotes
                          </h5>
                          <p class="item-description">
                            Entre 12:45h e 13:45h um dos entregadores parceiros passará no
                            endereço
                            de coleta e registrará a retirada.
                          </p>
                        <!-- <p class="item-description">Por questão de segurança pediremos uma rubrica </p> -->
                        </div>
                        <div class="resume-item">
                          <span class="item-arrow" />
                          <h5 class="item-title">
                            Rastreamento
                          </h5>
                          <p class="item-description">
                            Assim que os itens forem coletados, seus status ficarão Em
                            Trânsito. Isso significa que a qualquer momento do dia seu pacote será entregue.
                          </p>
                          <br>
                          <p class="item-description">
                            Todo envio possui um código de rastreio que poderá ser
                            acompanhando <a
                              href="https://rastreio.jetblaze.com.br/"
                              target="_blank"
                            >neste link</a>.
                          </p>
                          <br>
                          <p class="item-description">
                            Para envios do tipo Mercado Envios Flex, o cliente também poderá
                            acompanhar o status de envio tanto pelo link acima, como pelo Mercado Livre.
                          </p>
                          <br>
                          <p class="item-description">
                            Qualquer atualização de status será refletida em seu painel da
                            Jetblaze.
                          </p>
                        </div>
                        <div class="resume-item">
                          <span class="item-arrow" />
                          <h5 class="item-title">
                            Entrega concluída
                          </h5>
                          <p class="item-description">
                            Quando o entregador confirmar a entrega, imediatamente atualizaremos
                            os status do envio.
                          </p>
                          <br>
                          <p class="item-description">
                            No caso do entregador não conseguir concluir a entrega no
                            dia, oferecemos uma 2ª tentativa. Se mesmo assim não obter sucesso, o pacote será devolvido no
                            endereço coletado.
                          </p>
                        <!-- <br> -->
                        <!-- <p class="item-description"> Para <b>Mercado Envios Flex</b> terá apenas 1 tentativa.</p> -->
                        </div>
                      </div>
                    </div>
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
    name: 'WebsiteAbout',
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
