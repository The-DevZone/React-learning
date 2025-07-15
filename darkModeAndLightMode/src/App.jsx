import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theamChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#121212",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyles} className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        {isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>

      <motion.button
        onClick={theamChange}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{
          scale: 0.95,
          rotate: -1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-lg font-semibold tracking-wide"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </motion.button>
    </div>
  );
};

export default App;
