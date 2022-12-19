import logo from './logo.svg';
import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

function App() {
  const [displayPortofolio, setPortfolio] = useState(data);

  return (
    <div className="App">
      <div className = "Header">
        <div className = "UpperHeader">
          <div className = "Logo">
            <b> My Portfolio</b>
          </div>
          <div className = "Menu">
            <div className = "Menu_Child">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/">
                Home
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/">
                About Me
              </a>
            </div>
          </div>
        </div>
        <div className = "LowerHeader">
          <i>Home/Iterative Redesign</i>
        </div>
      </div>
      <div className = "Introduction">
        <div className = "Button_Container">
          <div className = "TextBox_text">
            Iterative Redesign
          </div>
          <a href = 'https://www.figma.com/file/riR3fH87iBOXCVn2OFDNmC/UI-It-Design-Prototype?t=VPO2x5aIAkZJDpHC-0'>
            <button  className = "Button">Figma Link</button>
          </a>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Introduction
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            In this assignment, I worked in a group of 4 and we were tasked with creating a 
            website that suited the interface needs of an emerging startup. We chose Nest Genomics, 
            a genomics dashboard software for patients. Throughout the design phase, we had to utilize Lo-Fi 
            and Hi-Fi sketches, teamwork, and feedback from other students to design and improve the interface. 
            </p>
          </div>
        </div>
        <div className = "Basic_ImageContainer">
          <img src = "./Images/startup.png" className = "Basic_Image0"></img>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Problem
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            As a team, we wanted to create a webpage with appropriate UI for users of a biomedical firm. 
            Therefore, there were multiple areas to consider. Firstly, we needed to know what kind of user 
            will use the webpage. Secondly, we needed to create the webpage using design theory. Finally, 
            we needed user feedback to patch up any areas of the webpage that we overlooked.
            </p>
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Goals
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            The technical goals of this assignment are as follows:
            <ul>
              <li>Analyze user goals in conjunction with the purpose of the firm</li>
              <li>Create Lo-Fi and Hi-Fi markups</li>
              <li>Recieve user feedback</li>
              <li>Amend UI based on user feedback</li>
            </ul> 
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Design
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <b>Design Theory:</b>
            <p>
            We sought to create the user experience based on a female who has breast 
            cancer. From this, we utilized colours that were more subtle and welcoming (pink). 
            We also made buttons clear and visble for better affordances.
            </p>
            </div>
            <div className = "TextBox_Child">
            <b>Lo-Fi:</b>
            <p>
            We created Lo-Fi sketches on paper based on our idea of the startup. Then, we merged 
            our designs together in the Balsamiq.
            </p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Lofi.png" className = "Basic_Image1"></img>
            </div>
            <div className = "TextBox_Child">
            <b>Hi-Fi:</b>
            <p>
            We then finalized our Lo-Fi prototype by then using Figma to create our Hi-Fi prototype. 
            We created a style guide for users to know what assets were utilized.
            </p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Design.png" className = "Basic_Image1"></img>
            </div>
            <div className = "TextBox_Child">
            <b>Incorporating User Feedback:</b>
            <p>In one of our group sessions at Brown, we got to give user feedback to others, 
              while recieving user feedback from others too. Below are the user feedback we recieved, 
              and what we did to implement the feedback.</p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Feedback.png" className = "Basic_Image1"></img>
            </div>
            <div className = "TextBox_Child">
            <b>Using UI Testing Software:</b>
            <p>After revising our Hi-Fi mockup, we then deployed it onto a professional user testing website. 
              The responses for this website are outlined below.</p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Response.png" className = "Basic_Image2"></img>
            </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Reflection
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            Overall, I felt that we did a very good job regarding our UI. 
            I learned alot about collaborating in a team in creating a UI that was easy and compelling. 
            I also particularly learned about recieving feedback and criticism, then incorporating such 
            feedback into our work.
            </p>
            <p>
            There was not much to amend in my journey in designing this website. The only thing to do next is 
            to incorporate the professional feedback, then incorporate the feedback into the Figma design. 
            Hopefully, I will be able to create this website on React in the future!
            </p>

          </div>
        </div>
      </div>

      <div className = "OtherProjects_Divider">
        <div className = "Other_ProjectsTitle">
          <div className = "Other_ProjectsTitle">
            <div className = "OtherProjectsTitle_Text">
            <i>You May Also Like...</i>
            </div>
          </div>
        </div>
        <div className = "Other_ProjectsComponents">
          <div className = "Other_ProjectsChild">
            {displayPortofolio.map((item)=> (
              <PortofolioBox
              item = {item}/>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
