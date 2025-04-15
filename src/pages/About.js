function About() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">About Me</h1>
  
          <p className="text-lg mb-4">
            I'm <strong>Jaya Sakthi S</strong>, an Electronics and Communication Engineering student at <strong>SRM University</strong> (Batch: 2022-2026) with a GPA of <strong>7.77</strong>.
            I'm passionate about tech, and I love working on real-world projects using <span className="text-purple-600 font-semibold">React, IoT, ML, and Embedded Systems</span>.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Python</li>
            <li>MATLAB</li>
            <li>HTML & CSS</li>
            <li>AutoCAD</li>
            <li>Git & GitHub</li>
            <li>PowerPoint Presentations</li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Tools & Technologies</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Arduino</li>
            <li>IoT & Embedded Systems</li>
            <li>React & Tailwind CSS</li>
            <li>Google Colab & Kaggle</li>
            <li>Xilinx Simulation</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;
  