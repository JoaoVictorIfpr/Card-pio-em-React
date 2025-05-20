import React, { useState } from 'react';
import cardapio from '../data';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    preferencia: 'email'
  });
  
  const [enviado, setEnviado] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio do formulário
    console.log('Formulário enviado:', formData);
    // Feedback visual para o usuário
    setEnviado(true);
    // Reset do formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        preferencia: 'email'
      });
      setEnviado(false);
    }, 3000);
  };
  
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Entre em Contato</h2>
          <p>Tem alguma dúvida, sugestão ou quer fazer uma reserva? Preencha o formulário e entraremos em contato o mais breve possível.</p>
          
          <div className="restaurant-info">
            <div className="info-item">
              <strong>Endereço:</strong>
              <p>Av. Gastronômica, 1234 - Centro</p>
            </div>
            
            <div className="info-item">
              <strong>Horário de Funcionamento:</strong>
              <p>Segunda a Sexta: 11h às 23h</p>
              <p>Sábados e Domingos: 11h às 00h</p>
            </div>
            
            <div className="info-item">
              <strong>Contato:</strong>
              <p>Telefone: (11) 5555-1234</p>
              <p>Email: contato@restaurante.com</p>
            </div>
          </div>
          
          <div className="featured-items">
            <h3>Destaques do Cardápio</h3>
            <ul>
              {cardapio
                .filter(item => item.destaque)
                .slice(0, 3)
                .map(item => (
                  <li key={item.id}>
                    <span className="featured-item-name">{item.nome}</span>
                    <span className="featured-item-price">R$ {item.preco.toFixed(2)}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        
        <div className="contact-form-container">
          {enviado ? (
            <div className="form-success">
              <h3>Mensagem Enviada!</h3>
              <p>Agradecemos seu contato. Retornaremos em breve.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Preferência de contato</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="preferencia"
                      value="email"
                      checked={formData.preferencia === 'email'}
                      onChange={handleChange}
                    />
                    Email
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="preferencia"
                      value="telefone"
                      checked={formData.preferencia === 'telefone'}
                      onChange={handleChange}
                    />
                    Telefone
                  </label>
                </div>
              </div>
              
              <button type="submit" className="submit-button">Enviar Mensagem</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
