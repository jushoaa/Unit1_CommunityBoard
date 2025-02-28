import './App.css';
import ResourceCard from './components/ResourceCard';
const App = () => {

  return (
    <div className="App">
      <h1> Security Engineering Resources</h1>
      <h2> Curated resources and tools to strengthen your security engineering skills</h2>
        <div className="cards-container">
          <ResourceCard 
          image = './assets/applicationsecurity.png' 
          title = 'Alice & Bob Learn Application Security'
          description = 'book on application security'
          link = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAlice-Bob-Learn-Application-Security%2Fdp%2F1119687357&psig=AOvVaw3TVAMjaxwObPWDR3qG71Ce&ust=1740733414162000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCID4ubi_44sDFQAAAAAdAAAAABAE'
          />
          <ResourceCard 
          image = './assets/infosec.png' 
          title = 'InfosecInstitute'
          description = 'The top 13 cybersecurity tools you should know as a Security Engineer'
          link = 'https://www.infosecinstitute.com/resources/network-security-101/security-engineer-cybersecurity-tools/'
          />
          <ResourceCard 
          image = './assets/owasp.png' 
          title = 'OWASP Top 10 Vulnerabilties'
          description = 'The 10 most critical security risks for web apps.'
          link = 'https://owasp.org/www-project-top-ten/'
          />
          <ResourceCard 
          image = './assets/nist.png' 
          title = 'NIST Cybersecurity Framework'
          description = 'Guidelines and best practices to manage cybersecurity risk.'
          link = 'https://www.nist.gov/cyberframework'
          />
          <ResourceCard 
          image = './assets/microsoft.jpg' 
          title = 'Microsoft: Training for Security Engineers'
          description = 'Security engineering resources for corporate environments'
          link = 'https://learn.microsoft.com/en-us/training/career-paths/security-engineer'
          />
          <ResourceCard 
          image = './assets/ejpt.png' 
          title = 'eJPT Certification'
          description = 'Junior Penentration Tester'
          link = 'https://security.ine.com/certifications/ejpt-certification/'
          />
          <ResourceCard 
          image = './assets/coursera.png' 
          title = 'Web Application Security'
          description = 'Coursera coure on Web Application Security'
          link = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi43Z-O9uaLAxX5qFoFHa9jMbYYABAAGgJ2dQ&co=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWrxN5zMbYk3rREst3x_sMDTKNnAskm3zJgh3s2nHQruFZRqzc8HqMkaAv6sEALw_wcB&ohost=www.google.com&cid=CAESVOD2XfMjSIQxbHB-mx4qJZOCX5DWzL2UOawlVMVvyaFAQIbyV7h-ZFHyPJ0DujN0Of7ZCP3Gq0KvC4AFL0qyrdoLEe8xTtiCdHDVypuHqh6fEcwwzQ&sig=AOD64_1PwHoQ7seKAhecgkNpKtl2_0Hnbg&q&adurl&ved=2ahUKEwjCqZmO9uaLAxXORTABHcOPLCsQ0Qx6BAgiEAE'
          />
          <ResourceCard 
          image = './assets/logo-imperva.svg' 
          title = 'What is Application Security?'
          description = 'Article explaining application security types, tools, and best practices'
          link = 'https://www.imperva.com/learn/application-security/application-security/'
          />
          <ResourceCard 
          image = './assets/red-hat.jpg' 
          title = 'Red Hat Training and Certification'
          description = 'Red Hat certifications and hands-on training in knew technology trends'
          link = 'https://www.redhat.com/en/services/training-and-certification'
          />
          <ResourceCard 
          image = './assets/what-is-cloud-security-icon.jpg' 
          title = 'What is Cloud Security?'
          description = 'Article explaning the 6 Pillars of Cloud Security'
          link = 'https://www.checkpoint.com/cyber-hub/cloud-security/what-is-cloud-security/'
          />
        </div>
    </div>
  )
}

export default App