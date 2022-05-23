# UFOs

## Overview
// purpose of the analysis
<p>By enhancing Dana's webpage and dynamic tables with additional filters, we sharpened the search logic allowing users to look for location by city, state and country as well as shape in addition to the initial filter allowing users to search by date.</p>

## Results
// Explaing to Dana how users will use her website - include pictures
<p>Building upon the development that provided the date filter functionality, we have added city, state, country and shape filters to accompany the date filter.  The site will automatically respond to user inputs but filtering only matches to the inputs provided by the user.  Similar to the base development, no filter criteria will provide a total outpul of all items from the base data.</p>

![image](https://user-images.githubusercontent.com/100323377/169724837-54d09dce-642d-4c36-baac-eda2261f7d81.png)

<p>The user will submit a parameter into one of the five filter criteria, and dynamically the table outputs will adjust to the user input.</p>

![image](https://user-images.githubusercontent.com/100323377/169724962-59943a55-b7be-4346-a5d0-ad988376fed2.png)

## Summary 
<p>Dan's new website has added multiple new filter criteria, but is somewhat constrained by boolean selection requirements.  If a sighting occured a day before or after the queried date, that record would not present in the case that there wasn't an exact match.  Similarly, if the next town over reported a sighting, but was not queried specifically, that results would not show.  There is concern that the precision of the filters as constructed may eliminate close but not exact matches that in this use case would likely be beneficial.</p>
<p>Potential enhancements include expanding the date search to allow a ranged input for a set period of time.  Current functionality requires the user to identify a single date, when users may wish to pull all sightings in a month, year, etc.</p>
<p>The location functionality could be enhanced by mapping to zip codes or integrating a mapping feature to allow users to search within a distance of a certain location.  Functionality could include a zip code and a distance from that location.  Similar functionality could also pull latitude and longitude information, however, that enhancement would require integrating that into the data.js file.</p>


  
