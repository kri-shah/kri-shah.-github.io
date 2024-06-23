import React from 'react';
import TypingAnimation from './TypingAnimation';
import '../App.css' 

function Home() {
  const text = "Hi My Name Is Krish Shah!";
  const text2 = "I'm a Computer Science and Engineering Undergrad at the University of Connecticut.";
  
  // State to keep track of when to show the second TypingAnimation component
  const [showSecondTyping, setShowSecondTyping] = React.useState(false);
  
  // Function to set showSecondTyping state to true after 3 seconds
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondTyping(true);
    }, 4000); // Delay of 3 seconds 
    
    // Clean up function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run this effect only once on mount
  
  return (
    
    <body className="HomePage">
      <body className="Home1">
        
        <TypingAnimation text={text} level="h1" />
        <body className="Home2">
          {/* Render the second TypingAnimation component only if showSecondTyping is true */}

          {showSecondTyping && <TypingAnimation text={text2} level="p1" />}
        </body>
      </body>
      
      
    </body>
    
    
   

  );
}

export default Home;
