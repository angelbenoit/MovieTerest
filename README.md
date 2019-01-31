# MovieTerest
The pinterest of movies and tv shows
<p>
  In this project, users can add popular movies and television shows to their bucket list.
  Users can also select from certain genres. The dashboard allows users to view which items
  they added and can delete items from their list.
</p>
<p>Add keys.js file to config folder with google client id, google client secret, and mlabs uri such as:</p>

```
module.exports = {
    googleClientID: '',
    googleClientSecret:'',
    mongoURI:''
}
```

<p>In root folder, run: </p>

```
npm install
```

<p>Then in client folder do the same</p>

```
cd client
npm install cd ..
```

<p>Then to start the site, in the root folder, run</p>

```
npm run dev
```

<h4>Api used in this project comes from themoviedb.org</h4>
