import { UsersIcon, ShoppingCartIcon, ClockIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Benefit() {

    let data = [
        {
            id: 1,
            icon: <UsersIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: 'Améliorer la Satisfaction des Employés',
            description: 'Offrez à vos employés la liberté de gérer leurs finances plus efficacement, réduisant le stress et augmentant la satisfaction au travail Les employés peuvent acheter des articles essentiels immédiatement et les payer plus tard, ce qui les aide à maintenir leur niveau de vie sans contrainte financière.'
        },
        {
            id: 2,
            icon: <ShoppingCartIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: 'Avantage pour les Employés à Coût Efficace',
            description: 'Pour seulement 1000 MAD par employé, vous pouvez offrir un avantage qui améliore considérablement leur bien-être financier. Les avantages en termes de productivité accrue, de réduction du turnover et d amélioration de la réputation de l entreprise surpassent largement le coût.'
        },
        {
            id: 3,
            icon: <ClockIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: 'Améliorer la Productivité',
            description: 'Lorsque les employés se sentent soutenus par leur employeur, ils sont plus motivés et engagés dans leurs tâches.'
        }
    ]

    useEffect(()=>{
        AnimScroll(".title",100,".title")
        AnimScroll("#card-0",100,".content")
        AnimScroll("#card-1",150,".content")
        AnimScroll("#card-2",200,".content")
    })

    return (
        <div className="xl:w-container mx-auto my-24 md:my-40 text-white">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">Les avantages que vous obtenez</h2>
                <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">
                Avant d'acheter nos produits, découvrez les bénéfices que vous pouvez tirer de l'achat de notre logiciel financier.</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content,i) => {
                        return (
                            <div id={"card-"+i} className="group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]">
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">{content.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
