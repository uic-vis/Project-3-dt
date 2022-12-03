var team = [
{"league_position": "1", "squad": "Manchester City", "points": "93", "goals": "99", "conceded": "26", "ticketsales": "52774"},
{"league_position": "2", "squad": "Liverpool", "points": "92", "goals": "94", "conceded": "26", "ticketsales": "53352"},
{"league_position": "3", "squad": "Chelsea", "points": "74", "goals": "76", "conceded": "33", "ticketsales": "36443"},
{"league_position": "4", "squad": "Tottenham", "points": "71", "goals": "69", "conceded": "40", "ticketsales": "56523"},
{"league_position": "5", "squad": "Arsenal", "points": "69", "goals": "61", "conceded": "48", "ticketsales": "59665"},
{"league_position": "6", "squad": "Manchester Utd", "points": "58", "goals": "57", "conceded": "57", "ticketsales": "73150"},
{"league_position": "7", "squad": "West Ham", "points": "56", "goals": "60", "conceded": "51", "ticketsales": "58370"},
{"league_position": "8", "squad": "Leicester City", "points": "52", "goals": "62", "conceded": "59", "ticketsales": "32493"},
{"league_position": "9", "squad": "Brighton", "points": "51", "goals": "42", "conceded": "44", "ticketsales": "30966"},
{"league_position": "10", "squad": "Wolves", "points": "51", "goals": "38", "conceded": "43", "ticketsales": "30841"},
{"league_position": "11", "squad": "Newcastle Utd", "points": "49", "goals": "44", "conceded": "62", "ticketsales": "51487"},
{"league_position": "12", "squad": "Crystal Palace", "points": "48", "goals": "50", "conceded": "46", "ticketsales": "24588"},
{"league_position": "13", "squad": "Brentford", "points": "46", "goals": "48", "conceded": "56", "ticketsales": "16918"},
{"league_position": "14", "squad": "Aston Villa", "points": "45", "goals": "52", "conceded": "54", "ticketsales": "41681"},
{"league_position": "15", "squad": "Southampton", "points": "40", "goals": "43", "conceded": "67", "ticketsales": "30134"},
{"league_position": "16", "squad": "Everton", "points": "39", "goals": "43", "conceded": "66", "ticketsales": "38446"},
{"league_position": "17", "squad": "Leeds United", "points": "38", "goals": "42", "conceded": "79", "ticketsales": "36308"},
{"league_position": "18", "squad": "Burnley", "points": "35", "goals": "34", "conceded": "53", "ticketsales": "19278"},
{"league_position": "19", "squad": "Watford", "points": "23", "goals": "34", "conceded": "77", "ticketsales": "20614"},
{"league_position": "20", "squad": "Norwich City", "points": "22", "goals": "23", "conceded": "84", "ticketsales": "26836"},
]

