import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';

const StoryCards = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://child.onrender.com/api/sciencefiction');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-600 body-font bg-indigo-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap gap-5 justify-center items-center -m-4">
                    {stories.map((story, index) => (
                        <Link to={`/sciencefiction/${story._id}`} story={story} className="lg:w-1/5 md:w-1/4 p-4 w-full cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg">
                        <SingleCard
                            key={index}
                            imageUrl={`https://ik.imagekit.io/dev24/${story?.Image}`}
                            title={story.Title}
                            status={story.Status}
                        />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryCards;
