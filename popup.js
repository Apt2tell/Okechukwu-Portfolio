const projects = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: './images/Snapshoot-Portfolio-desktop1.svg',
    shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://www.canopy.cr/tonic',
    sourceLink: 'https://www.canopy.cr/tonic',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: './images/Snapshoot-Portfolio-desktop2.svg',
    shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: './images/Snapshoot-Portfolio-desktop3.svg',
    shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: './images/Snapshoot-Portfolio-desktop4.svg',
    shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'javascript', 'Ruby on rails'],
    liveLink: 'https://www.uber.com/',
    sourceLink: 'https://www.uber.com/',
  },
];
const myContent = document.querySelector('.work-card');
const showInHtml = projects
  .map(
    (project, index) => `<div  class="work-card">
      <img 
          src=${project.screenshot} 
          alt="the snapshot backshoot background one" 
          class="snapshot-img">

      <div class="second-block"> 
          <div class="primary-text">
              <h1 class="work-title">${project.title}</h1>
              <ul class="work-frame">
                  <li class="frame-item1">${project.info.client}</li>
                  <li class="frame-item2">${project.info.role}</li>
                  <li class="frame-item3">${project.info.year}</li>
              </ul>
              <p class="message">${project.shortDescription}</p>
          </div>
          <div class="tags">
              <button class="button-html">${project.skills[0]}</button>
              <button class="button-css">${project.skills[0]}</button>
              <button class="button-javascript">${project.skills[0]}</button>
          </div>
          <div class="action">
              <button  class="project-btn project-text" id=${index}>See Project</button>
          </div>
    </div>  </div>
`,
  )
  .join('');
myContent.innerHTML = showInHtml;

const popUpDetails = projects.map(
  (project) => `<section class="popup">
      <div class="popup-header">
        <h2 class="work-title" id="popup-project-title">${project.title}</h2>
        <span id="cl" class="close">&times;</span>
      </div>
      <div class="popup-project-info" id="project-info"></div>
      <div id="project-image-holder">
        <img
          src=${project.screenshot}
          alt="Tonic project screenshot"
          class="popup-project-image"
          id="popup-project-image"
        />
      </div>
      <div class="popup-project-details">
        <div class="column-left">
          <p class="popup-project-description" id="project-description">${project.description}</p>
        </div>
        <div class="column-right">
          <div class="popup-project-stack" id="popup-project-stack">
          <ul class="btn-container-flex">
            <li class="btn">
              <button class="btn-sm" type="button">${project.skills[0]}</button>
            </li>
            <li class="btn">
              <button class="btn-md" type="button">${project.skills[1]}</button>
            </li>
            <li class="btn">
              <button class="btn-lg" type="button">${project.skills[2]}</button>
            </li>
          </ul>
          </div>
          <div class="popup-project-buttons">
              <button type="button" id="see-live-btn" class="project-btn project-text" onclick="">
                See Live
              </button>
              <button type="button" class="project-btn project-text" id="see-source-btn" onclick="">
                See Source
              </button>
          </div>
        </div>
      </div>
    </section>`,
);

const popup = document.getElementById('popup');

function f1() {
  const y = Number(this.id);
  popup.innerHTML = popUpDetails[y];
  popup.style.display = 'block';
  document.getElementById('cl').onclick = function () {
    popup.innerHTML = '';
    popup.style.display = 'none';
  };
}

document.getElementById('0').onclick = f1;
document.getElementById('1').onclick = f1;
document.getElementById('2').onclick = f1;
document.getElementById('3').onclick = f1;

const span = document.getElementsByClassName('close')[0];

span.onclick = () => {
  popup.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};