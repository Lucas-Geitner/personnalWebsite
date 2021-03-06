import React from 'react'

const laReprise = {
  listsTag: ['Comprendre', 'Analyser', 'Dissiper les malentendus', 'Média'],
  poste: 'Bénévole',
  boite: 'la reprise',
  url: 'https://lareprise.org/'
}

const maisonEnProvence = {
  listsTag: ["Gites d'hotes", 'Entreprise familial', 'Drôme provencal', 'Réservation'],
  poste: 'Chef de projet',
 boite: 'maison en provence',
  url: 'https://maison-en-provence.net/'
}


const lemouvement2018 = {
  listsTag: ['IlEstEncoreTemps', 'OnEstPret', 'Stripe', 'Infrastructure'],
  poste: 'CTO',
  boite: '~ le mouvement',
  url: 'https://lemouvement.ong'
}

const poesie = {
  listsTag: ['Poesies', 'LaBeautéSauveraLeMonde', 'Tech', 'CommingSoon'],
  poste: 'Co-fondateur',
  boite: 'Poesie.io',
  url: 'https://poesie.io'
}

const AAA = {
  listsTag: ['GestiondesRichesseHumaines', 'Management/GestionFinancière', 'ESS', 'Buisness'],
  poste: 'Etudiant',
  boite: '3A',
  url: 'http://www.ecole3a.edu/formation/bac-4-5-manager-de-projets-internationaux/'
}

const Hamon = {
  listsTag: ['CampagnePresidentiel', 'Strat & ReseauxSociaux', 'VeilleEtMobilisation', 'idées'],
  poste: 'Chargé de mission',
  boite: 'Benoit Hamon',
  url: 'https://www.benoithamon2017.fr/'
}

const ACC = {
  listsTag: ['CommunicationDinfluence', 'ONG/Syndicat/Entreprise/élues', 'Commercial', 'GestionDeProjet'],
  poste: 'Co-fondateur',
  boite: 'A Contre courant',
  url: 'https://acc.geitner.io'
}


const Etudiant = {
  listsTag: ['Code', 'RubyAndRails', 'Tech', 'HardSkill'],
  poste: 'Etudiant',
  boite: 'Le Wagon',
  url: 'https://www.lewagon.com/fr'
} 

const Freelance = {
  listsTag: ['React', 'SAAS', 'DeepLearning', 'SuperEquipe'],
  poste: 'Freelance',
  boite: 'Heuritech',
  url: 'https://www.heuritech.com/'
}

const LION = {
  listsTag: ['GrowthHacking/Sales', 'Dev', 'Startup', 'SavoirEtre'],
  poste: 'Etudiant',
  boite: 'LION - The Family',
  url: 'https://joinlion.co/'
}


const Bac = {
  listsTag: ['ES','MentionBien',  'Lyon/Montelimar/Cleon/Marsanne'],
  poste: 'Bac',
  boite: 'Lyon',
  url: 'https://fr.wikipedia.org/wiki/Marsanne_(Dr%C3%B4me)#/media/File:Marsanne_village.JPG'
}
const Nimes = {
  listsTag: ['LitteratureHistoire', 'PhilosophieGeographie', 'NietzcheMontaignePascal'],
  poste: 'Etudiant',
  boite: 'Nîmes',
  url: 'http://journal.alinareyes.net/2015/11/06/albert-camus-les-amandiers/'
}

const Card = ({
  listsTag, poste, boite, url
}) => (
  <div className="hover:border-gray-400 hover:bg-gray-200 border-gray-300	border h-full p-2 mr-4 xl:mr-0 xl:ml-8 rounded mt-5 xl:-mt-10 xl:w-1/4 pt-5 pb-4 pr-4 pl-4">
    <a className="block no-outline no-underline" target="_blank" href={url}>
      <h3 className="pb-3 text-normal text-blue-darker font-serif tracking-wide">{poste}</h3>
      <div>
        <ul className="list-reset  tracking-wide leading-tight italic  text-sm">
          {
            listsTag.map((l, i) => (
              <li key={i} className=" tracking-wide leading-tight text-sm ">
              #
                {` ${l}`}
              </li>
            )) }
        </ul>
      </div>
      <h3 className="text-normal text-right ">
        {boite}
      </h3>
    </a>
  </div>
)