var top_goals = [
{name: "Son Heung-min", nation: "kr KOR", position: "MFFW", squad: "Tottenham", age: "29", played: "35", goals: "23", assists: "7", nonPKgoals: "23", PKgoals: "0", expected: "15.6", nonPKexpected: "15.6", yellows: "2", reds: "0"},
{name: "Mohamed Salah", nation: "eg EGY", position: "FW", squad: "Liverpool", age: "29", played: "35", goals: "23", assists: "13", nonPKgoals: "18", PKgoals: "5", expected: "23.7", nonPKexpected: "18.8", yellows: "1", reds: "0"},
{name: "Cristiano Ronaldo", nation: "pt POR", position: "FW", squad: "Manchester Utd", age: "36", played: "30", goals: "18", assists: "3", nonPKgoals: "15", PKgoals: "3", expected: "17.9", nonPKexpected: "15.6", yellows: "8", reds: "0"},
{name: "Harry Kane", nation: "eng ENG", position: "FW", squad: "Tottenham", age: "28", played: "37", goals: "17", assists: "9", nonPKgoals: "13", PKgoals: "4", expected: "19.6", nonPKexpected: "16.4", yellows: "5", reds: "0"},
{name: "Sadio Mané", nation: "sn SEN", position: "FW", squad: "Liverpool", age: "29", played: "34", goals: "16", assists: "2", nonPKgoals: "16", PKgoals: "0", expected: "18.3", nonPKexpected: "18.3", yellows: "5", reds: "0"},
{name: "Diogo Jota", nation: "pt POR", position: "FW", squad: "Liverpool", age: "24", played: "35", goals: "15", assists: "4", nonPKgoals: "15", PKgoals: "0", expected: "16.9", nonPKexpected: "16.9", yellows: "3", reds: "0"},
{name: "Kevin De Bruyne", nation: "be BEL", position: "MF", squad: "Manchester City", age: "30", played: "30", goals: "15", assists: "8", nonPKgoals: "15", PKgoals: "0", expected: "6.2", nonPKexpected: "6.2", yellows: "2", reds: "0"},
{name: "Jamie Vardy", nation: "eng ENG", position: "FW", squad: "Leicester City", age: "34", played: "25", goals: "15", assists: "2", nonPKgoals: "15", PKgoals: "0", expected: "10.3", nonPKexpected: "10.3", yellows: "2", reds: "0"},
{name: "Wilfried Zaha", nation: "ci CIV", position: "FWMF", squad: "Crystal Palace", age: "28", played: "33", goals: "14", assists: "1", nonPKgoals: "9", PKgoals: "5", expected: "11.0", nonPKexpected: "5.4", yellows: "6", reds: "1"},
{name: "Raheem Sterling", nation: "eng ENG", position: "FWMF", squad: "Manchester City", age: "26", played: "30", goals: "13", assists: "5", nonPKgoals: "11", PKgoals: "2", expected: "14.4", nonPKexpected: "11.9", yellows: "1", reds: "0"},
{name: "Jarrod Bowen", nation: "eng ENG", position: "MF", squad: "West Ham", age: "24", played: "36", goals: "12", assists: "10", nonPKgoals: "12", PKgoals: "0", expected: "13.3", nonPKexpected: "13.3", yellows: "6", reds: "0"},
{name: "Ivan Toney", nation: "eng ENG", position: "FW", squad: "Brentford", age: "25", played: "33", goals: "12", assists: "5", nonPKgoals: "7", PKgoals: "5", expected: "12.4", nonPKexpected: "8.5", yellows: "8", reds: "0"},
{name: "James Maddison", nation: "eng ENG", position: "MFFW", squad: "Leicester City", age: "24", played: "35", goals: "12", assists: "8", nonPKgoals: "12", PKgoals: "0", expected: "8.8", nonPKexpected: "8.8", yellows: "3", reds: "0"},
{name: "Teemu Pukki", nation: "fi FIN", position: "FW", squad: "Norwich City", age: "31", played: "37", goals: "11", assists: "3", nonPKgoals: "8", PKgoals: "3", expected: "12.7", nonPKexpected: "10.3", yellows: "4", reds: "0"},
{name: "Bukayo Saka", nation: "eng ENG", position: "MF", squad: "Arsenal", age: "19", played: "38", goals: "11", assists: "7", nonPKgoals: "9", PKgoals: "2", expected: "11.2", nonPKexpected: "10.2", yellows: "6", reds: "0"},
{name: "Raphinha", nation: "br BRA", position: "MFFW", squad: "Leeds United", age: "24", played: "35", goals: "11", assists: "3", nonPKgoals: "7", PKgoals: "4", expected: "11.3", nonPKexpected: "8.1", yellows: "7", reds: "0"},
{name: "Ollie Watkins", nation: "eng ENG", position: "FW", squad: "Aston Villa", age: "25", played: "35", goals: "11", assists: "2", nonPKgoals: "10", PKgoals: "1", expected: "11.0", nonPKexpected: "10.4", yellows: "7", reds: "0"},
{name: "Mason Mount", nation: "eng ENG", position: "MF", squad: "Chelsea", age: "22", played: "32", goals: "11", assists: "10", nonPKgoals: "10", PKgoals: "1", expected: "8.8", nonPKexpected: "8.0", yellows: "4", reds: "0"},
{name: "Riyad Mahrez", nation: "dz ALG", position: "FWMF", squad: "Manchester City", age: "30", played: "28", goals: "11", assists: "5", nonPKgoals: "7", PKgoals: "4", expected: "11.1", nonPKexpected: "7.1", yellows: "0", reds: "0"},
{name: "James Ward-Prowse", nation: "eng ENG", position: "MF", squad: "Southampton", age: "26", played: "36", goals: "10", assists: "5", nonPKgoals: "6", PKgoals: "4", expected: "5.9", nonPKexpected: "2.7", yellows: "3", reds: "1"},
]

