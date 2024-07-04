import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Banner() {

    useEffect(() => {
        AnimScroll(".anim-1", 150,".anim-1")
        AnimScroll(".anim-2", 200,".anim-1")
        AnimScroll(".anim-3", 250,".anim-1")
    }, [])

    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                Aidez votre vie à rendre la gestion des finances plus facile
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                Bienvenu sur notre site! Découvrez la puissance du BerBerPay , une solution révolutionnaire qui vous permet d'acheter immédiatement et de payer en plusieurs fois sans frais. Avec BerBerPay, vous pouvez gérer vos finances plus facilement, accéder à des produits de qualité, et améliorer votre pouvoir d'achat. Adoptez BerBerPay et transformez votre expérience d'achat dès aujourd'hui!
                </p>
               
            </div>
        </div>
    )
}

export default Banner
