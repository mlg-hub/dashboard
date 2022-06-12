/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faChartBar } from '@fortawesome/free-solid-svg-icons'

const styleIcon = {
    height: '40px',
    width: '40px',
    padding: '10px'
}
const DashBoard = () => {
    return (<div className="flex mx-96 gap-32">
        <div className="flex-1 flex justify-start p-2 bg-slate-200 max-w-md rounded-lg">
            <Image src={"/assets/dashboard1.png"} alt="banner" height={0} width={450} />
        </div>
        <div className="flex-1">
            <p className="pt-8">
                <p className="text-4xl font-semibold leading-normal">Un panneau d'administration intuitif pour gérer votre business.</p>
            </p>
            <p className="leading-loose mt-8">
                Connectez-vous dans votre compte Fyatu depuis n'importe quel appareil pour gérer votre business facilement.
            </p>
            <div className="flex  mt-8 flex-col gap-4">
                <span className="flex justify-start gap-4 items-center">
                    <div style={styleIcon} className="rounded-full bg-fyatu-primary justify-center items-center text-white">
                        <FontAwesomeIcon icon={faChartBar} />
                    </div>
                    <div>
                        <p className="text-1xl">Statistiques à temps réel.</p>
                    </div>
                </span>
                <span className="flex justify-start gap-4 items-center">
                    <div style={styleIcon} className="rounded-full bg-fyatu-primary justify-center items-center text-white">
                        <FontAwesomeIcon icon={faDashboard} />
                    </div>
                    <div>
                        <p className="text-1xl">
                            Monitoring des performances.</p>
                    </div>
                </span>

            </div>

        </div>

    </div>);
}

export default DashBoard;