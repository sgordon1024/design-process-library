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
          <span>D</span>
          <span>E</span>
          <span>I</span>
          <span>T</span>
          <span>C</span>
          <span>R</span>
          <span>P</span>
        </div>
        <h2>Kick-off Prep</h2>
        <p>Work with Business Development and the principal to start planning the Kickoff. This includes putting together the kickoff deck, planning the Conceptual Design Workshop, 
and how to discuss the project plan with 
the client.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Landscape Analysis</h2>
        <p>Collect and compare data about different products (and companies) in a similar space. The space could be based on the brand or functionality of a particular feature. Highlight the strengths and weaknesses of products to make better informed decisions about your product strategy. This can be an overview of the entire product landscape, product features, visual design language, or content evaluation.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Outcomes &amp; Business Goals</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Journey Mapping &amp; Personas</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons discovery-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
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
          <span>D</span>
          <span>E</span>
          <span>I</span>
          <span>T</span>
          <span>C</span>
          <span>R</span>
          <span>P</span>
        </div>
        <h2>Kick-off Prep</h2>
        <p>Work with Business Development and the principal to start planning the Kickoff. This includes putting together the kickoff deck, planning the Conceptual Design Workshop, 
and how to discuss the project plan with 
the client.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Landscape Analysis</h2>
        <p>Collect and compare data about different products (and companies) in a similar space. The space could be based on the brand or functionality of a particular feature. Highlight the strengths and weaknesses of products to make better informed decisions about your product strategy. This can be an overview of the entire product landscape, product features, visual design language, or content evaluation.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Outcomes &amp; Business Goals</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Journey Mapping &amp; Personas</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons concept-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Review</h2>
        <p>Review all progress up to this point with the Director of Product Design.</p>
      </div>
    </section>

    <hr/>
    
    <section class="activity-wrapper">
      <h2 class="section-title">CONCEPT</h2>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span>D</span>
          <span>E</span>
          <span>I</span>
          <span>T</span>
          <span>C</span>
          <span>R</span>
          <span>P</span>
        </div>
        <h2>Kick-off Prep</h2>
        <p>Work with Business Development and the principal to start planning the Kickoff. This includes putting together the kickoff deck, planning the Conceptual Design Workshop, 
and how to discuss the project plan with 
the client.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Landscape Analysis</h2>
        <p>Collect and compare data about different products (and companies) in a similar space. The space could be based on the brand or functionality of a particular feature. Highlight the strengths and weaknesses of products to make better informed decisions about your product strategy. This can be an overview of the entire product landscape, product features, visual design language, or content evaluation.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Outcomes &amp; Business Goals</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Journey Mapping &amp; Personas</h2>
        <p>Work with Strategy and Research to develop a Journey Map that outlines every step the user is likely to take before and after using the product.</p>
        <p>You might find it useful to do a Journey Map for a few different personas found in Strategy.</p>
      </div>
      <div class="activity">
        <div class="discipline-icons sprint-phase">
          <span>D</span>
          <span>I</span>
          <span>C</span>
          <span>S</span>
        </div>
        <h2>Review</h2>
        <p>Review all progress up to this point with the Director of Product Design.</p>
      </div>
    </section>

  </div>
  );
}

export default App;
