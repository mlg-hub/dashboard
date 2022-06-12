import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IFyatuFeature {
    index?: number,
    icon: IconProp,
    title: string,
    description: string
}
/* eslint-disable react/no-unescaped-entities */
const featureStyle = {
    top: '-2rem',
    zIndex: '-5',
    color: 'white',
    width: '94.5%',
    right: '4px',
    left: '10px',
}

const iconStyle = {
    height: "1.7rem",
}

const Feature = (props: IFyatuFeature) => {
    return (
        <div className='w-96 bg-white relative shadow-lg shadow-fyatu-light-900/40 rounded-lg'>
            <span style={featureStyle} className='bg-fyatu-primary rounded-lg h-10 w-20 absolute flex justify-center items-center pb-2 gap-2 font-semibold'>
                <FontAwesomeIcon icon={props.icon} style={iconStyle} /> {props.title}
            </span>
            <p className='p-6'>{props.description}</p>
        </div>
    );
}

export default Feature;