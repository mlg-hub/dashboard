/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const MainOne = () => {

    return (
        <div className="flex pt-28 pb-0">
            <div className="flex-1">
                <p className="pt-12">
                    <h3 className="text-4xl font-bold leading-normal">Cartes de paiement Virtuelle et Physique à l'échelle mondiale.</h3>
                </p>
                <p className="leading-loose mt-8">
                    Fyatu permet aux particuliers la création instantanée et illimitée des cartes de paiement en USD et permet aux entreprises de développer leur business en intégrant notre API de création des cartes bancaires avec leur système.
                </p>
                <span className="flex mt-16 justify-start gap-8">
                    <button className="bg-fyatu-primary text-white py-2 px-4 rounded-lg">Ouvrir un compte</button>
                    <button className="text-fyatu-primary border-fyatu-primary border rounded-lg py-2 px-4">En savoir plus</button>
                </span>
            </div>
            <div className="flex-1 flex justify-end">
                <Image src={"/assets/img/banner-women-clear.png"} alt="banner" height={500} width={400} />
            </div>
        </div>
    );
}

export default MainOne;