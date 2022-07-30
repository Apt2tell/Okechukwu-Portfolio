const projectDetails = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: './images/SnapshootPortfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: './images/SnapshootPortfolio2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    info: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: './images/SnapshootPortfolio-3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    info: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: './images/Snapshoot-Portfolio-4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const popup = document.getElementById('popup');
const seeProjectButton = document.querySelectorAll('.see-project-button');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', () => {
    popup.style.display = 'block';
    const projectDetails = getProjectDetails(element.id);
    document.getElementById('staticBackdropLabel').innerHTML =
      projectDetails.title;
    let details = '';
    Object.keys(projectDetails.info).forEach((key) => {
      details += `<span class="client">${key}</span> `;
      details += ' <i class="fas fa-circle divider"></i> ';
    });
    document.getElementById('project-info').innerHTML = details;
    document.getElementById('modal-body').innerHTML =
      projectDetails.screenshot;
    document.getElementById('project-description').innerHTML =
      projectDetails.description;
    let projectSkills = '';
    Object.keys(projectDetails.technologies).forEach((key) => {
      projectSkills += `<span class="label">${projectDetails.technologies[key]}</span>`;
    });
    document.getElementById('project-skills').innerHTML =
      projectSkills;
    document.getElementById('see-live-btn').addEventListener('click', () => {
      window.location.href = projectDetails.liveLink;
    });
    document.getElementById('see-source-btn').addEventListener('click', () => {
      window.location.href = projectDetails.sourceLink;
    });
  });
});
// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};