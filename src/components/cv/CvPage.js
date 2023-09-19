// import React from 'react';
// import './styles.css'; // Import your CSS file here

// function CvPage() {
//   const imagePath = `${process.env.PUBLIC_URL}/assets/05.jpg`;
//     return (
//         <div>
//           <header>
//             <div className="photo_hm">
//             <p><img src={imagePath} alt=" " /></p>
//             </div>
//             <div className="name">
//               <h1><span className="HINAFI">LOUKILIA</span> KHAWLA</h1>
//               <h2> <span className="underline">Ifirmiere  </span>auxiliaire </h2>
//             </div>
//           </header>
//           <div className="conteneur_aside_main">
//             <aside>
//               <section id="contact">
//                 <h2>Contact</h2>
//                 <h3>Adresse</h3>
//                 <p>23 Rue Oran, Oued-Zem</p>
//                 <h3>Téléphone</h3>
//                 <p>0644526432</p>
//                 <h3>E-mail</h3>
//                 <p><a href="mailto:quarkend@live.fr">loukiliakhawla@gmail.com</a></p>
//               </section>
//               <section id="apropos">
//                 <h2>A Propos</h2>
//                 <p>Compétences :
// - Administration de médicaments et de soins de base
// - Soins aux patients, y compris la surveillance des signes vitaux
// - Communication efficace avec les patients et leurs familles
// - Respect strict des protocoles de confidentialité
// - Travail d'équipe au sein d'un environnement médical.
//                 </p>
//                 <p>Découvrez mon CV sur github en cliquant
//                   <a href="https://quarkend.github.io/CV4/">ici</a></p>
             
//               </section>
//               <section id="zoneloisire">
//                 <h2>Loisirs</h2>
//                 <div className="loisirs">
//                   <div className="icon"><i className="fas fa-table-tennis"></i></div>
//                   <div className="icon"><i className="fas fa-chess"></i></div>
//                   <div className="icon"> <i className="fas fa-volleyball-ball"></i></div>
//                 </div>
//               </section>
//             </aside>
//             <main>
//               <section id="education">
//                 <h2><i className="fas fa-graduation-cap"></i> Formation</h2>
//                 <div className="colonneprincipale">
//                 - Institut de Soins Infirmiers de Khouribga, 
// Maroc Diplôme d'Infirmière Auxiliaire 2021 -
// 2023

//                 </div>
//               </section>
//               <section id="experience">
//                 <h2><i className="fas fa-briefcase"></i>Expérience Professionelle</h2>
//                 <div className="colonneprincipale">
//                 - Hôpital HASSAN 2 de Khouribga : janvier 
// 2021 – juillet 2023
//                 </div>
//               </section>
//               <section id="references">
//                 <h2><i className="fas fa-pencil-alt"></i>Centres d'intérêt</h2>
//                 <div className="colonneprincipale">
                
// - Passionnée par la fourniture de soins de haute 
// qualité aux patients 
// - Lecture d'articles médicaux pour rester à jour sur 
// les dernières avancées médicales 
// - Bénévolat dans des organisations médicales 
// locales

//                 </div>
//               </section>
//             </main>
//           </div>
//         </div>
//       );
// }

// export default CvPage;
import React from 'react';
import './styles.css'; // Import your CSS file here

function CvPage() {
  const imagePath = `${process.env.PUBLIC_URL}/assets/05.jpg`;
  // Define your new resume data
  const resumeData = {
    name: 'DÉVELOPPEUR WEB JUNIOR',
    driverLicense: 'PERMIS B - Véhicule léger',
    languages: {
      arabe: 'Courant',
      anglais: 'Intermédiaire',
    },
    skills: [
      'Faire preuve d\'autonomie',
      'Faire preuve de réactivité',
      'Organiser son travail selon les priorités et les objectifs',
      'Travailler en équipe',
      'Concevoir une application web',
      'Actualiser régulièrement ses connaissances',
      'Anglais technique',
      'Application web',
      'Assembler des composants logiciels',
      'Coder',
      'Concevoir une maquette de présentation',
      'CSS',
      'Déterminer des mesures correctives',
      'Développer un logiciel, un système d\'informations, une application',
      'Développer une application en lien avec une base de données',
      'Gérer et déployer des logiciels à distance',
      'HTML',
      'Recueillir et analyser les besoins client',
      'SQL',
    ],
    interests: ['INFORMATIQUE', 'SPORTS', 'CINÉMA', 'BRICOLAGE'],
    experiences: [
      {
        period: '04/2010 - 06/2017',
        title: 'CUISINIER - CHEF DE PARTIE PIZZAIOLO',
      },
    ],
    education: [
      {
        year: '2022',
        degree: 'DEVELOPPEUR WEB - Bac+2 (BTS, DUT ou équivalents)',
        field: 'Informatique et systèmes d\'information',
        institution: 'Titulaire d\'un diplôme de développeur web',
      },
      {
        year: '1992',
        degree: 'BAC SCIENTIFIQUE OBTENU AU MAROC',
        field: 'Sciences naturelles',
      },
    ],
  };

  return (
    <div>
      <header>
        <div className="photo_hm">
          {/* Add your image source here */}
          <p><img src={imagePath} alt=" " /></p>
        </div>
        <div className="name">
          <h1><span className="HINAFI">HINAFI</span> MOHAMMED</h1>
          <h2> <span className="underline">{resumeData.name}</span></h2>
        </div>
      </header>
      <div className="conteneur_aside_main">
        <aside>
          <section id="contact">
            <h2>Contact</h2>
            <h3>Adresse</h3>
            <p>16 Rue pierre brossolette fontenay aux roses</p>
            <h3>Téléphone</h3>
            <p>0651115476</p>
            <h3>E-mail</h3>
            <p><a href="mailto:quarkend@live.fr">quarkend@gmail.com</a></p>
          </section>
          <section id="apropos">
            <h2>Compétences</h2>
            <ul>
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
          <section id="zoneloisire">
            <h2>Loisirs</h2>
            <div className="loisirs">
              <div className="icon"><i className="fas fa-table-tennis"></i></div>
              <div className="icon"><i className="fas fa-chess"></i></div>
              <div className="icon"> <i className="fas fa-volleyball-ball"></i></div>
            </div>
          </section>
        </aside>
        <main>
          <section id="education">
            <h2><i className="fas fa-graduation-cap"></i> Formation</h2>
            <ul>
              {resumeData.education.map((edu, index) => (
                <li key={index}>
                  {edu.year} - {edu.degree} - {edu.field} - {edu.institution}
                </li>
              ))}
            </ul>
          </section>
          <section id="experience">
            <h2><i className="fas fa-briefcase"></i>Expérience Professionnelle</h2>
            <ul>
              {resumeData.experiences.map((exp, index) => (
                <li key={index}>
                  {exp.period} - {exp.title}
                </li>
              ))}
            </ul>
          </section>
          <section id="references">
            <h2><i className="fas fa-pencil-alt"></i>Centres d'intérêt</h2>
            <ul>
              {resumeData.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default CvPage;