var top_assists = [
{name: "Mohamed Salah", nation: "eg EGY", position: "FW", squad: "Liverpool", age: "29", played: "35", goals: "23", assists: "13", nonPKgoals: "18", PKgoals: "5", expected: "23.7", nonPKexpected: "18.8", yellows: "1", reds: "0"},
{name: "Trent Alexander-Arnold", nation: "eng ENG", position: "DF", squad: "Liverpool", age: "22", played: "32", goals: "2", assists: "12", nonPKgoals: "2", PKgoals: "0", expected: "2.9", nonPKexpected: "2.9", yellows: "2", reds: "0"},
{name: "Jarrod Bowen", nation: "eng ENG", position: "MF", squad: "West Ham", age: "24", played: "36", goals: "12", assists: "10", nonPKgoals: "12", PKgoals: "0", expected: "13.3", nonPKexpected: "13.3", yellows: "6", reds: "0"},
{name: "Mason Mount", nation: "eng ENG", position: "MF", squad: "Chelsea", age: "22", played: "32", goals: "11", assists: "10", nonPKgoals: "10", PKgoals: "1", expected: "8.8", nonPKexpected: "8.0", yellows: "4", reds: "0"},
{name: "Harvey Barnes", nation: "eng ENG", position: "MFFW", squad: "Leicester City", age: "23", played: "32", goals: "6", assists: "10", nonPKgoals: "6", PKgoals: "0", expected: "6.5", nonPKexpected: "6.5", yellows: "2", reds: "0"},
{name: "Andrew Robertson", nation: "sct SCO", position: "DF", squad: "Liverpool", age: "27", played: "29", goals: "3", assists: "10", nonPKgoals: "3", PKgoals: "0", expected: "1.6", nonPKexpected: "1.6", yellows: "5", reds: "1"},
{name: "Harry Kane", nation: "eng ENG", position: "FW", squad: "Tottenham", age: "28", played: "37", goals: "17", assists: "9", nonPKgoals: "13", PKgoals: "4", expected: "19.6", nonPKexpected: "16.4", yellows: "5", reds: "0"},
{name: "Reece James", nation: "eng ENG", position: "DF", squad: "Chelsea", age: "21", played: "26", goals: "5", assists: "9", nonPKgoals: "5", PKgoals: "0", expected: "3.5", nonPKexpected: "3.5", yellows: "4", reds: "1"},
{name: "Paul Pogba", nation: "fr FRA", position: "MF", squad: "Manchester Utd", age: "28", played: "20", goals: "1", assists: "9", nonPKgoals: "1", PKgoals: "0", expected: "2.8", nonPKexpected: "2.8", yellows: "7", reds: "1"},
{name: "Kevin De Bruyne", nation: "be BEL", position: "MF", squad: "Manchester City", age: "30", played: "30", goals: "15", assists: "8", nonPKgoals: "15", PKgoals: "0", expected: "6.2", nonPKexpected: "6.2", yellows: "2", reds: "0"},
{name: "James Maddison", nation: "eng ENG", position: "MFFW", squad: "Leicester City", age: "24", played: "35", goals: "12", assists: "8", nonPKgoals: "12", PKgoals: "0", expected: "8.8", nonPKexpected: "8.8", yellows: "3", reds: "0"},
{name: "Michail Antonio", nation: "jm JAM", position: "FW", squad: "West Ham", age: "31", played: "36", goals: "10", assists: "8", nonPKgoals: "10", PKgoals: "0", expected: "12.8", nonPKexpected: "12.3", yellows: "8", reds: "1"},
{name: "Gabriel Jesus", nation: "br BRA", position: "FW", squad: "Manchester City", age: "24", played: "28", goals: "8", assists: "8", nonPKgoals: "7", PKgoals: "1", expected: "10.8", nonPKexpected: "10.0", yellows: "1", reds: "0"},
{name: "Dejan Kulusevski", nation: "se SWE", position: "MFFW", squad: "Tottenham", age: "21", played: "18", goals: "5", assists: "8", nonPKgoals: "5", PKgoals: "0", expected: "3.6", nonPKexpected: "3.6", yellows: "3", reds: "0"},
{name: "Son Heung-min", nation: "kr KOR", position: "MFFW", squad: "Tottenham", age: "29", played: "35", goals: "23", assists: "7", nonPKgoals: "23", PKgoals: "0", expected: "15.6", nonPKexpected: "15.6", yellows: "2", reds: "0"},
{name: "Bukayo Saka", nation: "eng ENG", position: "MF", squad: "Arsenal", age: "19", played: "38", goals: "11", assists: "7", nonPKgoals: "9", PKgoals: "2", expected: "11.2", nonPKexpected: "10.2", yellows: "6", reds: "0"},
{name: "Bryan Mbeumo", nation: "cm CMR", position: "FW", squad: "Brentford", age: "21", played: "35", goals: "4", assists: "7", nonPKgoals: "3", PKgoals: "1", expected: "9.6", nonPKexpected: "8.8", yellows: "4", reds: "0"},
{name: "Alexandre Lacazette", nation: "fr FRA", position: "FW", squad: "Arsenal", age: "30", played: "30", goals: "4", assists: "7", nonPKgoals: "2", PKgoals: "2", expected: "9.2", nonPKexpected: "6.8", yellows: "0", reds: "0"},
{name: "João Cancelo", nation: "pt POR", position: "DF", squad: "Manchester City", age: "27", played: "36", goals: "1", assists: "7", nonPKgoals: "1", PKgoals: "0", expected: "5.1", nonPKexpected: "5.1", yellows: "7", reds: "0"},
{name: "Bruno Fernandes", nation: "pt POR", position: "MF", squad: "Manchester Utd", age: "26", played: "36", goals: "10", assists: "6", nonPKgoals: "10", PKgoals: "0", expected: "11.6", nonPKexpected: "10.0", yellows: "10", reds: "0"},
]

