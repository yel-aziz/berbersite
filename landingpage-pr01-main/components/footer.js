import { } from "@heroicons/react/outline"

function Footer() {

    let dataFooter = [
        {
            title: 'Contact',
            content: ['Contact']
        },
        {
            title: 'Our office',
            content: ['Maroc', 'casablanca technopark', '1337 space']
        }
    ]

    return (
        <div className="bg-btnDark w-full py-14">
            <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
                <div className="mr-0 lg:mr-40">
                    <img className="w-logo" src="/brber.png" alt="logo" />
                    <p className="my-8 leading-relaxed">Découvrez le futur de vos achats avec le Buy Now, Pay Later BerBerPay et profitez d'une flexibilité financière sans précédent!</p>
                   
                </div>
                <div className="hidden lg:flex justify-between">
                    {dataFooter.map(footer => {
                        return (
                            <div className="">
                                <h4 className="font-medium text-white text-base">{footer.title}</h4>
                                {footer.content.map(content => {
                                    return (
                                        <p className="mt-3">{content}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
