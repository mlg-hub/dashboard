import { BsFillCreditCard2BackFill, BsThreeDotsVertical } from 'react-icons/bs';

const mapIndexToRow: { [key: number]: string } = {
    0: 'col-start-1',
    1: 'col-start-4',
    2: 'col-start-7',
    3: 'col-start-10',
}

const summaryText = [
    {
        "title": '$143,623',
        "description": "Your bank balance"
    },
    {
        "title": '623',
        "description": "Unique user"
    },
    {
        "title": '7',
        "description": "Employees working today"
    },
    {
        "title": '$3,287.49',
        "description": "This weekls card spending"
    },
];
const SummaryCard = ({ index }: { index: number }) => {
    const startRow = mapIndexToRow[index];
    return (

        <div className={`${startRow} col-span-3  phone:col-span-full row-start-2 row-span-full rounded-[20px] border bg-white shadow-2xl shadow-gray-300/70 m-2 p-4`}>
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between">
                    <span><BsFillCreditCard2BackFill size={48} /></span>
                    <span><BsThreeDotsVertical size={30} /></span>
                </div>
                <div className='text-4xl font-bold'>{summaryText[index].title}</div>
                <div className=' w-3/4'>{summaryText[index].description}</div>
            </div>
        </div>

    );
}

export default SummaryCard;