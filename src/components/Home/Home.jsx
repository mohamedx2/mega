import HomePageForTest from '../../pages/App_PAges/HomePage/homePageForTest';


const gridContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'transparent', // Set the background color to black
}

const contentStyle = {
  flex: '1',
  
  
}


  

export default function Home() {
  return (
    <div style={gridContainerStyle} >
      
      
      
      <div style={contentStyle}>
        
        
        <HomePageForTest />
      </div>
    </div>
  );
}
