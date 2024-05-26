
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18nextBrowserLanguageDetector)
  .init({
  
    resources: {
      en: {
        translation: {
          "welcome": "Hello, Welcome to Mega-Tel!",
          "phoneNumber": "Phone Number:",
          "log": "Login",
          "reg": "sign up",
          "user": "username",
          "pwd": "password",
          "reme": "remember me",
          "forgot": "forgot password ?",
          "donthaveacount": "dont have an acount?",
          "home": "Home",
          "about": "About",
          "contactUs": "Contact Us",
          "login": "Login",
          "language": "Language",
          "Customer Support 24-7": "Customer Support 24-7",
          "Monday to Saturday 9:00 AM - 9:00 PM": "Monday to Saturday 9:00 AM - 9:00 PM",
          "Services": "Services",
          "Telephony": "Telephony",
          "Professional phone call answering": "Professional phone call answering",
          "24/7 customer support": "24/7 customer support",
          "Inbound and Outbound services": "Inbound and Outbound services",
          "Email Processing": "Email Processing",
          "Fast and accurate email processing": "Fast and accurate email processing",
          "Customized email responses": "Customized email responses",
          "Efficient inquiry management": "Efficient inquiry management",
          "Office in Bulgaria": "Office in Bulgaria",
          "Knyaz Boris I, 148, Floor 1": "Knyaz Boris I, 148, Floor 1",
          "Region Vazrazhdane, Sofia, Bulgaria": "Region Vazrazhdane, Sofia, Bulgaria",
          "ID No.: 206341672": "ID No.: 206341672",
          "VAT No.: BG206341672": "VAT No.: BG206341672",
          "Our Locations": "Our Locations",
          "Greece": "Greece",
          "Bulgaria": "Bulgaria",
          "Tunisia": "Tunisia",
          "Follow us": "Follow us",
          "Copyright © 2024 MegaTel": "Copyright © 2024 MegaTel",
          "header_title": "In the world of digital customer service solutions",
          "header_subtitle": "YOUR GLOBAL STRATEGIC PARTNER",
          "header_welcomeMessage": "Welcome to MegaTel - your first-class partner for professional call center services!",
          "header_welcomeMessage_continue": "Today we present to you our first-class call center services, which are specifically tailored to the needs of large companies.",
          "experience_title": "Experience and stability",
          "experience_yearsOfSuccess": "7 years of undefeated success",
          "experience_description": "MegaTel is a leading call center company specializing in outstanding communications solutions.",
          "experience_description_continue": "With many years of experience, we offer you high-quality services that are tailored to your individual needs.",
          "infoBox_projectsCompleted_title": "Projects Completed",
          "infoBox_projectsCompleted_text": "19+ Project successfully completed.",
          "infoBox_yearsOfExperience_title": "Years of Experience",
          "infoBox_yearsOfExperience_text": "7+ Years of experience with pride.",
          "infoBox_partnerships_title": "Partnerships",
          "infoBox_partnerships_text": "10+ Partnership worldwide.",
          "infoBox_employees_title": "Employees",
          "infoBox_employees_text": "150+ Employees worldwide.",
          "stabilityQuality_title": "Stability and quality",
          "stabilityQuality_qualityService": "Quality service",
          "title_flexibility": "flexibility",
    "title_Expertise": "Expertise",
    "title_technology": "technology",
          
          "stabilityQuality_flexibility": "Flexible services as needed. Scalable solutions for business growth.",
          "stabilityQuality_expertise": "Specialized teams with in-depth expertise. Continuous training for employees.",
          "stabilityQuality_technology": "State-of-the-art communication technologies. Security protocols for data protection.",
          "sustainability_title": "Sustainability",
          "sustainability_commitment": "Committed to changing the world for the next generation with younger opinions!",
          "sustainability_practice": "We practice only the best success reliability quality & modern technology",
          "ourLocations_title": "Our locations",
          "ourLocations_mainBranches": "Our main branches are in Tunisia and Bulgaria and we are proud to have a local presence in strategically important regions.",
          "ourLocations_mainBranches_continue": "But let's go beyond physical boundaries. Our network extends worldwide as we are digitally connected to each of our partners and employees.",
          "Tunisia_title": "Tunisia",
    "Bulgaria_title": "Bulgaria",
    "Worldwide_title": "Worldwide",
          "ourLocations_tunisia": "2050 Tunis Street, Ben Arous",
          "ourLocations_bulgaria": "1000 Sofia Street, Knyaz Boris",
          "ourLocations_worldwide": "Home office",
          "footer_securedFuture": "With us you have secured your future",
          "footer_leadingCompany": "We are a world-leading international company",
          "FN":"Full Name",
          "EMAIL":"Your Email",
            "SL":"Select language...",
            "headquarters": "Headquarters in Sofia",

  "mainBranch": "Our main branch",
  "revolutionize": "Revolutionize Your Business Communication with MegaTel",
  "elevate": "Elevate your customer service experience and streamline your operations with our cutting-edge call center services.",
  "teamOfExperts": "Our team of experts is dedicated to helping you achieve success through effective communication strategies. Don't miss out on the opportunity to revolutionize your business communication with MegaTel. Reach out to us today and embark on a journey towards excellence.",
  "address": "Our address:",
  "street": "1000 Sofia Street, Knyaz Boris",
  "phone": "Phone:",
  "email": "Email:",
  "title": "We only practice the best",
  "sustainability": "Sustainability",
  "punctuality": "Punctuality",
  "technology": "Modern technology",
  "quality": "Quality"
              
            
            




        }
      },
      fr: {
        translation: {
          "welcome": "Bonjour, Bienvenue a Mega-Tel!",
          "phoneNumber": "Numéro de téléphone :",
          "log": "Connexions",
          "reg": "S'inscrire",
          "user": "nom d'utillisateur",
          "pwd": "mot de passe",
          "reme": "rester connecter",
          "forgot": "mot de pase oublie ?",
          "donthaveacount": "n'avez vous de compte ?",
          "home": "Accueil",
          "about": "À propos",
          "contactUs": "Contactez-nous",
          "login": "S\'identifier",
          "language": "Langue",

          "Customer Support 24-7": "Support client 24h/24, 7j/7",
          "Monday to Saturday 9:00 AM - 9:00 PM": "Du lundi au samedi de 9h à 21h",
          "Services": "Services",
          "Telephony": "Téléphonie",
          "Professional phone call answering": "Réponse professionnelle aux appels téléphoniques",
          "24/7 customer support": "Support client 24h/24, 7j/7",
          "Inbound and Outbound services": "Services entrants et sortants",
          "Email Processing": "Traitement des e-mails",
          "Fast and accurate email processing": "Traitement rapide et précis des e-mails",
          "Customized email responses": "Réponses e-mail personnalisées",
          "Efficient inquiry management": "Gestion efficace des demandes",
          "Office in Bulgaria": "Bureau en Bulgarie",
          "Knyaz Boris I, 148, Floor 1": "Knyaz Boris I, 148, étage 1",
          "Region Vazrazhdane, Sofia, Bulgaria": "Région Vazrazhdane, Sofia, Bulgarie",
          "ID No.: 206341672": "N° d'identification : 206341672",
          "VAT No.: BG206341672": "Numéro de TVA : BG206341672",
          "Our Locations": "Nos sites",
          "Greece": "Grèce",
          "Bulgaria": "Bulgarie",
          "Tunisia": "Tunisie",
          "Follow us": "Suivez-nous",
          "Copyright © 2024 MegaTel": "Droits d'auteur © 2024 MegaTel",
          "header_title": "Dans le monde des solutions de service client numérique",
          "header_subtitle": "VOTRE PARTENAIRE STRATÉGIQUE MONDIAL",
          "header_welcomeMessage": "Bienvenue chez MegaTel - votre partenaire de première classe pour les services professionnels de centre d'appels!",
          "header_welcomeMessage_continue": "Aujourd'hui, nous vous présentons nos services de centre d'appels de première classe, spécialement conçus pour les besoins des grandes entreprises.",
          "experience_title": "Expérience et stabilité",
          "experience_yearsOfSuccess": "7 ans de succès inégalé",
          "experience_description": "MegaTel est une entreprise de centre d'appels leader spécialisée dans des solutions de communication exceptionnelles.",
          "experience_description_continue": "Forts de nombreuses années d'expérience, nous vous proposons des services de haute qualité adaptés à vos besoins individuels.",
          "infoBox_projectsCompleted_title": "Projets Réalisés",
          "infoBox_projectsCompleted_text": "Plus de 19 projets réalisés avec succès.",
          "infoBox_yearsOfExperience_title": "Années d'expérience",
          "infoBox_yearsOfExperience_text": "Plus de 7 ans d'expérience avec fierté.",
          "infoBox_partnerships_title": "Partenariats",
          "infoBox_partnerships_text": "Plus de 10 partenariats dans le monde entier.",
          "infoBox_employees_title": "Employés",
          "infoBox_employees_text": "Plus de 150 employés dans le monde entier.",
          "stabilityQuality_title": "Stabilité et qualité",
          "stabilityQuality_qualityService": "Service de qualité",
          "title_flexibility": "flexibilité",
    "title_Expertise": "Expertise",
    "title_technology": "technologie",
          "stabilityQuality_flexibility": "Services flexibles selon les besoins. Solutions évolutives pour la croissance de l'entreprise.",
          "stabilityQuality_expertise": "Équipes spécialisées avec une expertise approfondie. Formation continue pour les employés.",
          "stabilityQuality_technology": "Technologies de communication de pointe. Protocoles de sécurité pour la protection des données.",
          "sustainability_title": "Durabilité",
          "sustainability_commitment": "Engagés à changer le monde pour la prochaine génération avec des opinions plus jeunes !",
          "sustainability_practice": "Nous ne pratiquons que le meilleur succès, fiabilité, qualité et technologie moderne.",
          "ourLocations_title": "Nos sites",
          "ourLocations_mainBranches": "Nos principales succursales se trouvent en Tunisie et en Bulgarie et nous sommes fiers d'avoir une présence locale dans des régions stratégiquement importantes.",
          "ourLocations_mainBranches_continue": "Mais allons au-delà des frontières physiques. Notre réseau s'étend dans le monde entier car nous sommes connectés numériquement à chacun de nos partenaires et employés.",
          "Tunisia_title": "Tunisie",
    "Bulgaria_title": "Bulgarie",
    "Worldwide_title": "Dans le monde entier",
          "ourLocations_tunisia": "2050 Rue de Tunis, Ben Arous",
          "ourLocations_bulgaria": "1000 Rue Sofia, Knyaz Boris",
          "ourLocations_worldwide": "Bureau à domicile",
          "footer_securedFuture": "Avec nous, vous avez assuré votre avenir",
          "footer_leadingCompany": "Nous sommes une entreprise internationale de premier plan",
          "FN": "Nom complet",
          "EMAIL":"Votre Email",
          "SL":"Sélectionner la langue...",
          "headquarters": "Siège à Sofia",
          
          "mainBranch": "Notre succursale principale",
          "revolutionize": "Révolutionnez votre communication d'entreprise avec MegaTel",
          "elevate": "Élevez votre expérience de service client et rationalisez vos opérations avec nos services de centre d'appels de pointe.",
          "teamOfExperts": "Notre équipe d'experts est dédiée à vous aider à réussir grâce à des stratégies de communication efficaces. Ne manquez pas l'opportunité de révolutionner votre communication d'entreprise avec MegaTel. Contactez-nous dès aujourd'hui et embarquez dans un voyage vers l'excellence.",
          "address": "Notre adresse :",
          "street": "1000 rue Sofia, Knyaz Boris",
          "phone": "Téléphone :",
          "email": "Email :",
          "title": "Nous ne pratiquons que le meilleur",
    "sustainability": "Durabilité",
    "punctuality": "Ponctualité",
    "technology": "Technologie moderne",
    "quality": "Qualité"
        
            
          
          

        }
      },
      de: {
        translation: {
          "welcome": "Hallo, Willkommen bei Mega-Tel!",
          "phoneNumber": "Telefonnummer:",
          "log": "Anmelden",
          "reg": "Registrieren",
          "user": "Benutzername",
          "pwd": "Passwort",
          "reme": "Angemeldet bleiben",
          "forgot": "Passwort vergessen?",
          "donthaveacount": "Keinen Account?",
          "home": "Zuhause",
          "about": "Über",
          "contactUs": "Kontaktiere uns",
          "login": "Anmeldung",
          "language": "Sprache",
          "Customer Support 24-7": "Kundensupport rund um die Uhr",
          "Monday to Saturday 9:00 AM - 9:00 PM": "Montag bis Samstag von 9:00 bis 21:00 Uhr",
          "Services": "Dienstleistungen",
          "Telephony": "Telefonie",
          "Professional phone call answering": "Professionelle Telefonannahme",
          "24/7 customer support": "Kundensupport rund um die Uhr",
          "Inbound and Outbound services": "Eingehende und ausgehende Dienstleistungen",
          "Email Processing": "E-Mail-Verarbeitung",
          "Fast and accurate email processing": "Schnelle und genaue E-Mail-Verarbeitung",
          "Customized email responses": "Individuelle E-Mail-Antworten",
          "Efficient inquiry management": "Effizientes Anfragemanagement",
          "Office in Bulgaria": "Büro in Bulgarien",
          "Knyaz Boris I, 148, Floor 1": "Knyaz Boris I, 148, Etage 1",
          "Region Vazrazhdane, Sofia, Bulgaria": "Region Vazrazhdane, Sofia, Bulgarien",
          "ID No.: 206341672": "ID-Nr.: 206341672",
          "VAT No.: BG206341672": "USt-IdNr.: BG206341672",
          "Our Locations": "Unsere Standorte",
          "Greece": "Griechenland",
          "Bulgaria": "Bulgarien",
          "Tunisia": "Tunesien",
          "Follow us": "Folgen Sie uns",
          "Copyright © 2024 MegaTel": "Urheberrecht © 2024 MegaTel",
          "header_title": "In der Welt digitaler Kundenservice-Lösungen",
          "header_subtitle": "IHR GLOBALER STRATEGISCHER PARTNER",
          "header_welcomeMessage": "Willkommen bei MegaTel - Ihrem erstklassigen Partner für professionelle Callcenter-Dienstleistungen!",
          "header_welcomeMessage_continue": "Heute präsentieren wir Ihnen unsere erstklassigen Callcenter-Dienstleistungen, die speziell auf die Bedürfnisse großer Unternehmen zugeschnitten sind.",
          "experience_title": "Erfahrung und Stabilität",
          "experience_yearsOfSuccess": "7 Jahre ungeschlagener Erfolg",
          "experience_description": "MegaTel ist ein führendes Callcenter-Unternehmen, das sich auf herausragende Kommunikationslösungen spezialisiert hat.",
          "experience_description_continue": "Mit langjähriger Erfahrung bieten wir Ihnen hochwertige Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.",
          "infoBox_projectsCompleted_title": "Abgeschlossene Projekte",
          "infoBox_projectsCompleted_text": "Über 19 erfolgreich abgeschlossene Projekte.",
          "infoBox_yearsOfExperience_title": "Jahre Erfahrung",
          "infoBox_yearsOfExperience_text": "Über 7 Jahre Erfahrung mit Stolz.",
          "infoBox_partnerships_title": "Partnerschaften",
          "infoBox_partnerships_text": "Über 10 Partnerschaften weltweit.",
          "infoBox_employees_title": "Mitarbeiter",
          "infoBox_employees_text": "Über 150 Mitarbeiter weltweit.",
          "stabilityQuality_title": "Stabilität und Qualität",
          "stabilityQuality_qualityService": "Qualitätsservice",
          "title_flexibility": "Flexibilität",
    "title_Expertise": "Expertise",
    "title_technology": "Technologie",
          "stabilityQuality_flexibility": "Flexible Dienstleistungen nach Bedarf. Skalierbare Lösungen für Unternehmenswachstum.",
          "stabilityQuality_expertise": "Spezialisierte Teams mit fundiertem Fachwissen. Kontinuierliche Schulungen für Mitarbeiter.",
          "stabilityQuality_technology": "Kommunikationstechnologien auf dem neuesten Stand der Technik. Sicherheitsprotokolle zum Schutz der Daten.",
          "sustainability_title": "Nachhaltigkeit",
          "sustainability_commitment": "Verpflichtet, die Welt für die nächste Generation mit jüngeren Meinungen zu verändern!",
          "sustainability_practice": "Wir praktizieren nur den besten Erfolg, die Zuverlässigkeit, Qualität und moderne Technologie.",
          "ourLocations_title": "Unsere Standorte",
          "ourLocations_mainBranches": "Unsere Hauptniederlassungen befinden sich in Tunesien und in Bulgarien, und wir sind stolz darauf, in strategisch wichtigen Regionen eine lokale Präsenz zu haben.",
          "ourLocations_mainBranches_continue": "Aber lassen Sie uns über physische Grenzen hinausgehen. Unser Netzwerk erstreckt sich weltweit, da wir digital mit jedem unserer Partner und Mitarbeiter verbunden sind.",
          "Tunisia_title": "Tunesien",
          "Bulgaria_title": "Bulgarien",
          "Worldwide_title": "Weltweit",
          "ourLocations_tunisia": "2050 Tunis Straße, Ben Arous",
          "ourLocations_bulgaria": "1000 Sofia Straße, Knyaz Boris",
          "ourLocations_worldwide": "Home Office",
          "footer_securedFuture": "Mit uns haben Sie Ihre Zukunft gesichert",
          "footer_leadingCompany": "Wir sind ein weltweit führendes internationales Unternehmen",
            "FN":"Vollständiger Name",
            "EMAIL":"Ihre E-Mail",
            "SL":"Sprache auswählen...",
            "headquarters": "Hauptquartier in Sofia",
            
            "mainBranch": "Unsere Hauptniederlassung",
            "revolutionize": "Revolutionieren Sie Ihre Unternehmenskommunikation mit MegaTel",
            "elevate": "Verbessern Sie Ihr Kundenservice-Erlebnis und optimieren Sie Ihre Abläufe mit unseren hochmodernen Callcenter-Services.",
            "teamOfExperts": "Unser Team von Experten ist darauf spezialisiert, Ihnen durch effektive Kommunikationsstrategien zum Erfolg zu verhelfen. Verpassen Sie nicht die Gelegenheit, Ihre Unternehmenskommunikation mit MegaTel zu revolutionieren. Nehmen Sie noch heute Kontakt mit uns auf und begeben Sie sich auf eine Reise zur Exzellenz.",
            "address": "Unsere Adresse:",
            "street": "1000 Sofia-Straße, Knyaz Boris",
            "phone": "Telefon:",
            "email": "E-Mail:",
            "title": "Wir praktizieren nur das Beste",
    "sustainability": "Nachhaltigkeit",
    "punctuality": "Pünktlichkeit",
    "technology": "Moderne Technologie",
    "quality": "Qualität"
            
              
            
            
            
      
            
            
            
            
        }
      }

    },
    
    fallbackLng: "de",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });




// append app to dom
