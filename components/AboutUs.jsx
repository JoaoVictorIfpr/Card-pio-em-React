import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import neymar1 from '../assets/images/neymar.png'
import neymar2 from '../assets/images/neymar2.png'
import neymar3 from '../assets/images/neymar3.png'

const AboutUs = () => {
  // Refs para cada imagem
  const imageRefs = useRef([]);

  useEffect(() => {
    // Configuração do IntersectionObserver para lazy loading
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% da imagem visível para carregar
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src');
          
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
          }
          
          // Parar de observar após carregar
          observer.unobserve(img);
        }
      });
    }, observerOptions);

    // Observar cada imagem
    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    // Cleanup
    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  // Função para adicionar cada ref à array de refs
  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h2 className="section-title">Sobre o Delícias Gourmet</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Nossa História</h3>
            <p>
              Fundado em 2010, o Delícias Gourmet nasceu da paixão por unir sabores autênticos 
              e ingredientes de qualidade. Nossa jornada começou como um pequeno bistrô familiar 
              e cresceu para se tornar uma referência gastronômica na região.
            </p>
            
            <h3>Nossa Filosofia</h3>
            <p>
              Acreditamos que uma refeição excepcional vai além do sabor. Trabalhamos com 
              ingredientes sazonais e locais sempre que possível, apoiando produtores da região 
              e garantindo frescor incomparável em cada prato.
            </p>
            
            <h3>Compromisso com a Qualidade</h3>
            <p>
              Cada item em nosso cardápio é cuidadosamente elaborado por nossa equipe de chefs 
              apaixonados. Desde o pão artesanal do nosso hambúrguer até o molho especial da 
              nossa lasanha, tudo é feito em casa com atenção aos detalhes.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">13</span>
              <span className="stat-label">Anos de tradição</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Receitas exclusivas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15k</span>
              <span className="stat-label">Clientes satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Estrelas em avaliações</span>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h3>Nossa Equipe</h3>
          <div className="team-members">
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  ref={addToRefs} 
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                  data-src={neymar1} 
                  alt="Neymar Jr. - Chef Executivo" 
                  loading="lazy" 
                />
              </div>
              <h4>Neymar Jr.</h4>
              <p>Chef Executivo</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  ref={addToRefs} 
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                  data-src={neymar2} 
                  alt="Neymar Santos - Chef de Confeitaria" 
                  loading="lazy" 
                />
              </div>
              <h4>Neymar Santos</h4>
              <p>Chef de Confeitaria</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  ref={addToRefs} 
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                  data-src={neymar3} 
                  alt="Neymar da Silva - Chef de Cozinha Internacional" 
                  loading="lazy" 
                />
              </div>
              <h4>Neymar da Silva</h4>
              <p>Chef de Cozinha Internacional</p>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <h3>O Que Nossos Clientes Dizem</h3>
          <div className="testimonial-items">
            <blockquote>
              "Uma experiência gastronômica incrível! O hambúrguer artesanal é simplesmente divino."
              <cite>- Maria C.</cite>
            </blockquote>
            <blockquote>
              "Ambiente acolhedor e pratos impecáveis. A lasanha é a melhor da cidade!"
              <cite>- Roberto L.</cite>
            </blockquote>
            <blockquote>
              "Os pratos do Chef Neymar são verdadeiras obras de arte. O toque brasileiro dele faz toda a diferença!"
              <cite>- Juliana P.</cite>
            </blockquote>
          </div>
        </div>
        
        <div className="visit-us">
          <h3>Visite-nos</h3>
          <p>Rua das Delícias, 123 - Centro</p>
          <p>Aberto todos os dias: 11h às 23h</p>
          <p>Reservas: (11) 5555-1234</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;