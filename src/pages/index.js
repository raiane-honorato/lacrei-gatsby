import React from "react"
import Link from "gatsby-link";

import homeHero from "./../img/home-hero.svg"
import globalRightArrowIcon from "./../img/global-right-arrow-icon.svg"
import homeLacreiSaude from "./../img/home-lacrei-saude.svg"
import homeAboutUs from "./../img/home-about-us.svg"
import globalRightArrowIconBlue from "./../img/global-right-arrow-icon-blue.svg"
import homeCommitmentSecurity from "./../img/home-commitment-security.svg"
import homeCommitmentListen from "./../img/home-commitment-listen.svg"
import homeCommitmentSecurity2 from "./../img/home-commitment-security2.svg"
import homeCommitmentLanguage from "./../img/home-commitment-language.svg"



export default function Home() {
  return (
    <>
      {/* <!-- page container --> */}
      <div class="container-md my-3">

        {/* <!-- hero --> */}
        <section id="hero" class="row flex-lg-row align-items-lg-center justify-content-lg-between flex-column align-items-center
            align-content-center g-5 py-5">
          <div class="col-lg-4" id="hero-text">
            <h1 class="hero-title">Boas-vindas <br /> à Lacrei</h1>
            <p class="lead fs-5">Aqui nós existimos, construímos e resistimos juntes.</p>
            <div id="hero-pink-block"></div>
          </div>
          <div class="col-sm-8 col-lg-6">
            <img src={homeHero} class="d-block mx-lg-auto img-fluid" alt="home-hero" width="450" />
          </div>
        </section>

        <div class="row py-5 align-items-center justify-content-center">
          <hr id="hero-line" />
        </div>
        {/* 
        <!-- lacrei-saude --> */}
        <section class="py-5">
          <div class="global-grid">
            <div class="grid-header">
              <span class="pink-title">CONHEÇA OS SERVIÇOS DA LACREI</span>
              <a href="/lacrei-saude/index.html" class="lacrei-saude-title">
                <a href="/lacrei-saude/index.html" class="block d-flex align-items-center" />
                <h2 class="my-3 fw-bold text-decoration-underline d-inline-block">
                  Lacrei
                  Saúde</h2>
                <img src={globalRightArrowIcon} class="d-inline mx-3" />
              </a>
            </div>
            <div class="grid-photo home-saude-photo">
              <img src={homeLacreiSaude} class="d-block mx-lg-auto img-fluid" alt="home-hero"
                width="630" />
            </div>
            <div class="grid-content">
              <div class="py-3">
                <p class="lead mb-0 fs-6">Nós queremos ouvir como foi sua experiência para garantir que a Lacrei
                  seja sempre uma plataforma segura e de qualidade!</p>
                <p class="lead mb-0 fs-6">O atendimento foi satisfatório? Achou ruim? Teve algum problema?</p>
                <p class="lead mb-0 fs-6">Sua avaliação é fundamental para continuarmos a construir e resistir
                  juntes e este é um lugar que sua voz será sempre ouvida.</p>
                <p class="lead mb-0 fs-6">Se interessou? Junte-se a nós:</p>
              </div>
              <div>
                <button type="button"
                  class="btn global-btn home-btn global-btn gradient"><span>Profissionais</span></button>
                <button type="button" class="btn global-btn home-btn global-btn pink">Pessoas usuárias</button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about-us --> */}
        <section id="about" class="py-5">
          <div class="global-grid grid-55">
            <div class="grid-photo home-about-us-photo">
              <img src={homeAboutUs} class="d-block img-fluid" alt="home-about-us" width="437" />
            </div>
            <div class="grid-header home-about-us-header">
              <span class="pink-title">SOBRE NÓS</span>
              <h2 class="my-3 fw-bold ">Reunir e fortalecer</h2>
            </div>
            <div class="grid-content home-about-us-content">
              <div class="py-3">
                <p class="lead mb-0 fs-6">Somos um portal que conecta a comunidade LGBTQIAP+ a serviços de
                  qualidade,
                  com segurança de atendimento e valorização das singularidades de cada pessoa.</p>
                <p class="lead mb-0 fs-6">Facilitamos o contato e a informação para vencer barreiras e
                  proporcionar
                  de
                  forma prática e segura, serviços profissionais, acolhedores e inclusivos, de forma fácil e
                  digital.
                  Aqui, profissionais e empresas falam a nossa língua e escutam o que temos a dizer.</p>
              </div>
              <a href="./pages/volunteer/lacrei-team.html" class="link-primary d-inline-block ">
                Entenda quem nós somos
                <img src={globalRightArrowIconBlue} class="d-inline-block img-fluid ms-2"
                  alt="home-hero" width="16" />
              </a>
            </div>
          </div>
        </section>

        {/* <!-- our commitment --> */}
        <section id="commitment" class="py-5">
          <div class="home-commitment-grid">
            <div class="grid-header home-commitment-header">
              <span class="pink-title">NOSSO COMPROMISSO</span>
              <h2 class="my-3 fw-bold ">Proteção e cuidado</h2>
            </div>

            <div class="home-commitment home-commitment-1">
              <div class="home-commitment-header d-flex align-items-center mb-3">
                <div class="home-commitment-icon">
                  <img src={homeCommitmentSecurity} class="d-inline-block" width="24" />
                </div>
                <span class="fw-bold">Segurança de atendimento</span>
              </div>
              <div class="home-commitment-content my-2">
                <p class="my-0">
                  Pessoas LGBTQIA+ nem sempre tem boas experiências ao usar um serviço. Para mudar esse
                  cenário
                  temos o compromisso de selecionar profissionais que garantam a qualidade, a segurança e o
                  respeito durante o atendimento.
                </p>
                <p class="my-0">
                  Para isso, todas as pessoas que são profissionais da saúde passam por 3 etapas de
                  verificação
                  antes de serem aprovadas na plataforma.
                </p>
                <p class="my-0">
                  Além disso, estamos sempre atentos às avaliações feitas na plataforma para manter
                  continuamente
                  um ambiente acolhedor.
                </p>
                <a href="#" class="link-primary d-inline-block mt-3 ">
                  Entenda nosso propósito
                  <img src={globalRightArrowIconBlue} class="d-inline-block img-fluid ms-2"
                    alt="home-hero" width="16" />
                </a>
              </div>
            </div>
            <div class="home-commitment home-commitment-2">
              <div class="home-commitment-header d-flex align-items-center mb-3">
                <div class="home-commitment-icon">
                  <img src={homeCommitmentListen} class="d-inline-block" width="24" />
                </div>
                <span class="fw-bold">Queremos ouvir sua voz</span>
              </div>
              <div class="home-commitment-content my-2">
                <p class="my-0">
                  Nós queremos ouvir como foi sua experiência para garantir que a Lacrei seja sempre uma
                  plataforma segura e de qualidade!
                </p>
                <p class="my-0">
                  O atendimento foi satisfatório? Achou ruim? Teve algum problema?
                </p>
                <p class="my-0">
                  Sua avaliação é fundamental para continuarmos a construir e resistir juntes e este é um
                  lugar
                  que sua voz será sempre ouvida.
                </p>
              </div>
            </div>
            <div class="home-commitment home-commitment-3">
              <div class="home-commitment-header d-flex align-items-center mb-3">
                <div class="home-commitment-icon">
                  <img src={homeCommitmentSecurity2} class="d-inline-block" width="18" />
                </div>
                <span class="fw-bold">Segurança</span>
              </div>
              <div class="home-commitment-content my-2">
                <p class="my-0">
                  Na Lacrei protegemos sua identidade e seus dados, mas vamos além: sabemos que o Brasil é um
                  dos
                  países mais violentos com a comunidade LGBTQIA+. Por isso, garantimos que aqui é um ambiente
                  seguro para você pode ser quem é, sem medo.
                </p>
              </div>
            </div>
            <div class="home-commitment home-commitment-4">
              <div class="home-commitment-header d-flex align-items-center mb-3">
                <div class="home-commitment-icon">
                  <img src={homeCommitmentLanguage} class="d-inline-block" width="18" />
                </div>
                <span class="fw-bold">Falamos sua língua</span>
              </div>
              <div class="home-commitment-content my-2">
                <p class="my-0">
                  Busque informações e profissionais como fizer sentido pra você: por região, gênero,
                  sexualidade,
                  cor e como se sente.
                </p>
                <p class="my-0">
                  Aqui não precisa ter medo de procurar do seu jeito!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


