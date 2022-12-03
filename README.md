# CS 424 Data visualization Project 3 - Premier League Visualization.

------------


Presented by Mohammed Tanveer.
<a href ='txnveer.github.io'> Link to my website for the project <a>

------------


## Introduction
The dataset was collected from Opta consists data of the 20 teams (rows) with respect to team stats in the league, and 546 players (rows) that played during the Premier League season of the year 2021/2022. The data was split into two dataframes, the team dataframe and players dataframe. The team dataframe consisted of 15 attributes (columns) and the players dataframe consisted of about 22 attributes (columns). Furthermore, for this project I used only the top 20 players, in each category of the following attributes:

- Goals
- Assists
- Penalties

Likewise a row of the team data looked like this after dropping of some attributes:

*name: "Son Heung-min", nation: "kr KOR", position: "MFFW", squad: "Tottenham", age: "29", played: "35", goals: "23", assists: "7", nonPKgoals: "23", PKgoals: "0", expected: "15.6", nonPKexpected: "15.6", yellows: "2", reds: "0"*

As I knew from the previous report, There were no null values, nor missing values in this dataset.

**Domain and Questions**
The domain for asking questions for this dataset was on **player performance** and **team performance**. The questions were as follows:
### Visualization 1
**Player Performance**

**Q1**. What was the distribution across the top 20 players in goal contributions (Goals + Assists), and also see if there's overlap in players (For Example, Salah was the top goal scorer and one of the top players in assists so he will cause an overlap).

