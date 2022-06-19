/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { CSSProperties } from "react";
import { feactureList } from "../../pages";
import Feature from "./feature";

const imageStyle = {
    top: '-1rem',
    right: '-8rem',
};

const styles: CSSProperties[] = [{
    position: 'absolute',
    right: '0'
}, {
    position: 'absolute',
    left: '5rem',
    top: '20rem',
}, { right: 0, top: '32rem', position: 'absolute' }];
const MainTwo = () => {

    return (
        <div className="flex pt-20 relative mb-8">
            <div className="flex-1 mb-8">
                <p className="pt-12">
                    <h3 className="text-4xl font-semibold">Cartes de paiement Virtuelle et Physique à <span className=" underline decoration-fyatu-primary">l'échelle mondiale</span>.</h3>
                </p>
                <p className="leading-loose mt-8">
                    Fyatu permet aux particuliers la création instantanée et illimitée des cartes de paiement en USD et permet aux entreprises de développer leur business en intégrant notre API de création des cartes bancaires avec leur système.
                </p>
                <span className="flex mt-8 justify-start gap-8">
                    <button className="bg-fyatu-primary text-white py-2 px-4 rounded-lg">Ouvrir un compte</button>
                    <button className="text-fyatu-primary border-fyatu-primary border rounded-lg py-2 px-4">En savoir plus</button>
                </span>
                <div className="flex-1 flex justify-start items-end mt-24">
                    <div className="bg-fyatu-blue-light w-96 h-52 relative rounded-sm shadow-lg shadow-sky-900/5">
                        <Image src={"/assets/img/banner-women-clear.png"} alt="banner" height={300} width={200} objectPosition='absolute' />
                        <span style={imageStyle} className="absolute w-64 rounded-sm">
                            <p className="text-white p-4 bg-fyatu-primary" >Créez gratuitement votre compte en quelques minutes</p>
                            <p className="text-white p-4 bg-sky-900" > Des millier d'utilisateurs dans le monde ont choisit Fyatu pour simplifier et sécuriser leur paiement en ligne.</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative flex-col gap-8 pt-32">
                <div className=" h-96 w-24 bg-fyatu-light absolute rounded-sm -z-30 top-48 left-36"></div>
                {
                    feactureList.map((x, i) => {
                        return (<Feature isV2={true} style={styles[i]} key={x.index} icon={x.icon} description={x.description} title={x.title} />)
                    })
                }
            </div>
        </div>
    );
}

export default MainTwo;