var top_pk =[
{name: "Jorginho", nation: "it ITA", position: "MF", squad: "Chelsea", age: "29", played: "29", goals: "6", assists: "2", nonPKgoals: "0", PKgoals: "6", expected: "6.0", nonPKexpected: "0.5", yellows: "5", reds: "0"},
{name: "Mohamed Salah", nation: "eg EGY", position: "FW", squad: "Liverpool", age: "29", played: "35", goals: "23", assists: "13", nonPKgoals: "18", PKgoals: "5", expected: "23.7", nonPKexpected: "18.8", yellows: "1", reds: "0"},
{name: "Ivan Toney", nation: "eng ENG", position: "FW", squad: "Brentford", age: "25", played: "33", goals: "12", assists: "5", nonPKgoals: "7", PKgoals: "5", expected: "12.4", nonPKexpected: "8.5", yellows: "8", reds: "0"},
{name: "Wilfried Zaha", nation: "ci CIV", position: "FWMF", squad: "Crystal Palace", age: "28", played: "33", goals: "14", assists: "1", nonPKgoals: "9", PKgoals: "5", expected: "11.0", nonPKexpected: "5.4", yellows: "6", reds: "1"},
{name: "Harry Kane", nation: "eng ENG", position: "FW", squad: "Tottenham", age: "28", played: "37", goals: "17", assists: "9", nonPKgoals: "13", PKgoals: "4", expected: "19.6", nonPKexpected: "16.4", yellows: "5", reds: "0"},
{name: "Riyad Mahrez", nation: "dz ALG", position: "FWMF", squad: "Manchester City", age: "30", played: "28", goals: "11", assists: "5", nonPKgoals: "7", PKgoals: "4", expected: "11.1", nonPKexpected: "7.1", yellows: "0", reds: "0"},
{name: "James Ward-Prowse", nation: "eng ENG", position: "MF", squad: "Southampton", age: "26", played: "36", goals: "10", assists: "5", nonPKgoals: "6", PKgoals: "4", expected: "5.9", nonPKexpected: "2.7", yellows: "3", reds: "1"},
{name: "Raphinha", nation: "br BRA", position: "MFFW", squad: "Leeds United", age: "24", played: "35", goals: "11", assists: "3", nonPKgoals: "7", PKgoals: "4", expected: "11.3", nonPKexpected: "8.1", yellows: "7", reds: "0"},
{name: "Richarlison", nation: "br BRA", position: "FWMF", squad: "Everton", age: "24", played: "30", goals: "10", assists: "5", nonPKgoals: "7", PKgoals: "3", expected: "10.0", nonPKexpected: "7.7", yellows: "9", reds: "0"},
{name: "Cristiano Ronaldo", nation: "pt POR", position: "FW", squad: "Manchester Utd", age: "36", played: "30", goals: "18", assists: "3", nonPKgoals: "15", PKgoals: "3", expected: "17.9", nonPKexpected: "15.6", yellows: "8", reds: "0"},
{name: "Teemu Pukki", nation: "fi FIN", position: "FW", squad: "Norwich City", age: "31", played: "37", goals: "11", assists: "3", nonPKgoals: "8", PKgoals: "3", expected: "12.7", nonPKexpected: "10.3", yellows: "4", reds: "0"},
{name: "Manuel Lanzini", nation: "ar ARG", position: "MF", squad: "West Ham", age: "28", played: "30", goals: "5", assists: "3", nonPKgoals: "2", PKgoals: "3", expected: "3.8", nonPKexpected: "1.4", yellows: "2", reds: "0"},
{name: "Bukayo Saka", nation: "eng ENG", position: "MF", squad: "Arsenal", age: "19", played: "38", goals: "11", assists: "7", nonPKgoals: "9", PKgoals: "2", expected: "11.2", nonPKexpected: "10.2", yellows: "6", reds: "0"},
{name: "Alexandre Lacazette", nation: "fr FRA", position: "FW", squad: "Arsenal", age: "30", played: "30", goals: "4", assists: "7", nonPKgoals: "2", PKgoals: "2", expected: "9.2", nonPKexpected: "6.8", yellows: "0", reds: "0"},
{name: "Raheem Sterling", nation: "eng ENG", position: "FWMF", squad: "Manchester City", age: "26", played: "30", goals: "13", assists: "5", nonPKgoals: "11", PKgoals: "2", expected: "14.4", nonPKexpected: "11.9", yellows: "1", reds: "0"},
{name: "Youri Tielemans", nation: "be BEL", position: "MF", squad: "Leicester City", age: "24", played: "32", goals: "6", assists: "4", nonPKgoals: "4", PKgoals: "2", expected: "5.2", nonPKexpected: "3.6", yellows: "3", reds: "0"},
{name: "Alexis Mac Allister", nation: "ar ARG", position: "MF", squad: "Brighton", age: "22", played: "33", goals: "5", assists: "2", nonPKgoals: "3", PKgoals: "2", expected: "6.9", nonPKexpected: "4.5", yellows: "4", reds: "0"},
{name: "Dominic Calvert-Lewin", nation: "eng ENG", position: "FW", squad: "Everton", age: "24", played: "17", goals: "5", assists: "2", nonPKgoals: "3", PKgoals: "2", expected: "6.5", nonPKexpected: "4.2", yellows: "2", reds: "0"},
{name: "Fabinho", nation: "br BRA", position: "MF", squad: "Liverpool", age: "27", played: "29", goals: "5", assists: "1", nonPKgoals: "3", PKgoals: "2", expected: "4.0", nonPKexpected: "2.5", yellows: "7", reds: "0"},
{name: "Callum Wilson", nation: "eng ENG", position: "FW", squad: "Newcastle Utd", age: "29", played: "18", goals: "8", assists: "0", nonPKgoals: "6", PKgoals: "2", expected: "6.3", nonPKexpected: "4.7", yellows: "4", reds: "0"},
]


