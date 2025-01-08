import React from 'react';
import './EBoard.css'; // Import the CSS file for styling

const EBoard = () => {
  // Define an array of card data for each role
  const cards = [
    {
      image: 'president.png',
      header: 'Alexander Henriquez',
      subHeader: 'President',
      content: (
        <>
        I want to elevate the Latino community in STEM to help open doors for our current generation of students and the many to come! This all begins with SHPE and focusing on advancing students academically and professionally.
        <br />
        <br />
        Fun Fact: I love the Ninja Turtles, especially Leonardo.
        <br /> 

        <a href="mailto:Ahenriquez2@student.gsu.edu">Ahenriquez2@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'vice.png',
      header: 'Karina Carrillo',
      subHeader: 'Vice President',
      content: (
        <>
        I want SHPE GSU to succeed because it will create the opportunity for Latinx STEM students to build a community in which we help each other and share opportunities!
        <br />
        <br />
        Fun Facts: I used to play trumpet in high school.
        <br /> 

        <a href="mailto:Kcarrillolezama1@student.gsu.edu">Kcarrillolezama1@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Secretary.png',
      header: 'Linda Hernandez',
      subHeader: 'Secretary',
      content: (
        <>
        I support SHPE so I can be able to support students in my community. I want to provide them with the knowledge I have about college to help them better navigate their educational and professional career and provide them with the resources they need to succeed.
        <br />
        <br />
        Fun Facts: I play the violin and the guitar. I also like hiking and being in nature!

        <br /> 

        <a href="mailto:lhernandezchavez1@student.gsu.edu">lhernandezchavez1@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Treasure.png',
      header: 'Brenda Samano',
      subHeader: 'Treasurer',
      content:  (
        <>
        I support SHPE because I want to be a part of a community that supports and empowers Hispanics in STEM by bridging the gap between education and employment.
        <br />
        Fun Facts: I've won a grape eating contest, and I have a keen interest in AI and worked on a research project using different algorithms.

        <br /> 

        <a href="mailto:fbrendasuzannegeorg1@student.gsu.edu">fbrendasuzannegeorg1@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Outreach.png',
      header: 'Isidro Lopez',
      subHeader: 'Outreach',
      content: (
        <>
        The reason I am a part of SHPE is because it is a mission of mine to empower more Latinos in a field where we currently are underrepresented.

        <br />
        <br />
        Fun Facts: I'm a part of a Latino fraternity named Lambda Theta Phi Latin Fraternity Incorporated. I also enjoy collecting art and Funko Pops.

        <br /> 

        <a href="mailto:ilopez7@student.gsu.edu">ilopez7@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'graphic.png',
      header: 'Jessica Zaragoza',
      subHeader: 'Graphic Design',
      content: (
        <>
        I want to help Hispanics in engineering or who are considering the field by providing encouragement, fostering growth, and inspiring motivation to pursue their ambitions. NOTHING IS IMPOSSIBLE.
        <br />
        <br />
        Fun Facts: I love being outdoorsy and playing sports. My favorite holiday is Halloween but Christmas is a close second.
        <br /> 

        <a href="mailto:Jzaragoza1@student.gsu.edu">Jzaragoza1@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Media.png',
      header: 'Luna Solorzano',
      subHeader: 'Marketing / Social Media',
      content: (
        <>
        I believe in SHPE’s mission to empower Latinx students in STEM by fostering a strong sense of community through engagement.

        <br />
        <br />
        Fun Facts: I can speak 3 languages. I also enjoy outdoor activities, like hiking, swimming, and sports.
        <br /> 

        <a href="mailto:lsolorzano5@student.gsu.edu">lsolorzano5@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Academic.png',
      header: 'James Rodriquez',
      subHeader: 'Academic Chair',
      content: (
        <>
        Hearing Latino Americans working in STEM made up less than 10% of the workforce, it's a mission of mine to get that number to hit double digits. I joined SHPE to provide resources and opportunities to the community.

        <br />
        <br />
        Fun Fact: I can beat Isidro in soccer.
        <br /> 

        <a href="mailto:jrodruqyez113@student.gsu.edu">jrodruqyez113@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'Events.png',
      header: 'Paola Hernandez',
      subHeader: 'Events Coordinator',
      content: (
        <>
        I want to help develop SHPE because I think it’s important for students to have a community of likeminded individuals. It can provide motivation and support, which are valuable for personal and professional growth.
        <br />
        <br />
        Fun Facts: I love traveling and seeing my favorite artists live!
        <br /> 

        <a href="mailto:phernandez7@student.gsu.edu">phernandez7@student.gsu.edu</a>
        </>
      ),
    },
    {
      image: 'SEC.png',
      header: 'Kevin Delgado',
      subHeader: 'Social Events Chair',
      content: (
        <>
        Supporting and helping the Hispanic community by representing it has been one of my goals, as well as bridging the gap between our community and the STEM field to gain exposure and share our culture in the science world.
        <br />
        <br />
        Fun Fact: I have three nationalities (Mexican, Colombian, and Panamanian).
        <br /> 

        <a href="mailto:kdelgado0003@gmail.com">kdelgado0003@gmail.com</a>
        </>
      ),
    },
  ];

  return (
    <div className="eboard-container">
      {/* Header */}
      <header className="eboard-header">
        <h1 className="eboard-main-title">Executive Board</h1>
        <p className="eboard-subtitle">2024 - 2025</p>
      </header>
      
      {/* Map over the cards array and render each card, Basically making them show up */}
      {cards.map((card, index) => (
        <div key={index} className={`eboard-card ${card.className || ''}`}>
          <img
            src={card.image} // Image URL from the card data
            alt={card.header} // Alt text for the image
            className="eboard-card-image"
          />
          <div className="eboard-card-content">
            <h2 className="eboard-card-header">{card.header}</h2>
            <h3 className="eboard-card-subheader">{card.subHeader}</h3>
            <p className="eboard-card-text">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EBoard;
