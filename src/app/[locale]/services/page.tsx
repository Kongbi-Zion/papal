'use client'

import { useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  useEffect(() => {
    const wednesdaySection = document.getElementById('wednesday-15-april-2026');
    if (wednesdaySection) {
      setTimeout(() => {
        wednesdaySection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, []);

  const scheduleDataEN = [
    { type: 'header', content: 'Monday 13 April 2026 - ROME – ALGIERS', section: 'algeria' },
    { type: 'event', time: '08:00', location: 'Rome/Fiumicino International Airport', event: 'Departure by airplane from Rome/Fiumicino International Airport to Algiers', section: 'algeria' },
    { type: 'event', time: '09:00', location: 'Algiers "Houari Boumédiène" International Airport', event: 'Arrival at Algiers "Houari Boumédiène" International Airport', section: 'algeria' },
    { type: 'event', time: '09:45', location: 'WELCOME CEREMONY', event: '', section: 'algeria' },
    { type: 'event', time: '09:45', location: 'Maqam Echahid Martyrs\' Monument', event: 'VISIT TO THE MAQAM ECHAHID MARTYRS\' MONUMENT - Greeting of the Holy Father', section: 'algeria' },
    { type: 'event', time: '10:15', location: 'Presidential Palace', event: 'COURTESY VISIT TO THE PRESIDENT OF THE REPUBLIC at the Presidential Palace', section: 'algeria' },
    { type: 'event', time: '11:00', location: '"Djamaa el Djazair" Conference Center', event: 'MEETING WITH THE AUTHORITIES, CIVIL SOCIETY AND THE DIPLOMATIC CORPS - Address of the Holy Father', section: 'algeria' },
    { type: 'event', time: '15:15', location: 'Great Mosque of Algiers', event: 'VISIT TO THE GREAT MOSQUE OF ALGIERS', section: 'algeria' },
    { type: 'event', time: '16:15', location: 'Augustinian Missionary Sisters in Bab El Oued', event: 'PRIVATE VISIT TO THE WELCOME AND FRIENDSHIP CENTER OF THE AUGUSTINIAN MISSIONARY SISTERS', section: 'algeria' },
    { type: 'event', time: '16:40', location: 'Basilica of Our Lady of Africa', event: 'MEETING WITH THE ALGERIAN COMMUNITY - Address of the Holy Father', section: 'algeria' },

    { type: 'header', content: 'Tuesday 14 April 2026 - ALGIERS – ANNABA – ALGIERS', section: 'algeria' },
    { type: 'event', time: '09:20', location: 'Algiers "Houari Boumédiène" International Airport', event: 'Departure by airplane from Algiers to Annaba', section: 'algeria' },
    { type: 'event', time: '10:30', location: 'Annaba "Rabah Bitat" International Airport', event: 'Arrival at Annaba "Rabah Bitat" International Airport', section: 'algeria' },
    { type: 'event', time: '11:00', location: 'Archaeological Site of Hippo', event: 'VISIT TO THE ARCHAEOLOGICAL SITE OF HIPPO', section: 'algeria' },
    { type: 'event', time: '11:35', location: 'Nursing Home of the Little Sisters of the Poor', event: 'VISIT TO THE NURSING HOME - Greeting of the Holy Father', section: 'algeria' },
    { type: 'event', time: '12:10', location: 'Augustinian Community House', event: 'PRIVATE MEETING WITH MEMBERS OF THE AUGUSTINIAN ORDER', section: 'algeria' },
    { type: 'event', time: '15:30', location: 'Basilica of Saint Augustine', event: 'HOLY MASS - Homily of the Holy Father', section: 'algeria' },
    { type: 'event', time: '18:00', location: 'Annaba "Rabah Bitat" International Airport', event: 'Departure by airplane from Annaba to Algiers', section: 'algeria' },
    { type: 'event', time: '19:10', location: 'Algiers "Houari Boumédiène" International Airport', event: 'Arrival at Algiers "Houari Boumédiène" International Airport', section: 'algeria' },

    { type: 'header', content: 'Wednesday 15 April 2026 - ALGIERS – YAOUNDÉ', section: 'cameroon', id: 'wednesday-15-april-2026' },
    { type: 'event', time: '09:40', location: 'Algiers "Houari Boumédiène" International Airport', event: 'FAREWELL CEREMONY', section: 'cameroon' },
    { type: 'event', time: '10:10', location: 'Algiers Airport', event: 'Departure from Algiers Airport for Yaoundé', section: 'cameroon' },
    { type: 'event', time: '15:20', location: 'Yaoundé-Nsimalen International Airport', event: 'Arrival at Yaoundé-Nsimalen International Airport - WELCOME CEREMONY', section: 'cameroon' },
    { type: 'event', time: '16:20', location: 'Presidential Palace', event: 'COURTESY VISIT TO THE PRESIDENT OF THE REPUBLIC at the Presidential Palace', section: 'cameroon' },
    { type: 'event', time: '17:05', location: 'Congress Center', event: 'MEETING WITH THE AUTHORITIES, CIVIL SOCIETY AND THE DIPLOMATIC CORPS - Address of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '17:45', location: 'Ngul Zamba Orphanage', event: 'VISIT TO THE NGUL ZAMBA ORPHANAGE - Greeting of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '18:25', location: 'Headquarters of the Episcopal Conference', event: 'PRIVATE MEETING WITH THE BISHOPS OF CAMEROON', section: 'cameroon' },

    { type: 'header', content: 'Thursday 16 April 2026 - YAOUNDÉ – BAMENDA – YAOUNDÉ', section: 'cameroon' },
    { type: 'event', time: '10:05', location: 'Yaoundé-Nsimalen International Airport', event: 'Departure from Yaoundé-Nsimalen International Airport for Bamenda', section: 'cameroon' },
    { type: 'event', time: '11:00', location: 'Bamenda Airport', event: 'Arrival at Bamenda Airport', section: 'cameroon' },
    { type: 'event', time: '11:30', location: 'Saint Joseph\'s Cathedral', event: 'MEETING FOR PEACE WITH THE COMMUNITY OF BAMENDA - Address of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '15:15', location: 'Bamenda International Airport', event: 'HOLY MASS - Homily of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '17:25', location: 'Bamenda Airport', event: 'Departure from Bamenda Airport for Yaoundé', section: 'cameroon' },
    { type: 'event', time: '18:20', location: 'Yaoundé-Nsimalen International Airport', event: 'Arrival at Yaoundé-Nsimalen International Airport', section: 'cameroon' },

    { type: 'header', content: 'Friday 17 April 2026 - YAOUNDÉ – DOUALA – YAOUNDÉ', section: 'cameroon' },
    { type: 'event', time: '09:00', location: 'Yaoundé-Nsimalen Airport', event: 'Departure from Yaoundé-Nsimalen Airport for Douala', section: 'cameroon' },
    { type: 'event', time: '09:55', location: 'Douala International Airport', event: 'Arrival at Douala International Airport', section: 'cameroon' },
    { type: 'event', time: '11:00', location: '"Japoma Stadium"', event: 'HOLY MASS - Homily of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '13:20', location: 'Saint Paul Catholic Hospital', event: 'PRIVATE VISIT TO SAINT PAUL CATHOLIC HOSPITAL', section: 'cameroon' },
    { type: 'event', time: '14:10', location: 'Douala Airport', event: 'Departure from Douala Airport for Yaoundé', section: 'cameroon' },
    { type: 'event', time: '15:15', location: 'Yaoundé-Nsimalen International Airport', event: 'Arrival at Yaoundé-Nsimalen International Airport', section: 'cameroon' },
    { type: 'event', time: '17:30', location: 'Catholic University of Central Africa', event: 'MEETING WITH UNIVERSITY STUDENTS AND PROFESSORS - Address of the Holy Father', section: 'cameroon' },

    { type: 'header', content: 'Saturday 18 April 2026 - YAOUNDÉ – LUANDA', section: 'cameroon' },
    { type: 'event', time: '09:30', location: 'Yaoundé-Ville Airport', event: 'HOLY MASS - Homily of the Holy Father', section: 'cameroon' },
    { type: 'event', time: '12:00', location: 'Yaoundé-Nsimalen International Airport', event: 'FAREWELL CEREMONY', section: 'cameroon' },
    { type: 'event', time: '12:30', location: 'Yaoundé-Nsimalen International Airport', event: 'Departure by airplane from Yaoundé-Nsimalen International Airport for Luanda', section: 'cameroon' },
    { type: 'event', time: '15:00', location: '"4 de Fevereiro" Luanda International Airport', event: 'Arrival at "4 de Fevereiro" Luanda International Airport - WELCOME CEREMONY', section: 'cameroon-end' },

    { type: 'header', content: 'Sunday 19 April 2026 - LUANDA – MUXIMA – LUANDA', section: 'angola' },
    { type: 'event', time: '10:00', location: 'Kilamba', event: 'HOLY MASS - Homily of the Holy Father Regina Caeli', section: 'angola' },
    { type: 'event', time: '15:45', location: 'Luanda "4 de Fevereiro" Airport', event: 'Departure by helicopter from Luanda "4 de Fevereiro" to Muxima', section: 'angola' },
    { type: 'event', time: '16:15', location: 'Muxima Heliport', event: 'Arrival at Muxima Heliport', section: 'angola' },
    { type: 'event', time: '16:30', location: '"Mama Muxima" Shrine', event: 'HOLY ROSARY PRAYER on the esplanade in front of the "Mama Muxima" Shrine - Address of the Holy Father', section: 'angola' },
    { type: 'event', time: '17:45', location: 'Muxima heliport', event: 'Departure by helicopter from the Muxima heliport to Luanda "4 de Fevereiro" Airport', section: 'angola' },
    { type: 'event', time: '18:15', location: 'Luanda "4 de Fevereiro" Airport', event: 'Arrival at Luanda "4 de Fevereiro" Airport', section: 'angola' },

    { type: 'header', content: 'Monday 20 April 2026 - LUANDA – SAURIMO – LUANDA', section: 'angola' },
    { type: 'event', time: '07:50', location: 'Luanda "4 de Fevereiro" Airport', event: 'Departure by airplane from Luanda "4 de Fevereiro" Airport for Saurimo', section: 'angola' },
    { type: 'event', time: '09:20', location: 'Saurimo "Deolinda Rodrigues" Airport', event: 'Arrival at Saurimo "Deolinda Rodrigues" Airport', section: 'angola' },
    { type: 'event', time: '09:45', location: 'Nursing Home', event: 'VISIT TO THE NURSING HOME - Greeting of the Holy Father', section: 'angola' },
    { type: 'event', time: '11:15', location: 'Saurimo esplanade', event: 'HOLY MASS - Homily of the Holy Father', section: 'angola' },
    { type: 'event', time: '13:45', location: 'Saurimo "Deolinda Rodrigues" Airport', event: 'Departure by plane from Saurimo "Deolinda Rodrigues" Airport for Luanda', section: 'angola' },
    { type: 'event', time: '15:15', location: 'Luanda "4 de Fevereiro" International Airport', event: 'Arrival at Luanda "4 de Fevereiro" International Airport', section: 'angola' },
    { type: 'event', time: '17:30', location: 'Parish of Our Lady of Fatima', event: 'MEETING WITH BISHOPS, PRIESTS, CONSECRATED MEN AND WOMEN AND PASTORAL WORKERS - Address of the Holy Father', section: 'angola' },

    { type: 'header', content: 'Tuesday 21 April 2026 - LUANDA – MALABO', section: 'angola' },
    { type: 'event', time: '08:45', location: 'Luanda "4 de Fevereiro" International Airport', event: 'FAREWELL CEREMONY', section: 'angola' },
    { type: 'event', time: '09:15', location: 'Luanda "4 de Fevereiro" International Airport', event: 'Departure by airplane from Luanda "4 de Fevereiro" International Airport for Malabo', section: 'angola' },
    { type: 'event', time: '11:45', location: 'Malabo International Airport', event: 'Arrival at Malabo International Airport - WELCOME CEREMONY', section: 'angola' },
    { type: 'event', time: '12:30', location: 'Presidential Palace', event: 'COURTESY VISIT TO THE PRESIDENT OF THE REPUBLIC at the Presidential Palace', section: 'angola' },
    { type: 'event', time: '13:00', location: 'Presidential Palace', event: 'MEETING WITH THE AUTHORITIES, CIVIL SOCIETY AND THE DIPLOMATIC CORPS - Address of the Holy Father', section: 'angola' },
    { type: 'event', time: '16:00', location: 'León XIV Campus of the National University', event: 'MEETING WITH THE WORLD OF CULTURE - Address of the Holy Father', section: 'angola' },
    { type: 'event', time: '17:15', location: '"JEAN PIERRE OLIE" PSYCHIATRIC HOSPITAL', event: 'VISIT TO THE STAFF AND PATIENTS - Greeting of the Holy Father', section: 'angola' },
    { type: 'event', time: '19:00', location: 'Various Locations', event: 'PRIVATE MEETING WITH THE BISHOPS OF EQUATORIAL GUINEA', section: 'angola' },

    { type: 'header', content: 'Wednesday 22 April 2026 - MALABO – MONGOMO – BATA – MALABO', section: 'equatorial-guinea' },
    { type: 'event', time: '08:10', location: 'Malabo', event: 'Departure by airplane from Malabo for Mongomo', section: 'equatorial-guinea' },
    { type: 'event', time: '09:10', location: 'Mengomeyén "Presidente Obiang Nguema" International Airport', event: 'Arrival at Mengomeyén "Presidente Obiang Nguema" International Airport', section: 'equatorial-guinea' },
    { type: 'event', time: '10:30', location: 'Basilica of the Immaculate Conception', event: 'HOLY MASS - Homily of the Holy Father', section: 'equatorial-guinea' },
    { type: 'event', time: '12:30', location: '"POPE FRANCIS TECHNOLOGY SCHOOL"', event: 'VISIT TO THE "POPE FRANCIS TECHNOLOGY SCHOOL"', section: 'equatorial-guinea' },
    { type: 'event', time: '15:10', location: 'Mengomeyén "Presidente Obiang Nguema" International Airport', event: 'Departure from Mengomeyén "Presidente Obiang Nguema" International Airport for Bata', section: 'equatorial-guinea' },
    { type: 'event', time: '15:50', location: 'Bata International Airport', event: 'Arrival at Bata International Airport', section: 'equatorial-guinea' },
    { type: 'event', time: '16:50', location: 'Bata Prison', event: 'VISIT TO BATA PRISON - Greeting of the Holy Father', section: 'equatorial-guinea' },
    { type: 'event', time: '17:25', location: 'Memorial to the Victims of the Explosion of 7 March 2021', event: 'MOMENT OF PRAYER AT THE MEMORIAL TO THE VICTIMS OF THE EXPLOSION OF 7 MARCH 2021', section: 'equatorial-guinea' },
    { type: 'event', time: '18:10', location: 'Bata Stadium', event: 'MEETING WITH YOUNG PEOPLE AND FAMILIES - Address of the Holy Father', section: 'equatorial-guinea' },
    { type: 'event', time: '19:40', location: 'Bata Airport', event: 'Departure from Bata Airport for Malabo', section: 'equatorial-guinea' },
    { type: 'event', time: '20:30', location: 'Malabo International Airport', event: 'Arrival at Malabo International Airport', section: 'equatorial-guinea' },

    { type: 'header', content: 'Thursday 23 April 2026 - MALABO – ROMA', section: 'equatorial-guinea' },
    { type: 'event', time: '10:00', location: 'Malabo Stadium', event: 'HOLY MASS - Homily of the Holy Father', section: 'equatorial-guinea' },
    { type: 'event', time: '12:15', location: 'Malabo International Airport', event: 'FAREWELL CEREMONY', section: 'equatorial-guinea' },
    { type: 'event', time: '12:45', location: 'Malabo Airport', event: 'Departure from Malabo Airport for Rome', section: 'equatorial-guinea' },
    { type: 'event', time: '19:55', location: 'Rome/Fiumicino International Airport', event: 'Arrival at Rome/Fiumicino International Airport', section: 'equatorial-guinea' }
  ];

  const scheduleDataFR = [
    { type: 'header', content: 'Lundi 13 avril 2026 - ROME - ALGER', section: 'algeria' },
    { type: 'event', time: '08h00', location: 'Aéroport International de Rome/Fiumicino', event: 'Départ en avion de l\'Aéroport International de Rome/Fiumicino pour Alger', section: 'algeria' },
    { type: 'event', time: '09h00', location: 'Aéroport International d\'Alger "Houari Boumédiène"', event: 'Arrivée à l\'Aéroport International d\'Alger "Houari Boumédiène"', section: 'algeria' },
    { type: 'event', time: '09h45', location: 'CÉRÉMONIE DE BIENVENUE', event: '', section: 'algeria' },
    { type: 'event', time: '09h45', location: 'Monument aux Martyrs Maqam Echahid', event: 'VISITE DU MONUMENT AUX MARTYRS MAQAM ECHAHID - Salutations du Saint-Père', section: 'algeria' },
    { type: 'event', time: '10h15', location: 'Palais présidentiel', event: 'VISITE DE COURTOISIE AU PRÉSIDENT DE LA RÉPUBLIQUE au Palais présidentiel', section: 'algeria' },
    { type: 'event', time: '11h00', location: 'Centre de Conférences "Djamaa el Djazair"', event: 'RENCONTRE AVEC LES AUTORITÉS, LA SOCIÉTÉ CIVILE ET LE CORPS DIPLOMATIQUE - Discours du Saint-Père', section: 'algeria' },
    { type: 'event', time: '15h15', location: 'Grande Mosquée d\'Alger', event: 'VISITE À LA GRANDE MOSQUÉE D\'ALGER', section: 'algeria' },
    { type: 'event', time: '16h15', location: 'Centre d\'Accueil et d\'Amitié des Sœurs Missionnaires Augustiniennes à Bab El Oued', event: 'VISITE PRIVÉE AU CENTRE D\'ACCUEIL ET D\'AMITIÉ DES SŒURS MISSIONNAIRES AUGUSTINIENNES', section: 'algeria' },
    { type: 'event', time: '16h40', location: 'Basilique Notre-Dame d\'Afrique', event: 'RENCONTRE AVEC LA COMMUNAUTÉ ALGÉRIENNE - Discours du Saint-Père', section: 'algeria' },

    { type: 'header', content: 'Mardi 14 avril 2026 - ALGER - ANNABA - ALGER', section: 'algeria' },
    { type: 'event', time: '09h20', location: 'Aéroport International d\'Alger "Houari Boumédiène"', event: 'Départ en avion de l\'Aéroport International d\'Alger "Houari Boumédiène" d\'Alger pour Annaba', section: 'algeria' },
    { type: 'event', time: '10h30', location: 'Aéroport International d\'Annaba "Rabah Bitat"', event: 'Arrivée à l\'Aéroport International d\'Annaba "Rabah Bitat"', section: 'algeria' },
    { type: 'event', time: '11h00', location: 'Site Archéologique d\'Hippone', event: 'VISITE DU SITE ARCHÉOLOGIQUE D\'HIPPONE', section: 'algeria' },
    { type: 'event', time: '11h35', location: 'Maison d\'Accueil pour Personnes Âgées des Petites Sœurs des Pauvres', event: 'VISITE À LA MAISON D\'ACCUEIL POUR PERSONNES ÂGÉES DES PETITES SŒURS DES PAUVRES - Salutations du Saint-Père', section: 'algeria' },
    { type: 'event', time: '12h10', location: 'Maison de la Communauté Augustinienne', event: 'RENCONTRE PRIVÉE AVEC LES MEMBRES DE L\'ORDRE AUGUSTINIEN', section: 'algeria' },
    { type: 'event', time: '15h30', location: 'Basilique Saint-Augustin', event: 'MESSE - Homélie du Saint-Père', section: 'algeria' },
    { type: 'event', time: '18h00', location: 'Aéroport International d\'Annaba "Rabah Bitat"', event: 'Départ en avion de l\'Aéroport International d\'Annaba "Rabah Bitat" pour Alger', section: 'algeria' },
    { type: 'event', time: '19h10', location: 'Aéroport International d\'Alger "Houari Boumédiène"', event: 'Arrivée à l\'Aéroport International d\'Alger "Houari Boumédiène"', section: 'algeria' },

    { type: 'header', content: 'Mercredi 15 avril 2026 - ALGER - YAOUNDÉ', section: 'cameroon', id: 'wednesday-15-april-2026' },
    { type: 'event', time: '09h40', location: 'Aéroport International "Houari Boumédiène" d\'Alger', event: 'CÉRÉMONIE DE DÉPART', section: 'cameroon' },
    { type: 'event', time: '10h10', location: 'Aéroport d\'Alger', event: 'Départ de l\'Aéroport d\'Alger pour Yaoundé', section: 'cameroon' },
    { type: 'event', time: '15h20', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'Arrivée à l\'Aéroport International de Yaoundé-Nsimalen - CÉRÉMONIE DE BIENVENUE', section: 'cameroon' },
    { type: 'event', time: '16h20', location: 'Palais Présidentiel', event: 'VISITE DE COURTOISIE AU PRÉSIDENT DE LA RÉPUBLIQUE au Palais Présidentiel', section: 'cameroon' },
    { type: 'event', time: '17h05', location: 'Palais des Congrès', event: 'RENCONTRE AVEC LES AUTORITÉS, LA SOCIÉTÉ CIVILE ET LE CORPS DIPLOMATIQUE - Discours du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '17h45', location: 'Orphelinat Ngul Zamba', event: 'VISITE À L\'ORPHELINAT NGUL ZAMBA - Salutations du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '18h25', location: 'Siège de la Conférence Épiscopale', event: 'RENCONTRE PRIVÉE AVEC LES ÉVÊQUES DU CAMEROUN', section: 'cameroon' },

    { type: 'header', content: 'Jeudi 16 avril 2026 - YAOUNDÉ - BAMENDA - YAOUNDÉ', section: 'cameroon' },
    { type: 'event', time: '10h05', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'Départ de l\'Aéroport International de Yaoundé-Nsimalen pour Bamenda', section: 'cameroon' },
    { type: 'event', time: '11h00', location: 'Aéroport de Bamenda', event: 'Arrivée à l\'Aéroport de Bamenda', section: 'cameroon' },
    { type: 'event', time: '11h30', location: 'Cathédrale Saint-Joseph', event: 'RENCONTRE POUR LA PAIX AVEC LA COMMUNAUTÉ DE BAMENDA - Discours du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '15h15', location: 'Aéroport International de Bamenda', event: 'MESSE - Homélie du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '17h25', location: 'Aéroport de Bamenda', event: 'Départ de l\'Aéroport de Bamenda pour Yaoundé', section: 'cameroon' },
    { type: 'event', time: '18h20', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'Arrivée à l\'Aéroport International de Yaoundé-Nsimalen', section: 'cameroon' },

    { type: 'header', content: 'Vendredi 17 avril 2026 - YAOUNDÉ - DOUALA - YAOUNDÉ', section: 'cameroon' },
    { type: 'event', time: '09h00', location: 'Aéroport de Yaoundé-Nsimalen', event: 'Départ de l\'Aéroport de Yaoundé-Nsimalen pour Douala', section: 'cameroon' },
    { type: 'event', time: '09h55', location: 'Aéroport International de Douala', event: 'Arrivée à l\'Aéroport International de Douala', section: 'cameroon' },
    { type: 'event', time: '11h00', location: '"Japoma Stadium"', event: 'MESSE - Homélie du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '13h20', location: 'Hôpital Catholique Saint Paul', event: 'VISITE PRIVÉE À L\'HÔPITAL CATHOLIQUE SAINT PAUL', section: 'cameroon' },
    { type: 'event', time: '14h10', location: 'Aéroport de Douala', event: 'Départ de l\'Aéroport de Douala pour Yaoundé', section: 'cameroon' },
    { type: 'event', time: '15h15', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'Arrivée à l\'Aéroport International de Yaoundé-Nsimalen', section: 'cameroon' },
    { type: 'event', time: '17h30', location: 'Université Catholique d\'Afrique Centrale', event: 'RENCONTRE AVEC LE MONDE UNIVERSITAIRE - Discours du Saint-Père', section: 'cameroon' },

    { type: 'header', content: 'Samedi 18 avril 2026 - YAOUNDÉ - LUANDA', section: 'cameroon' },
    { type: 'event', time: '09h30', location: 'Aéroport de Yaoundé-Ville', event: 'MESSE - Homélie du Saint-Père', section: 'cameroon' },
    { type: 'event', time: '12h00', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'CÉRÉMONIE DE DÉPART', section: 'cameroon' },
    { type: 'event', time: '12h30', location: 'Aéroport International de Yaoundé-Nsimalen', event: 'Départ en avion de l\'Aéroport International de Yaoundé-Nsimalen pour Luanda', section: 'cameroon' },
    { type: 'event', time: '15h00', location: 'Aéroport International de Luanda "4 de Fevereiro"', event: 'Arrivée à l\'Aéroport International de Luanda "4 de Fevereiro" - CÉRÉMONIE DE BIENVENUE', section: 'cameroon-end' },

    { type: 'header', content: 'Dimanche 19 avril 2026 - LUANDA - MUXIMA - LUANDA', section: 'angola' },
    { type: 'event', time: '10h00', location: 'Kilamba', event: 'MESSE - Homélie du Saint-Père - Regina Cœli', section: 'angola' },
    { type: 'event', time: '15h45', location: 'Aéroport de Luanda "4 de Fevereiro"', event: 'Départ en hélicoptère de l\'Aéroport de Luanda "4 de Fevereiro" pour Muxima', section: 'angola' },
    { type: 'event', time: '16h15', location: 'Héliport de Muxima', event: 'Arrivée à l\'Héliport de Muxima', section: 'angola' },
    { type: 'event', time: '16h30', location: 'Sanctuaire de "Mama Muxima"', event: 'PRIÈRE DU ROSAIRE sur l\'esplanade devant le Sanctuaire de "Mama Muxima" - Discours du Saint-Père', section: 'angola' },
    { type: 'event', time: '17h45', location: 'Héliport de Muxima', event: 'Départ en hélicoptère de l\'Héliport de Muxima vers l\'Aéroport de Luanda "4 de Fevereiro"', section: 'angola' },
    { type: 'event', time: '18h15', location: 'Aéroport de Luanda "4 de Fevereiro"', event: 'Arrivée à l\'Aéroport de Luanda "4 de Fevereiro"', section: 'angola' },

    { type: 'header', content: 'Lundi 20 avril 2026 - LUANDA - SAURIMO - LUANDA', section: 'angola' },
    { type: 'event', time: '07h50', location: 'Aéroport de Luanda "4 de Fevereiro"', event: 'Départ en avion de l\'Aéroport de Luanda "4 de Fevereiro" pour Saurimo', section: 'angola' },
    { type: 'event', time: '09h20', location: 'Aéroport de Saurimo "Deolinda Rodrigues"', event: 'Arrivée à l\'Aéroport de Saurimo "Deolinda Rodrigues"', section: 'angola' },
    { type: 'event', time: '09h45', location: 'Maison d\'Accueil pour Personnes Âgées', event: 'VISITE À LA MAISON D\'ACCUEIL POUR PERSONNES ÂGÉES - Salutations du Saint-Père', section: 'angola' },
    { type: 'event', time: '11h15', location: 'Esplanade de Saurimo', event: 'MESSE sur l\'esplanade de Saurimo - Homélie du Saint-Père', section: 'angola' },
    { type: 'event', time: '13h45', location: 'Aéroport de Saurimo "Deolinda Rodrigues"', event: 'Départ en avion de l\'Aéroport de Saurimo "Deolinda Rodrigues" pour Luanda', section: 'angola' },
    { type: 'event', time: '15h15', location: 'Aéroport International de Luanda "4 de Fevereiro"', event: 'Arrivée à l\'Aéroport International de Luanda "4 de Fevereiro"', section: 'angola' },
    { type: 'event', time: '17h30', location: 'Paroisse Notre-Dame de Fatima', event: 'RENCONTRE AVEC LES ÉVÊQUES, LES PRÊTRES, LES CONSACRÉS ET LES AGENTS PASTORAUX - Discours du Saint-Père', section: 'angola' },

    { type: 'header', content: 'Mardi 21 avril 2026 - LUANDA - MALABO', section: 'angola' },
    { type: 'event', time: '08h45', location: 'Aéroport International de Luanda "4 de Fevereiro"', event: 'CÉRÉMONIE DE DÉPART', section: 'angola' },
    { type: 'event', time: '09h15', location: 'Aéroport International de Luanda "4 de Fevereiro"', event: 'Départ en avion de l\'Aéroport International de Luanda "4 de Fevereiro" pour Malabo', section: 'angola' },
    { type: 'event', time: '11h45', location: 'Aéroport International de Malabo', event: 'Arrivée à l\'Aéroport International de Malabo - CÉRÉMONIE DE BIENVENUE', section: 'angola' },
    { type: 'event', time: '12h30', location: 'Palais présidentiel', event: 'VISITE DE COURTOISIE AU PRÉSIDENT DE LA RÉPUBLIQUE au Palais présidentiel', section: 'angola' },
    { type: 'event', time: '13h00', location: 'Palais présidentiel', event: 'RENCONTRE AVEC LES AUTORITÉS, LA SOCIÉTÉ CIVILE ET LE CORPS DIPLOMATIQUE - Discours du Saint-Père', section: 'angola' },
    { type: 'event', time: '16h00', location: 'Campus Universitaire Léon XIV de l\'Université nationale', event: 'RENCONTRE AVEC LE MONDE DE LA CULTURE - Discours du Saint-Père', section: 'angola' },
    { type: 'event', time: '17h15', location: 'Hôpital Psychiatrique "JEAN PIERRE OLIE"', event: 'VISITE AU PERSONNEL ET AUX PATIENTS DE L\'HÔPITAL PSYCHIATRIQUE "JEAN PIERRE OLIE" - Salutations du Saint-Père', section: 'angola' },
    { type: 'event', time: '19h00', location: 'Divers lieux', event: 'RENCONTRE PRIVÉE AVEC LES ÉVÊQUES DE GUINÉE ÉQUATORIALE', section: 'angola' },

    { type: 'header', content: 'Mercredi 22 avril 2026 - MALABO - MONGOMO - BATA - MALABO', section: 'equatorial-guinea' },
    { type: 'event', time: '08h00', location: 'Malabo', event: 'Départ en avion de Malabo pour Mongomo', section: 'equatorial-guinea' },
    { type: 'event', time: '09h10', location: 'Aéroport International de Mengomeyén "Presidente Obiang Nguema"', event: 'Arrivée à l\'Aéroport International de Mengomeyén "Presidente Obiang Nguema"', section: 'equatorial-guinea' },
    { type: 'event', time: '10h30', location: 'Basilique de l\'Immaculée Conception', event: 'MESSE - Homélie du Saint-Père', section: 'equatorial-guinea' },
    { type: 'event', time: '12h30', location: '"ESCUELA TECNOLOGICA PAPA FRANCESCO"', event: 'VISITE À L\'"ESCUELA TECNOLOGICA PAPA FRANCESCO"', section: 'equatorial-guinea' },
    { type: 'event', time: '15h10', location: 'Aéroport International de Mengomeyén "Presidente Obiang Nguema"', event: 'Départ de l\'Aéroport International de Mengomeyén "Presidente Obiang Nguema" pour Bata', section: 'equatorial-guinea' },
    { type: 'event', time: '15h50', location: 'Aéroport International de Bata', event: 'Arrivée à l\'Aéroport International de Bata', section: 'equatorial-guinea' },
    { type: 'event', time: '16h50', location: 'Prison de Bata', event: 'VISITE DE LA PRISON DE BATA - Salutations du Saint-Père', section: 'equatorial-guinea' },
    { type: 'event', time: '17h25', location: 'Mémorial Commémoratif des Victimes de l\'Explosion du 7 Mars 2021', event: 'MOMENT DE PRIÈRE AU MÉMORIAL COMMÉMORATIF DES VICTIMES DE L\'EXPLOSION DU 7 MARS 2021', section: 'equatorial-guinea' },
    { type: 'event', time: '18h10', location: 'Stade de Bata', event: 'RENCONTRE AVEC LES JEUNES ET LES FAMILLES - Discours du Saint-Père', section: 'equatorial-guinea' },
    { type: 'event', time: '19h40', location: 'Aéroport de Bata', event: 'Départ de l\'Aéroport de Bata pour Malabo', section: 'equatorial-guinea' },
    { type: 'event', time: '20h30', location: 'Aéroport International de Malabo', event: 'Arrivée à l\'Aéroport International de Malabo', section: 'equatorial-guinea' },

    { type: 'header', content: 'Jeudi 23 avril 2026 - MALABO - ROME', section: 'equatorial-guinea' },
    { type: 'event', time: '10h00', location: 'Stade de Malabo', event: 'MESSE - Homélie du Saint-Père', section: 'equatorial-guinea' },
    { type: 'event', time: '12h15', location: 'Aéroport International de Malabo', event: 'CÉRÉMONIE DE DÉPART', section: 'equatorial-guinea' },
    { type: 'event', time: '12h45', location: 'Aéroport de Malabo', event: 'Départ de l\'Aéroport de Malabo pour Rome', section: 'equatorial-guinea' },
    { type: 'event', time: '19h55', location: 'Aéroport International de Rome/Fiumicino', event: 'Arrivée à l\'Aéroport International de Rome/Fiumicino', section: 'equatorial-guinea' }
  ];

  const scheduleData = locale === 'fr' ? scheduleDataFR : scheduleDataEN;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="text-center mb-8">
        <img 
          src="/codeofarms.png" 
          alt="Code of Arms" 
          className="mx-auto h-32 md:h-40 object-contain"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-gray-700 font-semibold">
            {t('dateRange')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto lg:overflow-visible">
            <table className="w-full min-w-[600px] lg:min-w-0">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left lg:w-1/6 w-1/4">{t('tableHeaders.dateTime')}</th>
                  <th className="px-4 py-3 text-left lg:w-5/12 w-3/8">{t('tableHeaders.location')}</th>
                  <th className="px-4 py-3 text-left lg:w-5/12 w-3/8">{t('tableHeaders.event')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scheduleData.map((item, index) => {
                  if (item.type === 'header') {
                    const isCameroonSection = item.section === 'cameroon';
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td 
                          colSpan={3} 
                          className={`px-4 py-3 font-semibold ${
                            isCameroonSection 
                              ? 'bg-blue-100 text-green-900 border-b-2 border-green-300' 
                              : 'bg-green-100 text-green-900'
                          }`}
                          id={item.id}
                        >
                          {item.content}
                        </td>
                      </tr>
                    )
                  }
                  
                  // Check if this event is part of Cameroon section
                  const isCameroonEvent = item.section === 'cameroon' || item.section === 'cameroon-end';
                  
                  return (
                    <tr key={index} className={isCameroonEvent ? 'bg-blue-50' : ''}>
                      <td className="px-4 py-3 text-gray-700">{item.time}</td>
                      <td className="px-4 py-3 text-gray-700">{item.location}</td>
                      <td className="px-4 py-3 text-gray-700">{item.event}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
