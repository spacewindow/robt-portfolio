#Project structure

##projects

An array of objects

##projects keys

* name - string
* client - string
* description - string
* challenge - array (objects)
* solution - array (objects)
* process - array (objects)

##challenge, solution, process

* An array of objects. Each object is a story point. Each story point can contain a number of paragraphs and a single image
* Each story point contains:
    - class STRING (to set image relation to text)
    - text ARRAY of STRINGS (an of paragraphs)
    - image STRING (a single image url)
    - caption STRING(caption for the image)
