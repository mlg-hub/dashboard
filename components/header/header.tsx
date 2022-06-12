import Image from "next/image";

const styleHeaderLeft = {
    flex: "2"
}
const styleHeaderRight = {
    flex: "1"
}

const Header = () => {
    return (<div className="flex justify-between mt-4">
        <span className="flex justify-start flex-row" style={styleHeaderLeft}>
            <Image src={'/assets/img/logo_dark_fyatu.png'} alt="logo" width="150px" height="50" />
            <nav className="ml-8">
                <ul className="flex justify-between items-center h-full gap-8 text-gray-900">
                    <li className="">Services</li>
                    <li>Développeurs</li>
                    <li>Entreprises</li>
                </ul>
            </nav>
        </span>
        <span className="flex justify-end flex-row flex-1" style={styleHeaderRight}>
            <ul className="flex justify-between items-center h-full gap-8">
                <li className="text-fyatu-primary border-fyatu-primary border rounded-lg py-2 px-4">Connection</li>
                <li><button className="bg-fyatu-primary text-white py-2 px-4 rounded-lg">Inscription</button></li>

            </ul>
        </span>
    </div>);
}

export default Header;