function change(value){
    update(value)
}

function update(value){
	//set domain for the x axis
	xChart.domain(team.map(d => d.squad))
    .padding(0.2);
	//set domain for y axis
	yChart//.domain([0, d3.max(team, d => d[value])]).nice()
    .domain(d3.extent(team, d => d[value])).nice();
	
    //var xAxis = d3.axisBottom(xChart);
    //var yAxis = d3.axisLeft(yChart);

	//get the width of each bar 
	var barWidth = width / 20;
	
	//select all bars on the graph, take them out, and exit the previous data set. 
	//then you can add/enter the new data set
	var bars = chart.selectAll(".bar")
					.remove()
					.exit()
					.data(team)		
	//now actually give each rectangle the corresponding data
	bars.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d, i){ return i * barWidth + 1 })
		.attr("y", function(d){ return yChart( d[value]); })
		.attr("height", function(d){ return height - yChart(d[value]); })
		.attr("width", barWidth - 1)
		.attr("fill", d3.color("purple"));
	//left axis
	chart.select('.y')
		  .call(yAxis)
	//bottom axis
	chart.select('.xAxis')
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});
			
}//end update

//set up chart
var margin = {top: 20, right: 20, bottom: 95, left: 50};
var width = 800;
var height = 500;

var chart = d3.select(".chart")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xChart = d3.scaleBand().domain(team.map(d => d.squad))

				.range([0, width]);
				