const Index = () => (
  <>
  <div className="mb-10 border-gray-300	border-b">
    <div className="mb-5 pl-4 container mx-auto">
      <div className="mt-10  xl:block flex flex-col">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none"> Lucas Geitner </h1>
        <p className="text-lg font-light leading-normal md:w-2/5  md:font-light text-gray-700 pt-4 ">
            Éditeur poétique et politique  </p>
      </div>
    </div>
  </div>


  <div className="mb-12 container mx-auto">

        
    <div className="mt-10 xl:mt-12 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900 ">2020 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        {/* Poesie.io */}
        <Card
          listsTag={poesie.listsTag}
          poste={poesie.poste}
          boite={poesie.boite}
          color={poesie.color}
          url={poesie.url}
        />
        {/* La reprise */}
        <Card
          listsTag={laReprise.listsTag}
          poste={laReprise.poste}
          boite={laReprise.boite}
          color={laReprise.color}
          url={laReprise.url}
        />

        {/* Petit gustave */}
      <Card
          listsTag={maisonEnProvence.listsTag}
          poste={maisonEnProvence.poste}
          boite={maisonEnProvence.boite}
          color={maisonEnProvence.color}
          url={maisonEnProvence.url}
        />

      </div>
    </div>




    <div className="mt-10 xl:mt-12 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900 ">2019 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        <Card
          listsTag={lemouvement2018.listsTag}
          poste={lemouvement2018.poste}
          boite={lemouvement2018.boite}
          color={lemouvement2018.color}
          url={lemouvement2018.url}
        />
        <Card
          listsTag={poesie.listsTag}
          poste={poesie.poste}
          boite={poesie.boite}
          color={poesie.color}
          url={poesie.url}
        />

      </div>
    </div>

    <div className="mt-10 xl:mt-20 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900">2018 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        <Card
          listsTag={AAA.listsTag}
          poste={AAA.poste}
          boite={AAA.boite}
          color={AAA.color}
          url={AAA.url}

        />
        <Card
          listsTag={lemouvement2018.listsTag}
          poste={lemouvement2018.poste}
          boite={lemouvement2018.boite}
          color={lemouvement2018.color}
          url={lemouvement2018.url}
        />
      </div>
    </div>

    <div className="mt-10 xl:mt-20 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900">2017 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        <Card
          listsTag={Hamon.listsTag}
          poste={Hamon.poste}
          boite={Hamon.boite}
          color={Hamon.color}
          url={Hamon.url}
        />
        <Card
          listsTag={ACC.listsTag}
          poste={ACC.poste}
          boite={ACC.boite}
          color={ACC.color}
          url={ACC.url}
        />
      </div>
    </div>


    <div className="mt-10 xl:mt-20 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900">2016 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        <Card
          listsTag={Etudiant.listsTag}
          poste={Etudiant.poste}
          boite={Etudiant.boite}
          color={Etudiant.color}
          url={Etudiant.url}
        />
        <Card
          listsTag={Freelance.listsTag}
          poste={Freelance.poste}
          boite={Freelance.boite}
          color={Freelance.color}
          url={Freelance.url}

        />
        <Card
          listsTag={LION.listsTag}
          poste={LION.poste}
          boite={LION.boite}
          color={LION.color}
          url={LION.url}
        />

      </div>
    </div>

    <div className="mt-10 xl:mt-20 xl:-ml-10 xl:block flex flex-col">
      <h3 className="pl-4 xl:pl-0 text-gray-900"> > 2016 </h3>
      <div className="flex xl:ml-10 pl-2 pb:pl-4 flex-col xl:flex-row">
        <Card
          listsTag={Bac.listsTag}
          poste={Bac.poste}
          boite={Bac.boite}
          color={Bac.color}
          url={Bac.url}
        />
        <Card
          listsTag={Nimes.listsTag}
          poste={Nimes.poste}
          boite={Nimes.boite}
          color={Nimes.color}
          url={Nimes.url}
        />
      </div>
    </div>

  </div>
  </>
)

export default Index
