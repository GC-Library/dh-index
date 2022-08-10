Debates in Digital Humanities Project Index
===================

## Information and Dataset
Digital humanities (DH) projects are difficult to find if you don’t know where to look. There are few resources to help DH newcomers, students, and researchers browse through exemplary digital scholarship. Most scholarly digital projects are not well represented in library discovery systems despite being openly available online. 

Published since 2012 and available on Manifold Project editions, the [*Debates in the Digital Humanities*](https://dhdebates.gc.cuny.edu/) book series (edited by Matthew K. Gold and Lauren F. Klein) offers rich possibilities to consider how DH scholarship has changed as the field evolves. Using the *Debates in DH* book series as a starting point, librarians at the Graduate Center, City University of New York (CUNY), along with student researchers are creating a DH project index to serve as a dataset, discovery tool and digital resource. The project is maintained on the Mina Rees Library’s GitHub page and will include: an open-source dataset of digital humanities projects and citation index information, data dictionary, and a [project website](https://gc-library.github.io/dh-index/) with in-process blogging and data visualizations. 

 
### The fields are as follows:
Field Name | Type | Description | Example
-----------------------|----------------|--------------------------|------------
Chapter |String |The full title of the chapter as indicated in the *Debates in the Digital Humanities* volume. |Chapter 6: Humanistic Theory and Digital Scholarship
Author  |String |The individual’s full proper name as indicated in the *Debates in the Digital Humanities* volume.  |Matthew K. Gold – do you we want to separate into multiple authors fields ie “Stephen Ramsay and Geoffrey Rockwell”
Project Title   |String |The full project name taken from the project website or citing chapter.    |Walt Whitman Archive
Creators 1<br>Creators 2<br>Creators 3<br>Creators 4<br>Creators 5  |String |The individual, corporation, or group name. Intended to be the original founders of the project but may include other team members. |Matthew K. Gold
Website URL |String |Web address for the project.   |https://lookingforwhitman.org/ 
Institution 1<br>Institution 2<br>Institution 3<br>Institution 4    |String |Research center or institution name that is primarily responsible for the project. May include partner institutions.    |Roy Rosenzweig Center for History and New Media
Discipline 1<br>Discipline 2<br>Discipline 3<br>Discipline 4    |String |Broad academic subject areas. No specific taxonomy was used; the field should be re-worked.    |Literature
Citation leads to project   |Boolean    |If the project website url or link is included in the chapter or footnote, then Yes.   |Yes/No
Project still exists    |Boolean    |If a project website is accessible, then Yes.  |Yes/No
Project active  |Boolean    |If a project has new content; been updated within the past year; currently being worked on by a team; can be downloaded (digital tool or dataset), then Yes. If a project is inaccessible or only available as an archive, then No.  |Yes/No 
Open source |Boolean    |If a software tool made their source code or development versions available/downloadable, then Yes. If a project released data in the form of spreadsheets or on github, then Yes. If Open Source was not stated or unclear, the field was left blank. |Yes/No – but fields were also left blank for uncertainty.
Barebones project description   |String |Short description taken from the project website or summarized from information in the citing chapter. |A collaborative online space in which students research Whitman’s connections to their individual locations and share that research with one another in a dynamic, social, web-based learning environment.
NEH funded  |Boolean    |If a project appears in the [National Endowment of Humanities Funded Projects Query](https://securegrants.neh.gov/publicquery/) or the project website states they have been funded on their website, then Yes.
Grant supported |String |List of institutions or organizations which the project website states were a source of funding. If no funding sources were found, the field was left blank.   |NEH, Institute of Museum and Library Services.
Negative Citation   |Boolean    |If the project was criticized by the chapter author, then Yes. If the citation was unclear, the field was left blank.   |Yes/No – but fields were also left blank for uncertainty.
Context |String |The context under which the project was mentioned; provides information about why projects are cited.  |Example of a recent CUNY digital humanities project that combines digital research and digital pedagogy.
Notes   |String |Text used to indicate miscellaneous information.   |Citation URL is a broken link. More info: https://www.aaas.org/programs/scientific-responsibility-human-rights-law/ushmm-%E2%80%94-world-witness 
Volume Year – we should add this to combine 2012 and 2016 into one spreadsheet  |Number |*Debates in DH* Volume Year   |2012



### Future Phases
In subsequent phases of the project, other volumes of *Debates in DH* will be added and the dataset will be refined and transformed into MARC records, which will be made freely available for download/import/sharing. The library also intends to create OCLC records to make the project catalog records available in Worldcat and CUNY’s OneSearch discovery platform. Integrating digital projects with more conventional forms of scholarship like books and journal articles may increase their use by those less familiar with DH.


### Research in progress
This data is provided “as is” for research purposes and you use this data at your own risk. The Mina Rees Library offers the datasets "as-is" and makes no representations or warranties of any kind. The project team may update the datasets with new and revised information. You are advised to regularly update your copy of the datasets to ensure you are using the best available information.
 
### Pull requests
...

### Give attribution to 
...

### Do not misrepresent the dataset
...