Interactive ScatterPlot with respect to top 20 players with most goals.
[![fig1](https://github.com/txnveer/datavis-images/blob/main/scat.png "fig1")](https://github.com/txnveer/datavis-images/blob/main/scat.png "fig1")

Interactive ScatterPlot with respect to top 20 players with most assists.
[![fig 2](https://github.com/txnveer/datavis-images/blob/main/scat2.PNG "fig 2")](https://github.com/txnveer/datavis-images/blob/main/scat2.PNG "fig 2")

Interactive ScatterPlot with respect to top 20 players with most penalty goals.

[![fig3](https://github.com/txnveer/datavis-images/blob/main/scat3.PNG "fig3")](https://github.com/txnveer/datavis-images/blob/main/scat3.PNG "fig3")
Interactive ScatterPlot with respect to top 20 players with most goals then assists.

[![fig 4](https://github.com/txnveer/datavis-images/blob/main/scat4.PNG "fig 4")](https://github.com/txnveer/datavis-images/blob/main/scat4.PNG "fig 4")
Interactive ScatterPlot with respect to top 20 players with most goals, assists and then penalty goals.
[![fig 5](https://github.com/txnveer/datavis-images/blob/main/scat4%2B5.PNG "fig 5")](https://github.com/txnveer/datavis-images/blob/main/scat4%2B5.PNG "fig 5")

To get the input for which attribute we wish to do visualization, I used a buttons so that the user can click and look which attribute he wants to do the visualization on, I also added a RESET button if the user wanted to look at different transitions or see how the visualization develops on each different click. 

<div style="text-align: center;">[![r](https://github.com/txnveer/datavis-images/blob/main/reset.PNG "r")](https://github.com/txnveer/datavis-images/blob/main/reset.PNG "r")</div>

For Example, I can look at the top 20 players with the most **Goals → Assists →Penalty Goals**, or **Penalty Goals  →Assists →Goals**, or **Assists →Penalty**. And reset to an empty plot when clicked on **RESET**

### Visualization 2
**Team Performance**

**Q2**. Which teams performed the best during the season? And see if teams that perform better have better ticket sales?

Bar Chart Visualization Used to Analyze the Team Stats

Bar Chart based on amount of points
[![b1](https://github.com/txnveer/datavis-images/blob/main/bar1.PNG "b1")](https://github.com/txnveer/datavis-images/blob/main/bar1.PNG "b1")

Bar Chart based on amount of goals scored
[![b2](https://github.com/txnveer/datavis-images/blob/main/bar2.PNG "b2")](https://github.com/txnveer/datavis-images/blob/main/bar2.PNG "b2")

Bar Chart based on amount of goals conceded
[![b3](https://github.com/txnveer/datavis-images/blob/main/bar3.PNG "b3")](https://github.com/txnveer/datavis-images/blob/main/bar3.PNG "b3")

Bar Chart based on average attendance/ticket sales
[![b4](https://github.com/txnveer/datavis-images/blob/main/bar4.PNG "b4")](https://github.com/txnveer/datavis-images/blob/main/bar4.PNG "b4")

To get the input for which attribute we wish to do visualization, we used a radio input, which when selected, we get a bar chart based on that visualization. Here I also kept them in the same order where they finished in the table, so we can quickly compare between different attributes selected.

The information provided by this visualization was that the teams that had a better performances were generally the one that finished higher on the league, but there were some anomalies such as Manchester United were the only team to have a non-positive goal difference and Crystal Palace were the only team in the bottom 12 to have scored more goals than conceded.

Average ticket-sales/attendance was interesting to see, as Manchester United still had the highest amount despite not playing ‘well’. Manchester City and Liverpool were 5th and 6th despite performing extremely well, this is more likely to do with the stadium capacity of the teams. But it’s still interesting to see that fans will buy tickets even if their team is not playing up to their standard. This answers our questions in Q2.

### Visualization 3
**Q3**.For this, I wanted to compare between the players of the top 2 teams of the 2021/22 season, namely Manchester City and Liverpool. 
Goals
[![v1](https://github.com/txnveer/datavis-images/blob/main/m1.PNG "v1")](https://github.com/txnveer/datavis-images/blob/main/m1.PNG "v1")

Expected
[![v2](https://github.com/txnveer/datavis-images/blob/main/m2.png "v2")](https://github.com/txnveer/datavis-images/blob/main/m2.png "v2")

Yellow Cards
[![v3](https://github.com/txnveer/datavis-images/blob/main/m3.PNG "v3")](https://github.com/txnveer/datavis-images/blob/main/m3.PNG "v3")

I have implemented this multiple visualization based on 7 attributes, namely Goals, Assists, Penalty Goals, Non-Penalty Goals, Expected Goals, Yellow Card and Red Cards.

Here the interesting analysis I was able to make out was, that Manchester City had more of an even distributions in goal contributions (anything related to goals, assists) than Liverpool, as Liverpool mainly had 3 standout players in the form of Mohamed Salah, Diogo Jota and Sadio Mane as they were levels above any one else in their team. But for Manchester City, the only gap between their standout players were not that big as compared to Liverpool.

It's also interesting to see that Kevin De Bruyne of Manchester City, had considerably more Goals Scored than Expected Goals scored, this can be seen when we select from the button inputs, *Goals → Expected Goals*, we are able to see a decrease of more than 50%, which indicates that Kevin De Bruyne is super clinical in finishing his chances.

We can also see that Manchester city on average had higher yellow cards than Liverpool, which could mean that the players of Manchester City are either more likely to commit tactical fouls that get them booked, or more 'less disciplined' than Liverpool's players. A case can be made of the former as Manchester City have the lowest goals conceded from the bar chart we saw in Q2.

### Spatial View
Since the dataset did not contain any geospatial elements so I had to manually add them in the dataset for the 20 teams that played during the 2021/22 season.

With this view we wanted to visualize where are the stadiums of the teams located, and can we see any trend in their locations?

[![m1](https://github.com/txnveer/datavis-images/blob/main/s1.PNG "m1")](https://github.com/txnveer/datavis-images/blob/main/s1.PNG "m1")

As seen above, this is the map zoom level and starting point that we get. The starting point was set to co-ordinated [51.505, -0.09], which are almost the middle of the country of England.

[![m2](https://github.com/txnveer/datavis-images/blob/main/s2.PNG "m2")](https://github.com/txnveer/datavis-images/blob/main/s2.PNG "m2")

This map shows us the locations (in the form of markers) of the stadiums across the United Kingdom where the Premier League is taking place, which when clicked give us the stadium name and the team name of the football club, and shows us how the teams are more dense in the southern part of the country and especially in the tourist-y/well known areas like London.

### Conclusion and Final Thoughts
From this project, I was able to create a webpage (My first ever, if you don't consider the 'Hello World' website as one) that contained visualizations that were able to answer questions on different attributes of the player and team performance.

This project was challenging for me, especially since I have never made a website before this. There is still a lot to learn for me in this area, as I wasn't able to link views in this from scratch but was able to in observable. I learned that there's different ways data can be represented from the same data, and how we need to overcome the compatibility issues of different versions of libraries and languages. I am grateful that I had the opportunity to learn and expand my skills. I am for sure certain that I will use the concepts I learned from this course in future as my preferred career path is to do with data.
