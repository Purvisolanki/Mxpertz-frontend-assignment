import React from 'react'

const SingleCard = ({title, imageUrl, status}) => {
     // Function to determine the background color of the button based on status
     const getButtonColor = () => {
        switch (status) {
            case 'Complete':
                return 'text-green-500';
            case 'In Progress':
                return 'text-yellow-500';
            default:
                return 'text-blue-500';
        }
    };

    // Apply the appropriate background color to the button
    const buttonColor = getButtonColor();
    return (
        <div className=" w-full ">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={imageUrl} />
            </a>
            <div className="mt-4 flex justify-center items-center flex-col gap-2">
                <h3 className="text-white font-bold text-xs tracking-widest title-font mb-1">{title}</h3>
                <button className={`rounded-full bg-white w-1/2 py-1 px-4 mx-auto ${buttonColor}`}>{status}</button>
            </div>
        </div>
    )
}

export default SingleCard