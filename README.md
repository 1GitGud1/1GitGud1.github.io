# 1GitGud1.github.io

_layouts
a library that containts the templates that jerkyl can use to auto generate web pages


default.html
an initial layout created that contains most of the html code and defines the general format of the page. is is used by other layouts as a foundation that they build on.

posts.html
a layout used for the posts contained in the blog. it uses the default layout as a base.

about.html
a layout that's used to generate the about page of the website. default layout is used as a base.


_posts
a labriry that contains all of the blog posts that will show up on the blog page. the files contain title, date, layout used (posts) and content of a post.


about
a library that includes the index file which contains the code for generation of the about page. the page uses the about.html layout so most of it is auto generated using jerkyl


blog
a library that includes the index file which contains the code for generation of the blog page from which you can view all of the blog posts available from the _posts library.


css
a library that contains main.css stylesheet that's used in presentation of all of the webpages