var yChart = d3.scaleLinear().domain( [0, 100] )
				.range([height, 0]);

var xAxis = d3.axisBottom(xChart);
var yAxis = d3.axisLeft(yChart);

//set up axes
//left axis
	chart.append("g")
		  .attr("class", "y axis")
          
		  .call(yAxis)
		  
	//bottom axis
	chart.append("g")
		.attr("class", "xAxis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});

//add labels
chart
	.append("text")
	.attr("transform", "translate(-35," +  (height+margin.bottom)/2 + ") rotate(-90)")
	.text("stats");
		
chart
	.append("text")
	.attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom - 5) + ")")
	.text("Team");

//use points to begin with
update("points");
//********************************************************************************************** */

//bar11=bar1();
//document.querySelector('.scatp').append(bar11)
pcolor = d3.scaleOrdinal(["GK", "DF", "DFMF", "MF", "MFDF", "MFFW", "FW", "FWMF", "FWDF", "DFFW"], ["#660099", "#005194", "#009995", "#009931", "#016521", "#b85200", "#ff0f32", "#840a01", "#0f0fff", "#ffff00"]);
function changes(value){
    if (value==="goals")
    updatep(top_goals);
    else if (value === "assists")
    updatep(top_assists);
    else if (value==="pk")
    updatep(top_pk);
    else if (value==="RESET")
    cancelp()
}
function cancelp()
{
    svg1.selectAll(".circle").remove();
}
function updatep(cat1)
    {
        var players = svg1
        .selectAll(".circle")
        .remove()
        .exit()
        .data(cat1)
        

        players.enter()
        .append("circle")
        .attr('class', 'Player')
        .attr('fill', d =>  pcolor(d.position))
        .attr("cx", d => x1(d.assists))
        .attr("cy", d => y1(d.goals))
        .attr("r", 5)
        .append('title')
        .text(d=>d.name);
    }

var svg1 = d3.select(".svg1")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x1 = d3.scaleLinear()
  .domain([0,15]).nice()
  .range([margin.left, width - margin.right]);

