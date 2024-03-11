function Sobre(){
    const people = [
        {
          name: 'Gabrielle Ramos',
          role: 'Desenvolvedora Full Stack Junior',
          imageUrl:
            'https://64.media.tumblr.com/c489359e2962b611ec0015e1f5734983/9e8beb45f7ec6b7c-cf/s500x750/ed9ae12a6322a631601a8f7b12ade1205884cc67.jpg',
        },
        {
            name: 'Aline Maciel',
            role: 'Desenvolvedora Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/7f175eec527dc412cb61b7cef2f6019f/0467aeb0835358e0-6b/s500x750/7388688fbaa7c3febec8c2ba35e5b6785de091d6.pnj',
          },
          {
            name: 'Gustavo de Queiros',
            role: 'Desenvolvedor Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/bbe65c60e1bc3ae66fd0b6e39e78780f/f562efe475f794e8-87/s500x750/7681b3050ea242c99b43aa23835050ccba8338e5.jpg',
          },
          {
            name: 'André Prado Junior',
            role: 'Desenvolvedor Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/165db77c4b64617dafea6a3068953696/c7cfa56435db10d3-cf/s500x750/0ce6be822ced64d5ea78f13dac46a755bfeb7c9f.jpg',
          },
          {
            name: 'Ranna Freitas',
            role: 'Desenvolvedora Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/0814345a2452c534c23300be9ea0497d/1fa5cbaaa7812c8a-2b/s500x750/12ced0ee668fb8a57e7c167c6c9cd0edb1cf5b1d.pnj',
          },
          {
            name: 'Nicole Valletta',
            role: 'Desenvolvedora Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/74f93a3546eee8c6e72d0759c3bd92d5/16d270b320dad789-3c/s500x750/743012b90f263950faa2594a129b956b1f1959b7.pnj',
          },
          {
            name: 'Gabriel Luiz',
            role: 'Desenvolvedor Full Stack Junior',
            imageUrl:
              'https://64.media.tumblr.com/2c905ae0c4dcb8feecfa258c62a21570/7ea675b9b1c1f8d1-88/s500x750/65de2fa3789f38e99baaab59893526fa74cd778c.pnj',
          },
      ]
      
      {
        return (
          <div className="bg-ambar-100 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bem-vindo ao Alimento Amigo!</h2>
                <p className="mt-6 text-lg leading-8 text-black-600">
               Somos um grupo dedicado do bootcamp com formação fullstack Java da Genaration, unidos pelo desafio final do curso. Nosso projeto, Alimento Amigo, visa facilitar o repasse eficiente de doações de alimentos, alinhado à ODS 12 da ONU. Estamos apaixonados por criar impacto positivo e convidamos você a se juntar a nós nessa missão de promover uma distribuição de alimentos mais eficaz e sustentável. Juntos, podemos fazer a diferença!
                </p>
              </div>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-green-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
      
}

export default Sobre;