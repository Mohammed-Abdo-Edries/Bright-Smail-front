import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const Home = () => {
    const [ t, i18n ] = useTranslation();
    const dateNow = new Date;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[dateNow.getMonth()]

  return (
    <>
      <div>
        <h2>Doctor mujahed yaseen</h2>
        <h3>dental specialist</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum voluptates odit quam cumque earum exercitationem a, maiores, vero eaque sunt repellat nulla maxime. Exercitationem aspernatur error nesciunt minima consequuntur.</div>
        <Link to='/appointment'>
          <button>
            Get an appointment
          </button>
        </Link>
      </div>
      <div>
        <div>
          <div className='icon'></div>
          <div>
            <h2>opening hours</h2>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
        <Link to='/location'>
          <div className='icon'></div>
          <div>
            <h2>visit our location</h2>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
        </Link>
        <div>
          <div className='icon'></div>
          <div>
            <h2>contact us</h2>
            <div>+249 123 456 7890</div>
          </div>
        </div>
      </div>
      <div className='Services'>
        <h2>SOME OF OUR SERVICES</h2>
        <div>
          <div className='icon'></div>
          <h3>Fluoride Treatment</h3>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla!</div>
        </div>
        <div>
          <div className='icon'></div>
          <h3>cavity Filling</h3>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla!</div>
        </div>
        <div>
          <div className='icon'></div>
          <h3>Teeth Whitening</h3>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla!</div>
        </div>
      </div>
      <Link to='/prices'>
        <button>Show prices List</button>
      </Link>
      <button>Get an appointment</button>
      <div className='testimonials'>
        <h2>WHAT OUR PATIENTS SAY</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore laboriosam inventore quo odit perferendis aut officiis fuga pariatur itaque? Deleniti ex autem doloribus hic, impedit repellendus ratione quibusdam. Aliquam!
          Cum culpa esse corrupti fugit quis eaque voluptate earum? Harum neque sunt est ex omnis consequatur officiis in! Ratione perspiciatis nemo maiores deserunt assumenda officiis saepe expedita voluptatibus quae quidem!
          <div>
            <div className='img'></div>
            <h3>Name</h3>
            <h3>Jop</h3>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore laboriosam inventore quo odit perferendis aut officiis fuga pariatur itaque? Deleniti ex autem doloribus hic, impedit repellendus ratione quibusdam. Aliquam!
          Cum culpa esse corrupti fugit quis eaque voluptate earum? Harum neque sunt est ex omnis consequatur officiis in! Ratione perspiciatis nemo maiores deserunt assumenda officiis saepe expedita voluptatibus quae quidem!
          <div>
            <div className='img'></div>
            <h3>Name</h3>
            <h3>Jop</h3>
          </div>
        </div>
      </div>
      <div className='dental-advice'>
        <div>
          <div>take care of your teeth</div>
          <div className='who said it'></div>
        </div>
        <div>
          <div>take care of your teeth</div>
          <div className='who said it'></div>
        </div>
      </div>
      <div className='contact-form'></div>
    </>
  )
}

export default Home