var y1 = d3.scaleLinear()
  .domain([0, 25]).nice()
  .range([height - margin.bottom, margin.top]);  

var xAxis1 = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x1));
  
yAxis1 = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y1));

  grid = g => g
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.1)
  .call(g => g.append("g")
    .selectAll("line")
    .data(x1.ticks())
    .join("line")
      .attr("x1", d => 0.5 + x1(d))
      .attr("x2", d => 0.5 + x1(d))
      .attr("y1", margin.top)
      .attr("y2", height - margin.bottom))
  .call(g => g.append("g")
    .selectAll("line")
    .data(y1.ticks())
    .join("line")
      .attr("y1", d => 0.5 + y1(d))
      .attr("y2", d => 0.5 + y1(d))
      .attr("x1", margin.left)
      .attr("x2", width - margin.right));

      svg1.append("g")
      .call(xAxis1)
    
      svg1.append("g")
          .call(yAxis1);
      
       svg1.append("g")
          .call(grid);
      
      
      svg1.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width/2)
        .attr("y", height -50 )
        .text("Assists");
      
      svg1.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", -height/2)
        .attr("y", 2)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Goals");
    

    updatep("goals");



      //*****************8888 */


//***************************************DRAFT***************************************************888 */


/*
//PIE CHART 
function changed(value){
    if(value === 'goals'){
		update2(top_goals);
	}else if(value === 'assists'){
		update2(top_pk);
	}else{
		update2(top_pk);
}
}
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg2 = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// create 2 data_set

// set the color scale
var color = d3.scaleOrdinal()
  .domain(["DF", "GK", "FW", "MF", "MFFW", "DFMF", "FWMF", "MFDF", "DFFW", "FWDF"])
  .range(d3.schemeDark2);

// A function that create / update the plot for a given variable:
function update2(data_top) {
    df=0;
    gk=0;
    fw=0;
    mf=0;
    mffw=0;
    dfmf=4;
    fwmf=0;
    mfdf=5;
    dffw=0;
    fwdf=5;
    data = {"DF":0, "GK":0, "FW":0, "MF":0, "MFFW":0, "DFMF":0, "FWMF":0, "MFDF":0, "DFFW":0, "FWDF":0};
    for(let pl in data_top)
    {
        if (pl.position === "DF")
        df+=1;
        else if (pl.position === "GK")
        gk+=1;
        else if (pl.position === "FW")
        gk+=1;
        else if (pl.position === "GK")
        gk+=1;
        else if (pl.position === "MF")
        mf+=1;
        else if (pl.position === "MFFW")
        mffw+=1;
        else if (pl.position === "DFMF")
        dfmf+=1;
        else if (pl.position === "FWMF")
        fwmf+=1;
        else if (pl.position === "MFDF")
        mfdf+=1;
        else if (pl.position === "DFFW")
        dffw+=1;
        else if (pl.position === "FWDF")
        fwdf+=1;

    }
    data = {"DF":df, "GK":gk, "FW":fw, "MF":mf, "MFFW":mffw, "DFMF":dfmf, "FWMF":fwmf, "MFDF":mfdf, "DFFW":dffw, "FWDF":fwdf};
  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.count; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var data_ready = pie(Object.entries(data))

  // map to data
  var u = svg2.selectAll("path")
    .data(data_ready)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  // remove the group that is not present anymore
  u
    .exit()
    .remove()

}

// Initialize the plot with the first dataset
update2(top_goals)
*/
//*******************************************************************************************************************888 */

