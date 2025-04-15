function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">


        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jaya Sakthi 👋</h1>
        <h2 className="text-2xl mb-6">ECE Student | Aspiring Developer</h2>
        <p className="text-center max-w-xl mb-6">
          I'm an Electronics and Communication Engineering student at SRM University. 
          I love building tech projects with IoT, React, and AI/ML. 
          Currently working on a facial emotion-based music recommendation system! 🎧
        </p>
        <a
  href="https://drive.google.com/file/d/1ihTJxqED-ajbxI4-V-cGz1M2n1jFkDWN/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition"
>
  View Resume
</a>

      </div>
    );
  }
  
  export default Home;
  