<template>
  <div
    id="view-faq"
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
                    <br>
                    <h2 class="section-title">
                      Perguntas frequentes
                    </h2>
                    <div class="animated-bar" />
                    <p>FAQ</p>
                  </div>
                </div>
              </div>
              <!-- Pricing section-->
              <div class="pricing-section single-section">
                <!-- <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <h2 class="section-title">
                        FAQ
                      </h2>
                      <div class="section-description m-0">
                        Perguntas frequentes
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="row">
                  <v-expansion-panels>
                    <v-expansion-panel
                      v-for="(item,i) in questions"
                      :key="i"
                      style="background:transparent;color:white;"
                      class="questions-faq-list"
                      @click="$store.commit('EMIT_EVENT', { event: 'VISUALIZOU_PERGUNTA_FAQ', titleQuestion: item.title })"
                    >
                      <v-expansion-panel-header
                        style="text-align: left"
                        class="question-faq"
                      >
                        <h5 class="question-faq-title">
                          {{ item.title }}
                        </h5>
                        <!-- <template v-slot:actions>
                          <v-icon
                            class="icon"
                            color="white"
                          >
                            mdi-view-quilt
                          </v-icon>
                        </template> -->
                        <!-- <v-icon
                          style="float:right"
                          color="white"
                        >
                          mdi-view-quilt
                        </v-icon> -->
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <span v-html="item.r" />
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebsiteFaq',
    data () {
      return {
        questions: [
          {
            title: 'O que é a Jetblaze?',
            r: 'Jetblaze é uma plataforma que proporciona um serviço de entregas completo, diferente do que já viu ou ouviu. Sabemos como é a rotina do empreendedor(a) pessoa física ou jurídica, por isso pensamos em uma solução que lhe poupará tempo e resolverá seus problemas.',
          },
          {
            title: 'Por que escolher a Jetblaze?',
            r: 'Diferente dos serviços de entregas tradicionais, nós buscamos tornar a sua experiência a mais simples e eficaz possível, através da tecnologia. Facilidade na solicitação de coletas, integração com outras plataformas como Mercado Livre, suporte imediato, entregadores experientes e muito mais. Estamos sempre ouvindo nossos clientes e evoluindo a plataforma.',
          },
          {
            title: 'Como funciona a logística?',
            r: 'Acreditamos que, flexibilidade, qualidade e reconhecimento juntos, trazem excelentes resultados. Para isso, damos aos entregadores parceiros a responsabilidade de coletar e entregar o seu pedido. Dessa forma economizamos tempo, eventuais custos e valorizamos ainda mais o trabalho do entregador autônomo.',
          },
          {
            title: 'Posso confiar na Jet para enviar meus pedidos?',
            r: 'Quanto a isso não há o que se preocupar. Prezamos pela qualidade, por isso nosso processo de cadastro é minucioso, tanto para clientes como para entregadores.',
          },
          {
            title: 'Posso utilizar a Jet a qualquer momento?',
            r: 'Sim. Nossa plataforma funciona todos os dias, 24h por dia. No entanto, as coletas têm dias e horários específicos para serem realizadas: de segunda a sexta, até às 12:30 para entregas no mesmo dia. Não coletamos e entregamos aos finais de semana e nem em feriados, mas nada te impede de agendar para o próximo dia útil :)',
          },
          {
            title: 'Como sei que a encomenda foi entregue?',
            r: 'No painel da área do cliente é possível acompanhar o status de todos os pedidos. Temos também o <a href="https://rastreio.jetblaze.com.br" target="_blank">Link de Rastreio</a> para acompanhamento dos clientes.',
          },
          {
            title: 'Como é realizado o pagamento?',
            r: 'Os pagamentos são quinzenais e são pagos via boleto, disponível no painel do cliente e enviados por email. Entregas realizadas entre o dia 1 e 15 terá vencimento no dia 20. Já as entregas realizadas entre o dia 16 e 31 terá vencimento no dia 5 do mês seguinte.',
          },
          {
            title: 'Recebo nota fiscal?',
            r: 'Sim. Como a Jetblaze faz o intermédio do serviço entre os clientes e os entregadores, é emitida e enviada uma NFS-e sobre este valor a cada quinzena.',
          },
          {
            title: 'É cobrado pela utilização da plataforma?',
            r: 'Não. O cadastro da conta e a gestão de coletas e envios é <b>gratuito</b>. Você só paga pelos pedidos entregues, cancelados após a coleta ou devolvidos após tentativa de entrega.',
          },
          {
            title: 'Quanto custa?',
            r: 'Os valores estão disponíveis para consulta <a href="/valores">neste link.</a>',
          },
        ],
      }
    },
    methods: {
    },
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