/*var svg = d3.select("#graph")
	.append("svg")
	.append("g")

svg.append("g")
	.attr("class", "slices");
svg.append("g")
	.attr("class", "labels");
svg.append("g")
	.attr("class", "lines");

var width = 960,
    height = 450,
	radius = Math.min(width,height) / 2;

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) {
		return d.value;
	});

var arc = d3.svg.arc()
	.outerRadius(radius * 1.0)
	.innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
	.innerRadius(radius * 0.5)
	.outerRadius(radius * 1);

svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var key = function(d){ return d.data.label; };

var color = d3.scale.category20()
	.domain(["Assigned", "Complete", "Overdue", "Terminated", "Awaiting Review", "Attached"])
	.range(["#1abc9c", "#27ae60", "#e74c3c", "#f1c40f", "#34495e", "#3498db", "#8e44ad"]);

function randomData (){
	var labels = color.domain();
	return labels.map(function(label){
		return { label: label, value: Math.random() }
	}).filter(function() {
		return Math.random() > .5;
	}).sort(function(a,b) {
		return d3.ascending(a.label, b.label);
	});
}

change(randomData());

d3.select(".randomize")
	.on("click", function(){
		change(randomData());
	});

function mergeWithFirstEqualZero(first, second){
	var secondSet = d3.set(); second.forEach(function(d) { secondSet.add(d.label); });

	var onlyFirst = first
		.filter(function(d){ return !secondSet.has(d.label) })
		.map(function(d) { return {label: d.label, value: 0}; });
	return d3.merge([ second, onlyFirst ])
		.sort(function(a,b) {
			return d3.ascending(a.label, b.label);
		});
}



function change(data) {
	var duration = +document.getElementById("duration").value;
	var data0 = svg.select(".slices").selectAll("path.slice")
		.data().map(function(d) { return d.data });
	if (data0.length == 0) data0 = data;
	var was = mergeWithFirstEqualZero(data, data0);
	var is = mergeWithFirstEqualZero(data0, data);

	/* ------- SLICE ARCS -------*/
/*
	var slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(was), key);

	slice.enter()
		.insert("path")
		.attr("class", "slice")
		.style("fill", function(d) { return color(d.data.label); })
		.each(function(d) {
			this._current = d;
		});

	slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(is), key);

	slice		
		.transition().duration(duration)
		.attrTween("d", function(d) {
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				_this._current = interpolate(t);
				return arc(_this._current);
			};
		});

	slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(data), key);

	slice
		.exit().transition().delay(duration).duration(0)
		.remove();

	/* ------- TEXT LABELS -------*/
/*
	var text = svg.select(".labels").selectAll("text")
		.data(pie(was), key);

	text.enter()
		.append("text")
		.attr("dy", ".35em")
		.style("opacity", 0)
		.text(function(d) {
			return d.data.label;
		})
		.each(function(d) {
			this._current = d;
		});
	
	function midAngle(d){
		return d.startAngle + (d.endAngle - d.startAngle)/2;
	}

	text = svg.select(".labels").selectAll("text")
		.data(pie(is), key);

	text.transition().duration(duration)
		.style("opacity", function(d) {
			return d.data.value == 0 ? 0 : 1;
		})
		.attrTween("transform", function(d) {
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				var d2 = interpolate(t);
				_this._current = d2;
				var pos = outerArc.centroid(d2);
				pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
				return "translate("+ pos +")";
			};
		})
		.styleTween("text-anchor", function(d){
			var interpolate = d3.interpolate(this._current, d);
			return function(t) {
				var d2 = interpolate(t);
				return midAngle(d2) < Math.PI ? "start":"end";
			};
		});
	
	text = svg.select(".labels").selectAll("text")
		.data(pie(data), key);

	text
		.exit().transition().delay(duration)
		.remove();

	/* ------- SLICE TO TEXT POLYLINES -------*/
/*
	var polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(was), key);
	
	polyline.enter()
		.append("polyline")
		.style("opacity", 0)
		.each(function(d) {
			this._current = d;
		});

	polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(is), key);
	
	polyline.transition().duration(duration)
		.style("opacity", function(d) {
			return d.data.value == 0 ? 0 : 1;
		})
		.attrTween("points", function(d){
			this._current = this._current;
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				var d2 = interpolate(t);
				_this._current = d2;
				var pos = outerArc.centroid(d2);
				pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
				return [arc.centroid(d2), outerArc.centroid(d2), pos];
			};			
		});
	
	polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(data), key);
	
	polyline
		.exit().transition().delay(duration)
		.remove();
};
*/