import './App.css';
import Header from './Header';
import data from './CollegeBasketballTeams.json';
import TeamCard from './TeamCard';

function App() {
  const CollegeBasketballTeams = data['teams'];
  return (
    <>
      <Header />
      <div className="card-container">
        {CollegeBasketballTeams.map((team) => (
          <TeamCard key={team.cid} team={team} />
        ))}
      </div>
    </>
  );
}

export default App;
