function Contact() {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Contact Me</h1>
  
          <p className="text-lg text-gray-700 mb-4">
            I'd love to connect! Feel free to reach out to me through any of the platforms below.
          </p>
  
          <ul className="space-y-4 text-gray-800">
            <li>
              📧 Email: <a href="mailto:jayasakthis102004@gmail.com" className="text-indigo-500 hover:underline">jayasakthis102004@gmail.com</a>
            </li>
            <li>
              💼 LinkedIn: <a href="https://www.linkedin.com/in/jaya-sakthi-s-a02170259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">linkedin.com/in/jaya-sakthi-s</a>
            </li>
            <li>
              🐙 GitHub: <a href="https://github.com/JAYASAKTHI07" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">github.com/JAYASAKTHI07</a>
            </li>
            <li>
              📱 Phone: <span className="text-gray-700">+91-9345877531</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Contact;
  