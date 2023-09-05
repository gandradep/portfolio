import Directory from "../directory/directory.component";
const Projects = () => {
  const projects = [
    {
      "id": 1,
      "title": "example1",
      "type": "developer"
    },
    {
      "id": 2,
      "title": "example2",
      "type": "creative"
    },
    {
      "id": 3,
      "title": "example3",
      "type": "music"
    }
  ]
  return(
    <div>
      <h1>My projects</h1>
      <Directory projects={projects} />
    </div>
  )
};

export default Projects;