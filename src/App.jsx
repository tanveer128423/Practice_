import './App.css';
import ServiceCard from './components/ServiceCard';

function App(){
  const Service = [
    {
      title: "cloud computing",
      description:"anything"
    },
    {
      title: "cloud computing",
      description:"anything"
    },
    {
      title: "cloud computing",
      description:"anything"
    },
  ];
  return (
    <>
    <h1>Service List</h1>
    {Service.map((data,index) => (
      <ServiceCard
      key = {index}
      title = {data.title}
      description = {data.description}
      />
    ))};
    </>
  );
}

export default App;