<template>
  <div class="theme-dark">
    <div
      id="contact"
      class="lightbox-wrapper lightbox-wrapper-custom"
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
                      Sinta-se à vontande para nos contatar
                    </p>
                    <h2 class="section-title">
                      Entrar em contato
                    </h2>
                    <div class="animated-bar" />
                  </div>
                </div>
              </div>
              <!-- Contact section-->
              <div
                id="view-contato"
                class="contact-section single-section"
              >
                <div class="row">
                  <!-- Contact form-->
                  <div class="col-12 col-lg-7">
                    <div class="contact-info">
                      <h4 class="content-title">
                        Dados para contato
                      </h4>
                      <!-- <p class="info-description">Acompanhe também nossas redes. Sempre os manteremos atualizados sobre as novidades da Jet!</p> -->
                      <ul class="list-unstyled list-info">
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon"><i
                              class="icon ion-md-call"
                            /></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">
                                WhatsApp
                              </h6><span class="info-value"><a href="tel:+5511963908313">+55
                                11 96390-8313</a></span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon"><i
                              class="icon ion-md-send"
                            /></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">
                                Email
                              </h6><span class="info-value"><a
                                href="mailto:contato@jetblaze.com.br"
                              >contato@jetblaze.com.br</a></span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Contact info-->
                  <div class="col-12 col-lg-5">
                    <div class="contact-info">
                      <h4 class="content-title">
                        Sempre a disposição
                      </h4>
                      <p class="info-description">
                        Ficou com dúvidas? Fale conosco pelo chat no seu inferior direito.
                      </p>
                      <ul class="list-unstyled list-info">
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-logo-instagram" />
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">
                                Instagram
                              </h6>
                              <span class="info-value"><a
                                href="https://www.instagram.com/jetblazebrasil/"
                                target="_blank"
                              >@jetblazebrasil</a> </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-logo-facebook" />
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">
                                Facebook
                              </h6>
                              <span class="info-value"><a
                                href="https://facebook.com/jetblazebrasil"
                                target="_blank"
                              >@jetblazebrasil</a></span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-logo-twitter" />
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">
                                Twitter
                              </h6>
                              <span class="info-value"><a
                                href="https://twitter.com/jetblazebrasil"
                                target="_blank"
                              >@jetblazebrasil</a></span>
                            </div>
                          </div>
                        </li>
                      </ul>
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
</template>

<script>
  export default {
    head: {
      title: {
        inner: 'Contato',
        separator: '-',
        complement: 'Jetblaze Express',
      },
      meta: [
        { name: 'description', content: 'Entre em contato a qualquer momento através de nossos canais de atendimento', id: 'desc' },
        { name: 'application-name', content: 'Jetblaze Express' },
        // Twitter
        { name: 'twitter:title', content: 'Contato - Jetblaze Express' },
        // with shorthand
        { n: 'twitter:description', c: 'Entre em contato a qualquer momento através de nossos canais de atendimento' },
        // Google+ / Schema.org
        { itemprop: 'name', content: 'Contato - Jetblaze Express' },
        { itemprop: 'description', content: 'Entre em contato a qualquer momento através de nossos canais de atendimento' },
        // with shorthand
        { p: 'og:image', c: 'https://jetblaze.com.br/favicon.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://jetblaze.com.br/contato' },
      ],
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
