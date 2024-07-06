import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Layout from '../../components/layout/Layout';
import StyledContent from './StoryContent'



export default function BasicTabs({story}) {
    

    return (
        <Layout>
        
            <div className=' flex flex-col items-center justify-center bg-indigo-900 '>
          <h1 className="text-4xl font-bold text-white text-center mb-16 mt-16"><span className='text-indigo-600'>The Lost City of</span> Future Earth</h1>
          <div className="flex justify-center pt-15">
          <button className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-full">World Explorer</button>
          <button className="mx-2 px-4 py-2 bg-blue-400 text-white rounded-full">Story Adventure</button>
            <button className="mx-2 px-4 py-2 bg-blue-400 text-white rounded-full">Brain Quest</button>
          </div>
        </div>
        <div>
       <StyledContent/>
       </div>
        </Layout>
    );
}
