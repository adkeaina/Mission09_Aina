import './TeamCard.css';

export default function TeamCard(team: any) {
  team = team.team;
  return (
    <div className="team-card">
      <h2 className="team-name">{team.school}</h2>
      <p className="mascot-name">Mascot: {team.name}</p>
      <p className="location">
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}
