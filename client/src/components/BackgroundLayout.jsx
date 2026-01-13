

const BackgroundLayout = ({ children, imageUrl, opacity = "opacity-40" }) => {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div 
          className={`absolute inset-0 bg-cover bg-center z-0 ${opacity}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        
        
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />
  
       
        <div className="relative z-10 w-full max-w-md">
          {children}
        </div>
      </div>
    );
  };
  
  export default BackgroundLayout;

