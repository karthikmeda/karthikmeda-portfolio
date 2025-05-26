import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import one from '../../assets/jpeg/coding ninjas word cup.jpg'
import two from '../../assets/jpeg/tcs codevita.png'
import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);

    // Define achievements data directly within the component
    const achievementsData = [
        {
            id: 1,
            title: 'Coding Ninjas World Cup Challenge',
            description: 'Achieved 158th position out of 5000 participants in the prestigious Coding World Cup powered by Logitech, hosted by Coding Ninjas. Demonstrated strong coding skills and problem-solving abilities in a competitive coding challenge, showcasing dedication and expertise in the field.',
            image: one,
            url: 'https://ampsp.webengage.co/f/a/j0gAogsBxy4xEmTv2jSzsw~~/AAQNhwA~/RgRnSzkIP4QOAmh0dHBzOi8vYy53ZWJlbmdhZ2UuY29tL2x3L2cxLmpwZz9wPWV5SnNZeUk2SW40ME4ySTJOakEyTkNJc0ltd2lPaUpoT0RZME0yWmlOR0l3WTJJNE1URmtZVGMyTjJFMU1qQmhaR1l6WldZd05UVmxNV1UzWkdJMklpd2lZeUk2SWpFM09UYzJNVElpTENKbGJTSTZJbTFyWVhKMGFHbHJiV1ZrWVVCbmJXRnBiQzVqYjIwaUxDSmxJam9pZm5Ga00ySm9NU0lzSW5ZaU9pSiUyQk5tNXJOVFpvTmlJc0luTWlPaUprWmpneU5ESTFZaTB3WXpKakxUUm1aRFF0WVdRNFpTMWhOak5sWlRGbFlXVmlNV0VpTENKcUlqb2lmalk0WlRVMk1HVWlMQ0psZG1WdWRDSTZJbVZ0WVdsc1gyTnNhV05ySWl3aVkzUmhJam9pZmpoaE1qSTJOVEl4SWl3aWRHOVZVa3dpT2lKb2RIUndjem92TDI1cGJtcGhjMlpwYkdWekxuTXpMbUZ0WVhwdmJtRjNjeTVqYjIwdlkyVnlkR2xtYVdOaGRHVmZiMlpmWlhabGJuUmZZMjlrYVc1blgzZHZjbXhrWDJOMWNGOXdiM2RsY21Wa1gySjVYMnh2WjJsMFpXTm9YMk5oWVRabFl6azJPVEppTTJRMFlqVmhNamMyTG5Ca1ppSjlXA3NwY0IKZV8ItGhlYJ-8elIWbWthcnRoaWttZWRhQGdtYWlsLmNvbVgEAAACQQ~~', // Add URL for each achievement
            
        },
        {
            id: 2,
            title: 'TCS CodeVita Season 12',
            description: 'I secured a Global Rank of 885 in TCS CodeVita Season 12, competing among 10,000+ participants worldwide. It was a great learning experience that tested my coding and problem-solving skills. Feeling proud and motivated to keep improving!',
            image: two,
            // url: 'https://www.tcs.com/codevita', // Add URL for each achievement
        },
        // Add more achievements as needed
    ];

    return (
        <>
            {achievementsData.length > 0 && (
                <div
                    className='testimonials'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='testimonials--header'>
                        <h1 style={{ color: theme.secondary }}>Achievements</h1>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='testimonials--body'>
                        <div className='testimonials--grid'>
                            {achievementsData.map((achievement) => (
                                <a
                                    href={achievement.url}
                                    key={achievement.id}
                                    className='single--achievement-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {/* Link to individual achievement URL */}
                                    <div
                                        className='single--achievement'
                                        style={{ backgroundColor: theme.secondary }}
                                    >
                                        <div className='achievement--image'>
                                            <img src={achievement.image} height={82} alt={achievement.title} />
                                        </div>
                                        <div className='achievement--content' style={{ color: theme.tertiary }}>
                                            <h2>{achievement.title}</h2>
                                            <p>{achievement.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
