import React from 'react'
import picture from './fitnesscoach3.jpg';
import pictureagain from './fitnesscoach2.jpg';

const Coaches = () => {
  return (
    <div>
        <h1>Meet the Coaches</h1>
      <div className='media-scroller'>
        <div className='media-element'>
            <img src={pictureagain}/>
            <h2>Jane Smith</h2>
            <h3>Msc Sports Science and Nutrition</h3>
            <h4>Jane specializes in developing personalized fitness nutrition plans that enhance performance and recovery.</h4>
            <button>Know more</button>
        </div>
        <div className='media-element'>
            <img src='https://img-c.udemycdn.com/course/750x422/5643206_4345.jpg'/>
            <h2>David</h2>
            <h3> Certified Strength and Conditioning Specialist (CSCS)</h3>
            <h4>David focuses on strength training and injury prevention, helping clients build muscle safely and effectively.</h4>
            <button>Know more</button>
        </div>
        <div className='media-element'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/046/836/978/small_2x/middle-aged-hispanic-male-fitness-trainer-smiling-in-gym-perfect-for-wellness-promotion-exercise-campaign-health-coaching-materials-photo.jpg'/>
            <h2>James Thompson</h2>
            <h3> Certified Personal Trainer (CPT)</h3>
            <h4> James creates dynamic workout programs that focus on weight loss and overall health improvement.</h4>
            <button>Know more</button>
        </div>
        <div className='media-element'>
            <img src='https://img.freepik.com/premium-photo/personal-trainer-gym-portrait-man-from-healthy-lifestyle-fitness-motivation-strong-guy-mexico-confident-mexican-coach-training-body-goals-with-workout-wellness-strength-trainer_590464-102573.jpg'/>
            <h2>Liam Parker</h2>
            <h3>Certified Yoga Instructor (RYT-200)</h3>
            <h4>Sophia integrates mindfulness and flexibility training into her sessions, promoting mental clarity and physical well-being.</h4>
            <button>Know More</button>
        </div>
        <div className='media-element'>
            <img src={picture}/>
            <h2>Michael</h2>
            <h3>Bachelor's in Exercise Science</h3>
            <h4>Michael combines his knowledge of exercise science with functional fitness to help clients achieve their best physical form.</h4>
            <button>Know More</button>
        </div>
    </div>
    </div>
  )
}

export default Coaches