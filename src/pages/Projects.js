function Projects() {
    const projects = [
      {
        title: "Mood-Based Music Recommender",
        description: "Facial emotion recognition system using Restormer and Spotify data to suggest songs.",
        link: "https://github.com/your-username/mood-music",
      },
      {
        title: "Obstacle Avoiding Robot",
        description: "Voice and Bluetooth-controlled robot using Arduino and ultrasonic sensors.",
        link: "https://github.com/your-username/robot-project",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">My Projects</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  