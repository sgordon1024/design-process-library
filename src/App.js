import React from 'react';
import './App.css';
import discoveryImg from './img/discovery-mag-glass.svg';
import conceptImg from './img/concept-displays.svg';
import sprintsImg from './img/sprints-arrows.svg';

function App() {
  return (
    <div clas="main-wrapper">
    <div class="top">  
      <a class="design-goals-btn" href="http://www.willowtreeapps.com">Design Goals</a>
      <h1 class="title">Design Process Library</h1>
      <section class="discovery">
        <img src={discoveryImg} alt="magnifying glass"/>
        <h2 class="process-h">Discovery</h2>
        <p class="process-p">Understanding your business, objectives, and user mindset</p>
        <div class="pill discovery-pill"></div>
      </section>
      <section class="concept">
        <img src={conceptImg} alt="magnifying glass"/>
        <h2 class="process-h">Concept</h2>
        <p class="process-p">Establishing a branded vision &amp; laying the foundation for product architecture</p>
        <div class="pill concept-pill"></div>
      </section>
      <section class="sprints">
        <img src={sprintsImg} alt="magnifying glass"/>
        <h2 class="process-h">Feature Sprints</h2>
        <p class="process-p">Continuous cycles of ideating, designing, prototyping, evaluating, and iterating</p>
        <div class="pill sprints-pill"></div>
      </section>
    </div>
    <section>
      <h2>Team Members</h2>
      <div class="team-members-wrapper">
        <span class="team-member designers">Designers</span>
        <span class="team-member engineers">Engineers</span>
        <span class="team-member test-engineers">Test Engineers</span>
        <span class="team-member content-strategy">Content Strategy</span>
        <span class="team-member requirements">Requirements</span>
        <span class="team-member strategy-research">Stragist/Researcher</span>
        <span class="team-member insights">Insights</span>
        <span class="team-member project-manager">Project Manager</span>
      </div>
    </section>
    <hr/>
    <section class="activity-wrapper">
      <h2 class="section-title">DISCOVERY</h2>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span><abbr title="Designer">D</abbr></span>
          <span><abbr title="Engineer">E</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Test Engineer">T</abbr></span>
          <span><abbr title="Content Strategist">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Project Manager">P</abbr></span>
        </div>
        <h2>Kick-off Prep</h2>
        <p>Work with Business Development and the principal to start planning the Kickoff. This includes putting together the kickoff deck, planning the Conceptual Design Workshop, 
and how to discuss the project plan with 
the client.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Strategists/Researchers">S</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
        </div>
        <h2>Landscape Analysis</h2>
        <p>Collect and compare data about different products (and companies) in a similar space. The space could be based on the brand or functionality of a particular feature. Highlight the strengths and weaknesses of products to make better informed decisions about your product strategy. This can be an overview of the entire product landscape, product features, visual design language, or content evaluation.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Outcomes &amp; Business Goals</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Strategists/Researchers">S</abbr></span>
        </div>
        <h2>Journey Mapping &amp; Personas</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span><abbr title="Designers">D</abbr></span>
        </div>
        <h2>Review</h2>
        <p>Review all progress up to this point with the Director of Product Design.</p>
      </div>
    </section>

    <hr/>

    <section class="activity-wrapper">
      <h2 class="section-title">CONCEPT</h2>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Information Architecture</h2>
        <p>Start with whiteboarding or sketching the hierarchy of the product focusing on the Golden Path. This step should give everyone a general understanding on where content lives. Optionally, you may decide to formalize this with a mindnode.</p>
        <p>Use information learned in the Outcomes Workshop to inform the golden path.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Ideation Workshop</h2>
        <p>Get together with various team members and sketch out the golden path. This is meant to uncover how different people prioritize parts of the golden path.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Design Direction Workshop</h2>
        <p>The Designer will run the Conceptual Design Workshop, a 2 hour design activity based on Cooper Design’s Brand Attributes Workshop.</p>
        <p>We also include a Brand Messaging Architecture Workshop led by the Content Designer to determine the client's core messages and the voice and tone of content.</p>
        <p>Insights can run a 1 hour Outcomes Workshop to determine the client’s product goals and business objectives.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
        <button href="#">How to Run a Workshop</button>

      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
        </div>
        <h2>Vision Boards</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>An InVision Board is a great way to capture the output of the Conceptual Design Workshop in a sharable format that’s easy to reference throughout the project.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Content Direction</h2>
        <p>Using the Brand Messaging Architecture Workshop findings as an input, the Content Designer documents the brand voice and tone. We can clarify key terminology, conventions websites, and brand personality here. We also document and socialize the key messaging pillars that the content should deliver to the client’s audience.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Initial Build (Golden Path)</h2>
        <p>Work with developers to create a build of the Golden Path using mock data. This build should have basic navigation through the Golden Path, built with native components and little to no visual design. This should be a quick and dirty build, don’t worry about aesthetics at this point.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Initial Product Map</h2>
        <p>Create an high level overview of screens and how they connect based on the information architecture and wirefreaming stages. Some projects might benefit from a very simplified approach to this, as it may become time consuming to maintain, while others may choose to do very detailed product maps that show designs on the screens.</p>
        <p>Some projects may find this step not valuable and choose to not create a product map.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Internal Review</h2>
        <p>Review Visual Design Direction and Product Map (if applicable) with Chief Experience Officer, the Director of Product Design, and the Strategist (if applicable).</p>
        <ul>
          <li>Treat the meeting like a practice presentation.</li>
	        <li>It’s up to you and the project manager to consider planning for this initial design review in your design plan.</li>
	        <li>When a project kicks off and a designer has an initial schedule, this meeting should be included on the schedule and set up by the project manager.</li>
        </ul>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Client Review</h2>
        <p>Review Visual Design Direction, the build, and Product Map with the client.</p>
      </div>
    </section>

    <hr/>
    
    <section class="activity-wrapper">
      <h2 class="section-title">FEATURE DESIGN SPRINTS</h2>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
          <span><abbr title="Insights">I</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Wireframing</h2>
        <p>Start with whiteboarding or sketching the Golden Path while developing a plan for the build. Utilizing native components and frameworks should be considered at this point. This is a great time to call out any customization that will be added. This way the engineers will be able to start building the structure while the Designer focuses on custom elements.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Content Design</h2>
        <p>Content designers draft preliminary content ahead of visual design. This allows designers to craft the visual design informed by real-world-content.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
        </div>
        <h2>Visual + Motion Design</h2>
        <p>Take all knowledge up to this point and establish a visual direction and voice and tone. Consider the output from the strategy engagement (if applicable), the Conceptual Design Workshop, and the brand. This is typically a deck that shows moodboards showing examples of type, color, imagery, layouts, page density, custom interactions, and a motion study. Keep in mind, clients aren’t usually familiar with these and can be confusing to see designs from other brands so clear explanations and key takeaways are really important.</p>
        <p>This can be shared with the team, and even hung up in the team space, once it’s been reviewed with the client. This keeps design intention on everyone’s mind while building.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Content Collaboration</h2>
        <p>Product Designers and Content Designers should meet in regular working sessions several times a week to whiteboard ideas. Together, they can create and maintain a content matrix that documents all content that will be and is used throughout designs. This should be shared with the entire team to reference and is subject to feedback throughout the design sprints.</p>
        <p>Ideally, Content Designers should draft preliminary content ahead of visual design so that Product Designers can with real content.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
        </div>
        <h2>Prototyping</h2>
        <p>Prototyping the product can mean using Xcode to test native features, Principle to quickly validate interactions, Framer X to try complex interactions, Origami to use device hardware, or Invision. This stage is ongoing and has many uses. Ideally view the prototype on the device it’s built for.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Strategists/Researchers">S</abbr></span>
        </div>
        <h2>User Testing</h2>
        <p>User testing is essential to design decisions and should be happening throughout the project. This may be formal testing using the usability lab with paid participants or asking for feedback on prototypes based on user flow goals. </p> 
        <p>To setup formal testing get  the help from someone on the Strategy/Research team.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Client Review</h2>
        <p>Review builds with the client on a normal cadence. This can be via video call or in person. It helps to restate the purpose of the user flow before the review so everyone has the same goal in mind.</p>
        <button href="#">Design Review Guide</button>
      </div>
    </section>

    <hr/>
    
    <section class="activity-wrapper">
      <h2 class="section-title">DESIGN SPRINT INTERNAL REVIEWS</h2>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
        </div>
        <h2>Design Team Feedback</h2>
        <p>Designers should be utilizing the group critique times to get constant feedback. Review things like color, type, spacing, layouts, sounds, animations.</p>
        <p>Designers will also have short reviews once a week with Director of Product Design, sharing design progress during 1:1s.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Design Review with Engineers</h2>
        <p>Short ad hoc reviews with 1 - 2 engineers. These should happen often throughout the project and shouldn’t need to be scheduled ahead of time. With the goals the user flows in mind the engineer and designer should critique designs.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Porject Manager">P</abbr></span>
        </div>
        <h2>Build Reviews</h2>
        <p>Short ad hoc reviews with the lead engineer (optional) and the engineer who built the feature up for review. Designers should be reviewing the build to ensure it feels the way they intended. Also, checking for color, type, spacing, layouts, tap states, sounds, animations, content, voice, tone, and haptics. It’s best to review the build on a device, ask an Engineer to put the build on a device before meeting.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
        </div>
        <h2>Requirements Reviews</h2>
        <p>Designers should be reviewing with the Technical Requirements Manager regularly to ensure their designs are meeting requirements.</p>
        <p>Work with them to develop a plan for documenting design decisions alongside functional requirements. This may include functionality notes, layout intent (scroll behaviors, responsive patterns, etc.), and any edge cases that don’t need designs. You might use Jira, comments in Zeplin or InVision, or a spreadsheet. If you’re making design decisions in a build, make sure they get documented too.</p>
        <button href="#">Recording Requirements Guide</button>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Engineers">E</abbr></span>
          <span><abbr title="Test Engineers">T</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
          <span><abbr title="Requirements">R</abbr></span>
        </div>
        <h2>Content Modeling</h2>
        <p>Based on the designs and content, determine the structure of the content and how it should be consumed by the content management system (CMS) being implemented. This is an iterative process.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span><abbr title="Designers">D</abbr></span>
          <span><abbr title="Content Strategists">C</abbr></span>
        </div>
        <h2>Pre-demo Design Review</h2>
        <p>Product designers and content designers should meet prior to client demos to ensure that content appears and works as designed.</p>
      </div>
    </section>

  </div>
  );
}

export default App;
