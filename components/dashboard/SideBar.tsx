import { ReactElement, useState } from 'react';
import { BsBell, BsHouse, BsTools, BsFillBarChartLineFill, BsBank, BsFillClockFill, BsCollectionPlay, BsPeopleFill, BsListCheck, BsCurrencyDollar } from 'react-icons/bs';

type IconName = 'house' | 'chart' | 'bank' | 'clock' | 'play' | 'group' | 'list' | 'account';

const mapIconNameToIcon = (iconName: IconName, size: number) => {
    switch (iconName) {
        case 'house':
            return <BsHouse color='white' size={size} />;
        case 'chart':
            return <BsFillBarChartLineFill color='white' size={size} />;
        case 'bank':
            return <BsBank color='white' size={size} />;
        case 'clock':
            return <BsFillClockFill color='white' size={size} />;
        case 'play':
            return <BsCollectionPlay color='white' size={size} />;
        case 'group':
            return <BsPeopleFill color='white' size={size} />;
        case 'list':
            return <BsListCheck color='white' size={size} />;
        default:
            return <BsCurrencyDollar color='white' size={size} />
    }
}

const SideIcon = ({ iconName, size }: { iconName: IconName, size: number }) => {
    const icon = mapIconNameToIcon(iconName, size);
    return (<span>
        {icon}
    </span>);
}

// const displayIcons = () => {
//     const iconList = ['house', 'chart', 'bank', 'clock', 'play', 'group', 'list', 'account'];
//     return iconList.map((name: IconName, i, []) => <SideIcon key={i} iconName={name} />);
// }
const SideBar = () => {
    const [winWidth, setwinWidth] = useState(window.innerWidth);
    const size = winWidth / 48;
    const iconList: IconName[] = ['house', 'chart', 'bank', 'clock', 'play', 'group', 'list', 'account'];
    return (
        <div className='col-span-1 bg-fyatu-primary w-3/4 row-span-full rounded-[20px] phone:hidden'>
            <div className="flex flex-col p-2 items-center justify-start place-self-center gap-10">
                <span className='font-bold italic mt-4 mb-12 text-white text-center text-2xl'>Fyatu</span>
                {iconList.map((name: IconName, i, []) => <SideIcon key={i} iconName={name} size={size} />)}
                <span className='mt-20'>
                    <BsTools color='white' size={size} />
                </span>
            </div>
        </div>
    );
}

export default SideBar;