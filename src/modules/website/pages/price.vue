<template>
  <div
    id="view-valores"
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
              <div
                id="section-valores"
                class="pricing-section single-section"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <h2 class="section-title">
                        Nossos preços
                      </h2>
                      <div class="section-description m-0">
                        O preço cobrado pode variar conforme a distância entre o endereço da coleta e o endereço do destino.
                      </div>
                      <div
                        class="section-description m-0"
                        style="color: #f1c40e;"
                      >
                        As faturas são geradas quinzenalmente, ou seja:
                        <p class="pb-1 mb-0">
                          - Se entregas foram realizadas <b style="text-decoration: underline;">entre os dias 01 e
                            15 do mês vigente</b>, sua fatura <b style="text-decoration: underline;">vence no dia 20</b>;
                        </p>
                        <p class="pt-0 mt-0">
                          - Se entregas foram realizadas <b style="text-decoration: underline;">entre os dias 16 e
                            o último dia do mês vigente</b>, sua fatura <b style="text-decoration: underline;">vence no dia 05 do próximo mês</b>;
                        </p>
                        <!-- A cobrança é quinzenal com vencimentos
                        todo dia <b>05</b> (<b style="text-decoration: underline;">entregas entre 16 e
                          31 do mês anterior</b>) e <b>20</b> (<b style="text-decoration: underline;">entregas entre 01 e
                          15 do mês vigente</b>). -->
                      </div>
                      <div class="section-description m-0">
                        Em seu painel é possível visualizar a distância de cada
                        corrida tal
                        como seu valor:
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-lg-4">
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
                          Tarifa base | <b>R$9,0 (0-4km)</b>
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
              </div>
              <!-- Payment section-->
              <div class="pricing-section single-section">
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading mb-3">
                      <h2 class="section-title">
                        Cancelamentos
                      </h2>
                      <p class="section-description pb-0 mb-0">
                        Saiba quando o cancelamento pode ser feito gratuitamente e quando há a cobrança de cancelamento:
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="single-plan text-left p-2">
                          <p><b>Para entregas no mesmo dia:</b></p>
                          <p>Você pode cancelar gratuitamente qualquer pedido que não tenha sido coletado. Após coletado, para cancelar será cobrado o valor total da corrida. Por segurança o entregador não terá sua atenção desviada enquanto se desloca ao local de entrega, fazendo com que ele só veja o cancelamento no momento em que parar, que pode ser já no endereço destinado. Se isso acontecer ele retornará ao endereço de coleta para devolver o pacote.</p>
                          <p><b>Devoluções:</b></p>
                          <p>Por padrão, todas as nossas corridas oferecem uma 2ª tentativa de entrega. Se após a 2ª tentativa o entregador não consiga concluir a entrega, ele devolverá o pacote no endereço da coleta. Nesse caso será o cobrado o valor total da corrida. Mas se caso o entregador não consiga realizar a 2ª tentativa, nenhum valor será cobrado na devolução.</p>
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
              Na modalidade <b style="text-decoration: underline;">JetGo</b> será cobrado uma tarifa base de <b>R$9,00</b> para cada pacote entregue em um raio de <b>4km</b> do endereço da coleta.
            </p>
            <p>A partir de 4km será cobrado a tarifa base + <b>R$1,30 por km</b>.</p>
            <ul class="pl-4">
              <li>Limite de peso: 3kg</li>
              <li>Limite de tamanho: 08 x 30 x 35 cm</li>
            </ul>
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
