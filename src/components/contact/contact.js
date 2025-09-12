import './contact.css';

const Contact = () => {
  return (
    
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact ACM</h1>
        <p className="contact-subtitle">Get in touch with us.</p>

        <div className="contact-grid">
        <div className="contact-info">
            <p><a href="mailto:acm@enstab.ucar.tn">acm@enstab.ucar.tn</a></p>
            <p><a href="https://www.facebook.com/acmenstab" target="_blank" rel="noreferrer">Facebook</a></p>
            <p><a href="https://www.instagram.com/acm_enstab/?fbclid=IwY2xjawMedw1leHRuA2FlbQIxMABicmlkETFFNExBck5XbW5wc0NsZ0pRAR7JayuxNTp2B9Bitv58PtvxBvUKSDsyES889YB6F4J_1c2yz2LVEixPrZpeOQ_aem_nVBJ6hbCwKfB8qHK9JOjzQ#" target="_blank" rel="noreferrer">Instagram</a></p>
            <p><a href="https://www.youtube.com/@acmenstab7548" target="_blank" rel="noreferrer">YouTube</a></p>
            <p><a href="https://www.linkedin.com/company/acm-ensta-borjcedria/posts/?feedView=all" target="_blank" rel="noreferrer">linkedin</a></p>
            <p><a href="https://github.com/ACMenstab?fbclid=IwY2xjawMed8xleHRuA2FlbQIxMABicmlkETFPOW12aGE4SDBMTHc5bWljAR5xNM3XqEoWTZjJFeJbbVH_v43U4kKrBaShbj2mZgxZfDXGy-Sc0PC7HrtWlA_aem_ph76-tGC7dxWoQBo4j8BEw" target="_blank" rel="noreferrer">GitHub</a></p>
            <p>Campus Universitaire de la Technopôle de Borj-Cedria Ben Arous, Tunisia</p>
          </div>

          <div className="developers-info">
            <h2>This website was developed by</h2>
            <ul>
              <li>Amal Lahmadi: UI/UX</li>
              <li>Elaa Elfahem: Frontend</li>
              <li>Moetez Laifi: Backend</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
