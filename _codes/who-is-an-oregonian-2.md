---
title: Who Is An Oregonian            
subtitle: HTML CSS JavaScript PHP MySQL
layout: portfolio

category: Code

bg_color: '#4527A0;'



images:
- /images/history_hub/input.gif
- /images/history_hub/explore.gif

---

Building a User Friendly Touchscreen Exhibit
==================

While employed by [Sticky Co](http://sticky.tv/), I had the opportunity to assist in building an interactive part of [History Hub](http://www.ohs.org/museum/exhibits/history-hub.cfm), an Oregon Historical Society permanent exhibit.

<div class="center-img">
<img src="../../images/history_hub/input.gif" alt="" />
</div>

My focus on this project was data collection. The interactive exhibit needed to record a user's responses to where they currently live, where they were born, and origins of their ancestors. I was approached to provide a solution that would easiest for a user of all ages with the requirement that the app function with no keyboard. After researching various methods of input, our team decided on using Google Maps JavaScript API. As a user would add markers to the map, each marker would reverse geocode its coordinates. This information was displayed to a user for confirmation and later saved on their approval into a MySQL database.

Users could then explore this information with an interactive slide show that would generate statistics from the dataset. For performance and flexibility, the team I worked with utilized D3.js to generate different map projections and customize them to the look and feel of our designer's mockups. We wrote SQL queries that would that would identify trends in our data set. Simple queries were easiest to think of, but we later experimented with more complex ones that would calculate the distance between two points on a sphere to see who travelled the farthest to Oregon Historical Society that week.
