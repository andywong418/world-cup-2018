const teams = [
  'Russia',
  'Saudi Arabia',
  'Egypt',
  'Uruguay',
  'Portugal',
  'Spain',
  'Morocco',
  'Iran',
  'France',
  'Australia',
  'Peru',
  'Denmark',
  'Argentina',
  'Iceland',
  'Croatia',
  'Nigeria',
  'Brazil',
  'Switzerland',
  'Costa Rica',
  'Serbia',
  'Germany',
  'Mexico',
  'Sweden',
  'South Korea',
  'Belgium',
  'Panama',
  'Tunisia',
  'England',
  'Poland',
  'Senegal',
  'Colombia',
  'Japan'
]

const teamDbFormat = teams.map(team => {
  return {
    team
  }
})
console.log(teamDbFormat)
module.exports = teamDbFormat
