import React, { useEffect, useState } from 'react';
import SingleCard from '../../components/story-cards/SingleCard';
import { Link } from 'react-router-dom';
import { Grid ,Paper} from '@mui/material';
import { styled } from '@mui/system';


const StyledPaper = styled(Paper)`
    height: 100%; 
    padding: 20px;
    border: 2px dashed #ccc; 
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;

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
                <Grid container spacing={3}>
        
                    <Grid item xs={4}>
                    <section className="text-gray-600 body-font bg-indigo-900">
            <div className="container px-5 py-24 mx-auto h-16 ">
              
                        <StyledPaper>
                            Drag and drop area
                        </StyledPaper>
                   
                    
                    
                
            </div>
        </section> 
                    </Grid>
                    {/* Grid of 8 */}
                    <Grid item xs={8}>
                        <div className="flex flex-wrap gap-5 justify-center items-center -m-4">
                            {stories.map((story, index) => (
                                <StyledLink key={index} to={`/sciencefiction/${story._id}`} className="w-full cursor-pointer">
                                    <SingleCard
                                        imageUrl={`https://ik.imagekit.io/dev24/${story?.Image}`}
                                        title={story.Title}
                                        status={story.Status}
                                    />
                                </StyledLink>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default StoryCards;
